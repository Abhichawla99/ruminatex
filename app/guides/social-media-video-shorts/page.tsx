import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Video Shorts Generator: Create TikTok & Instagram Reels Automatically",
  description: "Convert long-form content into TikTok, Instagram Reels, and YouTube Shorts automatically with AI. One video → multiple viral shorts.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          AI Video Shorts Generator: Create TikTok & Instagram Reels Automatically
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          One long-form video = 10–50 vertical shorts. AI automatically clips, captions, and optimizes for TikTok, Instagram, and YouTube Shorts.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">The Opportunity: Short-Form Video Dominates</h2>
          <ul className="space-y-4 text-lg text-slate-700">
            <li>✓ <strong>TikTok:</strong> 1 billion monthly active users</li>
            <li>✓ <strong>YouTube Shorts:</strong> 70 billion daily views</li>
            <li>✓ <strong>Instagram Reels:</strong> Higher engagement than Feed posts</li>
            <li>✓ <strong>Trend:</strong> Short-form dominates attention economy</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">How AI Shorts Generation Works</h2>
          <p className="text-lg text-slate-700 mb-6">
            Upload a 10-minute video. AI analyzes, identifies engaging moments, and creates multiple 15–60 second clips:
          </p>
          <div className="bg-blue-50 p-8 rounded-lg">
            <ol className="space-y-4 text-slate-700">
              <li><strong>1. Analyze:</strong> AI identifies engaging segments, key moments, and highlights</li>
              <li><strong>2. Clip:</strong> Automatically creates 15–60 second vertical clips from best moments</li>
              <li><strong>3. Caption:</strong> Adds auto-generated captions to each clip</li>
              <li><strong>4. Optimize:</strong> Adjusts for TikTok/Reels/Shorts (aspect ratio, pacing)</li>
              <li><strong>5. Export:</strong> Delivers optimized MP4 files ready to upload</li>
            </ol>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Real Example</h2>
          <div className="bg-slate-50 p-8 rounded-lg">
            <p className="text-slate-700 mb-4">
              <strong>Input:</strong> 1 × 15-minute YouTube video (podcast, tutorial, webinar)
            </p>
            <p className="text-slate-700 mb-4">
              <strong>Output:</strong> 20–30 optimized 30-second TikTok clips
            </p>
            <p className="text-green-600 font-bold">
              Result: 1 video creates entire month of short-form content
            </p>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Create Your First Shorts Collection</h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Generate Shorts Now
          </button>
        </section>
      </div>
    </main>
  );
}
