import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restaurant Video Production Calgary | Food & Hospitality Video | Ruminate X",
  description: "Restaurant video production in Calgary. Food videos, promo videos, social media content for Calgary restaurants and hospitality businesses. From $400. Call (587) 804-9266.",
  keywords: ["restaurant video production Calgary", "Calgary food video", "restaurant promo video Calgary", "food photography video Calgary", "hospitality video Calgary"],
  openGraph: {
    title: "Restaurant Video Production Calgary | Ruminate X",
    description: "Mouthwatering food and restaurant promo videos for Calgary's hospitality scene. AI-powered, from $400.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Restaurant Video Production Calgary",
  provider: {
    "@type": "LocalBusiness",
    name: "Ruminate X",
    address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
    telephone: "+15878049266",
  },
  areaServed: { "@type": "City", name: "Calgary" },
  description: "AI-powered restaurant and food video production for Calgary's hospitality industry.",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Restaurants & Food</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Restaurant Video Production Calgary
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            Make Calgary diners hungry before they walk in the door. Food videos, restaurant promos, and social content that fills tables — AI-powered, from $400.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Restaurant Video Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { stat: "$400", label: "Starting price" },
              { stat: "24hrs", label: "Turnaround" },
              { stat: "60%", label: "More reservations" },
              { stat: "YYC", label: "Calgary based" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-slate-900">{stat}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Restaurant Video Services — Calgary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "Food & Dish Videos", desc: "Cinematic food videos that make your menu irresistible. Perfect for Instagram, TikTok, and your website.", price: "From $400" },
                { type: "Restaurant Promo Videos", desc: "60–90 second promo videos that capture your Calgary restaurant's ambiance, team, and story.", price: "From $600" },
                { type: "Social Media Content Packs", desc: "Monthly content packages — 8–20 food and restaurant videos per month for consistent social presence.", price: "From $1,800/mo" },
                { type: "Menu Launch Videos", desc: "Seasonal menu launches, specials, and new dish announcements designed to drive foot traffic.", price: "From $500" },
                { type: "Chef & Staff Brand Videos", desc: "Showcase the people behind your Calgary restaurant. Build a loyal local following with personal stories.", price: "From $700" },
                { type: "Delivery & Takeout Ads", desc: "UberEats, SkipTheDishes, and DoorDash promotional videos to increase Calgary delivery orders.", price: "From $400" },
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
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Restaurant Neighbourhoods We Serve</h2>
            <p className="text-lg text-slate-700 mb-4">We work with restaurants across every Calgary neighbourhood:</p>
            <div className="flex flex-wrap gap-2">
              {["17th Ave SW", "Kensington", "Mission", "Inglewood", "Chinatown", "East Village", "Beltline", "Marda Loop", "Bridgeland", "Montgomery", "Ramsay", "Hillhurst", "Eau Claire", "Downtown Core"].map(n => (
                <span key={n} className="text-xs px-3 py-1 bg-red-50 text-red-700 rounded-full border border-red-200">{n}</span>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Restaurant Types We Work With</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Fine Dining", "Casual & Family", "Fast Casual", "Cafes & Coffee", "Food Trucks", "Bars & Pubs", "Catering Services", "Bakeries & Desserts", "Ghost Kitchens"].map(type => (
                <div key={type} className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-center">
                  <p className="font-medium text-slate-700 text-sm">{type}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Video Fills Calgary Restaurant Tables</h2>
            <p className="text-lg text-slate-700 mb-6">
              60% of Calgary diners say they decide where to eat based on social media content. A single viral food video can fill your restaurant for weeks. Calgary's competitive restaurant scene means you need to stand out — and video is how you do it.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-slate-700 font-medium">Calgary restaurants that post regular video content see 60% more reservation inquiries and 40% higher social engagement. For $400 per video, that's the highest-ROI marketing you can do.</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Related Calgary Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary (Hub)" },
                { href: "/social-media-video-production-calgary", label: "Social Media Video Calgary" },
                { href: "/video-production-calgary-small-business", label: "Small Business Video Calgary" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production Calgary" },
                { href: "/ai-video-production-hospitality", label: "Hospitality Video Production" },
                { href: "/contact", label: "Get a Restaurant Video Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Fill Your Calgary Restaurant With Video</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Mouthwatering food videos and restaurant promos that pack tables. From $400.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Get a Restaurant Video</Link>
              <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call Now</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
