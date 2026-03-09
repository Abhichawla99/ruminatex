import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Production for Nonprofits | Mission-Driven Brand Films | Ruminate X',
  description:
    'Cinematic brand films and fundraising content for nonprofits and NGOs. Your mission deserves the same storytelling craft as any major brand — at prices built for organizations doing meaningful work.',
  keywords: ['AI video production nonprofits', 'nonprofit brand film', 'NGO video production AI', 'fundraising video content', 'mission-driven video agency', 'charity brand film'],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const useCases = [
  { title: 'Impact Films', desc: 'The story of who your work changes and how. Not statistics — the human reality of your mission, rendered with the craft and care it deserves.' },
  { title: 'Fundraising Campaign Films', desc: 'The film that makes people open their wallets. Emotional, specific, real — built around a story that moves donors from awareness to action.' },
  { title: 'Annual Report Films', desc: 'Transform your annual report from a document into a story. Show what the year looked like, not just what the numbers say.' },
  { title: 'Donor Stewardship Content', desc: 'Show donors exactly what their contribution accomplished. Real impact, cinematic presentation — the thank-you that builds lifetime relationships.' },
  { title: 'Awareness Campaigns', desc: 'Put an issue in front of people who have never heard of it. Story-driven campaign content that builds understanding and ignites action.' },
  { title: 'Brand Films', desc: 'Who you are, why you exist, what you believe. The defining film that communicates your organizational identity to donors, partners, and the public.' },
]

export default function NonprofitsPage() {
  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">Nonprofits & NGOs</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 11vw, 150px)' }} className="text-white leading-none mb-8 max-w-5xl">
            YOUR MISSION<br />DESERVES A<br /><span style={{ color: '#ebff00' }}>REAL FILM.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-xl mb-12 leading-relaxed">
            The organizations doing the most important work in the world often have the least to spend telling their story. AI removes that constraint. Cinema-grade mission films, fundraising content, and impact storytelling — at prices built for organizations that are changing things.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { stat: '57%', label: 'Of people who watch a nonprofit film go on to donate' },
              { stat: '4×', label: 'More likely to share video than text content' },
              { stat: '2×', label: 'Higher donor conversion for campaigns with film' },
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">EVERY MISSION<br />HAS A STORY</h2>
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
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Our Commitment</p>
              <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-8">
                SPECIAL RATES<br />FOR REGISTERED<br />CHARITIES
              </h2>
              <p className="text-[#888888] leading-relaxed mb-6">
                We believe the organizations doing the most meaningful work should have access to the most compelling storytelling tools. Registered charities and nonprofits receive discounted production rates on all projects.
              </p>
              <p className="text-[#888888] leading-relaxed">
                Tell us about your mission and your budget. We will find a way to tell your story at a quality that does it justice.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'STORY FIRST', desc: 'Every nonprofit film we make begins with the human story at the heart of your mission — not the statistics, not the organizational history.' },
                { title: 'DONOR-TESTED CRAFT', desc: 'We understand what makes a fundraising film convert. Emotional truth, specific detail, and a clear call to action — built into every frame.' },
                { title: 'FLEXIBLE FORMATS', desc: 'From a 60-second social film to a 5-minute impact documentary — we deliver the format your campaign needs, at the quality your mission deserves.' },
              ].map(({ title, desc }) => (
                <div key={title} className="border border-[#1a1a1a] p-6">
                  <h3 style={{ ...displayStyle, fontSize: '22px', color: '#ebff00' }} className="mb-2">{title}</h3>
                  <p className="text-[#666666] text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-6">
            YOUR MISSION.<br /><span style={{ color: '#ebff00' }}>TOLD WITH CRAFT.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us your story. We&apos;ll help you find a way to put it on screen.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
        </div>
      </section>
    </>
  )
}
