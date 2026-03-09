import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Video Agency vs Traditional Video Agency: The Real Difference",
  description: "Honest comparison of AI video agencies vs traditional production companies. Cost, speed, quality, scalability — every dimension covered.",
  openGraph: {
    title: "AI Video Agency vs Traditional Agency | Ruminate X",
    description: "Every difference between AI and traditional video agencies — cost, speed, quality, and flexibility.",
  },
};

const displayStyle = { fontFamily: "var(--font-bebas-neue), sans-serif" };

const comparisons = [
  {
    dimension: "Cost",
    traditional: { title: "$10,000–$100,000 per video", points: ["Crew day rates: $1,500–$10,000", "Equipment rental: $1,000–$5,000/day", "Location/studio fees", "Post-production: $2,000–$8,000", "Agency markup: 20–40%"] },
    ai: { title: "$500–$3,000 per video", points: ["No crew costs", "No equipment rental", "No studio needed", "Post-production included", "Flat subscription model"] },
  },
  {
    dimension: "Speed",
    traditional: { title: "4–8 weeks", points: ["Week 1–2: Pre-production planning", "Week 3–4: Shoot scheduling", "Week 5–6: Filming", "Week 7–8: Post-production", "Revisions add 1–2 more weeks"] },
    ai: { title: "24–48 hours", points: ["Hour 1–6: Brief & script", "Hour 6–12: AI generation", "Hour 12–24: Customization", "Hour 24–48: Final review", "Revisions done in hours"] },
  },
  {
    dimension: "Revisions",
    traditional: { title: "2 rounds included, $$$ after", points: ["Most contracts: 2 revision rounds", "Additional rounds: $500–$2,000 each", "Script changes after filming = reshoot", "Timeline resets on major revisions"] },
    ai: { title: "Unlimited, always free", points: ["Change the script anytime", "Update messaging instantly", "No extra cost, ever", "New version in 12–24 hours"] },
  },
  {
    dimension: "Scalability",
    traditional: { title: "Expensive to scale", points: ["Each video is a new project", "Costs don't decrease at volume", "Production coordination multiplies", "Hard to maintain consistency"] },
    ai: { title: "Scales infinitely", points: ["Same cost per video at any volume", "Create 1 or 1,000 videos", "Consistent brand voice always", "No coordination overhead"] },
  },
  {
    dimension: "Languages",
    traditional: { title: "1 language (expensive to add)", points: ["Hire voice actors per language", "$500–$2,000 per language", "2–4 weeks per language added", "Studio time for each recording"] },
    ai: { title: "140+ languages, same cost", points: ["All languages at no extra charge", "Generated in minutes", "Same quality across all languages", "Regional accents supported"] },
  },
];

