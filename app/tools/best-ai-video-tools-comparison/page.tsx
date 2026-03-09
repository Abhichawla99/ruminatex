import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best AI Video Generator Tools Compared 2026: Complete Guide | Ruminate X',
  description: 'Comparison of top AI video generators: Synthesia, InVideo, HeyGen, Pictory, Canva, and more. Pros, cons, pricing.',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Tools / Comparison</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          THE BEST AI<br />VIDEO TOOLS.<br /><span style={{ color: '#ebff00' }}>2026 EDITION.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          Pricing, features, pros, cons, and best use cases for the top AI video generation platforms. Pick the right tool for your shot list.
        </p>
      </section>

      {/* Tools Comparison */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Field</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            TOP AI VIDEO PLATFORMS
          </h2>
          <div className="space-y-0">
            {[
              {
                name: 'Synthesia',
                best: 'Corporate videos with avatars',
                pricing: '$30–$500+/month',
                features: [
                  'AI avatars that talk directly to camera',
                  'Text-to-speech in 140+ languages',
                  'Enterprise-grade security and scalability',
                  'Custom avatar creation for brand consistency',
                ],
                verdict: 'The enterprise standard. Best for corporate training, HR communications, and branded presenter-led content at scale.',
              },
              {
                name: 'InVideo',
                best: 'Social media & marketing videos',
                pricing: '$25–$200/month',
                features: [
                  'Quick video creation from text prompts',
                  '5,000+ professional templates',
                  'Social-optimized export formats',
                  'Built-in stock footage and music library',
                ],
                verdict: 'Best value for marketing teams. Fastest path from idea to publishable social content.',
              },
              {
                name: 'HeyGen',
                best: 'Realistic avatar videos',
                pricing: '$20–$99/month',
                features: [
                  'Lifelike AI avatars with natural movement',
                  'Lip-sync technology that holds up on close inspection',
                  'Personalized video at scale for sales outreach',
                  'Clone your own voice and likeness',
                ],
                verdict: 'The most realistic avatar output on the market. Best for sales personalization and spokesperson content.',
              },
              {
                name: 'Pictory',
                best: 'Converting long-form to shorts',
                pricing: '$19–$99/month',
                features: [
                  'Long-to-short video automation',
                  'Auto-captions with 99% accuracy',
                  'Script-to-video pipeline',
                  'Automatic highlight detection',
                ],
                verdict: 'Purpose-built for content repurposing. One webinar becomes 20 social clips automatically.',
              },
              {
                name: 'Canva',
                best: 'Beginners & small teams',
                pricing: 'Free–$15/month',
                features: [
                  'Intuitive drag-and-drop interface',
                  '10,000+ customizable templates',
                  'Affordable and accessible pricing',
                  'Brand kit for consistency across assets',
                ],
                verdict: 'The entry point. Great for teams just starting with video content. Not the most powerful, but the lowest barrier.',
              },
            ].map(({ name, best, pricing, features, verdict }) => (
              <div key={name} className="border-t border-[#1a1a1a] py-10 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
                <div>
                  <h3 style={{ ...displayStyle, fontSize: '36px' }} className="text-white leading-none mb-2">{name}</h3>
                  <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em]">{pricing}</p>
                </div>
                <div>
                  <p className="text-[#666666] text-xs uppercase tracking-[0.2em] mb-2">Best For</p>
                  <p className="text-white font-bold mb-4">{best}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {features.map((feature) => (
                      <p key={feature} className="text-[#666666] text-sm flex gap-2">
                        <span className="text-[#333333]">—</span>{feature}
                      </p>
                    ))}
                  </div>
                  <div className="border-t border-[#1a1a1a] pt-4">
                    <p className="text-[#888888] text-sm"><span className="text-[#ebff00] font-bold">Verdict: </span>{verdict}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choosing the Right Tool */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Decision Guide</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            MATCH TOOL TO USE CASE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
            {[
              { useCase: 'For SaaS', recommendation: 'Synthesia or HeyGen', reason: 'Avatars, professional look, enterprise security.' },
              { useCase: 'For Marketing', recommendation: 'InVideo or Pictory', reason: 'Templates, quick setup, high-volume output.' },
              { useCase: 'For Social Media', recommendation: 'Pictory or Canva', reason: 'Shorts automation, easy-to-use, fast publishing.' },
              { useCase: 'For Startups', recommendation: 'Canva or InVideo', reason: 'Affordable pricing, fast learning curve.' },
              { useCase: 'For Enterprises', recommendation: 'Synthesia', reason: 'Security, scalability, and compliance features.' },
              { useCase: 'For Sales Teams', recommendation: 'HeyGen', reason: 'Personalized video at scale for outreach.' },
            ].map(({ useCase, recommendation, reason }) => (
              <div key={useCase} className="bg-[#080808] p-8">
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-2">{useCase}</p>
                <h3 className="text-white font-bold mb-2">{recommendation}</h3>
                <p className="text-[#666666] text-sm">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            DON'T JUST PICK A TOOL.<br /><span style={{ color: '#ebff00' }}>BUILD A SYSTEM.</span>
          </h2>
          <p className="text-[#888888] mb-10">The right tool is only half the equation. We help you build the full production workflow that scales.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Get a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
