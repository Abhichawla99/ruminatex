import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Product Videos: Boost Sales with AI Video Demos",
  description: "Create product demo videos for ecommerce. Increase conversion 2.3x. Generate from product images automatically.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          E-Commerce Product Videos: Boost Sales with AI Video Demos
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Create product demo videos from photos. Increase conversion 2.3x. Auto-generate for entire catalog.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Product Videos Drive Sales</h2>
          <ul className="space-y-4 text-lg text-slate-700">
            <li>✓ <strong>2.3x higher conversion:</strong> Videos increase purchase intent</li>
            <li>✓ <strong>80% more engagement:</strong> Viewers watch longer, buy more</li>
            <li>✓ <strong>Reduce returns:</strong> Customers see product clearly, fewer returns</li>
            <li>✓ <strong>Higher AOV:</strong> Customers spend more when they see product in action</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">AI Ecommerce Video Features</h2>
          <ul className="space-y-4 text-lg text-slate-700">
            <li>✓ <strong>Auto-generate from images:</strong> Product photos → 30-second demo video</li>
            <li>✓ <strong>Bulk creation:</strong> Create 100+ product videos in one batch</li>
            <li>✓ <strong>Customize messaging:</strong> Different videos for different audiences</li>
            <li>✓ <strong>Social-ready:</strong> Optimized for YouTube, Instagram, TikTok</li>
            <li>✓ <strong>A/B testing:</strong> Create multiple versions to test messaging</li>
          </ul>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Increase Your Ecommerce Conversions</h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Create Product Videos
          </button>
        </section>
      </div>
    </main>
  );
}
