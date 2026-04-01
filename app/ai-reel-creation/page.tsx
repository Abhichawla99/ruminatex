import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Reel Creation | Scroll-Stopping Reels at Scale | Ruminate X',
  description: 'Professional AI reel creation for brands. Ruminate X produces high-performing Instagram Reels, TikToks & YouTube Shorts faster and more affordably than traditional video.',
  keywords: ['AI reel creation', 'AI-generated reels', 'AI Instagram Reels', 'AI TikTok videos', 'AI short-form content', 'reel production agency'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-reel-creation',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Reel Creation',
  description: 'AI-powered reel production for brands — scroll-stopping Instagram Reels, TikToks, and YouTube Shorts delivered at speed and scale.',
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
  { title: 'Volume Without Burnout', desc: 'Social algorithms reward consistency, but most teams can barely keep up with one reel a week. AI reel creation lets you publish daily across platforms — without burning out your creative team or blowing through your production budget.' },
  { title: 'Trend-Speed Turnaround', desc: 'Trends on Instagram and TikTok move fast. By the time a traditional production wraps, the moment has passed. AI lets us go from concept to finished reel in hours, so your brand stays culturally relevant instead of perpetually behind.' },
  { title: 'Built for Every Platform', desc: 'Each platform has its own rhythm, aspect ratio, and audience expectation. We produce reels natively for Instagram, TikTok, YouTube Shorts, and LinkedIn — optimized for engagement on every feed, not just resized from a single master file.' },
  { title: 'Consistent Brand Quality', desc: 'High volume does not mean low quality. Every reel goes through AI generation, human creative review, and brand alignment checks before delivery. Your visual identity stays sharp whether you are posting three reels a week or thirty.' },
]

const useCases = [
  { title: 'Product Showcase Reels', desc: 'Short, punchy reels that highlight your product from every angle — features, textures, unboxing moments, and in-use demonstrations designed to stop the scroll and drive clicks to your product page.' },
  { title: 'Behind-the-Scenes Content', desc: 'AI-generated BTS-style reels that give your audience a window into your brand story, process, or team culture. Authentic-feeling content that builds trust without the overhead of a film crew following your team around.' },
  { title: 'Educational & How-To Reels', desc: 'Step-by-step tutorials, tips, and explainers packaged as engaging short-form video. Perfect for establishing thought leadership while feeding the algorithm content that audiences save and share.' },
  { title: 'Testimonial & Social Proof Reels', desc: 'Turn customer quotes, reviews, and case study data into dynamic video testimonials. AI-powered visuals and motion graphics make social proof feel cinematic instead of static.' },
  { title: 'Launch & Announcement Reels', desc: 'Countdown teasers, launch-day reveals, and feature announcements crafted for maximum impact in the first three seconds. Designed to generate shares and build anticipation organically.' },
  { title: 'Seasonal & Trend-Based Reels', desc: 'Reactive content tied to cultural moments, holidays, and platform trends — produced fast enough to capitalize on the window before the trend expires. Stay relevant without scrambling.' },
]

const process = [
  { step: '01', title: 'Strategy & Calendar', desc: 'We start with your goals, audience, and posting cadence. Whether you need five reels a month or five a week, we build a content calendar that aligns with your marketing objectives and platform strategy.' },
  { step: '02', title: 'Scripting & Concepts', desc: 'Our creative team writes hooks, scripts, and visual concepts for each reel. Every piece is designed for the first-three-second test — because if the hook does not land, nothing else matters.' },
  { step: '03', title: 'AI Production', desc: 'We generate visuals, motion, transitions, captions, voiceover, and music using our AI production pipeline. Human creatives review and refine every reel to ensure it meets broadcast-quality standards.' },
  { step: '04', title: 'Delivery & Optimization', desc: 'Finished reels arrive in platform-native formats with optimized captions, hashtag recommendations, and posting-time suggestions. Ready to publish the moment they land in your inbox.' },
]

