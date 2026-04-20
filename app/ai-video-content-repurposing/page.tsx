import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Content Repurposing | Turn One Video into Dozens | Ruminate X',
  description: 'Repurpose long-form video into short clips, reels, ads & social posts with AI. Ruminate X multiplies your content output without multiplying your budget.',
  keywords: ['AI video content repurposing', 'video repurposing service', 'repurpose video content', 'AI content repurposing', 'video content multiplication', 'AI video clips'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-video-content-repurposing',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Video Content Repurposing',
  description: 'AI-powered video content repurposing that transforms a single long-form video into dozens of platform-optimized clips, reels, ads, and social media posts.',
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
  { title: 'Maximum ROI from Every Shoot', desc: 'You already invested in creating that keynote, webinar, podcast, or brand film. AI video content repurposing extracts every ounce of value from that footage — turning a single production day into months of content.' },
  { title: 'Platform-Perfect Formatting', desc: 'Every repurposed clip is automatically formatted for its destination — vertical 9:16 for TikTok and Reels, square for LinkedIn feeds, landscape for YouTube. No awkward letterboxing, no manual cropping.' },
  { title: 'Consistent Brand Voice at Scale', desc: 'AI preserves your visual identity, tone, and messaging across every derivative piece. Whether someone encounters your brand on Instagram, LinkedIn, or YouTube Shorts, the experience is cohesive.' },
  { title: 'Speed That Matches the Algorithm', desc: 'Social platforms reward posting frequency. AI repurposing lets you publish daily without producing daily — keeping your channels active and the algorithm on your side.' },
]

const useCases = [
  { title: 'Webinar to Social Clips', desc: 'Transform hour-long webinars into twenty or more bite-sized clips — each highlighting a single insight, stat, or takeaway. Captions, branded frames, and platform sizing included.' },
  { title: 'Podcast to Video Highlights', desc: 'Pull the most compelling moments from podcast episodes and package them as audiogram-style videos or talking-head clips for LinkedIn, Instagram, and X.' },
  { title: 'Brand Film to Ad Variants', desc: 'Slice your hero brand film into multiple ad-length cuts — 6-second bumpers, 15-second pre-rolls, 30-second spots — each with different hooks and calls to action.' },
  { title: 'Conference Talks to Thought Leadership', desc: 'Repurpose keynote and panel recordings into a library of thought-leadership content — quote cards, highlight reels, full-segment breakdowns, and teaser trailers.' },
  { title: 'Product Demos to Feature Clips', desc: 'Break down a full product walkthrough into individual feature-focused clips. Each one becomes a standalone asset for sales enablement, retargeting, or organic social.' },
  { title: 'Training Videos to Micro-Lessons', desc: 'Convert lengthy training or onboarding recordings into short, searchable micro-learning modules — easier to consume, easier to retain, easier to update.' },
]

const process = [
  { step: '01', title: 'Source Review', desc: 'You share your existing video assets — webinars, brand films, podcasts, event footage, demos. We audit every minute of content and map what can be extracted.' },
  { step: '02', title: 'AI Analysis & Clipping', desc: 'Our AI scans transcripts, identifies high-impact moments, and generates clip suggestions with optimal start and end points. Human editors refine the selections.' },
  { step: '03', title: 'Formatting & Polish', desc: 'Each clip gets platform-native formatting, branded overlays, captions, transitions, and music. Every piece looks intentionally created — not carelessly chopped.' },
  { step: '04', title: 'Delivery & Calendar', desc: 'You receive a full content library organized by platform, length, and topic — plus a recommended publishing calendar to maximize reach and engagement over weeks.' },
]

export default function AIVideoContentRepurposingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Video Content Repurposing</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI VIDEO CONTENT<br />REPURPOSING<br /><span style={{ color: '#ebff00' }}>AT SCALE.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            You already have great video content sitting in drives, on YouTube, buried in webinar recordings. Ruminate X uses AI-powered repurposing to turn that existing footage into dozens of platform-ready clips, reels, ads, and social posts — multiplying your content output without multiplying your production budget. One video in, an entire content calendar out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Repurpose Your Content</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '30+', label: 'Clips from a single video' },
              { stat: '48 hrs', label: 'Full library turnaround' },
              { stat: '80%', label: 'Lower cost vs. new production' },
              { stat: '5x', label: 'More content, same budget' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Is AI Video Content Repurposing?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">ONE VIDEO.<br />DOZENS OF<br />ASSETS.</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            AI video content repurposing is the process of taking existing long-form video — a webinar, podcast recording, brand film, product demo, or conference talk — and using artificial intelligence to break it down into multiple shorter, platform-optimized pieces of content. Each derivative piece is formatted, captioned, and polished for a specific channel and audience, turning one production investment into weeks or months of publishing material.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            This is not the same as slapping a new thumbnail on an old video and calling it repurposed. Ruminate X uses AI to analyze transcripts, identify the highest-impact moments, generate intelligent clip boundaries, and produce each piece with platform-native aspect ratios, branded overlays, and optimized captions. The result is a library of content that feels intentionally created for each platform — because, with the right AI workflow, it was.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Most brands are sitting on a goldmine of underutilized video. That 45-minute keynote your CEO delivered last quarter? It contains at least twenty standalone insights that could drive organic reach, fuel retargeting campaigns, and position your team as thought leaders. AI video content repurposing is how you unlock that value without booking a single new production day.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why Repurpose with AI</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">THE CONTENT<br />MULTIPLICATION<br />ADVANTAGE</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">REPURPOSE ANY<br />VIDEO FORMAT</h2>
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">HOW WE MULTIPLY<br />YOUR CONTENT</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">NOT JUST<br />CLIP AND CROP</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Automated clipping tools give you timestamped cuts with no creative direction. Ruminate X is a full-service content repurposing agency powered by AI. Every clip we deliver has been editorially selected for impact, formatted with your brand system, enhanced with professional captions and transitions, and organized into a publishable content strategy. The difference between a clip and a piece of content is craft — and that is exactly what we bring.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            We built our AI repurposing pipeline to understand narrative structure, not just silence gaps. It identifies hooks, punchlines, data points, and emotional peaks — the moments that actually stop a scroll. Combined with our creative team&apos;s editorial judgment, the result is repurposed content that performs as well as — or better than — original <Link href="/ai-short-form-video" className="text-[#ebff00] hover:underline">AI short-form video</Link> produced from scratch. Pair it with our <Link href="/ai-social-media-video" className="text-[#ebff00] hover:underline">AI social media video</Link> service for a complete content engine.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            STOP CREATING.<br />START<br /><span style={{ color: '#ebff00' }}>MULTIPLYING.</span>
          </h2>
          <p className="text-[#888888] mb-8">Send us your existing video footage and we&apos;ll show you exactly how many pieces of content we can extract — plus a recommended publishing strategy. First audit is on us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
