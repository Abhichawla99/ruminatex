import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Video Production Calgary | Law Firm Brand Videos | Ruminate X",
  description: "Video production for Calgary law firms and legal professionals. Brand films, practice area videos, attorney profiles, and client education content. From $700. Call (587) 804-9266.",
  keywords: ["legal video production Calgary", "law firm video Calgary", "lawyer brand video Calgary", "Calgary attorney video", "legal marketing video Calgary"],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legal Video Production Calgary",
  provider: { "@type": "LocalBusiness", name: "Ruminate X", telephone: "+15878049266", address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" } },
  areaServed: { "@type": "City", name: "Calgary" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Legal</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">Legal Video Production Calgary</h1>
          <p className="text-xl text-slate-600 mb-4">Professional video for Calgary's legal community. Firm brand films, practice area explainers, attorney profiles, and client education content that builds trust and attracts the right clients — from $700.</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Legal Video Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Legal Video Services — Calgary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "Law Firm Brand Films", desc: "Position your Calgary law firm as the trusted choice in your practice area. Sophisticated, professional, and compelling.", price: "From $1,000" },
                { type: "Attorney Profile Videos", desc: "Personal brand videos for Calgary lawyers that establish credibility and make the first impression count.", price: "From $700" },
                { type: "Practice Area Explainers", desc: "Clear explanations of complex legal areas — family law, commercial litigation, real estate — for Calgary clients seeking help.", price: "From $700" },
                { type: "Client Education Videos", desc: "FAQ and process videos that answer common Calgary client questions before the first consultation.", price: "From $600" },
                { type: "Energy Law Specialty", desc: "Specialized video for Calgary's energy law sector — communicating expertise to oil & gas clients.", price: "From $800" },
                { type: "Recruitment & Culture Videos", desc: "Attract top Calgary legal talent with videos that show your firm's culture, values, and career opportunities.", price: "From $700" },
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
                { href: "/corporate-video-production-calgary", label: "Corporate Video Calgary" },
                { href: "/brand-film-production-calgary", label: "Brand Film Calgary" },
                { href: "/video-production-calgary-finance", label: "Finance Video Calgary" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Calgary" },
                { href: "/contact", label: "Get a Legal Video Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Sophisticated Video for Calgary Law Firms</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Credibility-building video for Calgary's legal community. From $700.</p>
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
