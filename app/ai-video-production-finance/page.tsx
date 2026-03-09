import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Production for Finance & Fintech Brands | Ruminate X',
  description: 'Cinematic AI brand films for financial services companies, fintech startups, banks, and investment firms. Build trust at scale with investor-grade video content.',
  keywords: ['AI video production finance', 'fintech video production agency', 'financial services brand video', 'AI explainer video finance', 'banking brand video', 'investment firm video content'],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const useCases = [
  { title: 'Brand Films', desc: 'Cinematic brand narratives that build institutional trust. Communicate your mission, values, and differentiation to clients and investors.' },
  { title: 'Explainer Videos', desc: 'Turn complex financial products into clear, visually compelling stories. Make the abstract tangible without losing sophistication.' },
  { title: 'Investor Relations Content', desc: 'Pitch decks and investor presentations elevated with cinematic video. Tell your growth story at a quality that matches your ambition.' },
  { title: 'Product Launch Campaigns', desc: 'Launch new financial products with campaigns that build awareness and drive adoption across digital channels.' },
  { title: 'Recruitment Brand Films', desc: 'Attract top talent with employer brand content that communicates your culture and mission at a premium level.' },
  { title: 'Executive Thought Leadership', desc: 'Position your leadership team as industry voices with high-production video content for LinkedIn and conference keynotes.' },
]

export default function FinancePage() {
  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">Finance & Fintech</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 11vw, 150px)' }} className="text-white leading-none mb-8 max-w-5xl">
            THE STORY<br />THAT MOVES<br /><span style={{ color: '#ebff00' }}>CAPITAL.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-xl mb-12 leading-relaxed">
            Trust is built by the stories people tell about you. Investor-grade brand films for financial services companies that understand the value of the right narrative — told with the precision and credibility the industry demands.
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
              { stat: '70%', label: 'Cost savings vs. traditional agencies' },
              { stat: '2–3 wks', label: 'From brief to delivery' },
              { stat: '100%', label: 'Brand-safe, compliance-friendly' },
              { stat: '10×', label: 'More content per budget' },
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">CONTENT THAT<br />BUILDS TRUST</h2>
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
              <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-8">WHY FINANCIAL<br />BRANDS CHOOSE<br />AI PRODUCTION</h2>
            </div>
            <div className="space-y-8">
              {[
                { title: 'Trust at Scale', body: 'Financial services live and die by trust. AI production delivers the consistent, premium visual quality that communicates institutional credibility — at the volume modern digital marketing demands.' },
                { title: 'Complexity Made Clear', body: 'Financial products are inherently abstract. AI-powered visual storytelling turns complex mechanisms, data, and concepts into narratives that investors and customers actually understand and remember.' },
                { title: 'Speed Without Compliance Risk', body: "Fast production doesn't mean cutting corners. Our process is built to accommodate legal review cycles while still delivering in 2–3 weeks — not 3–4 months." },
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
            YOUR BRAND.<br /><span style={{ color: '#ebff00' }}>INVESTOR-GRADE.<br />ALWAYS.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us your story. We&apos;ll make it undeniable.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
        </div>
      </section>
    </>
  )
}
