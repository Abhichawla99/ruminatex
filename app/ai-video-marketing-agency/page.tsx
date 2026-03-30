import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Marketing Agency | Strategy-Led Video at Scale | Ruminate X',
  description: 'Ruminate X is an AI video marketing agency that combines creative strategy with AI production to deliver scroll-stopping video campaigns — fast.',
  keywords: ['AI video marketing agency', 'AI video marketing', 'video marketing agency AI', 'AI-powered video marketing', 'AI video campaign agency', 'video marketing automation'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-video-marketing-agency',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Video Marketing Agency',
  description: 'Strategy-led AI video marketing agency delivering high-performing video campaigns at scale — faster, smarter, and more cost-effective than traditional production.',
  provider: {
    '@type': 'Organization',
    name: 'Ruminate X',
    url: 'https://ruminatex.com',
  },
  areaServed: 'Worldwide',
  serviceType: 'AI Video Marketing',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const benefits = [
  { title: 'Strategy First, Always', desc: 'Every video we produce is anchored in marketing strategy. We start with your goals — conversions, awareness, engagement — and reverse-engineer the creative to hit them. AI accelerates production, but strategy drives direction.' },
  { title: 'Volume Without Compromise', desc: 'Modern marketing demands a constant stream of fresh video content. Our AI pipeline lets you produce dozens of platform-ready videos per month without sacrificing quality, brand consistency, or creative originality.' },
  { title: 'Data-Informed Creative', desc: 'We analyze what works across platforms and audiences before we create. AI helps us test variations rapidly, so your budget goes toward creative that performs — not guesswork that drains it.' },
  { title: 'Full-Funnel Coverage', desc: 'From top-of-funnel brand awareness reels to bottom-of-funnel product demos and retargeting ads, we build video assets for every stage of the buyer journey — all produced in a single, efficient workflow.' },
]

const useCases = [
  { title: 'Paid Social Campaigns', desc: 'Thumb-stopping video ads for Meta, TikTok, YouTube Shorts, and LinkedIn — with rapid iteration so you can test hooks, formats, and CTAs without waiting weeks for new cuts.' },
  { title: 'Product Launch Videos', desc: 'Build anticipation and drive conversions with cinematic launch videos, teaser reels, and feature walkthroughs that make your product the hero of the story.' },
  { title: 'Organic Social Content', desc: 'Feed-native vertical videos, behind-the-scenes content, and trend-driven reels that keep your brand visible and relevant — produced at the pace social media demands.' },
  { title: 'Email & Landing Page Video', desc: 'Short, punchy explainer videos and hero clips that boost open rates, increase time on page, and drive clicks — embedded directly where your audience makes decisions.' },
  { title: 'Brand Storytelling', desc: 'Long-form brand films, founder stories, and mission-driven narratives that build emotional connection and differentiate you in crowded markets.' },
  { title: 'Event & Webinar Promotion', desc: 'Pre-event hype reels, speaker highlight clips, and post-event recaps that extend the lifecycle of every event and fill seats for the next one.' },
]

const process = [
  { step: '01', title: 'Strategy & Brief', desc: 'We dig into your marketing goals, audience segments, and competitive landscape. Every video we produce maps to a specific objective — reach, engagement, conversion, or retention.' },
  { step: '02', title: 'Creative Development', desc: 'Our team writes scripts, designs storyboards, and plans the visual direction. You review and approve before anything goes into production. AI amplifies our creative vision; it never replaces it.' },
  { step: '03', title: 'AI-Powered Production', desc: 'We generate visuals, motion graphics, voiceover, and music using our proprietary AI pipeline. Every asset passes through human creative review for quality, brand alignment, and emotional impact.' },
  { step: '04', title: 'Delivery & Optimization', desc: 'You receive finished videos in every format and aspect ratio you need — plus platform-specific captions, thumbnails, and cut-downs. We track performance and iterate on what works.' },
]

export default function AIVideoMarketingAgencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Video Marketing Agency</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI VIDEO MARKETING<br />THAT ACTUALLY<br /><span style={{ color: '#ebff00' }}>DRIVES RESULTS.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Your marketing team needs more video than it can produce. Ruminate X is the AI video marketing agency that closes that gap — combining strategic thinking with AI-powered production to deliver scroll-stopping campaigns at a pace and price point traditional agencies cannot match. From paid ads to organic reels, we build the video engine your brand needs to grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Launch Your Campaign</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '10×', label: 'More video output per month' },
              { stat: '70%', label: 'Lower cost than traditional agencies' },
              { stat: '5 days', label: 'Average campaign turnaround' },
              { stat: '3.2×', label: 'Average ROAS lift for clients' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Is an AI Video Marketing Agency?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">MARKETING-LED<br />VIDEO PRODUCTION<br />POWERED BY AI</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            An AI video marketing agency is a creative partner that uses artificial intelligence to produce high-quality video content at the speed and scale modern marketing demands. Unlike traditional production houses that focus on craft alone, an AI video marketing agency starts with your business objectives and builds video assets designed to perform — across paid media, organic social, email, and every other channel where video drives results.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            At Ruminate X, we sit at the intersection of marketing strategy and AI-powered production. Our team includes strategists who understand conversion funnels, creatives who know how to stop a scroll, and technologists who have built proprietary AI workflows for generating visuals, motion, voiceover, and platform-specific edits — all at a fraction of the time and cost of legacy agencies.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            The result is a video marketing partner that can keep up with your campaign calendar. Whether you need twenty ad variations for a product launch, a library of evergreen explainer clips, or a month of organic social content, we deliver finished, on-brand video without the bottlenecks, bloated timelines, or six-figure budgets that hold most brands back from doing video well.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why Choose an AI Video Marketing Agency</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">MARKETING THAT<br />MOVES FASTER</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">VIDEO FOR EVERY<br />MARKETING GOAL</h2>
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">HOW WE BUILD<br />YOUR VIDEO ENGINE</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">AN AGENCY, NOT<br />A TOOL</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            There are plenty of AI video tools on the market. Most of them hand you a dashboard and leave you to figure out the rest. Ruminate X is different — we are a full-service <Link href="/ai-video-agency" className="text-[#ebff00] hover:underline">AI video agency</Link> with a dedicated creative team, strategic planning, and a production process built around your brand. You do not need to learn any software, write any prompts, or manage any workflows. You tell us what you need; we deliver video that performs.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Our proprietary AI pipeline was built specifically for marketing video. That means every output is optimized for the platform it will live on — aspect ratios, safe zones, caption placement, hook timing, and algorithmic best practices are baked into our process. Combined with <Link href="/" className="text-[#ebff00] hover:underline">Ruminate X&apos;s</Link> human creative direction, the result is <Link href="/ai-brand-videos" className="text-[#ebff00] hover:underline">AI brand video</Link> content that looks premium, feels authentic, and converts at scale.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            READY TO SCALE<br />YOUR VIDEO<br /><span style={{ color: '#ebff00' }}>MARKETING?</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your marketing goals and we&apos;ll map out a video strategy tailored to your brand — with a first concept delivered within the week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
