import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Personalization | Tailored Video Content at Scale | Ruminate X',
  description: 'Deliver personalized AI video content for every audience segment. Ruminate X creates custom video variants at scale — faster, cheaper, and more relevant.',
  keywords: ['AI video personalization', 'personalized video content', 'AI personalized ads', 'dynamic video personalization', 'custom AI video', 'video personalization agency'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-video-personalization',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Video Personalization',
  description: 'Scalable AI-powered video personalization for brands — delivering tailored video content to every audience segment, market, and buyer persona.',
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
  { title: 'Audience-Specific Messaging', desc: 'Every viewer sees a video crafted for their interests, industry, or stage in the buying journey. AI makes one-to-many feel like one-to-one — without filming a hundred different versions.' },
  { title: 'Scalable Without Compromise', desc: 'Personalization used to mean expensive shoots for every segment. AI flips that equation — produce hundreds of tailored variants from a single creative brief, each one polished and on-brand.' },
  { title: 'Higher Engagement & Conversion', desc: 'Personalized video consistently outperforms generic content. Viewers watch longer, click more, and convert at higher rates when the message speaks directly to their situation.' },
  { title: 'Real-Time Iteration', desc: 'When campaign data reveals which segments respond best, we generate new personalized variants in hours. Your creative evolves as fast as your audience insights do.' },
]

const useCases = [
  { title: 'Account-Based Marketing', desc: 'Produce custom video intros, demos, and pitch decks for high-value target accounts — each one referencing the prospect\'s industry, pain points, and brand by name.' },
  { title: 'Regional & Multilingual Campaigns', desc: 'Localize video content for different markets with AI-generated voiceovers, translated captions, and region-specific visuals — all from a single source creative.' },
  { title: 'Segmented Email Campaigns', desc: 'Embed personalized video thumbnails and landing pages in email sequences. Each segment receives a video variant tailored to their role, company size, or past engagement.' },
  { title: 'E-Commerce Product Recommendations', desc: 'Auto-generate personalized product showcase videos based on browsing history, purchase behavior, or category interest — turning generic listings into dynamic experiences.' },
  { title: 'Onboarding & Customer Success', desc: 'Deliver personalized welcome videos, feature walkthroughs, and milestone celebrations that reference each customer\'s plan, usage data, or account history.' },
  { title: 'Event & Webinar Follow-Up', desc: 'Send attendees personalized recap videos highlighting the sessions they attended, the speakers they engaged with, and next steps relevant to their interests.' },
]

const process = [
  { step: '01', title: 'Audience Mapping', desc: 'We identify your key audience segments, buyer personas, and personalization variables — the data points that make each video feel individually crafted.' },
  { step: '02', title: 'Template & Script Design', desc: 'Our team builds modular video scripts and visual templates designed for dynamic assembly. Every element — hook, body, CTA, visual — can flex per segment.' },
  { step: '03', title: 'AI-Powered Production', desc: 'Our pipeline generates personalized video variants at scale — swapping visuals, voiceover, text overlays, and messaging per segment. Human creatives review every output.' },
  { step: '04', title: 'Delivery & Integration', desc: 'You receive finished personalized videos in every format you need, with integration support for your CRM, email platform, ad manager, or landing page builder.' },
]

export default function AIVideoPersonalizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Video Personalization</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI VIDEO<br />PERSONALIZATION<br />AT <span style={{ color: '#ebff00' }}>SCALE.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Generic video talks at your audience. Personalized video talks to them. Ruminate X uses AI-powered production to create tailored video content for every audience segment, buyer persona, and market you serve — without multiplying your production budget. One brief, hundreds of personalized variants, each one crafted to resonate with the viewer who sees it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get Personalized Video</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '200+', label: 'Personalized variants per campaign' },
              { stat: '4x', label: 'Higher engagement vs. generic video' },
              { stat: '80%', label: 'Lower cost than per-segment shoots' },
              { stat: '48 hrs', label: 'From brief to personalized delivery' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Is AI Video Personalization?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">ONE STORY,<br />TOLD A HUNDRED<br />DIFFERENT WAYS</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            AI video personalization is the process of using artificial intelligence to produce multiple tailored versions of a video — each one customized for a specific audience segment, geographic market, industry vertical, or individual viewer. Instead of creating a single generic video and hoping it resonates with everyone, personalized video adapts the messaging, visuals, voiceover, and calls to action so every viewer sees content that feels made for them.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            This is not about slapping a first name into a template. At Ruminate X, AI video personalization means strategically different creative for strategically different audiences. A SaaS founder sees a video emphasizing speed to market and developer adoption. A retail CMO sees a video focused on seasonal campaign agility and influencer-style content. Both videos share the same production quality and brand story — but each one lands differently because it speaks to what that viewer actually cares about.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Until recently, this kind of personalization was economically impossible. Filming separate videos for every segment meant separate shoots, separate edits, and separate budgets. AI changes the math entirely. Our production pipeline generates personalized variants from modular templates — swapping hooks, visuals, voiceover tracks, text overlays, and CTAs per segment — at a fraction of the time and cost of traditional production.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why Personalized Video</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">THE RELEVANCE<br />ADVANTAGE</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">PERSONALIZED VIDEO<br />FOR EVERY CHANNEL</h2>
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">HOW WE BUILD<br />YOUR PERSONALIZED VIDEO</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">PERSONALIZATION<br />BEYOND MAIL MERGE</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Most video personalization tools stop at swapping a name or logo onto a template. That is not personalization — it is a gimmick that viewers see through immediately. Ruminate X takes a fundamentally different approach. We design modular creative systems where every component of the video — the opening hook, the narrative arc, the visual style, the voiceover tone, the closing CTA — can be dynamically assembled per audience segment.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            The result is video that feels intentionally crafted for each viewer, because it is. Our AI pipeline handles the production scale while our creative team ensures every variant maintains the storytelling quality and brand consistency that makes video effective in the first place. Whether you need personalized <Link href="/ai-video-ads" className="text-[#ebff00] hover:underline">AI video ads</Link> for paid campaigns or tailored content for your <Link href="/ai-content-workflow-automation" className="text-[#ebff00] hover:underline">content workflow</Link>, the principle is the same: relevance wins.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            MAKE EVERY<br />VIEWER FEEL<br /><span style={{ color: '#ebff00' }}>SEEN.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your audiences and your goals. We&apos;ll show you how AI video personalization can transform your engagement and conversion — and deliver a concept within the week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
