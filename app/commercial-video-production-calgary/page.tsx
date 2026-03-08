import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Video Production Calgary | TV & Digital Ads | Ruminate X",
  description: "Calgary commercial video production for TV, digital, and social ads. AI-powered commercials from $600. Delivered in 48 hours. Serving all Calgary businesses. Call (587) 804-9266.",
  keywords: ["commercial video production Calgary", "Calgary commercial video", "TV commercial Calgary", "digital ad production Calgary", "Calgary video commercial"],
  openGraph: {
    title: "Commercial Video Production Calgary | Ruminate X",
    description: "TV and digital commercials for Calgary brands. AI-powered, broadcast quality, from $600.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Video Production Calgary",
  provider: {
    "@type": "LocalBusiness",
    name: "Ruminate X",
    address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
    telephone: "+15878049266",
  },
  areaServed: { "@type": "City", name: "Calgary" },
  description: "AI-powered commercial video production for Calgary businesses. TV, digital, and social commercials at broadcast quality.",
  offers: { "@type": "Offer", priceRange: "$600–$3,000", priceCurrency: "CAD" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Commercials</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Commercial Video Production Calgary
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            Broadcast-quality commercials for Calgary businesses — TV, digital, social, and YouTube. AI-produced, fast-delivered, and priced for the Calgary market starting at $600.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Commercial Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { stat: "$600", label: "Starting price" },
              { stat: "48hrs", label: "Turnaround" },
              { stat: "4K", label: "Broadcast quality" },
              { stat: "YYC", label: "Calgary based" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-slate-900">{stat}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Commercial Video for Every Calgary Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "TV Commercials", desc: "Broadcast-ready 15, 30, and 60-second commercials for Calgary local TV stations and cable networks.", price: "From $1,200" },
                { type: "YouTube Pre-Roll Ads", desc: "Skippable and non-skippable YouTube ads optimized for Calgary audience targeting.", price: "From $600" },
                { type: "Social Media Ads", desc: "Instagram, Facebook, and TikTok video ads built for Calgary's social-savvy consumers.", price: "From $500" },
                { type: "Digital Display Video", desc: "Programmatic display video ads for Google, Calgary news sites, and digital platforms.", price: "From $600" },
                { type: "OTT / Streaming Ads", desc: "Ads for streaming platforms and connected TV reaching Calgary households.", price: "From $900" },
                { type: "Radio-to-Video Repurpose", desc: "Convert your existing Calgary radio spots into video commercials for digital channels.", price: "From $400" },
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
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Calgary Businesses Use AI for Commercials</h2>
            <p className="text-lg text-slate-700 mb-6">
              Traditional Calgary commercial production means booking a film crew, renting studio space, scheduling talent, and waiting 4–6 weeks for post-production. Then the invoice arrives: $20,000+ for a 30-second spot.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              AI commercial production cuts every step. No crew. No studio. No scheduling delays. We take your brief and deliver a broadcast-quality commercial in 48 hours — at a price that actually makes sense for a Calgary business.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4 text-left">Factor</th>
                    <th className="p-4 text-left">Calgary Production Company</th>
                    <th className="p-4 text-left">Ruminate X</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["30-sec TV commercial", "$20,000–$50,000", "$1,200–$2,500"],
                    ["Social media ad", "$5,000–$15,000", "$500–$1,000"],
                    ["Production timeline", "4–8 weeks", "24–48 hours"],
                    ["Revisions", "Paid after 2 rounds", "Unlimited, included"],
                    ["Multiple formats", "Extra cost", "Included"],
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
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Industries We Make Commercials For</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Oil & Gas", href: "/video-production-calgary-oil-gas" },
                { name: "Real Estate", href: "/video-production-calgary-real-estate" },
                { name: "Restaurants", href: "/video-production-calgary-restaurants" },
                { name: "Tech Companies", href: "/video-production-calgary-tech" },
                { name: "Small Business", href: "/video-production-calgary-small-business" },
                { name: "Healthcare", href: "/ai-video-production-healthcare" },
                { name: "Retail", href: "/ai-video-production-ecommerce" },
                { name: "Finance", href: "/ai-video-production-finance" },
                { name: "Professional Services", href: "/contact" },
              ].map(({ name, href }) => (
                <Link key={name} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-center">
                  <p className="font-medium text-slate-700 text-sm">{name}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Related Calgary Video Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary (Hub)" },
                { href: "/brand-film-production-calgary", label: "Brand Film Production Calgary" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production Calgary" },
                { href: "/social-media-video-production-calgary", label: "Social Media Video Calgary" },
                { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI vs Traditional Agency" },
                { href: "/contact", label: "Start a Commercial Project" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Calgary's Commercial Production Studio</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Broadcast-quality commercials for Calgary brands. Faster and cheaper than any traditional Calgary production company.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Get a Commercial Quote</Link>
              <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call Now</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
