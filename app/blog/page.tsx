import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | AI Video Production Guides, Pricing & Strategy',
  description:
    'Explore Ruminate X guides on AI video production, pricing, agency comparisons, Calgary video production, and brand video strategy for high-intent buyers and modern marketing teams.',
  keywords: [
    'AI video production blog',
    'AI video production guides',
    'AI video production pricing',
    'AI video agency comparison',
    'video production Calgary blog',
    'brand video strategy guides',
  ],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const featuredResources = [
  {
    href: '/blog/how-much-does-video-production-cost-calgary',
    title: 'How Much Does Video Production Cost in Calgary?',
    description:
      'A local-intent pricing guide for Calgary businesses comparing agency costs, timelines, and realistic budget ranges.',
    type: 'Pricing Guide',
  },
  {
    href: '/blog/top-ai-video-agencies-2026',
    title: 'Top AI Video Agencies in 2026',
    description:
      'A commercial-investigation page for buyers comparing AI video agencies, positioning, and fit.',
    type: 'Agency Comparison',
  },
  {
    href: '/blog/best-video-production-companies-calgary',
    title: 'Best Video Production Companies in Calgary',
    description:
      'A shortlist-style article for Calgary buyers researching local production partners.',
    type: 'Local Comparison',
  },
  {
    href: '/blog/why-calgary-businesses-need-video-marketing',
    title: 'Why Calgary Businesses Need Video Marketing',
    description:
      'A strategy article for local brands evaluating where video fits in their growth plan.',
    type: 'Local Strategy',
  },
]

const commercialPages = [
  {
    href: '/ai-video-production-agencies',
    title: 'AI Video Production Agency',
    description: 'For brands comparing agency capabilities, process, speed, and creative range.',
  },
  {
    href: '/comparison/ai-agency-vs-traditional-agency',
    title: 'AI Agency vs Traditional Agency',
    description: 'For decision-makers weighing cost, speed, and production model tradeoffs.',
  },
  {
    href: '/comparison/freelance-vs-ai-video',
    title: 'Freelance Video vs AI Production',
    description: 'For buyers comparing solo talent against a structured AI production partner.',
  },
  {
    href: '/roi-calculator',
    title: 'Video Production ROI Calculator',
    description: 'For teams estimating savings and expected return before choosing a production path.',
  },
]

const guides = [
  {
    href: '/guides/how-to-create-explainer-videos-with-ai',
    title: 'How to Create Explainer Videos With AI',
    description: 'A practical guide for teams planning AI explainer workflows and scripts.',
  },
  {
    href: '/guides/video-marketing-strategy-ai',
    title: 'AI Video Marketing Strategy',
    description: 'A planning guide for brands building a modern video content engine.',
  },
  {
    href: '/guides/6-step-video-production-process',
    title: '6-Step Video Production Process',
    description: 'A process-focused guide for buyers who want clarity before starting.',
  },
  {
    href: '/guides/why-traditional-video-agencies-are-expensive',
    title: 'Why Traditional Video Agencies Are Expensive',
    description: 'A cost-education guide for teams trying to understand agency pricing.',
  },
]

const blogIndexSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ruminate X Blog',
  url: 'https://ruminatex.com/blog',
  description:
    'Guides, comparisons, pricing articles, and strategy resources about AI video production, Calgary video production, and brand storytelling.',
  hasPart: [
    ...featuredResources.map((item, index) => ({
      '@type': 'Article',
      position: index + 1,
      headline: item.title,
      url: `https://ruminatex.com${item.href}`,
    })),
    ...blogPosts.map((post, index) => ({
      '@type': 'Article',
      position: featuredResources.length + index + 1,
      headline: post.title,
      url: `https://ruminatex.com/blog/${post.slug}`,
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
          This is the resource hub for teams researching AI video production, comparing agency models,
          planning video campaigns, and pricing out the smartest way to produce brand content.
          If you&apos;re deciding between agencies, budgeting a campaign, or building a video strategy,
          start with the section that matches your search intent.
        </p>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-[#666666]">
          {['Pricing', 'Agency Comparisons', 'Calgary Video Production', 'Brand Strategy', 'AI Production Guides'].map((topic) => (
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
            <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Commercial Research Paths</p>
            <h2
              style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 84px)' }}
              className="text-white leading-none mb-6"
            >
              START WHERE
              <br />
              YOUR BUYING
              <br />
              QUESTION LIVES
            </h2>
            <p className="text-[#888888] text-lg leading-relaxed">
              Buyers rarely search in a straight line. Some start with agency research. Others need a cost
              comparison, a local Calgary option, or proof that AI is the right production model. These pages
              are the strongest next clicks for commercial-intent visitors.
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
              <h3 className="text-white text-2xl font-semibold mb-3">Calgary video production pages worth reviewing next</h3>
              <p className="text-sm text-[#888888] leading-relaxed mb-6">
                If your search is local rather than category-wide, these pages are the strongest next steps for Calgary and Alberta buyers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/video-production-calgary', label: 'Video Production Calgary' },
                  { href: '/best-video-production-company-calgary', label: 'Best Video Production Company Calgary' },
                  { href: '/affordable-video-production-calgary', label: 'Affordable Video Production Calgary' },
                  { href: '/calgary-video-production-packages', label: 'Calgary Video Production Packages' },
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
            If you&apos;ve done the research and want a production partner that moves fast without sacrificing taste,
            the next step is simple.
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
