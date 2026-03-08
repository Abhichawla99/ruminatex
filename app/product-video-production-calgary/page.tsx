import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Video Production Calgary | Product Demos & Explainers | Ruminate X",
  description: "Product video production in Calgary. AI-powered product demos, explainers, and showcase videos from $500. Drive more sales with video. Call (587) 804-9266.",
  keywords: ["product video production Calgary", "Calgary product demo video", "product explainer Calgary", "ecommerce video Calgary", "product showcase Calgary"],
  openGraph: {
    title: "Product Video Production Calgary | Ruminate X",
    description: "Product demo and explainer videos for Calgary businesses. AI-powered, from $500, delivered in 48 hours.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Product Video Production Calgary",
  provider: {
    "@type": "LocalBusiness",
    name: "Ruminate X",
    address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
    telephone: "+15878049266",
  },
  areaServed: { "@type": "City", name: "Calgary" },
  description: "AI-powered product video production for Calgary businesses. Product demos, explainers, and showcase videos that drive sales.",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Product Videos</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Product Video Production Calgary
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            Product videos that sell. AI-powered demos, explainers, and showcase videos for Calgary businesses — from $500, delivered in 48 hours.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Product Video Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { stat: "$500", label: "Starting price" },
              { stat: "48hrs", label: "Turnaround" },
              { stat: "3x", label: "Higher conversions" },
              { stat: "YYC", label: "Calgary based" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-slate-900">{stat}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Product Video Types for Calgary Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "Product Demo Videos", desc: "Show exactly how your product works with a clear, concise demo video. Perfect for Calgary e-commerce and SaaS businesses.", price: "From $500" },
                { type: "Product Explainer Videos", desc: "Explain complex products simply with animated or narrated explainer videos that convert Calgary website visitors.", price: "From $600" },
                { type: "Product Showcase Videos", desc: "Cinematic product showcase videos for ads, websites, and social — making your product irresistible.", price: "From $700" },
                { type: "Unboxing & Review Videos", desc: "Authentic-style unboxing and product review videos that build trust with Calgary online shoppers.", price: "From $500" },
                { type: "360° Product Tours", desc: "Interactive product tours showing every angle and feature for Calgary retail and e-commerce brands.", price: "From $800" },
                { type: "Before & After Videos", desc: "Transformation videos that demonstrate your product's impact — powerful for Calgary health, beauty, and home brands.", price: "From $600" },
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
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Product Videos Drive Sales</h2>
            <p className="text-lg text-slate-700 mb-6">
              Product pages with video convert 3x higher than those without. Calgary shoppers want to see products in action before buying — video reduces purchase hesitation and returns.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { stat: "3x", label: "Higher conversion rate with product video" },
                { stat: "80%", label: "Of shoppers say video helps them decide" },
                { stat: "40%", label: "Reduction in product returns with demo videos" },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-red-50 border border-red-200 p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-red-600 mb-2">{stat}</p>
                  <p className="text-slate-600 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Industries We Create Product Videos For</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "E-Commerce Stores", href: "/ai-video-production-ecommerce" },
                { name: "SaaS & Software", href: "/video-production-calgary-tech" },
                { name: "Oil & Gas Equipment", href: "/video-production-calgary-oil-gas" },
                { name: "Restaurant & Food", href: "/video-production-calgary-restaurants" },
                { name: "Health & Beauty", href: "/ai-video-production-healthcare" },
                { name: "Retail Brands", href: "/ai-video-production-ecommerce" },
              ].map(({ name, href }) => (
                <Link key={name} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-center">
                  <p className="font-medium text-slate-700 text-sm">{name}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Related Calgary Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary (Hub)" },
                { href: "/commercial-video-production-calgary", label: "Commercial Video Production Calgary" },
                { href: "/social-media-video-production-calgary", label: "Social Media Video Calgary" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production Calgary" },
                { href: "/use-cases/ecommerce-product-videos", label: "E-Commerce Product Videos" },
                { href: "/contact", label: "Get a Product Video Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Product Videos That Sell — Calgary</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">From product demo to purchase — video is your most powerful sales tool. Start for $500.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Get a Product Video</Link>
              <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call Now</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
