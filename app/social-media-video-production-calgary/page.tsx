import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Media Video Production Calgary | TikTok, Instagram, YouTube | Ruminate X",
  description: "Social media video production in Calgary. TikTok, Instagram Reels, YouTube Shorts, and Facebook video from $400. AI-powered content that grows Calgary brands. Call (587) 804-9266.",
  keywords: ["social media video production Calgary", "Calgary TikTok video", "Instagram Reels Calgary", "YouTube video Calgary", "social media content Calgary"],
  openGraph: {
    title: "Social Media Video Production Calgary | Ruminate X",
    description: "TikTok, Instagram, YouTube video for Calgary brands. AI-powered, from $400, delivered fast.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Video Production Calgary",
  provider: {
    "@type": "LocalBusiness",
    name: "Ruminate X",
    address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
    telephone: "+15878049266",
  },
  areaServed: { "@type": "City", name: "Calgary" },
  description: "AI-powered social media video production for Calgary brands. TikTok, Instagram Reels, YouTube Shorts, and more.",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Social Media Video</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Social Media Video Production Calgary
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            TikTok, Instagram Reels, YouTube Shorts, and Facebook video for Calgary brands. AI-produced content that grows your following and drives sales — from $400.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Start Creating Content</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { stat: "$400", label: "Starting price" },
              { stat: "24hrs", label: "Turnaround" },
              { stat: "9:16", label: "Vertical ready" },
              { stat: "YYC", label: "Calgary based" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-slate-900">{stat}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Social Media Platforms We Produce For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { platform: "TikTok Videos", desc: "Trending-style vertical videos built for TikTok's Calgary audience. Short, punchy, and algorithm-friendly.", format: "9:16 · 15–60 sec", price: "From $400" },
                { platform: "Instagram Reels", desc: "Polished Reels that showcase your Calgary brand aesthetically. Built for saves, shares, and follows.", format: "9:16 · 15–90 sec", price: "From $400" },
                { platform: "YouTube Shorts", desc: "Vertical YouTube content that gets discovered and drives subscribers to your Calgary business channel.", format: "9:16 · up to 60 sec", price: "From $400" },
                { platform: "YouTube Long-Form", desc: "Full-length YouTube videos — tutorials, brand docs, product reviews — for building a Calgary audience.", format: "16:9 · 3–20 min", price: "From $800" },
                { platform: "Facebook & LinkedIn Video", desc: "Professional video content optimized for Calgary's business community on Facebook and LinkedIn.", format: "1:1 or 16:9 · 30–120 sec", price: "From $500" },
                { platform: "Content Packages", desc: "Monthly social video packages — 8, 12, or 20 videos per month for consistent Calgary brand presence.", format: "All formats", price: "From $2,400/mo" },
              ].map(({ platform, desc, format, price }) => (
                <div key={platform} className="border border-slate-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-900">{platform}</h3>
                    <span className="text-red-600 font-bold text-sm">{price}</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-2">{desc}</p>
                  <p className="text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded inline-block">{format}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Calgary Brands Need Social Video</h2>
            <p className="text-lg text-slate-700 mb-6">
              Calgary consumers spend 2–4 hours per day on social media. Video content gets 5x more engagement than static posts. If your Calgary business isn't producing regular video content, you're invisible.
            </p>
            <div className="bg-slate-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <p className="text-slate-700 font-medium">The problem: Traditional Calgary video agencies charge $3,000–$10,000 per social video and take weeks to deliver. We produce social content for $400–$800 per video, delivered the next day.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { stat: "5x", label: "More engagement from video vs static posts" },
                { stat: "82%", label: "Of social media traffic is video in 2025" },
                { stat: "2hrs+", label: "Average Calgary daily social media time" },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-red-50 border border-red-200 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-red-600 mb-1">{stat}</p>
                  <p className="text-slate-600 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Social Video for Calgary Industries</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Calgary Restaurants", href: "/video-production-calgary-restaurants" },
                { name: "Calgary Retail", href: "/ai-video-production-ecommerce" },
                { name: "Calgary Real Estate", href: "/video-production-calgary-real-estate" },
                { name: "Calgary Tech & SaaS", href: "/video-production-calgary-tech" },
                { name: "Calgary Small Business", href: "/video-production-calgary-small-business" },
                { name: "Calgary Oil & Gas", href: "/video-production-calgary-oil-gas" },
              ].map(({ name, href }) => (
                <Link key={name} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-center">
                  <p className="font-medium text-slate-700 text-sm">{name}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Related Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary (Hub)" },
                { href: "/brand-film-production-calgary", label: "Brand Film Production Calgary" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production Calgary" },
                { href: "/guides/social-media-video-shorts", label: "Social Media Video Guide" },
                { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI vs Traditional Agency" },
                { href: "/contact", label: "Start Creating Social Content" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Grow Your Calgary Brand on Social Media</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">TikTok, Instagram, YouTube — consistent social video that makes your Calgary brand impossible to ignore.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Start Creating</Link>
              <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call Now</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
