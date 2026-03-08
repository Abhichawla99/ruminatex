import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Video Production SE Calgary | South East Calgary Video | Ruminate X",
  description: "Video production for SE Calgary businesses. Professional brand films, social media content, and marketing videos for McKenzie Towne, Mahogany, Cranston, and all SE Calgary communities. From $500. Call (587) 804-9266.",
  keywords: ["video production SE Calgary", "south east Calgary video", "McKenzie Towne video production", "Mahogany video Calgary", "SE Calgary video company"],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruminate X — Video Production SE Calgary",
  description: "AI-powered video production for SE Calgary businesses.",
  telephone: "+15878049266",
  address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
  areaServed: { "@type": "Place", name: "Southeast Calgary" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">SE Calgary, Alberta</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">Video Production — SE Calgary</h1>
          <p className="text-xl text-slate-600 mb-4">Professional video for SE Calgary's growing communities. From McKenzie Towne and Mahogany to Cranston, Legacy, and Walden — broadcast-quality video from $500, delivered in 48 hours.</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get an SE Calgary Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">SE Calgary Communities We Serve</h2>
            <div className="flex flex-wrap gap-2">
              {["McKenzie Towne", "Mahogany", "Cranston", "Legacy", "Walden", "Auburn Bay", "Copperfield", "New Brighton", "Chaparral", "Quarry Park", "Seton", "Douglasdale", "Riverbend", "Lynnwood", "Forest Lawn", "Erin Woods", "Inglewood"].map(n => (
                <span key={n} className="text-xs px-3 py-1 bg-red-50 text-red-700 rounded-full border border-red-200">{n}</span>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">SE Calgary Business Video Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Small Business Video", href: "/video-production-calgary-small-business" },
                { name: "Restaurant Video", href: "/video-production-calgary-restaurants" },
                { name: "Real Estate Video", href: "/video-production-calgary-real-estate" },
                { name: "Social Media Content", href: "/social-media-video-production-calgary" },
                { name: "Brand Films", href: "/brand-film-production-calgary" },
                { name: "Affordable Video", href: "/affordable-video-production-calgary" },
              ].map(({ name, href }) => (
                <Link key={name} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-center">
                  <p className="font-medium text-slate-700 text-sm">{name}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">More Calgary Video Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary Hub" },
                { href: "/video-production-downtown-calgary", label: "Downtown Calgary Video" },
                { href: "/video-production-nw-calgary", label: "NW Calgary Video Production" },
                { href: "/video-production-near-me", label: "Video Production Near Me" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production" },
                { href: "/contact", label: "Get an SE Calgary Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">SE Calgary's Video Production Studio</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Professional video for every SE Calgary business. From $500, in 48 hours.</p>
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
