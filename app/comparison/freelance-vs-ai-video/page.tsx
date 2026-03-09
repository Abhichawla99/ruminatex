import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hire a Freelance Video Editor vs AI Production: Which Is Better?",
  description: "Compare freelance video editors vs AI video production on cost, speed, quality, and scalability. The data-driven answer for solopreneurs and SMBs.",
};

const displayStyle = { fontFamily: "var(--font-bebas-neue), sans-serif" };

const tableRows = [
  ["Cost per video", "$200–$2,000", "$200–$800"],
  ["Revisions included", "2–3 (then $$)", "Unlimited, free"],
  ["Turnaround", "5–14 days", "24–48 hours"],
  ["Availability", "Timezone-dependent", "Always on"],
  ["Consistency", "Varies by freelancer", "Always consistent"],
  ["Scale to 10 videos", "$2,000–$20,000", "Same monthly fee"],
  ["Quality control", "Depends on individual", "Standardized process"],
];

const problems = [
  { problem: "Freelancer ghosting", desc: "You've paid a deposit, the deadline is tomorrow, and they've gone silent. This happens more than any platform admits." },
  { problem: "Scope creep", desc: "The $300 quote turns into $800 when you ask for a third revision or want to change the script mid-project." },
  { problem: "Inconsistent quality", desc: "Your first video looks great. The second one looks like a different person made it. Freelancers aren't robots." },
  { problem: "You still write the script", desc: "Most freelance editors edit video — they don't create your messaging, script, or strategy. You're still doing the heavy lifting." },
  { problem: "Can't scale", desc: "Need 10 videos this month? You either pay 10x more or wait months. Freelancers have capacity limits." },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Freelancer vs AI</p>
        <h1
          style={{ ...displayStyle, fontSize: "clamp(50px, 10vw, 130px)" }}
          className="text-white leading-none mb-6"
        >
          FREELANCERS<br />
          <span style={{ color: "#ebff00" }}>FLAKE.</span><br />
          WE DON'T.
        </h1>
        <p className="text-[#888888] text-xl max-w-2xl leading-relaxed mt-8">
          You've budgeted $500–$2,000 for a video. Fiverr, Upwork, or AI production? Here's the honest breakdown for solopreneurs, startups, and small businesses.
        </p>
      </section>

      {/* Cost Comparison */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-12"
          >
            COST COMPARISON
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#1a1a1a]">
                  <th className="p-5 text-left text-[#ebff00] text-xs uppercase tracking-[0.3em] font-normal">Factor</th>
                  <th className="p-5 text-left text-[#888888] text-xs uppercase tracking-[0.3em] font-normal">Fiverr / Upwork Freelancer</th>
                  <th className="p-5 text-left text-[#ebff00] text-xs uppercase tracking-[0.3em] font-normal">AI Production</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map(([factor, freelance, ai]) => (
                  <tr key={factor} className="border-b border-[#1a1a1a] hover:border-[#ebff00]/20 transition-colors">
                    <td className="p-5 text-white font-medium">{factor}</td>
                    <td className="p-5 text-[#666666]">{freelance}</td>
                    <td className="p-5 text-[#ebff00] font-medium">{ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hidden Problems */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-12"
          >
            THE HIDDEN<br />FREELANCER PROBLEMS
          </h2>
          <div className="space-y-4">
            {problems.map(({ problem, desc }) => (
              <div key={problem} className="border-l-2 border-[#ebff00] pl-8 py-4 border border-[#1a1a1a] border-l-[#ebff00] hover:border-[#ebff00]/20 transition-colors" style={{ borderLeftColor: "#ebff00", borderLeftWidth: "2px" }}>
                <h3 className="text-white font-bold mb-2">{problem}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When Freelancers Work */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-10"
          >
            WHEN FREELANCERS<br />ARE THE RIGHT CALL
          </h2>
          <ul className="space-y-4 mb-10">
            {[
              "You need highly specialized skills (motion graphics, VFX, live-action editing)",
              "You already have raw footage that needs editing",
              "You need a one-time creative project with unique constraints",
            ].map((item) => (
              <li key={item} className="flex gap-4 text-[#888888]">
                <span className="text-[#ebff00] shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
            <p className="text-[#888888] text-lg leading-relaxed">
              For everything repeatable — brand content, product videos, social media, explainers — <strong className="text-white">AI production costs less, delivers faster, and scales without limit.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-10"
          >
            EXPLORE YOUR OPTIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/solutions/cut-video-production-costs", label: "Cut Production Costs 80%" },
              { href: "/solutions/fast-explainer-videos", label: "Get Video in 48 Hours" },
              { href: "/roi-calculator", label: "Calculate Your Savings" },
              { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI Agency vs Traditional Agency" },
              { href: "/guides/why-traditional-video-agencies-are-expensive", label: "Why Agencies Overcharge" },
              { href: "/contact", label: "Start a Project" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="border border-[#1a1a1a] p-5 text-[#888888] font-medium hover:border-[#ebff00]/20 hover:text-white transition-colors flex items-center gap-3"
              >
                <span className="text-[#ebff00]">→</span>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(40px, 7vw, 90px)" }}
            className="text-white leading-none mb-6"
          >
            NEVER DEAL WITH<br />
            <span style={{ color: "#ebff00" }}>FLAKINESS AGAIN.</span>
          </h2>
          <p className="text-[#888888] text-lg mb-10 max-w-xl">
            AI production delivers on time, every time. No deposits, no delays, no disappearing acts. Story first. Always.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors inline-block text-center">
              Get Started Today
            </Link>
            <Link href="/roi-calculator" className="border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors inline-block text-center">
              See Your Savings
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
