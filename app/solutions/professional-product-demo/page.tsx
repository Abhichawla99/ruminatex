import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Product Demo Videos Without a Hollywood Budget | Ruminate X',
  description: 'Create professional product demos for SaaS, ecommerce, and enterprise software without Hollywood production budgets. AI-powered in hours.',
  openGraph: {
    title: 'Professional Product Demo Videos | Ruminate X',
    description: 'Product demo videos without expensive production budgets.',
  },
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Solutions / Product Demos</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          DEMOS THAT<br />CLOSE DEALS.<br /><span style={{ color: '#ebff00' }}>NOT BUDGETS.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          SaaS, ecommerce, and enterprise software teams create professional product demos in hours — without traditional production budgets. Increase demo conversions by 2.3x. Increase engagement by 80%.
        </p>
      </section>

      {/* Before vs After */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Traditional Approach</p>
              <h2 style={{ ...displayStyle, fontSize: 'clamp(32px, 4vw, 56px)' }} className="text-white leading-none mb-8">
                THE OLD WAY IS KILLING YOUR PIPELINE
              </h2>
              <div className="space-y-4">
                {[
                  ['$3K–$10K per video', 'for professional videographers'],
                  ['Complex filming logistics', 'product setup, location, lighting, crew coordination'],
                  ['Weeks in post-production', 'editing timelines that outlast your feature cycle'],
                  ['Expensive reshoots', 'every time your product changes'],
                  ['One demo fits all', 'can\'t quickly personalize for different use cases'],
                ].map(([bold, rest]) => (
                  <div key={bold} className="flex gap-4 border-b border-[#1a1a1a] pb-4">
                    <span className="text-[#333333] font-bold text-sm mt-1">—</span>
                    <p className="text-[#888888]"><span className="text-white font-bold">{bold}</span> — {rest}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">AI Production</p>
              <h2 style={{ ...displayStyle, fontSize: 'clamp(32px, 4vw, 56px)' }} className="text-white leading-none mb-8">
                BRIEF TO LIVE IN 24 HOURS
              </h2>
              <div className="border border-[#1a1a1a] p-8">
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-[#666666] text-xs uppercase tracking-[0.2em] mb-3">Before</p>
                    <div className="space-y-2 text-[#888888] text-sm">
                      <p>3–4 weeks to produce</p>
                      <p>$5K–$10K per video</p>
                      <p>Complex filming setup</p>
                      <p>Costly reshoots for updates</p>
                      <p>Limited demo angles</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#666666] text-xs uppercase tracking-[0.2em] mb-3">After AI</p>
                    <div className="space-y-2 text-sm">
                      <p className="text-[#ebff00]">24–48 hours</p>
                      <p className="text-[#ebff00]">$300–$800</p>
                      <p className="text-[#ebff00]">Screen recording only</p>
                      <p className="text-[#ebff00]">Instant updates, zero cost</p>
                      <p className="text-[#ebff00]">Unlimited variations</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-[#1a1a1a] pt-6">
                  <p className="text-[#888888] text-sm">97% cost reduction. Create 50 use-case-specific demos in the time it takes to film one traditional video.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Process</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            SCRIPT TO PUBLISH IN 24 HOURS
          </h2>
          <div className="space-y-0">
            {[
              {
                step: '01',
                time: '2 hours',
                title: 'Script Your Demo',
                body: 'Focus on the outcome, not the features. Good demos show how the product solves a specific problem.',
                items: [
                  'Opening: "Struggling to manage customer relationships?" (Problem)',
                  'Demo: Show how your product solves it (Solution)',
                  'Benefit: "30% faster pipeline management" (Outcome)',
                  'CTA: "See it in action. Schedule a demo." (Close)',
                ],
                note: '150–250 words. Conversational tone. Benefits over features.',
              },
              {
                step: '02',
                time: '6–12 hours',
                title: 'Generate Video',
                body: 'AI converts your script into a professional demo video with natural voiceover and synchronized visuals.',
                items: [
                  'AI generates voiceover with natural pacing',
                  'Video matches voiceover with on-screen actions',
                  'Transitions and pacing automatically optimized',
                  'Captions auto-generated for accessibility',
                ],
                note: 'Result: A polished product demo ready for stakeholder review.',
              },
              {
                step: '03',
                time: '6–12 hours',
                title: 'Customize & Deploy',
                body: 'Brand it, publish it, track it.',
                items: [
                  'Add logo, colors, and brand fonts',
                  'Insert custom CTAs ("Book a Demo", "Start Free Trial")',
                  'Deploy to product page, email, or landing page',
                  'Track video engagement and demo request conversions',
                ],
                note: 'Ready to drive qualified leads to your sales team.',
              },
            ].map(({ step, time, title, body, items, note }) => (
              <div key={step} className="border-t border-[#1a1a1a] py-10 grid grid-cols-1 md:grid-cols-[100px_1fr_200px] gap-8 items-start">
                <span style={{ ...displayStyle, fontSize: '72px' }} className="text-[#333333] leading-none">{step}</span>
                <div>
                  <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
                  <p className="text-[#888888] mb-6">{body}</p>
                  <div className="space-y-2 mb-4">
                    {items.map((item) => (
                      <p key={item} className="text-[#666666] text-sm flex gap-2">
                        <span className="text-[#333333]">—</span>
                        {item}
                      </p>
                    ))}
                  </div>
                  <p className="text-[#888888] text-sm italic">{note}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-1">Time</p>
                  <p className="text-white font-bold">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Types of Demos */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Demo Types</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            SIX DEMOS YOU CAN CREATE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
            {[
              { type: 'Feature Demo', body: 'Show a new feature in 60–90 seconds. Perfect for email announcements and product update campaigns.' },
              { type: 'Use-Case Demo', body: 'Demo for specific industry — retail, healthcare, finance. Personalized for each market segment.' },
              { type: 'Sales Demo', body: 'Personalized for your sales team. Show product benefits tailored to the prospect\'s exact pain points.' },
              { type: 'Onboarding Demo', body: 'Help new customers get started fast. Reduce setup friction and eliminate unnecessary support tickets.' },
              { type: 'Comparison Demo', body: 'Show your product vs. the competitor. Help skeptical prospects understand exactly why you\'re different.' },
              { type: 'FAQ Video', body: 'Answer "How do I..." questions on camera. Reduce support burden and improve customer success at scale.' },
            ].map(({ type, body }) => (
              <div key={type} className="bg-[#080808] p-8">
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">Demo Type</p>
                <h3 className="text-white font-bold text-xl mb-3">{type}</h3>
                <p className="text-[#666666] text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The ROI</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            DEMOS PAY FOR THEMSELVES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-4">Without Video</h3>
              <p style={{ ...displayStyle, fontSize: '48px' }} className="text-white leading-none mb-2">5–8%</p>
              <p className="text-[#666666] text-sm">Landing page conversion rate for demo requests</p>
            </div>
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-4">With Demo Video</h3>
              <p style={{ ...displayStyle, fontSize: '48px' }} className="text-[#ebff00] leading-none mb-2">15–20%</p>
              <p className="text-[#666666] text-sm">Landing page conversion rate for demo requests</p>
            </div>
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-4">Revenue Lift</h3>
              <p style={{ ...displayStyle, fontSize: '48px' }} className="text-[#ebff00] leading-none mb-2">+200%</p>
              <p className="text-[#666666] text-sm">More demo requests from the same traffic</p>
            </div>
          </div>
          <div className="border border-[#1a1a1a] p-8 mt-px">
            <p className="text-[#888888] text-sm mb-2"><span className="text-white font-bold">Example:</span> SaaS company with 10K monthly visitors.</p>
            <p className="text-[#888888] text-sm mb-2">Without video: 500 demo requests × 10% close rate = 50 deals.</p>
            <p className="text-[#888888] text-sm mb-6">With video: 1,500 demo requests × 12% close rate = 180 deals.</p>
            <p style={{ ...displayStyle, fontSize: '32px' }} className="text-[#ebff00] leading-none">+130 DEALS. +$650K/MONTH. ROI: 8,000%+</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">FAQ</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            PRODUCT DEMO VIDEOS
          </h2>
          <div className="space-y-0">
            {[
              { q: 'How long does a product demo video take?', a: '24–48 hours from script approval. You provide the brief; we handle the rest.' },
              { q: 'Can I update the demo if my product changes?', a: 'Yes. Update the script and we regenerate the video in 24 hours at no additional cost.' },
              { q: 'Where can I use product demo videos?', a: 'Landing pages, sales emails, product pages, YouTube, LinkedIn, email campaigns, and in-app tutorials.' },
              { q: 'Can you create demos for different use cases?', a: 'Absolutely. Create 10, 50, or 100 use-case-specific demos. Perfect for personalization at scale.' },
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
            YOUR FIRST DEMO.<br /><span style={{ color: '#ebff00' }}>24 HOURS FROM NOW.</span>
          </h2>
          <p className="text-[#888888] mb-10">No expensive videographers. No filming logistics. Just high-quality video that converts prospects into pipeline.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Start Your Demo Video
          </Link>
        </div>
      </section>
    </>
  )
}
