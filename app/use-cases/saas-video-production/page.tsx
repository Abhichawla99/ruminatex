import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Production for SaaS: Launch & Feature Updates Fast | Ruminate X',
  description: 'SaaS teams use AI to create product videos, feature updates, and demo content 70% faster. Scale content without adding headcount.',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Use Cases / SaaS</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          SHIP FAST.<br />SHOW IT<br /><span style={{ color: '#ebff00' }}>FASTER.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          SaaS teams create product videos, feature updates, and onboarding content 70% faster with AI. No videographers. No 3-week production cycles. Ship the feature and the video on the same day.
        </p>
      </section>

      {/* SaaS Use Cases */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What You Can Make</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            EVERY VIDEO YOUR PRODUCT NEEDS
          </h2>
          <div className="space-y-0">
            {[
              {
                title: 'Feature Launch Videos',
                body: 'Announce new features the day they ship. Drive adoption. Show the benefit clearly. Reduce support tickets from users who don\'t understand the new workflow.',
                metric: 'Adoption +40%',
              },
              {
                title: 'Product Demo Videos',
                body: 'Show your product in action for specific use cases. Personalize demos by industry, company size, or role. Increase sales qualified leads without adding to your AE workload.',
                metric: 'Leads +200%',
              },
              {
                title: 'Onboarding Videos',
                body: 'Help new customers get productive faster. Answer "how do I..." before they have to ask. Reduce churn in the first 90 days when it matters most.',
                metric: 'Churn -30%',
              },
              {
                title: 'Training & Documentation Videos',
                body: 'Reduce support tickets. Build a searchable video knowledge base. Keep your team and your customers aligned as your product evolves.',
                metric: 'Tickets -40%',
              },
            ].map(({ title, body, metric }) => (
              <div key={title} className="border-t border-[#1a1a1a] py-10 grid grid-cols-1 md:grid-cols-[1fr_150px] gap-8 items-start">
                <div>
                  <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
                  <p className="text-[#888888]">{body}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#ebff00] font-bold">{metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Advantage */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Speed Gap</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            TRADITIONAL VS. AI: FEATURE LAUNCH
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#1a1a1a]">
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-6">Traditional Approach</h3>
              <div className="space-y-4">
                <div className="border-b border-[#1a1a1a] pb-4">
                  <p className="text-[#666666] text-xs uppercase tracking-[0.2em] mb-1">Week 1</p>
                  <p className="text-[#888888]">Hire videographer, plan the shoot, brief the team</p>
                </div>
                <div className="border-b border-[#1a1a1a] pb-4">
                  <p className="text-[#666666] text-xs uppercase tracking-[0.2em] mb-1">Week 2</p>
                  <p className="text-[#888888]">Film product feature with crew and equipment</p>
                </div>
                <div className="border-b border-[#1a1a1a] pb-4">
                  <p className="text-[#666666] text-xs uppercase tracking-[0.2em] mb-1">Week 3</p>
                  <p className="text-[#888888]">Edit, revise, finalize, upload</p>
                </div>
                <div className="pt-2">
                  <p className="text-white font-bold">3 weeks after launch: the video is live.</p>
                  <p className="text-[#666666] text-sm mt-1">Your feature launched without its story.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-6">AI Approach</h3>
              <div className="space-y-4">
                <div className="border-b border-[#1a1a1a] pb-4">
                  <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-1">Hour 1</p>
                  <p className="text-[#888888]">Write the script</p>
                </div>
                <div className="border-b border-[#1a1a1a] pb-4">
                  <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-1">Hour 6</p>
                  <p className="text-[#888888]">Generate video with AI voiceover and visuals</p>
                </div>
                <div className="border-b border-[#1a1a1a] pb-4">
                  <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-1">Hour 12</p>
                  <p className="text-[#888888]">Customize, brand, and publish</p>
                </div>
                <div className="pt-2">
                  <p className="text-[#ebff00] font-bold">12 hours after launch: the video is live.</p>
                  <p className="text-[#666666] text-sm mt-1">Your feature launched with its story.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The SaaS Content Stack */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Strategy</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            THE SAAS VIDEO CONTENT STACK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
            {[
              { layer: 'Awareness', content: 'Brand films, explainers, "why us" videos for top-of-funnel prospect education' },
              { layer: 'Consideration', content: 'Use-case demos, comparison videos, customer story clips for evaluation-stage buyers' },
              { layer: 'Decision', content: 'Personalized demos, ROI walkthrough videos, security and compliance explainers' },
              { layer: 'Onboarding', content: 'Getting-started guides, setup walkthroughs, integration tutorials for new customers' },
              { layer: 'Retention', content: 'Feature adoption videos, best practices content, advanced use-case deep dives' },
              { layer: 'Expansion', content: 'Upsell videos, premium feature spotlights, new tier benefit explanations' },
            ].map(({ layer, content }) => (
              <div key={layer} className="bg-[#080808] p-8">
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">{layer}</p>
                <p className="text-[#888888] text-sm">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            LAUNCH FASTER.<br /><span style={{ color: '#ebff00' }}>SHOW MORE.</span>
          </h2>
          <p className="text-[#888888] mb-10">Every SaaS product deserves video that keeps pace with the product. Brief us and we build the pipeline.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Create Product Video
          </Link>
        </div>
      </section>
    </>
  )
}
