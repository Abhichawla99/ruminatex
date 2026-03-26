import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Content Creation Agency | Scalable Brand Content | Ruminate X',
  description: 'Ruminate X is an AI content creation agency producing video, UGC, and brand visuals at scale. Faster turnarounds, lower costs, enterprise-quality output.',
  keywords: ['AI content creation agency', 'AI content agency', 'AI-powered content creation', 'AI brand content agency', 'scalable content production', 'AI video content agency'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-content-creation-agency',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ruminate X',
  url: 'https://ruminatex.com',
  description: 'AI content creation agency producing video, UGC reels, brand visuals, and automated content workflows for companies worldwide.',
  serviceType: 'AI Content Creation Agency',
  areaServed: 'Worldwide',
  sameAs: ['https://ruminatex.com'],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const capabilities = [
  { title: 'AI Video Production', desc: 'Full-spectrum video — brand films, explainers, product demos, and social cuts — produced through our AI pipeline in days, not months.' },
  { title: 'UGC-Style Reels', desc: 'Creator-style content that looks organic and performs like paid. Produced at volume without coordinating influencer schedules or budgets.' },
  { title: 'Brand Visual Systems', desc: 'Consistent on-brand imagery, motion graphics, and visual assets generated from your guidelines — no designer bottleneck required.' },
  { title: 'Social-First Content', desc: 'Platform-native content for TikTok, Instagram Reels, YouTube Shorts, and LinkedIn — formatted, paced, and hooked for each algorithm.' },
  { title: 'Multilingual Localisation', desc: 'Voiceover, subtitles, and culturally adapted visuals in dozens of languages — scale your message globally without scaling your team.' },
  { title: 'Content Workflow Automation', desc: 'End-to-end pipelines that turn a single brief into dozens of finished assets. Brief in, content out — integrated with the tools you already use.' },
]

const process = [
  { step: '01', title: 'Brief & Strategy', desc: 'We start with your goals, audience, and brand voice. Every piece of content we produce is anchored to a strategy — not just a deliverable list.' },
  { step: '02', title: 'Creative Development', desc: 'Scripts, concepts, and visual direction built by our creative team and refined by AI — combining human taste with machine speed.' },
  { step: '03', title: 'AI-Powered Production', desc: 'Our proprietary pipeline handles generation, editing, sound design, and formatting — producing broadcast-ready content without a traditional crew.' },
  { step: '04', title: 'Review & Launch', desc: 'You review, we refine. Final assets are delivered in every format you need — ready for ads, organic, email, or wherever your audience lives.' },
]

export default function AiContentCreationAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Content Creation Agency</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            THE AI CONTENT<br />CREATION AGENCY<br /><span style={{ color: '#ebff00' }}>THAT SCALES WITH YOU.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Most content agencies sell you hours. Ruminate X sells you output. We are an AI content creation agency built to produce video, visuals, and branded content at a pace and price point that traditional teams cannot match — without sacrificing the quality your brand demands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start Creating</Link>
            <Link href="/ai-video-agency" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our AI Video Work</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '48 hrs', label: 'Brief to first draft' },
              { stat: '10x', label: 'More content per dollar' },
              { stat: '70%', label: 'Cost savings vs. traditional' },
              { stat: '30+', label: 'Languages supported' },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <p style={{ ...displayStyle, fontSize: 'clamp(32px, 4vw, 52px)', color: '#ebff00' }}>{stat}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-[#666666] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Create */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What We Create</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">EVERY FORMAT.<br />EVERY PLATFORM.<br />ONE AGENCY.</h2>
        <p className="text-[#888888] max-w-2xl mb-16 leading-relaxed">
          An AI content creation agency should not force you to pick between speed and quality, or between volume and craft. Ruminate X produces across the entire content spectrum — from cinematic brand films to daily social assets — so your content calendar never has a gap and your brand never looks anything less than exceptional.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map(({ title, desc }) => (
            <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why AI Content Creation */}
      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why AI Content</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">WHY BRANDS ARE<br />SWITCHING TO AI<br />CONTENT CREATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#888888] leading-relaxed mb-6">
                The content landscape has changed. Brands need more assets, across more platforms, in more formats than ever before — and audiences expect every piece to feel fresh, relevant, and native to the platform they are scrolling. Traditional content agencies were built for a world where one hero video and a handful of stills could carry a campaign for months. That world no longer exists.
              </p>
              <p className="text-[#888888] leading-relaxed mb-6">
                Ruminate X was built for the world that replaced it. Our AI content creation pipeline removes the constraints that have always made quality content expensive and slow — crew coordination, studio bookings, manual editing, and revision cycles that stretch for weeks. Instead, your brief enters our system and finished content comes out the other side, reviewed by human creatives at every stage but produced at machine speed.
              </p>
              <p className="text-[#888888] leading-relaxed">
                This is not about replacing creativity with automation. It is about giving your creative vision the infrastructure to actually execute at the scale your growth demands. The brands winning attention today are not the ones with the biggest production budgets — they are the ones who can produce the most relevant content, the fastest, without letting quality slip. That is exactly what an AI content creation agency makes possible.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { label: 'Volume Without Compromise', value: 'Produce dozens of unique assets from a single brief — each one tailored to its platform and purpose.' },
                { label: 'Speed That Matches Demand', value: 'First drafts in 48 hours. Full campaigns delivered in under two weeks. Never miss a launch window again.' },
                { label: 'Cost Efficiency', value: 'Up to 70% less than traditional production. Reinvest the savings into distribution, testing, or more content.' },
                { label: 'Brand Consistency', value: 'Your guidelines, tone, and visual identity are embedded in our pipeline. Every asset is on-brand by default.' },
                { label: 'Global Reach', value: 'Localise content into 30+ languages with native-quality voiceover and culturally adapted visuals — no local crew needed.' },
              ].map(({ label, value }) => (
                <div key={label} className="border border-[#1a1a1a] p-6">
                  <p style={{ ...displayStyle, fontSize: '20px', color: '#ebff00' }} className="mb-2">{label}</p>
                  <p className="text-[#666666] text-sm leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">How It Works</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">FROM BRIEF TO<br />FINISHED CONTENT<br />IN DAYS</h2>
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

      {/* Use Cases */}
      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Who This Is For</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-12">BUILT FOR TEAMS<br />THAT NEED MORE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Growth & Performance Teams', desc: 'Your paid channels need fresh creative constantly. We keep your ad library stocked with tested, high-performing variations — so ad fatigue never catches up to your spend.' },
              { title: 'Brand & Marketing Leaders', desc: 'You set the vision. We execute it across every channel — maintaining the consistency and quality your brand requires, at a pace that keeps up with your content calendar.' },
              { title: 'Startups Scaling Fast', desc: 'Enterprise-quality content without the enterprise budget. From your first explainer video to your hundredth social asset, we scale as fast as you do — and never slower.' },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
                <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            YOUR CONTENT<br />SHOULD MOVE AS FAST<br /><span style={{ color: '#ebff00' }}>AS YOUR BRAND.</span>
          </h2>
          <p className="text-[#888888] mb-8">
            Tell us what you need to create. We&apos;ll show you how an AI content creation agency delivers it faster, cheaper, and at the quality your audience expects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start Your Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Ruminate X</Link>
          </div>
        </div>
      </section>
    </>
  )
}
