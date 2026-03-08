import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Video Production for Small Business: Compete with the Big Brands",
  description: "Small businesses get broadcast-quality video content at startup prices. AI video production levels the playing field against bigger competitors.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">Small Business</p>
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          AI Video Production for Small Business: Compete with the Big Brands
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Your competitor with a $500K marketing budget has video everywhere. You don't. AI levels the playing field — broadcast-quality video at prices any small business can afford.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">The Small Business Video Problem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-red-700">The Old Reality</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>✗ Video production: $5,000–$15,000/video</li>
                <li>✗ Affordable only for big brands</li>
                <li>✗ 3–6 weeks to produce one video</li>
                <li>✗ Can't update when messaging changes</li>
                <li>✗ Stuck with text and images while competitors run video ads</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-green-700">The AI Reality</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>✓ Video production: $300–$1,500/video</li>
                <li>✓ Every business can afford it</li>
                <li>✓ 24–48 hours to deliver</li>
                <li>✓ Update messaging anytime, free</li>
                <li>✓ Same video quality as Nike, Apple, and Amazon</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Video Types Small Businesses Need Most</h2>
          <div className="space-y-6">
            {[
              { type: "Website Hero Video", desc: "Replace your homepage static image with a 30–60 second brand video. Increases time-on-site by 88%.", link: "/ai-brand-film-agency" },
              { type: "Google & Facebook Ads", desc: "Video ads outperform image ads 3x. Run 15-second video ads that compete with national brands.", link: "/ai-commercial-production" },
              { type: "Product Explainer", desc: "Show exactly what your product or service does. Reduce customer questions and increase conversion.", link: "/solutions/fast-explainer-videos" },
              { type: "Google Business Profile Video", desc: "Businesses with video get 2x more engagement on Google Maps listings.", link: "/use-cases/saas-video-production" },
              { type: "Social Media Content", desc: "Stay top-of-mind with weekly video content on Instagram, TikTok, and Facebook.", link: "/ai-social-media-video-agency" },
              { type: "Customer Testimonial Videos", desc: "Turn text reviews into compelling video testimonials that build trust instantly.", link: "/solutions/professional-product-demo" },
            ].map(({ type, desc, link }) => (
              <div key={type} className="border-l-4 border-blue-500 pl-6 py-2">
                <h3 className="font-bold text-slate-900 mb-1">
                  <Link href={link} className="hover:text-blue-600 transition">{type} →</Link>
                </h3>
                <p className="text-slate-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Industries We Serve</h2>
          <div className="flex flex-wrap gap-3">
            {["Restaurants", "Retail Shops", "Law Firms", "Dental & Medical", "Real Estate Agents", "Contractors", "Salons & Spas", "Fitness Studios", "Local Services", "Non-profits", "Coaches & Consultants", "Online Stores"].map(i => (
              <span key={i} className="px-4 py-2 border border-slate-200 text-slate-700 text-sm rounded-full hover:border-blue-500 cursor-default">{i}</span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">What $500 Gets You</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
            <p className="text-lg text-slate-700 mb-4">With a traditional agency, $500 buys you a phone consultation and maybe a rough quote.</p>
            <p className="text-lg font-bold text-slate-900 mb-4">With Ruminate X, $500 gets you:</p>
            <ul className="space-y-2 text-slate-700">
              <li>✓ 60–90 second brand video</li>
              <li>✓ Professional AI voiceover</li>
              <li>✓ Custom branding (logo, colors, fonts)</li>
              <li>✓ Captions for social media</li>
              <li>✓ Multiple format exports (landscape + vertical)</li>
              <li>✓ Unlimited revisions</li>
              <li>✓ Delivered in 48 hours</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">More to Explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/roi-calculator", label: "Calculate Your ROI" },
              { href: "/solutions/cut-video-production-costs", label: "See the Cost Savings" },
              { href: "/guides/how-to-create-explainer-videos-with-ai", label: "How AI Video Works" },
              { href: "/comparison/ai-agency-vs-traditional-agency", label: "AI vs Traditional Agency" },
              { href: "/faq-ai-video-production", label: "Common Questions" },
              { href: "/contact", label: "Get a Quote" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-slate-700 font-medium">→ {label}</Link>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Small Business Pricing That Actually Makes Sense</h2>
          <p className="text-slate-300 mb-8">Professional video content without agency pricing. Built for businesses that are hungry to grow.</p>
          <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Start a Project</Link>
        </section>
      </div>
    </main>
  );
}
