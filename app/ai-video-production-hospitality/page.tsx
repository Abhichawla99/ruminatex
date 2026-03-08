import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Production for Hospitality & Travel Brands | Ruminate X',
  description: 'Cinematic AI-powered brand films for hotels, resorts, travel brands, and tourism boards. Bring any destination to life — without flying a production crew there.',
  keywords: ['AI video production hospitality', 'hotel brand video agency', 'travel video production AI', 'luxury hotel video content', 'hospitality marketing video', 'resort brand film AI'],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const useCases = [
  { title: 'Hotel & Resort Brand Films', desc: 'Cinematic destination stories that make potential guests feel the experience before they arrive. Every sensory detail, elevated.' },
  { title: 'Pre-Opening Campaigns', desc: 'Launch your property before it opens. AI-generated content brings unfinished spaces to life for pre-sales, press, and investor communications.' },
  { title: 'Destination Travel Films', desc: 'Capture the soul of a place without sending a crew around the world. AI-powered destination content at a fraction of traditional travel production costs.' },
  { title: 'Dining & F&B Content', desc: 'Premium food and beverage visual content for restaurant groups, hotel dining, and culinary brands. Appetite-inducing cinematography at scale.' },
  { title: 'Wellness & Spa Campaigns', desc: 'The sensory experience of luxury wellness, rendered in cinematic AI. Content that communicates calm, space, and transformation.' },
  { title: 'Global Distribution Content', desc: 'Produce market-specific versions of your brand story for different global markets — simultaneously, without the traditional cost multiply.' },
]

export default function HospitalityPage() {
  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">Hospitality & Travel</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 11vw, 150px)' }} className="text-white leading-none mb-8 max-w-5xl">
            AI VIDEO<br />PRODUCTION FOR<br /><span style={{ color: '#ebff00' }}>HOSPITALITY<br />BRANDS</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-xl mb-12 leading-relaxed">
            Every destination tells a story. We create cinematic AI-powered brand content for hotels, resorts, and travel brands that brings any place — and any vision — to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '0', label: 'Flights required for production' },
              { stat: '2–3 wks', label: 'From brief to delivery' },
              { stat: '80%', label: 'Cost savings vs. location shoots' },
              { stat: '∞', label: 'Destinations visualized' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What We Create</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">CONTENT THAT<br />SELLS EXPERIENCES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map(({ title, desc }) => (
            <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-6">
            YOUR DESTINATION.<br /><span style={{ color: '#ebff00' }}>THEIR NEXT<br />BOOKING.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your property. We&apos;ll make the world want to visit it.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
        </div>
      </section>
    </>
  )
}
