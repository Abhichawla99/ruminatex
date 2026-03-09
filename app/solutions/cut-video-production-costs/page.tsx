import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cut Video Production Costs by 80% While Improving Quality | Ruminate X',
  description: 'Reduce video production costs from $5K–$50K to $500–$3K per video using AI. Save 80% while maintaining broadcast quality.',
  openGraph: {
    title: 'Cut Video Production Costs by 80% | Ruminate X',
    description: 'AI video production costs 80% less than traditional methods while improving quality.',
  },
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Solutions / Cost Reduction</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          CUT COSTS BY 80%.<br /><span style={{ color: '#ebff00' }}>NOT QUALITY.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          Traditional production costs $5K–$50K per video. AI delivers broadcast quality for $500–$3K. The math isn't complicated. The decision shouldn't be either.
        </p>
      </section>

      {/* Cost Breakdown Table */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Numbers</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-12">
            TRADITIONAL VS. AI: LINE BY LINE
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#1a1a1a]">
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4 pr-8">Cost Component</th>
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4 pr-8">Traditional Agency</th>
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4 pr-8">AI Production</th>
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4">Savings</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Director & Creative', '$2,000–$5,000', 'Included in platform', '$2,000–$5,000'],
                  ['Cinematographer & Camera Crew', '$3,000–$10,000', '$0', '$3,000–$10,000'],
                  ['Equipment & Location Rental', '$2,000–$8,000', '$0', '$2,000–$8,000'],
                  ['Post-Production & Editing', '$1,500–$5,000', 'Included in platform', '$1,500–$5,000'],
                  ['Sound & Music', '$500–$2,000', '$100–$500', 'Up to $1,500'],
                ].map(([component, trad, ai, savings]) => (
                  <tr key={component} className="border-b border-[#1a1a1a]">
                    <td className="py-5 pr-8 text-white">{component}</td>
                    <td className="py-5 pr-8 text-[#888888]">{trad}</td>
                    <td className="py-5 pr-8 text-[#888888]">{ai}</td>
                    <td className="py-5 text-[#ebff00] font-bold">{savings}</td>
                  </tr>
                ))}
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-5 pr-8 text-white font-bold">Total per Video</td>
                  <td className="py-5 pr-8 text-[#888888] font-bold">$9,000–$30,000</td>
                  <td className="py-5 pr-8 text-[#888888] font-bold">$500–$1,500</td>
                  <td className="py-5 text-[#ebff00] font-bold">85–95% Savings</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 border border-[#1a1a1a] p-8">
            <p className="text-[#888888]">
              <span className="text-white font-bold">Bottom line:</span> A single AI video platform costs $30–$100/month for unlimited video generation. Traditional agencies charge $5K–$50K per video. ROI breaks even after one or two videos.
            </p>
          </div>
        </div>
      </section>

      {/* Where Savings Come From */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Breakdown</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            WHERE THE 80% COMES FROM
          </h2>
          <div className="space-y-0">
            {[
              {
                number: '01',
                title: 'No Crew Costs',
                body: 'AI eliminates the need for directors, cinematographers, camera operators, sound engineers, and gaffers. One person manages the entire workflow.',
                savings: '$5,000–$15,000 per video',
              },
              {
                number: '02',
                title: 'Zero Equipment & Location Costs',
                body: 'No camera rental, studio fees, lighting rigs, or location scouting. Create professional video from any device, anywhere.',
                savings: '$2,000–$8,000 per video',
              },
              {
                number: '03',
                title: 'Instant Post-Production',
                body: 'AI handles editing, color grading, transitions, and effects automatically. No weeks of post-production labor.',
                savings: '$1,500–$5,000 per video',
              },
              {
                number: '04',
                title: 'AI Voiceovers Replace Voice Actors',
                body: 'Professional AI voiceovers in 140+ languages. No voice actor rates, studio time, or ADR sessions.',
                savings: '$500–$2,000 per video',
              },
              {
                number: '05',
                title: 'Scalable Subscription vs. Per-Project Costs',
                body: 'AI platforms cost $30–$100/month for unlimited videos. Traditional agencies charge per project with no reuse.',
                savings: '95%+ when producing multiple videos annually',
              },
            ].map(({ number, title, body, savings }) => (
              <div key={number} className="border-t border-[#1a1a1a] py-10 grid grid-cols-1 md:grid-cols-[80px_1fr_200px] gap-6 items-start">
                <span style={{ ...displayStyle, fontSize: '48px' }} className="text-[#333333] leading-none">{number}</span>
                <div>
                  <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
                  <p className="text-[#888888]">{body}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#ebff00] text-sm font-bold uppercase tracking-[0.1em]">Savings</p>
                  <p className="text-white text-sm mt-1">{savings}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison by Video Type */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">By Format</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            COST BY VIDEO TYPE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {[
              { type: 'Explainer Video', traditional: '$5K–$15K', ai: '$200–$500', savings: '96%' },
              { type: 'Product Demo', traditional: '$3K–$10K', ai: '$300–$800', savings: '92%' },
              { type: 'Corporate Video', traditional: '$10K–$50K', ai: '$1K–$3K', savings: '85%' },
              { type: 'Social Media Shorts', traditional: '$1K–$5K', ai: '$50–$200', savings: '97%' },
            ].map(({ type, traditional, ai, savings }) => (
              <div key={type} className="bg-[#080808] p-8">
                <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-4">{type}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#666666] text-sm">Traditional</span>
                    <span className="text-[#888888] text-sm">{traditional}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#666666] text-sm">AI</span>
                    <span className="text-white text-sm">{ai}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#1a1a1a]">
                    <span className="text-[#ebff00] text-sm font-bold uppercase tracking-[0.1em]">Savings</span>
                    <span className="text-[#ebff00] text-sm font-bold">{savings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Budget Impact */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Real Numbers</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            ANNUAL BUDGET IMPACT
          </h2>
          <div className="border border-[#1a1a1a] p-10">
            <p className="text-[#666666] text-sm uppercase tracking-[0.2em] mb-8">Scenario: Startup producing 24 videos/year</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-6">Traditional Agency Route</h3>
                <div className="space-y-3 text-[#888888]">
                  <div className="flex justify-between">
                    <span>Cost per video</span>
                    <span>$10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual production</span>
                    <span>24 videos</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-[#1a1a1a]">
                    <span className="text-white font-bold">Total</span>
                    <span className="text-white font-bold text-2xl">$240,000</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-6">AI Video Production</h3>
                <div className="space-y-3 text-[#888888]">
                  <div className="flex justify-between">
                    <span>Monthly platform</span>
                    <span>$99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual subscription</span>
                    <span>$1,188</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual labor (4hrs × 24)</span>
                    <span>~$2,400</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-[#1a1a1a]">
                    <span className="text-white font-bold">Total</span>
                    <span className="text-[#ebff00] font-bold text-2xl">$3,588</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-[#1a1a1a] text-center">
              <p style={{ ...displayStyle, fontSize: 'clamp(30px, 4vw, 56px)' }} className="text-[#ebff00] leading-none">
                ANNUAL SAVINGS: $236,412
              </p>
              <p className="text-[#666666] text-sm mt-2 uppercase tracking-[0.2em]">98% reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Question Everyone Asks</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-8">
            DOES CHEAPER MEAN<br />LOWER QUALITY?
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl mb-16">
            No. Modern AI video platforms rival traditional production in quality. Here's why:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
            {[
              { title: 'Professional Voiceovers', body: 'AI voices sound natural and human-like. 140+ language options with regional accents.' },
              { title: 'Cinematic Visuals', body: 'Stock footage, animations, and transitions that match professional broadcast standards.' },
              { title: 'Perfect Lip-Sync', body: 'AI accurately syncs voiceover to avatar mouth movements. Looks polished and professional.' },
              { title: 'Brand Consistency', body: 'Every video follows the same style, tone, and visual identity. No inconsistencies across content.' },
              { title: '4K & High-Quality Exports', body: 'Videos render in 4K with high bitrate. Ready for YouTube, Vimeo, TV, and cinema screens.' },
              { title: 'Unlimited Revisions', body: 'Change messaging, swap voiceovers, update visuals—all instant. No reshoots, no extra charges.' },
            ].map(({ title, body }) => (
              <div key={title} className="bg-[#080808] p-8">
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">Included</p>
                <h3 className="text-white font-bold mb-3">{title}</h3>
                <p className="text-[#666666] text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">FAQ</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            COSTS & SAVINGS
          </h2>
          <div className="space-y-0">
            {[
              {
                q: 'Is there a setup fee or onboarding cost?',
                a: 'No. You only pay the monthly subscription. Our team handles onboarding and strategy at no extra charge.',
              },
              {
                q: 'Do you charge per video or per revision?',
                a: 'Neither. All videos and unlimited revisions are included in the monthly subscription.',
              },
              {
                q: 'What if I only need a few videos per year?',
                a: 'Even producing 5–10 videos/year saves 90%+ vs. traditional agencies. ROI is immediate.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes. No long-term contracts. Cancel monthly with no penalties. You own all videos forever.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-t border-[#1a1a1a] py-8">
                <h3 className="text-white font-bold mb-3">{q}</h3>
                <p className="text-[#888888]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            STOP OVERPAYING.<br /><span style={{ color: '#ebff00' }}>START SHOOTING.</span>
          </h2>
          <p className="text-[#888888] mb-10">Get broadcast-quality videos for 1–5% of traditional costs. No crew. No delays. No excuses.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Get a Cost Comparison
          </Link>
        </div>
      </section>
    </>
  )
}
