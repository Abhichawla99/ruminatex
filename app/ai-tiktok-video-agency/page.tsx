import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI TikTok Video Agency | Scroll-Stopping TikTok Content at Scale | Ruminate X',
  description: 'Ruminate X is the AI TikTok video agency brands trust for high-performing TikToks, UGC-style reels, and viral short-form content — produced faster and cheaper.',
  keywords: ['AI TikTok video agency', 'AI TikTok ads', 'AI TikTok content', 'TikTok video production agency', 'AI short-form video agency', 'AI TikTok creative agency'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-tiktok-video-agency',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI TikTok Video Agency',
  description: 'Full-service AI TikTok video agency producing scroll-stopping TikToks, UGC-style reels, and short-form video creatives for brands at scale.',
  provider: {
    '@type': 'Organization',
    name: 'Ruminate X',
    url: 'https://ruminatex.com',
  },
  areaServed: 'Worldwide',
  serviceType: 'AI TikTok Video Production',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const benefits = [
  { title: 'Native TikTok Energy', desc: 'We build content that feels like it belongs on the For You page — not a recycled commercial. Hooks, pacing, captions, and sound design are engineered for how people actually watch TikTok.' },
  { title: 'Creative Volume On Tap', desc: 'TikTok rewards brands that test relentlessly. AI production lets us deliver dozens of variations per concept — different hooks, angles, and CTAs — so the algorithm finds your winners fast.' },
  { title: 'UGC-Style Without the Casting Calls', desc: 'We generate on-camera creators, voiceovers, and testimonial-style content using AI — without the cost and timeline of booking real talent for every new campaign angle.' },
  { title: 'Trend-Ready Turnaround', desc: 'TikTok trends have a 7-day shelf life. Our AI pipeline lets us ship on-brand creative that rides a trend while it is still hot — not three weeks after it is dead.' },
]

const useCases = [
  { title: 'TikTok Ads for Meta & TikTok Spark', desc: 'Direct-response video ads built for TikTok Ads Manager and Spark Ads — optimized hooks in the first 1.5 seconds, native pacing, and clean vertical framing for every placement.' },
  { title: 'Organic TikTok Content Engines', desc: 'Sustained posting calendars of on-brand short-form videos designed to grow an audience organically, feed retargeting pools, and build a creator-driven presence for your brand.' },
  { title: 'UGC-Style Product Reviews', desc: 'Creator-style product videos where AI-generated presenters unbox, demo, and review your products — with natural scripts, realistic camera work, and authentic reaction energy.' },
  { title: 'Trend-Jacking Campaigns', desc: 'Quick-turn video concepts that plug your brand into a trending sound, meme format, or cultural moment — without losing on-brand polish or strategic intent.' },
  { title: 'TikTok Shop & Live Assets', desc: 'Short-form product showcases, demo clips, and hero videos built for TikTok Shop listings, live shopping overlays, and commerce-driven content.' },
  { title: 'Creator Collabs at Scale', desc: 'AI-assisted production layered on top of real creator partnerships — giving your in-flight influencer campaigns more creative variants, edits, and localizations than any single creator could ship.' },
]

const process = [
  { step: '01', title: 'Audience & Hook Strategy', desc: 'We start with who you are trying to reach, what scroll behavior they exhibit, and which hooks will earn the first 1.5 seconds of their attention on TikTok.' },
  { step: '02', title: 'Concept & Script', desc: 'Our creatives write TikTok-native scripts — not ad scripts cut down to 30 seconds. You approve every concept and hook before anything enters production.' },
  { step: '03', title: 'AI Production', desc: 'We generate visuals, AI creators, voiceover, captions, and motion using our proprietary short-form pipeline. Every output is reviewed by human editors for quality and brand fit.' },
  { step: '04', title: 'Post, Test, Iterate', desc: 'You receive launch-ready vertical videos plus variant sets for A/B testing. When performance data lands, we spin up fresh iterations on the same concept within days.' },
]

export default function AITikTokVideoAgencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI TikTok Video Agency</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI TIKTOK VIDEO<br />AGENCY BUILT FOR<br /><span style={{ color: '#ebff00' }}>THE FEED.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            TikTok rewards brands that can post fast, post often, and post natively. Ruminate X is the AI TikTok video agency that makes that pace sustainable. We produce scroll-stopping TikToks, UGC-style reels, and short-form ad creatives using AI — so your brand can show up on the For You page as often as the algorithm demands, without burning out your creative team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a TikTok Engine</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '30+', label: 'TikTok variants per concept' },
              { stat: '5 days', label: 'From brief to post-ready' },
              { stat: '80%', label: 'Lower cost vs. traditional UGC' },
              { stat: '24/7', label: 'Creative refresh cycle' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Is an AI TikTok Video Agency?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">TIKTOK-NATIVE CREATIVE<br />BUILT AT<br />ALGORITHM SPEED</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            An AI TikTok video agency is a creative partner that combines short-form strategy, native TikTok storytelling, and an AI-powered production pipeline to ship vertical video at a pace traditional agencies cannot match. At Ruminate X, that means a dedicated team of strategists, editors, and AI operators building TikToks, UGC-style reels, and Spark Ads for your brand every week — not every quarter.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            The model matters because TikTok is unlike any other channel. The algorithm rewards novelty, relevance, and volume. Brands that post one polished video a month quietly lose to brands that post ten native-feeling videos a week. AI is what makes that second option economically possible without cutting corners on quality.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            We use AI to generate on-camera creators, voiceover, motion, captions, and variant edits. Our human team directs the strategy, writes the hooks, and quality-controls every output. The result is TikTok content that looks and feels native — not AI slop — produced at a cadence that finally matches how the platform actually works.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why Brands Need This Now</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">THE TIKTOK<br />ADVANTAGE</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">WHAT WE BUILD<br />FOR BRANDS ON TIKTOK</h2>
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">HOW WE SHIP<br />YOUR TIKTOK CONTENT</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">NOT A TIKTOK<br />TEMPLATE TOOL</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Most AI TikTok tools give you a text-to-video button and call it an agency. Ruminate X is a full-service creative partner powered by AI. You get a dedicated team that understands the TikTok algorithm, a strategic brief built around your funnel, and vertical videos engineered to perform — not just generic clips that happen to be 9:16.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            We pair our AI production pipeline with disciplined short-form strategy. That means we treat your TikTok account like a portfolio — testing hooks, formats, and creator archetypes the way a performance marketer treats an ad account. If you already invest in <Link href="/ai-ugc-reels" className="text-[#ebff00] hover:underline">AI UGC reels</Link> or <Link href="/ai-short-form-video" className="text-[#ebff00] hover:underline">AI short-form video</Link>, this is the channel-specific layer that makes it all convert on TikTok.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            YOUR BRAND<br />BELONGS ON<br /><span style={{ color: '#ebff00' }}>THE FOR YOU PAGE.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your brand, your audience, and your TikTok goals. We&apos;ll map out a content engine and ship your first batch of concepts within the week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
