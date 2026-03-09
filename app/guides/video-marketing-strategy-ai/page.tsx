import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Marketing Strategy: Planning Your Content Calendar | Ruminate X',
  description: 'Strategy guide for planning AI video content. Calendar templates, content types, and distribution channels.',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Guides / Video Strategy</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          VIDEO STRATEGY<br />THAT ACTUALLY<br /><span style={{ color: '#ebff00' }}>SHIPS.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          A strategic framework for planning, producing, and distributing AI video content. Calendar templates, content types, distribution channels, and ROI tracking — all in one place.
        </p>
      </section>

      {/* Framework */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Framework</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            FOUR-STEP STRATEGY FRAMEWORK
          </h2>
          <div className="space-y-0">
            {[
              {
                step: '01',
                title: 'Audience & Goals',
                items: [
                  'Who are you targeting — role, industry, company size?',
                  'What action do you want them to take?',
                  'What does success look like — views, leads, revenue?',
                  'What does your audience already know, and what do they need?',
                ],
                note: 'Every video that underperforms can be traced back to a vague brief. Start here. Be specific.',
              },
              {
                step: '02',
                title: 'Content Planning',
                items: [
                  'Product videos (demos, features, onboarding)',
                  'Educational content (tutorials, how-to, comparisons)',
                  'Testimonials and case studies',
                  'Thought leadership and brand positioning',
                ],
                note: 'Map content types to funnel stages. Top of funnel needs different content than bottom of funnel.',
              },
              {
                step: '03',
                title: 'Distribution Channels',
                items: [
                  'YouTube — long-form educational and product content',
                  'LinkedIn — B2B thought leadership, case studies',
                  'TikTok and Instagram Reels — short-form, high-frequency',
                  'Email campaigns — highest-intent audience, direct',
                ],
                note: 'Don\'t distribute everywhere. Pick two or three channels and own them.',
              },
              {
                step: '04',
                title: 'Measurement & Optimization',
                items: [
                  'Track views and completion rate per video',
                  'Measure click-through to your desired action',
                  'Monitor conversion rate from video to pipeline',
                  'Calculate ROI per video — revenue / production cost',
                ],
                note: 'The strategy that doesn\'t get measured doesn\'t get better. Set KPIs before you shoot.',
              },
            ].map(({ step, title, items, note }) => (
              <div key={step} className="border-t border-[#1a1a1a] py-10 grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8">
                <span style={{ ...displayStyle, fontSize: '72px' }} className="text-[#333333] leading-none">{step}</span>
                <div>
                  <h3 style={{ ...displayStyle, fontSize: '36px' }} className="text-white leading-none mb-6">{title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {items.map((item) => (
                      <p key={item} className="text-[#888888] text-sm flex gap-2">
                        <span className="text-[#333333]">—</span>{item}
                      </p>
                    ))}
                  </div>
                  <div className="border-t border-[#1a1a1a] pt-4">
                    <p className="text-[#666666] text-sm italic">{note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Calendar */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Calendar</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            SAMPLE MONTHLY CONTENT CALENDAR
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#1a1a1a]">
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4 pr-8">Week</th>
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4 pr-8">Video Type</th>
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4 pr-8">Topic</th>
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4">Channel</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Week 1', 'Product Demo', 'Feature Overview', 'YouTube, LinkedIn'],
                  ['Week 2', 'Tutorial', 'How-To: Getting Started', 'YouTube, Website'],
                  ['Week 3', 'Shorts (5 clips)', 'Quick Tips Series', 'TikTok, Instagram'],
                  ['Week 4', 'Case Study', 'Customer Success Story', 'LinkedIn, Email'],
                ].map(([week, type, topic, channel]) => (
                  <tr key={week} className="border-b border-[#1a1a1a]">
                    <td className="py-5 pr-8 text-[#ebff00] font-bold">{week}</td>
                    <td className="py-5 pr-8 text-white">{type}</td>
                    <td className="py-5 pr-8 text-[#888888]">{topic}</td>
                    <td className="py-5 text-[#666666]">{channel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border border-[#1a1a1a] p-8 mt-px">
            <p className="text-[#888888] text-sm">
              <span className="text-white font-bold">Note:</span> This is a minimum viable calendar. With AI production, most teams can increase to 2–3 videos per week without adding headcount.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Framework */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Measuring Success</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            VIDEO ROI FRAMEWORK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
            {[
              { metric: 'Views & Completion', kpi: 'Reach & Quality', detail: 'How many people watched it? How much did they watch?' },
              { metric: 'Click-Through Rate', kpi: 'Intent Signal', detail: 'What percentage clicked your CTA after watching?' },
              { metric: 'Conversion Rate', kpi: 'Revenue Impact', detail: 'Of CTAs clicked, how many became leads or customers?' },
              { metric: 'ROI per Video', kpi: 'Efficiency', detail: 'Revenue attributed / production cost. Should be 10x minimum.' },
            ].map(({ metric, kpi, detail }) => (
              <div key={metric} className="bg-[#080808] p-8">
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">{kpi}</p>
                <h3 className="text-white font-bold mb-2">{metric}</h3>
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
            STRATEGY FIRST.<br /><span style={{ color: '#ebff00' }}>THEN WE SHOOT.</span>
          </h2>
          <p className="text-[#888888] mb-10">We build the strategy, the calendar, and the production pipeline. One conversation gets you all three.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Get Strategy Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
