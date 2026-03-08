import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Video Production Downtown Calgary | Corporate & Brand Video | Ruminate X",
  description: "Video production for Downtown Calgary businesses. Corporate videos, brand films, and professional content for YYC's business core. From $500, delivered in 48 hours. Call (587) 804-9266.",
  keywords: ["video production downtown Calgary", "downtown Calgary video", "Calgary CBD video production", "video company downtown Calgary", "Stephen Avenue video production"],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruminate X — Video Production Downtown Calgary",
  description: "AI-powered video production for Downtown Calgary businesses.",
  telephone: "+15878049266",
  address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
  geo: { "@type": "GeoCoordinates", latitude: "51.0447", longitude: "-114.0719" },
  areaServed: { "@type": "Place", name: "Downtown Calgary" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Downtown Calgary · YYC Core</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">Video Production — Downtown Calgary</h1>
          <p className="text-xl text-slate-600 mb-4">Calgary's business core needs the best video. Corporate towers, professional services, energy headquarters, and Beltline businesses — we produce broadcast-quality video for Downtown Calgary in 48 hours from $500.</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Downtown Calgary Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Downtown Calgary's Business Sectors We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Energy Headquarters", href: "/video-production-calgary-oil-gas" },
                { name: "Law Firms", href: "/video-production-calgary-legal" },
                { name: "Financial Services", href: "/video-production-calgary-finance" },
                { name: "Corporate HQs", href: "/corporate-video-production-calgary" },
                { name: "Tech Companies", href: "/video-production-calgary-tech" },
                { name: "Restaurants & Hospitality", href: "/video-production-calgary-restaurants" },
                { name: "Real Estate Offices", href: "/video-production-calgary-real-estate" },
                { name: "Retail on Stephen Ave", href: "/video-production-calgary-retail" },
                { name: "Healthcare Facilities", href: "/video-production-calgary-healthcare" },
              ].map(({ name, href }) => (
                <Link key={name} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-center">
                  <p className="font-medium text-slate-700 text-sm">{name}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Downtown Calgary Video Locations</h2>
            <div className="flex flex-wrap gap-2">
              {["Stephen Avenue", "8th Avenue SW", "Bow Valley Square", "Calgary Tower", "Eau Claire", "East Village", "Beltline", "+15 Network", "Chinatown", "Stampede Park", "Arts District", "CORE Shopping", "Convention Centre", "Shaw Centre"].map(loc => (
                <span key={loc} className="text-xs px-3 py-1 bg-red-50 text-red-700 rounded-full border border-red-200">{loc}</span>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">More Calgary Video Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary Hub" },
                { href: "/corporate-video-production-calgary", label: "Corporate Video Calgary" },
                { href: "/best-video-production-company-calgary", label: "Best Video Company Calgary" },
                { href: "/video-production-se-calgary", label: "SE Calgary Video Production" },
                { href: "/video-production-nw-calgary", label: "NW Calgary Video Production" },
                { href: "/contact", label: "Get a Quote — Downtown Calgary" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Downtown Calgary's Video Production Studio</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Broadcast-quality video for the heart of Calgary's business community. From $500, in 48 hours.</p>
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
