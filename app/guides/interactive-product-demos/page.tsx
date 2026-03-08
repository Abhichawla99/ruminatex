import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Product Demo Videos for SaaS: Convert More Demos",
  description: "Create interactive product demo videos that increase conversion 2.3x. Reduce demo request friction.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          Interactive Product Demo Videos for SaaS: Convert More Demos
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Interactive video demos increase conversion 2.3x and reduce support burden by 40%. Auto-create feature-specific demos for different use cases.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Interactive Demos Convert</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Interactive Demos</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Viewers see feature in action</li>
                <li>• Clickable CTAs mid-video</li>
                <li>• Show multiple workflows</li>
                <li>• 2.3x higher conversion</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Static Product Videos</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Viewers are passive</li>
                <li>• Limited engagement</li>
                <li>• One demo angle</li>
                <li>• Standard conversion</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Types of Interactive Demos to Create</h2>
          <ul className="space-y-4 text-lg text-slate-700">
            <li>✓ <strong>Feature highlight demos:</strong> Deep dive into specific features</li>
            <li>✓ <strong>Use-case demos:</strong> Show how product solves specific pain points</li>
            <li>✓ <strong>Comparison demos:</strong> Compare to competitors</li>
            <li>✓ <strong>Onboarding demos:</strong> Help new users get started</li>
            <li>✓ <strong>Workflow demos:</strong> Show complete workflows from start to finish</li>
          </ul>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Increase Demo Conversions Today</h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Create Interactive Demo
          </button>
        </section>
      </div>
    </main>
  );
}
