import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Video Tours: Automated Property Walkthrough Videos",
  description: "Create professional property walkthrough videos automatically. Photos → video tour in minutes. 95% faster than traditional videographers.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          Real Estate Video Tours: Automated Property Walkthrough Videos
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Convert property photos into professional walkthrough videos instantly. Agents create tours in minutes, not hours.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Real Estate Video Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-sm text-slate-600 font-bold">Faster Sales</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">4 Days</p>
              <p className="text-slate-700 text-sm mt-2">Properties with video tours sell 4 days faster</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-sm text-slate-600 font-bold">Higher Price</p>
              <p className="text-3xl font-bold text-green-600 mt-2">+5%</p>
              <p className="text-slate-700 text-sm mt-2">Homes with video sell for 5% more</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">How AI Real Estate Tours Work</h2>
          <div className="space-y-4 text-lg text-slate-700">
            <p><strong>Step 1:</strong> Upload property photos (exterior, rooms, features)</p>
            <p><strong>Step 2:</strong> AI arranges photos into logical flow</p>
            <p><strong>Step 3:</strong> Add music, transitions, and property info</p>
            <p><strong>Step 4:</strong> Publish to MLS, website, social media</p>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Create Your First Property Tour</h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Generate Property Video
          </button>
        </section>
      </div>
    </main>
  );
}
