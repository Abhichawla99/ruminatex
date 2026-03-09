import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The 6-Step AI Video Production Process: From Script to Publish | Ruminate X',
  description: 'Proven 6-step methodology for creating professional videos with AI. Brief → Script → Generate → Customize → Optimize → Publish.',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Guides / Process</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          SIX STEPS.<br />24 HOURS.<br /><span style={{ color: '#ebff00' }}>PUBLISHED.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          Brief. Script. Generate. Customize. Optimize. Publish. Our proven methodology for creating professional videos with AI — from concept to live in 24 hours.
        </p>
      </section>

      {/* The 6 Steps */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Methodology</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            THE COMPLETE PROCESS
          </h2>
          <div className="space-y-0">
            {[
              {
                step: '01',
                title: 'Define Brief',
                time: 'Hour 1–2',
                color: 'text-[#ebff00]',
                goal: 'Clarify what the video needs to accomplish',
                items: [
                  'What\'s the single main message?',
                  'Who is the specific audience?',
                  'What action should viewers take?',
                  'How does success get measured?',
                ],
                note: 'A sharp brief is the difference between a video that converts and a video that sits. Never skip this step.',
              },
              {
                step: '02',
                title: 'Write Script',
                time: 'Hour 2–4',
                color: 'text-[#ebff00]',
                goal: 'Create a compelling, conversational script',
                items: [
                  'Hook: Grab attention in the first 3 seconds',
                  'Problem: State the viewer\'s exact pain point',
                  'Solution: Show how the product solves it',
                  'CTA: One clear, direct call-to-action',
                ],
                note: '150–250 words. Read it aloud. If it sounds unnatural, rewrite it.',
              },
              {
                step: '03',
                title: 'Generate Video',
                time: 'Hour 4–8',
                color: 'text-[#ebff00]',
                goal: 'Create the initial video draft with AI',
                items: [
                  'Input approved script into AI platform',
                  'AI generates natural-sounding voiceover',
                  'AI creates matching visuals and animations',
                  'Auto-sync, transitions, and timing applied',
                ],
                note: 'First draft is done in minutes. The AI handles what a crew of five used to take three weeks to do.',
              },
              {
                step: '04',
                title: 'Customize & Brand',
                time: 'Hour 8–16',
                color: 'text-[#ebff00]',
                goal: 'Make it unmistakably yours',
                items: [
                  'Add logo and brand colors',
                  'Insert custom product screenshots or imagery',
                  'Add captions for accessibility and SEO',
                  'Select background music that fits the tone',
                ],
                note: 'This is where generic becomes brand. Do not skip branding. Every video is a brand touchpoint.',
              },
              {
                step: '05',
                title: 'Optimize for Platform',
                time: 'Hour 16–20',
                color: 'text-[#ebff00]',
                goal: 'Make the video platform-ready',
                items: [
                  'Optimize title, description, and tags for YouTube',
                  'Create vertical format for Reels and TikTok',
                  'Add SEO keywords to captions and descriptions',
                  'Prepare all required format variations',
                ],
                note: 'One piece of content, multiple platforms. Maximize every hour of production work.',
              },
              {
                step: '06',
                title: 'Publish & Analyze',
                time: 'Hour 20–24',
                color: 'text-[#ebff00]',
                goal: 'Get the video live and start learning',
                items: [
                  'Upload to YouTube, LinkedIn, and your website',
                  'Create the promotion schedule',
                  'Track engagement metrics from day one',
                  'Optimize based on real performance data',
                ],
                note: 'Publishing is not the end — it is the beginning. The data from this video informs the next one.',
              },
            ].map(({ step, title, time, goal, items, note }) => (
              <div key={step} className="border-t border-[#1a1a1a] py-10 grid grid-cols-1 md:grid-cols-[100px_1fr_180px] gap-8 items-start">
                <span style={{ ...displayStyle, fontSize: '72px' }} className="text-[#333333] leading-none">{step}</span>
                <div>
                  <h3 style={{ ...displayStyle, fontSize: '36px' }} className="text-white leading-none mb-2">{title}</h3>
                  <p className="text-[#666666] text-xs uppercase tracking-[0.2em] mb-4">{goal}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    {items.map((item) => (
                      <p key={item} className="text-[#888888] text-sm flex gap-2">
                        <span className="text-[#333333]">—</span>{item}
                      </p>
                    ))}
                  </div>
                  <div className="border-t border-[#1a1a1a] pt-4 mt-4">
                    <p className="text-[#666666] text-sm italic">{note}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-1">Timeline</p>
                  <p className="text-white font-bold">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">At a Glance</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            HOUR 0 TO HOUR 24
          </h2>
          <div className="grid grid-cols-6 gap-px bg-[#1a1a1a]">
            {[
              { step: '01', phase: 'Brief', hours: 'Hr 1–2' },
              { step: '02', phase: 'Script', hours: 'Hr 2–4' },
              { step: '03', phase: 'Generate', hours: 'Hr 4–8' },
              { step: '04', phase: 'Brand', hours: 'Hr 8–16' },
              { step: '05', phase: 'Optimize', hours: 'Hr 16–20' },
              { step: '06', phase: 'Publish', hours: 'Hr 20–24' },
            ].map(({ step, phase, hours }) => (
              <div key={step} className="bg-[#080808] p-6 text-center">
                <span style={{ ...displayStyle, fontSize: '32px' }} className="text-[#333333] leading-none block mb-2">{step}</span>
                <p className="text-white font-bold text-sm mb-1">{phase}</p>
                <p className="text-[#666666] text-xs">{hours}</p>
              </div>
            ))}
          </div>
          <div className="border border-[#1a1a1a] p-8 mt-px text-center">
            <p style={{ ...displayStyle, fontSize: 'clamp(24px, 3vw, 40px)' }} className="text-[#ebff00] leading-none">
              HOUR 24: PROFESSIONAL VIDEO. PUBLISHED. LIVE.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            READY TO RUN<br /><span style={{ color: '#ebff00' }}>THE PROCESS?</span>
          </h2>
          <p className="text-[#888888] mb-10">Start the 6-step process today. Brief to published video in 24 hours.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Begin Production Today
          </Link>
        </div>
      </section>
    </>
  )
}
