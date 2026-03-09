import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Video Production Canada: Calgary Studio, Nationwide Reach",
  description: "Canada's AI video production agency. Based in Calgary, serving Toronto, Vancouver, Montreal, Ottawa, and every Canadian market with broadcast-quality video.",
};

const displayStyle = { fontFamily: "var(--font-bebas-neue), sans-serif" };

const cities = [
  { name: "Toronto", href: "/toronto", desc: "Canada's largest city and tech hub" },
  { name: "Vancouver", href: "/contact", desc: "Film capital of Canada" },
  { name: "Calgary", href: "/contact", desc: "Our home base — Alberta's business capital" },
  { name: "Montreal", href: "/contact", desc: "Canada's creative and cultural centre" },
  { name: "Ottawa", href: "/contact", desc: "Government and tech corridor" },
  { name: "Edmonton", href: "/contact", desc: "Northern Alberta's growing economy" },
];

const industries = [
  { industry: "Canadian Tech & SaaS", href: "/ai-video-production-saas" },
  { industry: "Oil & Gas / Energy Sector", href: "/ai-commercial-production" },
  { industry: "Canadian E-Commerce Brands", href: "/ai-video-production-ecommerce" },
  { industry: "Real Estate Across Canada", href: "/ai-video-production-real-estate" },
  { industry: "Canadian Financial Services", href: "/ai-video-production-finance" },
  { industry: "Healthcare & Life Sciences", href: "/ai-video-production-healthcare" },
];

const reasons = [
  { title: "We're Canadian", desc: "Based in Calgary. We understand your market, your audience, and your brand voice." },
  { title: "Bilingual production", desc: "English and French versions of every video at no extra cost. Reach all of Canada." },
  { title: "No big-agency overhead", desc: "Toronto and Vancouver agencies charge for their downtown offices and large teams. We don't." },
  { title: "Serving global markets too", desc: "Need to reach the US, UK, or international markets? We do that too." },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Canada</p>
        <h1
          style={{ ...displayStyle, fontSize: "clamp(50px, 10vw, 130px)" }}
          className="text-white leading-none mb-6"
        >
          MADE IN CALGARY.<br />
          <span style={{ color: "#ebff00" }}>SEEN WORLDWIDE.</span>
        </h1>
        <p className="text-[#888888] text-xl max-w-2xl leading-relaxed mt-8">
          Ruminate X is Canada's AI video production studio. Based in Calgary, we serve brands from Vancouver to Halifax — delivering cinematic brand films, commercials, and digital content at a fraction of traditional agency costs.
        </p>
      </section>

      {/* Stats */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-6"
          >
            CANADIAN BRANDS<br />TRUST AI PRODUCTION
          </h2>
          <p className="text-[#888888] text-lg mb-12 max-w-2xl leading-relaxed">
            Canadian brands have historically had two choices: overpay a Toronto or Vancouver agency, or sacrifice quality. AI production breaks that tradeoff entirely.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "80–95%", label: "Less than traditional Canadian agencies" },
              { stat: "48hrs", label: "Delivery anywhere in Canada" },
              { stat: "140+", label: "Languages (English, French + global)" },
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
            CITIES WE SERVE<br />ACROSS CANADA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cities.map(({ name, href, desc }) => (
              <Link
                key={name}
                href={href}
                className="border border-[#1a1a1a] p-6 hover:border-[#ebff00]/20 group transition-colors"
              >
                <p className="text-white font-bold mb-1 group-hover:text-[#ebff00] transition-colors">{name}</p>
                <p className="text-[#666666] text-sm">{desc}</p>
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
            INDUSTRIES<br />ACROSS CANADA
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

      {/* Why Ruminate X */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-12"
          >
            WHY CANADIAN BRANDS<br />CHOOSE RUMINATE X
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map(({ title, desc }) => (
              <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
                <h3
                  style={displayStyle}
                  className="text-[#ebff00] text-xl tracking-wider mb-3"
                >
                  {title.toUpperCase()}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
            className="text-white leading-none mb-10"
          >
            RELATED PAGES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/toronto", label: "AI Video Production Toronto" },
              { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI vs Traditional Agency" },
              { href: "/solutions/cut-video-production-costs", label: "Cut Costs 80%" },
              { href: "/roi-calculator", label: "ROI Calculator" },
              { href: "/markets/ai-video-production-uk", label: "AI Video Production UK" },
              { href: "/contact", label: "Start a Canadian Project" },
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
            CANADA'S AI VIDEO<br />
            <span style={{ color: "#ebff00" }}>PRODUCTION STUDIO.</span>
          </h2>
          <p className="text-[#888888] text-lg mb-10 max-w-xl">
            From Calgary to coast to coast. Tell your story with the quality it deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors inline-block text-center">
              Start a Canadian Project
            </Link>
            <Link href="/roi-calculator" className="border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors inline-block text-center">
              ROI Calculator
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
