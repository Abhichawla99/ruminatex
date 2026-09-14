import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How We Make an AI Brand Film: Brief to Broadcast in 48 Hours',
  description: 'The Ruminate X pipeline, step by step: brief, brand world, script and boards, AI generation passes, edit and grade, delivery. How a brand film goes from approved brief to 4K final cut in 48 hours.',
  keywords: ['how to make an AI brand film', 'AI brand film process', 'AI brand film production process', 'AI video pipeline', 'how AI videos are made', 'AI commercial production process'],
  alternates: {
    canonical: 'https://www.ruminatex.com/how-we-make-an-ai-brand-film',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How We Make an AI Brand Film',
  description: 'The Ruminate X production pipeline for AI brand films: brief, brand world, script and boards, generation passes, edit and grade, delivery in 48 hours.',
  datePublished: '2026-09-14',
  dateModified: '2026-09-14',
  mainEntityOfPage: 'https://www.ruminatex.com/how-we-make-an-ai-brand-film',
  author: {
    '@type': 'Organization',
    name: 'Ruminate X',
    url: 'https://www.ruminatex.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Ruminate X',
    url: 'https://www.ruminatex.com',
  },
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const steps = [
  { step: '01', title: 'The Brief', desc: 'You bring the product, the audience, and the feeling the film has to leave behind. One call and one page later, we hand back a creative brief with references, tone, and the single message the film must land. Nothing gets generated until you approve it.' },
  { step: '02', title: 'The Brand World', desc: 'Before any frame exists, we build the world the film lives in: palette, light, texture, camera language, casting archetypes. Our sister studio 100creatives leads this stage so the film looks like your brand instead of a demo reel. Lock the world and everything downstream stays consistent.' },
  { step: '03', title: 'Script and Boards', desc: 'We write to the message, not to the tool. The script breaks into shots, each with framing, motion, and duration. You see the beat sheet and shot list before a single frame is generated, which is where most of the quality gets decided.' },
  { step: '04', title: 'Generation Passes', desc: 'Every shot is generated, reviewed, and regenerated against the boards. We run multiple passes and keep only the takes that hold up on a big screen. Faces, hands, product details, and brand colors get extra passes because that is where AI footage usually breaks.' },
  { step: '05', title: 'Edit, Sound, Grade', desc: 'Selected takes get cut to the rhythm of the script. Sound design, licensed music, and voiceover in 140+ languages are layered in, then a color grade pulls every shot into one film. This is the stage where generated footage becomes something you would actually air.' },
  { step: '06', title: 'Delivery and Revisions', desc: 'You receive a 4K master plus platform cuts in 16:9, 9:16, and 1:1, with captions. Revisions are unlimited: notes in, new cut back, same day. Most projects land within 48 hours of the approved brief.' },
]

export default function HowWeMakeAIBrandFilmPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">The Ruminate X Pipeline</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            HOW WE MAKE AN<br />AI BRAND FILM.<br /><span style={{ color: '#ebff00' }}>BRIEF TO BROADCAST.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            A brand film used to mean a production company, a shoot day, and a five-week edit. Our pipeline runs on generative AI with a creative director&apos;s hand on every frame. Here is exactly how a brief becomes a finished film, and where the craft comes in.
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
              { stat: '6', label: 'Stages in the pipeline' },
              { stat: '48 hrs', label: 'Approved brief to final cut' },
              { stat: '$500', label: 'Projects starting at' },
              { stat: '4K', label: 'Master output' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Short Version</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">SIX STAGES.<br />NO FILM CREW.</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Ruminate X produces brand films with generative AI and a creative director&apos;s hand on every frame. The pipeline has six stages: brief, brand world, script and boards, generation passes, edit and sound, delivery. There are no shoots, no crews, and no location permits.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            A typical film goes from approved brief to final cut in 48 hours, starting at $500. Every frame is reviewed by a human editor before delivery, and revisions are unlimited. World-building, boards, and the edit decide the quality, which is why we spend most of our time there. The full service overview lives on our <Link href="/ai-brand-film-agency" className="text-[#ebff00] hover:underline">AI brand film agency</Link> page.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Pipeline</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">FROM BRIEF TO<br />FINAL CUT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ step, title, desc }) => (
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Stage Two, In Detail</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">THE BRAND WORLD<br />COMES FIRST</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            The brand world is the difference between a film that looks like your company and a film that looks like every AI reel online. It fixes the palette, the light, the textures, and the camera language before generation starts, so shot 40 matches shot 4.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            This stage is led by <Link href="https://www.100creatives.com" target="_blank" rel="noopener noreferrer" className="text-[#ebff00] hover:underline">100creatives</Link>, the brand-world studio behind Ruminate X&apos;s creative direction. Your brand rules and their world-building pass through the same pipeline, so the film arrives on-brand instead of being forced into brand afterward with overlays.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Where the Craft Comes From</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">WE WATCH THE<br />CONTEST SCENE</h2>
          <div className="max-w-3xl">
            <p className="text-[#888888] text-lg leading-relaxed mb-6">
              AI film technique moves fast, and the independent scene moves it fastest. Filmmakers compete in online contests and studio challenges, and new techniques (cleaner faces, longer coherent shots, sharper motion control) show up in public weeks before the tools ship them as features.
            </p>
            <p className="text-[#888888] text-lg leading-relaxed">
              We track that scene through <Link href="https://aifilmcontests.com" target="_blank" rel="noopener noreferrer" className="text-[#ebff00] hover:underline">AI Film Contests</Link>, the contest tracker from the same creative ecosystem, so the bar our client work is measured against is always the current one, not last year&apos;s.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What It Costs</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">DAYS, NOT<br />FIVE FIGURES</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            A traditional brand film in Canada typically runs four to eight weeks and lands in the five-figure range once crews, locations, and post are counted. Our published range is $500 to $3,000, set by length, language count, and how many platform cuts you need.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            The saving comes from removing the shoot. Every creative stage above still happens; it happens in-house, on our pipeline, in days.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            SEND A BRIEF.<br />GET A FILM.<br /><span style={{ color: '#ebff00' }}>IN 48 HOURS.</span>
          </h2>
          <p className="text-[#888888] mb-8">Send the product, the audience, and the feeling you&apos;re after. We come back with the creative brief, the brand world direction, and a fixed price. The first look at your brand world costs nothing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/work" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>
    </>
  )
}
