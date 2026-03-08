import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Video Production Companies in Calgary 2025 | Honest Comparison",
  description: "Comparing the best video production companies in Calgary in 2025. Prices, turnaround times, quality, and who wins. Updated March 2025. See why Ruminate X leads the pack.",
  keywords: ["best video production companies Calgary", "top video production Calgary", "Calgary video agency comparison", "video production company reviews Calgary 2025"],
  openGraph: {
    title: "Best Video Production Companies in Calgary 2025 | Ruminate X",
    description: "The honest comparison of Calgary's top video production companies. Who charges what, how fast they deliver, and who wins.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Video Production Companies in Calgary 2025",
  description: "Comparing Calgary's top video production companies on price, speed, and quality.",
  author: { "@type": "Organization", name: "Ruminate X" },
  publisher: { "@type": "Organization", name: "Ruminate X", url: "https://ruminatex.com" },
  datePublished: "2026-03-08",
  dateModified: "2026-03-08",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary Video Guide · March 2025</p>
          <h1 className="text-5xl font-bold mb-6 text-slate-900 leading-tight">
            Best Video Production Companies in Calgary (2025)
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            There are dozens of video production companies in Calgary. Most charge too much and take too long. Here's the honest breakdown of what's available, who's worth hiring, and how to choose the right one for your Calgary business.
          </p>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">The Calgary Video Production Landscape</h2>
            <p className="text-lg text-slate-700 mb-6">
              Calgary's video production market falls into four categories: large full-service agencies, mid-size boutique studios, freelance videographers, and AI production studios. Each has different pricing, capabilities, and use cases.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { type: "Large Calgary Agencies", range: "$20,000–$150,000+", best: "Major campaigns, broadcast TV", downside: "Extremely expensive, 6–12 week timelines" },
                { type: "Boutique Calgary Studios", range: "$8,000–$30,000", best: "Quality brand films", downside: "Still expensive, 4–8 week timelines" },
                { type: "Freelance Videographers", range: "$1,500–$8,000", best: "Budget-conscious projects", downside: "Inconsistent quality, scheduling risk" },
                { type: "AI Production (Ruminate X)", range: "$500–$3,000", best: "Everything — any industry, any format", downside: "No physical filming (but that's a feature)" },
              ].map(({ type, range, best, downside }) => (
                <div key={type} className="border border-slate-200 rounded-lg p-5">
                  <h3 className="font-bold text-slate-900 mb-3">{type}</h3>
                  <p className="text-sm text-slate-600 mb-1"><span className="font-medium">Price range:</span> {range}</p>
                  <p className="text-sm text-slate-600 mb-1"><span className="font-medium">Best for:</span> {best}</p>
                  <p className="text-sm text-red-500"><span className="font-medium">Downside:</span> {downside}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">What to Look For in a Calgary Video Company</h2>
            <div className="space-y-5">
              {[
                { criterion: "1. Transparent pricing", detail: "Most Calgary agencies don't publish prices. That's a red flag. If they won't tell you what it costs upfront, expect sticker shock. Ruminate X publishes all pricing: starting at $500 for a 60-second video." },
                { criterion: "2. Portfolio breadth", detail: "Look for a portfolio that includes work similar to what you need. A Calgary agency great at oil & gas corporate video might be terrible at restaurant promo content." },
                { criterion: "3. Turnaround time", detail: "If you need a video for an upcoming campaign, a 6-week timeline kills your options. AI production delivers in 48 hours — every time." },
                { criterion: "4. Revision policy", detail: "Traditional Calgary agencies give you 2 rounds of revisions and charge extra after that. Ruminate X includes unlimited revisions in every project." },
                { criterion: "5. Industry experience", detail: "Calgary has specific industries — oil & gas, real estate, tech, restaurants. Find a studio that understands your sector." },
                { criterion: "6. Multilingual capability", detail: "If you need video in French, Spanish, Mandarin, or any other language, most Calgary agencies will charge $3,000+ per language version. AI production does it automatically." },
              ].map(({ criterion, detail }) => (
                <div key={criterion} className="border-l-4 border-red-500 pl-5">
                  <h3 className="font-bold text-slate-900 mb-2">{criterion}</h3>
                  <p className="text-slate-600">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Ruminate X Is Calgary's Best Video Option in 2025</h2>
            <p className="text-lg text-slate-700 mb-6">
              We're not a traditional Calgary video company. We're the future of video production — and we're building it from Calgary. Here's the honest case for why Ruminate X beats every alternative for most Calgary businesses:
            </p>
            <div className="space-y-4">
              {[
                "Cheapest professional option in Calgary — from $500, vs $10,000+ at any agency",
                "Fastest turnaround — 24–48 hours vs 4–8 weeks anywhere else",
                "Unlimited revisions — no nickel-and-diming after round 2",
                "140+ languages — one video, every market you need",
                "Every industry served — from Saddleridge to the Beltline, oil & gas to tech startups",
                "No location, crew, or scheduling required — we deliver remotely, every time",
              ].map(point => (
                <div key={point} className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <p className="text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Explore Calgary Video Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary — Full Hub" },
                { href: "/best-video-production-company-calgary", label: "Best Video Production Company Calgary" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production Calgary" },
                { href: "/blog/how-much-does-video-production-cost-calgary", label: "Video Production Cost in Calgary" },
                { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI vs Traditional Agency" },
                { href: "/contact", label: "Get a Quote from Calgary's Best" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Calgary's #1 Video Production Studio in 2025</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Stop comparing. Start producing. Broadcast-quality video from $500.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Get a Free Quote</Link>
              <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call (587) 804-9266</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
