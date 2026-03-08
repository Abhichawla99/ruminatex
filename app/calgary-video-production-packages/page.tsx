import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calgary Video Production Packages & Pricing | Transparent Rates | Ruminate X",
  description: "Calgary video production packages with transparent pricing. Brand films from $800, social content from $400, commercial from $1,200. No hidden fees. Call (587) 804-9266.",
  keywords: ["Calgary video production packages", "video production pricing Calgary", "Calgary video packages", "how much video production Calgary", "Calgary video production rates"],
  openGraph: {
    title: "Calgary Video Production Packages | Ruminate X",
    description: "Transparent pricing for Calgary video production. Brand films, commercials, social content. No hidden fees.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Calgary Video Production Packages",
  provider: {
    "@type": "LocalBusiness",
    name: "Ruminate X",
    telephone: "+15878049266",
    address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
  },
  offers: [
    { "@type": "Offer", name: "Starter Brand Video", price: "500", priceCurrency: "CAD", description: "60-second brand explainer for Calgary businesses" },
    { "@type": "Offer", name: "Signature Brand Film", price: "1800", priceCurrency: "CAD", description: "90-120 second cinematic brand film for Calgary businesses" },
    { "@type": "Offer", name: "Social Content Starter", price: "1200", priceCurrency: "CAD", description: "4 social media videos per month for Calgary brands" },
    { "@type": "Offer", name: "Social Content Pro", price: "2400", priceCurrency: "CAD", description: "8 social media videos per month for Calgary brands" },
  ],
};

const packages = [
  {
    category: "Brand Films",
    items: [
      { name: "Starter Brand Story", price: "$500", details: "60 sec · Brand narrative · HD delivery · 1 revision round" },
      { name: "Signature Brand Film", price: "$1,800", details: "90–120 sec · Custom script · Background score · Unlimited revisions · 4K" },
      { name: "Brand Film Suite", price: "$3,500", details: "Hero film + 3 social cuts · Subtitles in 3 languages · Priority 24hr delivery" },
    ]
  },
  {
    category: "Commercials",
    items: [
      { name: "Social Media Ad", price: "$600", details: "30–60 sec · 1 format (9:16 or 16:9) · Optimized for platform" },
      { name: "Digital Commercial", price: "$1,200", details: "30 sec · Multiple formats · YouTube, social, programmatic ready" },
      { name: "TV Commercial Package", price: "$2,500", details: "30 sec · Broadcast spec · All digital formats included" },
    ]
  },
  {
    category: "Social Media Content",
    items: [
      { name: "Social Starter (4 videos/mo)", price: "$1,200/mo", details: "4 short-form videos · TikTok/Instagram/YouTube" },
      { name: "Social Pro (8 videos/mo)", price: "$2,400/mo", details: "8 videos · All platforms · Monthly strategy call" },
      { name: "Social Scale (16 videos/mo)", price: "$4,000/mo", details: "16 videos · All platforms + long-form · Priority support" },
    ]
  },
  {
    category: "Product & Explainer Videos",
    items: [
      { name: "Product Demo", price: "$500", details: "60–90 sec · Feature showcase · HD delivery" },
      { name: "Explainer Video", price: "$700", details: "90–120 sec · Animated/narrated · Clear messaging" },
      { name: "Product Suite", price: "$1,500", details: "3 product videos · Consistent visual style · SEO-optimized" },
    ]
  },
  {
    category: "Corporate & Internal",
    items: [
      { name: "Executive Message", price: "$700", details: "60–90 sec · Professional tone · Internal comms ready" },
      { name: "Training Video", price: "$800", details: "90–180 sec · Clear instructional format · Easy to update" },
      { name: "Investor/Annual Report", price: "$1,500", details: "2–3 min · Professional presentation · Client-ready" },
    ]
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Pricing</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">Calgary Video Production Packages</h1>
          <p className="text-xl text-slate-600 mb-4">
            Transparent pricing for every Calgary video project. No quotes that take a week. No hidden fees. No sticker shock. Pick a package, start today.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Custom Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <div className="bg-[#ebff00] rounded-lg p-6 mb-12">
            <p className="font-bold text-slate-900 mb-2">All packages include:</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
              {["Unlimited revisions", "4K broadcast quality", "All file formats", "Commercial usage rights", "Fast 48-hour delivery", "Calgary-based support"].map(item => (
                <div key={item} className="flex items-center gap-2"><span className="text-green-600">✓</span> {item}</div>
              ))}
            </div>
          </div>

          {packages.map(({ category, items }) => (
            <section key={category} className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-slate-900 border-b border-slate-200 pb-3">{category}</h2>
              <div className="space-y-3">
                {items.map(({ name, price, details }) => (
                  <div key={name} className="flex items-center justify-between border border-slate-200 rounded-lg p-5 hover:border-red-400 hover:bg-red-50 transition">
                    <div>
                      <p className="font-bold text-slate-900">{name}</p>
                      <p className="text-slate-500 text-sm">{details}</p>
                    </div>
                    <p className="text-2xl font-bold text-red-600 flex-shrink-0 ml-4">{price}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Compare: Calgary Agency vs Ruminate X</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4 text-left">Video</th>
                    <th className="p-4 text-left">Typical Calgary Agency</th>
                    <th className="p-4 text-left">Ruminate X Package</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Brand Film", "$15,000–$40,000", "From $800"],
                    ["TV Commercial", "$20,000–$50,000", "From $1,200"],
                    ["Social Video", "$3,000–$8,000", "From $400"],
                    ["Product Demo", "$5,000–$12,000", "From $500"],
                    ["Monthly Content (8 vids)", "$25,000–$60,000", "$2,400"],
                  ].map(([type, agency, us]) => (
                    <tr key={type} className="border-b border-slate-100">
                      <td className="p-4 font-medium text-slate-700">{type}</td>
                      <td className="p-4 text-red-500">{agency}</td>
                      <td className="p-4 text-green-600 font-bold">{us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Explore Calgary Video Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary Hub" },
                { href: "/brand-film-production-calgary", label: "Brand Film Production Calgary" },
                { href: "/commercial-video-production-calgary", label: "Commercial Video Calgary" },
                { href: "/social-media-video-production-calgary", label: "Social Media Video Calgary" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Calgary" },
                { href: "/contact", label: "Get a Custom Calgary Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Start Your Calgary Video Project</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Pick a package or get a custom quote. No waiting, no markup, no surprises.</p>
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
