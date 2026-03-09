import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Video Production Australia: Broadcast-Quality for Aussie Brands",
  description: "AI video production for Australian brands. Serving Sydney, Melbourne, Brisbane, Perth and beyond. 80% less than Australian agency rates, delivered in 48 hours.",
};

const displayStyle = { fontFamily: "var(--font-bebas-neue), sans-serif" };

const cities = ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra", "Gold Coast", "Newcastle", "Hobart", "Darwin"];

const industries = [
  { industry: "Australian Mining & Resources", href: "/ai-commercial-production" },
  { industry: "Australian Tourism & Hospitality", href: "/ai-video-production-hospitality" },
  { industry: "Australian Retail & E-Commerce", href: "/ai-video-production-ecommerce" },
  { industry: "Australian Financial Services", href: "/ai-video-production-finance" },
  { industry: "Australian Technology & SaaS", href: "/ai-video-production-saas" },
  { industry: "Australian Property & Real Estate", href: "/ai-video-production-real-estate" },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Australia</p>
        <h1
          style={{ ...displayStyle, fontSize: "clamp(50px, 10vw, 130px)" }}
          className="text-white leading-none mb-6"
        >
          AUSTRALIAN<br />
          AMBITION.<br />
          <span style={{ color: "#ebff00" }}>AI PRODUCTION.</span>
        </h1>
        <p className="text-[#888888] text-xl max-w-2xl leading-relaxed mt-8">
          Australian brands deserve world-class video content without Sydney agency prices. Ruminate X delivers broadcast-quality AI video to every Australian city — in 48 hours, for 80% less.
        </p>
      </section>

      {/* Stats */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-6"
          >
            THE AUSTRALIAN<br />VIDEO PRODUCTION PROBLEM
          </h2>
          <p className="text-[#888888] text-lg mb-12 max-w-2xl leading-relaxed">
            Australia's video production market is small and expensive. Sydney and Melbourne agencies charge AU$15,000–$50,000 per video — more than their US or UK counterparts relative to market size. AI changes everything.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "AU$13K+", label: "Saved per video vs Sydney agency" },
              { stat: "48hrs", label: "Delivery to any Australian city" },
              { stat: "AEST", label: "We adapt to your timezone" },
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
            AUSTRALIAN CITIES<br />WE SERVE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {cities.map(city => (
              <Link
                key={city}
                href={city === "Sydney" ? "/sydney" : "/contact"}
                className="border border-[#1a1a1a] p-5 text-center hover:border-[#ebff00]/20 hover:text-[#ebff00] transition-colors"
              >
                <p className="text-[#888888] font-medium hover:text-[#ebff00] transition-colors">{city}</p>
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
            AUSTRALIAN INDUSTRIES<br />WE SERVE
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
              { href: "/sydney", label: "AI Video Production Sydney" },
              { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI vs Traditional Agency" },
              { href: "/solutions/cut-video-production-costs", label: "See Cost Savings" },
              { href: "/roi-calculator", label: "Calculate AU Savings" },
              { href: "/markets/ai-video-production-uk", label: "AI Video Production UK" },
              { href: "/contact", label: "Start an Australian Project" },
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
            AUSTRALIAN AMBITION.<br />
            <span style={{ color: "#ebff00" }}>AI PRODUCTION.</span>
          </h2>
          <p className="text-[#888888] text-lg mb-10 max-w-xl">
            Cinematic video content for Australian brands that are ready to punch above their weight globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors inline-block text-center">
              Start an Australian Project
            </Link>
            <Link href="/roi-calculator" className="border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors inline-block text-center">
              Calculate AU Savings
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
