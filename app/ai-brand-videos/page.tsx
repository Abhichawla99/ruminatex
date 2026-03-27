import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Brand Videos | Scalable Video Content for Every Brand | Ruminate X',
  description: 'Create stunning AI brand videos at scale. Ruminate X delivers high-quality, on-brand video content faster and more affordably than traditional production.',
  keywords: ['AI brand videos', 'AI-generated brand video', 'brand video production AI', 'AI video content for brands', 'automated brand video creation', 'AI brand video agency'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-brand-videos',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Brand Videos',
  description: 'Professional AI-powered brand video production that delivers cinematic content at scale — faster, more affordable, and endlessly adaptable.',
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
  { title: 'Speed at Scale', desc: 'Go from concept to finished brand video in days, not months. Our AI workflows compress traditional timelines by up to 80%, letting you launch campaigns while the moment is still relevant.' },
  { title: 'Consistent Brand Identity', desc: 'Every frame matches your visual language — colours, typography, tone of voice, motion style. AI ensures brand consistency across dozens of videos without creative drift.' },
  { title: 'Fraction of Traditional Cost', desc: 'No crews, no studio bookings, no location fees. AI brand videos deliver cinematic results at a fraction of the price, freeing budget for distribution and strategy.' },
  { title: 'Unlimited Variations', desc: 'Need the same video adapted for five audiences, three platforms, and two languages? AI makes variant production trivial — one concept, infinite executions.' },
]

const useCases = [
  { title: 'Product Launch Videos', desc: 'Introduce new products with polished visuals that communicate features, benefits, and brand positioning in under 60 seconds.' },
  { title: 'Social Media Brand Content', desc: 'Feed-native vertical videos, stories, and reels designed for engagement — produced in volume without sacrificing quality.' },
  { title: 'Brand Story & Mission Films', desc: 'Cinematic narratives that communicate who you are, what you stand for, and why it matters — built for homepage heroes and investor decks.' },
  { title: 'Paid Ad Creatives', desc: 'High-converting video ads for Meta, YouTube, TikTok, and LinkedIn — with rapid creative testing and iteration baked in.' },
  { title: 'Internal & Culture Videos', desc: 'Onboarding videos, culture reels, and employer branding content that attract top talent and align teams.' },
  { title: 'Event & Campaign Recaps', desc: 'Turn event footage, photos, and key moments into polished recap videos that extend the life of every campaign.' },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We learn your brand inside and out — visual identity, voice, audience, and goals. Every AI brand video we produce is rooted in strategy, not templates.' },
  { step: '02', title: 'Creative Direction', desc: 'Our team crafts the concept, script, and storyboard. AI amplifies our creative vision — it never replaces it. You approve the direction before production begins.' },
  { step: '03', title: 'AI Production', desc: 'We generate visuals, motion, voiceover, and music using our proprietary AI pipeline. Every asset is reviewed by human creatives for quality and brand alignment.' },
  { step: '04', title: 'Delivery & Optimization', desc: 'You receive finished videos in every format you need — plus platform-specific cuts, captions, and thumbnails ready to publish.' },
]

export default function AIBrandVideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Brand Videos</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI BRAND VIDEOS<br />THAT ACTUALLY<br /><span style={{ color: '#ebff00' }}>FEEL LIKE YOU.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Your brand deserves video content that moves as fast as your business does. Ruminate X combines AI-powered production with human creative direction to deliver brand videos that are cinematic, on-brand, and ready in days — not months. Whether you need one hero film or fifty social cuts, we build video systems that scale with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get AI Brand Videos</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '80%', label: 'Faster than traditional brand video' },
              { stat: '5–7 days', label: 'Average delivery time' },
              { stat: '50+', label: 'Video variants from one concept' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Are AI Brand Videos?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">VIDEO CONTENT<br />BUILT FOR THE<br />MODERN BRAND</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            AI brand videos are professional video assets created using artificial intelligence tools — guided, refined, and quality-controlled by experienced human creatives. They are not generic template outputs or robotic voiceover slideshows. At Ruminate X, AI brand videos mean cinematic visuals, compelling narratives, and polished post-production delivered at a pace and price point that traditional agencies simply cannot match.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            The technology handles the heavy lifting — generating motion graphics, compositing scenes, producing voiceovers, and creating platform-specific edits — while our creative team ensures every frame serves your brand strategy. The result is video content that looks like it cost ten times what it did, produced on a timeline that keeps up with the speed of social media and modern marketing.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Brands today need more video than ever. Social platforms reward volume and consistency. Paid media demands constant creative refresh. AI brand videos solve this by making high-quality production repeatable and scalable — without compromising the craft that makes your brand distinctive.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why Brands Choose AI Video</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">THE ADVANTAGES<br />ARE REAL</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">AI BRAND VIDEOS<br />FOR EVERY NEED</h2>
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">HOW WE CREATE<br />YOUR BRAND VIDEOS</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">NOT ANOTHER<br />AI VIDEO TOOL</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Most AI video platforms hand you a login and wish you luck. Ruminate X is a full-service creative agency that happens to be powered by AI. You get a dedicated creative team, a strategic brief, custom storyboards, and a production process built around your brand — not a self-serve tool with a monthly subscription.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            We built our own AI production pipeline specifically for brand video. That means proprietary workflows for visual consistency, voice matching, motion design, and multi-platform export. The AI does what AI does best — speed, scale, and iteration. Our creatives do what humans do best — taste, strategy, and storytelling. Together, we produce <Link href="/ai-video-for-brands" className="text-[#ebff00] hover:underline">AI video for brands</Link> that stands apart from everything else in the feed.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            YOUR BRAND<br />DESERVES BETTER<br /><span style={{ color: '#ebff00' }}>VIDEO.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your brand and your goals. We&apos;ll show you exactly how AI brand videos can transform your content strategy — and deliver a concept within the week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
