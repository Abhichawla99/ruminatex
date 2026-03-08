import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Business Video Production Calgary | Affordable Video for Local Business | Ruminate X",
  description: "Video production for Calgary small businesses. Professional video content from $500 that competes with big brands. AI-powered, fast delivery. Serving all Calgary small businesses. Call (587) 804-9266.",
  keywords: ["small business video production Calgary", "Calgary small business video", "affordable video Calgary", "local business video Calgary", "Calgary SMB video production"],
  openGraph: {
    title: "Small Business Video Production Calgary | Ruminate X",
    description: "Professional video for Calgary small businesses from $500. Compete with big brands on a small budget.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Small Business Video Production Calgary",
  provider: {
    "@type": "LocalBusiness",
    name: "Ruminate X",
    address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
    telephone: "+15878049266",
  },
  areaServed: { "@type": "City", name: "Calgary" },
  description: "Affordable AI-powered video production for Calgary small businesses. Professional video content that competes with big brands.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is professional video production affordable for Calgary small businesses?", acceptedAnswer: { "@type": "Answer", text: "Yes. With Ruminate X, Calgary small businesses can get professional video from $500. Traditional Calgary video agencies charge $10,000+ — pricing most small businesses out of video marketing. We built our pricing specifically for the Calgary small business market." } },
    { "@type": "Question", name: "What kind of video should a Calgary small business make first?", acceptedAnswer: { "@type": "Answer", text: "Start with a 60–90 second brand explainer video for your website and Google Business Profile. This is the highest-ROI video for Calgary small businesses — it builds trust, explains what you do, and converts more visitors to customers." } },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Calgary, Alberta · Small Business</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Small Business Video Production Calgary
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            Big-brand video quality on a small business budget. Calgary's AI video studio produces professional content for local businesses from $500 — no film crews, no bloated invoices, no weeks of waiting.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition">Get a Small Business Video Quote</Link>
            <a href="tel:+15878049266" className="border border-slate-300 text-slate-700 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition">Call (587) 804-9266</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { stat: "$500", label: "Starting price" },
              { stat: "48hrs", label: "Turnaround" },
              { stat: "90%", label: "Cost savings" },
              { stat: "YYC", label: "Calgary based" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-slate-900">{stat}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">The Calgary Small Business Video Problem</h2>
            <p className="text-lg text-slate-700 mb-6">
              Calgary's big brands have video budgets of $50,000+. Calgary small businesses have marketing budgets of $2,000–$5,000 per month. Traditional Calgary video agencies won't touch a project under $10,000 — leaving small businesses with no professional video option.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              We built Ruminate X for Calgary small businesses. Professional, cinematic video from $500. The same quality a Bay Street corporation would pay $30,000 for — yours for a fraction of the cost.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-slate-700 font-medium">Every dollar you invest in video generates $3–$6 in return for Calgary small businesses. At $500, it's the highest-ROI marketing investment you can make.</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Video Services Built for Calgary Small Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "Brand Introduction Video", desc: "Tell your Calgary story in 60–90 seconds. Who you are, what you do, and why customers should choose you over the competition.", price: "From $500" },
                { type: "Google Business Profile Video", desc: "A short video for your Google Business Profile that helps Calgary customers find you and trust you before they call.", price: "From $400" },
                { type: "Social Media Starter Pack", desc: "4 videos for Instagram, Facebook, and TikTok that establish your Calgary small business on social media.", price: "From $1,200" },
                { type: "Service Explainer Videos", desc: "Clear, concise explanations of what your Calgary business offers — reduce phone inquiries and close more sales.", price: "From $500" },
                { type: "Seasonal Promotion Videos", desc: "Holiday and seasonal promotions that drive foot traffic and online sales for your Calgary small business.", price: "From $400" },
                { type: "Customer Testimonial Videos", desc: "Turn happy Calgary customers into your most persuasive salespeople with authentic testimonial videos.", price: "From $400" },
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
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Calgary Small Business Types We Work With</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Retail Shops", "Service Businesses", "Restaurants & Cafes", "Contractors & Trades", "Health & Wellness", "Professional Services", "Real Estate Agents", "Fitness Studios", "Beauty & Aesthetics", "Auto Services", "Home & Garden", "Childcare & Education"].map(type => (
                <div key={type} className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-center">
                  <p className="font-medium text-slate-700 text-sm">{type}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">FAQ — Calgary Small Business Video</h2>
            <div className="space-y-6">
              {[
                { q: "Is professional video affordable for a Calgary small business?", a: "Yes. We start at $500 for a professional, broadcast-quality video. Traditional Calgary agencies charge $10,000+ minimum. We were built specifically for Calgary small businesses that can't afford agency rates." },
                { q: "What's the best first video for a Calgary small business?", a: "A 60–90 second brand explainer for your website and Google Business Profile. It's the highest-ROI video — builds trust, reduces bounce rates, and converts more visitors to customers." },
                { q: "Do I need to come into a studio?", a: "No. Everything is done remotely. You send us your business information, photos, and preferences. We produce the video and deliver it digitally. No scheduling, no commuting." },
                { q: "Can I use the video on my Google Business Profile?", a: "Absolutely. All our Calgary small business videos are formatted for Google Business Profile, social media, your website, and email marketing." },
              ].map(({ q, a }) => (
                <div key={q}>
                  <h3 className="font-bold text-slate-900 mb-2">{q}</h3>
                  <p className="text-slate-600">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Related Calgary Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { href: "/video-production-calgary", label: "Video Production Calgary (Hub)" },
                { href: "/affordable-video-production-calgary", label: "Affordable Video Production Calgary" },
                { href: "/video-production-calgary-restaurants", label: "Restaurant Video Calgary" },
                { href: "/social-media-video-production-calgary", label: "Social Media Video Calgary" },
                { href: "/ai-video-production-small-business", label: "AI Video for Small Business" },
                { href: "/contact", label: "Get a Small Business Video Quote" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-red-400 hover:bg-red-50 transition text-slate-700 font-medium">→ {label}</Link>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Your Calgary Small Business Deserves Great Video</h2>
            <p className="text-slate-400 text-sm mb-4">📍 Calgary, AB · (587) 804-9266 · abhi@paperkites.co</p>
            <p className="text-slate-300 mb-8">Professional video from $500. No film crew. No agency markup. Just great video for your Calgary business.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Get a Small Business Video</Link>
              <a href="tel:+15878049266" className="inline-block border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition">Call Now</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
