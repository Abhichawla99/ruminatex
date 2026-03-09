import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Automated Screen Recording & Demo Videos: SaaS Solutions | Ruminate X',
  description: 'Create automated screen recording videos for SaaS product demos. Screen recording + AI = professional demos in minutes.',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Guides / Screen Recording</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          RECORD ONCE.<br />PUBLISH<br /><span style={{ color: '#ebff00' }}>EVERYWHERE.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          Professional SaaS product demos from automated screen recording. No videographers. No complex setups. Script it, record it, publish it. Same day.
        </p>
      </section>

      {/* Manual vs AI */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Comparison</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            SCREEN RECORDING + AI = PROFESSIONAL DEMOS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#1a1a1a]">
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-6">Manual Screen Recording</h3>
              <div className="space-y-3">
                {[
                  ['Record screen manually', 'hope you don\'t make mistakes'],
                  ['Edit in video software', '2–4 hours of timeline work'],
                  ['Add voiceover separately', 'sync nightmare, multiple takes'],
                  ['Sync audio and video', 'manually, frame by frame'],
                  ['Export and publish', 'after re-exporting three times'],
                ].map(([action, pain]) => (
                  <div key={action} className="border-b border-[#1a1a1a] pb-3">
                    <p className="text-[#888888] text-sm"><span className="text-white">{action}</span> — {pain}</p>
                  </div>
                ))}
                <div className="pt-2">
                  <p className="text-white font-bold">Time: 4–8 hours per video</p>
                </div>
              </div>
            </div>
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-6">AI Automated Demo</h3>
              <div className="space-y-3">
                {[
                  ['Script your demo', 'define the workflow you\'re showing'],
                  ['AI auto-records screen', 'navigates your product based on the script'],
                  ['AI adds voiceover', 'natural-sounding narration, no studio needed'],
                  ['AI syncs everything', 'voiceover to screen actions, automatically'],
                  ['Publish in one click', 'to every platform simultaneously'],
                ].map(([action, detail]) => (
                  <div key={action} className="border-b border-[#1a1a1a] pb-3">
                    <p className="text-[#888888] text-sm"><span className="text-[#ebff00]">{action}</span> — {detail}</p>
                  </div>
                ))}
                <div className="pt-2">
                  <p className="text-[#ebff00] font-bold">Time: 30 minutes to 2 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Script Formula */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Script</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            HOW TO SCRIPT A SCREEN DEMO
          </h2>
          <div className="space-y-0">
            {[
              {
                timing: '0–3 seconds',
                label: 'Hook',
                script: '"Struggling to manage projects across five tools? Watch how we solve this in under 60 seconds."',
                goal: 'Stop the scroll. Name the pain. Make a promise.',
              },
              {
                timing: '3–10 seconds',
                label: 'Problem',
                script: 'Show the pain on screen — the cluttered spreadsheet, the missed deadline, the broken workflow.',
                goal: 'Make the viewer feel recognized. They see themselves in the problem.',
              },
              {
                timing: '10–40 seconds',
                label: 'Solution',
                script: 'Walk through the feature step-by-step. Narrate each action. Keep it tight.',
                goal: 'Demonstrate competence. Show, don\'t just tell.',
              },
              {
                timing: '40–50 seconds',
                label: 'Benefit',
                script: '"Now your team saves 5 hours per week and never misses a deadline."',
                goal: 'Translate feature to outcome. Outcome to value.',
              },
              {
                timing: '50–60 seconds',
                label: 'CTA',
                script: '"Try free for 14 days" or "Schedule a demo with our team."',
                goal: 'One action. Direct. No ambiguity.',
              },
            ].map(({ timing, label, script, goal }) => (
              <div key={label} className="border-t border-[#1a1a1a] py-8 grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
                <div>
                  <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-1">{timing}</p>
                  <p className="text-white font-bold">{label}</p>
                </div>
                <div>
                  <div className="border border-[#1a1a1a] p-4 mb-3">
                    <p className="text-[#888888] italic text-sm">{script}</p>
                  </div>
                  <p className="text-[#666666] text-sm">{goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Applications</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            WHERE SCREEN DEMOS WORK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
            {[
              { label: 'Feature Demos', body: 'Show new features to customers and prospects on the day they ship' },
              { label: 'How-To Guides', body: 'Help users learn your product without reading documentation' },
              { label: 'Bug Fix Updates', body: 'Explain what was fixed and how it changes the user\'s workflow' },
              { label: 'Onboarding Sequences', body: 'Help new customers activate faster and reach their first win sooner' },
              { label: 'Internal Training', body: 'Keep your team aligned on product changes as they happen' },
              { label: 'Sales Enablement', body: 'Give your sales team demo videos for every use case and objection' },
            ].map(({ label, body }) => (
              <div key={label} className="bg-[#080808] p-8">
                <h3 className="text-white font-bold mb-2">{label}</h3>
                <p className="text-[#666666] text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Wins */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Advantage</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            WHY THIS APPROACH WINS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {[
              { title: 'No Videography Skills Required', body: 'Anyone on your team can create professional demos. The barrier is scripting, not technical skill.' },
              { title: 'Same-Day Turnaround', body: 'Feature ships on Friday. Demo is live by end of day Friday. Your marketing is as fast as your engineering.' },
              { title: 'Perfect for Iteration', body: 'Feature changed? Re-record in 30 minutes. Update without starting from zero.' },
              { title: 'Cost-Effective at Scale', body: 'No equipment. No crew. Fixed platform cost regardless of how many demos you produce.' },
              { title: 'Professional Quality Output', body: 'Broadcast-quality video from a screen recording. The AI handles the polish you used to need a production team for.' },
              { title: 'Unlimited Audience Variations', body: 'Create 10 versions of the same demo for 10 different industries. Same workflow, different emphasis.' },
            ].map(({ title, body }) => (
              <div key={title} className="bg-[#080808] p-8">
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">Advantage</p>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-[#666666] text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Tools */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Stack</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            TOOLS FOR SCREEN RECORDING + AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {[
              { tool: 'Loom + AI Voiceover', detail: 'Record, add AI voiceover, publish. Fastest path for asynchronous demos.' },
              { tool: 'Camtasia + Synthesia', detail: 'Screen recording combined with AI avatar presenter for professional talking-head demos.' },
              { tool: 'Deemo', detail: 'Built-in screen recording plus full AI automation pipeline in one platform.' },
              { tool: 'Descript', detail: 'Record, transcribe, edit the transcript, generate a new voiceover. Fastest for iteration.' },
            ].map(({ tool, detail }) => (
              <div key={tool} className="bg-[#080808] p-8">
                <h3 className="text-white font-bold mb-2">{tool}</h3>
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
            FIRST DEMO.<br /><span style={{ color: '#ebff00' }}>TODAY. NOT NEXT WEEK.</span>
          </h2>
          <p className="text-[#888888] mb-10">Create your first automated screen demo today. Script it, generate it, publish it. Same day.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Generate Demo Now
          </Link>
        </div>
      </section>
    </>
  )
}
