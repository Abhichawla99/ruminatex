import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Non-Profit Video Production Calgary | Charity & NGO Video | Ruminate X",
  description: "Affordable video production for Calgary non-profits, charities, and social enterprises. Impact stories, fundraising videos, and donor campaigns from $400. Special rates available. Call (587) 804-9266.",
  keywords: ["nonprofit video production Calgary", "charity video Calgary", "non-profit video Calgary", "fundraising video Calgary", "NGO video production Calgary"],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Non-Profit</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">Non-Profit Video Production Calgary</h1>
        <p className="text-xl text-slate-600 mb-4">Impact stories, fundraising appeals, volunteer recruitment, and donor engagement videos for Calgary non-profits and charities. Special rates for registered Calgary non-profit organizations — from $400.</p>
        <div className="flex flex-wrap gap-4 mb-12">
          <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Non-Profit Video Quote</Link>
          <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Non-Profit Video Services — Calgary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { type: "Impact Story Videos", desc: "Emotional, compelling stories of the people your Calgary organization helps. Your most powerful fundraising asset.", price: "From $600" },
              { type: "Fundraising Campaign Videos", desc: "Annual appeal, campaign launch, and giving day videos that move Calgary donors to act.", price: "From $700" },
              { type: "Volunteer Recruitment Videos", desc: "Show what it's like to volunteer with your Calgary organization. Attract passionate, committed volunteers.", price: "From $500" },
              { type: "Donor Thank You Videos", desc: "Personal, heartfelt thank-you videos that retain Calgary donors and increase lifetime giving.", price: "From $400" },
              { type: "Program Explainer Videos", desc: "Clearly explain what your Calgary non-profit does and how donor funds are used.", price: "From $500" },
              { type: "Annual Report Videos", desc: "Turn your Calgary non-profit's annual impact into an engaging video that boards and donors actually watch.", price: "From $700" },
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
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-2">Special Rates for Calgary Non-Profits</h3>
            <p className="text-slate-700">We offer discounted rates for registered Canadian non-profit organizations and charities based in Calgary. Contact us to discuss your organization's needs and budget.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Related Calgary Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/video-production-calgary", label: "Video Production Calgary Hub" },
              { href: "/affordable-video-production-calgary", label: "Affordable Video Calgary" },
              { href: "/video-production-calgary-small-business", label: "Small Business Video Calgary" },
              { href: "/ai-video-production-nonprofits", label: "AI Video for Non-Profits" },
              { href: "/brand-film-production-calgary", label: "Brand Film Calgary" },
              { href: "/contact", label: "Get a Non-Profit Video Quote" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-2">Amplify Your Calgary Mission With Video</h2>
          <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
          <p className="text-slate-300 mb-8">Affordable impact videos for Calgary non-profits. Special rates for registered charities.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Get a Quote</Link>
            <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call Now</a>
          </div>
        </section>
      </div>
    </main>
  );
}
