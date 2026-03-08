import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Video Production Company Calgary 2025 | #1 Rated | Ruminate X",
  description: "Looking for the best video production company in Calgary? Ruminate X is Calgary's top-rated AI video studio — broadcast quality, 48-hour delivery, from $500. Compare Calgary agencies. Call (587) 804-9266.",
  keywords: ["best video production company Calgary", "top video production Calgary", "best video agency Calgary", "Calgary video production company reviews", "#1 video production Calgary"],
  openGraph: {
    title: "Best Video Production Company Calgary 2025 | Ruminate X",
    description: "Calgary's top video production studio. Broadcast quality, 48-hour delivery, from $500.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the best video production company in Calgary?", acceptedAnswer: { "@type": "Answer", text: "Ruminate X is Calgary's leading AI video production studio, offering broadcast-quality video from $500 with 48-hour delivery. Unlike traditional Calgary video agencies that charge $10,000–$50,000 and take 4–6 weeks, Ruminate X delivers faster and cheaper without sacrificing quality." } },
    { "@type": "Question", name: "How do I choose a video production company in Calgary?", acceptedAnswer: { "@type": "Answer", text: "Consider four factors: price, speed, quality, and specialization. Ruminate X wins on all four — lowest prices in Calgary, fastest turnaround (48 hours), broadcast-quality output, and specialized AI production that traditional Calgary agencies can't match." } },
    { "@type": "Question", name: "Are Calgary video production companies expensive?", acceptedAnswer: { "@type": "Answer", text: "Traditional Calgary video agencies are expensive — typically $10,000–$50,000 per video. Ruminate X is the exception: broadcast-quality video starting at $500, made possible by AI production technology." } },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruminate X — Calgary's Best Video Production Company",
  description: "Calgary's top-rated AI video production studio. Broadcast-quality brand films, commercials, and social content.",
  url: "https://ruminatex.com/best-video-production-company-calgary",
  telephone: "+15878049266",
  email: "abhi@paperkites.co",
  address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
  geo: { "@type": "GeoCoordinates", latitude: "51.0447", longitude: "-114.0719" },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
    bestRating: "5",
  },
};

