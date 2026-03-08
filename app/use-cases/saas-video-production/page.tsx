import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Video Production for SaaS: Launch & Feature Updates Fast",
  description: "SaaS teams use AI to create product videos, feature updates, and demo content 70% faster. Scale content without adding headcount.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          AI Video Production for SaaS: Launch & Feature Updates Fast
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          SaaS teams create product videos, feature updates, and onboarding content 70% faster with AI. No videographers. No delays.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">SaaS Video Use Cases</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Feature Launch Videos</h3>
              <p className="text-slate-700">Announce new features. Drive adoption. Show benefits. Reduce support tickets for feature questions.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Product Demo Videos</h3>
              <p className="text-slate-700">Show your product in action. Use case-specific demos. Increase sales qualified leads.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Onboarding Videos</h3>
              <p className="text-slate-700">Help new customers get started faster. Reduce support burden. Improve customer success.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Training & Documentation Videos</h3>
              <p className="text-slate-700">Reduce support tickets. Help teams understand features. Keep knowledge current.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Timeline Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Traditional Approach</h3>
              <p className="text-slate-700 font-bold">Feature launch:</p>
              <ul className="space-y-2 text-slate-700 mb-4">
                <li>Week 1: Hire videographer, plan shoot</li>
                <li>Week 2: Film product feature</li>
                <li>Week 3: Edit and finalize</li>
              </ul>
              <p className="text-red-600 font-bold">3 weeks to launch video</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">AI Approach</h3>
              <p className="text-slate-700 font-bold">Feature launch:</p>
              <ul className="space-y-2 text-slate-700 mb-4">
                <li>Hour 1: Write script</li>
                <li>Hour 6: Generate video with AI</li>
                <li>Hour 12: Customize and publish</li>
              </ul>
              <p className="text-green-600 font-bold">12 hours to launch video</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Accelerate Your SaaS Launch</h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Create Product Video
          </button>
        </section>
      </div>
    </main>
  );
}
