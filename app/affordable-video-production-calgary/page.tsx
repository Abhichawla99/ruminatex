import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affordable Video Production Calgary | Professional Video from $500 | Ruminate X",
  description: "Affordable video production in Calgary. Professional, broadcast-quality video from $500. 80–95% less than traditional Calgary video agencies. AI-powered, 48-hour delivery. Call (587) 804-9266.",
  keywords: ["affordable video production Calgary", "cheap video production Calgary", "budget video production Calgary", "low cost video Calgary", "inexpensive video production Calgary"],
  openGraph: {
    title: "Affordable Video Production Calgary | Ruminate X",
    description: "Professional video from $500 in Calgary. 80% less than traditional agencies. Delivered in 48 hours.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Affordable Video Production Calgary",
  provider: {
    "@type": "LocalBusiness",
    name: "Ruminate X",
    address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
    telephone: "+15878049266",
  },
  areaServed: { "@type": "City", name: "Calgary" },
  description: "Affordable AI-powered video production for Calgary businesses. Professional video from $500 — 80–95% less than traditional Calgary video agencies.",
  offers: { "@type": "Offer", priceRange: "$400–$3,000", priceCurrency: "CAD" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the cheapest video production option in Calgary?", acceptedAnswer: { "@type": "Answer", text: "Ruminate X is Calgary's most affordable professional video production option, starting at $400–$500 for a broadcast-quality video. Traditional Calgary video agencies start at $10,000–$15,000 per video. We deliver the same quality for 80–95% less." } },
    { "@type": "Question", name: "Why is AI video production cheaper than traditional Calgary agencies?", acceptedAnswer: { "@type": "Answer", text: "AI production eliminates the biggest cost drivers: film crew salaries, equipment rental, studio fees, location permits, travel costs, and weeks of post-production labor. All of this is replaced by AI, which delivers the same cinematic quality at a fraction of the cost." } },
    { "@type": "Question", name: "Is affordable video production still professional quality?", acceptedAnswer: { "@type": "Answer", text: "Yes. Ruminate X delivers broadcast-quality, 4K video regardless of budget. The difference isn't quality — it's how we produce it. AI doesn't mean lower quality; it means better efficiency and dramatically lower cost for Calgary businesses." } },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Affordable Video</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Affordable Video Production Calgary
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            Professional video production in Calgary doesn't have to cost $20,000. Ruminate X delivers broadcast-quality video from $500 — 80–95% less than traditional Calgary agencies. Same cinematic quality, fraction of the price.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get an Affordable Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { stat: "$500", label: "Starting price" },
              { stat: "90%", label: "Average savings" },
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
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Video Production Pricing — Reality Check</h2>
            <p className="text-lg text-slate-700 mb-6">Here's what Calgary video production actually costs in 2025:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4 text-left">Video Type</th>
                    <th className="p-4 text-left">Calgary Agency Price</th>
                    <th className="p-4 text-left">Ruminate X Price</th>
                    <th className="p-4 text-left">Your Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Brand Film (90 sec)", "$15,000–$40,000", "$800–$2,000", "$14,200+"],
                    ["TV Commercial (30 sec)", "$20,000–$50,000", "$1,200–$2,500", "$18,800+"],
                    ["Product Demo Video", "$5,000–$15,000", "$500–$1,000", "$4,500+"],
                    ["Social Media Video", "$3,000–$8,000", "$400–$700", "$2,600+"],
                    ["Explainer Video", "$5,000–$12,000", "$500–$800", "$4,500+"],
                    ["Real Estate Tour", "$1,500–$5,000", "$500–$900", "$1,000+"],
                  ].map(([type, agency, us, savings]) => (
                    <tr key={type} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="p-4 font-medium text-slate-700">{type}</td>
                      <td className="p-4 text-red-500">{agency}</td>
                      <td className="p-4 text-green-600 font-bold">{us}</td>
                      <td className="p-4 text-slate-500">{savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Is Ruminate X So Much More Affordable?</h2>
            <div className="space-y-4">
              {[
                { reason: "No film crew costs", desc: "Traditional Calgary video agencies employ directors, cinematographers, gaffers, grips, makeup artists, and producers. That's $3,000–$8,000/day in crew alone. We use AI — zero crew costs." },
                { reason: "No equipment rental", desc: "Camera rentals, lighting rigs, dollies, drones, and studio space add $2,000–$5,000 per shoot. AI production needs none of it." },
                { reason: "No location fees", desc: "Filming at a Calgary location requires permits, insurance, and often daily fees of $500–$2,000. We produce remotely." },
                { reason: "Faster post-production", desc: "Traditional Calgary agencies take 4–6 weeks in post-production. AI cuts this to hours, not weeks — dramatically reducing labor costs." },
                { reason: "No overhead markup", desc: "Calgary video agencies add 30–50% overhead markup on every project. We don't have that overhead, so you don't pay for it." },
              ].map(({ reason, desc }) => (
                <div key={reason} className="flex gap-4 border border-slate-200 p-5 rounded-lg">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">{reason}</p>
                    <p className="text-slate-600 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Affordable Video for Every Calgary Business</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Small Business", href: "/video-production-calgary-small-business" },
                { name: "Restaurants", href: "/video-production-calgary-restaurants" },
                { name: "Real Estate", href: "/video-production-calgary-real-estate" },
                { name: "Tech & SaaS", href: "/video-production-calgary-tech" },
                { name: "Oil & Gas", href: "/video-production-calgary-oil-gas" },
                { name: "Brand Films", href: "/brand-film-production-calgary" },
              ].map(({ name, href }) => (
                <Link key={name} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-center">
                  <p className="font-medium text-slate-700 text-sm">{name}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Affordable Calgary Video FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "What is the cheapest professional video option in Calgary?", a: "Ruminate X starts at $400–$500 for a professional, broadcast-quality video. We're the most affordable professional video production option in Calgary. Traditional agencies start at $10,000–$15,000." },
                { q: "Does cheap mean low quality?", a: "No. AI production doesn't sacrifice quality — it eliminates unnecessary costs. Every video is produced to broadcast standards in 4K. The only difference is how we produce it, not what it looks like." },
                { q: "Can I get a video for under $1,000 in Calgary?", a: "Yes. Most of our Calgary projects are under $1,000. Social media videos start at $400. Brand explainers start at $500. Product demos from $600. We're built for Calgary's real market." },
                { q: "Is there a payment plan?", a: "Contact us to discuss payment options for larger Calgary projects. We want to make video production accessible to every Calgary business." },
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
                { href: "/video-production-calgary-small-business", label: "Small Business Video Calgary" },
                { href: "/brand-film-production-calgary", label: "Brand Film Production Calgary" },
                { href: "/roi-calculator", label: "Calculate Your Video ROI" },
                { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI vs Traditional Agency" },
                { href: "/contact", label: "Get an Affordable Video Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Affordable Doesn't Mean Cheap — It Means Smart</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Professional, broadcast-quality video from $500. Calgary's most affordable video production studio.</p>
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
