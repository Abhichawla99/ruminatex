import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automotive Video Production Calgary | Car Dealership & Auto Video | Ruminate X",
  description: "Video production for Calgary car dealerships, auto services, and automotive brands. Vehicle showcases, dealership promos, and service videos. From $500. Call (587) 804-9266.",
  keywords: ["automotive video production Calgary", "car dealership video Calgary", "auto video Calgary", "vehicle video Calgary", "car commercial Calgary"],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automotive Video Production Calgary",
  provider: { "@type": "LocalBusiness", name: "Ruminate X", telephone: "+15878049266", address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" } },
  areaServed: { "@type": "City", name: "Calgary" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Automotive</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">Automotive Video Production Calgary</h1>
          <p className="text-xl text-slate-600 mb-4">Vehicle showcases, dealership brand films, service promos, and automotive social content for Calgary's auto industry. AI-produced, from $500, delivered in 48 hours.</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get an Auto Video Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Automotive Video Services — Calgary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "Vehicle Showcase Videos", desc: "Cinematic vehicle presentation videos for Calgary dealership websites, social, and digital ads.", price: "From $500" },
                { type: "Dealership Brand Films", desc: "Show why buying from your Calgary dealership is the best experience. Build trust before the test drive.", price: "From $800" },
                { type: "Service & Parts Promos", desc: "Seasonal service deals and parts promotions for Calgary drivers on social media and digital channels.", price: "From $400" },
                { type: "Social Media Auto Content", desc: "Weekly TikTok, Instagram, and YouTube videos for Calgary auto brands that build a loyal following.", price: "From $400" },
                { type: "Auto Detailing & Custom", desc: "Before-and-after and process videos for Calgary auto detailing, customization, and restoration shops.", price: "From $400" },
                { type: "EV & Hybrid Education", desc: "Electric and hybrid vehicle education videos for Calgary dealers transitioning to EV inventory.", price: "From $600" },
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
                { href: "/commercial-video-production-calgary", label: "Commercial Video Calgary" },
                { href: "/social-media-video-production-calgary", label: "Social Media Video Calgary" },
                { href: "/video-production-calgary-small-business", label: "Small Business Video Calgary" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Calgary" },
                { href: "/contact", label: "Get an Automotive Video Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Drive More Sales With Calgary Auto Video</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Vehicle showcases, dealership brand films, and service promos for Calgary's automotive industry. From $500.</p>
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
