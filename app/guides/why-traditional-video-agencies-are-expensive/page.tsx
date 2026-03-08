import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Traditional Video Agencies Are So Expensive (And What To Do Instead)",
  description: "The real reason video agencies charge $10K–$100K per video — and how AI production delivers the same quality for 90% less. A full cost breakdown.",
  openGraph: {
    title: "Why Traditional Video Agencies Are So Expensive | Ruminate X",
    description: "Full breakdown of traditional agency costs and how AI beats them every time.",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">The Honest Guide</p>
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          Why Traditional Video Agencies Are So Expensive (And What To Do Instead)
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          A video agency quoted you $15,000 for a 2-minute brand video. Here's every line item that justifies their number — and why AI production eliminates nearly all of it.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">The Anatomy of a $15,000 Video Production Bill</h2>
          <p className="text-lg text-slate-700 mb-8">Traditional agencies aren't necessarily ripping you off. Their costs are real. Here's where your money actually goes:</p>

          <div className="space-y-6">
            {[
              { item: "Creative Director & Strategy", cost: "$2,000–$4,000", why: "Concept development, storyboarding, brand alignment sessions. Usually 3–5 meetings before a frame is shot." },
              { item: "Director of Photography", cost: "$1,500–$3,500/day", why: "Cinema-grade cinematographer. Even a 1-day shoot often requires 2–3 days of prep and teardown." },
              { item: "Camera & Equipment Rental", cost: "$800–$3,000/day", why: "RED or ARRI cinema camera, lenses, tripods, gimbals, monitors. Add lighting rigs for another $500–$1,500." },
              { item: "Studio or Location Rental", cost: "$500–$3,000/day", why: "A proper studio in NYC or LA runs $1,500–$5,000/day. Location permits add to this." },
              { item: "Crew (Gaffer, PA, Sound)", cost: "$1,000–$3,000/day", why: "Professional shoots have 5–10 people on set. Each costs money. Day rates, overtime, meals." },
              { item: "Talent & Casting", cost: "$500–$5,000", why: "Actors, presenters, or models. Union talent (SAG-AFTRA) can run $1,000+ per day plus residuals." },
              { item: "Post-Production & Editing", cost: "$2,000–$8,000", why: "Editor at $75–$150/hour. A 2-minute video can take 20–40 hours of editing alone." },
              { item: "Color Grading", cost: "$500–$2,000", why: "Separate colorist to make the footage look cinematic. Not included in editing." },
              { item: "Sound Design & Music Licensing", cost: "$300–$2,000", why: "Foley, sound mixing, and royalty-free or licensed music tracks." },
              { item: "Agency Markup & Overhead", cost: "20–40% on top", why: "Every agency charges a markup on subcontractors plus their own overhead (office rent, software, staff)." },
            ].map(({ item, cost, why }) => (
              <div key={item} className="border-l-4 border-red-400 pl-6 py-2">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h3 className="font-bold text-slate-900">{item}</h3>
                  <span className="text-red-600 font-bold whitespace-nowrap">{cost}</span>
                </div>
                <p className="text-slate-600 text-sm mt-1">{why}</p>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 p-6 rounded-lg mt-8">
            <p className="text-2xl font-bold text-red-700">Total for one 2-minute video: $10,000–$35,000+</p>
            <p className="text-slate-600 mt-2">And that's before you ask for revisions, which most agencies charge extra for.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">The Hidden Costs Nobody Talks About</h2>
          <div className="space-y-4 text-lg text-slate-700">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2 text-slate-900">Time is money — and agencies take 4–6 weeks</h3>
              <p>While your competitor launches their product with a video next week, you're waiting on a production schedule that doesn't start for three weeks. Every week without video content is lost revenue.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2 text-slate-900">Revisions cost a fortune</h3>
              <p>Most agencies include 2 rounds of revisions. Need a third? That's $500–$2,000 more. Want to change the script after filming? They're reshooting at full day rates.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2 text-slate-900">You can't scale it</h3>
              <p>If you need 12 videos this year, you're looking at $120,000–$420,000. Most businesses can't sustain that. So they produce 1–2 videos a year and their content strategy suffers.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2 text-slate-900">The video is outdated in 6 months</h3>
              <p>Product changed? New messaging? The $15K video is now wrong and you're starting from scratch. Traditional production doesn't support rapid iteration.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">What AI Production Eliminates</h2>
          <p className="text-lg text-slate-700 mb-6">AI video production doesn't cut corners — it cuts the costs that don't add value to the final product:</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-4 text-left">Cost Item</th>
                  <th className="p-4 text-left">Traditional</th>
                  <th className="p-4 text-left">AI Production</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Film Crew", "$5,000–$10,000", "$0"],
                  ["Equipment Rental", "$1,500–$4,000", "$0"],
                  ["Studio/Location", "$500–$3,000", "$0"],
                  ["Talent & Casting", "$500–$5,000", "$0"],
                  ["Post-Production", "$2,000–$8,000", "Included"],
                  ["Voiceover", "$500–$2,000", "Included (140+ languages)"],
                  ["Revisions", "$500–$2,000 each", "Free & unlimited"],
                  ["Total per video", "$10,000–$35,000", "$500–$2,000"],
                  ["Turnaround", "4–6 weeks", "24–48 hours"],
                ].map(([item, trad, ai]) => (
                  <tr key={item} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4 font-medium">{item}</td>
                    <td className="p-4 text-red-600">{trad}</td>
                    <td className="p-4 text-green-600 font-bold">{ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">When Traditional Agencies Still Make Sense</h2>
          <p className="text-lg text-slate-700 mb-4">We'll be honest — there are cases where traditional production is the right call:</p>
          <ul className="space-y-3 text-lg text-slate-700">
            <li>✓ You need live-action footage with real actors in real locations</li>
            <li>✓ You're producing a Super Bowl commercial with a $5M media buy</li>
            <li>✓ You need a documentary or narrative film</li>
            <li>✓ Budget is truly unlimited and timelines don't matter</li>
          </ul>
          <p className="text-lg text-slate-700 mt-6 bg-blue-50 p-4 rounded">
            For everything else — brand films, explainers, product demos, social content, training videos, commercials — <strong>AI production matches or beats traditional quality at a fraction of the cost.</strong>
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/solutions/cut-video-production-costs", label: "Cut Production Costs by 80%" },
              { href: "/tools/ai-vs-traditional-video", label: "Full AI vs Traditional Comparison" },
              { href: "/roi-calculator", label: "Calculate Your Exact Savings" },
              { href: "/solutions/fast-explainer-videos", label: "48-Hour Video Production" },
              { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI Agency vs Traditional Agency" },
              { href: "/contact", label: "Get a Quote" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-slate-700 font-medium">
                → {label}
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-4">Stop Overpaying for Video Production</h2>
          <p className="text-slate-300 mb-8">Get broadcast-quality brand films, commercials, and product videos at 90% less than traditional agency rates.</p>
          <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">
            Start a Project
          </Link>
        </section>
      </div>
    </main>
  );
}
