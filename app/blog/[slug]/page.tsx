import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts, getBlogPost } from '@/lib/blog'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: `${post.title} | Ruminate X Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

// Simple markdown-to-HTML renderer for blog content
function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()

    if (!line) {
      i++
      continue
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2
          key={i}
          style={{ ...displayStyle, fontSize: 'clamp(28px, 4vw, 48px)' }}
          className="text-white leading-none mt-12 mb-6"
        >
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3
          key={i}
          style={{ ...displayStyle, fontSize: 'clamp(22px, 3vw, 32px)' }}
          className="text-[#ebff00] leading-none mt-8 mb-4"
        >
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('| ')) {
      // Table — collect all table rows
      const tableLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim())
        i++
      }
      const rows = tableLines.filter((l) => !l.replace(/\|/g, '').replace(/-/g, '').trim() === false || !l.match(/^[\s|-]+$/))
      const dataRows = rows.filter((r) => !r.match(/^\|[\s-|]+\|$/))
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-8">
          <table className="w-full border-collapse text-sm">
            {dataRows.map((row, ri) => {
              const cells = row.split('|').filter((c) => c.trim())
              return ri === 0 ? (
                <thead key={ri}>
                  <tr>
                    {cells.map((cell, ci) => (
                      <th key={ci} className="text-left text-xs uppercase tracking-[0.2em] text-[#ebff00] border-b border-[#1a1a1a] pb-3 pr-6">
                        {cell.trim()}
                      </th>
                    ))}
                  </tr>
                </thead>
              ) : (
                <tbody key={ri}>
                  <tr>
                    {cells.map((cell, ci) => (
                      <td key={ci} className="text-[#888888] border-b border-[#111111] py-3 pr-6">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                </tbody>
              )
            })}
          </table>
        </div>
      )
      continue
    } else if (line.startsWith('- **')) {
      // Bold bullet
      const match = line.match(/^- \*\*(.+?)\*\*(.*)$/)
      if (match) {
        elements.push(
          <div key={i} className="flex gap-3 mb-3">
            <span className="w-1 h-1 bg-[#ebff00] rounded-full flex-shrink-0 mt-2.5" />
            <p className="text-[#888888] text-base leading-relaxed">
              <strong className="text-white">{match[1]}</strong>
              {match[2]}
            </p>
          </div>
        )
      }
    } else if (line.startsWith('- ')) {
      elements.push(
        <div key={i} className="flex gap-3 mb-3">
          <span className="w-1 h-1 bg-[#ebff00] rounded-full flex-shrink-0 mt-2.5" />
          <p className="text-[#888888] text-base leading-relaxed">{line.slice(2)}</p>
        </div>
      )
    } else if (line.startsWith('[')) {
      // Link line like [See our work](/work)
      const match = line.match(/^\[(.+?)\]\((.+?)\)$/)
      if (match) {
        elements.push(
          <Link
            key={i}
            href={match[2]}
            className="inline-flex items-center gap-2 text-[#ebff00] text-sm uppercase tracking-[0.2em] hover:text-white transition-colors mt-4"
          >
            {match[1]}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        )
      }
    } else {
      // Regular paragraph — handle inline bold
      const parts = line.split(/\*\*(.+?)\*\*/)
      elements.push(
        <p key={i} className="text-[#888888] text-base leading-relaxed mb-4">
          {parts.map((part, pi) =>
            pi % 2 === 1 ? <strong key={pi} className="text-white">{part}</strong> : part
          )}
        </p>
      )
    }

    i++
  }

  return elements
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Ruminate X',
      url: 'https://ruminatex.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ruminate X',
      url: 'https://ruminatex.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="pt-40 pb-16 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#666666] hover:text-[#ebff00] transition-colors mb-6"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            All Posts
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#ebff00] border border-[#ebff00]/30 px-3 py-1">
            {post.category}
          </span>
          <span className="text-xs text-[#666666]">{post.readTime}</span>
          <span className="text-xs text-[#666666]">{post.date}</span>
        </div>

        <h1
          style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 72px)' }}
          className="text-white leading-tight mb-6"
        >
          {post.title}
        </h1>
        <p className="text-[#888888] text-xl leading-relaxed">{post.excerpt}</p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 pb-24 border-t border-[#1a1a1a] pt-12">
        <div className="prose-custom">
          {renderContent(post.content)}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center bg-[#050505]">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }}
            className="text-white leading-none mb-6"
          >
            READY TO CREATE<br />
            <span style={{ color: '#ebff00' }}>THE IMPOSSIBLE?</span>
          </h2>
          <p className="text-[#888888] mb-8">
            Tell us your brand, your vision, your wildest idea. We&apos;ll make it real.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  )
}
