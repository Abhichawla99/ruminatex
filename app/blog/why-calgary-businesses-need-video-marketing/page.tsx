import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Every Calgary Business Needs Video Marketing in 2025",
  description: "Video marketing stats, Calgary market insights, and why businesses that invest in video grow faster. The case for video marketing for Calgary SMBs in 2025.",
  keywords: ["video marketing Calgary", "why Calgary businesses need video", "video marketing strategy Calgary", "Calgary business video content"],
  openGraph: {
    title: "Why Every Calgary Business Needs Video Marketing in 2025",
    description: "The data-backed case for video marketing for Calgary businesses. Why video wins and how to start for $500.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Every Calgary Business Needs Video Marketing in 2025",
  description: "Video marketing stats and Calgary market insights for local businesses.",
  author: { "@type": "Organization", name: "Ruminate X" },
  publisher: { "@type": "Organization", name: "Ruminate X", url: "https://ruminatex.com" },
  datePublished: "2026-03-08",
  dateModified: "2026-03-08",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary Video Marketing · March 2025</p>
          <h1 className="text-5xl font-bold mb-6 text-slate-900 leading-tight">
            Why Every Calgary Business Needs Video Marketing in 2025
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            Your Calgary competitors are investing in video. Calgary consumers expect it. And the businesses that produce video consistently are growing faster than those that don't. Here's why — and how to get started for $500.
          </p>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">The Calgary Consumer Has Changed</h2>
            <p className="text-lg text-slate-700 mb-6">
              Calgary's consumers are spending 2–4 hours per day consuming video content. TikTok, Instagram Reels, YouTube, and streaming have fundamentally changed how Calgarians discover, evaluate, and buy from businesses. The question is no longer whether video works. It's whether your business is in the feed or invisible.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { stat: "82%", label: "Of all internet traffic is video in 2025" },
                { stat: "5x", label: "More engagement vs static social posts" },
                { stat: "3x", label: "Higher website conversion with video" },
                { stat: "88%", label: "Of marketers say video delivers positive ROI" },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-red-50 border border-red-200 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-red-600 mb-1">{stat}</p>
                  <p className="text-slate-600 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Video Marketing by Calgary Industry</h2>
            <div className="space-y-5">
              {[
                { industry: "Calgary Restaurants & Hospitality", insight: "Restaurants with regular video content see 60% more reservation inquiries. Calgary's competitive dining scene on 17th Ave and Kensington demands video presence.", href: "/video-production-calgary-restaurants" },
                { industry: "Calgary Real Estate", insight: "Listings with video get 73% more inquiries. In Calgary's active market, a real estate video pays for itself on the first inquiry.", href: "/video-production-calgary-real-estate" },
                { industry: "Calgary Oil & Gas", insight: "Energy companies using video for investor relations, safety training, and brand building communicate more effectively and retain talent better than those that don't.", href: "/video-production-calgary-oil-gas" },
                { industry: "Calgary Tech & SaaS", insight: "SaaS products with explainer videos convert 15–20% better than text-only product pages. For Calgary tech startups, video is the fastest path from unknown to funded.", href: "/video-production-calgary-tech" },
                { industry: "Calgary Small Business", insight: "A 60-second brand video on Google Business Profile increases website clicks by 35%. For a Calgary small business, that's the equivalent of a full-page Yellow Pages ad — but effective.", href: "/video-production-calgary-small-business" },
              ].map(({ industry, insight, href }) => (
                <div key={industry} className="border border-slate-200 rounded-lg p-5">
                  <h3 className="font-bold text-slate-900 mb-2">
                    <Link href={href} className="hover:text-red-600 transition">{industry}</Link>
                  </h3>
                  <p className="text-slate-600 text-sm">{insight}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">The Calgary Video Gap</h2>
            <p className="text-lg text-slate-700 mb-6">
              Most Calgary businesses know they need video. But traditional Calgary video agencies charge $15,000–$50,000 per video — pricing most SMBs out of the market entirely. The result: a massive content gap between large Calgary corporations and everyone else.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              AI production closes that gap. Ruminate X produces broadcast-quality video for $500–$3,000. For the first time, every Calgary business — from a Kensington café to a Mount Royal real estate agent — can compete with large companies on video.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-slate-700 font-medium">The Calgary businesses winning right now aren't the ones with the biggest budgets. They're the ones producing the most video — consistently, affordably, and at broadcast quality.</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Where to Start</h2>
            <p className="text-lg text-slate-700 mb-4">The highest-ROI video for a Calgary business depends on your stage:</p>
            <div className="space-y-3">
              {[
                { stage: "Just starting", rec: "A 60–90 second brand explainer for your website and Google Business Profile — from $500", href: "/brand-film-production-calgary" },
                { stage: "Building an audience", rec: "A monthly social video package (8–12 videos/month) for TikTok, Instagram, and YouTube — from $2,400/mo", href: "/social-media-video-production-calgary" },
                { stage: "Ready to advertise", rec: "A digital commercial for YouTube, Instagram, and programmatic — from $600", href: "/commercial-video-production-calgary" },
                { stage: "Scaling", rec: "A brand film suite — hero brand film + social cuts + product demos — from $3,500", href: "/brand-film-production-calgary" },
              ].map(({ stage, rec, href }) => (
                <div key={stage} className="flex gap-4 border border-slate-200 p-4 rounded-lg">
                  <span className="text-red-600 font-bold flex-shrink-0">→</span>
                  <div>
                    <span className="font-bold text-slate-900">{stage}: </span>
                    <Link href={href} className="text-slate-600 hover:text-red-600 transition">{rec}</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">More Calgary Video Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary Hub" },
                { href: "/blog/how-much-does-video-production-cost-calgary", label: "Video Production Cost in Calgary" },
                { href: "/blog/best-video-production-companies-calgary", label: "Best Calgary Video Companies" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production Calgary" },
                { href: "/roi-calculator", label: "Calculate Your Video ROI" },
                { href: "/contact", label: "Start Your Calgary Video Project" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Start Your Calgary Video Strategy Today</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Broadcast-quality video from $500. The fastest way to close the gap between your Calgary business and your competition.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Start Today</Link>
              <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call (587) 804-9266</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
