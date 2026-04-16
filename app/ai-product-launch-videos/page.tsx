import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Product Launch Videos | Launch-Day Video at Scale | Ruminate X',
  description: 'AI product launch videos that ship in days, not months. Hero films, teaser reels, launch ads, and demo content — produced at AI speed for modern brands.',
  keywords: ['AI product launch videos', 'AI launch video agency', 'AI product teaser videos', 'AI product reveal video', 'AI launch day content', 'AI product launch ads'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-product-launch-videos',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Product Launch Videos',
  description: 'AI-produced product launch videos — hero films, teaser reels, launch ads, and demo content built to ship on launch day at the speed and scale modern brands actually need.',
  provider: {
    '@type': 'Organization',
    name: 'Ruminate X',
    url: 'https://ruminatex.com',
  },
  serviceType: 'AI Video Production',
  areaServed: 'Worldwide',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const formats = [
  { title: 'Hero Launch Films', desc: 'The cinematic centerpiece that announces your product to the world. Built to anchor your landing page, press drop, and keynote moment.' },
  { title: 'Teaser & Countdown Reels', desc: 'Short-form anticipation builders — cryptic hooks, flash cuts, and reveal moments engineered to seed demand across the 10 days before launch.' },
  { title: 'Demo & Walkthrough Videos', desc: 'Feature-level deep dives that show how your product actually works. Same brand world as the hero film, tuned for buyers who want detail.' },
  { title: 'Launch-Day Ad Variations', desc: 'Fifteen to thirty paid creative variants in the voice of your launch — ready for Meta, TikTok, YouTube, and LinkedIn on day one.' },
  { title: 'Founder & Origin Films', desc: 'The story behind the product — why it exists, who built it, and what it changes. Authentic-feeling narrative content that earns press pickup.' },
  { title: 'Social Cut-Downs', desc: 'Every hero asset re-edited into vertical, square, 15s, 30s, and 60s cuts. One production, twenty distribution-ready outputs.' },
]

const process = [
  { step: '01', title: 'Launch Discovery', desc: 'We map your launch window, distribution channels, and conversion goals. Every asset is reverse-engineered from the moment of sale, not forward-engineered from a mood board.' },
  { step: '02', title: 'Narrative Architecture', desc: 'One story, many surfaces. We build the core launch narrative first — then every teaser, ad, and demo flows from that single source of truth.' },
  { step: '03', title: 'AI Production Sprint', desc: 'Our AI pipeline produces every asset in parallel. No sequential shoot days. No post-production bottleneck. Hero, teasers, ads, and demos are generated, iterated, and approved inside one short window.' },
  { step: '04', title: 'Launch-Week Delivery', desc: 'You receive every asset, every format, every cut — on your delivery date. With enough runway to schedule, approve stakeholders, and ship with confidence.' },
]

export default function AiProductLaunchVideosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Product Launch Videos</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            LAUNCH DAY<br />READY.<br /><span style={{ color: '#ebff00' }}>EVERY ASSET.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Hero films. Teasers. Launch-day ads. Demo videos. Founder stories. Social cut-downs. The full launch video package — produced in weeks, not quarters. Ruminate X is the AI video agency brands use when the launch date is the one thing that can&apos;t move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Plan Your Launch</Link>
            <Link href="/ai-video-ads" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Launch-Day Ads</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '2–3 wks', label: 'From brief to launch-ready package' },
              { stat: '20+', label: 'Assets per launch, every format' },
              { stat: '0', label: 'Shoot days, reshoots, or reshoot fees' },
              { stat: '1', label: 'Narrative across every surface' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What We Make</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">THE FULL<br />LAUNCH PACKAGE</h2>
        <p className="text-[#888888] max-w-2xl mb-16 leading-relaxed">
          A product launch is not one video. It is a coordinated wave of content — teasers that build anticipation, a hero film that anchors the moment, ads that capture intent, demos that close buyers, and social cuts that keep the conversation alive for weeks after. We produce the entire wave, in one brand voice, inside one production window.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formats.map(({ title, desc }) => (
            <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why AI For Launches</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">THE LAUNCH<br />PROBLEM WE SOLVE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#888888] leading-relaxed mb-6">
                Traditional product launch video is a scheduling nightmare. You brief an agency in month one, review storyboards in month two, shoot in month three, edit in month four, and pray nothing slips. Meanwhile, your launch date was locked to a board meeting, a trade show, a seasonal window, or a competitor move. One delay in production and the entire go-to-market plan wobbles.
              </p>
              <p className="text-[#888888] leading-relaxed mb-6">
                AI product launch videos from Ruminate X compress that timeline into a predictable two-to-three-week sprint. No casting, no locations, no gear lists, no weather delays, no actor conflicts. Every asset — from the hero film down to the 15-second TikTok cut — is produced inside the same AI pipeline, so nothing is waiting on anything else.
              </p>
              <p className="text-[#888888] leading-relaxed">
                The outcome is a launch that actually launches on its launch date. With the full video package — not just the one hero asset the budget stretched to cover — distributed across every channel your audience actually uses.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { label: 'Speed', value: 'Two-to-three-week turnaround from locked brief to final delivery.' },
                { label: 'Breadth', value: 'Hero, teaser, demo, ads, founder story, and social cut-downs in one sprint.' },
                { label: 'Consistency', value: 'One narrative and one visual system across every asset and every channel.' },
                { label: 'Revisions', value: 'Iterate inside the AI pipeline, not by booking a second shoot day.' },
                { label: 'Budget', value: 'A launch package at the cost of a single traditional hero video.' },
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

      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Our Process</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">HOW WE BUILD<br />YOUR LAUNCH WAVE</h2>
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

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Who This Is For</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-12">BUILT FOR TEAMS<br />WITH A LAUNCH DATE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'SaaS & Tech', desc: 'Feature drops, platform launches, and new product lines. We turn technical releases into launch moments buyers actually notice — with demo depth and narrative coherence across every surface.' },
              { title: 'DTC & Consumer', desc: 'New SKUs, seasonal drops, and collab launches. We produce the teaser wave, the hero reveal, and the full paid-media ad suite so your launch day doesn&apos;t run on a single reel.' },
              { title: 'Hardware & Devices', desc: 'Reveals that need scale, scope, and a little wonder. AI production lets us stage cinematic product reveals without shipping a hero unit to a sound stage.' },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
                <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-[#666666] text-sm">
            Looking for something adjacent? Explore our <Link href="/ai-product-videos" className="text-[#ebff00] hover:underline">AI product videos</Link>, <Link href="/ai-brand-videos" className="text-[#ebff00] hover:underline">AI brand videos</Link>, or <Link href="/ai-video-strategy" className="text-[#ebff00] hover:underline">AI video strategy</Link> work.
          </div>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            YOUR LAUNCH<br />DATE IS FIXED.<br /><span style={{ color: '#ebff00' }}>SO IS OURS.</span>
          </h2>
          <p className="text-[#888888] mb-8">
            Tell us the product, the date, and the channels. We will come back with a full launch video package — hero, teasers, ads, demo, and cut-downs — delivered with runway to spare. No slipped timelines. No stripped-down scope. The launch you actually planned.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start Your Launch</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Ruminate X</Link>
          </div>
        </div>
      </section>
    </>
  )
}
