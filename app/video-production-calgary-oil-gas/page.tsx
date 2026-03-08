import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oil & Gas Video Production Calgary | Energy Sector Corporate Video | Ruminate X",
  description: "Video production for Calgary's oil & gas industry. Corporate videos, safety training, brand films, and investor content for energy companies. AI-powered, from $600. Call (587) 804-9266.",
  keywords: ["oil gas video production Calgary", "Calgary energy sector video", "oil and gas corporate video Calgary", "petroleum industry video Calgary", "energy company video Calgary"],
  openGraph: {
    title: "Oil & Gas Video Production Calgary | Ruminate X",
    description: "Corporate video for Calgary's energy sector. AI-powered, broadcast quality, from $600.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Oil & Gas Video Production Calgary",
  provider: {
    "@type": "LocalBusiness",
    name: "Ruminate X",
    address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
    telephone: "+15878049266",
  },
  areaServed: [
    { "@type": "City", name: "Calgary" },
    { "@type": "State", name: "Alberta" },
  ],
  description: "AI-powered corporate video production for Calgary's oil and gas sector. Safety training, brand films, investor relations, and communications.",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Oil & Gas</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Oil & Gas Video Production Calgary
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            Corporate video for Calgary's energy sector. Brand films, safety training, investor relations, and communications content for oil & gas companies — AI-produced, broadcast quality, from $600.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get an Energy Sector Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { stat: "$600", label: "Starting price" },
              { stat: "48hrs", label: "Turnaround" },
              { stat: "100+", label: "Languages available" },
              { stat: "YYC", label: "Energy capital" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-slate-900">{stat}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Video for Calgary's Energy Sector</h2>
            <p className="text-lg text-slate-700 mb-6">
              Calgary is Canada's energy capital. From Suncor and Canadian Natural Resources to mid-size operators and oil field services companies, Calgary's energy sector has unique video needs — and traditional production companies don't understand the industry.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              We produce video for every function in an energy company: internal communications, safety training, investor relations, ESG reporting, brand building, and external marketing. AI production means no location permits, no crew safety certifications, and no logistical headaches.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Oil & Gas Video Services — Calgary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "Corporate Brand Films", desc: "Position your Calgary energy company as a leader. Brand films for investor presentations, trade shows, and company websites.", price: "From $1,200" },
                { type: "Safety Training Videos", desc: "HSE training content that meets Alberta regulatory standards. Consistent, repeatable safety messaging for field workers.", price: "From $800" },
                { type: "Investor Relations Video", desc: "Professional video for annual reports, investor presentations, and capital markets communications.", price: "From $1,500" },
                { type: "ESG & Sustainability Reports", desc: "Video reports that communicate your Calgary energy company's environmental and social commitments.", price: "From $1,000" },
                { type: "Operations & Process Explainers", desc: "Complex process and operations explained clearly — for internal teams, regulators, or public stakeholders.", price: "From $700" },
                { type: "Recruitment & HR Videos", desc: "Attract top Alberta energy talent with compelling recruitment videos that show why your Calgary company is the best place to work.", price: "From $600" },
              ].map(({ type, desc, price }) => (
                <div key={type} className="border border-slate-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-900">{type}</h3>
                    <span className="text-red-600 font-bold text-sm">{price}</span>
                  </div>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Energy Companies We Work With</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Oil Sands Operators", "Natural Gas Companies", "Midstream & Pipeline", "Oil Field Services", "Energy Technology", "Renewables & Transition", "Consulting & Engineering", "Energy Law & Finance", "Indigenous Energy Partners"].map(type => (
                <div key={type} className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-center">
                  <p className="font-medium text-slate-700 text-sm">{type}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Why AI Video Works for Energy Companies</h2>
            <div className="space-y-4">
              {[
                { point: "No site access required", desc: "AI production doesn't require filming on oil sands operations or drilling sites — eliminating safety permits, insurance requirements, and crew logistics." },
                { point: "Rapid iteration for regulatory content", desc: "Update safety training videos as regulations change without re-filming. Update content, re-render, and redeploy in hours." },
                { point: "Multi-language for diverse workforces", desc: "Alberta's energy sector employs workers from across Canada and the world. We produce the same video in 140+ languages automatically." },
                { point: "Consistent brand across all touchpoints", desc: "From CEO investor day presentations to field worker safety briefs — same brand look, same quality, same voice." },
              ].map(({ point, desc }) => (
                <div key={point} className="flex gap-4 border border-slate-200 p-5 rounded-lg">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">{point}</p>
                    <p className="text-slate-600 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Related Calgary Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary (Hub)" },
                { href: "/brand-film-production-calgary", label: "Brand Film Production Calgary" },
                { href: "/video-production-calgary-tech", label: "Tech & SaaS Video Calgary" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production Calgary" },
                { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI vs Traditional Agency" },
                { href: "/contact", label: "Get an Energy Sector Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Calgary's Energy Sector Video Partner</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Video production built for Calgary's oil & gas industry. Fast, affordable, and no site access required.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Start a Project</Link>
              <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call Now</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
