import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Strategy | Data-Driven Video Planning for Brands | Ruminate X',
  description: 'Build an AI video strategy that drives results. Ruminate X helps brands plan, produce, and scale video content with AI-powered workflows.',
  keywords: ['AI video strategy', 'AI video marketing strategy', 'video content strategy AI', 'AI-powered video planning', 'video production strategy', 'AI video roadmap'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-video-strategy',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Video Strategy',
  description: 'Strategic AI video planning and production that aligns content with business goals — built for brands that want measurable results from every frame.',
  provider: {
    '@type': 'Organization',
    name: 'Ruminate X',
    url: 'https://ruminatex.com',
  },
  areaServed: 'Worldwide',
  serviceType: 'AI Video Strategy & Production',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const benefits = [
  { title: 'Strategy Before Production', desc: 'Every video we create starts with a strategic framework. We map your content to buyer journeys, platform algorithms, and campaign objectives — so nothing gets made without a reason.' },
  { title: 'AI-Powered Content Intelligence', desc: 'We use AI to analyze competitor content, trending formats, and audience behaviour to inform your video roadmap. Data shapes the creative brief before a single frame is produced.' },
  { title: 'Scalable Content Systems', desc: 'Your strategy is not a one-off plan — it is a production system. We build repeatable AI workflows that generate consistent content month after month without burning out your team or budget.' },
  { title: 'Platform-Native Planning', desc: 'Each platform rewards different formats, lengths, and pacing. Your AI video strategy includes platform-specific playbooks for YouTube, TikTok, Instagram, LinkedIn, and paid media channels.' },
]

const useCases = [
  { title: 'Product Launch Campaigns', desc: 'Map out a full video sequence — teaser, reveal, demo, testimonial, retargeting — all produced through AI workflows on a compressed timeline.' },
  { title: 'Always-On Social Content', desc: 'Build a content engine that produces weekly social videos aligned with brand pillars, trending topics, and seasonal moments without starting from scratch every time.' },
  { title: 'Paid Media Creative Testing', desc: 'Generate dozens of ad variations from a single concept so you can A/B test hooks, visuals, and CTAs at a speed that matches your media spend.' },
  { title: 'Brand Storytelling Series', desc: 'Plan episodic content that builds narrative momentum — founder stories, customer journeys, behind-the-scenes — structured to grow audience loyalty over time.' },
  { title: 'Sales Enablement Video', desc: 'Equip your sales team with personalized demo videos, case study walkthroughs, and objection-handling content produced at scale through AI.' },
  { title: 'Event & Campaign Amplification', desc: 'Pre-plan your post-event content strategy so that recap videos, highlight reels, and quote clips are produced and distributed within hours, not weeks.' },
]

const process = [
  { step: '01', title: 'Audit & Discovery', desc: 'We assess your current video presence, competitive landscape, and audience data. We identify gaps, opportunities, and the formats most likely to move your metrics.' },
  { step: '02', title: 'Strategic Roadmap', desc: 'We deliver a quarterly content plan with video types, topics, platforms, and production cadence — all mapped to your business goals and buyer journey stages.' },
  { step: '03', title: 'AI Workflow Design', desc: 'We build custom AI production pipelines for your content types. Templates, brand assets, voice profiles, and motion styles are configured once and reused at scale.' },
  { step: '04', title: 'Produce & Optimize', desc: 'We execute the roadmap, deliver videos on schedule, and use performance data to refine the strategy. Each cycle gets sharper, faster, and more aligned with what works.' },
]

export default function AIVideoStrategyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Video Strategy</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI VIDEO STRATEGY<br />THAT DRIVES<br /><span style={{ color: '#ebff00' }}>REAL RESULTS.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Most brands know they need more video. Few have a strategy that connects production to outcomes. Ruminate X builds AI video strategies that align every piece of content with your business goals — then executes them at a pace and scale that traditional agencies cannot touch. From quarterly roadmaps to always-on content engines, we turn video from a cost center into a growth lever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Build Your Strategy</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '3x', label: 'Average increase in video output' },
              { stat: '60%', label: 'Lower cost per video asset' },
              { stat: '14 days', label: 'From strategy to first delivery' },
              { stat: '100+', label: 'Videos per quarter, on strategy' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Is AI Video Strategy?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">A PLAN THAT<br />ACTUALLY<br />PRODUCES</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            An AI video strategy is a structured plan that defines what video content your brand needs, why each piece exists, where it will be distributed, and how AI production workflows will deliver it at scale. It is not a creative brief for a single project — it is an operating system for video content that compounds over time.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            At Ruminate X, we start with your business objectives and work backward. If the goal is lead generation, we map video touchpoints across the funnel — awareness content for cold audiences, consideration content for engaged prospects, and conversion content for buyers ready to act. If the goal is brand building, we plan narrative arcs, visual themes, and distribution cadences that build recognition and trust over months, not just impressions over days.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            The AI component is what makes this approach radically different from traditional video strategy. Because our production pipeline is powered by artificial intelligence, we can plan for volume and velocity that would be financially impossible with conventional crews and timelines. Your strategy is not limited by production capacity — it is limited only by how ambitious you want to be.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why You Need AI Video Strategy</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">STOP GUESSING.<br />START SCALING.</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">STRATEGIC VIDEO<br />FOR EVERY GOAL</h2>
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">FROM INSIGHT<br />TO EXECUTION</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">STRATEGY AND<br />PRODUCTION.<br />ONE TEAM.</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Most agencies separate strategy from execution. You get a beautiful deck from one team and hope a different production team can bring it to life months later. At Ruminate X, the strategists who build your roadmap are the same team that operates the AI production pipeline. That means your strategy is grounded in what is actually producible, and your production is guided by what actually matters to the business.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            This tight loop between planning and production is what makes AI video strategy so powerful. We can iterate in real time — test a concept on Monday, review performance on Wednesday, and refine the creative by Friday. Traditional agencies take weeks to complete a single feedback cycle. We complete dozens. That speed compounds into a strategic advantage that grows every quarter. Whether you need <Link href="/ai-brand-videos" className="text-[#ebff00] hover:underline">AI brand videos</Link> or <Link href="/ai-video-ads" className="text-[#ebff00] hover:underline">AI video ads</Link>, every asset fits into a strategy designed to move your business forward.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            READY TO BUILD<br />A VIDEO STRATEGY<br /><span style={{ color: '#ebff00' }}>THAT SCALES?</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your goals and we&apos;ll build a strategic roadmap that turns AI video into your most productive marketing channel — with the first concepts delivered in two weeks.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start Your Strategy</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
