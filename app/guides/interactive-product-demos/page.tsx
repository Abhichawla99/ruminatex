import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Interactive Product Demo Videos for SaaS: Convert More Demos | Ruminate X',
  description: 'Create interactive product demo videos that increase conversion 2.3x. Reduce demo request friction.',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Guides / Interactive Demos</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          DEMOS THAT<br />DON'T JUST SHOW.<br /><span style={{ color: '#ebff00' }}>THEY CONVERT.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          Interactive video demos increase conversion 2.3x and reduce support burden by 40%. Create feature-specific demos for different use cases. Stop passive watching. Start active buying.
        </p>
      </section>

      {/* Why Interactive Converts */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Conversion Gap</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            INTERACTIVE VS. STATIC
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#1a1a1a]">
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-6">Interactive Demos</h3>
              <div className="space-y-4">
                {[
                  ['2.3x higher conversion', 'Viewers move from watching to requesting'],
                  ['Clickable CTAs mid-video', 'Capture intent at the moment it peaks'],
                  ['Multiple workflow paths', 'Show different features for different audiences'],
                  ['Active engagement', 'Viewers participate, not just observe'],
                  ['Lower support burden', '40% fewer support tickets for shown features'],
                ].map(([bold, detail]) => (
                  <div key={bold} className="flex gap-4 border-b border-[#1a1a1a] pb-4">
                    <span className="text-[#ebff00] font-bold text-sm mt-1">+</span>
                    <div>
                      <p className="text-white font-bold text-sm">{bold}</p>
                      <p className="text-[#666666] text-xs mt-1">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-6">Static Product Videos</h3>
              <div className="space-y-4">
                {[
                  ['Passive viewing only', 'No action until the video ends — if they finish it'],
                  ['No mid-video engagement', 'Missed intent signals and conversion moments'],
                  ['One demo angle', 'Same content for every prospect regardless of role'],
                  ['Linear experience', 'No choice. No personalization. No relevance signal.'],
                  ['Standard conversion', 'No differentiated performance vs. competitors'],
                ].map(([bold, detail]) => (
                  <div key={bold} className="flex gap-4 border-b border-[#1a1a1a] pb-4">
                    <span className="text-[#333333] font-bold text-sm mt-1">—</span>
                    <div>
                      <p className="text-[#888888] text-sm">{bold}</p>
                      <p className="text-[#666666] text-xs mt-1">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Interactive Demos */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Demo Types</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            FIVE DEMOS TO CREATE
          </h2>
          <div className="space-y-0">
            {[
              {
                number: '01',
                title: 'Feature Highlight Demos',
                body: 'Deep dive into a specific feature. Show exactly how it works, who benefits, and what outcome it drives. Deploy on feature announcement pages and update emails.',
                when: 'Product launches, feature updates, email campaigns',
              },
              {
                number: '02',
                title: 'Use-Case Demos',
                body: 'Show how your product solves a specific pain point for a specific audience. A retail buyer and a healthcare operator need to see different things — give them both.',
                when: 'Industry pages, ABM campaigns, sales outreach',
              },
              {
                number: '03',
                title: 'Comparison Demos',
                body: 'Show your product directly against the alternative. Not just "we\'re better" — show specifically where and why. The best comparison demos address the objection before the prospect raises it.',
                when: 'Competitive landing pages, bottom-of-funnel content',
              },
              {
                number: '04',
                title: 'Onboarding Demos',
                body: 'Help new users get started without reading documentation. Reduce time-to-value. Increase activation. Reduce early churn.',
                when: 'Post-signup emails, in-app onboarding sequences',
              },
              {
                number: '05',
                title: 'Workflow Demos',
                body: 'Show a complete end-to-end workflow from first click to final outcome. Best for complex products where the value only becomes clear once you see the whole picture.',
                when: 'Sales calls, enterprise demos, complex deal support',
              },
            ].map(({ number, title, body, when }) => (
              <div key={number} className="border-t border-[#1a1a1a] py-10 grid grid-cols-1 md:grid-cols-[100px_1fr_200px] gap-8 items-start">
                <span style={{ ...displayStyle, fontSize: '60px' }} className="text-[#333333] leading-none">{number}</span>
                <div>
                  <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
                  <p className="text-[#888888]">{body}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-2">Best Used For</p>
                  <p className="text-[#666666] text-sm">{when}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">How We Build Them</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            SCRIPT TO INTERACTIVE DEMO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
            {[
              { step: '01', action: 'Brief the Demo', detail: 'Define the use case, the audience, and the single conversion goal. One demo, one job.' },
              { step: '02', action: 'Generate the Video', detail: 'AI creates the product walkthrough with narration, on-screen actions, and branded visuals.' },
              { step: '03', action: 'Add Interactivity', detail: 'Insert clickable CTAs, branching paths, and engagement touchpoints at peak-intent moments.' },
            ].map(({ step, action, detail }) => (
              <div key={step} className="bg-[#080808] p-8">
                <span style={{ ...displayStyle, fontSize: '60px' }} className="text-[#333333] leading-none block mb-4">{step}</span>
                <h3 className="text-white font-bold mb-3">{action}</h3>
                <p className="text-[#666666] text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            MORE DEMOS.<br /><span style={{ color: '#ebff00' }}>MORE CLOSES.</span>
          </h2>
          <p className="text-[#888888] mb-10">Interactive demo videos increase conversion 2.3x. Start building yours today.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Create Interactive Demo
          </Link>
        </div>
      </section>
    </>
  )
}
