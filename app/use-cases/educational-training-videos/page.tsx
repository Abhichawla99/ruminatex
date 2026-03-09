import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Educational & Training Videos: Rapid Corporate Learning Content | Ruminate X',
  description: 'Create training videos at scale. Auto-generate courses in 50+ languages. Deploy learning content 10x faster.',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Use Cases / Training</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          TRAIN ANYONE.<br />ANYWHERE.<br /><span style={{ color: '#ebff00' }}>ANY LANGUAGE.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          Corporate training videos that used to take months now take days. Deploy learning content globally in 50+ languages. No videographers. No location logistics. No delays.
        </p>
      </section>

      {/* Use Cases */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Training Types</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            WHAT YOU CAN CREATE
          </h2>
          <div className="space-y-0">
            {[
              {
                title: 'Compliance Training',
                body: 'Rapid video updates for regulatory changes. When the law changes on Tuesday, your training is updated by Wednesday — not next quarter.',
              },
              {
                title: 'Onboarding Videos',
                body: 'Help new employees get productive faster. First-week content that answers every question before they have to ask it.',
              },
              {
                title: 'Product Training',
                body: 'Scale product knowledge across teams. Every sales rep, every support agent, every partner — aligned on the same product narrative.',
              },
              {
                title: 'Skill Development',
                body: 'Courses for upskilling programs. Professional learning content without professional production budgets.',
              },
              {
                title: 'Safety Training',
                body: 'Multi-language safety content for distributed teams. The same safety standards, delivered in every language your workforce speaks.',
              },
              {
                title: 'Policy Communication',
                body: 'Communicate company policies clearly and memorably. Video retention is 6x higher than written policy documents.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="border-t border-[#1a1a1a] py-8 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
                <h3 className="text-white font-bold text-xl">{title}</h3>
                <p className="text-[#888888]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Advantage</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            BENEFITS OF AI TRAINING VIDEOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {[
              {
                title: 'Faster Deployment',
                body: 'Create training content in days, not months. When regulations change or products update, your training keeps pace — not the other way around.',
              },
              {
                title: 'Global Reach',
                body: 'Record once. Generate 50+ language versions automatically. Every employee gets training in their native language at the same cost.',
              },
              {
                title: 'Perfect Consistency',
                body: 'The same message delivered identically to every learner in every location. No variance in training quality based on who delivers it.',
              },
              {
                title: 'Cost Efficiency',
                body: 'No videography crew. No location logistics. No per-learner costs that scale with headcount. Low fixed cost regardless of volume.',
              },
              {
                title: 'Always Current',
                body: 'Update a policy, update the video in hours. Never deploy outdated training again. Iterate as fast as your business moves.',
              },
              {
                title: 'Analytics & Completion',
                body: 'Track who watched what and when. Measure comprehension. Identify knowledge gaps before they become compliance issues.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-[#080808] p-8">
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">Advantage</p>
                <h3 className="text-white font-bold mb-3">{title}</h3>
                <p className="text-[#666666] text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Comparison */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Speed</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            10X FASTER DEPLOYMENT
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#1a1a1a]">
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-6">Traditional Training Video</h3>
              <div className="space-y-3 text-[#888888]">
                <p>Week 1–2: Scope, script, stakeholder approval</p>
                <p>Week 3–4: Hire crew, book location, schedule shoot</p>
                <p>Week 5–6: Film, re-film, fix mistakes</p>
                <p>Week 7–8: Edit, review, revise, finalize</p>
                <p>Week 9–10: Translation, localization per language</p>
                <div className="border-t border-[#1a1a1a] pt-4 mt-4">
                  <p className="text-white font-bold">10 weeks. $15K–$50K. Per course.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-6">AI Training Video</h3>
              <div className="space-y-3 text-[#888888]">
                <p>Day 1: Script and brief</p>
                <p>Day 2: AI generates video draft</p>
                <p>Day 3: Review, customize, brand</p>
                <p>Day 4: Generate 50+ language versions</p>
                <p>Day 5: Deploy to LMS</p>
                <div className="border-t border-[#1a1a1a] pt-4 mt-4">
                  <p className="text-[#ebff00] font-bold">5 days. $1K–$3K. Any language. Done.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            LAUNCH YOUR<br /><span style={{ color: '#ebff00' }}>TRAINING PROGRAM.</span>
          </h2>
          <p className="text-[#888888] mb-10">Deploy training content 10x faster. Every employee, every language, consistent quality across the board.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Create Training Video
          </Link>
        </div>
      </section>
    </>
  )
}
