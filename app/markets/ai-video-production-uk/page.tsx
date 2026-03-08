import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Video Production UK: Cinematic Brand Content for British Brands",
  description: "AI video production for UK brands. Serving London, Manchester, Birmingham, Edinburgh and beyond with broadcast-quality video at 80% less than UK agency rates.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">United Kingdom</p>
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          AI Video Production UK: World-Class Content for British Brands
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          UK video production agencies charge premium London rates. Ruminate X delivers the same cinematic quality — AI-powered, remote-first, 80% less cost — for brands across England, Scotland, Wales, and Northern Ireland.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Why UK Brands Are Switching to AI</h2>
          <p className="text-lg text-slate-700 mb-6">London's production industry is world-class — and priced accordingly. A 2-minute brand film from a London agency runs £8,000–£40,000. AI production delivers the same for £800–£3,000.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "£7K–£37K", label: "Savings per video vs London agency" },
              { stat: "48hrs", label: "Delivery anywhere in the UK" },
              { stat: "GMT", label: "We work your timezone" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-blue-50 p-6 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-700 mb-2">{stat}</p>
                <p className="text-slate-600 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">UK Cities We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {["London", "Manchester", "Birmingham", "Edinburgh", "Glasgow", "Leeds", "Bristol", "Liverpool", "Sheffield", "Cardiff", "Belfast", "Newcastle"].map(city => (
              <Link key={city} href={city === "London" ? "/london" : "/contact"} className="block border border-slate-200 p-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-center">
                <p className="font-medium text-slate-700">{city}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">UK Industries We Specialise In</h2>
          <div className="space-y-3">
            {[
              { industry: "UK Financial Services & Fintech", href: "/ai-video-production-finance" },
              { industry: "British Fashion & Luxury Brands", href: "/ai-video-production-fashion" },
              { industry: "UK SaaS & Technology Companies", href: "/ai-video-production-saas" },
              { industry: "UK Retail & E-Commerce", href: "/ai-video-production-ecommerce" },
              { industry: "UK Healthcare & Life Sciences", href: "/ai-video-production-healthcare" },
              { industry: "UK Hospitality & Tourism", href: "/ai-video-production-hospitality" },
            ].map(({ industry, href }) => (
              <Link key={industry} href={href} className="flex items-center justify-between border border-slate-200 p-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition">
                <span className="text-slate-700 font-medium">{industry}</span>
                <span className="text-blue-600">→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/london", label: "AI Video Production London" },
              { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI vs Traditional Agency" },
              { href: "/guides/why-traditional-video-agencies-are-expensive", label: "Why UK Agencies Overcharge" },
              { href: "/roi-calculator", label: "Calculate UK Savings" },
              { href: "/markets/ai-video-production-australia", label: "AI Video Production Australia" },
              { href: "/contact", label: "Start a UK Project" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-slate-700 font-medium">→ {label}</Link>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">British Quality. AI Efficiency.</h2>
          <p className="text-slate-300 mb-8">Cinematic brand content for UK businesses that refuse to pay London agency rates.</p>
          <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Start a UK Project</Link>
        </section>
      </div>
    </main>
  );
}
