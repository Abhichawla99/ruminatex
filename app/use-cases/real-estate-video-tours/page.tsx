import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Real Estate Video Tours: Automated Property Walkthrough Videos | Ruminate X',
  description: 'Create professional property walkthrough videos automatically. Photos → video tour in minutes. 95% faster than traditional videographers.',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Use Cases / Real Estate</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          EVERY LISTING.<br />A CINEMATIC<br /><span style={{ color: '#ebff00' }}>TOUR.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          Convert property photos into professional walkthrough videos instantly. Agents create compelling tours in minutes — not hours. Properties sell faster, for more.
        </p>
      </section>

      {/* Stats */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Impact</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            VIDEO TOURS CHANGE THE DEAL
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
            {[
              { stat: '4 Days', label: 'Faster Sales', detail: 'Properties with video tours sell 4 days faster than listings without' },
              { stat: '+5%', label: 'Higher Price', detail: 'Homes with video tours sell for 5% more on average' },
              { stat: '95%', label: 'Faster Production', detail: 'vs. hiring a traditional videographer and scheduling a shoot' },
            ].map(({ stat, label, detail }) => (
              <div key={label} className="bg-[#080808] p-10 text-center">
                <p style={{ ...displayStyle, fontSize: 'clamp(48px, 6vw, 80px)' }} className="text-[#ebff00] leading-none mb-3">{stat}</p>
                <p className="text-white font-bold text-sm mb-2 uppercase tracking-[0.1em]">{label}</p>
                <p className="text-[#666666] text-xs">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Process</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            PHOTOS TO PUBLISHED TOUR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#1a1a1a]">
            {[
              { step: '01', title: 'Upload Photos', detail: 'Exterior shots, room-by-room photos, and property highlight images — whatever you have' },
              { step: '02', title: 'AI Sequences', detail: 'AI arranges photos into a logical walkthrough flow — exterior to entry, room by room' },
              { step: '03', title: 'Add Details', detail: 'Background music, transitions, property info, and voiceover narration applied automatically' },
              { step: '04', title: 'Publish Everywhere', detail: 'Live on MLS, your website, social media, and email campaigns simultaneously' },
            ].map(({ step, title, detail }) => (
              <div key={step} className="bg-[#080808] p-8">
                <span style={{ ...displayStyle, fontSize: '60px' }} className="text-[#333333] leading-none block mb-4">{step}</span>
                <h3 className="text-white font-bold mb-3">{title}</h3>
                <p className="text-[#666666] text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Every Agent */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">For Agents & Teams</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            BUILT FOR THE FIELD
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {[
              {
                segment: 'Individual Agents',
                body: 'Video for every listing, not just your premium properties. Stand out in your market with professional tours on every single listing.',
              },
              {
                segment: 'Team Leaders & Brokerages',
                body: 'Standardize listing quality across your entire team. Every agent on your roster delivers the same level of professional video presentation.',
              },
              {
                segment: 'Property Managers',
                body: 'Video tours for rental listings reduce vacancy periods. Prospective tenants prequalify themselves before viewing in person.',
              },
              {
                segment: 'Developers & New Construction',
                body: 'Sell units before the building is finished. AI-generated tours from architectural renders and model unit photos.',
              },
            ].map(({ segment, body }) => (
              <div key={segment} className="bg-[#080808] p-8">
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">{segment}</p>
                <p className="text-[#888888]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Before vs. After</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            THE VIDEOGRAPHER IS OPTIONAL NOW
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#1a1a1a]">
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-6">Traditional Videographer</h3>
              <div className="space-y-3 text-[#888888]">
                <p>Schedule 2–3 days in advance</p>
                <p>$300–$1,500 per property</p>
                <p>Wait 3–5 days for edited footage</p>
                <p>Pay extra for aerial drone footage</p>
                <p>Reshoot if photos are insufficient</p>
                <div className="border-t border-[#1a1a1a] pt-4 mt-4">
                  <p className="text-white font-bold">1 week. $500–$1,500. One property.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-6">AI Video Tour</h3>
              <div className="space-y-3 text-[#888888]">
                <p>Upload existing listing photos</p>
                <p>$20–$80 per property</p>
                <p>Video ready in minutes</p>
                <p>Music, transitions, narration included</p>
                <p>Create unlimited variations</p>
                <div className="border-t border-[#1a1a1a] pt-4 mt-4">
                  <p className="text-[#ebff00] font-bold">20 minutes. $20–$80. Every listing.</p>
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
            EVERY LISTING<br /><span style={{ color: '#ebff00' }}>DESERVES A TOUR.</span>
          </h2>
          <p className="text-[#888888] mb-10">Professional property walkthrough videos generated from your existing photos. Faster sales. Higher prices. Less effort.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Generate Property Video
          </Link>
        </div>
      </section>
    </>
  )
}
