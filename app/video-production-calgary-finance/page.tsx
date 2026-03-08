import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finance Video Production Calgary | Financial Services Video | Ruminate X",
  description: "Video production for Calgary financial services firms, wealth managers, accountants, and insurance companies. Brand films, explainers, and investor content. From $700. Call (587) 804-9266.",
  keywords: ["finance video production Calgary", "financial services video Calgary", "Calgary wealth management video", "accounting firm video Calgary", "investment video Calgary"],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Finance Video Production Calgary",
  provider: { "@type": "LocalBusiness", name: "Ruminate X", telephone: "+15878049266", address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" } },
  areaServed: { "@type": "City", name: "Calgary" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Finance</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">Finance Video Production Calgary</h1>
          <p className="text-xl text-slate-600 mb-4">Professional video for Calgary's financial services community. Brand films, client education, advisor profiles, and investor content that builds trust and grows AUM — from $700.</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Finance Video Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Finance Video Services — Calgary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "Wealth Management Brand Films", desc: "Position your Calgary wealth management firm as the trusted choice for high-net-worth Alberta clients.", price: "From $1,000" },
                { type: "Financial Advisor Profile Videos", desc: "Personal brand videos for Calgary financial advisors that convert prospects to booked meetings.", price: "From $700" },
                { type: "Investment & Market Explainers", desc: "Complex financial concepts explained clearly — for Calgary clients and public education content.", price: "From $700" },
                { type: "Insurance & Benefits Videos", desc: "Explain insurance products and employee benefits to Calgary clients in a way they actually understand.", price: "From $600" },
                { type: "Annual Report & Investor Videos", desc: "Video summaries of annual reports and investor communications for Calgary listed and private companies.", price: "From $1,200" },
                { type: "Accounting & Tax Explainers", desc: "Client education videos for Calgary accountants and tax firms. Reduce basic inquiry calls with clear explainer content.", price: "From $600" },
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
                { href: "/video-production-calgary-legal", label: "Legal Video Calgary" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Calgary" },
                { href: "/contact", label: "Get a Finance Video Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Trusted Video for Calgary Financial Professionals</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Brand films, advisor profiles, and client education for Calgary's financial services sector. From $700.</p>
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