export default function AIReelCreationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Reel Creation</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI REEL<br />CREATION THAT<br /><span style={{ color: '#ebff00' }}>SCALES.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Reels drive more organic reach than any other content format on Instagram, TikTok, and YouTube. But producing them consistently — with quality, speed, and brand coherence — is where most teams fall behind. Ruminate X uses AI-powered production to create scroll-stopping reels at the volume modern social demands, without the bottlenecks of traditional video production. More reels, faster turnaround, lower cost, better performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start Creating Reels</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Reels Delivered' },
              { value: '24hr', label: 'Average Turnaround' },
              { value: '80%', label: 'Cost Reduction' },
              { value: '3x', label: 'Engagement Lift' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div style={displayStyle} className="text-[#ebff00] text-4xl md:text-5xl mb-2">{stat.value}</div>
                <div className="text-[#888888] text-xs uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4 block">Why AI Reels</span>
            <h2 style={displayStyle} className="text-white text-4xl md:text-6xl">
              THE REEL ADVANTAGE
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/30 transition-colors">
                <h3 style={displayStyle} className="text-white text-2xl mb-4">{b.title.toUpperCase()}</h3>
                <p className="text-[#888888] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4 block">Use Cases</span>
            <h2 style={displayStyle} className="text-white text-4xl md:text-6xl">
              REELS FOR EVERY OBJECTIVE
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((uc) => (
              <div key={uc.title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/30 transition-colors group">
                <h3 style={displayStyle} className="text-white text-xl mb-3 group-hover:text-[#ebff00] transition-colors">{uc.title.toUpperCase()}</h3>
                <p className="text-[#888888] leading-relaxed text-sm">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4 block">Process</span>
            <h2 style={displayStyle} className="text-white text-4xl md:text-6xl">
              FROM BRIEF TO REEL IN HOURS
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step} className="relative">
                <div style={displayStyle} className="text-[#ebff00]/20 text-7xl mb-4">{p.step}</div>
                <h3 style={displayStyle} className="text-white text-xl mb-3">{p.title.toUpperCase()}</h3>
                <p className="text-[#888888] leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4 block">Platforms</span>
            <h2 style={displayStyle} className="text-white text-4xl md:text-6xl">
              NATIVE TO EVERY FEED
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { platform: 'Instagram Reels', detail: '9:16 vertical, optimized hooks, trending audio integration, and hashtag strategy built into every deliverable.' },
              { platform: 'TikTok', detail: 'Fast-paced edits, native aesthetics, and trend-aligned concepts that feel organic to the For You Page — not like ads disguised as content.' },
              { platform: 'YouTube Shorts', detail: 'Discovery-optimized shorts with strong thumbnails, searchable titles, and content structured to drive channel subscriptions from short-form viewers.' },
              { platform: 'LinkedIn Video', detail: 'Professional-tone reels designed for B2B audiences — thought leadership, company culture, and industry insights packaged in a format that earns engagement on the platform.' },
            ].map((p) => (
              <div key={p.platform} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/30 transition-colors">
                <h3 style={displayStyle} className="text-[#ebff00] text-xl mb-3">{p.platform.toUpperCase()}</h3>
                <p className="text-[#888888] leading-relaxed text-sm">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#080808] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 8vw, 100px)' }} className="text-white mb-6">
            READY TO SCALE YOUR<br /><span style={{ color: '#ebff00' }}>REEL OUTPUT?</span>
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop choosing between quality and quantity. Ruminate X gives you both — AI-created reels that look premium, perform on every platform, and arrive fast enough to keep your content calendar full. Explore how our <Link href="/ai-ugc-reels" className="text-[#ebff00] hover:underline">AI UGC reels</Link> service complements a full reel strategy, or head back to our <Link href="/" className="text-[#ebff00] hover:underline">homepage</Link> to see everything we offer.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get Started</Link>
            <Link href="/ai-video-ads" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Explore AI Video Ads</Link>
          </div>
        </div>
      </section>
    </>
  )
}
