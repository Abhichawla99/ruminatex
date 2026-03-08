import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educational & Training Videos: Rapid Corporate Learning Content",
  description: "Create training videos at scale. Auto-generate courses in 50+ languages. Deploy learning content 10x faster.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          Educational & Training Videos: Rapid Corporate Learning Content
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Create corporate training videos 10x faster. Scale learning content globally in 50+ languages. Reduce training development bottlenecks.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Training Video Use Cases</h2>
          <ul className="space-y-4 text-lg text-slate-700">
            <li>✓ <strong>Compliance training:</strong> Rapid updates for regulatory changes</li>
            <li>✓ <strong>Onboarding videos:</strong> Help new employees get productive faster</li>
            <li>✓ <strong>Product training:</strong> Scale training across teams</li>
            <li>✓ <strong>Skill development:</strong> Courses for upskilling programs</li>
            <li>✓ <strong>Safety training:</strong> Multi-language safety content</li>
            <li>✓ <strong>Policy videos:</strong> Communicate company policies clearly</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Benefits of AI Training Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2 text-slate-900">Faster Deployment</h3>
              <p className="text-slate-700">Create training content in days, not months. Rapid response to policy changes.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-slate-900">Global Reach</h3>
              <p className="text-slate-700">One training, 50+ language versions. Every employee gets training in their language.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-slate-900">Consistency</h3>
              <p className="text-slate-700">Same message delivered consistently across all learners. No variance in training quality.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-slate-900">Cost Efficient</h3>
              <p className="text-slate-700">No videography crew. No location logistics. Low cost per learner at scale.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Launch Your Training Program</h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Create Training Video
          </button>
        </section>
      </div>
    </main>
  );
}
