import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Create AI Explainer Videos: Complete 6-Step Guide | Ruminate X',
  description: 'Step-by-step guide to creating explainer videos with AI. Learn the complete process from script to publish with examples.',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Guides / Explainer Videos</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          HOW TO CREATE<br />EXPLAINER VIDEOS<br /><span style={{ color: '#ebff00' }}>WITH AI.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          Master the process of creating professional explainer videos with AI. Script to publish in 24–48 hours. Six steps, proven methodology, repeatable at scale.
        </p>
      </section>

      {/* The 6 Steps */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Process</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            SIX STEPS TO A PROFESSIONAL EXPLAINER
          </h2>
          <div className="space-y-0">
            {[
              {
                step: '1',
                title: 'Define Your Objective',
                body: 'Start with a single, clear goal. What do you want viewers to understand or do after watching? One video. One goal. No exceptions.',
                items: [
                  'Understand your product\'s core benefit',
                  'Learn how to use a specific feature',
                  'Solve one clearly defined problem',
                  'Take one action: buy, sign up, or download',
                ],
                example: null,
              },
              {
                step: '2',
                title: 'Write Your Script',
                body: '150–250 words is ideal. Focus on benefits, not features. Write the way people speak.',
                items: [],
                example: '"Struggling to manage customer data across spreadsheets? Our CRM brings everything into one dashboard. Track leads, close deals faster, and never lose a prospect again."',
              },
              {
                step: '3',
                title: 'Gather Assets',
                body: 'Collect your brand materials before you generate. Everything should be ready before the AI starts working.',
                items: [
                  'Logo files (PNG, preferably transparent background)',
                  'Brand color hex codes and font names',
                  'Product screenshots or demo footage',
                  'Photos that represent your brand and audience',
                ],
                example: null,
              },
              {
                step: '4',
                title: 'Generate Video with AI',
                body: 'Input your approved script into the AI platform. The heavy lifting starts here.',
                items: [
                  'AI creates a natural-sounding voiceover',
                  'Generates matching visuals and animations',
                  'Syncs voiceover to video automatically',
                  'Applies transitions and effects intelligently',
                ],
                example: null,
              },
              {
                step: '5',
                title: 'Customize & Brand',
                body: 'This is where a generic AI video becomes your video. Do not skip this step.',
                items: [
                  'Add your logo and brand colors',
                  'Insert product screenshots and custom imagery',
                  'Add auto-generated captions for accessibility',
                  'Select background music that fits your tone',
                ],
                example: null,
              },
              {
                step: '6',
                title: 'Review, Export & Publish',
                body: 'Final quality pass, then send it into the world.',
                items: [
                  'Watch the full video once for quality check',
                  'Export in multiple formats for every platform',
                  'Upload to YouTube, LinkedIn, and your website',
                  'Track engagement and optimize based on data',
                ],
                example: null,
              },
            ].map(({ step, title, body, items, example }) => (
              <div key={step} className="border-t border-[#1a1a1a] py-10 grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8">
                <span style={{ ...displayStyle, fontSize: '80px' }} className="text-[#ebff00] leading-none">{step}</span>
                <div>
                  <h3 style={{ ...displayStyle, fontSize: '36px' }} className="text-white leading-none mb-4">{title}</h3>
                  <p className="text-[#888888] mb-6">{body}</p>
                  {items.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      {items.map((item) => (
                        <p key={item} className="text-[#666666] text-sm flex gap-2">
                          <span className="text-[#333333]">—</span>{item}
                        </p>
                      ))}
                    </div>
                  )}
                  {example && (
                    <div className="border border-[#1a1a1a] p-6 mt-4">
                      <p className="text-[#666666] text-xs uppercase tracking-[0.2em] mb-3">Script Example</p>
                      <p className="text-[#888888] italic">{example}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Avoid These</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            COMMON MISTAKES TO AVOID
          </h2>
          <div className="space-y-0">
            {[
              { mistake: 'Too Long', detail: 'Keep it under 2 minutes. Attention spans don\'t wait. If you can\'t say it in 90 seconds, your message needs tightening — not your runtime extending.' },
              { mistake: 'Feature-Heavy', detail: 'Focus on benefits, not features. Nobody buys software for the dashboard tabs. They buy for what those tabs help them accomplish.' },
              { mistake: 'No Clear CTA', detail: 'Tell viewers exactly what to do next. "Learn more" is not a CTA. "Start your free trial" is.' },
              { mistake: 'Poor Script Quality', detail: 'Read your script aloud before generating. If it sounds unnatural when you say it, it will sound robotic when the AI says it.' },
              { mistake: 'Ignoring SEO', detail: 'Use target keywords in your video title, description, and captions. Your video is only valuable if people can find it.' },
            ].map(({ mistake, detail }) => (
              <div key={mistake} className="border-t border-[#1a1a1a] py-8 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                <h3 className="text-white font-bold text-xl">{mistake}</h3>
                <p className="text-[#888888]">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            YOUR FIRST EXPLAINER.<br /><span style={{ color: '#ebff00' }}>START NOW.</span>
          </h2>
          <p className="text-[#888888] mb-10">Apply the 6-step process and have your first AI explainer video published within 48 hours.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Start Creating Now
          </Link>
        </div>
      </section>
    </>
  )
}
