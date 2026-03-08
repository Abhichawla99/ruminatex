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

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">The Definitive Comparison</p>
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          AI Video Agency vs Traditional Video Agency: The Real Difference
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          You need video. You're comparing options. Here's every dimension that matters — cost, speed, quality, flexibility, and scalability — laid out honestly so you can make the right call.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">The Short Answer</h2>
          <div className="bg-slate-900 text-white p-8 rounded-lg">
            <p className="text-lg leading-relaxed">
              For <strong className="text-[#ebff00]">90% of business video needs</strong> — brand films, product demos, explainers, social content, training, commercials — an AI video agency delivers equal or better quality at <strong className="text-[#ebff00]">10–20x lower cost</strong> and <strong className="text-[#ebff00]">10x faster</strong>. Traditional agencies are built for a world that no longer exists.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">The Full Breakdown</h2>

          {[
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
              traditional: { title: "2 rounds included, $$$  after", points: ["Most contracts: 2 revision rounds", "Additional rounds: $500–$2,000 each", "Script changes after filming = reshoot", "Timeline resets on major revisions"] },
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
          ].map(({ dimension, traditional, ai }) => (
            <div key={dimension} className="mb-10 border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-100 px-6 py-3">
                <h3 className="font-bold text-xl text-slate-900">{dimension}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 border-b md:border-b-0 md:border-r border-slate-200">
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Traditional Agency</p>
                  <p className="font-bold text-red-600 mb-3">{traditional.title}</p>
                  <ul className="space-y-1">
                    {traditional.points.map(p => <li key={p} className="text-slate-600 text-sm flex gap-2"><span className="text-red-400">✗</span>{p}</li>)}
                  </ul>
                </div>
                <div className="p-6 bg-green-50">
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">AI Agency (Ruminate X)</p>
                  <p className="font-bold text-green-600 mb-3">{ai.title}</p>
                  <ul className="space-y-1">
                    {ai.points.map(p => <li key={p} className="text-slate-600 text-sm flex gap-2"><span className="text-green-500">✓</span>{p}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Quality: The Real Question</h2>
          <p className="text-lg text-slate-700 mb-6">
            The biggest objection to AI production is quality. Here's the honest answer:
          </p>
          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">AI matches traditional for: Brand films, explainers, product demos, social content, training videos, commercials</h3>
              <p className="text-slate-600 text-sm">These represent 90% of business video needs. AI delivers broadcast-quality output with natural voiceovers, cinematic visuals, and professional editing.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Traditional still wins for: Documentary filmmaking, live-action narrative, celebrity talent shoots</h3>
              <p className="text-slate-600 text-sm">If you need real humans in real locations telling a real story — traditional filming is irreplaceable. But this is less than 10% of business video needs.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Real Scenarios: Which Is Better?</h2>
          <div className="space-y-4">
            {[
              { scenario: "SaaS company needs a product demo video", winner: "AI", reason: "24-hour turnaround, update when features change, unlimited revisions" },
              { scenario: "E-commerce brand needs 50 product videos", winner: "AI", reason: "Traditional would cost $500K+. AI does this for $5K–$15K" },
              { scenario: "Enterprise company needs annual brand film", winner: "AI", reason: "Same cinematic quality, 90% less cost, delivered in days not months" },
              { scenario: "Fashion brand needs editorial content", winner: "AI", reason: "Ruminate X specializes in editorial-grade AI fashion content" },
              { scenario: "Netflix-style documentary series", winner: "Traditional", reason: "Needs real filming, real interviews, real world" },
              { scenario: "Social media content at scale (50 videos/month)", winner: "AI", reason: "Traditional can't sustainably produce this volume — AI was built for it" },
              { scenario: "TV commercial for local market", winner: "AI", reason: "Same broadcast quality, 95% cheaper, runs on any TV channel" },
            ].map(({ scenario, winner, reason }) => (
              <div key={scenario} className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg">
                <span className={`shrink-0 font-bold text-xs px-2 py-1 rounded ${winner === "AI" ? "bg-green-100 text-green-700" : "bg-purple-100 text-purple-700"}`}>{winner}</span>
                <div>
                  <p className="font-medium text-slate-900">{scenario}</p>
                  <p className="text-slate-600 text-sm">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/guides/why-traditional-video-agencies-are-expensive", label: "Why Traditional Agencies Are So Expensive" },
              { href: "/solutions/cut-video-production-costs", label: "Cut Video Costs by 80%" },
              { href: "/tools/ai-vs-traditional-video", label: "AI vs Traditional: Cost & Speed Data" },
              { href: "/roi-calculator", label: "ROI Calculator" },
              { href: "/solutions/fast-explainer-videos", label: "48-Hour Video Production" },
              { href: "/comparison/freelance-vs-ai-video", label: "Freelancer vs AI Production" },
              { href: "/faq-ai-video-production", label: "Common Questions Answered" },
              { href: "/contact", label: "Start Your Project" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-slate-700 font-medium">
                → {label}
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Make the Switch to AI Production</h2>
          <p className="text-slate-300 mb-8">Join brands in New York, London, Dubai, and beyond who've moved to AI video production and never looked back.</p>
          <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">
            Get Started
          </Link>
        </section>
      </div>
    </main>
  );
}
