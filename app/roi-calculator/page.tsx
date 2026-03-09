import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Video Production ROI Calculator: See Your Potential Savings",
  description: "Interactive calculator to see your potential savings with AI video production. Input your costs and see savings instantly.",
};

const displayStyle = { fontFamily: "var(--font-bebas-neue), sans-serif" };

const customerSavings = [
  { type: "SaaS Company", savings: "$230K", detail: "Annual savings on 24 product videos" },
  { type: "Marketing Agency", savings: "$420K", detail: "Annual savings on client video production" },
  { type: "Ecommerce Brand", savings: "$180K", detail: "Annual savings on product video catalog" },
];

const benefits = [
  { label: "Faster launches", desc: "Get to market 10x faster — competitive advantage that compounds" },
  { label: "Unlimited revisions", desc: "Iterate and optimize without extra cost. The cut is never final until you say so" },
  { label: "Global reach", desc: "Create 140+ language versions at the same cost. One brief, every market" },
  { label: "Better conversions", desc: "More videos → more engagement → more sales. The math is simple" },
  { label: "Consistent branding", desc: "Every video looks perfect and on-brand. No rogue freelancers, no off-brief edits" },
  { label: "Scalability", desc: "Create 1 or 1,000 videos with the same effort. AI was built for scale" },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Every Frame, Priced Right</p>
        <h1
          style={{ ...displayStyle, fontSize: "clamp(50px, 10vw, 130px)" }}
          className="text-white leading-none mb-6"
        >
          SEE WHAT<br />YOU'RE<br />
          <span style={{ color: "#ebff00" }}>LEAVING</span><br />
          ON THE TABLE.
        </h1>
        <p className="text-[#888888] text-xl max-w-2xl leading-relaxed mt-8">
          Calculate your potential savings by switching to AI video production. Input your current video costs and see instant ROI projections.
        </p>
      </section>

      {/* Calculator */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-12"
          >
            HOW MUCH CAN YOU SAVE?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Inputs */}
            <div className="space-y-8">
              <div>
                <label className="block text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">
                  Videos produced per year
                </label>
                <input
                  type="number"
                  defaultValue="12"
                  placeholder="e.g., 12"
                  className="w-full bg-transparent border border-[#1a1a1a] text-white px-6 py-4 text-2xl focus:border-[#ebff00] outline-none transition-colors"
                  style={displayStyle}
                />
              </div>

              <div>
                <label className="block text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">
                  Average cost per video (traditional agency)
                </label>
                <div className="relative">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[#888888] text-2xl" style={displayStyle}>$</span>
                  <input
                    type="number"
                    defaultValue="5000"
                    placeholder="e.g., 5000"
                    className="w-full bg-transparent border border-[#1a1a1a] text-white pl-12 pr-6 py-4 text-2xl focus:border-[#ebff00] outline-none transition-colors"
                    style={displayStyle}
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className="border border-[#1a1a1a] p-6 hover:border-[#ebff00]/20 transition-colors">
                <p className="text-[#888888] text-xs uppercase tracking-[0.3em] mb-2">Current Annual Video Budget</p>
                <p style={{ ...displayStyle, fontSize: "clamp(32px, 5vw, 56px)" }} className="text-white leading-none">
                  $60,000
                </p>
              </div>

              <div className="border border-[#1a1a1a] p-6 hover:border-[#ebff00]/20 transition-colors">
                <p className="text-[#888888] text-xs uppercase tracking-[0.3em] mb-2">AI Video Annual Cost</p>
                <p style={{ ...displayStyle, fontSize: "clamp(32px, 5vw, 56px)" }} className="text-white leading-none">
                  $1,200
                </p>
              </div>

              <div className="border border-[#ebff00] p-6">
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-2">Annual Savings</p>
                <p style={{ ...displayStyle, fontSize: "clamp(40px, 7vw, 80px)" }} className="text-[#ebff00] leading-none">
                  $58,800
                </p>
                <p className="text-[#888888] text-sm mt-3 uppercase tracking-wider">
                  That's 98% savings on video production costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payback Period */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-10"
          >
            PAYBACK PERIOD
          </h2>
          <div className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors max-w-2xl">
            <p className="text-[#888888] text-lg mb-6 leading-relaxed">
              Even if you only produce 1 video, AI pays for itself immediately:
            </p>
            <div className="space-y-0">
              <div className="flex justify-between items-center py-5 border-b border-[#1a1a1a]">
                <span className="text-[#888888]">Traditional video cost:</span>
                <span className="text-white font-bold">$5,000–$10,000</span>
              </div>
              <div className="flex justify-between items-center py-5 border-b border-[#1a1a1a]">
                <span className="text-[#888888]">AI video platform (monthly):</span>
                <span className="text-white font-bold">$30–$100</span>
              </div>
              <div className="flex justify-between items-center py-5">
                <span className="text-[#ebff00] font-bold uppercase tracking-wider text-sm">Payback period:</span>
                <span className="text-[#ebff00] font-bold uppercase tracking-wider text-sm">Same day</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-4"
          >
            BENEFITS NOT CAPTURED<br />IN SAVINGS
          </h2>
          <p className="text-[#888888] text-lg mb-12 max-w-xl">The ROI goes beyond the numbers on the spreadsheet.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map(({ label, desc }) => (
              <div key={label} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                  <span>✓</span> {label}
                </p>
                <p className="text-[#888888] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Savings */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-12"
          >
            REAL CUSTOMER SAVINGS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerSavings.map(({ type, savings, detail }) => (
              <div key={type} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
                <p className="text-[#888888] text-xs uppercase tracking-[0.3em] mb-4">{type}</p>
                <p
                  style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 56px)" }}
                  className="text-[#ebff00] leading-none mb-3"
                >
                  {savings}
                </p>
                <p className="text-[#666666] text-sm leading-relaxed">{detail}</p>
              </div>
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
            READY TO SAVE<br />
            <span style={{ color: "#ebff00" }}>$50K+ PER YEAR?</span>
          </h2>
          <p className="text-[#888888] text-lg mb-10 max-w-xl">
            Switch to AI video production and unlock massive savings. No long-term contracts. No crew, no delays, no excuses. Story first. Always.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors inline-block text-center">
              Get Started Today
            </Link>
            <Link href="/comparison/ai-agency-vs-traditional-agency" className="border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors inline-block text-center">
              AI vs Traditional Agency
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
