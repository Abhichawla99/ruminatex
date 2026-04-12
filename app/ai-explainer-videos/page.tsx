import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Explainer Videos | Clear, Engaging Video Content | Ruminate X',
  description: 'Create professional AI explainer videos that simplify complex ideas. Ruminate X delivers polished explainer content faster and more affordably than traditional production.',
  keywords: ['AI explainer videos', 'AI-generated explainer videos', 'explainer video agency', 'AI video explainers', 'automated explainer production', 'explainer video company'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-explainer-videos',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Explainer Videos',
  description: 'Professional AI-powered explainer video production that turns complex ideas into clear, engaging visual stories — delivered faster and at a fraction of traditional cost.',
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
  { title: 'Clarity at Scale', desc: 'Explainer videos distill complex products, workflows, and concepts into visual stories anyone can follow. AI production means you can create dedicated explainers for every feature, audience segment, and use case — not just one generic overview.' },
  { title: 'Faster Than Traditional Animation', desc: 'Traditional explainer videos take four to eight weeks and tens of thousands of dollars. AI-powered production compresses that timeline to days while maintaining professional polish — so your message reaches the market before the moment passes.' },
  { title: 'Consistent Brand Voice', desc: 'Every explainer we produce matches your brand identity, from color palette and typography to tone of voice and motion style. AI lets us lock in your visual language and apply it across dozens of videos without creative drift.' },
  { title: 'Iterate Without Starting Over', desc: 'Product changed? Messaging shifted? With AI explainer production, updating a video is a matter of hours — not a costly reshoot. Keep every explainer current as your offering evolves.' },
]

const useCases = [
  { title: 'Product Overviews', desc: 'Concise explainer videos that walk prospects through what your product does, who it serves, and why it matters — designed for landing pages, sales decks, and demo requests.' },
  { title: 'Feature Walkthroughs', desc: 'Focused explainer content that breaks down individual features or workflows step by step. Perfect for onboarding sequences, help centers, and in-app guidance.' },
  { title: 'Investor & Pitch Explainers', desc: 'High-impact videos that communicate your vision, market opportunity, and business model in under two minutes — built to complement pitch decks and fundraising materials.' },
  { title: 'Internal Training & Process Videos', desc: 'Explainer content that helps teams understand new tools, policies, or processes. Reduce meeting load and onboarding time with clear, reusable video resources.' },
  { title: 'Customer Education Series', desc: 'Multi-part explainer series that teach customers how to get the most from your product. Improve retention, reduce support tickets, and build trust through consistent education.' },
  { title: 'Concept & Vision Explainers', desc: 'Videos that introduce abstract concepts, emerging technologies, or market shifts in a way that resonates with non-technical audiences — ideal for thought leadership and PR.' },
]

const process = [
  { step: '01', title: 'Discovery & Scripting', desc: 'We learn what you need to explain, who needs to understand it, and what action you want them to take. Then we write a script designed for visual storytelling, not slide narration.' },
  { step: '02', title: 'Visual Design & Storyboard', desc: 'Our team builds a visual storyboard that maps every scene — illustrations, motion graphics, transitions, and on-screen text — so you approve the creative direction before production begins.' },
  { step: '03', title: 'AI-Powered Production', desc: 'We produce the explainer using our AI production pipeline — generating visuals, animation, voiceover, captions, and soundtrack. Every output is reviewed by human creatives for accuracy and quality.' },
  { step: '04', title: 'Delivery & Versioning', desc: 'You receive the finished explainer in every format you need — landscape, vertical, square — along with cut-down versions for social, email, and ads. Revisions are fast and included.' },
]

export default function AIExplainerVideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Explainer Videos</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI EXPLAINER<br />VIDEOS THAT<br /><span style={{ color: '#ebff00' }}>MAKE SENSE.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Your product is powerful — but if people cannot understand it in sixty seconds, they move on. Ruminate X creates AI explainer videos that turn complex ideas into clear, compelling visual stories. No six-week timelines. No bloated budgets. Just polished explainer content produced at the speed your roadmap demands — ready for your website, sales conversations, social channels, and investor meetings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get an Explainer Video</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '60s', label: 'Average explainer length' },
              { stat: '3–5 days', label: 'From script to final delivery' },
              { stat: '80%', label: 'Cost savings vs. traditional' },
              { stat: '10+', label: 'Formats from one explainer' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Are AI Explainer Videos?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">COMPLEX IDEAS<br />MADE<br />CRYSTAL CLEAR</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            An AI explainer video is a short, visually rich video that communicates what your product or service does, why it matters, and how it works — produced using artificial intelligence tools for motion graphics, voiceover, and visual generation. The result is professional-grade content delivered in a fraction of the time and cost of traditional animation studios.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            At Ruminate X, we combine human creative direction with AI production capabilities. Our team writes the script, designs the visual language, and directs the narrative arc. AI handles the heavy lifting of animation, rendering, and versioning — which means you get a polished explainer video without the bottleneck of frame-by-frame production.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Whether you are launching a new SaaS product, explaining a financial service, introducing a medical device, or onboarding enterprise customers, AI explainer videos give you the clarity and professionalism your audience expects — at a pace that keeps up with your business.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why AI Explainer Videos</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">THE ADVANTAGES<br />OF AI-POWERED<br />EXPLAINERS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map(({ title, desc }) => (
              <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/30 transition-colors">
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-[#888888] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Use Cases</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">EXPLAINER VIDEOS<br />FOR EVERY<br />CONTEXT</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map(({ title, desc }) => (
            <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/30 transition-colors">
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-[#888888] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Our Process</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">FROM IDEA<br />TO EXPLAINER<br />IN DAYS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map(({ step, title, desc }) => (
              <div key={step}>
                <p style={{ ...displayStyle, fontSize: '48px', color: '#ebff00' }}>{step}</p>
                <h3 className="text-white font-bold text-lg mt-2 mb-3">{title}</h3>
                <p className="text-[#888888] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">READY TO EXPLAIN<br /><span style={{ color: '#ebff00' }}>WHAT YOU DO?</span></h2>
        <p className="text-[#888888] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop losing prospects to confusion. Get a professional AI explainer video that communicates your value in under a minute — delivered in days, not months.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start Your Explainer</Link>
          <Link href="/ai-video-agency" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Explore AI Video Services</Link>
        </div>
      </section>
    </>
  )
}
