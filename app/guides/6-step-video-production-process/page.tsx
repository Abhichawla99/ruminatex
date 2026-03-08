import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 6-Step AI Video Production Process: From Script to Publish",
  description: "Proven 6-step methodology for creating professional videos with AI. Brief → Script → Generate → Customize → Optimize → Publish.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          The 6-Step AI Video Production Process: From Script to Publish
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Our proven methodology for creating professional videos with AI. Script → Generate → Customize → Optimize → Publish.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">The Complete Process</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 p-6 bg-blue-50 rounded">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Step 1: Define Brief (Hour 1–2)</h3>
              <p className="text-slate-700 mb-2">
                <strong>Goal:</strong> Clarify what the video needs to accomplish
              </p>
              <ul className="space-y-1 text-slate-700 text-sm">
                <li>• What's the main message?</li>
                <li>• Who's the audience?</li>
                <li>• What action should viewers take?</li>
                <li>• What's the desired outcome?</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 p-6 bg-blue-50 rounded">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Step 2: Write Script (Hour 2–4)</h3>
              <p className="text-slate-700 mb-2">
                <strong>Goal:</strong> Create compelling, clear script
              </p>
              <ul className="space-y-1 text-slate-700 text-sm">
                <li>• Hook: Grab attention in first 3 seconds</li>
                <li>• Problem: State viewer's pain point</li>
                <li>• Solution: Show how product solves it</li>
                <li>• CTA: Clear call-to-action</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 p-6 bg-blue-50 rounded">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Step 3: Generate Video (Hour 4–8)</h3>
              <p className="text-slate-700 mb-2">
                <strong>Goal:</strong> Create initial video draft
              </p>
              <ul className="space-y-1 text-slate-700 text-sm">
                <li>• Input script into AI platform</li>
                <li>• AI generates voiceover</li>
                <li>• AI creates matching visuals</li>
                <li>• Auto-sync and transitions</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 p-6 bg-green-50 rounded">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Step 4: Customize & Brand (Hour 8–16)</h3>
              <p className="text-slate-700 mb-2">
                <strong>Goal:</strong> Make it yours
              </p>
              <ul className="space-y-1 text-slate-700 text-sm">
                <li>• Add logo and brand colors</li>
                <li>• Insert custom images/screenshots</li>
                <li>• Add captions</li>
                <li>• Select music</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 p-6 bg-green-50 rounded">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Step 5: Optimize for Platform (Hour 16–20)</h3>
              <p className="text-slate-700 mb-2">
                <strong>Goal:</strong> Make video platform-ready
              </p>
              <ul className="space-y-1 text-slate-700 text-sm">
                <li>• Optimize for YouTube (title, description, tags)</li>
                <li>• Create vertical format for social (Reels, TikTok)</li>
                <li>• Add SEO keywords</li>
                <li>• Prepare multiple formats</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 p-6 bg-purple-50 rounded">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Step 6: Publish & Analyze (Hour 20–24)</h3>
              <p className="text-slate-700 mb-2">
                <strong>Goal:</strong> Get video live and track performance
              </p>
              <ul className="space-y-1 text-slate-700 text-sm">
                <li>• Upload to YouTube, LinkedIn, website</li>
                <li>• Create promotion schedule</li>
                <li>• Track engagement metrics</li>
                <li>• Optimize based on data</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Timeline Overview</h2>
          <div className="bg-slate-50 p-8 rounded-lg">
            <div className="flex items-center justify-between mb-6">
              <p className="font-bold">Start Brief</p>
              <p className="font-bold">24 Hours Later</p>
              <p className="font-bold">Video Live</p>
            </div>
            <div className="relative h-2 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded mb-4"></div>
            <p className="text-center text-slate-600 text-sm">Hour 0 → Hour 24: Professional video published</p>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Start Your Video Production</h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Begin Process Today
          </button>
        </section>
      </div>
    </main>
  );
}
