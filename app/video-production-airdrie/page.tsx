import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Video Production Airdrie | Professional Video for Airdrie Businesses | Ruminate X",
  description: "Video production for Airdrie businesses. Professional brand films, social media content, and promotional videos for Airdrie and North Calgary. From $500. Call (587) 804-9266.",
  keywords: ["video production Airdrie", "Airdrie video production", "Airdrie business video", "video company Airdrie Alberta", "Airdrie marketing video"],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruminate X — Video Production Airdrie",
  description: "AI-powered video production for Airdrie businesses.",
  telephone: "+15878049266",
  address: { "@type": "PostalAddress", addressLocality: "Airdrie", addressRegion: "AB", addressCountry: "CA" },
  areaServed: [
    { "@type": "City", name: "Airdrie" },
    { "@type": "City", name: "Calgary" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Airdrie, Alberta · North Calgary</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">Video Production Airdrie</h1>
          <p className="text-xl text-slate-600 mb-4">Professional video production for Airdrie's growing business community. Brand films, social content, product videos, and commercials — AI-powered, from $500, delivered in 48 hours.</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get an Airdrie Video Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Airdrie Business Video Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Brand Films", href: "/brand-film-production-calgary" },
                { name: "Commercials", href: "/commercial-video-production-calgary" },
                { name: "Social Media", href: "/social-media-video-production-calgary" },
                { name: "Small Business", href: "/video-production-calgary-small-business" },
                { name: "Real Estate", href: "/video-production-calgary-real-estate" },
                { name: "Restaurants", href: "/video-production-calgary-restaurants" },
              ].map(({ name, href }) => (
                <Link key={name} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-center">
                  <p className="font-medium text-slate-700 text-sm">{name}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Airdrie Communities We Serve</h2>
            <div className="flex flex-wrap gap-2">
              {["Bayside", "Cooper's Crossing", "Ravenswood", "Reunion", "Sagewood", "Windsong", "Midtown", "Hillcrest", "Morningside", "Genesis", "Prairie Springs", "Downtown Airdrie"].map(n => (
                <span key={n} className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-full">{n}</span>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">More Calgary Region Video Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary Hub" },
                { href: "/video-production-near-me", label: "Video Production Near Me" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production" },
                { href: "/video-production-se-calgary", label: "SE Calgary Video Production" },
                { href: "/best-video-production-company-calgary", label: "Best Video Company Calgary" },
                { href: "/contact", label: "Get an Airdrie Video Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Video Production for Airdrie's Growing Business Community</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Serving Airdrie & Calgary · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Broadcast-quality video for Airdrie businesses. From $500, delivered in 48 hours.</p>
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
