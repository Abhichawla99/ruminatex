import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Production for E-Commerce & DTC Brands | Ruminate X',
  description:
    "Scale your e-commerce brand's video content with AI-powered cinematic production. Brand films, product videos, social content, and ad campaigns — at 70% lower cost than traditional agencies.",
  keywords: [
    'AI video production for ecommerce brands',
    'AI video for DTC brands',
    'ecommerce brand video production',
    'AI video agency for ecommerce',
    'DTC brand video production',
    'AI product video creation',
    'social media video production ecommerce',
  ],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const useCases = [
  {
    title: 'Brand Films',
    desc: 'Cinematic brand stories that communicate who you are — not just what you sell. The video that converts browsers into believers.',
  },
  {
    title: 'Product Launch Videos',
    desc: 'Launch campaigns that create moments. Hero films, teaser content, and the full creative arc for product debuts.',
  },
  {
    title: 'Ad Creative at Scale',
    desc: 'Multiple creative variations, different cuts, A/B test versions — produced simultaneously at a fraction of traditional cost.',
  },
  {
    title: 'Social Content Engine',
    desc: 'High-volume, studio-quality content for every platform. Reels, TikTok, YouTube Shorts — consistently, week over week.',
  },
  {
    title: 'Lifestyle & Aspirational',
    desc: 'Your product in any environment, any aesthetic. AI enables locations and visuals no traditional shoot could achieve.',
  },
  {
    title: 'Seasonal Campaigns',
    desc: 'Full campaign suites for key moments — holiday, summer, new collection. Complete creative packages in weeks, not months.',
  },
]

export default function EcommercePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">E-Commerce & DTC</span>
          </div>
          <h1
            style={{ ...displayStyle, fontSize: 'clamp(52px, 11vw, 150px)' }}
            className="text-white leading-none mb-8 max-w-5xl"
          >
            AI VIDEO<br />PRODUCTION FOR<br />
            <span style={{ color: '#ebff00' }}>E-COMMERCE<br />BRANDS</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-xl mb-12 leading-relaxed">
            Scale your video content without scaling your budget. Studio-quality brand films,
            product videos, and social content — at 70% lower cost than traditional agencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '70%', label: 'Cost savings vs. traditional agencies' },
              { stat: '2–3 wks', label: 'From brief to delivery' },
              { stat: '∞', label: 'Creative possibilities' },
              { stat: '10×', label: 'More content per budget' },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <p style={{ ...displayStyle, fontSize: 'clamp(32px, 4vw, 52px)', color: '#ebff00' }}>{stat}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-[#666666] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What We Create</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">
          VIDEO FOR EVERY<br />STAGE OF GROWTH
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map(({ title, desc }) => (
            <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Advantage</p>
              <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-8">
                WHY E-COMMERCE<br />BRANDS CHOOSE<br />AI PRODUCTION
              </h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  title: 'Volume Without Compromise',
                  body: "The modern e-commerce brand needs more content than any traditional agency can sustainably produce. AI enables the volume your channels demand without sacrificing the quality your brand requires.",
                },
                {
                  title: 'Speed to Market',
                  body: 'Launch week is not a good time to be waiting on post-production. Our 2–3 week delivery timeline means you always have campaign content ready when you need it.',
                },
                {
                  title: 'Creative Without Limits',
                  body: "Traditional production is constrained by physical reality. AI production isn't. Any environment. Any visual. Any concept. If you can describe it, we can create it.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="border-l-2 border-[#ebff00]/30 pl-6">
                  <h3 className="text-white font-bold mb-2 uppercase tracking-wide text-sm">{title}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog link */}
      <section className="border-t border-[#1a1a1a] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#888888] text-sm mb-4">Want to learn more?</p>
          <Link
            href="/blog/ai-video-production-ecommerce-brands-guide"
            className="inline-flex items-center gap-2 text-[#ebff00] hover:text-white transition-colors text-lg font-medium"
          >
            Read: AI Video Production for E-Commerce Brands — The Complete Guide
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-6">
            YOUR BRAND.<br />
            <span style={{ color: '#ebff00' }}>CINEMATIC QUALITY.<br />HALF THE COST.</span>
          </h2>
          <p className="text-[#888888] mb-8">
            Tell us about your brand and what you want to create. We&apos;ll show you what&apos;s possible.
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
