import type { Metadata } from 'next'
import Link from 'next/link'
import { PRODUCTION, RELATED, SITE, priceLine } from '@/lib/seo/facts'

const hundred = RELATED.find((r) => r.name === '100creatives')!
const contests = RELATED.find((r) => r.name === 'AI Film Contests')!

export const metadata: Metadata = {
  title: 'How We Make an AI Brand Film: Brief to Final Cut',
  description: 'The Ruminate X pipeline, step by step: brief, brand world, script and boards, AI generation passes, edit, sound and grade with your real logo and type set from your files, and delivery. How a brand film goes from an approved brief to a finished film with no crew, set or location shoot.',
  keywords: ['how to make an AI brand film', 'AI brand film process', 'AI brand film production process', 'AI video pipeline', 'how AI videos are made', 'AI commercial production process'],
  alternates: {
    canonical: 'https://www.ruminatex.com/how-we-make-an-ai-brand-film',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How We Make an AI Brand Film',
  description: 'The Ruminate X production pipeline for AI brand films: brief, brand world, script and boards, generation passes, edit and grade, delivery.',
  datePublished: '2026-09-14',
  dateModified: '2026-10-28',
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
  { step: '01', title: 'The Brief', desc: 'You bring the product, the audience, and the feeling the film has to leave behind. After a call, we hand back a creative brief with references, tone, and the single message the film must land. Nothing gets generated until you approve it.' },
  { step: '02', title: 'The Brand World', desc: `Before any frame exists, we build the world the film lives in: palette, light, texture, camera language, casting archetypes. ${hundred.name}, ${hundred.role}, leads this stage so the film looks like your brand instead of a demo reel. Every shot after this is made inside that world.` },
  { step: '03', title: 'Script and Boards', desc: 'We write the script to the single message in the brief. It breaks into shots, each with framing, motion, and duration. You see the beat sheet and shot list before a single frame is generated, which is where most of the quality gets decided.' },
  { step: '04', title: 'Generation Passes', desc: 'Every shot is generated, reviewed, and regenerated against the boards. We run multiple passes and keep only the takes that hold up on a big screen. Faces, hands, product details, and brand colors get extra passes because that is where AI footage usually breaks.' },
  { step: '05', title: 'Edit, Sound, Grade', desc: 'Selected takes get cut to the rhythm of the script. Your real logo, product and on-screen text are set in the edit from your own brand files. Sound design, licensed music, and voiceover are layered in, then a color grade pulls every shot into one film, and a human editor reviews every frame.' },
  { step: '06', title: 'Delivery and Revisions', desc: 'You receive a master plus the platform cuts the brief calls for, such as widescreen, vertical and square, with captions. Your notes come back as a new cut. Turnaround is agreed with the brief, because it depends on length, versions and how many review rounds your team needs.' },
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
            {SITE.name} is an AI film studio in Calgary. Every frame of our films is made with generative AI, and people write, board, edit, mix and grade every one. Here is how your brief becomes a finished film, stage by stage, and where the craft comes in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Short Version</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">EVERY FRAME GENERATED.<br />NO FILM CREW.</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            {SITE.name} makes brand films and AI commercials for consumer brands, pharma and pharmacy companies, labs, medical companies and companies of every size. The pipeline runs in order: brief, brand world, script and boards, generation passes, edit, sound and grade, delivery. {PRODUCTION.summary}
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Every frame is reviewed by a human editor before delivery. World-building, boards, and the edit decide the quality, which is why we spend most of our time there. The full service overview lives on our <Link href="/ai-brand-film-agency" className="text-[#ebff00] hover:underline">AI brand film agency</Link> page, and the same pipeline makes <Link href="/ai-commercial-production" className="text-[#ebff00] hover:underline">AI commercials</Link> and <Link href="/ai-corporate-video-production" className="text-[#ebff00] hover:underline">about-us and company films</Link>. If you are writing the brief, the <Link href="/guides/video-production-brief" className="text-[#ebff00] hover:underline">video brief template</Link> lists what to send.
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
          <Link href="/contact" className="mt-12 inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start with the brief</Link>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Stage Two, In Detail</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">THE BRAND WORLD<br />COMES FIRST</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            The brand world is the difference between a film that looks like your company and a film that looks like every AI reel online. It fixes the palette, the light, the textures, and the camera language before generation starts, so the last shot matches the first.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            This stage is led by <Link href={hundred.url} target="_blank" rel="noopener noreferrer" className="text-[#ebff00] hover:underline">{hundred.name}</Link>, {hundred.role}. Your brand rules and their world-building pass through the same pipeline, so the film arrives on-brand instead of being forced into brand afterward with overlays. How to write that world down is in <Link href="/guides/brand-world-building" className="text-[#ebff00] hover:underline">brand world building</Link>.
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
              We track that scene through <Link href={contests.url} target="_blank" rel="noopener noreferrer" className="text-[#ebff00] hover:underline">{contests.name}</Link>, {contests.role}, so every {SITE.name} film is measured against the current bar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What It Costs</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">WHAT MOVES<br />THE PRICE</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            {priceLine('brand-film')}. The price is set by length, the number of scenes, how exactly a real product has to be reproduced, the number of versions and languages, and how many review rounds your team needs, including MLR or legal review.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            There is no shoot to pay for: no crew, no location, no permits. More on what moves the cost of an AI film is in <Link href="/blog/how-much-does-ai-video-production-cost" className="text-[#ebff00] hover:underline">how much AI video production costs</Link>.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            SEND A BRIEF.<br /><span style={{ color: '#ebff00' }}>GET A FILM.</span>
          </h2>
          <p className="text-[#888888] mb-8">Send the product, the audience, and the feeling you&apos;re after. We come back with the creative brief, the brand world direction, and a quote, and nothing is generated until you approve the brief.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/work" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>
    </>
  )
}
