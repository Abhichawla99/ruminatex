import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automated Video Captions & Subtitles: SEO Boost for YouTube & Beyond",
  description: "AI-generated captions and subtitles improve SEO, engagement, and accessibility. Learn how to auto-caption videos in 125+ languages.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          Automated Video Captions & Subtitles: SEO Boost for YouTube & Beyond
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          AI-generated captions increase engagement 80%, improve SEO ranking, and ensure accessibility. Auto-caption videos in 125+ languages instantly.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Captions Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-sm text-slate-600 font-bold">Engagement Boost</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">+80%</p>
              <p className="text-slate-700 text-sm mt-2">Videos with captions get 80% more engagement</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-sm text-slate-600 font-bold">Retention Improvement</p>
              <p className="text-3xl font-bold text-green-600 mt-2">+40%</p>
              <p className="text-slate-700 text-sm mt-2">Viewers watch longer when captions available</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-sm text-slate-600 font-bold">Accessibility Reach</p>
              <p className="text-3xl font-bold text-purple-600 mt-2">15%</p>
              <p className="text-slate-700 text-sm mt-2">Of population has hearing difficulties</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">How AI Captions Improve SEO</h2>
          <ul className="space-y-4 text-lg text-slate-700">
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-4">✓</span>
              <span><strong>Searchable text:</strong> Captions make video content searchable by search engines</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-4">✓</span>
              <span><strong>Keywords:</strong> Include keywords in captions for better YouTube/Google ranking</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-4">✓</span>
              <span><strong>Dwell time:</strong> Captions keep viewers watching longer, boosting ranking</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-4">✓</span>
              <span><strong>Transcripts:</strong> Auto-captions create searchable transcripts for accessibility</span>
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">3-Step Process: Auto-Caption Any Video</h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="font-bold text-lg">Step 1: Upload Video</p>
              <p className="text-slate-700">Upload MP4, MOV, or WebM file. AI analyzes audio automatically.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="font-bold text-lg">Step 2: Generate Captions</p>
              <p className="text-slate-700">AI transcribes and timestamps captions in seconds. 99% accuracy.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="font-bold text-lg">Step 3: Edit & Customize</p>
              <p className="text-slate-700">Fix any errors, customize fonts/colors, add translations.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Boost Video Engagement with AI Captions</h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Get Started with Captions
          </button>
        </section>
      </div>
    </main>
  );
}
