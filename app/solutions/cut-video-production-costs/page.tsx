import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cut Video Production Costs by 80% While Improving Quality",
  description: "Reduce video production costs from $5K-$50K to $500-$3K per video using AI. Save 80% while maintaining broadcast quality.",
  openGraph: {
    title: "Cut Video Production Costs by 80% | Ruminate X",
    description: "AI video production costs 80% less than traditional methods while improving quality.",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          Cut Video Production Costs by 80% While Improving Quality
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Learn how AI-powered video production reduces costs from $5K–$50K per video to $500–$3K while delivering broadcast-quality results. Perfect for startups and SMBs scaling content without breaking budget.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">The Cost Breakdown: Traditional vs. AI Video Production</h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-slate-300">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-300 p-4 text-left font-bold">Cost Component</th>
                  <th className="border border-slate-300 p-4 text-left font-bold">Traditional Agency</th>
                  <th className="border border-slate-300 p-4 text-left font-bold">AI Production</th>
                  <th className="border border-slate-300 p-4 text-left font-bold">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-4">Director & Creative</td>
                  <td className="border border-slate-300 p-4">$2,000–$5,000</td>
                  <td className="border border-slate-300 p-4">Included in software</td>
                  <td className="border border-slate-300 p-4 text-green-600 font-bold">$2,000–$5,000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-4">Cinematographer & Camera Crew</td>
                  <td className="border border-slate-300 p-4">$3,000–$10,000</td>
                  <td className="border border-slate-300 p-4">$0</td>
                  <td className="border border-slate-300 p-4 text-green-600 font-bold">$3,000–$10,000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-4">Equipment & Location Rental</td>
                  <td className="border border-slate-300 p-4">$2,000–$8,000</td>
                  <td className="border border-slate-300 p-4">$0</td>
                  <td className="border border-slate-300 p-4 text-green-600 font-bold">$2,000–$8,000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-4">Post-Production & Editing</td>
                  <td className="border border-slate-300 p-4">$1,500–$5,000</td>
                  <td className="border border-slate-300 p-4">Included in software</td>
                  <td className="border border-slate-300 p-4 text-green-600 font-bold">$1,500–$5,000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-4">Sound & Music</td>
                  <td className="border border-slate-300 p-4">$500–$2,000</td>
                  <td className="border border-slate-300 p-4">$100–$500</td>
                  <td className="border border-slate-300 p-4 text-green-600 font-bold">$0–$1,500</td>
                </tr>
                <tr className="bg-blue-100 font-bold">
                  <td className="border border-slate-300 p-4">Total per Video</td>
                  <td className="border border-slate-300 p-4">$9,000–$30,000</td>
                  <td className="border border-slate-300 p-4">$500–$1,500</td>
                  <td className="border border-slate-300 p-4 text-green-600">85–95% Savings</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-slate-700 bg-blue-50 p-6 rounded-lg">
            <strong>Bottom line:</strong> A single AI video platform costs $30–$100/month and includes unlimited video generation. Traditional agencies charge $5K–$50K per video. ROI breaks even after 1–2 videos.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Where the 80% Savings Come From</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">1. No Crew Costs</h3>
              <p className="text-slate-700 mb-2">
                AI eliminates the need for directors, cinematographers, camera operators, sound engineers, and gaffers. One person manages the entire workflow.
              </p>
              <p className="text-slate-600">
                <strong>Savings:</strong> $5,000–$15,000 per video
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">2. Zero Equipment & Location Costs</h3>
              <p className="text-slate-700 mb-2">
                No camera rental, studio fees, lighting rigs, or location scouting. Create professional video from any device.
              </p>
              <p className="text-slate-600">
                <strong>Savings:</strong> $2,000–$8,000 per video
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">3. Instant Post-Production</h3>
              <p className="text-slate-700 mb-2">
                AI handles editing, color grading, transitions, and effects automatically. No weeks of post-production labor.
              </p>
              <p className="text-slate-600">
                <strong>Savings:</strong> $1,500–$5,000 per video
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">4. AI Voiceovers Replace Voice Actors</h3>
              <p className="text-slate-700 mb-2">
                Professional AI voiceovers in 140+ languages. No voice actor rates, studio time, or ADR (automated dialogue replacement) sessions.
              </p>
              <p className="text-slate-600">
                <strong>Savings:</strong> $500–$2,000 per video
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">5. Scalable Subscription vs. Per-Project Costs</h3>
              <p className="text-slate-700 mb-2">
                AI platforms cost $30–$100/month for unlimited videos. Traditional agencies charge per project with no reuse.
              </p>
              <p className="text-slate-600">
                <strong>Savings:</strong> 95%+ when producing multiple videos annually
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Cost Comparison by Video Type</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Explainer Video</h3>
              <div className="space-y-2">
                <p><span className="font-bold">Traditional:</span> $5K–$15K</p>
                <p><span className="font-bold">AI:</span> $200–$500</p>
                <p className="text-green-600 font-bold">Savings: 96%</p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Product Demo</h3>
              <div className="space-y-2">
                <p><span className="font-bold">Traditional:</span> $3K–$10K</p>
                <p><span className="font-bold">AI:</span> $300–$800</p>
                <p className="text-green-600 font-bold">Savings: 92%</p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Corporate Video</h3>
              <div className="space-y-2">
                <p><span className="font-bold">Traditional:</span> $10K–$50K</p>
                <p><span className="font-bold">AI:</span> $1K–$3K</p>
                <p className="text-green-600 font-bold">Savings: 85%</p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Social Media Shorts</h3>
              <div className="space-y-2">
                <p><span className="font-bold">Traditional:</span> $1K–$5K</p>
                <p><span className="font-bold">AI:</span> $50–$200</p>
                <p className="text-green-600 font-bold">Savings: 97%</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Annual Budget Impact: Real Numbers</h2>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Company Scenario: Startup Producing 24 Videos/Year</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-slate-900">Traditional Agency Route</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>Cost per video: $10,000</li>
                  <li>Annual production: 24 videos</li>
                  <li className="text-2xl font-bold text-red-600">Total: $240,000</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-slate-900">AI Video Production</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>Monthly platform: $99</li>
                  <li>Annual subscription: $1,188</li>
                  <li>Per-video cost (time): ~$50</li>
                  <li>Annual labor (4 hrs/video × 24): ~$2,400</li>
                  <li className="text-2xl font-bold text-green-600">Total: $3,588</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-3xl font-bold text-green-600">
                💰 Annual Savings: $236,412 (98%)
              </p>
            </div>
          </div>

          <p className="text-lg text-slate-700 bg-yellow-50 p-6 rounded-lg">
            <strong>Plus hidden benefits:</strong> Launch videos faster (competitive advantage), iterate on messaging instantly, A/B test variations, and never miss a deadline due to production delays.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Quality: Does Lower Cost Mean Lower Quality?</h2>

          <p className="text-lg text-slate-700 mb-8">
            No. Modern AI video platforms rival traditional production in quality. Here's why:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">✓ Professional Voiceovers</h3>
              <p className="text-slate-700">AI voices sound natural and human-like. 140+ language options with regional accents.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">✓ Cinematic Visuals</h3>
              <p className="text-slate-700">Stock footage, animations, and transitions that match professional standards.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">✓ Perfect Lip-Sync</h3>
              <p className="text-slate-700">AI accurately syncs voiceover to avatar mouth movements. Looks polished and professional.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">✓ Brand Consistency</h3>
              <p className="text-slate-700">Every video follows the same style, tone, and visual identity. No inconsistencies across content.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">✓ 4K & High-Quality Exports</h3>
              <p className="text-slate-700">Videos render in 4K with high bitrate. Ready for YouTube, Vimeo, TV, and cinema screens.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Ready to Cut Your Video Costs by 80%?</h2>
          <p className="text-lg mb-8">
            Stop overpaying for traditional production. Get broadcast-quality videos for 1–5% of traditional costs.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition">
            Get a Cost Comparison
          </button>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">FAQ: Costs & Savings</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Is there a setup fee or onboarding cost?</h3>
              <p className="text-slate-700">No. You only pay the monthly subscription. Our team handles onboarding and strategy at no extra charge.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Do you charge per video or per revision?</h3>
              <p className="text-slate-700">Neither. All videos and unlimited revisions are included in the monthly subscription.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">What if I only need a few videos per year?</h3>
              <p className="text-slate-700">Even producing 5–10 videos/year saves 90%+ vs. traditional agencies. ROI is immediate.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Can I cancel anytime?</h3>
              <p className="text-slate-700">Yes. No long-term contracts. Cancel monthly with no penalties. You own all videos forever.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
