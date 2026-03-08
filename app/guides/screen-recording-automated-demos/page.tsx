import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automated Screen Recording & Demo Videos: SaaS Solutions",
  description: "Create automated screen recording videos for SaaS product demos. Screen recording + AI = professional demos in minutes.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          Automated Screen Recording & Demo Videos: SaaS Solutions
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Create professional SaaS product demo videos using automated screen recording. No videographers. No complex setups. Just click and generate.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Screen Recording + AI = Professional Demos</h2>
          <p className="text-lg text-slate-700 mb-6">
            Traditional screen recording tools require manual editing. AI automates the entire process:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Manual Screen Recording</h3>
              <ul className="space-y-2 text-slate-700">
                <li>1. Record screen manually</li>
                <li>2. Edit in video software</li>
                <li>3. Add voiceover separately</li>
                <li>4. Sync audio & video</li>
                <li>5. Export and publish</li>
              </ul>
              <p className="text-slate-600 text-sm mt-4">Time: 4–8 hours per video</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">AI Automated Demo</h3>
              <ul className="space-y-2 text-slate-700">
                <li>1. Script your demo</li>
                <li>2. AI auto-records screen</li>
                <li>3. AI adds voiceover</li>
                <li>4. AI syncs everything</li>
                <li>5. Publish in one click</li>
              </ul>
              <p className="text-slate-600 text-sm mt-4">Time: 30 minutes to 2 hours</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Use Cases</h2>
          <div className="space-y-4 text-lg text-slate-700">
            <p><strong>Feature demos:</strong> Show new features to customers and prospects</p>
            <p><strong>How-to guides:</strong> Help users learn your product</p>
            <p><strong>Bug fixes:</strong> Explain what was fixed and how it impacts users</p>
            <p><strong>Onboarding:</strong> Help new customers get started</p>
            <p><strong>Training:</strong> Create internal training videos for teams</p>
            <p><strong>Sales enablement:</strong> Equip sales team with demo videos</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Why This Approach Wins</h2>
          <ul className="space-y-3 text-lg text-slate-700">
            <li>✓ <strong>No videography skills needed:</strong> Anyone can create demos</li>
            <li>✓ <strong>Fast turnaround:</strong> Demo recorded and published same day</li>
            <li>✓ <strong>Perfect for updates:</strong> Feature changed? Re-record in 30 minutes</li>
            <li>✓ <strong>Cost-effective:</strong> No equipment or crew needed</li>
            <li>✓ <strong>Professional quality:</strong> Broadcast-quality output</li>
            <li>✓ <strong>Unlimited variations:</strong> Create 10 demos of same feature for different audiences</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">How to Script a Screen Demo</h2>
          <div className="space-y-4 text-slate-700">
            <p><strong>Hook (0–3 sec):</strong> "Struggling to manage projects? Watch how our tool solves this."</p>
            <p><strong>Problem (3–10 sec):</strong> Show the pain (cluttered spreadsheet, missed deadlines)</p>
            <p><strong>Solution (10–40 sec):</strong> Walk through feature step-by-step</p>
            <p><strong>Benefit (40–50 sec):</strong> "Now your team saves 5 hours per week and never misses a deadline"</p>
            <p><strong>CTA (50–60 sec):</strong> "Try free for 14 days" or "Schedule a demo"</p>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Create Your First Screen Demo</h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Generate Demo Now
          </button>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Tools for Screen Recording + AI</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>✓ <strong>Loom + AI voiceover:</strong> Record, add AI voiceover</li>
            <li>✓ <strong>Camtasia + Synthesia:</strong> Screen + avatar</li>
            <li>✓ <strong>Deemo:</strong> Built-in screen recording + AI automation</li>
            <li>✓ <strong>Descript:</strong> Record, transcribe, generate voiceover</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
