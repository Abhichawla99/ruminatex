import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tech & SaaS Video Production Calgary | Software Demo Videos | Ruminate X",
  description: "Video production for Calgary tech startups and SaaS companies. Product demos, explainers, investor pitch videos, and brand films. AI-powered, from $500. Call (587) 804-9266.",
  keywords: ["tech video production Calgary", "SaaS video Calgary", "software demo video Calgary", "Calgary startup video", "technology company video Calgary"],
  openGraph: {
    title: "Tech & SaaS Video Production Calgary | Ruminate X",
    description: "Product demos, explainers, and brand films for Calgary tech companies. AI-powered, from $500.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tech & SaaS Video Production Calgary",
  provider: {
    "@type": "LocalBusiness",
    name: "Ruminate X",
    address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
    telephone: "+15878049266",
  },
  areaServed: { "@type": "City", name: "Calgary" },
  description: "AI-powered video production for Calgary tech startups and SaaS companies.",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Tech & SaaS</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Tech & SaaS Video Production Calgary
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            Product demos, explainer videos, investor pitch content, and brand films for Calgary's growing tech ecosystem. AI-produced video that converts — from $500.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Tech Video Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { stat: "$500", label: "Starting price" },
              { stat: "48hrs", label: "Turnaround" },
              { stat: "86%", label: "Better product understanding" },
              { stat: "YYC", label: "Calgary based" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-slate-900">{stat}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Tech Video Services for Calgary Companies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "SaaS Product Demo Videos", desc: "Show your Calgary software product in action. Clear, compelling demos that reduce churn and increase signups.", price: "From $600" },
                { type: "Explainer Videos", desc: "Complex ideas made simple. Animated and narrated explainers for Calgary tech products and services.", price: "From $500" },
                { type: "Investor Pitch Videos", desc: "Raise your next round with a compelling video pitch. For Calgary tech companies pursuing angels, VCs, and grants.", price: "From $1,500" },
                { type: "Brand & Company Films", desc: "Corporate brand films that position your Calgary tech company as the leader in your space.", price: "From $800" },
                { type: "Customer Success Stories", desc: "Case study and testimonial videos that turn Calgary customer wins into your best sales content.", price: "From $700" },
                { type: "Onboarding & Training", desc: "User onboarding and internal training videos that reduce support tickets and improve product adoption.", price: "From $600" },
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
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary's Tech Ecosystem</h2>
            <p className="text-lg text-slate-700 mb-6">
              Calgary's tech sector is booming. With Benevity, Cybera, Symend, and hundreds of early-stage startups, Calgary is building a serious tech ecosystem alongside its traditional energy sector. We help Calgary tech companies punch above their weight with world-class video content.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["SaaS Startups", "Energy Tech (Cleantech)", "Fintech & Payments", "AI & Machine Learning", "AgTech", "HealthTech", "PropTech", "EdTech", "Cybersecurity"].map(type => (
                <div key={type} className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-center">
                  <p className="font-medium text-slate-700 text-sm">{type}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Tech Companies Choose AI Video Production</h2>
            <div className="space-y-4">
              {[
                { point: "Ship faster than traditional agencies", desc: "Tech moves fast. We deliver video in 48 hours — not 6 weeks. Test, iterate, and ship video content as fast as your product." },
                { point: "Easy to update and version", desc: "Product changed? New feature added? Update your demo or explainer video without a full reshoot. Pay only for what changed." },
                { point: "Scale globally from Calgary", desc: "One video, 140+ languages. Your Calgary SaaS product can have localized demos for North America, Europe, and Asia automatically." },
                { point: "Built for digital-first delivery", desc: "Every video is optimized for the platforms Calgary tech companies use — websites, ProductHunt, LinkedIn, YouTube, and in-app." },
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
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production Calgary" },
                { href: "/use-cases/saas-video-production", label: "SaaS Video Production Guide" },
                { href: "/tools/best-ai-video-tools-comparison", label: "Best AI Video Tools" },
                { href: "/contact", label: "Get a Tech Video Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Video for Calgary's Next Wave of Tech</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Product demos, explainers, and brand content for Calgary's tech ecosystem. Ship video as fast as you ship code.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Get a Tech Video</Link>
              <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call Now</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
