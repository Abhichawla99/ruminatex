import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Video Production Canada: Calgary Studio, Nationwide Reach",
  description: "Canada's AI video production agency. Based in Calgary, serving Toronto, Vancouver, Montreal, Ottawa, and every Canadian market with broadcast-quality video.",
};

const cities = [
  { name: "Toronto", href: "/toronto", desc: "Canada's largest city and tech hub" },
  { name: "Vancouver", href: "/contact", desc: "Film capital of Canada" },
  { name: "Calgary", href: "/contact", desc: "Our home base — Alberta's business capital" },
  { name: "Montreal", href: "/contact", desc: "Canada's creative and cultural centre" },
  { name: "Ottawa", href: "/contact", desc: "Government and tech corridor" },
  { name: "Edmonton", href: "/contact", desc: "Northern Alberta's growing economy" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">Canada</p>
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          AI Video Production Canada: World-Class Content, Made in Calgary
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Ruminate X is Canada's AI video production studio. Based in Calgary, we serve brands from Vancouver to Halifax — delivering cinematic brand films, commercials, and digital content at a fraction of traditional agency costs.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Canadian Brands Trust AI Production</h2>
          <p className="text-lg text-slate-700 mb-6">
            Canadian brands have historically had two choices: overpay a Toronto or Vancouver agency, or sacrifice quality. AI production breaks that tradeoff entirely.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "80–95%", label: "Less than traditional Canadian agencies" },
              { stat: "48hrs", label: "Delivery anywhere in Canada" },
              { stat: "140+", label: "Languages (English, French + global)" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-red-50 border border-red-100 p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-red-600 mb-2">{stat}</p>
                <p className="text-slate-700 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Cities We Serve Across Canada</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cities.map(({ name, href, desc }) => (
              <Link key={name} href={href} className="block border border-slate-200 p-5 rounded-lg hover:border-red-400 hover:bg-red-50 transition">
                <p className="font-bold text-slate-900">{name}</p>
                <p className="text-slate-600 text-sm">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Industries Across Canada</h2>
          <div className="space-y-4">
            {[
              { industry: "Canadian Tech & SaaS", href: "/ai-video-production-saas" },
              { industry: "Oil & Gas / Energy Sector", href: "/ai-commercial-production" },
              { industry: "Canadian E-Commerce Brands", href: "/ai-video-production-ecommerce" },
              { industry: "Real Estate Across Canada", href: "/ai-video-production-real-estate" },
              { industry: "Canadian Financial Services", href: "/ai-video-production-finance" },
              { industry: "Healthcare & Life Sciences", href: "/ai-video-production-healthcare" },
            ].map(({ industry, href }) => (
              <Link key={industry} href={href} className="flex items-center justify-between border border-slate-200 p-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition">
                <span className="text-slate-700 font-medium">{industry}</span>
                <span className="text-blue-600">→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Canadian Brands Choose Ruminate X</h2>
          <div className="space-y-4">
            {[
              { title: "We're Canadian", desc: "Based in Calgary. We understand your market, your audience, and your brand voice." },
              { title: "Bilingual production", desc: "English and French versions of every video at no extra cost. Reach all of Canada." },
              { title: "No big-agency overhead", desc: "Toronto and Vancouver agencies charge for their downtown offices and large teams. We don't." },
              { title: "Serving global markets too", desc: "Need to reach the US, UK, or international markets? We do that too.", link: "/contact" },
            ].map(({ title, desc }) => (
              <div key={title} className="border-l-4 border-red-400 pl-6 py-2">
                <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                <p className="text-slate-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/toronto", label: "AI Video Production Toronto" },
              { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI vs Traditional Agency" },
              { href: "/solutions/cut-video-production-costs", label: "Cut Costs 80%" },
              { href: "/roi-calculator", label: "ROI Calculator" },
              { href: "/markets/ai-video-production-uk", label: "AI Video Production UK" },
              { href: "/contact", label: "Start a Canadian Project" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-slate-700 font-medium">→ {label}</Link>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Canada's AI Video Production Studio</h2>
          <p className="text-slate-300 mb-8">From Calgary to coast to coast. Tell your story with the quality it deserves.</p>
          <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Start a Canadian Project</Link>
        </section>
      </div>
    </main>
  );
}
