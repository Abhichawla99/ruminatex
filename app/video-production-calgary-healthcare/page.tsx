import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healthcare Video Production Calgary | Medical & Health Videos | Ruminate X",
  description: "Healthcare video production in Calgary. Patient education, clinic brand films, health system communications, and medical explainers. AI-powered, from $600. Call (587) 804-9266.",
  keywords: ["healthcare video production Calgary", "Calgary medical video", "health clinic video Calgary", "patient education video Calgary", "medical marketing video Calgary"],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Healthcare Video Production Calgary",
  provider: { "@type": "LocalBusiness", name: "Ruminate X", telephone: "+15878049266", address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" } },
  areaServed: { "@type": "City", name: "Calgary" },
  description: "AI-powered healthcare video production for Calgary clinics, hospitals, and health organizations.",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Healthcare</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">Healthcare Video Production Calgary</h1>
          <p className="text-xl text-slate-600 mb-4">Patient education, clinic brand films, health system communications, and medical explainers for Calgary's healthcare sector. AI-produced, compliant, and delivered in 48 hours from $600.</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Healthcare Video Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Healthcare Video Services — Calgary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "Patient Education Videos", desc: "Clear, reassuring videos that explain procedures, conditions, and treatment plans to Calgary patients.", price: "From $600" },
                { type: "Clinic Brand Films", desc: "Showcase your Calgary clinic's culture, team, and patient experience to attract new patients.", price: "From $800" },
                { type: "Physician & Specialist Profiles", desc: "Introduce Calgary doctors and specialists with professional profile videos that build patient trust.", price: "From $500" },
                { type: "Health System Internal Comms", desc: "Communications for Alberta Health Services and Calgary health networks — training, policy, and leadership messages.", price: "From $700" },
                { type: "Telehealth & App Explainers", desc: "Explain your Calgary digital health platform or telehealth service with a clear product explainer.", price: "From $600" },
                { type: "Wellness Brand Videos", desc: "Brand content for Calgary wellness clinics, physiotherapy, chiropractic, and mental health providers.", price: "From $500" },
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
                { href: "/video-production-calgary-small-business", label: "Small Business Video Calgary" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Calgary" },
                { href: "/ai-video-production-healthcare", label: "AI Healthcare Video (Global)" },
                { href: "/contact", label: "Get a Healthcare Video Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Healthcare Video for Calgary Clinics & Health Organizations</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Patient education, brand films, and internal communications for Calgary's healthcare sector. From $600.</p>
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
