import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Production Company | Scalable Video at Speed | Ruminate X',
  description: 'Ruminate X is a full-service AI video production company delivering brand films, ads, UGC, and social content faster and more affordably than traditional studios.',
  keywords: ['AI video production company', 'AI video production', 'AI video company', 'AI-powered video production', 'scalable video production', 'AI video production services'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-video-production-company',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ruminate X',
  url: 'https://ruminatex.com',
  description: 'A full-service AI video production company that combines artificial intelligence with human creative direction to produce brand films, ads, UGC, and social content at scale.',
  serviceType: 'AI Video Production',
  areaServed: 'Worldwide',
  sameAs: [
    'https://ruminatex.com',
  ],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const capabilities = [
  { title: 'Brand Films & Commercials', desc: 'Cinematic brand storytelling powered by AI — from concept and scripting through post-production. We deliver polished hero videos that establish brand identity and drive recall, produced in days instead of months.' },
  { title: 'Performance Ad Creatives', desc: 'Scroll-stopping video ads built for paid media at scale. We produce dozens of variants per campaign — different hooks, CTAs, and visual treatments — so your media team can test and iterate without waiting on production.' },
  { title: 'UGC-Style Reels & Shorts', desc: 'Authentic, creator-style video content engineered for organic reach on TikTok, Instagram Reels, and YouTube Shorts. AI lets us produce at the volume social algorithms reward without sacrificing quality.' },
  { title: 'Product Videos & Demos', desc: 'Clear, compelling product showcases that highlight features, demonstrate value, and convert browsers into buyers — built for landing pages, marketplaces, and paid campaigns.' },
]

const differentiators = [
  { title: 'Speed Without Shortcuts', desc: 'Traditional video production companies measure timelines in weeks. We measure them in days. Our AI production pipeline compresses every phase — scripting, visual generation, editing, post — without cutting corners on quality or creative intention.' },
  { title: 'Scale Without Compromise', desc: 'Need one hero video or one hundred social variants? Our workflow handles both. AI makes volume production economically viable, so you can feed every channel and campaign without rationing creative output.' },
  { title: 'Human Creative Direction', desc: 'AI is our engine, not our autopilot. Every project is led by experienced creatives who direct strategy, review output, and ensure the final product tells a story worth watching — not just fills a content calendar.' },
  { title: 'Transparent, Predictable Pricing', desc: 'No surprise overages from overtime shoots or re-edits. Our AI-powered process keeps costs predictable, letting you plan campaigns and budgets with confidence that production costs will not spiral.' },
]

const industries = [
  { title: 'E-Commerce & DTC', desc: 'Product videos, ad creatives, and UGC-style content that drive conversions across Shopify storefronts, Amazon listings, and paid social campaigns.' },
  { title: 'SaaS & Technology', desc: 'Explainer videos, feature demos, and onboarding content that make complex products intuitive and turn free trial users into paying customers.' },
  { title: 'Real Estate & Hospitality', desc: 'Virtual tours, property showcases, and destination marketing videos that let prospects experience a space before they visit in person.' },
  { title: 'Healthcare & Wellness', desc: 'Patient education videos, provider profiles, and facility tours that build trust and communicate complex health information clearly.' },
  { title: 'Finance & Professional Services', desc: 'Thought leadership videos, service explainers, and client testimonial content that establish authority in competitive professional markets.' },
  { title: 'Food & Beverage', desc: 'Mouth-watering product showcases, recipe content, and brand story videos that connect with food-loving audiences across every platform.' },
]

const process = [
  { step: '01', title: 'Discovery & Strategy', desc: 'We begin with your goals, your audience, and your brand. Every engagement starts with a strategic foundation — not a template. We define the creative direction, deliverables, and timeline before production begins.' },
  { step: '02', title: 'Scripting & Pre-Production', desc: 'Our creative team writes scripts, builds storyboards, and designs the visual approach. You review and approve the creative direction. Nothing is produced until the plan is right.' },
  { step: '03', title: 'AI-Powered Production', desc: 'We produce your videos using our proprietary AI pipeline — generating visuals, motion, voiceover, music, and effects. Human creatives direct and review every element. The result is production-quality video at unprecedented speed.' },
  { step: '04', title: 'Review, Refine & Deliver', desc: 'You receive finished videos in every format your channels require. Revisions are fast — often same-day. We deliver final assets optimized for each platform, ready to publish or launch.' },
]

export default function AIVideoProductionCompanyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Video Production Company</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI VIDEO<br />PRODUCTION<br /><span style={{ color: '#ebff00' }}>COMPANY.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Most video production companies sell you a shoot day and a timeline measured in weeks. Ruminate X is a different kind of production company — one built on AI from the ground up. We produce brand films, ad creatives, UGC-style content, and product videos at the speed and scale modern marketing demands, without the overhead and unpredictability of traditional production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '5x', label: 'Faster than traditional production' },
              { stat: '70%', label: 'Lower cost per finished video' },
              { stat: '100+', label: 'Videos produced per quarter' },
              { stat: '48hrs', label: 'Average turnaround on variants' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What We Do</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">A FULL-SERVICE<br />AI VIDEO<br />PRODUCTION COMPANY</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            An AI video production company uses artificial intelligence as a core part of its creative and production workflow — not as a gimmick, but as infrastructure. At Ruminate X, AI powers visual generation, motion design, voiceover synthesis, editing automation, and variant production. The result is video content that looks and feels like traditional studio output, delivered at a pace and cost that traditional studios cannot match.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            This is not about replacing the craft of video production. It is about removing the bottlenecks that make great video inaccessible for most companies. The weeks spent coordinating crews, locations, and equipment. The budget overruns from reshoots and revisions. The long silence between kickoff and delivery. AI collapses those bottlenecks while keeping the creative ambition intact.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Whether you need a single brand film or an entire content library across formats and platforms, Ruminate X operates as your dedicated AI video production partner — a team that understands your brand, adapts to your workflow, and delivers production-quality video on a timeline that matches the speed of your business.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Our Capabilities</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">WHAT WE<br />PRODUCE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why Ruminate X</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">WHAT MAKES US<br />DIFFERENT</h2>
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
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Industries We Serve</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">AI VIDEO<br />FOR EVERY INDUSTRY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(({ title, desc }) => (
              <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
                <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Our Process</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">HOW WE WORK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map(({ step, title, desc }) => (
            <div key={step} className="border border-[#1a1a1a] p-8">
              <p style={{ ...displayStyle, fontSize: '64px', color: '#1a1a1a' }} className="mb-4">{step}</p>
              <h3 style={{ ...displayStyle, fontSize: '24px', color: '#ebff00' }} className="mb-3">{title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Bigger Picture</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">VIDEO PRODUCTION<br />REIMAGINED</h2>
          <div className="max-w-3xl">
            <p className="text-[#888888] text-lg leading-relaxed mb-6">
              The video production industry is undergoing a fundamental shift. Brands need more content, across more platforms, in more formats than ever before — and traditional production models were never designed for this reality. Hiring a crew, booking a studio, and waiting weeks for a final cut was sustainable when a brand needed one commercial per quarter. It breaks down when you need fifty assets per month.
            </p>
            <p className="text-[#888888] text-lg leading-relaxed">
              Ruminate X exists because we saw this gap and built a company to fill it. We are not a traditional video production company that added an AI tool to our stack. We are an AI video production company from the ground up — with workflows, pricing, and creative processes designed around what AI makes possible. If you are looking for a production partner that can keep pace with your marketing ambitions, explore our <Link href="/ai-video-ads" className="text-[#ebff00] hover:underline">AI video ads</Link> or learn more about our <Link href="/ai-content-creation-agency" className="text-[#ebff00] hover:underline">AI content creation services</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            READY TO WORK<br />WITH AN AI VIDEO<br /><span style={{ color: '#ebff00' }}>PRODUCTION COMPANY?</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us what you need. We&apos;ll show you what AI-powered production looks like for your brand — and deliver a concept within the week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get Started</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
