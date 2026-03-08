import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Video Production Calgary | Business Video Content | Ruminate X",
  description: "Corporate video production in Calgary. Internal comms, training videos, executive messages, investor relations, and brand videos for Calgary corporations. From $600. Call (587) 804-9266.",
  keywords: ["corporate video production Calgary", "Calgary corporate video", "business video production Calgary", "corporate communications video Calgary", "Calgary executive video"],
  openGraph: {
    title: "Corporate Video Production Calgary | Ruminate X",
    description: "Internal communications, training, and brand videos for Calgary corporations. AI-powered, from $600.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corporate Video Production Calgary",
  provider: {
    "@type": "LocalBusiness",
    name: "Ruminate X",
    address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
    telephone: "+15878049266",
  },
  areaServed: { "@type": "City", name: "Calgary" },
  description: "Professional corporate video production for Calgary businesses. Internal communications, training, and brand content.",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Corporate Video</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Corporate Video Production Calgary
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            Professional corporate video for Calgary's business community. Internal communications, leadership messages, training content, investor relations, and brand films — AI-produced, broadcast quality, from $600.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Corporate Video Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { stat: "$600", label: "Starting price" },
              { stat: "48hrs", label: "Turnaround" },
              { stat: "4K", label: "Broadcast quality" },
              { stat: "140+", label: "Languages" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-slate-900">{stat}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Corporate Video Services — Calgary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "CEO & Leadership Messages", desc: "Executive video messages that communicate strategy, culture, and vision to your entire Calgary organization — without town halls.", price: "From $700" },
                { type: "Internal Communications", desc: "Company updates, policy announcements, and all-hands content delivered as engaging video instead of ignored email chains.", price: "From $600" },
                { type: "Employee Onboarding Videos", desc: "Consistent, scalable onboarding content that gives every new Calgary hire the same excellent introduction to your company.", price: "From $800" },
                { type: "Safety & HSE Training", desc: "Safety training videos for Calgary workplaces that meet Alberta OHS standards. Update easily as regulations change.", price: "From $700" },
                { type: "Investor Relations Video", desc: "Quarterly updates, annual reports, and capital markets content that communicates your Calgary company's performance and vision.", price: "From $1,500" },
                { type: "Corporate Brand Films", desc: "The definitive statement of who your Calgary company is — for recruitment, clients, and public profile.", price: "From $1,200" },
                { type: "Change Management Videos", desc: "Guide your Calgary workforce through mergers, restructures, and strategic pivots with clear, reassuring video communications.", price: "From $800" },
                { type: "Annual General Meeting Content", desc: "AGM presentations, pre-recorded segments, and recap videos for Calgary publicly-listed and private companies.", price: "From $1,000" },
              ].map(({ type, desc, price }) => (
                <div key={type} className="border border-slate-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-900">{type}</h3>
                    <span className="text-red-600 font-bold text-sm">{price}</span>
                  </div>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Corporate Sectors We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Oil & Gas", href: "/video-production-calgary-oil-gas" },
                { name: "Financial Services", href: "/video-production-calgary-finance" },
                { name: "Technology", href: "/video-production-calgary-tech" },
                { name: "Real Estate & Development", href: "/video-production-calgary-real-estate" },
                { name: "Healthcare", href: "/video-production-calgary-healthcare" },
                { name: "Legal Services", href: "/video-production-calgary-legal" },
                { name: "Construction", href: "/video-production-calgary-construction" },
                { name: "Retail & Consumer", href: "/video-production-calgary-retail" },
                { name: "Non-Profit", href: "/video-production-calgary-nonprofit" },
              ].map(({ name, href }) => (
                <Link key={name} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-center">
                  <p className="font-medium text-slate-700 text-sm">{name}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Calgary Corporations Choose AI Video</h2>
            <div className="space-y-4">
              {[
                { point: "Scale internal communications cheaply", desc: "Sending a video update to 500 Calgary employees costs the same as sending it to 5. Scale your corporate communications without scaling your budget." },
                { point: "Rapid deployment for time-sensitive messages", desc: "Crisis communications, regulatory updates, policy changes — we deliver in 24 hours when Calgary corporate situations demand speed." },
                { point: "Multi-language for diverse Calgary workforces", desc: "Calgary's corporate sector employs people from across the world. One video, 140+ languages, automatic. No separate translators or re-shoots." },
                { point: "Consistent brand across every video", desc: "Every corporate video — from a CEO message to a safety brief — looks and sounds like your brand. No inconsistency from different crews." },
              ].map(({ point, desc }) => (
                <div key={point} className="flex gap-4 border border-slate-200 p-5 rounded-lg">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">{point}</p>
                    <p className="text-slate-600 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Related Calgary Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary (Hub)" },
                { href: "/video-production-calgary-oil-gas", label: "Oil & Gas Video Calgary" },
                { href: "/brand-film-production-calgary", label: "Brand Film Production Calgary" },
                { href: "/best-video-production-company-calgary", label: "Best Video Production Company Calgary" },
                { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI vs Traditional Agency" },
                { href: "/contact", label: "Get a Corporate Video Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Corporate Video for Calgary's Business Community</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Internal comms, training, investor relations, and brand content for Calgary corporations. 48 hours. Broadcast quality.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Start a Corporate Project</Link>
              <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call Now</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
