import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand Film Production Calgary | Cinematic Brand Stories | Ruminate X",
  description: "Calgary brand film production that tells your story. Cinematic, AI-powered brand films for Calgary businesses from $800. Delivered in 48 hours. Call (587) 804-9266.",
  keywords: ["brand film production Calgary", "Calgary brand video", "brand film Calgary", "corporate brand film Calgary", "brand storytelling Calgary"],
  openGraph: {
    title: "Brand Film Production Calgary | Ruminate X",
    description: "Cinematic brand films for Calgary businesses. AI-powered storytelling from $800, delivered in 48 hours.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Brand Film Production Calgary",
  provider: {
    "@type": "LocalBusiness",
    name: "Ruminate X",
    address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
    telephone: "+15878049266",
  },
  areaServed: { "@type": "City", name: "Calgary" },
  description: "Cinematic AI-powered brand film production for Calgary businesses. Brand stories that define who you are.",
  offers: { "@type": "Offer", priceRange: "$800–$4,000", priceCurrency: "CAD" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a brand film cost in Calgary?", acceptedAnswer: { "@type": "Answer", text: "Brand films with Ruminate X start at $800 CAD for a 60–90 second cinematic brand story. Traditional Calgary brand film agencies charge $15,000–$60,000 for the same quality. We deliver 80–95% savings." } },
    { "@type": "Question", name: "How long does brand film production take in Calgary?", acceptedAnswer: { "@type": "Answer", text: "We deliver brand films in 24–48 hours. Traditional Calgary production companies take 4–8 weeks between pre-production, filming, and post-production." } },
    { "@type": "Question", name: "What makes a great brand film for a Calgary business?", acceptedAnswer: { "@type": "Answer", text: "A great Calgary brand film tells your story authentically — who you are, what you stand for, and why Calgary customers should choose you. It's cinematic, emotionally resonant, and built around your brand's unique identity." } },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Brand Films</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Brand Film Production Calgary
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            Your Calgary brand deserves a cinematic story. We produce AI-powered brand films that define who you are — broadcast quality, delivered in 48 hours, starting at $800.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Start Your Brand Film</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { stat: "$800", label: "Starting price" },
              { stat: "48hrs", label: "Delivery" },
              { stat: "90%", label: "Cost savings" },
              { stat: "YYC", label: "Calgary based" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-slate-900">{stat}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">What Is a Brand Film?</h2>
            <p className="text-lg text-slate-700 mb-6">
              A brand film is a cinematic video that tells your company's story — not just what you sell, but who you are. It captures your mission, values, culture, and the people behind your Calgary business. Done right, it's the single most powerful piece of marketing content you can create.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Calgary's most successful brands use brand films to stand out in a crowded market. Whether you're an energy company on the Bow River or a startup in the Beltline, a brand film creates emotional connection that no ad or brochure can match.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-slate-700 font-medium">We produce brand films for Calgary businesses without film crews, location rentals, or weeks of scheduling. AI production delivers the same cinematic quality — faster and for a fraction of the cost.</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Brand Film Packages</h2>
            <div className="space-y-4">
              {[
                { name: "Starter Brand Story", price: "$800", length: "60 seconds", includes: ["Brand narrative script", "Cinematic visuals", "Professional voiceover", "1 revision round", "HD delivery"] },
                { name: "Signature Brand Film", price: "$1,800", length: "90–120 seconds", includes: ["Full brand discovery", "Custom script", "Cinematic storytelling", "Background score", "Unlimited revisions", "4K delivery"] },
                { name: "Brand Film Suite", price: "$3,500", length: "2–3 minute hero film + cuts", includes: ["Hero film + 3 social cuts", "Full brand discovery", "Multi-version delivery", "Subtitles in 3 languages", "Priority 24hr turnaround"] },
              ].map(({ name, price, length, includes }) => (
                <div key={name} className="border border-slate-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{name}</h3>
                      <p className="text-slate-500 text-sm">{length}</p>
                    </div>
                    <p className="text-2xl font-bold text-red-600">{price}</p>
                  </div>
                  <ul className="space-y-1">
                    {includes.map(item => (
                      <li key={item} className="text-slate-600 text-sm flex items-center gap-2">
                        <span className="text-green-500">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Industries We Film For</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Oil & Gas Companies", href: "/video-production-calgary-oil-gas" },
                { name: "Real Estate Developers", href: "/video-production-calgary-real-estate" },
                { name: "Restaurants & Hospitality", href: "/video-production-calgary-restaurants" },
                { name: "Tech Startups", href: "/video-production-calgary-tech" },
                { name: "Small Businesses", href: "/video-production-calgary-small-business" },
                { name: "Professional Services", href: "/contact" },
              ].map(({ name, href }) => (
                <Link key={name} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-center">
                  <p className="font-medium text-slate-700 text-sm">{name}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Brand Film FAQ — Calgary</h2>
            <div className="space-y-6">
              {[
                { q: "How much does a brand film cost in Calgary?", a: "Brand films with Ruminate X start at $800 CAD. Traditional Calgary film production companies charge $15,000–$60,000 for the same cinematic quality. We save Calgary businesses 80–95% on brand film production." },
                { q: "Do you need to film on location in Calgary?", a: "No. AI production eliminates the need for on-location filming. This removes location fees, crew costs, weather delays, and scheduling complexity — common pain points for Calgary businesses." },
                { q: "Can you capture Calgary's specific look and feel?", a: "Yes. Our brand films can incorporate Calgary's iconic landscapes, urban identity, and industry aesthetic — the Bow River, the Rockies backdrop, the energy sector aesthetic — all without physical filming." },
                { q: "How many revisions are included?", a: "Unlimited revisions are included in all packages. We don't charge for changes like traditional Calgary film agencies do." },
              ].map(({ q, a }) => (
                <div key={q}>
                  <h3 className="font-bold text-slate-900 mb-2">{q}</h3>
                  <p className="text-slate-600">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Related Calgary Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary (Hub)" },
                { href: "/commercial-video-production-calgary", label: "Commercial Video Production Calgary" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production Calgary" },
                { href: "/video-production-calgary-oil-gas", label: "Oil & Gas Video Calgary" },
                { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI vs Traditional Agency" },
                { href: "/contact", label: "Get a Brand Film Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Your Calgary Brand Story Starts Here</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Cinematic brand films for Calgary businesses. 48-hour delivery. No film crew required.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Start Your Brand Film</Link>
              <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call Now</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
