import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Video Production Australia: Broadcast-Quality for Aussie Brands",
  description: "AI video production for Australian brands. Serving Sydney, Melbourne, Brisbane, Perth and beyond. 80% less than Australian agency rates, delivered in 48 hours.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">Australia</p>
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          AI Video Production Australia: World-Class Content for Aussie Brands
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Australian brands deserve world-class video content without Sydney agency prices. Ruminate X delivers broadcast-quality AI video to every Australian city — in 48 hours, for 80% less.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">The Australian Video Production Problem</h2>
          <p className="text-lg text-slate-700 mb-6">Australia's video production market is small and expensive. Sydney and Melbourne agencies charge AU$15,000–$50,000 per video — more than their US or UK counterparts relative to market size. AI changes everything.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "AU$13K+", label: "Saved per video vs Sydney agency" },
              { stat: "48hrs", label: "Delivery to any Australian city" },
              { stat: "AEST", label: "We adapt to your timezone" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg text-center">
                <p className="text-2xl font-bold text-yellow-700 mb-2">{stat}</p>
                <p className="text-slate-600 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Australian Cities We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra", "Gold Coast", "Newcastle", "Hobart", "Darwin"].map(city => (
              <Link key={city} href={city === "Sydney" ? "/sydney" : "/contact"} className="block border border-slate-200 p-4 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition text-center">
                <p className="font-medium text-slate-700">{city}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Australian Industries We Serve</h2>
          <div className="space-y-3">
            {[
              { industry: "Australian Mining & Resources", href: "/ai-commercial-production" },
              { industry: "Australian Tourism & Hospitality", href: "/ai-video-production-hospitality" },
              { industry: "Australian Retail & E-Commerce", href: "/ai-video-production-ecommerce" },
              { industry: "Australian Financial Services", href: "/ai-video-production-finance" },
              { industry: "Australian Technology & SaaS", href: "/ai-video-production-saas" },
              { industry: "Australian Property & Real Estate", href: "/ai-video-production-real-estate" },
            ].map(({ industry, href }) => (
              <Link key={industry} href={href} className="flex items-center justify-between border border-slate-200 p-4 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition">
                <span className="text-slate-700 font-medium">{industry}</span>
                <span className="text-yellow-600">→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/sydney", label: "AI Video Production Sydney" },
              { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI vs Traditional Agency" },
              { href: "/solutions/cut-video-production-costs", label: "See Cost Savings" },
              { href: "/roi-calculator", label: "Calculate AU Savings" },
              { href: "/markets/ai-video-production-uk", label: "AI Video Production UK" },
              { href: "/contact", label: "Start an Australian Project" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition text-slate-700 font-medium">→ {label}</Link>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Australian Ambition. AI Production.</h2>
          <p className="text-slate-300 mb-8">Cinematic video content for Australian brands that are ready to punch above their weight globally.</p>
          <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Start an Australian Project</Link>
        </section>
      </div>
    </main>
  );
}