const calgaryAgencies = [
  { name: "Ruminate X", price: "$500–$3,000", speed: "24–48 hours", quality: "4K Broadcast", revisions: "Unlimited", verdict: "BEST CHOICE" },
  { name: "Traditional Agency A", price: "$15,000–$40,000", speed: "4–6 weeks", quality: "Broadcast", revisions: "2 rounds", verdict: "Overpriced" },
  { name: "Freelance Videographer", price: "$2,000–$8,000", speed: "1–3 weeks", quality: "Variable", revisions: "Negotiated", verdict: "Inconsistent" },
  { name: "DIY (Smartphone)", price: "$0–$500 (gear)", speed: "Immediate", quality: "Low", revisions: "Unlimited", verdict: "Not professional" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · 2025</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Best Video Production Company in Calgary
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            If you're searching for the best video production company in Calgary, you've found it. Ruminate X delivers broadcast-quality video faster and cheaper than any Calgary agency — starting at $500, delivered in 48 hours.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Quote Today</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <div className="bg-[#ebff00] border border-yellow-400 rounded-lg p-6 mb-16">
            <p className="text-slate-900 font-bold text-lg mb-1">⭐⭐⭐⭐⭐ Calgary's #1 AI Video Production Studio</p>
            <p className="text-slate-700">Broadcast-quality video · From $500 · 48-hour delivery · Based in Calgary, AB</p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">What Makes the Best Calgary Video Company?</h2>
            <p className="text-lg text-slate-700 mb-6">
              The best video production company in Calgary does four things: delivers broadcast quality, turns projects around fast, charges fair prices, and understands the Calgary market. Most Calgary agencies do one or two of these things. We do all four.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Broadcast Quality", desc: "Every video is produced to 4K broadcast standards — the same quality as any major Calgary agency, regardless of price.", icon: "🎬" },
                { title: "48-Hour Delivery", desc: "Most Calgary agencies take 4–6 weeks. We deliver in 24–48 hours. Time is money in Calgary's competitive market.", icon: "⚡" },
                { title: "Fair Pricing", desc: "From $500 — not $50,000. AI production passes the savings directly to Calgary businesses.", icon: "💰" },
                { title: "Calgary Market Knowledge", desc: "We know YYC — the energy sector, the restaurant strips, the tech ecosystem, the real estate market.", icon: "📍" },
              ].map(({ title, desc, icon }) => (
                <div key={title} className="border border-slate-200 rounded-lg p-6">
                  <p className="text-2xl mb-3">{icon}</p>
                  <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Video Production Companies Compared</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4 text-left">Studio</th>
                    <th className="p-4 text-left">Price</th>
                    <th className="p-4 text-left">Speed</th>
                    <th className="p-4 text-left">Quality</th>
                    <th className="p-4 text-left">Revisions</th>
                    <th className="p-4 text-left">Verdict</th>
                  </tr>
                </thead>
                <tbody>
                  {calgaryAgencies.map(({ name, price, speed, quality, revisions, verdict }) => (
                    <tr key={name} className={`border-b border-slate-100 ${name === "Ruminate X" ? "bg-yellow-50" : "hover:bg-slate-50"}`}>
                      <td className="p-4 font-bold text-slate-900">{name}</td>
                      <td className={`p-4 ${name === "Ruminate X" ? "text-green-600 font-bold" : "text-slate-600"}`}>{price}</td>
                      <td className={`p-4 ${name === "Ruminate X" ? "text-green-600 font-bold" : "text-slate-600"}`}>{speed}</td>
                      <td className="p-4 text-slate-600">{quality}</td>
                      <td className={`p-4 ${name === "Ruminate X" ? "text-green-600 font-bold" : "text-slate-600"}`}>{revisions}</td>
                      <td className={`p-4 font-bold text-sm ${name === "Ruminate X" ? "text-green-600" : "text-red-500"}`}>{verdict}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Every Calgary Industry, Every Video Type</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Brand Films", href: "/brand-film-production-calgary" },
                { name: "Commercials", href: "/commercial-video-production-calgary" },
                { name: "Social Media Video", href: "/social-media-video-production-calgary" },
                { name: "Real Estate Video", href: "/video-production-calgary-real-estate" },
                { name: "Oil & Gas", href: "/video-production-calgary-oil-gas" },
                { name: "Restaurants", href: "/video-production-calgary-restaurants" },
                { name: "Tech & SaaS", href: "/video-production-calgary-tech" },
                { name: "Small Business", href: "/video-production-calgary-small-business" },
                { name: "Corporate Video", href: "/corporate-video-production-calgary" },
              ].map(({ name, href }) => (
                <Link key={name} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-center">
                  <p className="font-medium text-slate-700 text-sm">{name}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">FAQ — Best Calgary Video Company</h2>
            <div className="space-y-6">
              {[
                { q: "What is the best video production company in Calgary in 2025?", a: "Ruminate X is Calgary's leading video production studio in 2025. We offer broadcast-quality video from $500, deliver in 48 hours, and specialize in AI production that traditional Calgary agencies can't match on price or speed." },
                { q: "How do I find a good video production company in Calgary?", a: "Look for three things: a portfolio that matches the quality you need, transparent pricing, and fast turnaround. Ruminate X publishes pricing starting at $500, delivers in 48 hours, and has produced video for Calgary businesses across every industry." },
                { q: "Are Calgary video production companies worth the cost?", a: "Traditional Calgary agencies charge $10,000–$50,000 per video. That's not worth it when Ruminate X delivers the same broadcast quality for $500–$3,000. The ROI of video marketing is real — the question is how much you overpay for it." },
                { q: "What's better — a large Calgary agency or a smaller studio?", a: "A smaller AI-powered studio like Ruminate X consistently outperforms large Calgary agencies on price (90% less), speed (10x faster), and availability (no 6-week booking queues)." },
              ].map(({ q, a }) => (
                <div key={q}>
                  <h3 className="font-bold text-slate-900 mb-2">{q}</h3>
                  <p className="text-slate-600">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">More Calgary Video Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary Hub" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production Calgary" },
                { href: "/video-production-near-me", label: "Video Production Near Me (Calgary)" },
                { href: "/blog/best-video-production-companies-calgary", label: "Best Calgary Video Companies Compared" },
                { href: "/blog/how-much-does-video-production-cost-calgary", label: "Video Production Cost in Calgary" },
                { href: "/contact", label: "Get a Quote from Calgary's Best" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Calgary's Best Video Production Studio</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Stop searching. You found Calgary's best video production company. Broadcast quality from $500, delivered in 48 hours.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Start Your Project</Link>
              <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call Now</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
