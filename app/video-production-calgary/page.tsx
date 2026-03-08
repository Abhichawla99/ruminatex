import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Video Production Calgary | AI-Powered Brand Films & Commercials | Ruminate X",
  description: "Calgary's #1 AI video production studio. Brand films, commercials, product videos & social content. Based in Calgary, serving YYC brands with broadcast-quality video from $500.",
  keywords: ["video production Calgary", "Calgary video production company", "video production company Calgary", "Calgary video agency", "corporate video Calgary", "brand film Calgary", "commercial video production Calgary", "AI video production Calgary"],
  openGraph: {
    title: "Video Production Calgary | Ruminate X",
    description: "Calgary's AI video production studio. Broadcast-quality brand films, commercials, and social content from $500.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ruminatex.com/video-production-calgary",
  name: "Ruminate X — Video Production Calgary",
  description: "AI-powered video production studio in Calgary, Alberta. Brand films, commercials, product videos, and social content for Calgary businesses.",
  url: "https://ruminatex.com/video-production-calgary",
  telephone: "+15878049266",
  email: "abhi@paperkites.co",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "51.0447",
    longitude: "-114.0719",
  },
  areaServed: {
    "@type": "City",
    name: "Calgary",
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: ["https://instagram.com/ruminate__x"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does video production cost in Calgary?", acceptedAnswer: { "@type": "Answer", text: "Video production in Calgary typically costs $500–$5,000 with Ruminate X's AI-powered production, compared to $10,000–$50,000 with traditional Calgary video agencies. We deliver broadcast-quality results at 80–90% lower cost." } },
    { "@type": "Question", name: "How fast can you produce a video in Calgary?", acceptedAnswer: { "@type": "Answer", text: "We deliver most videos in 24–48 hours. Traditional Calgary video agencies take 3–6 weeks. We're the fastest video production option in Calgary." } },
    { "@type": "Question", name: "What types of videos do you make in Calgary?", acceptedAnswer: { "@type": "Answer", text: "Brand films, commercials, product demos, social media content, explainer videos, real estate tours, oil & gas corporate videos, restaurant promos, and more." } },
    { "@type": "Question", name: "Do you work with small businesses in Calgary?", acceptedAnswer: { "@type": "Answer", text: "Yes. We work with Calgary businesses of all sizes — from local restaurants and small businesses to major oil & gas companies and enterprise brands." } },
  ],
};

const services = [
  { title: "Brand Films Calgary", href: "/brand-film-production-calgary", desc: "Cinematic brand stories for Calgary businesses. Define who you are." },
  { title: "Commercial Video Calgary", href: "/commercial-video-production-calgary", desc: "TV, digital, and social commercials for Calgary brands." },
  { title: "Product Videos Calgary", href: "/product-video-production-calgary", desc: "Product demos and explainers that drive sales." },
  { title: "Social Media Video Calgary", href: "/social-media-video-production-calgary", desc: "TikTok, Instagram, YouTube content for Calgary brands." },
  { title: "Real Estate Video Calgary", href: "/video-production-calgary-real-estate", desc: "Property tours and real estate marketing video." },
  { title: "Corporate Video Calgary", href: "/video-production-calgary-oil-gas", desc: "Corporate communications and industry video." },
];

