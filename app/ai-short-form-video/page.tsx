import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Short Form Video | Scroll-Stopping Reels & Shorts | Ruminate X',
  description: 'Create high-performing AI short form video content at scale. Ruminate X produces TikToks, Reels, and YouTube Shorts that stop the scroll and drive results.',
  keywords: ['AI short form video', 'AI reels production', 'AI TikTok videos', 'AI YouTube Shorts', 'short form video agency', 'AI vertical video content'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-short-form-video',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Short Form Video',
  description: 'AI-powered short form video production for TikTok, Instagram Reels, and YouTube Shorts — scroll-stopping content at scale.',
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
  { title: 'Volume Without Burnout', desc: 'Short form platforms reward consistency. Our AI pipeline produces dozens of unique videos per week so your brand stays visible without burning out your creative team or draining your budget.' },
  { title: 'Platform-Native Formats', desc: 'Every video is built for the platform it lives on — vertical 9:16, optimized pacing, native captions, and hook-first structure. No repurposed landscape crops that scream "we don\'t get this platform."' },
  { title: 'Data-Driven Iteration', desc: 'AI makes creative testing fast and cheap. We produce multiple hook variations, visual treatments, and CTA styles per concept — then double down on what performs. Your content gets smarter every week.' },
  { title: 'Brand-Safe at Scale', desc: 'Every video passes through human creative review before delivery. AI handles the production speed — our team ensures the quality, tone, and brand alignment never slip, even at high volume.' },
]

const useCases = [
  { title: 'Product Showcases', desc: 'Snappy, visually rich product reveals that communicate value in under 30 seconds — perfect for driving traffic from Reels and TikTok to your product pages.' },
  { title: 'Educational & How-To Content', desc: 'Quick tips, tutorials, and explainers that position your brand as an authority. AI-generated visuals and motion graphics make complex topics feel effortless.' },
  { title: 'UGC-Style Branded Content', desc: 'Authentic-feeling, creator-style videos that blend into organic feeds while still carrying your brand message. AI lets you produce the UGC aesthetic without depending on individual creators.' },
  { title: 'Trend-Jacking & Timely Content', desc: 'When a trend breaks, speed wins. Our AI workflows let you concept, produce, and publish trend-aligned content within hours — not the days traditional production requires.' },
  { title: 'Paid Social Creatives', desc: 'High-converting vertical ad creatives for Meta, TikTok, and YouTube Shorts campaigns. Rapid iteration means you never run out of fresh creative for your media spend.' },
  { title: 'Behind-the-Scenes & Culture', desc: 'Humanize your brand with polished BTS content, team spotlights, and day-in-the-life videos that build trust and connection with your audience.' },
]

const process = [
  { step: '01', title: 'Strategy', desc: 'We audit your brand, audience, and platform goals. Every short form video we produce ties back to a clear content strategy — not random posting.' },
  { step: '02', title: 'Concept & Script', desc: 'Our creative team writes hooks, scripts, and visual treatments optimized for short form. AI assists with trend analysis and format recommendations, but human storytellers lead the creative.' },
  { step: '03', title: 'AI Production', desc: 'We generate visuals, motion, captions, voiceover, and music using our proprietary pipeline. Multiple variations are produced per concept for A/B testing and platform optimization.' },
  { step: '04', title: 'Review & Deliver', desc: 'Every video is reviewed by our creative team for quality and brand alignment. You receive platform-ready files with captions, thumbnails, and posting recommendations.' },
]

export default function AIShortFormVideoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Short Form Video</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI SHORT FORM VIDEO<br />THAT STOPS<br /><span style={{ color: '#ebff00' }}>THE SCROLL.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            The brands winning on TikTok, Instagram Reels, and YouTube Shorts aren&apos;t posting more — they&apos;re producing smarter. Ruminate X uses AI-powered production to create short form video content that feels native, hooks instantly, and scales without limits. Whether you need ten videos a week or a hundred, we deliver scroll-stopping content that drives real engagement and measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get Short Form Video</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '60+', label: 'Videos produced per month' },
              { stat: '48hrs', label: 'Concept to finished video' },
              { stat: '3–5×', label: 'More engagement than static' },
              { stat: '9:16', label: 'Platform-native, always' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Is AI Short Form Video?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">VERTICAL VIDEO<br />BUILT FOR THE<br />ALGORITHM</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            AI short form video is professional vertical video content — typically between 15 and 90 seconds — created using artificial intelligence tools and refined by experienced human creatives. These are not generic stock clips stitched together with a trending audio track. At Ruminate X, every short form video is strategically crafted, visually polished, and optimized for the specific platform it will live on.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            The challenge with short form content has always been volume. Platforms like TikTok, Instagram, and YouTube Shorts reward accounts that post frequently and consistently. Traditional production simply cannot keep up — by the time a single video is scripted, shot, and edited, the trend it was targeting has already passed. AI changes the equation entirely. Our production pipeline compresses timelines from weeks to hours, enabling brands to publish at the pace platforms demand without sacrificing creative quality.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Every video we produce starts with strategy and ends with human review. AI handles the production-intensive work — generating visuals, compositing motion, producing captions, and creating platform-specific cuts — while our creative team ensures every piece serves your brand, tells a story, and earns attention in the first two seconds. That combination of speed and craft is what separates content that performs from content that simply exists.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why AI Short Form Wins</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">SPEED AND SCALE<br />WITHOUT COMPROMISE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map(({ title, desc }) => (
              <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
                <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Use Cases</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">SHORT FORM VIDEO<br />FOR EVERY GOAL</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map(({ title, desc }) => (
            <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Our Process</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">FROM STRATEGY<br />TO SCROLL-STOPPER</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="border border-[#1a1a1a] p-8">
                <p style={{ ...displayStyle, fontSize: '64px', color: '#1a1a1a' }} className="mb-4">{step}</p>
                <h3 style={{ ...displayStyle, fontSize: '24px', color: '#ebff00' }} className="mb-3">{title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">How We&apos;re Different</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">NOT JUST ANOTHER<br />CONTENT MILL</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Most agencies that promise short form video at scale deliver one of two things: cheap, templated content that blends into the noise, or beautifully produced videos at a pace of two per month. Ruminate X delivers both quality and volume because our AI production pipeline was built specifically for short form — not adapted from a traditional workflow.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            We pair every client with a dedicated creative strategist who understands your brand, your audience, and the platforms you care about. AI amplifies their output — it never replaces their thinking. The result is <Link href="/ai-ugc-reels" className="text-[#ebff00] hover:underline">AI UGC reels</Link> and short form content that feels intentional, on-brand, and designed to perform. Combined with our broader <Link href="/ai-video-for-brands" className="text-[#ebff00] hover:underline">AI video for brands</Link> capabilities, we become your full content engine — from hero films to daily social clips, all from one team.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            YOUR FEED<br />DESERVES BETTER<br /><span style={{ color: '#ebff00' }}>CONTENT.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your brand and your short form goals. We&apos;ll show you how AI-powered production can transform your social presence — and deliver a concept within the week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
