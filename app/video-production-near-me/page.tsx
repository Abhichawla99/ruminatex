import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Video Production Near Me Calgary | Local Video Studio | Ruminate X",
  description: "Looking for video production near you in Calgary? Ruminate X is Calgary's local AI video studio. Professional video from $500, delivered in 48 hours. Call (587) 804-9266.",
  keywords: ["video production near me Calgary", "video production near me", "local video production Calgary", "Calgary video studio near me", "video company near me Calgary"],
  openGraph: {
    title: "Video Production Near Me — Calgary | Ruminate X",
    description: "Calgary's local video production studio. Professional video from $500, 48-hour delivery.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ruminatex.com/video-production-near-me",
  name: "Ruminate X — Video Production Near Me (Calgary)",
  description: "AI-powered video production studio in Calgary, Alberta. Serving all of YYC and surrounding areas.",
  url: "https://ruminatex.com/video-production-near-me",
  telephone: "+15878049266",
  email: "abhi@paperkites.co",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "51.0447",
    longitude: "-114.0719",
  },
  areaServed: [
    { "@type": "City", name: "Calgary" },
    { "@type": "City", name: "Airdrie" },
    { "@type": "City", name: "Cochrane" },
    { "@type": "City", name: "Okotoks" },
    { "@type": "City", name: "Chestermere" },
  ],
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-18:00",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Local Video Studio</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Video Production Near Me — Calgary
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            You're looking for a video production company near you in Calgary. You found us. Ruminate X is Calgary's AI video studio — local, responsive, and producing broadcast-quality video from $500.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { stat: "YYC", label: "Calgary based" },
              { stat: "$500", label: "Starting price" },
              { stat: "48hrs", label: "Delivery" },
              { stat: "4K", label: "Quality" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-slate-900">{stat}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Local Matters for Video Production</h2>
            <p className="text-lg text-slate-700 mb-6">
              When you search "video production near me" in Calgary, you want someone who understands your market. Someone who knows that Calgary's energy sector has different needs than a Kensington café. Someone in your timezone, reachable by phone, who gets Calgary.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              That's us. Based in Calgary. We know YYC — the neighbourhoods, the industries, the local market. And unlike traditional Calgary production companies, we're fast and affordable.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-slate-700 font-medium">📍 Ruminate X is based in Calgary, Alberta. We serve all of YYC — Downtown, Beltline, NE, NW, SE, SW, and surrounding communities including Airdrie, Cochrane, and Okotoks.</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">What We Produce Near You in Calgary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "Brand Films", href: "/brand-film-production-calgary", desc: "Cinematic brand stories for Calgary businesses." },
                { type: "Commercials", href: "/commercial-video-production-calgary", desc: "TV, digital, and social ads for Calgary." },
                { type: "Product Videos", href: "/product-video-production-calgary", desc: "Product demos and showcases." },
                { type: "Social Media Content", href: "/social-media-video-production-calgary", desc: "TikTok, Instagram, YouTube for Calgary brands." },
                { type: "Real Estate Video", href: "/video-production-calgary-real-estate", desc: "Property tours for Calgary realtors." },
                { type: "Restaurant Video", href: "/video-production-calgary-restaurants", desc: "Food and promo videos for Calgary restaurants." },
                { type: "Tech & SaaS Video", href: "/video-production-calgary-tech", desc: "Demos and explainers for Calgary tech companies." },
                { type: "Oil & Gas Video", href: "/video-production-calgary-oil-gas", desc: "Corporate video for Calgary energy companies." },
              ].map(({ type, href, desc }) => (
                <Link key={type} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition">
                  <h3 className="font-bold text-slate-900 mb-1">{type}</h3>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Areas We Serve</h2>
            <p className="text-lg text-slate-700 mb-4">We produce video for businesses across all of Calgary and the surrounding area:</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Downtown Calgary", "Beltline", "Kensington", "Mission", "Inglewood", "Bridgeland",
                "Marda Loop", "Sunalta", "Eau Claire", "Chinatown", "Forest Lawn", "Marlborough",
                "Saddleridge", "Coventry Hills", "Tuscany", "Rocky Ridge", "Signal Hill", "Shawnessy",
                "McKenzie Towne", "Mahogany", "New Brighton", "Cranston", "Legacy", "Walden",
                "Nolan Hill", "Sage Hill", "Evanston", "Skyview Ranch", "Cornerstone",
                "Airdrie", "Cochrane", "Okotoks", "Chestermere", "High River",
              ].map(n => (
                <span key={n} className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-full">{n}</span>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Ruminate X vs Other Calgary Video Companies Near You</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4 text-left">What You Want</th>
                    <th className="p-4 text-left">Other Calgary Studios</th>
                    <th className="p-4 text-left">Ruminate X</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Local Calgary studio", "Yes (but booked up)", "Yes — available now"],
                    ["Fast turnaround", "3–6 weeks", "24–48 hours"],
                    ["Affordable price", "$10,000–$50,000", "$500–$3,000"],
                    ["Broadcast quality", "Yes", "Yes (4K)"],
                    ["Multiple revisions", "Paid extra", "Unlimited, free"],
                    ["Calgary knowledge", "Yes", "Yes"],
                  ].map(([f, trad, us]) => (
                    <tr key={f} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="p-4 font-medium text-slate-700">{f}</td>
                      <td className="p-4 text-red-500">{trad}</td>
                      <td className="p-4 text-green-600 font-bold">{us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">More Calgary Video Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary (Main Hub)" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production Calgary" },
                { href: "/brand-film-production-calgary", label: "Brand Film Production Calgary" },
                { href: "/commercial-video-production-calgary", label: "Commercial Video Calgary" },
                { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI vs Traditional Calgary Agency" },
                { href: "/contact", label: "Get a Quote — Calgary Video" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Your Calgary Video Studio</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, Alberta · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-2">Local. Fast. Affordable. Broadcast quality.</p>
            <p className="text-slate-400 text-sm mb-8">The video production company you've been searching for — right here in Calgary.</p>
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
