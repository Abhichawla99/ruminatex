import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Social Content — A Micro-Film Every Time | Ruminate X',
  description: 'We refuse to make filler content. Every piece of social content we produce is built around a story. Fifteen seconds is a story. Sixty seconds is a film. We treat them the same.',
  keywords: ['AI social media video agency', 'AI social content production', 'AI video for Instagram', 'AI TikTok video agency', 'social video production AI', 'AI Reels production'],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const platforms = [
  { title: 'TikTok Content', desc: 'Scroll-stopping TikTok videos built for the algorithm and your audience. Cinematic quality in a native-feeling format.' },
  { title: 'Instagram Reels', desc: 'Aesthetic-first Reels content that builds brand equity while driving engagement. Studio quality, platform-native format.' },
  { title: 'YouTube Shorts', desc: 'High-impact YouTube Shorts that grow subscribers and expand reach. Cinematic storytelling in 60 seconds.' },
  { title: 'LinkedIn Video', desc: 'B2B brand video content optimized for LinkedIn. Thought leadership, culture, and product content for professional audiences.' },
  { title: 'Pinterest Video Pins', desc: 'Aspirational video content for Pinterest that drives traffic and builds brand discovery for lifestyle and e-commerce brands.' },
  { title: 'Multi-Platform Campaigns', desc: 'Single creative concept adapted for every platform simultaneously. One brief. Every channel. Maximum consistency.' },
]

export default function SocialMediaVideoAgencyPage() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">Social Media Video</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            A MICRO-FILM.<br />EVERY SINGLE<br /><span style={{ color: '#ebff00' }}>TIME.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            We refuse to make filler content. Every piece of social content we produce is built around a story — a hook that earns attention, a middle that builds tension or desire, an ending that lands. Fifteen seconds is a story. Sixty seconds is a film. We treat them both with the same seriousness, because your audience does too.
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
              { stat: '50+', label: 'Social assets per month, per brand' },
              { stat: '2 wks', label: 'First batch delivered' },
              { stat: '6', label: 'Platforms covered simultaneously' },
              { stat: '70%', label: 'Lower cost than traditional social agencies' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Platforms We Cover</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">EVERY PLATFORM.<br />SAME QUALITY.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map(({ title, desc }) => (
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
            <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Volume Problem</p>
            <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-8">YOUR BRAND<br />NEEDS MORE<br />CONTENT THAN<br />YOU CAN MAKE</h2>
            <p className="text-[#888888] leading-relaxed mb-6">The modern brand needs to publish multiple times per week across 4–6 platforms. Traditional production — even with a talented in-house team — cannot sustainably produce that volume at the quality your brand deserves.</p>
            <p className="text-[#888888] leading-relaxed">AI social video production solves the volume problem without sacrificing quality. We operate as your on-demand social video studio — producing high-volume, studio-quality content on a consistent cadence.</p>
          </div>
          <div className="space-y-6">
            {[
              { title: 'BRAND-LED CONTENT', desc: 'Every piece is strategically aligned with your brand identity, messaging, and seasonal calendar.' },
              { title: 'PLATFORM-NATIVE', desc: "Content built for each platform's algorithm and audience behavior — not just re-sized from a master." },
              { title: 'CONSISTENT CADENCE', desc: 'A sustainable content pipeline that keeps your brand active and visible week over week.' },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-[#1a1a1a] p-6">
                <h3 style={{ ...displayStyle, fontSize: '22px', color: '#ebff00' }} className="mb-2">{title}</h3>
                <p className="text-[#666666] text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            NEVER RUN OUT<br /><span style={{ color: '#ebff00' }}>OF CONTENT<br />AGAIN.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us your platforms and content goals. We&apos;ll build the engine.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
        </div>
      </section>
    </>
  )
}
