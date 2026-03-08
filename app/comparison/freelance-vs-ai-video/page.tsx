import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hire a Freelance Video Editor vs AI Production: Which Is Better?",
  description: "Compare freelance video editors vs AI video production on cost, speed, quality, and scalability. The data-driven answer for solopreneurs and SMBs.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">Freelancer vs AI</p>
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          Hire a Freelance Video Editor vs AI Production: Which Is Better?
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          You've budgeted $500–$2,000 for a video. Fiverr, Upwork, or AI production? Here's the honest breakdown for solopreneurs, startups, and small businesses.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Cost Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 text-left">Factor</th>
                  <th className="p-4 text-left">Fiverr/Upwork Freelancer</th>
                  <th className="p-4 text-left">AI Production</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cost per video", "$200–$2,000", "$200–$800"],
                  ["Revisions included", "2–3 (then $$)", "Unlimited, free"],
                  ["Turnaround", "5–14 days", "24–48 hours"],
                  ["Availability", "Timezone-dependent", "Always on"],
                  ["Consistency", "Varies by freelancer", "Always consistent"],
                  ["Scale to 10 videos", "$2,000–$20,000", "Same monthly fee"],
                  ["Quality control", "Depends on individual", "Standardized process"],
                ].map(([factor, freelance, ai]) => (
                  <tr key={factor} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4 font-medium">{factor}</td>
                    <td className="p-4 text-slate-600">{freelance}</td>
                    <td className="p-4 text-green-600 font-medium">{ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">The Hidden Freelancer Problems</h2>
          <div className="space-y-4">
            {[
              { problem: "Freelancer ghosting", desc: "You've paid a deposit, the deadline is tomorrow, and they've gone silent. This happens more than any platform admits." },
              { problem: "Scope creep", desc: "The $300 quote turns into $800 when you ask for a third revision or want to change the script mid-project." },
              { problem: "Inconsistent quality", desc: "Your first video looks great. The second one looks like a different person made it. Freelancers aren't robots." },
              { problem: "You still write the script", desc: "Most freelance editors edit video — they don't create your messaging, script, or strategy. You're still doing the heavy lifting." },
              { problem: "Can't scale", desc: "Need 10 videos this month? You either pay 10x more or wait months. Freelancers have capacity limits." },
            ].map(({ problem, desc }) => (
              <div key={problem} className="border-l-4 border-orange-400 pl-6 py-3 bg-orange-50 rounded-r-lg">
                <h3 className="font-bold text-slate-900 mb-1">{problem}</h3>
                <p className="text-slate-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">When Freelancers Are the Right Call</h2>
          <ul className="space-y-3 text-lg text-slate-700">
            <li>✓ You need highly specialized skills (motion graphics, VFX, live-action editing)</li>
            <li>✓ You already have raw footage that needs editing</li>
            <li>✓ You need a one-time creative project with unique constraints</li>
          </ul>
          <p className="text-lg text-slate-700 mt-6 bg-blue-50 p-4 rounded">
            For everything repeatable — brand content, product videos, social media, explainers — <strong>AI production costs less, delivers faster, and scales without limit.</strong>
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Explore Your Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/solutions/cut-video-production-costs", label: "Cut Production Costs 80%" },
              { href: "/solutions/fast-explainer-videos", label: "Get Video in 48 Hours" },
              { href: "/roi-calculator", label: "Calculate Your Savings" },
              { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI Agency vs Traditional Agency" },
              { href: "/guides/why-traditional-video-agencies-are-expensive", label: "Why Agencies Overcharge" },
              { href: "/contact", label: "Start a Project" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-slate-700 font-medium">
                → {label}
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Never Deal with Freelancer Flakiness Again</h2>
          <p className="text-slate-300 mb-8">AI production delivers on time, every time. No deposits, no delays, no disappearing acts.</p>
          <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">
            Get Started Today
          </Link>
        </section>
      </div>
    </main>
  );
}
