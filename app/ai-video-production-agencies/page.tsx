import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "White Label AI Video Production for Agencies | Scale Without Hiring",
  description: "Marketing agencies use Ruminate X as their white-label AI video production partner. Deliver more for clients, faster, without expanding your team.",
};

const displayStyle = { fontFamily: "var(--font-bebas-neue), sans-serif" };

const steps = [
  { step: "01", title: "You sell video services to your client", desc: "At your rates, with your branding. You handle the client relationship. The brief is yours." },
  { step: "02", title: "You brief us", desc: "Send us the creative brief, brand assets, and script. We handle everything from here." },
  { step: "03", title: "We produce in 24–48 hours", desc: "AI-powered production delivers broadcast-quality video fast. No filming. No delays. Every frame earned." },
  { step: "04", title: "You deliver to the client", desc: "Unbranded files, white-label delivery. Your client sees your agency name, not ours." },
];

const services = [
  { service: "Brand Films", link: "/ai-brand-film-agency" },
  { service: "Product Demo Videos", link: "/solutions/professional-product-demo" },
  { service: "Social Media Content", link: "/ai-social-media-video-agency" },
  { service: "AI Commercials", link: "/ai-commercial-production" },
  { service: "Explainer Videos", link: "/guides/how-to-create-explainer-videos-with-ai" },
  { service: "Training & Onboarding Videos", link: "/use-cases/educational-training-videos" },
];

const problems = [
  "No in-house video team (too expensive to maintain)",
  "Subcontracting to video agencies eats your margin",
  "Freelancers are unreliable at scale",
  "You're leaving money on the table every month",
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Agency Partners</p>
        <h1
          style={{ ...displayStyle, fontSize: "clamp(50px, 10vw, 130px)" }}
          className="text-white leading-none mb-6"
        >
          YOU SELL IT.<br />
          <span style={{ color: "#ebff00" }}>WE BUILD IT.</span><br />
          EVERYONE WINS.
        </h1>
        <p className="text-[#888888] text-xl max-w-2xl leading-relaxed mt-8">
          Your clients need video. You don't have a production team. Ruminate X is your silent AI production partner — white-label delivery, 24–48 hour turnaround, broadcast-quality output.
        </p>
      </section>

      {/* The Problem */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-6"
          >
            THE AGENCY OPPORTUNITY
          </h2>
          <p className="text-[#888888] text-lg mb-10 max-w-2xl leading-relaxed">
            Video is the #1 content format clients want in 2026. Most marketing, PR, and creative agencies can't deliver it efficiently:
          </p>
          <ul className="space-y-4">
            {problems.map((problem) => (
              <li key={problem} className="flex gap-4 border border-[#1a1a1a] p-6 hover:border-[#ebff00]/20 transition-colors">
                <span className="text-red-500 shrink-0 font-bold">✗</span>
                <span className="text-[#888888]">{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-12"
          >
            HOW THE PARTNERSHIP<br />WORKS
          </h2>
          <div className="space-y-6">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-8 items-start border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
                <div
                  style={displayStyle}
                  className="text-[#ebff00] text-4xl leading-none shrink-0 w-16"
                >
                  {step}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-12"
          >
            WHAT YOU CAN OFFER<br />YOUR CLIENTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map(({ service, link }) => (
              <Link
                key={service}
                href={link}
                className="border border-[#1a1a1a] p-6 text-[#888888] font-medium hover:border-[#ebff00]/20 hover:text-white transition-colors flex items-center gap-3"
              >
                <span className="text-[#ebff00]">→</span>
                {service}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Margin Math */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-12"
          >
            THE MARGIN MATH
          </h2>
          <div className="border border-[#1a1a1a] p-8 max-w-2xl hover:border-[#ebff00]/20 transition-colors">
            <div className="space-y-0">
              <div className="flex justify-between items-center py-5 border-b border-[#1a1a1a]">
                <span className="text-[#888888]">What you charge the client</span>
                <span className="text-white font-bold">$3,000 per video</span>
              </div>
              <div className="flex justify-between items-center py-5 border-b border-[#1a1a1a]">
                <span className="text-[#888888]">What you pay Ruminate X</span>
                <span className="text-white font-bold">$800 per video</span>
              </div>
              <div className="flex justify-between items-center py-5">
                <span className="text-[#ebff00] font-bold uppercase tracking-wider text-sm">Your margin</span>
                <span className="text-[#ebff00] font-bold uppercase tracking-wider text-sm">$2,200 (73%)</span>
              </div>
            </div>
            <p className="text-[#666666] text-sm mt-6 leading-relaxed border-t border-[#1a1a1a] pt-6">
              Scale to 10 videos/month = $22,000/month in pure margin with no additional headcount.
            </p>
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
            BECOME A<br />
            <span style={{ color: "#ebff00" }}>RUMINATE X</span><br />
            AGENCY PARTNER.
          </h2>
          <p className="text-[#888888] text-lg mb-10 max-w-xl">
            Add video production to your service stack. We handle production, you handle the client, everyone makes money. The impossible shot — available on your brief.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors inline-block text-center">
              Partner With Us
            </Link>
            <Link href="/roi-calculator" className="border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors inline-block text-center">
              Calculate Your Margins
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
