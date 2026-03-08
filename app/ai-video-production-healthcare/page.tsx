import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Production for Healthcare & Pharma Brands | Ruminate X',
  description: 'AI-powered cinematic brand films for healthcare systems, pharma companies, medical devices, and health tech brands. Complex science. Compelling storytelling.',
  keywords: ['AI video production healthcare', 'healthcare brand video agency', 'medical marketing video AI', 'pharma video production', 'health tech video agency', 'medical device brand film'],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const useCases = [
  { title: 'Healthcare Brand Films', desc: 'Cinematic brand narratives for hospital systems, clinics, and healthcare organizations. Build patient trust and institutional credibility.' },
  { title: 'Medical Technology Demos', desc: 'Visualize how medical devices and technology work. AI enables inside-the-body perspectives and micro-scale visuals no camera can capture.' },
  { title: 'Pharma Brand & Patient Stories', desc: 'Responsible, emotionally resonant brand content for pharmaceutical companies. Patient journey narratives that educate and inspire.' },
  { title: 'Health Tech Product Videos', desc: 'Fast-moving health tech startups need compelling product content quickly. We deliver in 2–3 weeks without sacrificing quality.' },
  { title: 'Scientific Explainers', desc: 'Make molecular biology, drug mechanisms, and clinical processes visually compelling for both professional and consumer audiences.' },
  { title: 'Recruitment & Culture Films', desc: 'Attract top medical and scientific talent with employer brand content that communicates your mission and organizational culture.' },
]

export default function HealthcarePage() {
  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">Healthcare & Life Sciences</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 11vw, 150px)' }} className="text-white leading-none mb-8 max-w-5xl">
            AI VIDEO<br />PRODUCTION FOR<br /><span style={{ color: '#ebff00' }}>HEALTHCARE<br />BRANDS</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-xl mb-12 leading-relaxed">
            Complex science deserves compelling storytelling. We create cinematic brand content for healthcare organizations, pharma companies, and health tech brands that need to communicate — and be believed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What We Create</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">SCIENCE MADE<br />CINEMATIC</h2>
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
              <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-8">WHY HEALTHCARE<br />BRANDS CHOOSE<br />AI PRODUCTION</h2>
            </div>
            <div className="space-y-8">
              {[
                { title: 'Visualize the Invisible', body: 'Show how a drug interacts with receptors. Demonstrate a device operating inside the body. Animate a clinical process at the molecular level. AI makes these visuals achievable and scientifically compelling.' },
                { title: 'Compliance-Friendly Process', body: 'Healthcare content requires careful review. Our production process is built for it — with clear approval checkpoints, script review stages, and fast turnaround on revisions.' },
                { title: 'Trust Through Quality', body: 'In healthcare, the quality of your communications signals the quality of your care. Cinematic, professional brand content builds the institutional trust that patients and partners rely on.' },
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
            YOUR SCIENCE.<br /><span style={{ color: '#ebff00' }}>THEIR BELIEF.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us what you&apos;re building. We&apos;ll make it visual.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
        </div>
      </section>
    </>
  )
}
