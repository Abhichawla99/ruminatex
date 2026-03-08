import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Retail Video Production Calgary | In-Store & E-Commerce Video | Ruminate X",
  description: "Video production for Calgary retail brands. Product videos, store promos, e-commerce content, and social media ads. AI-powered, from $400. Serving all Calgary retailers. Call (587) 804-9266.",
  keywords: ["retail video production Calgary", "Calgary retail video", "store video Calgary", "ecommerce video Calgary", "retail marketing video Calgary"],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Retail Video Production Calgary",
  provider: { "@type": "LocalBusiness", name: "Ruminate X", telephone: "+15878049266", address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" } },
  areaServed: { "@type": "City", name: "Calgary" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Retail</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">Retail Video Production Calgary</h1>
          <p className="text-xl text-slate-600 mb-4">Product videos, store promos, e-commerce content, and seasonal campaigns for Calgary retail brands. AI-produced, from $400, delivered in 48 hours.</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Retail Video Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Retail Video Services — Calgary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "Product Videos", desc: "Showcase your products in action. Product videos increase Calgary e-commerce conversion by 3x.", price: "From $400" },
                { type: "Store Brand Films", desc: "Show why shopping at your Calgary store is a better experience than buying online.", price: "From $700" },
                { type: "Seasonal Campaign Videos", desc: "Holiday, back-to-school, and seasonal promotion videos that drive foot traffic and online sales.", price: "From $400" },
                { type: "Social Media Ads", desc: "TikTok, Instagram, and Facebook video ads targeting Calgary shoppers.", price: "From $400" },
                { type: "New Arrival Announcements", desc: "Quick videos for new products and collections that create urgency and excitement.", price: "From $300" },
                { type: "Brand Story", desc: "Tell the story of your Calgary retail brand — why you started, what makes you different, why customers love you.", price: "From $600" },
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
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Related Calgary Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary Hub" },
                { href: "/product-video-production-calgary", label: "Product Video Calgary" },
                { href: "/social-media-video-production-calgary", label: "Social Media Video Calgary" },
                { href: "/video-production-calgary-small-business", label: "Small Business Video Calgary" },
                { href: "/ai-video-production-ecommerce", label: "E-Commerce Video Production" },
                { href: "/contact", label: "Get a Retail Video Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Video for Calgary's Retail Scene</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Product videos, store promos, and social ads for Calgary retailers. From $400.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Get a Quote</Link>
              <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call Now</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
