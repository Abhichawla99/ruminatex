import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Video Production ROI Calculator: See Your Potential Savings",
  description: "Interactive calculator to see your potential savings with AI video production. Input your costs and see savings instantly.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          AI Video Production ROI Calculator: See Your Potential Savings
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Calculate your potential savings by switching to AI video production. Input your current video costs and see instant ROI projections.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">How Much Can You Save?</h2>

          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">ROI Calculator</h3>

            <div className="space-y-6">
              <div>
                <label className="block font-bold mb-2 text-slate-900">How many videos do you produce per year?</label>
                <input
                  type="number"
                  placeholder="e.g., 12"
                  className="w-full border border-slate-300 rounded px-4 py-2 text-lg"
                  defaultValue="12"
                />
              </div>

              <div>
                <label className="block font-bold mb-2 text-slate-900">Average cost per video (traditional)</label>
                <input
                  type="number"
                  placeholder="e.g., 5000"
                  className="w-full border border-slate-300 rounded px-4 py-2 text-lg"
                  defaultValue="5000"
                />
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-green-500">
                <p className="text-slate-600 mb-2">Current Annual Video Budget</p>
                <p className="text-4xl font-bold text-green-600">$60,000</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-blue-500">
                <p className="text-slate-600 mb-2">AI Video Annual Cost</p>
                <p className="text-4xl font-bold text-blue-600">$1,200</p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg border-2 border-green-500">
                <p className="text-slate-600 text-lg mb-2">Annual Savings</p>
                <p className="text-5xl font-bold text-green-600">$58,800</p>
                <p className="text-slate-700 text-lg mt-4">That's 98% savings on video production costs.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Payback Period</h2>
          <div className="bg-slate-50 p-8 rounded-lg">
            <p className="text-lg text-slate-700 mb-4">
              Even if you only produce 1 video, AI pays for itself immediately:
            </p>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Traditional video cost:</span>
                <span className="font-bold">$5,000–$10,000</span>
              </div>
              <div className="flex justify-between">
                <span>AI video platform (monthly):</span>
                <span className="font-bold">$30–$100</span>
              </div>
              <div className="flex justify-between text-green-600 font-bold text-lg">
                <span>Payback period:</span>
                <span>Same day</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Additional Benefits (Not Captured in Savings)</h2>
          <ul className="space-y-4 text-lg text-slate-700">
            <li>✓ <strong>Faster launches:</strong> Get to market 10x faster (competitive advantage)</li>
            <li>✓ <strong>Unlimited revisions:</strong> Iterate and optimize without extra cost</li>
            <li>✓ <strong>Global reach:</strong> Create 140+ language versions at same cost</li>
            <li>✓ <strong>Better conversions:</strong> More videos → more engagement → more sales</li>
            <li>✓ <strong>Consistent branding:</strong> Every video looks perfect and on-brand</li>
            <li>✓ <strong>Scalability:</strong> Create 1 or 1,000 videos with the same effort</li>
          </ul>
        </section>

        <section className="mb-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Ready to Save $50K+ Per Year?</h2>
          <p className="text-lg mb-8">
            Switch to AI video production and unlock massive savings. No long-term contracts. Cancel anytime.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition">
            Get Started Today
          </button>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Real Customer Savings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-sm text-slate-600 font-bold">SaaS Company</p>
              <p className="text-3xl font-bold text-green-600 mt-2">$230K</p>
              <p className="text-slate-700 text-sm mt-2">Annual savings on 24 product videos</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-sm text-slate-600 font-bold">Marketing Agency</p>
              <p className="text-3xl font-bold text-green-600 mt-2">$420K</p>
              <p className="text-slate-700 text-sm mt-2">Annual savings on client video production</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-sm text-slate-600 font-bold">Ecommerce Brand</p>
              <p className="text-3xl font-bold text-green-600 mt-2">$180K</p>
              <p className="text-slate-700 text-sm mt-2">Annual savings on product video catalog</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
