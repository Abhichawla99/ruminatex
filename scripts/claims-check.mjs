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
 * Since 2026-10-28 it also fails on another company's name (COMPETITORS) and on
 * an external link outside ALLOWED_LINK_DOMAINS, in page copy and the llms files.
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

/**
 * Abhi, 2026-10-28: pages never name, link, price or tabulate another company that
 * sells what Ruminate X sells, or a way around hiring it. These are the ones the
 * site used to list. A generator (Runway, Veo, Kling, Sora) may still be named,
 * unlinked, where a page's subject needs it, so generators are not on this list;
 * the link allowlist below keeps them unlinked.
 */
const COMPETITORS = /\b(?:synima|45ai|wobbleman|superside|crossroad ?media|cinemaai|maw (?:ai|motion)|mawaistudios|aicandy|serge ?vane|framesmiths|creatify|collabstr|admiral ?media|inbeat|ugc factory|heygen|synthesia|colossyan|arcads|invideo|advids|lemonlight|daydrm|goat studios|genre\.ai|animatic ?media|pixune|versely|argus ?hd|argushd|dreamachine|contenaissance|kreativiz|gen ?art studios|studioverse|arcanewiz|ai25|hoopla(?: agency|\.agency)|microverse|cdi studio|voka|flearning|f\. learning studio|vidpros|knowlify|leadde|351 ?studio|vidico|d-?mak productions|dmakproductions|private island|gisteo|awesomic|unreal media|hardlaunch|social operator|blare ?media|maven ?media|calgary ?videographer|day ?one ?media|community productions|studio ?spero|fifteenth meridian|video ?kings|uu digital|valiant digital|secret level|tiger house|myth labs|sadara|upwork|fiverr|clutch(?:\.co| profile| reviews?)|designrush|goodfirms|sortlist)\b/i

/**
 * Outbound links go only to sources that build trust and sell nothing Ruminate X
 * sells: our own properties, regulators, laws and courts, platform policy and spec
 * pages, unions and standards bodies, studies, and news or trade outlets for a fact
 * about a named ad. Add a domain only with a comment saying which kind it is.
 */
const ALLOWED_LINK_DOMAINS = [
  // Ruminate X and Abhi's own properties
  'ruminatex.com', '100creatives.com', 'aifilmcontests.com', 'overs.studio', 'instagram.com',
  // video embeds, thumbnails, schema vocabulary
  'youtube.com', 'youtube-nocookie.com', 'youtu.be', 'schema.org',
  // laws, regulators, courts and standards bodies outside .gov
  'law.cornell.edu', 'finra.org', 'palegis.us', 'adstandards.ca', 'paab.ca', 'asa.org.uk', 'cippic.ca', 'sagaftra.org', 'aicp.com', 'atsc.org', 'tech.ebu.ch', 'iab.com',
  // platform policy, help and ad-spec pages
  'support.google.com', 'blog.google', 'transparency.meta.com', 'facebook.com', 'about.fb.com', 'meta.com', 'tiktok.com', 'advertising.amazon.com',
  // studies, wage data, law firms and payroll data cited for one fact each
  'news.gallup.com', 'nielseniq.com', 'niq.com', 'ide.mit.edu', 'mitsloan.mit.edu', 'mynextmove.org', 'wrapbook.com', 'dlapiper.com', 'cooley.com',
  // news and trade outlets
  'nbcnews.com', 'adweek.com', 'adage.com', 'hollywoodreporter.com', 'engadget.com', 'yahoo.com', 'forbes.com', 'mashable.com', 'npr.org', 'reuters.com', 'apnews.com', 'nytimes.com', 'wsj.com', 'bloomberg.com', 'cnn.com', 'cnbc.com', 'bbc.com', 'bbc.co.uk', 'theverge.com', 'techcrunch.com', 'businessinsider.com', 'washingtonpost.com', 'theguardian.com', 'variety.com', 'fastcompany.com', 'axios.com', 'semafor.com', 'fiercepharma.com', 'mediapost.com', 'ajmc.com', 'pharmexec.com', 'statnews.com', 'marketingdive.com', 'campaignlive.com', 'campaignlive.co.uk', 'thedrum.com', 'marketingweek.com', 'mashed.com', 'ispot.tv', 'prnewswire.com', 'businesswire.com',
  // local and independent news, newsletters and academic news
  'abc7news.com', 'popville.com', 'readfeedme.com', 'theconversation.com', 'startups.co.uk', 'mmm-online.com',
  // trade bodies and law firms cited for one rule or policy each
  'phrma.org', 'loeb.com',
  // brands' and drug makers' own newsrooms and policies, for what a company said about its own ads
  'company.trivago.com', 'progressive.mediaroom.com', 'coca-colacompany.com', 'merck.com',
]
const ALLOWED_LINK_SUFFIXES = ['.gov', '.gov.uk', '.gc.ca', 'canada.ca', '.gouv.qc.ca', 'europa.eu', '.edu']

/**
 * The one list page that ranks for "best ai-generated video ad agencies" keeps a list
 * to keep that ranking: Ruminate X first, then up to six others by name only, no links
 * or prices (PLAYBOOK, "The rule above every other rule", item 8). Names pass there;
 * links never do.
 */
const LIST_PAGES = new Set(['app/blog/top-ai-video-agencies-2026/page.tsx'])

function linkAllowed(url) {
  let host
  try {
    host = new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return true
  }
  if (ALLOWED_LINK_SUFFIXES.some((s) => host === s.replace(/^\./, '') || host.endsWith(s))) return true
  return ALLOWED_LINK_DOMAINS.some((d) => host === d || host.endsWith(`.${d}`))
}

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
    // A claims-ok note can vouch for a sourced number. It cannot vouch for a rival's name or link.
    if (isCopy) {
      const rival = LIST_PAGES.has(f) ? null : text.match(COMPETITORS)
      if (rival) problems.push(`${f}:${line}  names another company  "${rival[0]}"`)
      for (const url of text.match(/https?:\/\/[^\s"'`<>)}\]]+/g) || []) {
        if (!linkAllowed(url)) problems.push(`${f}:${line}  external link outside the allowlist  "${url}"`)
      }
      dashes += (text.match(/—/g) || []).length
    }
    if (text.includes('claims-ok')) continue
    for (const [rule, re] of CLAIMS) {
      const m = text.match(re)
      if (m && !facts.includes(m[0].toLowerCase())) problems.push(`${f}:${line}  ${rule}  "${m[0]}"`)
    }
    const slop = text.match(SLOP)
    if (slop) problems.push(`${f}:${line}  banned word  "${slop[0]}"`)
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
