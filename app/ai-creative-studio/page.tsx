import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Creative Studio | AI-Powered Video & Content Production | Ruminate X',
  description: 'Ruminate X is your AI creative studio — producing brand films, UGC reels, ads, and visual content at speed and scale with human creative direction.',
  keywords: ['AI creative studio', 'AI video studio', 'AI content studio', 'AI-powered creative agency', 'AI video production studio', 'creative studio AI'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-creative-studio',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Creative Studio',
  description: 'Full-service AI creative studio delivering brand films, social content, UGC reels, and video ads with human creative direction and AI-powered production.',
  provider: {
    '@type': 'Organization',
    name: 'Ruminate X',
    url: 'https://ruminatex.com',
  },
  areaServed: 'Worldwide',
  serviceType: 'AI Creative Production',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const capabilities = [
  { title: 'Brand Films & Commercials', desc: 'Cinematic hero videos, product launches, and brand story films produced in days instead of months. AI handles the heavy production while our directors shape the narrative.' },
  { title: 'UGC & Social Reels', desc: 'Scroll-stopping vertical content designed for TikTok, Instagram, and YouTube Shorts. We produce dozens of variations from a single creative brief — ready to test and scale.' },
  { title: 'Video Ads at Volume', desc: 'High-converting ad creatives for Meta, Google, TikTok, and LinkedIn. Rapid iteration means you can test more concepts and find winners faster than any traditional agency.' },
  { title: 'Motion Graphics & Visual Design', desc: 'Animated explainers, logo reveals, data visualizations, and kinetic typography — all generated through AI pipelines and refined by experienced motion designers.' },
  { title: 'Content Systems & Workflows', desc: 'We do not just deliver videos — we build repeatable production systems. Your brand gets a content engine that produces on-brand assets on demand, month after month.' },
  { title: 'Multi-Platform Adaptation', desc: 'One concept, every format. We automatically generate cuts for Stories, Reels, landscape, square, and widescreen — complete with captions, thumbnails, and platform-specific optimization.' },
]

const differentiators = [
  { title: 'Human-Led, AI-Powered', desc: 'Every project starts with a human creative director who builds the strategy, concept, and storyboard. AI accelerates production — it never replaces creative thinking.' },
  { title: 'Proprietary Production Pipeline', desc: 'We built our own AI workflows from the ground up — tuned for brand consistency, visual quality, and speed. This is not off-the-shelf software with a logo on top.' },
  { title: 'Speed Without Compromise', desc: 'Most studios make you choose between fast and good. Our AI creative studio delivers both — cinematic quality on timelines that keep pace with your marketing calendar.' },
  { title: 'Built for Scale', desc: 'Whether you need one brand film or fifty social cuts per month, our systems scale without adding headcount, cost, or creative drift to your workflow.' },
]

const process = [
  { step: '01', title: 'Strategy & Brief', desc: 'We start with your brand, your goals, and your audience. Our creative team develops a strategic brief that guides everything — tone, style, messaging, and deliverables.' },
  { step: '02', title: 'Concept & Storyboard', desc: 'Our directors craft the creative concept, script, and visual storyboard. You review and approve the direction before a single frame is produced.' },
  { step: '03', title: 'AI-Powered Production', desc: 'Our proprietary pipeline generates visuals, motion, voiceover, and music. Human creatives review every output for quality, brand alignment, and emotional impact.' },
  { step: '04', title: 'Delivery & Optimization', desc: 'You receive finished assets in every format and aspect ratio you need — plus performance recommendations for each platform. Revisions are fast because iteration is built into the system.' },
]

export default function AICreativeStudioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Creative Studio</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            YOUR AI<br />CREATIVE STUDIO<br /><span style={{ color: '#ebff00' }}>IS HERE.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Ruminate X is a full-service AI creative studio that produces cinematic brand films, social content, UGC reels, and video ads — all powered by artificial intelligence and guided by experienced human creatives. We built our studio from the ground up to solve a problem every modern brand faces: the need for more high-quality video content, produced faster and at a fraction of traditional costs. This is not a self-serve AI tool. This is a creative partner with a production engine unlike anything else in the industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Work With Our Studio</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '10x', label: 'Faster than traditional studios' },
              { stat: '5–7 days', label: 'Concept to final delivery' },
              { stat: '100+', label: 'Videos delivered per month' },
              { stat: '4K', label: 'Cinema-grade output, always' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Is an AI Creative Studio?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">A NEW KIND<br />OF CREATIVE<br />PARTNER</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            An AI creative studio is a production company that uses artificial intelligence as the backbone of its creative workflow — from generating visuals and motion graphics to producing voiceovers, music, and platform-specific edits. But the word &quot;studio&quot; matters. Unlike standalone AI video tools that hand you a login and leave you to figure things out, an AI creative studio provides the full agency experience: strategy, creative direction, production, and delivery.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            At Ruminate X, our AI creative studio model means you get a dedicated team of directors, designers, and strategists who understand your brand. The AI handles what it does best — speed, scale, iteration, and consistency. The humans handle what they do best — taste, storytelling, emotional resonance, and strategic thinking. The combination produces content that looks like it cost ten times what it did, delivered on timelines that traditional studios cannot touch.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Brands today are expected to show up everywhere — social feeds, paid channels, websites, email, events, and investor decks — with video that looks polished and feels intentional. An AI creative studio makes that volume sustainable. Instead of choosing between quality and quantity, you get both. That is the promise of the <Link href="/ai-video-agency" className="text-[#ebff00] hover:underline">AI video agency</Link> model, and Ruminate X is leading the way.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Studio Capabilities</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">EVERYTHING<br />YOUR BRAND NEEDS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(({ title, desc }) => (
              <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
                <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why Choose Ruminate X</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">WHAT MAKES<br />OUR STUDIO<br />DIFFERENT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map(({ title, desc }) => (
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">HOW OUR AI<br />STUDIO WORKS</h2>
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Who It&apos;s For</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">BUILT FOR BRANDS<br />THAT MOVE FAST</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Our AI creative studio serves brands across every industry — from DTC e-commerce companies that need constant social content to enterprise SaaS companies launching global campaigns. If you are a marketing leader, founder, or creative director who needs more video than your current setup can produce, Ruminate X is built for you.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            We work with teams that value speed without sacrificing craft, that understand the power of video but are frustrated by the cost and slowness of traditional production. Whether you need <Link href="/ai-brand-videos" className="text-[#ebff00] hover:underline">AI brand videos</Link> for a product launch or a full library of <Link href="/ai-ugc-reels" className="text-[#ebff00] hover:underline">AI UGC reels</Link> for paid social, our studio adapts to your needs and scales with your ambitions.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            READY TO WORK<br />WITH AN AI<br /><span style={{ color: '#ebff00' }}>CREATIVE STUDIO?</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your brand and what you need. We&apos;ll show you exactly how our AI creative studio can transform your content output — and deliver a concept within the week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
