import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | AI Video Production Insights & Industry Guides',
  description:
    'Insights, guides, and industry analysis on AI video production for brands — from e-commerce and fashion to enterprise and startups.',
  keywords: [
    'AI video production blog',
    'brand video production insights',
    'AI creative content guide',
    'AI vs traditional video production',
  ],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Insights</p>
        <h1
          style={{ ...displayStyle, fontSize: 'clamp(60px, 12vw, 150px)' }}
          className="text-white leading-none mb-6"
        >
          THE BLOG
        </h1>
        <p className="text-[#888888] text-lg max-w-xl">
          Industry insights, brand strategy, and everything you need to know about AI video production.
        </p>
      </section>

      {/* Posts */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="divide-y divide-[#1a1a1a]">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group py-10">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#ebff00] border border-[#ebff00]/30 px-3 py-1">
                        {post.category}
                      </span>
                      <span className="text-xs text-[#666666]">{post.readTime}</span>
                    </div>
                    <h2
                      className="text-white group-hover:text-[#ebff00] transition-colors mb-3 leading-tight"
                      style={{ ...displayStyle, fontSize: 'clamp(24px, 3vw, 36px)' }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-[#888888] text-sm leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="md:flex-shrink-0 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#666666] group-hover:text-[#ebff00] transition-colors mt-4 md:mt-0">
                    Read
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }}
            className="text-white leading-none mb-6"
          >
            READY TO CREATE?
          </h2>
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
