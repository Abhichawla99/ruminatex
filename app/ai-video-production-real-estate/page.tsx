import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Production for Real Estate Brands | Ruminate X',
  description: 'Cinematic AI-powered video production for luxury real estate developers, proptech companies, and hospitality real estate brands. Architectural films that sell.',
  keywords: ['AI video production real estate', 'real estate brand video agency', 'property video production AI', 'luxury real estate video', 'proptech video agency', 'architectural film production'],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const useCases = [
  { title: 'Architectural Films', desc: 'Cinematic walkthroughs of properties that have not yet been built. AI generates photorealistic architectural environments — before a single brick is laid.' },
  { title: 'Luxury Development Brand Films', desc: 'Brand-level storytelling for luxury residential and commercial developments. Tell the story of a place before it exists.' },
  { title: 'Proptech Brand Videos', desc: 'Fast-growing proptech companies need compelling brand content. We make complex technology feel tangible and desirable.' },
  { title: 'Hotel & Resort Development', desc: 'Pre-sales content for hospitality developments. Bring the experience to life for investors and early purchasers before opening day.' },
  { title: 'Market Launch Campaigns', desc: 'Full campaign content suites for development launches — hero film, social cuts, ad variations — produced simultaneously.' },
  { title: 'International Market Content', desc: 'Target buyers in multiple global markets with localized content produced without international production crews.' },
]

export default function RealEstatePage() {
  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">Real Estate & Property</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 11vw, 150px)' }} className="text-white leading-none mb-8 max-w-5xl">
            THE LOCATION<br />THAT DOESN&apos;T<br /><span style={{ color: '#ebff00' }}>EXIST YET.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-xl mb-12 leading-relaxed">
            Sell the vision before the concrete is poured. The scene that shows buyers exactly what they&apos;re walking into — before a single wall goes up. AI builds the world your development will become, and we film it with the drama it deserves.
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
              { stat: '100%', label: 'Pre-construction visuals possible' },
              { stat: '2–3 wks', label: 'From brief to delivery' },
              { stat: '80%', label: 'Cost savings vs. traditional' },
              { stat: '∞', label: 'Properties visualized simultaneously' },
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">THE CONTENT THAT<br />SELLS PROPERTIES</h2>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Advantage</p>
              <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-8">WHY AI PRODUCTION<br />WINS FOR REAL<br />ESTATE BRANDS</h2>
            </div>
            <div className="space-y-8">
              {[
                { title: 'Sell Before You Build', body: "Traditional production requires a finished property. AI production doesn't. We generate photorealistic cinematic content from architectural plans, renderings, or mood boards — long before construction completes." },
                { title: 'Global Buyer Reach', body: 'Attract international buyers with culturally-adapted content produced without flying crews around the world. One development. Multiple markets. Simultaneously.' },
                { title: 'Luxury Without the Luxury Budget', body: 'Ultra-premium cinematic quality — helicopter shots, golden-hour lighting, impossibly perfect interiors — at a fraction of what luxury real estate productions typically cost.' },
              ].map(({ title, body }) => (
                <div key={title} className="border-l-2 border-[#ebff00]/30 pl-6">
                  <h3 className="text-white font-bold mb-2 uppercase tracking-wide text-sm">{title}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-6">
            YOUR DEVELOPMENT.<br /><span style={{ color: '#ebff00' }}>SOLD BEFORE<br />IT&apos;S BUILT.</span>
          </h2>
          <p className="text-[#888888] mb-8">Show buyers the vision. We&apos;ll make them believe in it.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
        </div>
      </section>
    </>
  )
}
