import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Production for Enterprise & Fortune 500 Brands | Ruminate X',
  description:
    'Enterprise-grade AI video production for Fortune 500 brands and large organizations. Cinematic brand films, campaign content, and internal communications — at scale.',
  keywords: [
    'AI video production for enterprise',
    'Fortune 500 video production AI',
    'enterprise brand video production',
    'AI commercial production enterprise',
    'large brand video agency AI',
    'AI video production corporate',
  ],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function EnterprisePage() {
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
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">Enterprise & Fortune 500</span>
          </div>
          <h1
            style={{ ...displayStyle, fontSize: 'clamp(52px, 11vw, 150px)' }}
            className="text-white leading-none mb-8 max-w-5xl"
          >
            AI VIDEO FOR<br />
            <span style={{ color: '#ebff00' }}>ENTERPRISE<br />BRANDS</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-xl mb-12 leading-relaxed">
            Enterprise-grade quality. AI speed and flexibility. Cinematic brand content that
            scales across global markets without the overhead of traditional large-agency
            relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors"
            >
              Start a Conversation
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

      {/* Services for enterprise */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Enterprise Services</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">
          PRODUCTION AT<br />ENTERPRISE SCALE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Global Campaign Production', desc: 'Campaign content that works across markets, cultures, and channels. AI enables multiple market variations without multiple production budgets.' },
            { title: 'Brand & Corporate Films', desc: 'The definitive story of your organization — annual reports that move, brand films for investors and employees, mission and vision content.' },
            { title: 'Product Launch Campaigns', desc: 'Enterprise product launches demand enterprise-level creative. Full campaign suites from teaser to hero film to social content, coordinated and consistent.' },
            { title: 'Internal Communications', desc: 'Leadership communications, training content, and internal brand campaigns that actually engage employees — not slide decks with voice-over.' },
            { title: 'Trade & Conference Content', desc: 'Content for Davos, CES, industry conferences, and shareholder meetings. Material that represents your brand at the highest level.' },
            { title: 'Content at Scale', desc: 'Need 50 videos across multiple markets and languages? AI production makes high-volume, high-consistency production economically viable.' },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us for enterprise */}
      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Advantage</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-12">
            ENTERPRISE QUALITY.<br />WITHOUT ENTERPRISE<br />OVERHEAD.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: '70%',
                title: 'Cost Reduction',
                body: 'Compared to traditional large agency relationships, AI production delivers equivalent creative quality at dramatically lower cost.',
              },
              {
                stat: '3×',
                title: 'Faster Delivery',
                body: 'Enterprise timelines are tight. Our 2–3 week delivery model means content is ready when campaigns need it — not when agencies deliver it.',
              },
              {
                stat: '∞',
                title: 'Market Variations',
                body: 'Adapt the same campaign for different markets, audiences, and languages without duplicating production budgets.',
              },
            ].map(({ stat, title, body }) => (
              <div key={title} className="border border-[#1a1a1a] p-8">
                <p style={{ ...displayStyle, fontSize: '52px', color: '#ebff00' }}>{stat}</p>
                <h3 className="text-white font-bold uppercase tracking-wide mb-3 mt-2 text-sm">{title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-6">
            LET&apos;S DISCUSS<br />YOUR BRAND&apos;S<br />
            <span style={{ color: '#ebff00' }}>NEXT CAMPAIGN.</span>
          </h2>
          <p className="text-[#888888] mb-8">
            We work with enterprise brands globally. Start the conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
