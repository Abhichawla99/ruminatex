import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Production for Automotive Brands | Ruminate X',
  description: 'Cinematic AI-powered brand films and commercials for automotive brands, EV startups, and mobility companies. Impossible shots. Cinematic quality. A fraction of the cost.',
  keywords: ['AI video production automotive', 'automotive brand film agency', 'car commercial AI production', 'EV brand video', 'auto manufacturer video content', 'electric vehicle brand film'],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const useCases = [
  { title: 'Launch Films', desc: 'Cinematic reveal films for new models and EV launches. Build anticipation and brand desire before a single vehicle reaches the showroom.' },
  { title: 'Performance Commercials', desc: 'Impossible camera positions. Physics-defying shots. AI enables the automotive commercial that traditional production literally cannot execute.' },
  { title: 'EV Brand Stories', desc: 'New electric vehicle brands need to build identity from zero. Cinematic brand storytelling that builds desire, trust, and category leadership.' },
  { title: 'International Launch Content', desc: 'Launch simultaneously in multiple global markets with market-specific content — without multiplying production costs across regions.' },
  { title: 'Heritage & Legacy Films', desc: 'Cinematic brand heritage documentaries. The history and soul of an automotive brand, rendered with the craft it deserves.' },
  { title: 'Dealer & Retail Content', desc: 'Campaign-quality content for dealer networks and retail channels — at a volume and cost structure that makes it commercially viable.' },
]

export default function AutomotivePage() {
  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">Automotive & Mobility</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 11vw, 150px)' }} className="text-white leading-none mb-8 max-w-5xl">
            AI VIDEO<br />PRODUCTION FOR<br /><span style={{ color: '#ebff00' }}>AUTOMOTIVE<br />BRANDS</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-xl mb-12 leading-relaxed">
            Automotive commercials are the most visually demanding content in advertising. AI production now delivers impossible shots — the angles, the speeds, the environments no camera crew can access — at a fraction of traditional production costs.
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
              { stat: '90%', label: 'Cost savings vs. traditional auto production' },
              { stat: '2–3 wks', label: 'From brief to delivery' },
              { stat: '∞', label: 'Impossible shots now possible' },
              { stat: '10×', label: 'More market variations per budget' },
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">CONTENT THAT<br />MOVES PEOPLE</h2>
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
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The EV Advantage</p>
              <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-8">THE EV REVOLUTION<br />NEEDS CINEMATIC<br />STORYTELLING</h2>
            </div>
            <div className="space-y-8">
              {[
                { title: 'New Brands, High Stakes', body: 'New EV brands entering global markets face the same challenge: build brand desire from scratch, at global scale, without legacy marketing budgets. AI production makes that possible at a cost that makes commercial sense.' },
                { title: 'Speed to Global Markets', body: 'EV brands are launching simultaneously in North America, Europe, and Asia. AI enables market-specific campaign content produced simultaneously — not sequentially — reducing time-to-market dramatically.' },
                { title: 'The Impossible Shot is Now Standard', body: 'Aerial perspectives, physics-defying driving sequences — shots that previously required dangerous and expensive practical production are now achievable in 2 weeks at a fraction of the cost.' },
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
            YOUR VEHICLE.<br /><span style={{ color: '#ebff00' }}>THEIR DESIRE.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us the commercial you&apos;ve always wanted. We&apos;ll build it.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
        </div>
      </section>
    </>
  )
}
