import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Video Production UK: Cinematic Brand Content for British Brands",
  description: "AI video production for UK brands. Serving London, Manchester, Birmingham, Edinburgh and beyond with broadcast-quality video at 80% less than UK agency rates.",
};

const displayStyle = { fontFamily: "var(--font-bebas-neue), sans-serif" };

const cities = ["London", "Manchester", "Birmingham", "Edinburgh", "Glasgow", "Leeds", "Bristol", "Liverpool", "Sheffield", "Cardiff", "Belfast", "Newcastle"];

const industries = [
  { industry: "UK Financial Services & Fintech", href: "/ai-video-production-finance" },
  { industry: "British Fashion & Luxury Brands", href: "/ai-video-production-fashion" },
  { industry: "UK SaaS & Technology Companies", href: "/ai-video-production-saas" },
  { industry: "UK Retail & E-Commerce", href: "/ai-video-production-ecommerce" },
  { industry: "UK Healthcare & Life Sciences", href: "/ai-video-production-healthcare" },
  { industry: "UK Hospitality & Tourism", href: "/ai-video-production-hospitality" },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">United Kingdom</p>
        <h1
          style={{ ...displayStyle, fontSize: "clamp(50px, 10vw, 130px)" }}
          className="text-white leading-none mb-6"
        >
          BRITISH QUALITY.<br />
          <span style={{ color: "#ebff00" }}>AI EFFICIENCY.</span>
        </h1>
        <p className="text-[#888888] text-xl max-w-2xl leading-relaxed mt-8">
          UK video production agencies charge premium London rates. Ruminate X delivers the same cinematic quality — AI-powered, remote-first, 80% less cost — for brands across England, Scotland, Wales, and Northern Ireland.
        </p>
      </section>

      {/* Stats */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-6"
          >
            WHY UK BRANDS ARE<br />SWITCHING TO AI
          </h2>
          <p className="text-[#888888] text-lg mb-12 max-w-2xl leading-relaxed">
            London's production industry is world-class — and priced accordingly. A 2-minute brand film from a London agency runs £8,000–£40,000. AI production delivers the same for £800–£3,000.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "£7K–£37K", label: "Savings per video vs London agency" },
              { stat: "48hrs", label: "Delivery anywhere in the UK" },
              { stat: "GMT", label: "We work your timezone" },
            ].map(({ stat, label }) => (
              <div key={label} className="border border-[#1a1a1a] p-8 text-center hover:border-[#ebff00]/20 transition-colors">
                <p
                  style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 56px)" }}
                  className="text-[#ebff00] leading-none mb-3"
                >
                  {stat}
                </p>
                <p className="text-[#888888] text-sm uppercase tracking-[0.2em]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-12"
          >
            UK CITIES WE SERVE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {cities.map(city => (
              <Link
                key={city}
                href={city === "London" ? "/london" : "/contact"}
                className="border border-[#1a1a1a] p-5 text-center hover:border-[#ebff00]/20 transition-colors group"
              >
                <p className="text-[#888888] font-medium group-hover:text-[#ebff00] transition-colors">{city}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-12"
          >
            UK INDUSTRIES<br />WE SPECIALISE IN
          </h2>
          <div className="space-y-3">
            {industries.map(({ industry, href }) => (
              <Link
                key={industry}
                href={href}
                className="flex items-center justify-between border border-[#1a1a1a] p-6 hover:border-[#ebff00]/20 group transition-colors"
              >
                <span className="text-[#888888] font-medium group-hover:text-white transition-colors">{industry}</span>
                <span className="text-[#ebff00]">→</span>
              </Link>
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
              { href: "/london", label: "AI Video Production London" },
              { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI vs Traditional Agency" },
              { href: "/guides/why-traditional-video-agencies-are-expensive", label: "Why UK Agencies Overcharge" },
              { href: "/roi-calculator", label: "Calculate UK Savings" },
              { href: "/markets/ai-video-production-australia", label: "AI Video Production Australia" },
              { href: "/contact", label: "Start a UK Project" },
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
            BRITISH QUALITY.<br />
            <span style={{ color: "#ebff00" }}>AI EFFICIENCY.</span>
          </h2>
          <p className="text-[#888888] text-lg mb-10 max-w-xl">
            Cinematic brand content for UK businesses that refuse to pay London agency rates. Every frame earned.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors inline-block text-center">
              Start a UK Project
            </Link>
            <Link href="/roi-calculator" className="border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors inline-block text-center">
              Calculate UK Savings
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
