import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Does Video Production Cost in Calgary? (2025 Price Guide)",
  description: "Complete guide to video production costs in Calgary in 2025. Brand films, commercials, social media videos — real prices from Calgary agencies vs AI production. Updated March 2025.",
  keywords: ["video production cost Calgary", "how much does video production cost Calgary", "Calgary video production prices", "video production rates Calgary 2025"],
  openGraph: {
    title: "Video Production Cost in Calgary 2025 — Complete Price Guide",
    description: "Real Calgary video production prices. Brand films from $500 to $50,000. Find out what you should actually pay.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does Video Production Cost in Calgary? (2025 Guide)",
  description: "Complete guide to video production costs in Calgary for 2025.",
  author: { "@type": "Organization", name: "Ruminate X" },
  publisher: { "@type": "Organization", name: "Ruminate X", url: "https://ruminatex.com" },
  datePublished: "2026-03-08",
  dateModified: "2026-03-08",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a brand film cost in Calgary?", acceptedAnswer: { "@type": "Answer", text: "A brand film in Calgary costs $800–$4,000 with AI production (Ruminate X) or $15,000–$60,000 with a traditional Calgary production company. The quality is comparable; the difference is production method." } },
    { "@type": "Question", name: "What is the average cost of a commercial in Calgary?", acceptedAnswer: { "@type": "Answer", text: "A 30-second TV commercial in Calgary costs $1,200–$2,500 with AI production vs $20,000–$50,000 with a traditional Calgary agency. Social media commercials start at $500 with AI production." } },
    { "@type": "Question", name: "How much does social media video cost in Calgary?", acceptedAnswer: { "@type": "Answer", text: "Social media videos (TikTok, Instagram Reels, YouTube Shorts) cost $400–$800 with Ruminate X in Calgary. Traditional Calgary agencies charge $3,000–$10,000 per social video." } },
  ],
};

const pricingData = [
  { type: "Social Media Video (TikTok/Reels/Shorts)", aiPrice: "$400–$700", agencyPrice: "$3,000–$10,000", savings: "~85%" },
  { type: "Product Demo / Explainer Video", aiPrice: "$500–$1,000", agencyPrice: "$5,000–$15,000", savings: "~90%" },
  { type: "Brand Film (60–90 sec)", aiPrice: "$800–$2,000", agencyPrice: "$15,000–$40,000", savings: "~92%" },
  { type: "TV Commercial (30 sec)", aiPrice: "$1,200–$2,500", agencyPrice: "$20,000–$50,000", savings: "~93%" },
  { type: "Corporate / Internal Video", aiPrice: "$600–$1,500", agencyPrice: "$8,000–$20,000", savings: "~90%" },
  { type: "Real Estate Tour", aiPrice: "$500–$900", agencyPrice: "$1,500–$5,000", savings: "~70%" },
  { type: "Restaurant Promo", aiPrice: "$400–$800", agencyPrice: "$3,000–$8,000", savings: "~87%" },
  { type: "Monthly Content Package (8 videos)", aiPrice: "$2,400–$4,000/mo", agencyPrice: "$25,000–$60,000/mo", savings: "~90%" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary Video Production Guide · March 2025</p>
          <h1 className="text-5xl font-bold mb-6 text-slate-900 leading-tight">
            How Much Does Video Production Cost in Calgary? (2025 Guide)
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            The honest answer: it depends on who you hire. Traditional Calgary video agencies charge $15,000–$60,000 per video. AI-powered production delivers the same quality for $500–$3,000. Here's exactly what you should expect to pay in 2025.
          </p>

          <div className="bg-[#ebff00] border border-yellow-400 rounded-lg p-6 mb-12">
            <p className="font-bold text-slate-900 mb-2">Quick Answer: Video Production Costs in Calgary (2025)</p>
            <ul className="text-slate-700 space-y-1 text-sm">
              <li>• Social media video: <strong>$400–$800</strong> (AI) vs $3,000–$10,000 (agency)</li>
              <li>• Brand film: <strong>$800–$2,000</strong> (AI) vs $15,000–$40,000 (agency)</li>
              <li>• TV commercial: <strong>$1,200–$2,500</strong> (AI) vs $20,000–$50,000 (agency)</li>
              <li>• Corporate video: <strong>$600–$1,500</strong> (AI) vs $8,000–$20,000 (agency)</li>
            </ul>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Video Production Pricing — Full Breakdown</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4 text-left">Video Type</th>
                    <th className="p-4 text-left">AI Production (Ruminate X)</th>
                    <th className="p-4 text-left">Traditional Calgary Agency</th>
                    <th className="p-4 text-left">Avg. Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map(({ type, aiPrice, agencyPrice, savings }) => (
                    <tr key={type} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="p-4 font-medium text-slate-700">{type}</td>
                      <td className="p-4 text-green-600 font-bold">{aiPrice}</td>
                      <td className="p-4 text-red-500">{agencyPrice}</td>
                      <td className="p-4 text-slate-500 font-medium">{savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">What Drives Video Production Costs in Calgary</h2>
            <div className="space-y-6">
              {[
                { factor: "Film crew", detail: "A full production crew in Calgary costs $3,000–$10,000 per day — director, cinematographer, gaffer, grip, sound. AI production eliminates this entirely." },
                { factor: "Equipment rental", detail: "Camera, lighting, drone, audio, dolly, and grip equipment adds $1,500–$4,000 per shoot in Calgary." },
                { factor: "Location permits and fees", detail: "Filming at Calgary locations — restaurants, offices, outdoor spaces — often requires permits ($200–$2,000) and insurance riders." },
                { factor: "Talent and casting", detail: "On-camera talent in Calgary runs $500–$3,000/day per person. Voiceover talent adds another $300–$1,500." },
                { factor: "Post-production time", detail: "Traditional Calgary agencies spend 3–6 weeks in editing, colour grading, sound mixing, and revisions — at $100–$250/hr. AI production does this in hours." },
                { factor: "Agency overhead and markup", detail: "Calgary agencies add 30–60% overhead on top of all production costs — account management, office space, creative direction, and profit margin." },
              ].map(({ factor, detail }) => (
                <div key={factor}>
                  <h3 className="font-bold text-slate-900 mb-2">{factor}</h3>
                  <p className="text-slate-600">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Is the Price Difference Worth It?</h2>
            <p className="text-lg text-slate-700 mb-6">
              The question isn't whether a $40,000 agency video looks better than a $2,000 AI video. The question is whether it looks $38,000 better — enough to justify that difference in ROI.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              For most Calgary businesses: no. A $2,000 AI brand film will outperform a $30,000 traditional production when it comes to audience engagement, conversion rates, and ROI — because the extra $28,000 could be spent on distribution, ads, and more content.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-slate-700 font-medium">The Calgary businesses winning at video marketing aren't spending more per video. They're producing more videos, faster, at lower cost — and distributing them smarter.</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">How to Get a Video for Your Calgary Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary — All Services" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production Calgary" },
                { href: "/brand-film-production-calgary", label: "Brand Film Production Calgary" },
                { href: "/commercial-video-production-calgary", label: "Commercial Video Calgary" },
                { href: "/best-video-production-company-calgary", label: "Best Video Production Company Calgary" },
                { href: "/contact", label: "Get a Free Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Get Calgary's Best Video at the Right Price</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Broadcast-quality video from $500. No hidden fees, no markup, no surprises.</p>
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
