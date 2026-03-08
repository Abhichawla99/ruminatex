import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Video Production for Nonprofits: Tell Your Story for Less",
  description: "Nonprofits and NGOs get broadcast-quality brand films, fundraising videos, and donor content at prices built for mission-driven organizations.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">Nonprofits & NGOs</p>
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          AI Video Production for Nonprofits: Tell Your Story for Less
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Your mission deserves to be seen. Nonprofit video production shouldn't cost what for-profit agencies charge. AI makes world-class storytelling accessible to every organization.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Video Matters for Nonprofits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "57%", desc: "of people who watch a nonprofit video go on to donate" },
              { stat: "4x", desc: "more likely to share video content than text-based content" },
              { stat: "2x", desc: "higher donor conversion rate for campaigns with video" },
            ].map(({ stat, desc }) => (
              <div key={stat} className="bg-blue-50 p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat}</p>
                <p className="text-slate-700 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Video Types Nonprofits Need</h2>
          <div className="space-y-6">
            {[
              { type: "Fundraising Films", desc: "Compelling donor appeals that show impact and inspire giving. The most important video any nonprofit can have.", link: "/ai-brand-film-agency" },
              { type: "Impact Report Videos", desc: "Annual reports come alive on video. Show donors exactly what their money achieved.", link: "/solutions/fast-explainer-videos" },
              { type: "Program Explainers", desc: "Help donors, volunteers, and stakeholders understand your programs clearly.", link: "/guides/how-to-create-explainer-videos-with-ai" },
              { type: "Volunteer Recruitment", desc: "Show potential volunteers what it's like to work with your organization. Attract the right people.", link: "/solutions/professional-product-demo" },
              { type: "Grant Application Videos", desc: "Stand out in competitive grant applications with a professional video that tells your story.", link: "/ai-commercial-production" },
              { type: "Social Media Awareness Campaigns", desc: "Drive awareness and sharing with emotionally resonant short-form video content.", link: "/ai-social-media-video-agency" },
            ].map(({ type, desc, link }) => (
              <div key={type} className="border-l-4 border-blue-500 pl-6 py-2">
                <h3 className="font-bold text-slate-900 mb-1">
                  <Link href={link} className="hover:text-blue-600">{type} →</Link>
                </h3>
                <p className="text-slate-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Nonprofit-Friendly Pricing</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
            <p className="text-lg text-slate-700 mb-6">Traditional agencies charge nonprofits the same rates as corporations. We don't.</p>
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-700">Traditional agency fundraising film</span>
                <span className="font-bold text-red-600">$15,000–$40,000</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-700">Ruminate X fundraising film</span>
                <span className="font-bold text-green-600">$800–$2,500</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-bold text-slate-900">More budget for your mission</span>
                <span className="font-bold text-green-600">$13,000–$37,500 saved</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">More Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/solutions/cut-video-production-costs", label: "See Full Cost Savings" },
              { href: "/solutions/multilingual-voiceovers", label: "Reach Global Donors in 140+ Languages" },
              { href: "/guides/video-marketing-strategy-ai", label: "Video Strategy for Nonprofits" },
              { href: "/roi-calculator", label: "Calculate Your Budget Impact" },
              { href: "/faq-ai-video-production", label: "Common Questions" },
              { href: "/contact", label: "Talk to Us" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-slate-700 font-medium">→ {label}</Link>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Your Mission Deserves to Be Seen</h2>
          <p className="text-slate-300 mb-8">Tell your story with the same quality as the biggest brands — at prices built for organizations doing good in the world.</p>
          <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Start Your Story</Link>
        </section>
      </div>
    </main>
  );
}
