import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.ruminatex.com/blog' },
  title: 'Blog: Guides to AI Films and Commercials',
  description:
    'Guides from Ruminate X, the AI film studio in Calgary: what AI video production costs, how to hire a studio, AI pharma commercials, brands that ran AI ads, and how an AI film gets made.',
  keywords: [
    'AI video production blog',
    'AI commercial guides',
    'AI video production cost',
    'AI pharma commercials',
    'video production Calgary',
  ],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const featuredResources = [
  {
    href: '/guides/ai-pharma-commercials',
    title: 'AI Pharma Commercials',
    description: 'Which drug and pharmacy ads were made with AI, the FDA rules that apply, and how Ruminate X makes AI pharma commercials.',
    type: 'Pharma',
  },
  {
    href: '/guides/brands-using-ai-commercials',
    title: 'AI Commercials by Big Brands',
    description: 'Coca-Cola, Kalshi, Svedka and the brands that faced backlash: what each AI commercial was, and how audiences took it.',
    type: 'Case Studies',
  },
  {
    href: '/blog/how-much-does-ai-video-production-cost',
    title: 'AI Video Production Cost',
    description: 'What AI video production costs for brands in 2026, how agencies price it, and what moves a Ruminate X quote.',
    type: 'Pricing',
  },
  {
    href: '/blog/top-ai-video-agencies-2026',
    title: 'Top AI Video Agencies in 2026',
    description: 'AI video agencies for ads, commercials and brand films. Published by Ruminate X, which lists itself first.',
    type: 'Agencies',
  },
  {
    href: '/best-video-production-company-calgary',
    title: 'Choosing a Video Production Company in Calgary',
    description: 'How to judge a Calgary video company, and what Ruminate X makes for Calgary brands.',
    type: 'Calgary',
  },
  {
    href: '/video-production-calgary',
    title: 'Video Production in Calgary',
    description: 'What a Calgary video costs, and why a generated film leaves the shoot lines off the quote.',
    type: 'Calgary',
  },
]

const commercialPages = [
  {
    href: '/ai-video-production-agencies',
    title: 'AI Video Production Agency',
    description: 'What an AI video production agency does, what to look for, and how Ruminate X works.',
  },
  {
    href: '/ai-commercial-production',
    title: 'AI Commercial Production',
    description: 'How Ruminate X makes an AI commercial, and everything it delivers with it.',
  },
  {
    href: '/comparison/ai-agency-vs-traditional-agency',
    title: 'AI Studio vs Traditional Production',
    description: 'When to hire an AI production partner instead of booking a shoot.',
  },
  {
    href: '/comparison/freelance-vs-ai-video',
    title: 'AI Effects or a VFX Freelancer',
    description: 'For a short brand video: a freelancer, a generator, or a studio that makes the whole film.',
  },
]

const guides = [
  {
    href: '/guides/video-production-brief',
    title: 'How to Brief a Video Production Company',
    description: 'A brief template, with the lines an AI-made film adds.',
  },
  {
    href: '/guides/ai-commercial-cost',
    title: 'AI Commercial Cost',
    description: 'An AI commercial against a filmed one, line by line.',
  },
  {
    href: '/guides/who-owns-ai-video',
    title: 'Who Owns an AI Video?',
    description: 'Copyright, and the contract clauses that decide what a brand owns.',
  },
  {
    href: '/how-we-make-an-ai-brand-film',
    title: 'How We Make an AI Brand Film',
    description: "Ruminate X's pipeline, from brief to delivery.",
  },
]

const blogIndexSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ruminate X Blog',
  url: 'https://www.ruminatex.com/blog',
  description:
    'Guides, comparisons, pricing articles, and strategy resources about AI video production, Calgary video production, and brand storytelling.',
  hasPart: [
    ...featuredResources.map((item, index) => ({
      '@type': 'Article',
      position: index + 1,
      headline: item.title,
      url: `https://www.ruminatex.com${item.href}`,
    })),
    ...blogPosts.map((post, index) => ({
      '@type': 'Article',
      position: featuredResources.length + index + 1,
      headline: post.title,
      url: `https://www.ruminatex.com/blog/${post.slug}`,
    })),
  ],
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexSchema) }}
      />

      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Insights</p>
        <h1
          style={{ ...displayStyle, fontSize: 'clamp(60px, 12vw, 150px)' }}
          className="text-white leading-none mb-6"
        >
          THE BLOG
        </h1>
        <p className="text-[#888888] text-lg max-w-3xl leading-relaxed mb-6">
          Guides from Ruminate X, the AI film studio in Calgary, for brand, marketing and comms leads planning an AI
          brand film or commercial: what it costs, how to hire a studio, how the film gets made, and what the brands
          that already ran AI ads learned. Start with{' '}
          <Link href="/blog/how-much-does-ai-video-production-cost">what AI video production costs</Link> or{' '}
          <Link href="/guides/ai-pharma-commercials">AI pharma commercials</Link>.
        </p>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-[#666666]">
          {['Pricing', 'Pharma & Medical', 'Hiring a Studio', 'Calgary', 'How It Gets Made'].map((topic) => (
            <span key={topic} className="border border-[#1a1a1a] px-3 py-2">
              {topic}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredResources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="group border border-[#1a1a1a] bg-[#0b0b0b] p-8 hover:border-[#ebff00]/40 hover:bg-[#101010] transition-colors"
            >
              <p className="text-[#ebff00] text-[11px] uppercase tracking-[0.25em] mb-4">{resource.type}</p>
              <h2 className="text-white text-2xl font-semibold leading-snug mb-3 group-hover:text-[#ebff00] transition-colors">
                {resource.title}
              </h2>
              <p className="text-sm text-[#888888] leading-relaxed">{resource.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] bg-[#050505] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Hiring a Studio</p>
            <h2
              style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 84px)' }}
              className="text-white leading-none mb-6"
            >
              HIRING AN
              <br />
              AI STUDIO?
            </h2>
            <p className="text-[#888888] text-lg leading-relaxed">
              What an AI video production agency does, what an AI commercial includes, and when an AI film beats a
              shoot, with how Ruminate X handles each.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {commercialPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="border border-[#1a1a1a] bg-[#080808] p-6 hover:border-[#ebff00]/40 hover:bg-[#0b0b0b] transition-colors"
              >
                <h3 className="text-white font-semibold mb-3">{page.title}</h3>
                <p className="text-sm text-[#888888] leading-relaxed">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Latest Articles</p>
            <div className="divide-y divide-[#1a1a1a]">
              {blogPosts.map((post) => (
                <article key={post.slug} className="group py-8">
                  <Link href={`/blog/${post.slug}`} className="block">
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
                    <p className="text-[#888888] text-sm leading-relaxed max-w-2xl">{post.excerpt}</p>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Planning Guides</p>
            <div className="grid grid-cols-1 gap-4">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="border border-[#1a1a1a] p-6 hover:border-[#ebff00]/40 hover:bg-[#0b0b0b] transition-colors"
                >
                  <h3 className="text-white font-semibold mb-2">{guide.title}</h3>
                  <p className="text-sm text-[#888888] leading-relaxed">{guide.description}</p>
                </Link>
              ))}
            </div>

            <div className="mt-10 border border-[#1a1a1a] bg-[#050505] p-8">
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Need a Local Starting Point?</p>
              <h3 className="text-white text-2xl font-semibold mb-3">Ruminate X is a Calgary studio</h3>
              <p className="text-sm text-[#888888] leading-relaxed mb-6">
                Brand films and commercials for Calgary and Alberta brands, made without a shoot.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/video-production-calgary', label: 'Video production in Calgary' },
                  { href: '/best-video-production-company-calgary', label: 'Choosing a Calgary video company' },
                  { href: '/brand-film-production-calgary', label: 'Brand films in Calgary' },
                  { href: '/commercial-video-production-calgary', label: 'Commercials in Calgary' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border border-[#1a1a1a] px-4 py-3 text-sm text-[#888888] hover:text-white hover:border-[#ebff00]/40 transition-colors"
                  >
                    → {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }}
            className="text-white leading-none mb-6"
          >
            READY TO CREATE?
          </h2>
          <p className="text-[#888888] mb-8">
            Send Ruminate X the brief: what the film has to do, who has to see it, where it runs and when.
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
