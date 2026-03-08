import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Video Marketing Strategy: Planning Your Content Calendar",
  description: "Strategy guide for planning AI video content. Calendar templates, content types, and distribution channels.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          AI Video Marketing Strategy: Planning Your Content Calendar
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Strategic framework for planning, producing, and distributing AI videos. Calendar templates, content types, and ROI tracking.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Video Marketing Strategy Framework</h2>

          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Step 1: Audience & Goals</h3>
              <ul className="space-y-1 text-slate-700 text-sm">
                <li>• Who are you targeting?</li>
                <li>• What action do you want them to take?</li>
                <li>• What's success? (views, leads, sales)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Step 2: Content Planning</h3>
              <ul className="space-y-1 text-slate-700 text-sm">
                <li>• Product videos (demos, features)</li>
                <li>• Educational content (tutorials, how-to)</li>
                <li>• Testimonials & case studies</li>
                <li>• Behind-the-scenes content</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Step 3: Distribution Channels</h3>
              <ul className="space-y-1 text-slate-700 text-sm">
                <li>• YouTube (long-form)</li>
                <li>• LinkedIn (professional, B2B)</li>
                <li>• TikTok/Instagram Reels (short-form)</li>
                <li>• Email campaigns</li>
                <li>• Your website</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Step 4: Measurement & Optimization</h3>
              <ul className="space-y-1 text-slate-700 text-sm">
                <li>• Views & engagement</li>
                <li>• Click-through rate</li>
                <li>• Conversion rate</li>
                <li>• ROI per video</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Sample Content Calendar</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-300 text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-300 p-2">Week</th>
                  <th className="border border-slate-300 p-2">Video Type</th>
                  <th className="border border-slate-300 p-2">Topic</th>
                  <th className="border border-slate-300 p-2">Channel</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-2">Week 1</td>
                  <td className="border border-slate-300 p-2">Product Demo</td>
                  <td className="border border-slate-300 p-2">Feature Overview</td>
                  <td className="border border-slate-300 p-2">YouTube, LinkedIn</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-2">Week 2</td>
                  <td className="border border-slate-300 p-2">Tutorial</td>
                  <td className="border border-slate-300 p-2">How-To: Getting Started</td>
                  <td className="border border-slate-300 p-2">YouTube, Website</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-2">Week 3</td>
                  <td className="border border-slate-300 p-2">Shorts</td>
                  <td className="border border-slate-300 p-2">Quick Tips (5 videos)</td>
                  <td className="border border-slate-300 p-2">TikTok, Instagram</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-2">Week 4</td>
                  <td className="border border-slate-300 p-2">Case Study</td>
                  <td className="border border-slate-300 p-2">Customer Success Story</td>
                  <td className="border border-slate-300 p-2">LinkedIn, Email</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Plan Your Video Strategy</h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Get Strategy Consultation
          </button>
        </section>
      </div>
    </main>
  );
}
