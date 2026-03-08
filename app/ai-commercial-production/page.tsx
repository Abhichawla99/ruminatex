import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Commercial Production Agency | TV & Digital Commercials | Ruminate X',
  description: 'AI-powered commercial production for TV, digital, and social. Impossible visuals, cinematic quality, 70% lower cost than traditional commercial production agencies.',
  keywords: ['AI commercial production', 'AI TV commercial', 'AI ad production agency', 'AI-generated commercials', 'automated commercial video', 'AI commercial agency'],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const deliverables = [
  { title: 'TV Commercials', desc: '30, 45, and 60-second broadcast-ready commercials. Cinematic quality that meets every broadcaster standard.' },
  { title: 'Digital Pre-Roll', desc: '6, 15, and 30-second digital ad units optimized for YouTube, programmatic, and OTT platforms.' },
  { title: 'Social Commercials', desc: 'Platform-optimized commercial content for Meta, TikTok, Instagram, and LinkedIn — every format, every ratio.' },
  { title: 'Campaign Creative Suites', desc: 'Full campaign packages — hero commercial plus cutdowns, social variants, and still frame derivatives.' },
  { title: 'Performance Ad Creative', desc: 'High-volume, A/B testable ad creative for performance marketing campaigns. Multiple variations, same quality.' },
  { title: 'International Adaptations', desc: 'Adapt your commercial for multiple global markets simultaneously. Localized without re-shooting.' },
]

export default function CommercialProductionPage() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">Commercial Production</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI<br />COMMERCIAL<br /><span style={{ color: '#ebff00' }}>PRODUCTION.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Commercials that stop the scroll, own the room, and move the market. AI production delivers the visual impossibility that traditional commercial shoots charge $500K for — in 2–3 weeks, at a fraction of the cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Brief Your Commercial</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '90%', label: 'Lower cost than traditional commercial production' },
              { stat: '2–3 wks', label: 'Production to delivery' },
              { stat: '∞', label: 'Impossible shots achievable' },
              { stat: '4K', label: 'Broadcast-ready quality' },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <p style={{ ...displayStyle, fontSize: 'clamp(32px, 4vw, 52px)', color: '#ebff00' }}>{stat}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-[#666666] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What We Deliver</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">EVERY FORMAT.<br />EVERY PLATFORM.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map(({ title, desc }) => (
            <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The AI Advantage</p>
            <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-8">WHAT MAKES AI<br />COMMERCIAL<br />PRODUCTION<br />DIFFERENT</h2>
            <p className="text-[#888888] leading-relaxed mb-6">Traditional commercial production is constrained by physics, budget, and logistics. Every impossible shot requires specialists, permits, equipment, and weeks of coordination. AI removes every one of those constraints.</p>
            <p className="text-[#888888] leading-relaxed">The commercial you could never afford to make, the shot your director said was impossible, the environment that doesn&apos;t exist — all of it is now achievable on a realistic marketing budget.</p>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Traditional Commercial Production', cost: '$150K–$500K+', time: '8–16 weeks' },
              { label: 'Ruminate X AI Commercial', cost: '70–90% less', time: '2–3 weeks' },
            ].map(({ label, cost, time }) => (
              <div key={label} className="border border-[#1a1a1a] p-8">
                <p className="text-[#888888] text-xs uppercase tracking-[0.15em] mb-4">{label}</p>
                <div className="flex justify-between">
                  <div>
                    <p style={{ ...displayStyle, fontSize: '32px', color: '#ebff00' }}>{cost}</p>
                    <p className="text-xs text-[#666666] uppercase tracking-wider">Budget</p>
                  </div>
                  <div>
                    <p style={{ ...displayStyle, fontSize: '32px', color: '#ebff00' }}>{time}</p>
                    <p className="text-xs text-[#666666] uppercase tracking-wider">Timeline</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            THE COMMERCIAL<br /><span style={{ color: '#ebff00' }}>YOU ALWAYS<br />WANTED.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us the impossible shot. We&apos;ll show you how it gets made.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
        </div>
      </section>
    </>
  )
}