const scenarios = [
  { scenario: "SaaS company needs a product demo video", winner: "AI", reason: "24-hour turnaround, update when features change, unlimited revisions" },
  { scenario: "E-commerce brand needs 50 product videos", winner: "AI", reason: "Traditional would cost $500K+. AI does this for $5K–$15K" },
  { scenario: "Enterprise company needs annual brand film", winner: "AI", reason: "Same cinematic quality, 90% less cost, delivered in days not months" },
  { scenario: "Fashion brand needs editorial content", winner: "AI", reason: "Ruminate X specializes in editorial-grade AI fashion content" },
  { scenario: "Netflix-style documentary series", winner: "Traditional", reason: "Needs real filming, real interviews, real world" },
  { scenario: "Social media content at scale (50 videos/month)", winner: "AI", reason: "Traditional can't sustainably produce this volume — AI was built for it" },
  { scenario: "TV commercial for local market", winner: "AI", reason: "Same broadcast quality, 95% cheaper, runs on any TV channel" },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Definitive Comparison</p>
        <h1
          style={{ ...displayStyle, fontSize: "clamp(50px, 10vw, 130px)" }}
          className="text-white leading-none mb-6"
        >
          WE MAKE FILMS.<br />
          <span style={{ color: "#ebff00" }}>THEY MAKE</span><br />
          EXCUSES.
        </h1>
        <p className="text-[#888888] text-xl max-w-2xl leading-relaxed mt-8">
          You need video. You're comparing options. Here's every dimension that matters — cost, speed, quality, flexibility, and scalability — laid out honestly so you can make the right call.
        </p>
      </section>

      {/* Short Answer */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-10"
          >
            THE SHORT ANSWER
          </h2>
          <div className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
            <p className="text-[#888888] text-lg leading-relaxed">
              For <strong className="text-[#ebff00]">90% of business video needs</strong> — brand films, product demos, explainers, social content, training, commercials — an AI video agency delivers equal or better quality at <strong className="text-[#ebff00]">10–20x lower cost</strong> and <strong className="text-[#ebff00]">10x faster</strong>. Traditional agencies are built for a world that no longer exists.
            </p>
          </div>
        </div>
      </section>

      {/* Full Breakdown */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-12"
          >
            THE FULL BREAKDOWN
          </h2>
          <div className="space-y-6">
            {comparisons.map(({ dimension, traditional, ai }) => (
              <div key={dimension} className="border border-[#1a1a1a] overflow-hidden hover:border-[#ebff00]/20 transition-colors">
                <div className="px-8 py-4 border-b border-[#1a1a1a]">
                  <h3
                    style={displayStyle}
                    className="text-white text-2xl tracking-wider"
                  >
                    {dimension.toUpperCase()}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 border-b md:border-b-0 md:border-r border-[#1a1a1a]">
                    <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-3">Traditional Agency</p>
                    <p className="text-white font-bold mb-4">{traditional.title}</p>
                    <ul className="space-y-2">
                      {traditional.points.map(p => (
                        <li key={p} className="text-[#666666] text-sm flex gap-3">
                          <span className="text-red-500 shrink-0">✗</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8">
                    <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-3">AI Agency (Ruminate X)</p>
                    <p className="text-[#ebff00] font-bold mb-4">{ai.title}</p>
                    <ul className="space-y-2">
                      {ai.points.map(p => (
                        <li key={p} className="text-[#888888] text-sm flex gap-3">
                          <span className="text-[#ebff00] shrink-0">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-10"
          >
            QUALITY: THE REAL QUESTION
          </h2>
          <p className="text-[#888888] text-lg mb-10 max-w-2xl">
            The biggest objection to AI production is quality. Here's the honest answer:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">AI Matches Traditional For</p>
              <h3 className="text-white font-bold mb-3">Brand films, explainers, product demos, social content, training videos, commercials</h3>
              <p className="text-[#666666] text-sm leading-relaxed">These represent 90% of business video needs. AI delivers broadcast-quality output with natural voiceovers, cinematic visuals, and professional editing.</p>
            </div>
            <div className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <p className="text-[#888888] text-xs uppercase tracking-[0.3em] mb-4">Traditional Still Wins For</p>
              <h3 className="text-white font-bold mb-3">Documentary filmmaking, live-action narrative, celebrity talent shoots</h3>
              <p className="text-[#666666] text-sm leading-relaxed">If you need real humans in real locations telling a real story — traditional filming is irreplaceable. But this is less than 10% of business video needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-12"
          >
            REAL SCENARIOS:<br />WHICH IS BETTER?
          </h2>
          <div className="space-y-3">
            {scenarios.map(({ scenario, winner, reason }) => (
              <div key={scenario} className="flex items-start gap-6 border border-[#1a1a1a] p-6 hover:border-[#ebff00]/20 transition-colors">
                <span className={`shrink-0 font-bold text-xs px-3 py-1 uppercase tracking-wider ${winner === "AI" ? "bg-[#ebff00] text-[#080808]" : "border border-[#888888] text-[#888888]"}`}>
                  {winner}
                </span>
                <div>
                  <p className="text-white font-medium mb-1">{scenario}</p>
                  <p className="text-[#666666] text-sm">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-10"
          >
            EXPLORE MORE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/solutions/cut-video-production-costs", label: "Cut Video Costs by 80%" },
              { href: "/roi-calculator", label: "ROI Calculator" },
              { href: "/solutions/fast-explainer-videos", label: "48-Hour Video Production" },
              { href: "/comparison/freelance-vs-ai-video", label: "Freelancer vs AI Production" },
              { href: "/faq-ai-video-production", label: "Common Questions Answered" },
              { href: "/contact", label: "Start Your Project" },
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
            MAKE THE SWITCH.<br />
            <span style={{ color: "#ebff00" }}>NEVER LOOK BACK.</span>
          </h2>
          <p className="text-[#888888] text-lg mb-10 max-w-xl">
            Join brands in New York, London, Dubai, and beyond who've moved to AI video production and never looked back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors inline-block text-center">
              Get Started
            </Link>
            <Link href="/roi-calculator" className="border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors inline-block text-center">
              Calculate Savings
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
