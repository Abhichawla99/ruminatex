import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fitness & Gym Video Production Calgary | Health & Wellness Video | Ruminate X",
  description: "Video production for Calgary gyms, fitness studios, personal trainers, and wellness brands. Social media content, brand videos, and class promos from $400. Call (587) 804-9266.",
  keywords: ["fitness video production Calgary", "gym video Calgary", "personal trainer video Calgary", "Calgary fitness marketing video", "yoga studio video Calgary"],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fitness Video Production Calgary",
  provider: { "@type": "LocalBusiness", name: "Ruminate X", telephone: "+15878049266", address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" } },
  areaServed: { "@type": "City", name: "Calgary" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Fitness & Wellness</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">Fitness Video Production Calgary</h1>
          <p className="text-xl text-slate-600 mb-4">High-energy video for Calgary gyms, fitness studios, personal trainers, and wellness brands. Social content, brand videos, and class promos that grow memberships — from $400.</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Fitness Video Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Fitness Video Services — Calgary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "Gym Brand Films", desc: "Show what makes your Calgary gym or studio different. Attract members who fit your culture.", price: "From $600" },
                { type: "Class & Program Promos", desc: "Promo videos for new fitness classes, training programs, and challenges at your Calgary studio.", price: "From $400" },
                { type: "Personal Trainer Videos", desc: "Build your personal training brand in Calgary with professional videos that attract premium clients.", price: "From $400" },
                { type: "Social Media Content Packs", desc: "Monthly video content for your Calgary fitness brand — workout highlights, tips, challenges, and more.", price: "From $1,200/mo" },
                { type: "Transformation & Results", desc: "Client success and transformation videos that are your most powerful sales content.", price: "From $500" },
                { type: "Online Course & Program Videos", desc: "Video content for Calgary fitness professionals launching online programs and digital courses.", price: "From $600" },
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
                { href: "/social-media-video-production-calgary", label: "Social Media Video Calgary" },
                { href: "/video-production-calgary-small-business", label: "Small Business Video Calgary" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Calgary" },
                { href: "/video-production-calgary-healthcare", label: "Healthcare Video Calgary" },
                { href: "/contact", label: "Get a Fitness Video Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Grow Your Calgary Fitness Brand With Video</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">High-energy video for Calgary gyms and fitness brands. From $400.</p>
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
