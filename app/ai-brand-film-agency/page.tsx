import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brand Film Production | Cinematic Story Studio | Ruminate X',
  description: "There is a scene in every brand's story that has never been put on screen. Ruminate X finds it and makes it. Cinematic brand films, story-driven production, no compromises.",
  keywords: ['AI brand film agency', 'AI brand film production', 'cinematic AI brand video', 'brand film company AI', 'AI-generated brand films', 'AI brand storytelling agency'],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const process = [
  { step: '01', title: 'The Brief', desc: 'Tell us the story your brand has never been able to put on screen. The feeling you want to create. The scene in your head that no production company has pulled off. That\'s where we start.' },
  { step: '02', title: 'The Script', desc: 'Every great film starts with a great script. We write the narrative arc, the visual language, the emotional throughline — before a single frame is conceived. Story first. Always.' },
  { step: '03', title: 'The Shoot', desc: 'AI becomes our director of photography, our location scout, our VFX team. We execute the shot list with cinema-grade precision — no constraints, no compromises, no impossible shots.' },
  { step: '04', title: 'The Cut', desc: 'We edit like a film editor — for rhythm, for emotion, for the exact moment the music and the image and the idea collide. What you receive is a finished film, not a draft.' },
]

const formats = [
  { title: 'Hero Brand Films', desc: '60–180 second cinematic brand narratives. The film that defines who you are.' },
  { title: 'Documentary-Style Films', desc: 'Founder stories, company missions, and cultural narratives told with the craft of documentary filmmaking.' },
  { title: 'Campaign Films', desc: 'Conceptual brand films that anchor a full campaign — with cutdowns, social variations, and ad formats.' },
  { title: 'Product Story Films', desc: 'The story behind your product — its origin, its purpose, the people it serves.' },
  { title: 'Culture & Recruitment Films', desc: 'Who you are as a company. The film that makes the best people in your industry want to work for you.' },
  { title: 'Annual & Milestone Films', desc: 'Brand anniversary films, year-in-review films, and milestone celebration content built to last.' },
]

export default function BrandFilmAgencyPage() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Brand Film Agency</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            YOUR BRAND<br />HAS ONE TRUE<br /><span style={{ color: '#ebff00' }}>STORY.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            There is a scene in every brand&apos;s story that has never been put on screen. The one that would make people actually feel something. The one that would make them stop, rewatch, and share without being asked. We make that scene.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start Your Brand Film</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '70%', label: 'Less than traditional brand film agencies' },
              { stat: '2–3 wks', label: 'From brief to final delivery' },
              { stat: '∞', label: 'Creative possibilities' },
              { stat: '4K', label: 'Cinematic quality, always' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Brand Film Formats</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">EVERY TYPE OF<br />BRAND FILM</h2>
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
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Our Process</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">HOW WE BUILD<br />YOUR BRAND FILM</h2>
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

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            BRING US<br />THE SCENE.<br /><span style={{ color: '#ebff00' }}>WE&apos;LL MAKE IT.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us the story your brand has been trying to tell. We start with the narrative — and we don&apos;t stop until the film is right.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
        </div>
      </section>
    </>
  )
}
