import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Video Generator Tools Compared 2026: Complete Guide",
  description: "Comparison of top AI video generators: Synthesia, InVideo, HeyGen, Pictory, Canva, and more. Pros, cons, pricing.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          Best AI Video Generator Tools Compared 2026: Complete Guide
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Compare top AI video generation tools. Pricing, features, pros/cons, and best use cases for each.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Top AI Video Tools Comparison</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Synthesia</h3>
              <p className="text-slate-700 mb-2"><strong>Best for:</strong> Corporate videos with avatars</p>
              <ul className="space-y-1 text-slate-700 text-sm mb-2">
                <li>• AI avatars (talk to camera)</li>
                <li>• Text-to-speech in 140+ languages</li>
                <li>• Enterprise-focused</li>
              </ul>
              <p className="text-slate-600 text-sm"><strong>Pricing:</strong> $30–$500+/month</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">InVideo</h3>
              <p className="text-slate-700 mb-2"><strong>Best for:</strong> Social media & marketing videos</p>
              <ul className="space-y-1 text-slate-700 text-sm mb-2">
                <li>• Quick video creation</li>
                <li>• 5,000+ templates</li>
                <li>• Social-optimized</li>
              </ul>
              <p className="text-slate-600 text-sm"><strong>Pricing:</strong> $25–$200/month</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">HeyGen</h3>
              <p className="text-slate-700 mb-2"><strong>Best for:</strong> Realistic avatar videos</p>
              <ul className="space-y-1 text-slate-700 text-sm mb-2">
                <li>• Lifelike avatars</li>
                <li>• Lip-sync technology</li>
                <li>• Personalized videos at scale</li>
              </ul>
              <p className="text-slate-600 text-sm"><strong>Pricing:</strong> $20–$99/month</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Pictory</h3>
              <p className="text-slate-700 mb-2"><strong>Best for:</strong> Converting long-form to shorts</p>
              <ul className="space-y-1 text-slate-700 text-sm mb-2">
                <li>• Long-to-short video automation</li>
                <li>• Auto-captions</li>
                <li>• Script-based video</li>
              </ul>
              <p className="text-slate-600 text-sm"><strong>Pricing:</strong> $19–$99/month</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Canva</h3>
              <p className="text-slate-700 mb-2"><strong>Best for:</strong> Beginners & small teams</p>
              <ul className="space-y-1 text-slate-700 text-sm mb-2">
                <li>• Easy-to-use interface</li>
                <li>• 10,000+ templates</li>
                <li>• Affordable pricing</li>
              </ul>
              <p className="text-slate-600 text-sm"><strong>Pricing:</strong> Free–$15/month</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Choosing the Right Tool</h2>
          <div className="space-y-4 text-lg text-slate-700">
            <p><strong>For SaaS:</strong> Synthesia or HeyGen (avatars, professional)</p>
            <p><strong>For marketing:</strong> InVideo or Pictory (templates, quick setup)</p>
            <p><strong>For social media:</strong> Pictory or Canva (shorts, easy)</p>
            <p><strong>For startups:</strong> Canva or InVideo (affordable, fast)</p>
            <p><strong>For enterprises:</strong> Synthesia (security, scalability)</p>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Find Your Perfect AI Video Tool</h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Compare Tools Now
          </button>
        </section>
      </div>
    </main>
  );
}
