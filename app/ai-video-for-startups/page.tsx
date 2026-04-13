import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video for Startups | Fast, Affordable Video Production | Ruminate X',
  description: 'AI-powered video production built for startups. Get launch videos, pitch decks, product demos & social content fast — without the agency price tag.',
  keywords: ['AI video for startups', 'startup video production', 'AI video agency for startups', 'affordable startup videos', 'AI product demo video', 'startup launch video'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-video-for-startups',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Video for Startups',
  description: 'AI-powered video production designed for startups — launch videos, product demos, investor pitch content, and social media assets delivered fast and at startup-friendly pricing.',
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
  { title: 'Launch-Ready in Days', desc: 'Traditional video production takes weeks or months. With AI-powered workflows, your startup gets polished, professional video content in days — fast enough to match the pace of your product roadmap and go-to-market sprints.' },
  { title: 'Startup-Friendly Pricing', desc: 'No six-figure production budgets. No expensive crew days. AI video production delivers broadcast-quality results at price points that make sense for seed-stage companies and bootstrapped founders alike.' },
  { title: 'Scale Content as You Grow', desc: 'Need one product demo today and fifty social ads next quarter? AI production scales with you. As your startup grows, your content engine grows with it — without re-negotiating retainers or hiring an in-house team.' },
  { title: 'Iterate Without Starting Over', desc: 'Pivoted your messaging? Updated your UI? Changed your pricing? AI lets you regenerate and update existing video assets in hours — not rebuild them from scratch at full cost.' },
]

const useCases = [
  { title: 'Product Launch Videos', desc: 'Announce your product to the world with a cinematic launch video that communicates your value proposition clearly and memorably. Built to perform on your website, social channels, and Product Hunt.' },
  { title: 'Investor Pitch Content', desc: 'Supplement your pitch deck with a polished one-minute video that tells your story, shows your product, and communicates traction. Give investors something they actually want to watch and share.' },
  { title: 'Product Demo & Walkthrough', desc: 'Show your product in action with AI-produced screen captures, motion graphics, and voiceover. Perfect for landing pages, onboarding flows, and sales enablement.' },
  { title: 'Social Media Content Engine', desc: 'Generate a steady stream of short-form video content for LinkedIn, Instagram, TikTok, and X. AI production means you can post consistently without burning your founding team on content creation.' },
  { title: 'Explainer & How-It-Works', desc: 'Break down complex products or workflows into simple, visual narratives. AI explainer videos help prospects understand your product in under sixty seconds — and convert at higher rates than text alone.' },
  { title: 'Hiring & Culture Videos', desc: 'Attract top talent with authentic team and culture videos. Show candidates what it is like to work at your company — produced fast enough to keep up with your hiring velocity.' },
]

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We learn about your startup — your product, your audience, and what this video needs to accomplish. No lengthy onboarding. One call, and we are aligned.' },
  { step: '02', title: 'Script & Creative', desc: 'Our team writes scripts and storyboards tuned for your goals. You review and approve the direction before production begins — no wasted cycles.' },
  { step: '03', title: 'AI Production', desc: 'We produce your video using our proprietary AI pipeline — visuals, motion, voiceover, music, and post-production. Human creatives oversee every frame for quality.' },
  { step: '04', title: 'Delivery & Assets', desc: 'You receive finished video in every format you need — website hero, social cuts, vertical shorts, and thumbnail stills. Ready to deploy across every channel from day one.' },
]

export default function AIVideoForStartupsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Video for Startups</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI VIDEO FOR<br />STARTUPS THAT<br /><span style={{ color: '#ebff00' }}>MOVE FAST.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Your startup ships fast. Your video production should too. Ruminate X uses AI-powered production to deliver professional video content — launch videos, product demos, social assets, and investor pitch content — at the speed and price point startups actually need. No bloated timelines. No agency overhead. Just video that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get Started</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '3–5 days', label: 'From brief to finished video' },
              { stat: '80%', label: 'Lower cost vs. traditional production' },
              { stat: '10+', label: 'Asset formats per delivery' },
              { stat: '∞', label: 'Revisions and iterations' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why Startups Need AI Video</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">VIDEO IS NO LONGER<br />OPTIONAL FOR<br />STARTUPS</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Every channel your startup depends on — your website, social media, paid ads, investor outreach, product onboarding — performs measurably better with video. Landing pages with video convert up to eighty percent more. Social posts with video generate three times more engagement. Investors are more likely to remember your pitch when it includes a visual walkthrough of your product.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            The problem has never been whether startups need video. The problem has been that traditional video production is too slow, too expensive, and too rigid for the way startups operate. A seed-stage company cannot justify a twenty-thousand-dollar shoot for a product that might pivot next month. A growth-stage team cannot wait six weeks for social content when the algorithm rewards daily posting.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            AI video production eliminates those constraints entirely. At Ruminate X, we combine artificial intelligence with experienced human creatives to produce startup video content that looks premium, ships fast, and costs a fraction of what traditional agencies charge. Your startup gets the content quality of a well-funded brand — at the budget and timeline of a company that moves fast and breaks things.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Startup Advantage</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">BUILT FOR<br />STARTUP SPEED</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">AI VIDEO FOR<br />EVERY STARTUP STAGE</h2>
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">FROM BRIEF TO<br />LAUNCH-READY VIDEO</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">NOT A TEMPLATE.<br />NOT A DIY TOOL.</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Most AI video tools hand you an editor and leave you on your own. Ruminate X is a full-service creative partner. You get a dedicated team that understands startup positioning, product storytelling, and the specific content formats that drive acquisition and engagement at every stage of growth.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            We built our AI production pipeline to handle everything from <Link href="/ai-product-videos" className="text-[#ebff00] hover:underline">product videos</Link> and explainers to <Link href="/ai-video-ads" className="text-[#ebff00] hover:underline">paid ad creatives</Link> and social content. The AI handles speed and scale. Our creatives handle strategy and quality. Your startup gets a content engine that actually keeps up with your ambition — without draining the budget you need for product and growth.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            YOUR STARTUP<br />DESERVES BETTER<br /><span style={{ color: '#ebff00' }}>VIDEO.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us what you are building and what you need. We will show you how AI video production can accelerate your startup — and deliver a concept within the week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
