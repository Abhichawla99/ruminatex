import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Production vs. Traditional Videography: Complete Comparison | Ruminate X',
  description: 'Compare AI video production to traditional videography. Detailed cost breakdown, timeline, and quality comparison for 2026.',
  openGraph: {
    title: 'AI vs Traditional Video Production | Ruminate X',
    description: 'Complete comparison of AI video production vs. traditional videography costs and timelines.',
  },
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Tools / Comparison</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          AI VS.<br />TRADITIONAL<br /><span style={{ color: '#ebff00' }}>VIDEO. THE TRUTH.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          AI video production is 85–95% cheaper, 10x faster, and infinitely more flexible than traditional videography. For 90% of business video needs, AI is the clear winner. Here is the full breakdown.
        </p>
      </section>

      {/* Quick Stats */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
            {[
              { stat: '85–95%', label: 'Cost Savings' },
              { stat: '10x', label: 'Speed Improvement' },
              { stat: 'Unlimited', label: 'Revisions' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-[#080808] p-12 text-center">
                <p style={{ ...displayStyle, fontSize: 'clamp(48px, 6vw, 80px)' }} className="text-[#ebff00] leading-none mb-3">{stat}</p>
                <p className="text-[#666666] text-xs uppercase tracking-[0.3em]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Head-to-Head Table */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Head-to-Head</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            FACTOR BY FACTOR
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#1a1a1a]">
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4 pr-8 w-1/4">Factor</th>
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4 pr-8 w-1/4">Traditional</th>
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4 pr-8 w-1/4">AI</th>
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4 w-1/4">Winner</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost per Video', '$5,000–$50,000+', '$200–$3,000', 'AI (95% cheaper)'],
                  ['Production Timeline', '3–6 weeks', '24–48 hours', 'AI (10x faster)'],
                  ['Revisions', '$500–$5,000 each', 'Free, Unlimited', 'AI (No cost)'],
                  ['Quality', 'Broadcast-grade', 'Broadcast-grade', 'Tie'],
                  ['Customization', 'Limited, expensive', 'Unlimited', 'AI'],
                  ['Scalability', 'Difficult, expensive', 'Easy, same cost', 'AI'],
                  ['Team Size Required', '5–10 people', '1 person', 'AI'],
                  ['Languages Supported', 'Limited, per-language cost', '140+ languages, same cost', 'AI'],
                  ['Overall Winner', 'High-budget cinematic projects', '90% of business video needs', 'AI by far'],
                ].map(([factor, trad, ai, winner]) => (
                  <tr key={factor} className="border-b border-[#1a1a1a]">
                    <td className="py-5 pr-8 text-white font-bold">{factor}</td>
                    <td className="py-5 pr-8 text-[#888888]">{trad}</td>
                    <td className="py-5 pr-8 text-[#888888]">{ai}</td>
                    <td className={`py-5 font-bold ${winner === 'Tie' ? 'text-[#888888]' : 'text-[#ebff00]'}`}>{winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Cost Breakdown */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Numbers</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            COST BREAKDOWN
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#1a1a1a]">
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-8">Traditional Videography</h3>
              <div className="space-y-4">
                {[
                  ['Pre-production', '$1K–$3K', 'Storyboarding, location scouting, crew scheduling'],
                  ['Crew costs', '$3K–$10K', 'Director, cinematographer, camera operator, gaffers'],
                  ['Equipment rental', '$1K–$5K', 'Camera, lenses, lighting, audio gear'],
                  ['Location/studio', '$500–$3K', 'Studio rental, permits, insurance'],
                  ['Post-production', '$2K–$10K', 'Editing, color grading, effects, sound design'],
                ].map(([item, cost, detail]) => (
                  <div key={item} className="border-b border-[#1a1a1a] pb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-white">{item}</span>
                      <span className="text-[#888888]">{cost}</span>
                    </div>
                    <p className="text-[#666666] text-sm">{detail}</p>
                  </div>
                ))}
                <div className="pt-4">
                  <div className="flex justify-between">
                    <span className="text-white font-bold">Total</span>
                    <span className="text-white font-bold text-xl">$7.5K–$31K</span>
                  </div>
                  <p className="text-[#666666] text-sm mt-1">Average: $15,000</p>
                </div>
              </div>
            </div>
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-8">AI Video Production</h3>
              <div className="space-y-4">
                {[
                  ['Monthly subscription', '$30–$100', 'Unlimited video generation included'],
                  ['Per-video time cost', '$50–$500', 'Internal labor only (4–8 hours)'],
                  ['Stock footage/music', '$0–$100', 'Often included or free in platform'],
                  ['Voiceovers', 'Included', 'AI voices at no additional cost'],
                  ['Hosting/delivery', '$0–$20', 'Cloud storage included in most platforms'],
                ].map(([item, cost, detail]) => (
                  <div key={item} className="border-b border-[#1a1a1a] pb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-white">{item}</span>
                      <span className="text-[#ebff00]">{cost}</span>
                    </div>
                    <p className="text-[#666666] text-sm">{detail}</p>
                  </div>
                ))}
                <div className="pt-4">
                  <div className="flex justify-between">
                    <span className="text-white font-bold">Total</span>
                    <span className="text-[#ebff00] font-bold text-xl">$100–$800</span>
                  </div>
                  <p className="text-[#666666] text-sm mt-1">Per video, at scale</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[#1a1a1a] p-8 mt-px">
            <p className="text-[#888888]">
              <span className="text-white font-bold">Cost ratio:</span> Traditional video costs 10–50x more than AI video. On 10 videos/year, AI saves $100K–$300K.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Comparison */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Timeline</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            THE SPEED GAP
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-8">Traditional: 4–6 Weeks</h3>
              <div className="space-y-4">
                {[
                  ['Week 1', 'Planning & Storyboarding', 'Concept development, script approval, storyboard creation'],
                  ['Week 2', 'Pre-production', 'Location scouting, crew scheduling, equipment rental'],
                  ['Week 3–4', 'Filming', 'Shooting, multiple takes, on-location logistics'],
                  ['Week 5–6', 'Post-production', 'Editing, color grading, effects, sound design'],
                  ['+1–2 weeks', 'Revisions', 'Any changes require reshoots or re-editing at full cost'],
                ].map(([period, phase, detail]) => (
                  <div key={period} className="flex gap-6 border-b border-[#1a1a1a] pb-4">
                    <span className="text-[#666666] text-sm w-20 shrink-0">{period}</span>
                    <div>
                      <p className="text-white font-bold text-sm">{phase}</p>
                      <p className="text-[#666666] text-xs mt-1">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-8">AI: 24–48 Hours</h3>
              <div className="space-y-4">
                {[
                  ['Hour 1–6', 'Script & Brief', 'Write script, define objectives, gather assets'],
                  ['Hour 6–12', 'AI Generation', 'Input script, generate voiceover, create visuals'],
                  ['Hour 12–24', 'Customization', 'Add branding, customize visuals, add captions'],
                  ['Hour 24–48', 'Review & Deliver', 'Final check, export, publish'],
                  ['Revisions', 'Instant', 'Change script, regenerate in 12 hours. Free.'],
                ].map(([period, phase, detail]) => (
                  <div key={period} className="flex gap-6 border-b border-[#1a1a1a] pb-4">
                    <span className="text-[#ebff00] text-sm w-20 shrink-0">{period}</span>
                    <div>
                      <p className="text-white font-bold text-sm">{phase}</p>
                      <p className="text-[#666666] text-xs mt-1">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use Each */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Decision Guide</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            WHICH APPROACH IS RIGHT FOR YOU?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#1a1a1a]">
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-6">Choose AI Video When:</h3>
              <div className="space-y-3">
                {[
                  'You need video ASAP (24–48 hour timeline)',
                  'Budget is tight ($200–$1K per video)',
                  'You want unlimited revisions',
                  'You need multiple versions or languages',
                  'Content changes frequently (product updates)',
                  'You\'re scaling production (50–100+ videos/year)',
                  'You need consistent brand voice across content',
                ].map((item) => (
                  <p key={item} className="text-[#888888] text-sm flex gap-3">
                    <span className="text-[#ebff00]">+</span>{item}
                  </p>
                ))}
              </div>
              <div className="mt-6 border-t border-[#1a1a1a] pt-6">
                <p className="text-[#666666] text-xs uppercase tracking-[0.2em]">Use case: 90% of business video needs</p>
              </div>
            </div>
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-6">Choose Traditional When:</h3>
              <div className="space-y-3">
                {[
                  'You need cinematic/Hollywood-quality production',
                  'You require live actors in real-world locations',
                  'Budget is unlimited ($10K–$100K+)',
                  'Timeline is flexible (4–8 weeks)',
                  'Content requires a real location or environment',
                  'You need one high-impact hero brand film',
                ].map((item) => (
                  <p key={item} className="text-[#666666] text-sm flex gap-3">
                    <span className="text-[#333333]">—</span>{item}
                  </p>
                ))}
              </div>
              <div className="mt-6 border-t border-[#1a1a1a] pt-6">
                <p className="text-[#666666] text-xs uppercase tracking-[0.2em]">Use case: 10% of business video needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            READY TO MAKE<br /><span style={{ color: '#ebff00' }}>THE SWITCH?</span>
          </h2>
          <p className="text-[#888888] mb-10">Reduce video production costs by 90%. Deliver 10x faster. Brief us today.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Compare Pricing
          </Link>
        </div>
      </section>
    </>
  )
}
