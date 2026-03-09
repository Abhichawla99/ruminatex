import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Traditional Video Agencies Are So Expensive (And What To Do Instead) | Ruminate X',
  description: 'The real reason video agencies charge $10K–$100K per video — and how AI production delivers the same quality for 90% less. A full cost breakdown.',
  openGraph: {
    title: 'Why Traditional Video Agencies Are So Expensive | Ruminate X',
    description: 'Full breakdown of traditional agency costs and how AI beats them every time.',
  },
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Honest Guide</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 120px)' }} className="text-white leading-none mb-6">
          WHY AGENCIES<br />CHARGE $15K<br /><span style={{ color: '#ebff00' }}>FOR 2 MINUTES.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          A video agency just quoted you $15,000 for a 2-minute brand video. Here is every line item that justifies their number — and why AI production eliminates nearly all of it.
        </p>
      </section>

      {/* The Bill */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Anatomy of the Invoice</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-8">
            THE $15,000 VIDEO PRODUCTION BILL
          </h2>
          <p className="text-[#888888] mb-12 max-w-2xl">Traditional agencies are not necessarily ripping you off. Their costs are real. Here is where your money actually goes:</p>
          <div className="space-y-0">
            {[
              {
                item: 'Creative Director & Strategy',
                cost: '$2,000–$4,000',
                why: 'Concept development, storyboarding, brand alignment sessions. Usually 3–5 meetings before a frame is shot.',
              },
              {
                item: 'Director of Photography',
                cost: '$1,500–$3,500/day',
                why: 'Cinema-grade cinematographer. Even a 1-day shoot often requires 2–3 days of prep and teardown.',
              },
              {
                item: 'Camera & Equipment Rental',
                cost: '$800–$3,000/day',
                why: 'RED or ARRI cinema camera, lenses, tripods, gimbals, monitors. Add lighting rigs for another $500–$1,500.',
              },
              {
                item: 'Studio or Location Rental',
                cost: '$500–$3,000/day',
                why: 'A proper studio in NYC or LA runs $1,500–$5,000/day. Location permits and insurance add to this.',
              },
              {
                item: 'Crew (Gaffer, PA, Sound)',
                cost: '$1,000–$3,000/day',
                why: 'Professional shoots run 5–10 people on set. Each has a day rate, overtime eligibility, and meal budget.',
              },
              {
                item: 'Talent & Casting',
                cost: '$500–$5,000',
                why: 'Actors, presenters, or models. Union talent can run $1,000+ per day plus residuals.',
              },
              {
                item: 'Post-Production & Editing',
                cost: '$2,000–$8,000',
                why: 'Editor at $75–$150/hour. A 2-minute video can take 20–40 hours of editing alone.',
              },
              {
                item: 'Color Grading',
                cost: '$500–$2,000',
                why: 'A separate colorist makes footage look cinematic. Not included in the editing fee.',
              },
              {
                item: 'Sound Design & Music Licensing',
                cost: '$300–$2,000',
                why: 'Foley, sound mixing, and royalty-free or licensed music tracks.',
              },
              {
                item: 'Agency Markup & Overhead',
                cost: '20–40% on top',
                why: 'Every agency charges a markup on subcontractors plus their own overhead — office rent, software, staff salaries.',
              },
            ].map(({ item, cost, why }) => (
              <div key={item} className="border-t border-[#1a1a1a] py-6 grid grid-cols-1 md:grid-cols-[1fr_180px] gap-4">
                <div>
                  <h3 className="text-white font-bold mb-1">{item}</h3>
                  <p className="text-[#666666] text-sm">{why}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">{cost}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-[#1a1a1a] py-6">
              <div className="border border-[#1a1a1a] p-8">
                <p style={{ ...displayStyle, fontSize: 'clamp(24px, 3vw, 48px)' }} className="text-white leading-none mb-2">
                  TOTAL: $10,000–$35,000+
                </p>
                <p className="text-[#888888]">Per 2-minute video. Before you ask for any revisions — which most agencies charge extra for.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Costs */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What the Invoice Doesn't Show</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            THE HIDDEN COSTS NOBODY TALKS ABOUT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {[
              {
                title: 'Time is money — and agencies take 4–6 weeks',
                body: 'While your competitor launches their product with a video next week, you\'re waiting on a production schedule that hasn\'t started. Every week without video is lost revenue.',
              },
              {
                title: 'Revisions cost a fortune',
                body: 'Most agencies include 2 rounds of revisions. A third round? $500–$2,000 more. Want to change the script after filming? Full day rates for a reshoot.',
              },
              {
                title: 'You can\'t scale it',
                body: 'If you need 12 videos per year, you\'re looking at $120,000–$420,000. Most businesses can\'t sustain that. So they produce 1–2 videos a year and their content strategy suffers.',
              },
              {
                title: 'The video is outdated in 6 months',
                body: 'Product changed? New messaging? The $15K video is now wrong and you\'re starting from scratch. Traditional production doesn\'t support rapid iteration.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-[#080808] p-8">
                <h3 className="text-white font-bold mb-3">{title}</h3>
                <p className="text-[#888888]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What AI Eliminates */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Alternative</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-8">
            WHAT AI PRODUCTION ELIMINATES
          </h2>
          <p className="text-[#888888] mb-12 max-w-2xl">AI video production does not cut corners — it cuts the costs that do not add value to the final product.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#1a1a1a]">
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4 pr-8">Cost Item</th>
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4 pr-8">Traditional Agency</th>
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4">AI Production</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Film Crew', '$5,000–$10,000', '$0'],
                  ['Equipment Rental', '$1,500–$4,000', '$0'],
                  ['Studio/Location', '$500–$3,000', '$0'],
                  ['Talent & Casting', '$500–$5,000', '$0'],
                  ['Post-Production', '$2,000–$8,000', 'Included'],
                  ['Voiceover', '$500–$2,000', 'Included (140+ languages)'],
                  ['Revisions', '$500–$2,000 each', 'Free & unlimited'],
                  ['Total per video', '$10,000–$35,000', '$500–$2,000'],
                  ['Turnaround', '4–6 weeks', '24–48 hours'],
                ].map(([item, trad, ai]) => (
                  <tr key={item} className="border-b border-[#1a1a1a]">
                    <td className="py-5 pr-8 text-white font-bold">{item}</td>
                    <td className="py-5 pr-8 text-[#888888]">{trad}</td>
                    <td className={`py-5 font-bold ${ai === '$0' || ai.includes('Free') || ai.includes('Included') || ai.startsWith('$500–$2,000') || ai.startsWith('24') ? 'text-[#ebff00]' : 'text-[#888888]'}`}>{ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When Traditional Makes Sense */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">To Be Fair</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-8">
            WHEN TRADITIONAL AGENCIES STILL MAKE SENSE
          </h2>
          <p className="text-[#888888] mb-12 max-w-2xl">We will be honest — there are cases where traditional production is the right call.</p>
          <div className="space-y-3 mb-12">
            {[
              'You need live-action footage with real actors in real locations',
              'You\'re producing a Super Bowl commercial with a $5M media buy',
              'You need a documentary or long-form narrative film',
              'Budget is truly unlimited and timeline does not matter',
            ].map((item) => (
              <p key={item} className="text-[#888888] flex gap-4 border-b border-[#1a1a1a] pb-3">
                <span className="text-[#333333]">—</span>{item}
              </p>
            ))}
          </div>
          <div className="border border-[#1a1a1a] p-8">
            <p className="text-[#888888]">
              For everything else — brand films, explainers, product demos, social content, training videos, commercials — <span className="text-white font-bold">AI production matches or beats traditional quality at a fraction of the cost.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Related</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            CONTINUE READING
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {[
              { href: '/solutions/cut-video-production-costs', label: 'Cut Production Costs by 80%' },
              { href: '/tools/ai-vs-traditional-video', label: 'Full AI vs Traditional Comparison' },
              { href: '/solutions/fast-explainer-videos', label: '48-Hour Video Production' },
              { href: '/contact', label: 'Get a Quote' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="bg-[#080808] p-8 flex items-center justify-between group hover:border-[#ebff00] border border-[#1a1a1a] transition-colors"
              >
                <span className="text-white font-bold">{label}</span>
                <span className="text-[#ebff00] group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            STOP OVERPAYING.<br /><span style={{ color: '#ebff00' }}>START A PROJECT.</span>
          </h2>
          <p className="text-[#888888] mb-10">Broadcast-quality brand films, commercials, and product videos at 90% less than traditional agency rates.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  )
}
