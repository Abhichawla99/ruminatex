import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video for Brands | Scalable Brand Video Production | Ruminate X',
  description: 'AI video for brands that need scroll-stopping content at scale. Ruminate X delivers brand videos faster, cheaper, and better using AI-powered production.',
  keywords: ['AI video for brands', 'AI brand video production', 'AI-powered brand content', 'AI video agency for brands', 'scalable brand video', 'AI brand marketing video'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-video-for-brands',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Video for Brands',
  description: 'AI-powered video production for brands — scalable, fast, and built to convert across every channel.',
  provider: {
    '@type': 'Organization',
    name: 'Ruminate X',
    url: 'https://ruminatex.com',
  },
  serviceType: 'AI Video Production',
  areaServed: 'Worldwide',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const capabilities = [
  { title: 'Brand Story Videos', desc: 'AI-generated narrative content that communicates who you are, what you stand for, and why people should care — produced in days, not months.' },
  { title: 'Product Launch Videos', desc: 'Fast-turnaround launch content that showcases your product from every angle with cinematic quality and zero studio overhead.' },
  { title: 'Social-First Brand Ads', desc: 'Thumb-stopping ads designed for Instagram, TikTok, YouTube Shorts, and LinkedIn — formatted and optimized for each platform natively.' },
  { title: 'Campaign Video Suites', desc: 'Full campaign packages with multiple cuts, aspect ratios, and variations so your media team can test and iterate without reordering production.' },
  { title: 'Brand Anthem & Sizzle Reels', desc: 'High-energy sizzle reels and brand anthems that set the tone for your company — built with AI motion design and cinematic pacing.' },
  { title: 'Evergreen Brand Content', desc: 'Always-on content designed to live permanently on your website, pitch decks, and social channels — timeless brand storytelling at scale.' },
]

const process = [
  { step: '01', title: 'Brand Immersion', desc: 'We absorb your brand guidelines, tone of voice, audience profiles, and competitive positioning. Every frame we produce is filtered through your brand DNA.' },
  { step: '02', title: 'Creative Strategy', desc: 'We build a content plan around your goals — awareness, conversion, retention — and map each video to a specific moment in your customer journey.' },
  { step: '03', title: 'AI Production Pipeline', desc: 'Our proprietary AI pipeline generates broadcast-quality video at a fraction of the traditional cost. No crew scheduling. No location scouting. No post-production bottlenecks.' },
  { step: '04', title: 'Deliver & Optimize', desc: 'You receive multiple variations optimized for every channel. We provide performance recommendations and can iterate on winning concepts in hours, not weeks.' },
]

const reasons = [
  { stat: '10x', label: 'Faster than traditional brand video production' },
  { stat: '70%', label: 'Lower cost per finished video asset' },
  { stat: '48 hrs', label: 'Average turnaround on first drafts' },
  { stat: '∞', label: 'Variations — test without limits' },
]

export default function AiVideoForBrandsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Video for Brands</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI VIDEO<br />FOR BRANDS<br /><span style={{ color: '#ebff00' }}>THAT MOVE FAST.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Your brand needs video everywhere — social feeds, landing pages, ad campaigns, pitch decks. Traditional production can&apos;t keep up. AI can. Ruminate X builds brand video at the speed your marketing team actually needs, without sacrificing quality or brand consistency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get Brand Video</Link>
            <Link href="/ai-brand-film-agency" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Brand Films</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {reasons.map((r, i) => (
              <div key={i} className="text-center">
                <div style={displayStyle} className="text-[#ebff00] text-5xl md:text-6xl mb-2">{r.stat}</div>
                <p className="text-[#888888] text-sm">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4 block">The Problem</span>
            <h2 style={displayStyle} className="text-white text-4xl md:text-6xl mb-6">BRANDS NEED MORE VIDEO THAN EVER. TRADITIONAL PRODUCTION CAN&apos;T DELIVER.</h2>
            <p className="text-[#888888] text-lg leading-relaxed">
              Every marketing channel demands video — and not just any video, but on-brand, platform-optimized, audience-specific content. The old model of hiring a crew, booking a studio, and waiting six weeks for a single deliverable is broken. Brands that win today are the ones producing dozens of video assets per month, testing aggressively, and iterating in real time. That requires a fundamentally different approach to production.
            </p>
          </div>
          <div className="max-w-3xl">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4 block">Our Approach</span>
            <h2 style={displayStyle} className="text-white text-4xl md:text-6xl mb-6">AI-POWERED BRAND VIDEO THAT SCALES WITH YOU.</h2>
            <p className="text-[#888888] text-lg leading-relaxed">
              Ruminate X combines creative strategy with an AI production pipeline that generates professional brand video at a fraction of the traditional cost and timeline. We don&apos;t replace creativity — we amplify it. Every video starts with a human-crafted strategy and ends with AI-accelerated production that would take a traditional team weeks to match. The result is more content, more testing, and more wins for your brand.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4 block">What We Build</span>
          <h2 style={displayStyle} className="text-white text-4xl md:text-6xl mb-16">AI VIDEO FORMATS FOR EVERY BRAND NEED.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
            {capabilities.map((c, i) => (
              <div key={i} className="bg-[#0a0a0a] p-8 md:p-10">
                <h3 className="text-white font-bold text-lg mb-3">{c.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4 block">Process</span>
          <h2 style={displayStyle} className="text-white text-4xl md:text-6xl mb-16">FROM BRIEF TO BRAND VIDEO IN FOUR STEPS.</h2>
          <div className="space-y-0 divide-y divide-[#1a1a1a]">
            {process.map((p) => (
              <div key={p.step} className="grid md:grid-cols-12 gap-6 py-10">
                <div className="md:col-span-1">
                  <span style={displayStyle} className="text-[#ebff00] text-3xl">{p.step}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-white font-bold text-lg">{p.title}</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-[#888888] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4 block">Use Cases</span>
          <h2 style={displayStyle} className="text-white text-4xl md:text-6xl mb-8">WHO IS AI VIDEO FOR BRANDS BUILT FOR?</h2>
          <div className="max-w-3xl">
            <p className="text-[#888888] text-lg leading-relaxed mb-6">
              DTC brands launching new products monthly and needing fresh creative for every drop. SaaS companies running multi-channel ad campaigns that require constant A/B testing. Enterprise marketing teams producing content across regions and languages at a pace that would overwhelm any traditional agency. Startups that need agency-quality brand video on a founder-stage budget.
            </p>
            <p className="text-[#888888] text-lg leading-relaxed mb-6">
              If your brand creates content regularly — or wishes it could — AI video production removes the bottleneck. You stop choosing between quality and quantity. You get both.
            </p>
            <p className="text-[#888888] text-lg leading-relaxed">
              Whether you need a single brand anthem or fifty social cuts per month, Ruminate X builds a production system that grows with your brand, not against it. Every asset is on-brand, on-time, and built to perform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 style={displayStyle} className="text-white text-4xl md:text-7xl mb-6">READY TO SCALE YOUR<br /><span style={{ color: '#ebff00' }}>BRAND VIDEO?</span></h2>
          <p className="text-[#888888] text-lg max-w-xl mx-auto mb-10">
            Tell us about your brand and your goals. We&apos;ll show you exactly how AI video production can transform your content pipeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start Your Project</Link>
            <Link href="/" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