const industries = [
  { name: "Oil & Gas", href: "/video-production-calgary-oil-gas" },
  { name: "Real Estate", href: "/video-production-calgary-real-estate" },
  { name: "Restaurants & Hospitality", href: "/video-production-calgary-restaurants" },
  { name: "Tech & SaaS", href: "/video-production-calgary-tech" },
  { name: "Small Business", href: "/video-production-calgary-small-business" },
  { name: "Healthcare", href: "/ai-video-production-healthcare" },
  { name: "Retail & E-Commerce", href: "/ai-video-production-ecommerce" },
  { name: "Finance", href: "/ai-video-production-finance" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · YYC</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Video Production Calgary
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            Calgary's AI-powered video production studio. Brand films, commercials, product videos, and social content — broadcast quality, delivered in 48 hours, from $500.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { stat: "$500", label: "Starting price" },
              { stat: "48hrs", label: "Delivery time" },
              { stat: "80%", label: "Less than agencies" },
              { stat: "YYC", label: "Calgary based" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-slate-900">{stat}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* Why Calgary brands choose us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary's Video Production Studio</h2>
            <p className="text-lg text-slate-700 mb-6">
              We're a Calgary-based AI video production studio serving businesses across YYC and Alberta. From downtown Calgary startups to major oil & gas companies in the energy corridor, we produce broadcast-quality video content at prices that make sense for Calgary's market.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Traditional Calgary video agencies charge $10,000–$50,000 per video and take 4–6 weeks. We deliver the same cinematic quality in 24–48 hours, starting at $500. No film crews. No location rentals. No scheduling delays.
            </p>
            <div className="bg-slate-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-slate-700 font-medium">📍 Based in Calgary, Alberta. Serving all of YYC — Downtown, Beltline, Kensington, Mission, NE Calgary, NW Calgary, SE Calgary, and beyond.</p>
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Video Production Services in Calgary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map(({ title, href, desc }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-6 rounded-lg hover:border-red-400 hover:bg-red-50 transition">
                  <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Calgary vs Traditional */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Ruminate X vs. Calgary Video Agencies</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4 text-left">Factor</th>
                    <th className="p-4 text-left">Calgary Video Agency</th>
                    <th className="p-4 text-left">Ruminate X</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Cost per video", "$10,000–$50,000", "$500–$3,000"],
                    ["Production time", "4–6 weeks", "24–48 hours"],
                    ["Revisions", "2 rounds ($$$ after)", "Unlimited, free"],
                    ["Location required", "Yes", "No"],
                    ["Film crew", "5–10 people", "Not needed"],
                    ["Languages", "English only", "140+ languages"],
                    ["Availability", "Booked weeks out", "Start today"],
                  ].map(([f, trad, us]) => (
                    <tr key={f} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="p-4 font-medium text-slate-700">{f}</td>
                      <td className="p-4 text-red-500">{trad}</td>
                      <td className="p-4 text-green-600 font-bold">{us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Industries */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {industries.map(({ name, href }) => (
                <Link key={name} href={href} className="block border border-slate-200 p-4 rounded-lg text-center hover:border-red-400 hover:bg-red-50 transition">
                  <p className="font-medium text-slate-700 text-sm">{name}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Calgary Neighborhoods */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Serving All of Calgary</h2>
            <p className="text-lg text-slate-700 mb-6">We work with businesses across every Calgary neighbourhood and suburb:</p>
            <div className="flex flex-wrap gap-2">
              {["Downtown Calgary", "Beltline", "Kensington", "Mission", "Inglewood", "Bridgeland", "Marda Loop", "Sunalta", "Eau Claire", "Chinatown", "Forest Lawn", "Marlborough", "Saddleridge", "Coventry Hills", "Tuscany", "Rocky Ridge", "Signal Hill", "Shawnessy", "Airdrie", "Cochrane", "Okotoks", "Chestermere"].map(n => (
                <span key={n} className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-full">{n}</span>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Video Production FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "How much does video production cost in Calgary?", a: "With Ruminate X, Calgary video production starts at $500 for a 60–90 second branded video. Traditional Calgary video agencies charge $10,000–$50,000 for the same quality. We deliver 80–95% savings." },
                { q: "How fast can you produce a video in Calgary?", a: "We deliver most videos in 24–48 hours. Traditional Calgary video agencies take 3–6 weeks. If you need a video this week, we can make it happen." },
                { q: "Do you film on location in Calgary?", a: "No — and that's the point. AI production eliminates the need for filming, which removes location fees, crew costs, and scheduling delays. You get better video, faster, for less." },
                { q: "Can you make a video for my Calgary small business?", a: "Absolutely. We work with Calgary businesses of all sizes — from one-person shops in Kensington to major corporate headquarters downtown." },
                { q: "Do you work with Calgary oil and gas companies?", a: "Yes. We produce corporate videos, training content, safety communications, and brand films for energy sector companies across Calgary and Alberta." },
              ].map(({ q, a }) => (
                <div key={q}>
                  <h3 className="font-bold text-slate-900 mb-2">{q}</h3>
                  <p className="text-slate-600">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production Calgary" },
                { href: "/video-production-near-me", label: "Video Production Near Me (Calgary)" },
                { href: "/markets/ai-video-production-canada", label: "AI Video Production Canada" },
                { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI vs Traditional Agency" },
                { href: "/roi-calculator", label: "Calculate Your Savings" },
                { href: "/contact", label: "Start Your Calgary Project" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Calgary's Video Production Studio</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, Alberta · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Broadcast-quality video for Calgary businesses. Faster, cheaper, and better than any traditional Calgary video agency.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Start a Project</Link>
              <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call Now</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
