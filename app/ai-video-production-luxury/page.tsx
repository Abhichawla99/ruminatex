import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Production for Luxury Brands | Ruminate X',
  description: 'Cinematic AI brand films for luxury fashion, jewelry, watches, automotive, and lifestyle brands. Uncompromising aesthetic quality — produced at unprecedented speed.',
  keywords: ['AI video production luxury brands', 'luxury brand film agency', 'AI video luxury fashion', 'cinematic AI content luxury', 'premium AI brand video', 'luxury commercial production AI'],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const useCases = [
  { title: 'Fashion & Couture Films', desc: 'Editorial-grade cinematic content for fashion houses and luxury apparel brands. Every frame crafted with the precision your aesthetic demands.' },
  { title: 'Jewelry & Watch Brand Films', desc: 'Macro cinematography, impossible lighting, surreal environments — AI makes the perfect luxury product film achievable at any scale.' },
  { title: 'Lifestyle Brand Content', desc: 'Aspirational worlds built entirely for your brand. Every location, every light, every visual element aligned with your vision.' },
  { title: 'Seasonal Campaign Films', desc: 'Holiday, resort, and seasonal campaign content produced with the drama and elegance your collections deserve.' },
  { title: 'Digital & Social Campaigns', desc: 'Luxury content optimized for Instagram, YouTube, and programmatic. Premium quality adapted for every digital touchpoint.' },
  { title: 'Fragrance & Beauty Narratives', desc: 'The abstract made visual. Cinematic interpretations of scent, texture, and sensation — content that transcends the literal.' },
]

export default function LuxuryPage() {
  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">Luxury & Premium Brands</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 11vw, 150px)' }} className="text-white leading-none mb-8 max-w-5xl">
            NO COMPROMISE.<br />NO LIMITS.<br /><span style={{ color: '#ebff00' }}>NO BUDGET<br />CEILING.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-xl mb-12 leading-relaxed">
            Traditional agencies compromise. Budgets force cuts. Crews have limits. Schedules slip. We operate without those constraints — which means the version you imagined is the version that gets made. For brands where the aesthetic is everything, that matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'THE AESTHETIC ARGUMENT', body: "AI-generated imagery has reached a quality threshold where the world's most discerning luxury brands — Moncler, BMW, Loewe — have incorporated it into their visual communication. The question is no longer whether AI belongs in luxury. It's who will use it best." },
              { title: 'THE SPEED ARGUMENT', body: 'Luxury brands move faster than ever. Seasonal campaigns, capsule collections, digital activations — the content demand has accelerated beyond what traditional production schedules can accommodate. AI removes that constraint.' },
              { title: 'THE CREATIVITY ARGUMENT', body: 'Traditional production is limited by physics. AI is not. Any environment. Any light quality. Any surreal vision. For brands that live and die by their ability to create desire through imagery, that is an extraordinary advantage.' },
            ].map(({ title, body }) => (
              <div key={title} className="border border-[#1a1a1a] p-8">
                <h3 style={{ ...displayStyle, fontSize: '22px', color: '#ebff00' }} className="mb-4">{title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What We Create</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">CONTENT THAT<br />CREATES DESIRE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map(({ title, desc }) => (
            <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-6">
            YOUR MAISON.<br /><span style={{ color: '#ebff00' }}>ELEVATED.<br />ALWAYS.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us the world you want to create. We&apos;ll build it, frame by frame.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
        </div>
      </section>
    </>
  )
}
