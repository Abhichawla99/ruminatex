#!/usr/bin/env node
/**
 * Blocks unsupported claims and AI-slop wording from reaching the site.
 *
 *   node scripts/claims-check.mjs              # lines added since origin/main, plus new untracked files
 *   node scripts/claims-check.mjs <base-ref>   # compare against another ref
 *
 * Scans only what changed, in app/, components/, lib/ and the llms files, so
 * old pages do not block a run. A claim about Ruminate X is allowed when the
 * matched text appears in lib/seo/facts.ts (that is, Abhi confirmed it). A line
 * containing "claims-ok" is skipped; name the source on that line, e.g.
 * {/* claims-ok: <named source, linked in the copy> *\/}.
 * Exits 1 when anything is found.
 */
import { execSync } from 'node:child_process'
import { readFileSync, existsSync } from 'node:fs'

const base = process.argv[2] || 'origin/main'
const SCOPE = ['app', 'components', 'lib', 'public/llms.txt', 'public/llms-full.txt']
const FACTS_FILE = 'lib/seo/facts.ts'
const facts = existsSync(FACTS_FILE) ? readFileSync(FACTS_FILE, 'utf8').toLowerCase() : ''

const CLAIMS = [
  ['superlative', /top[- ]rated/i],
  ['superlative', /\b(?:the|a|calgary'?s) leading\b/i],
  ['superlative', /\bleading (?:ai |video |creative |production |brand )*(?:agency|agencies|studio|company|provider)\b/i],
  ['superlative', /#1(?![0-9a-f])/i],
  ['superlative', /\bnumber one\b/i],
  ['superlative', /award[- ]winning/i],
  ['unproven multiplier', /\b\d+\s?[x×]\s(?:faster|cheaper|more affordable|less)/i],
  ['unproven saving', /\b\d{2}(?:\s?[–-]\s?\d{2})?% (?:cheaper|less|lower|savings?|cost savings?)\b/i],
  ['unconfirmed promise', /unlimited revisions/i],
  ['unconfirmed promise', /\b\d{2,3}\+?\s*languages\b/i],
  ['unconfirmed turnaround', /\b(?:24\s*(?:–|-|to)\s*)?48[\s-]?(?:hours?|hrs?)\b/i],
  ['unconfirmed price', /(?:starting at|starts at|from|as low as|only)\s*\$\s?\d/i],
  ['unconfirmed price', /\$\s?500\b|\$\s?3,000\b/],
  ['unproven client claim', /fortune 500|\bLVMH\b/i],
  ['unsourced stat', /\b2\.3\s?x\b|4 days faster/i],
]

const SLOP = /\b(delv(?:e|es|ed|ing)|foster(?:s|ed|ing)?|leverag(?:e|es|ed|ing)|utiliz(?:e|es|ed|ing|ation)|facilitat(?:e|es|ed|ing)|empower(?:s|ed|ing|ment)?|streamlin(?:e|es|ed|ing)|robust|cutting-edge|paradigm shift|game[- ]changer|tapestry|realm|beacon|multifaceted|meticulous(?:ly)?|intricate|paramount|transformative|elevat(?:e|es|ed|ing)|embark(?:s|ed|ing)?|supercharg(?:e|es|ed|ing)|harness(?:es|ed|ing)?|ever-evolving)\b/i

const sh = (cmd) => execSync(cmd, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })

/** file -> [{ line, text }] of added lines */
const added = new Map()
const push = (file, line, text) => {
  if (!added.has(file)) added.set(file, [])
  added.get(file).push({ line, text })
}

const diff = sh(`git diff -U0 --no-color ${base} -- ${SCOPE.join(' ')}`)
let file = null
let next = 0
for (const raw of diff.split('\n')) {
  if (raw.startsWith('+++ ')) {
    file = raw.startsWith('+++ b/') ? raw.slice(6) : null
    continue
  }
  const hunk = raw.match(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@/)
  if (hunk) {
    next = Number(hunk[1])
    continue
  }
  if (file && raw.startsWith('+')) push(file, next++, raw.slice(1))
}

const untracked = sh(`git ls-files --others --exclude-standard -- ${SCOPE.join(' ')}`).split('\n').filter(Boolean)
for (const f of untracked) readFileSync(f, 'utf8').split('\n').forEach((text, i) => push(f, i + 1, text))

const problems = []
for (const [f, lines] of added) {
  if (f === FACTS_FILE) continue
  const isCopy = f.startsWith('app/') || f.startsWith('public/')
  let dashes = 0
  for (const { line, text } of lines) {
    if (text.includes('claims-ok')) continue
    for (const [rule, re] of CLAIMS) {
      const m = text.match(re)
      if (m && !facts.includes(m[0].toLowerCase())) problems.push(`${f}:${line}  ${rule}  "${m[0]}"`)
    }
    const slop = text.match(SLOP)
    if (slop) problems.push(`${f}:${line}  banned word  "${slop[0]}"`)
    if (isCopy) dashes += (text.match(/—/g) || []).length
  }
  if (dashes > 2) problems.push(`${f}  ${dashes} em dashes added (2 at most per page)`)
}

const lineCount = [...added.values()].reduce((n, l) => n + l.length, 0)
if (problems.length) {
  console.log(`claims-check: ${problems.length} problem(s) in ${lineCount} added lines against ${base}\n`)
  for (const p of problems) console.log(`  ${p}`)
  console.log('\nFix the copy, move a confirmed fact into lib/seo/facts.ts, or cite a named source and mark the line claims-ok.')
  process.exit(1)
}
console.log(`claims-check: clean (${added.size} files, ${lineCount} added lines against ${base})`)
