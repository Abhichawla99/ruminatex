import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Videographer Calgary | Better Than Freelance, Cheaper Than Agency | Ruminate X",
  description: "Looking for a videographer in Calgary? Ruminate X delivers better results than a freelance videographer at a fraction of the cost — no scheduling, no weather delays, 48-hour delivery. From $500. Call (587) 804-9266.",
  keywords: ["videographer Calgary", "Calgary videographer", "freelance videographer Calgary", "hire videographer Calgary", "video creator Calgary"],
  openGraph: {
    title: "Videographer Calgary | Ruminate X",
    description: "Better than a freelance videographer, cheaper than an agency. AI-powered video from $500, delivered in 48 hours.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruminate X — Videographer Calgary",
  description: "AI-powered video production for Calgary businesses. Better results than a freelance videographer, at lower cost.",
  url: "https://ruminatex.com/videographer-calgary",
  telephone: "+15878049266",
  address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
  geo: { "@type": "GeoCoordinates", latitude: "51.0447", longitude: "-114.0719" },
  priceRange: "$$",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Videographer</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Videographer Calgary
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            You're searching for a videographer in Calgary. Before you book a freelancer with an inconsistent portfolio, consider this: Ruminate X delivers broadcast-quality video in 48 hours, from $500, with no scheduling headaches.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Freelance Videographer vs. Ruminate X</h2>
            <p className="text-lg text-slate-700 mb-6">
              Calgary has hundreds of freelance videographers. Quality varies wildly. Availability is unpredictable. Weather, scheduling conflicts, equipment issues — all of it lands on you. And after all that, you might not even love the result.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4 text-left">Factor</th>
                    <th className="p-4 text-left">Calgary Freelance Videographer</th>
                    <th className="p-4 text-left">Ruminate X</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Price", "$1,500–$8,000", "$500–$3,000"],
                    ["Turnaround", "1–3 weeks", "24–48 hours"],
                    ["Quality consistency", "Variable", "Broadcast standard every time"],
                    ["Weather/scheduling risk", "High", "None"],
                    ["Revisions", "Negotiated", "Unlimited, free"],
                    ["Availability", "Book weeks ahead", "Start today"],
                    ["Language options", "English only", "140+ languages"],
                    ["Location required", "Yes", "No"],
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
            <h2 className="text-3xl font-bold mb-6 text-slate-900">What You're Actually Getting With a Calgary Videographer</h2>
            <p className="text-lg text-slate-700 mb-6">
              When you hire a freelance videographer in Calgary, you're hiring one person — with one style, one availability window, and one set of equipment. If they're sick, you reschedule. If the weather is bad, you reschedule. If they misunderstand your brief, you pay for a re-shoot.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Ruminate X is always available. We never cancel due to weather. We never misunderstand the brief — because we iterate until it's right, with unlimited revisions included. And we deliver in 48 hours, not 2 weeks.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">What We Produce for Calgary Businesses</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Brand Films", href: "/brand-film-production-calgary" },
                { name: "Commercials", href: "/commercial-video-production-calgary" },
                { name: "Product Videos", href: "/product-video-production-calgary" },
                { name: "Social Media", href: "/social-media-video-production-calgary" },
                { name: "Real Estate Tours", href: "/video-production-calgary-real-estate" },
                { name: "Restaurant Video", href: "/video-production-calgary-restaurants" },
                { name: "Corporate Video", href: "/corporate-video-production-calgary" },
                { name: "Small Business", href: "/video-production-calgary-small-business" },
                { name: "Tech & SaaS", href: "/video-production-calgary-tech" },
              ].map(({ name, href }) => (
                <Link key={name} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-center">
                  <p className="font-medium text-slate-700 text-sm">{name}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Related Calgary Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary (Hub)" },
                { href: "/best-video-production-company-calgary", label: "Best Video Production Company Calgary" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production Calgary" },
                { href: "/video-production-near-me", label: "Video Production Near Me (Calgary)" },
                { href: "/comparison/freelance-vs-ai-video", label: "Freelance vs AI Video Production" },
                { href: "/contact", label: "Get a Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Better Than a Freelance Videographer</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">No scheduling. No weather delays. No inconsistency. Just broadcast-quality video from $500, in 48 hours.</p>
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
