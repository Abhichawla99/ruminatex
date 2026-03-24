import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Agency | Fast, Scalable AI Video Production | Ruminate X',
  description: 'Ruminate X is a leading AI video agency producing brand films, UGC reels, and social content at scale. Faster than traditional production. Fraction of the cost.',
  keywords: ['AI video agency', 'AI video production agency', 'AI-powered video agency', 'AI video company', 'artificial intelligence video agency', 'AI content agency'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-video-agency',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ruminate X',
  url: 'https://ruminatex.com',
  description: 'AI video agency producing brand films, UGC reels, social media videos, and AI-powered content workflows for companies worldwide.',
  serviceType: 'AI Video Production Agency',
  areaServed: 'Worldwide',
  sameAs: ['https://ruminatex.com'],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const services = [
  { title: 'Brand Films', desc: 'Cinematic brand stories built with AI — the visual ambition of a six-figure production at a fraction of the timeline and cost.' },
  { title: 'AI UGC Reels', desc: 'Authentic-looking user-generated content at scale. Scroll-stopping reels that convert like real creator content, produced in days.' },
  { title: 'Social Media Video', desc: 'Short-form content engineered for TikTok, Reels, and Shorts — hooks, pacing, and formats built to outperform the feed.' },
  { title: 'Product & Demo Videos', desc: 'Clean, conversion-focused product showcase videos that communicate value instantly — for ads, landing pages, and retail.' },
  { title: 'AI Voiceovers & Multilingual', desc: 'Native-quality voiceovers in any language. Your message delivered with the right accent, tone, and energy — globally.' },
  { title: 'Content Workflow Automation', desc: 'End-to-end AI content pipelines: brief in, finished video out. We integrate with your stack and scale with your team.' },
]

const process = [
  { step: '01', title: 'Discovery & Brief', desc: 'We learn your brand, audience, and goals. A tight brief is the difference between content that performs and content that fills a folder.' },
  { step: '02', title: 'Strategy & Scripts', desc: 'Our creative team builds the architecture — hooks, narratives, and calls to action engineered for the platform and the goal, not just the brand guidelines.' },
  { step: '03', title: 'AI Production', desc: 'Our proprietary pipeline handles generation, editing, sound design, and colour — producing broadcast-quality video without a crew, a studio, or a six-week timeline.' },
  { step: '04', title: 'Review & Deliver', desc: 'You review, we refine, and the final files land in your hands — ready for paid media, organic posting, or wherever your audience lives.' },
]

export default function AiVideoAgencyPage() {
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
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Video Agency</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            THE AI VIDEO<br />AGENCY BUILT<br /><span style={{ color: '#ebff00' }}>FOR MODERN BRANDS.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Ruminate X is not a traditional production company that has bolted AI onto an old workflow. We are an AI-native video agency — built from the ground up to produce faster, scale further, and cost less than anything a traditional crew can offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Work With Us</Link>
            <Link href="/ai-ugc-reels" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See AI UGC Reels</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '48 hrs', label: 'From brief to first draft' },
              { stat: '10x', label: 'Faster than traditional agencies' },
              { stat: '70%', label: 'Average cost reduction vs. crew' },
              { stat: '∞', label: 'Scalable output volume' },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <p style={{ ...displayStyle, fontSize: 'clamp(32px, 4vw, 52px)', color: '#ebff00' }}>{stat}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-[#666666] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What We Produce</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">EVERY FORMAT.<br />ONE AGENCY.</h2>
        <p className="text-[#888888] max-w-2xl mb-16 leading-relaxed">
          An AI video agency should do more than one thing well. We produce across the full spectrum of brand video — from hero films to performance ads to automated content pipelines — so you have one partner for everything you need to make.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc }) => (
            <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why AI Video Agency */}
      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why AI</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">WHY BRANDS CHOOSE<br />AN AI VIDEO AGENCY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#888888] leading-relaxed mb-6">
                Traditional video production is expensive, slow, and fragile. A single shoot day costs thousands. A round of revisions adds another week. A retake means rebooking the entire crew. For brands that need a constant supply of fresh, tested creative, the traditional model simply does not work at the speed the market demands.
              </p>
              <p className="text-[#888888] leading-relaxed mb-6">
                Ruminate X solves this with an AI-native production stack. We do not replace creativity with algorithms — we use AI to remove the friction that has always made great video so hard to produce at scale. Scripts, visuals, voiceover, editing, and delivery all happen inside our pipeline. The result lands on your desk days after your brief, not weeks after your shoot.
              </p>
              <p className="text-[#888888] leading-relaxed">
                For growth teams running paid media, this means more creative variations to test. For brand teams managing multiple campaigns, it means consistent output without a bloated production budget. For companies entering new markets, it means localised video at a fraction of what a local crew would cost.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { label: 'Speed', value: 'First drafts in 48 hours. Full campaigns in under two weeks.' },
                { label: 'Cost', value: 'Up to 70% less than traditional production — without cutting quality.' },
                { label: 'Volume', value: 'One brief can produce ten variations. Test everything. Kill nothing.' },
                { label: 'Consistency', value: 'Brand guidelines baked into the pipeline. Every asset, on-brand.' },
                { label: 'Scale', value: 'From one launch video to 200 localised ads — same team, same quality.' },
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">FROM BRIEF TO<br />BROADCAST IN DAYS</h2>
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
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Use Cases</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-12">WHO WE BUILD<br />VIDEO FOR</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Performance Marketing Teams', desc: 'Your paid media engine runs on creative. We keep it fed — high-volume, tested, and constantly refreshed so your ad fatigue problem disappears.' },
              { title: 'Brand & Creative Directors', desc: 'You have a vision. We have the AI stack to execute it at the quality you expect, without the six-week production cycle. Retain creative control, lose the bottleneck.' },
              { title: 'Startups & Scale-Ups', desc: 'Enterprise-level video without an enterprise-level budget. From your first brand film to your hundredth product demo, we scale exactly as fast as you do.' },
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
            YOUR VIDEO AGENCY<br />SHOULD MOVE AS FAST<br /><span style={{ color: '#ebff00' }}>AS YOUR BRAND.</span>
          </h2>
          <p className="text-[#888888] mb-8">
            Tell us what you need to make. We&apos;ll tell you how fast we can build it — and how much you&apos;ll save doing it with an AI video agency instead of a traditional crew.
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
