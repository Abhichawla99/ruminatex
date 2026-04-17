import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Social Media Video | Scroll-Stopping Video Content for Every Platform | Ruminate X',
  description: 'Create high-performing AI social media video content at scale. Ruminate X produces platform-native video for Instagram, TikTok, LinkedIn, and more.',
  keywords: ['AI social media video', 'AI video for social media', 'social media video production', 'AI video content', 'social media video agency', 'AI video creation'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-social-media-video',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Social Media Video',
  description: 'AI-powered social media video production — platform-native video content for Instagram, TikTok, LinkedIn, YouTube Shorts, and more, created at speed and scale.',
  provider: {
    '@type': 'Organization',
    name: 'Ruminate X',
    url: 'https://ruminatex.com',
  },
  areaServed: 'Worldwide',
  serviceType: 'AI Social Media Video Production',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const benefits = [
  { title: 'Platform-Native by Default', desc: 'Every video is built for the platform it lives on. Vertical for Reels and TikTok, square for feeds, horizontal for YouTube — our AI outputs natively sized content so nothing gets cropped, letterboxed, or ignored by the algorithm.' },
  { title: 'Volume Without Burnout', desc: 'Social platforms reward consistency. Our AI workflows produce dozens of unique video assets per week without overloading your team. You stay visible in every feed without the production bottleneck that forces most brands to post static images instead.' },
  { title: 'On-Brand Every Time', desc: 'Your colors, fonts, tone, and visual identity are locked into every video we produce. AI ensures brand consistency across hundreds of assets — no rogue freelancer interpretations, no off-brand surprises, no manual QA on every frame.' },
  { title: 'Data-Informed Iteration', desc: 'Performance data feeds back into production. When a hook style, pacing pattern, or visual format outperforms, we scale it across future batches. Your content library gets smarter with every publishing cycle.' },
]

const useCases = [
  { title: 'Instagram Reels & Stories', desc: 'Vertical video content designed for discovery. AI generates hooks, transitions, and visual narratives optimized for Reels reach and Stories engagement — produced fast enough to match your posting cadence.' },
  { title: 'TikTok Content at Scale', desc: 'TikTok rewards volume and experimentation. We produce batches of short-form videos with varied hooks, pacing, and visual treatments so you can test what resonates without spending weeks on each concept.' },
  { title: 'LinkedIn Video Posts', desc: 'Professional video content that builds authority and generates leads. AI produces thought leadership clips, case study highlights, and brand story videos formatted for LinkedIn native video.' },
  { title: 'YouTube Shorts', desc: 'Repurpose and originate short-form content for YouTube discovery. Our AI pipeline creates Shorts that follow YouTube best practices — strong opens, clear value, and retention-optimized pacing.' },
  { title: 'Paid Social Creatives', desc: 'Video ad units for Meta, TikTok, and LinkedIn campaigns. AI generates dozens of creative variations from a single brief so your media buyer can test hooks, formats, and messaging at scale.' },
  { title: 'Product Teasers & Launches', desc: 'Build anticipation with short, punchy product videos designed for social sharing. AI produces reveal sequences, feature highlights, and countdown content that drive engagement before and during launches.' },
]

const process = [
  { step: '01', title: 'Platform Strategy', desc: 'We map your target platforms, audience behavior, and content goals. Every video we produce ties back to a strategic objective — whether that is reach, engagement, traffic, or conversions.' },
  { step: '02', title: 'Brand Integration', desc: 'Your visual identity, messaging guidelines, and brand voice are loaded into our AI production system. This ensures every asset feels like your brand, regardless of volume or speed.' },
  { step: '03', title: 'AI Production', desc: 'Our pipeline generates video content at scale — multiple formats, aspect ratios, and variations per concept. Each video is rendered to platform spec with hooks, captions, and transitions built in.' },
  { step: '04', title: 'Deliver & Optimize', desc: 'Assets are delivered ready to publish. Performance data from live posts informs the next production cycle, creating a feedback loop that improves content quality over time.' },
]

export default function AISocialMediaVideoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Social Media Video</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI SOCIAL MEDIA VIDEO<br />THAT STOPS<br /><span style={{ color: '#ebff00' }}>THE SCROLL.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Social media runs on video. The brands that win are the ones publishing consistently, natively, and at a quality level that earns attention in crowded feeds. Ruminate X produces AI social media video content — platform-optimized, brand-consistent, and delivered at a pace that keeps you visible on Instagram, TikTok, LinkedIn, YouTube Shorts, and every channel that matters. No more choosing between quality and quantity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get Social Video</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '5×', label: 'More engagement than static posts' },
              { stat: '24h', label: 'Turnaround for content batches' },
              { stat: '40+', label: 'Videos per month per brand' },
              { stat: '4+', label: 'Platform formats per concept' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Is AI Social Media Video?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">VIDEO BUILT<br />FOR THE<br />FEED</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            AI social media video is short-form, platform-native video content produced using artificial intelligence workflows. It covers everything brands publish as video on social platforms — Reels, TikToks, Stories, Shorts, feed videos, and paid ad creatives. Unlike traditional video production, which is slow and expensive, AI social media video is built for the speed and volume that modern platforms demand.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            At Ruminate X, we use AI to handle the repetitive, time-intensive parts of social video production — editing, formatting, captioning, variation generation, and platform optimization. This frees your creative team to focus on strategy and storytelling while our systems handle execution at scale. The result is a consistent stream of high-quality video content that keeps your brand present and competitive across every platform your audience uses.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            The data is unambiguous: video posts earn significantly more reach, engagement, and conversion than static images on every major social platform. Instagram prioritizes Reels in discovery. TikTok is entirely video-native. LinkedIn video posts generate three times the engagement of text posts. YouTube Shorts are now a primary discovery channel. Brands that are not producing social video at volume are leaving distribution, attention, and revenue on the table. AI is the only way to close that gap without hiring an entire in-house production team.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why Brands Need AI Social Video</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">POST MORE.<br />PERFORM BETTER.</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">VIDEO FOR<br />EVERY PLATFORM</h2>
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">FROM STRATEGY<br />TO SOCIAL</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">AI-POWERED<br />SOCIAL VIDEO<br />AT SCALE</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Most brands know they need more social video. The problem is production. A single polished social video can take days to script, shoot, edit, caption, and format for multiple platforms. Multiply that by the three to five posts per week most algorithms reward, and traditional production becomes unsustainable for any team that is not exclusively dedicated to video.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Ruminate X solves this with an AI-first production model built specifically for social media velocity. We produce batches of platform-ready video content from structured brand inputs — your visual identity, messaging framework, and content strategy. Our AI handles editing, formatting, captioning, and variation generation so you get a full content calendar of social video delivered on schedule. Whether you need <Link href="/ai-ugc-reels" className="text-[#ebff00] hover:underline">AI UGC reels</Link> for organic reach or <Link href="/ai-video-ads" className="text-[#ebff00] hover:underline">AI video ads</Link> for paid campaigns, we produce the volume and quality that modern social media demands — without the headcount or the wait.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            READY TO OWN<br />EVERY FEED<br /><span style={{ color: '#ebff00' }}>WITH VIDEO?</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us your platforms, your goals, and your brand — we&apos;ll build an AI social video system that keeps your content calendar full and your engagement growing, with first assets delivered in days.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start Creating</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
