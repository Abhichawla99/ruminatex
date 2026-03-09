import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Explainer Videos in 48 Hours Without a Film Crew | Ruminate X',
  description: 'Create professional explainer videos in 48 hours without hiring a film crew. AI-powered video production cuts production time from weeks to days.',
  openGraph: {
    title: 'Explainer Videos in 48 Hours | Ruminate X',
    description: 'Professional explainer videos in 48 hours using AI technology.',
  },
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Solutions / Speed</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          48 HOURS.<br />NO CREW.<br /><span style={{ color: '#ebff00' }}>BROADCAST QUALITY.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          Traditional explainer videos take 3–4 weeks and $50,000. AI delivers the same result in 48 hours for a fraction of the budget. Brief to final cut. That's the process.
        </p>
      </section>

      {/* The Old Problem */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Old Way</p>
              <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 4vw, 60px)' }} className="text-white leading-none mb-8">
                WEEKS OF WAITING FOR MINUTES OF VIDEO
              </h2>
              <div className="space-y-4">
                {[
                  ['3–4 weeks', 'of production timeline before you see a single frame'],
                  ['$5,000–$50,000', 'per video in crew, equipment, and location fees'],
                  ['5–10 people', 'coordinating schedules across director, DP, editor, sound'],
                  ['Expensive reshoots', 'every time you change your mind or your product changes'],
                  ['Scheduling chaos', 'that kills momentum and misses market windows'],
                ].map(([bold, rest]) => (
                  <div key={bold} className="flex gap-4 border-b border-[#1a1a1a] pb-4">
                    <span className="text-[#333333] font-bold text-sm mt-1">—</span>
                    <p className="text-[#888888]"><span className="text-white font-bold">{bold}</span> {rest}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The AI Way</p>
              <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 4vw, 60px)' }} className="text-white leading-none mb-8">
                48 HOURS FROM BRIEF TO FINAL CUT
              </h2>
              <div className="space-y-4">
                {[
                  ['48-hour turnaround', 'from brief to final delivery, no exceptions'],
                  ['$500–$3,000', 'per video — 95% cost reduction from traditional'],
                  ['One person', 'manages the entire production workflow'],
                  ['Unlimited revisions', 'at zero additional cost, instant turnaround'],
                  ['On-demand', 'production — create videos whenever your market moves'],
                ].map(([bold, rest]) => (
                  <div key={bold} className="flex gap-4 border-b border-[#1a1a1a] pb-4">
                    <span className="text-[#ebff00] font-bold text-sm mt-1">+</span>
                    <p className="text-[#888888]"><span className="text-white font-bold">{bold}</span> {rest}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 48-Hour Process */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Process</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            HOUR BY HOUR
          </h2>
          <div className="space-y-0">
            {[
              {
                hours: 'Hour 1–8',
                title: 'Brief & Script Development',
                body: 'Start with a clear brief: goal, audience, single call-to-action. Write 200–300 words. Read it aloud. Approve it.',
                items: ['Define core message — one key takeaway only', 'Identify the pain point and the solution', 'Write 200–300 word script in conversational tone', 'Review and approve with stakeholders'],
              },
              {
                hours: 'Hour 9–24',
                title: 'AI Generation & Visual Design',
                body: 'Script goes in. AI takes over. Voiceover generated. Visuals matched. Draft ready for review.',
                items: ['Input script into AI video generator', 'AI creates natural-sounding, lip-synced voiceover', 'AI generates matching visuals and animations', 'Select visual style: professional, modern, cinematic'],
              },
              {
                hours: 'Hour 25–40',
                title: 'Customization & Enhancement',
                body: 'Make it yours. Brand it. Perfect the pacing. This is where good becomes great.',
                items: ['Add brand logo, colors, and fonts', 'Insert custom product screenshots or imagery', 'Add captions and subtitles (auto-generated)', 'Select royalty-free background music'],
              },
              {
                hours: 'Hour 41–48',
                title: 'Final Review & Delivery',
                body: 'One final pass. Export in every format you need. Done.',
                items: ['Final quality check: audio, visuals, branding', 'Export in multiple formats (YouTube, social, web)', 'Add CTA button or link overlay', 'Deliver with video stats and optimization tips'],
              },
            ].map(({ hours, title, body, items }) => (
              <div key={hours} className="border-t border-[#1a1a1a] py-10 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8">
                <div>
                  <span style={{ ...displayStyle, fontSize: '48px' }} className="text-[#ebff00] leading-none block">{hours}</span>
                </div>
                <div>
                  <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
                  <p className="text-[#888888] mb-6">{body}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {items.map((item) => (
                      <p key={item} className="text-[#666666] text-sm flex gap-2">
                        <span className="text-[#333333]">—</span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">In the Wild</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            WHAT GETS DONE IN 48 HOURS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {[
              {
                label: 'SaaS Product Launch',
                timeline: 'Day 1: Brief + Script / Day 2: Generate, brand, optimize for YouTube → Live on product page by Day 3',
              },
              {
                label: 'Feature Update Video',
                timeline: 'Day 1: Feature overview + script / Day 2: Generate, customize, highlight features → Ship with email campaign',
              },
              {
                label: 'Sales Enablement Content',
                timeline: 'Day 1: Sales team pain points + solutions / Day 2: Create 3–5 personalized sales videos → Use in outreach',
              },
              {
                label: 'Corporate Training Video',
                timeline: 'Day 1: Curriculum outline + script / Day 2: Generate training video with captions → Deploy to LMS',
              },
            ].map(({ label, timeline }) => (
              <div key={label} className="bg-[#080808] p-8">
                <h3 className="text-white font-bold mb-3">{label}</h3>
                <p className="text-[#666666] text-sm">{timeline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Best For</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            48-HOUR PRODUCTION WORKS BEST WHEN...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
            {[
              { label: 'SaaS & Product Companies', body: 'Launch updates, feature demos, onboarding content — on the day you ship, not three weeks later.' },
              { label: 'Marketing Teams', body: 'Social media content, email campaigns, landing page videos. Brief today, live tomorrow.' },
              { label: 'Sales Teams', body: 'Personalized videos, objection handling, case studies tailored to each prospect.' },
              { label: 'Agencies', body: 'Deliver client videos on tight deadlines without burning your team or your margins.' },
              { label: 'Educators', body: 'Course content, training materials, and explainers that ship before the semester ends.' },
              { label: 'E-Commerce', body: 'Product demos, tutorials, and testimonials for your entire catalog, not just hero products.' },
            ].map(({ label, body }) => (
              <div key={label} className="bg-[#080808] p-8">
                <h3 className="text-white font-bold mb-3">{label}</h3>
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
            48-HOUR PRODUCTION
          </h2>
          <div className="space-y-0">
            {[
              {
                q: 'Can you really deliver video in 48 hours?',
                a: 'Yes. With AI, the bottleneck is decision-making, not production. Approve a script fast and we deliver in 24–48 hours.',
              },
              {
                q: 'What if I need unlimited revisions?',
                a: 'Included. Change the message, swap the voiceover, update visuals — all revisions are instant and free.',
              },
              {
                q: 'Does AI-generated video look professional?',
                a: 'Modern AI video tools rival traditional production in quality. Voiceovers sound natural, visuals are crisp, branding is seamless.',
              },
              {
                q: 'Can I customize the visual style?',
                a: 'Absolutely. Choose from professional, cinematic, animated, or minimalist styles. Add logos, colors, fonts, and custom imagery.',
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
            STOP WAITING WEEKS.<br /><span style={{ color: '#ebff00' }}>START IN 48 HOURS.</span>
          </h2>
          <p className="text-[#888888] mb-10">Stop waiting weeks for traditional production. Get broadcast-quality explainer videos in 48 hours.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Start Your Project Today
          </Link>
        </div>
      </section>
    </>
  )
}
