import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video for Restaurants | Menu Videos, Reels & Promos | Ruminate X',
  description: 'AI-powered video production for restaurants. Menu showcases, social reels, promo videos & UGC-style content — delivered fast and at a fraction of traditional cost.',
  keywords: ['AI video for restaurants', 'restaurant video production', 'AI restaurant marketing', 'restaurant promo videos', 'AI food video', 'restaurant social media video'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-video-for-restaurants',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Video for Restaurants',
  description: 'AI-powered video production tailored for restaurants — from menu showcases and social reels to grand opening promos and delivery app content.',
  provider: {
    '@type': 'Organization',
    name: 'Ruminate X',
    url: 'https://ruminatex.com',
  },
  areaServed: 'Worldwide',
  serviceType: 'AI Video Production',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const benefits = [
  { title: 'Daily Content Without Daily Shoots', desc: 'Restaurants need a constant stream of fresh content for Instagram, TikTok, and Google Business. AI video production lets you generate new reels and promos every week without booking a videographer or disrupting service.' },
  { title: 'Menu Updates in Hours, Not Weeks', desc: 'Seasonal menus, limited-time offers, and daily specials deserve video — but traditional production is too slow. AI lets you produce polished menu showcase videos the same day a new dish hits the pass.' },
  { title: 'Fraction of Traditional Production Cost', desc: 'A single professional food shoot can cost thousands. AI video production delivers the same scroll-stopping quality at a price point that makes sense for independent restaurants and multi-location chains alike.' },
  { title: 'Platform-Ready Formats', desc: 'Every video is delivered in the exact formats your platforms demand — vertical for Reels and TikTok, square for feeds, landscape for YouTube and in-venue screens. No resizing, no awkward crops.' },
]

const useCases = [
  { title: 'Menu Showcase Videos', desc: 'Beautiful, motion-rich videos that walk viewers through your signature dishes, seasonal specials, and tasting menus. Designed to make people hungry and hit the reservation button.' },
  { title: 'Social Media Reels & Stories', desc: 'Short-form, scroll-stopping content built for Instagram Reels, TikTok, and Facebook Stories. Behind-the-scenes kitchen energy, plating close-ups, and atmosphere shots that build your brand daily.' },
  { title: 'Grand Opening & Event Promos', desc: 'Launch a new location, announce a pop-up, or promote a wine dinner with cinematic promo videos — produced fast enough to match the pace of your event calendar.' },
  { title: 'Delivery & Takeout App Content', desc: 'Stand out on UberEats, DoorDash, and Skip with video-first listings. AI-generated food videos outperform static photos on every delivery platform that supports them.' },
  { title: 'Recruitment & Culture Videos', desc: 'Attract top kitchen and front-of-house talent with videos that showcase your restaurant culture, team energy, and why your spot is the place to work.' },
  { title: 'Customer Testimonial & UGC-Style Content', desc: 'AI-produced videos that feel authentic and unscripted — the UGC aesthetic that drives trust and engagement, without relying on customers to create it for you.' },
]

const process = [
  { step: '01', title: 'Brand & Menu Brief', desc: 'We learn your restaurant — cuisine style, brand voice, target audience, and which dishes or experiences you want to spotlight. Every video starts with strategy, not guesswork.' },
  { step: '02', title: 'Script & Visual Direction', desc: 'Our team writes hooks, shot lists, and visual storyboards tailored to food content. You approve the creative direction before production begins.' },
  { step: '03', title: 'AI Video Production', desc: 'We produce your videos using our AI pipeline — generating motion, transitions, text overlays, music, and voiceover. Human creatives review every frame for quality and appetite appeal.' },
  { step: '04', title: 'Delivery & Content Calendar', desc: 'You receive finished videos in every format you need, plus a suggested posting schedule. New batches can be produced weekly to keep your feed fresh without lifting a finger.' },
]

export default function AIVideoForRestaurantsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Video for Restaurants</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI VIDEO FOR<br />RESTAURANTS THAT<br /><span style={{ color: '#ebff00' }}>FILL SEATS.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Your food deserves more than a static photo on a third-party app. Ruminate X produces AI-powered video content built specifically for restaurants — menu showcases, social reels, promo spots, and UGC-style content that makes people hungry and drives them through your door. Fresh content every week, without the overhead of traditional video production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get Restaurant Video</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '48hr', label: 'Average Turnaround' },
              { value: '80%', label: 'Cost Savings vs Traditional' },
              { value: '3x', label: 'More Engagement Than Photos' },
              { value: '∞', label: 'Content Variations' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div style={displayStyle} className="text-4xl md:text-5xl text-[#ebff00]">{stat.value}</div>
                <div className="text-xs text-[#666666] uppercase tracking-[0.2em] mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">Why AI Video</span>
            <h2 style={displayStyle} className="text-4xl md:text-6xl text-white mt-4">
              YOUR RESTAURANT NEEDS<br />VIDEO. AI MAKES IT<br /><span style={{ color: '#ebff00' }}>ACTUALLY POSSIBLE.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/30 transition-colors">
                <h3 className="text-white text-lg font-bold mb-3">{b.title}</h3>
                <p className="text-[#888888] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">Use Cases</span>
            <h2 style={displayStyle} className="text-4xl md:text-6xl text-white mt-4">
              VIDEO CONTENT FOR<br />EVERY PART OF YOUR<br /><span style={{ color: '#ebff00' }}>RESTAURANT BUSINESS.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((uc) => (
              <div key={uc.title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/30 transition-colors">
                <h3 className="text-white text-lg font-bold mb-3">{uc.title}</h3>
                <p className="text-[#888888] leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">How It Works</span>
            <h2 style={displayStyle} className="text-4xl md:text-6xl text-white mt-4">
              FROM BRIEF TO<br />CONTENT CALENDAR<br /><span style={{ color: '#ebff00' }}>IN DAYS.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step} className="relative">
                <div style={displayStyle} className="text-6xl text-[#ebff00]/10 mb-4">{p.step}</div>
                <h3 className="text-white text-lg font-bold mb-3">{p.title}</h3>
                <p className="text-[#888888] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">The Restaurant Video Gap</span>
            <h2 style={displayStyle} className="text-4xl md:text-6xl text-white mt-4">
              WHY MOST RESTAURANTS<br />DON&apos;T HAVE ENOUGH<br /><span style={{ color: '#ebff00' }}>VIDEO CONTENT.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#888888] leading-relaxed mb-6">
                Every restaurant owner knows video works. They see competitors blowing up on TikTok and Instagram Reels. They know a 15-second clip of a sizzling steak generates more reservations than a week of static posts. But traditional video production has always been a non-starter for most food businesses.
              </p>
              <p className="text-[#888888] leading-relaxed mb-6">
                A single professional food shoot costs anywhere from two to ten thousand dollars. It takes weeks to schedule, disrupts service, and delivers a handful of assets that go stale within a month. For restaurants operating on thin margins with menus that change seasonally, the math has never worked.
              </p>
              <p className="text-[#888888] leading-relaxed">
                AI video production eliminates every one of those barriers. Ruminate X delivers broadcast-quality restaurant video content at a fraction of the cost, on a timeline measured in days instead of weeks, and in volumes that keep your social feeds fresh month after month. The restaurants winning on social media in 2026 are not the ones with the biggest budgets — they are the ones with the smartest production workflows.
              </p>
            </div>
            <div className="border border-[#1a1a1a] p-8">
              <h3 className="text-white text-lg font-bold mb-6">Traditional vs AI Video Production</h3>
              <div className="space-y-4">
                {[
                  { label: 'Cost per video', trad: '$2,000–$10,000', ai: 'From $200' },
                  { label: 'Turnaround', trad: '3–6 weeks', ai: '24–48 hours' },
                  { label: 'Videos per month', trad: '2–4', ai: '20–50+' },
                  { label: 'Menu update videos', trad: 'Re-shoot required', ai: 'Same-day production' },
                  { label: 'Platform formats', trad: 'Extra cost per format', ai: 'All formats included' },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-3 gap-4 py-3 border-b border-[#1a1a1a]">
                    <span className="text-[#888888] text-sm">{row.label}</span>
                    <span className="text-[#666666] text-sm">{row.trad}</span>
                    <span className="text-[#ebff00] text-sm">{row.ai}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#080808] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 style={displayStyle} className="text-4xl md:text-6xl text-white mb-6">
            READY TO FILL YOUR<br />FEED AND YOUR<br /><span style={{ color: '#ebff00' }}>DINING ROOM?</span>
          </h2>
          <p className="text-[#888888] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join the restaurants already using AI video to drive reservations, delivery orders, and social growth — without the overhead of traditional production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start Your Restaurant Video</Link>
            <Link href="/ai-video-for-ecommerce" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Ecommerce Video</Link>
          </div>
        </div>
      </section>
    </>
  )
}
