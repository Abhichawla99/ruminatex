import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Product Launch Films | Opening Scene. Make It Count. | Ruminate X',
  description: 'A launch is an act one. The scene that establishes the world and makes the audience lean forward. We write it, we shoot it, and we make sure it hits. Every product deserves a real film.',
  keywords: ['AI product video agency', 'AI product video production', 'AI product demo video', 'product launch video AI', 'AI generated product video', 'product video agency'],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const productTypes = [
  { title: 'Hero Product Films', desc: 'The definitive film for your product. Cinematic quality that communicates value, desire, and differentiation in 30–90 seconds.' },
  { title: 'Product Launch Videos', desc: 'Launch campaigns that create moments. Teaser, reveal, and full-length launch films — the complete creative arc.' },
  { title: 'Product Demo Videos', desc: 'Show how your product works with stunning visual clarity. Complex mechanisms explained through cinematic storytelling.' },
  { title: 'Lifestyle Product Content', desc: 'Your product in any environment, any aesthetic, any scenario. AI enables lifestyle shoots that no traditional budget could access.' },
  { title: 'A/B Test Creative Suites', desc: 'Multiple creative variations of your product video — different messaging, different aesthetics, different CTAs — at a fraction of traditional cost.' },
  { title: 'Platform-Optimized Cuts', desc: 'Every cut, every format, every ratio. TikTok, Reels, YouTube, programmatic — your product story adapted for every channel simultaneously.' },
]

export default function ProductVideoAgencyPage() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">Product Video Agency</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            OPENING SCENE.<br />MAKE IT<br /><span style={{ color: '#ebff00' }}>COUNT.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            A launch is an act one. The scene that establishes the world, introduces the protagonist, and makes the audience lean forward. We write the shot list, we build the film, and we make sure it hits. From the teaser that builds anticipation to the hero film that delivers the payoff.
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
              { stat: '70%', label: 'Cost savings vs. traditional product shoots' },
              { stat: '2–3 wks', label: 'Brief to final delivery' },
              { stat: '10×', label: 'More product videos per budget' },
              { stat: '∞', label: 'Environments and aesthetics available' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What We Create</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">EVERY PRODUCT<br />NEEDS A FILM</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productTypes.map(({ title, desc }) => (
            <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            YOUR PRODUCT.<br /><span style={{ color: '#ebff00' }}>THEIR DESIRE.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your product. We&apos;ll show you what it looks like at cinematic scale.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
        </div>
      </section>
    </>
  )
}
