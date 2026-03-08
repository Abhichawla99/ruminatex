import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "White Label AI Video Production for Agencies | Scale Without Hiring",
  description: "Marketing agencies use Ruminate X as their white-label AI video production partner. Deliver more for clients, faster, without expanding your team.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">Agency Partners</p>
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          White Label AI Video Production for Agencies
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Your clients need video. You don't have a production team. Ruminate X is your silent AI production partner — you sell it, we build it, everyone wins.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">The Agency Opportunity</h2>
          <p className="text-lg text-slate-700 mb-6">Video is the #1 content format clients want in 2026. Most marketing, PR, and creative agencies can't deliver it efficiently:</p>
          <ul className="space-y-3 text-lg text-slate-700">
            <li className="flex gap-3"><span className="text-red-500">✗</span> No in-house video team (too expensive to maintain)</li>
            <li className="flex gap-3"><span className="text-red-500">✗</span> Subcontracting to video agencies eats your margin</li>
            <li className="flex gap-3"><span className="text-red-500">✗</span> Freelancers are unreliable at scale</li>
            <li className="flex gap-3"><span className="text-red-500">✗</span> You're leaving money on the table every month</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">How the Partnership Works</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "You sell video services to your client", desc: "At your rates, with your branding. You handle the client relationship." },
              { step: "2", title: "You brief us", desc: "Send us the creative brief, brand assets, and script. We handle everything from here." },
              { step: "3", title: "We produce in 24–48 hours", desc: "AI-powered production delivers broadcast-quality video fast. No filming. No delays." },
              { step: "4", title: "You deliver to the client", desc: "Unbranded files, white-label delivery. Your client sees your agency name, not ours." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-6 items-start">
                <div className="bg-slate-900 text-[#ebff00] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">{step}</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{title}</h3>
                  <p className="text-slate-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">What You Can Offer Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { service: "Brand Films", link: "/ai-brand-film-agency" },
              { service: "Product Demo Videos", link: "/solutions/professional-product-demo" },
              { service: "Social Media Content", link: "/ai-social-media-video-agency" },
              { service: "AI Commercials", link: "/ai-commercial-production" },
              { service: "Explainer Videos", link: "/guides/how-to-create-explainer-videos-with-ai" },
              { service: "Training & Onboarding Videos", link: "/use-cases/educational-training-videos" },
            ].map(({ service, link }) => (
              <Link key={service} href={link} className="block border border-slate-200 p-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-slate-700 font-medium">→ {service}</Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">The Margin Math</h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg">
            <div className="space-y-4 text-slate-700">
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span>What you charge client</span>
                <span className="font-bold">$3,000 per video</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span>What you pay Ruminate X</span>
                <span className="font-bold">$800 per video</span>
              </div>
              <div className="flex justify-between py-2 text-xl">
                <span className="font-bold text-green-700">Your margin</span>
                <span className="font-bold text-green-700">$2,200 (73%)</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm mt-4">Scale to 10 videos/month = $22,000/month in pure margin with no additional headcount.</p>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-4">Become a Ruminate X Agency Partner</h2>
          <p className="text-slate-300 mb-8">Add video production to your service stack. We handle production, you handle the client, everyone makes money.</p>
          <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Partner With Us</Link>
        </section>
      </div>
    </main>
  );
}
