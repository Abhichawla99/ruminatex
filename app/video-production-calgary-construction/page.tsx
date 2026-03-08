import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Video Production Calgary | Builder & Contractor Video | Ruminate X",
  description: "Video production for Calgary construction companies, builders, and contractors. Project showcases, brand films, safety training, and recruitment videos. From $600. Call (587) 804-9266.",
  keywords: ["construction video production Calgary", "Calgary builder video", "contractor video Calgary", "construction company video Calgary", "home builder video Calgary"],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Construction Video Production Calgary",
  provider: { "@type": "LocalBusiness", name: "Ruminate X", telephone: "+15878049266", address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" } },
  areaServed: { "@type": "City", name: "Calgary" },
  description: "AI-powered video production for Calgary construction companies and contractors.",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Construction</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">Construction Video Production Calgary</h1>
          <p className="text-xl text-slate-600 mb-4">Project showcases, brand films, safety training, and recruitment videos for Calgary's construction industry. AI-produced, from $600, delivered in 48 hours.</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Construction Video Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Construction Video Services — Calgary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "Project Showcase Videos", desc: "Show your Calgary construction portfolio with cinematic project videos. Win more contracts by showing your work at its best.", price: "From $600" },
                { type: "Home Builder Brand Films", desc: "Brand content for Calgary home builders. Showcase your craftsmanship, communities, and customer commitment.", price: "From $800" },
                { type: "Safety & HSE Training", desc: "Alberta-compliant safety training videos for Calgary construction sites. Update easily without re-filming.", price: "From $700" },
                { type: "Contractor Brand Videos", desc: "Brand and trust-building videos for Calgary trades — electricians, plumbers, HVAC, renovators.", price: "From $500" },
                { type: "Recruitment Videos", desc: "Attract skilled trades to your Calgary company. Show why working with you beats every other option.", price: "From $600" },
                { type: "Development Pre-Sale", desc: "Pre-construction marketing for Calgary condo and residential developments before the first shovel.", price: "From $1,000" },
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
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Related Calgary Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary Hub" },
                { href: "/video-production-calgary-real-estate", label: "Real Estate Video Calgary" },
                { href: "/video-production-calgary-oil-gas", label: "Oil & Gas Video Calgary" },
                { href: "/corporate-video-production-calgary", label: "Corporate Video Calgary" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Calgary" },
                { href: "/contact", label: "Get a Construction Video Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Construction & Builder Video — Calgary</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Win more contracts and attract better talent with professional video for your Calgary construction company. From $600.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Get a Quote</Link>
              <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call Now</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
