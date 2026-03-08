import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Real Estate Video Production Calgary | Property Tours & Marketing | Ruminate X",
  description: "Real estate video production in Calgary. Property tours, listing videos, and agent brand content from $500. AI-powered, delivered fast. Serving Calgary realtors and developers. Call (587) 804-9266.",
  keywords: ["real estate video production Calgary", "Calgary property video", "real estate video Calgary", "Calgary listing video", "property tour Calgary video"],
  openGraph: {
    title: "Real Estate Video Production Calgary | Ruminate X",
    description: "Property tours and listing videos for Calgary realtors. AI-powered, from $500, delivered in 48 hours.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Real Estate Video Production Calgary",
  provider: {
    "@type": "LocalBusiness",
    name: "Ruminate X",
    address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
    telephone: "+15878049266",
  },
  areaServed: { "@type": "City", name: "Calgary" },
  description: "AI-powered real estate video production for Calgary realtors and developers. Property tours, listing videos, and agent branding.",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Real Estate Video</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Real Estate Video Production Calgary
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            Property tour videos, listing showcases, and agent brand content for Calgary's real estate market. AI-produced, delivered in 48 hours, starting at $500.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Real Estate Video Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { stat: "$500", label: "Starting price" },
              { stat: "48hrs", label: "Turnaround" },
              { stat: "73%", label: "More listing inquiries" },
              { stat: "YYC", label: "Calgary based" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-slate-900">{stat}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Real Estate Video Services in Calgary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "Property Tour Videos", desc: "Cinematic walkthrough videos that showcase Calgary listings inside and out. Make buyers fall in love before the showing.", price: "From $500" },
                { type: "Listing Announcement Videos", desc: "Just-listed videos for social media that drive immediate inquiries for Calgary properties.", price: "From $400" },
                { type: "Neighbourhood Showcase", desc: "Videos showing Calgary neighborhoods — Beltline, Kensington, Mission, Mount Royal — to sell the lifestyle, not just the home.", price: "From $600" },
                { type: "Agent Brand Videos", desc: "Personal brand films for Calgary realtors. Build trust and recognition in a competitive Calgary market.", price: "From $800" },
                { type: "New Development & Pre-Sale", desc: "Pre-construction and new development videos for Calgary builders and developers.", price: "From $1,200" },
                { type: "Commercial Property Video", desc: "Industrial, office, and retail property videos for Calgary commercial real estate.", price: "From $700" },
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
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Real Estate Video — The Numbers</h2>
            <p className="text-lg text-slate-700 mb-6">
              Calgary's real estate market is competitive. Listings with professional video get 73% more inquiries, sell faster, and command higher prices. Yet most Calgary realtors still rely on photos alone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { stat: "73%", label: "More listing inquiries with video" },
                { stat: "50%", label: "Faster sales for listings with video" },
                { stat: "4x", label: "More shares on social with video listings" },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-red-50 border border-red-200 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-red-600 mb-1">{stat}</p>
                  <p className="text-slate-600 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Neighbourhoods We Showcase</h2>
            <div className="flex flex-wrap gap-2">
              {["Downtown Calgary", "Beltline", "Kensington", "Mission", "Mount Royal", "Inglewood", "Bridgeland", "Marda Loop", "Eau Claire", "Tuscany", "Rocky Ridge", "Signal Hill", "Altadore", "Nolan Hill", "Sage Hill", "Mahogany", "Cranston", "Airdrie", "Cochrane", "Okotoks"].map(n => (
                <span key={n} className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-full">{n}</span>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">FAQ — Real Estate Video in Calgary</h2>
            <div className="space-y-6">
              {[
                { q: "Do you film on-location for real estate videos?", a: "No. Our AI production creates property tour videos without physical filming — no scheduling, no crew, no weather delays. This means faster delivery and lower cost for Calgary realtors." },
                { q: "How quickly can I get a listing video?", a: "Most Calgary listing videos are delivered within 24–48 hours. Traditional real estate videographers in Calgary take 3–7 days with limited availability." },
                { q: "Can you create videos for Calgary commercial real estate?", a: "Yes. We produce videos for industrial, office, and retail properties across Calgary's commercial real estate market — including NE Calgary industrial areas, downtown offices, and suburban retail centres." },
                { q: "Do you work with new condo and home developments in Calgary?", a: "Absolutely. Pre-construction and new development videos are a specialty — show buyers what's coming before the first shovel goes in." },
              ].map(({ q, a }) => (
                <div key={q}>
                  <h3 className="font-bold text-slate-900 mb-2">{q}</h3>
                  <p className="text-slate-600">{a}</p>
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
                { href: "/video-production-calgary-oil-gas", label: "Oil & Gas Video Calgary" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production Calgary" },
                { href: "/use-cases/real-estate-video-tours", label: "Real Estate Video Tours Guide" },
                { href: "/contact", label: "Get a Real Estate Video Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Sell Calgary Properties Faster With Video</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Property tour and listing videos for Calgary realtors. 48-hour delivery. No on-location filming required.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Get a Real Estate Video</Link>
              <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call Now</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
