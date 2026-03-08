import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Video Production for YouTube Creators: Scale Your Channel Faster",
  description: "YouTube creators use AI video production to publish more, grow faster, and spend less time editing. Scale from 1 video/week to daily uploads.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">Creators & YouTube</p>
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          AI Video Production for YouTube Creators: Scale Your Channel Faster
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          The YouTube algorithm rewards consistency. AI lets you publish more, spend less time editing, and focus on what only you can do — the ideas.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">The Creator Bottleneck</h2>
          <div className="bg-red-50 p-8 rounded-lg mb-6">
            <p className="text-lg text-slate-700">
              Most creators have great ideas but can't produce fast enough. Editing a single 10-minute YouTube video takes 4–10 hours. Add scripting, thumbnail design, and promotion — and you're spending more time on production than creation.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { stat: "4–10hrs", label: "to edit 1 video" },
              { stat: "2–3x", label: "more videos = faster growth" },
              { stat: "70%", label: "of creator time is production" },
              { stat: "AI", label: "cuts production time by 80%" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-slate-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">{stat}</p>
                <p className="text-sm text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">What AI Does for Your Channel</h2>
          <div className="space-y-6">
            {[
              { title: "Turn long-form into Shorts automatically", desc: "1 YouTube video → 10–20 TikTok/Shorts clips. Captioned, optimized, ready to post.", link: "/guides/social-media-video-shorts" },
              { title: "Auto-captions for every video", desc: "Captions increase YouTube watch time by 40% and improve search ranking. AI generates them in minutes.", link: "/guides/video-captions-ai-subtitles" },
              { title: "Create faceless educational content", desc: "Script-driven educational videos with professional voiceover and visuals — no filming required.", link: "/guides/how-to-create-explainer-videos-with-ai" },
              { title: "Produce explainer & tutorial videos", desc: "AI generates tutorial-style content from your script with matching screen recordings and voiceover.", link: "/guides/screen-recording-automated-demos" },
              { title: "Multilingual versions of every video", desc: "Expand to Spanish, Portuguese, French, or any of 140+ language audiences at no extra cost.", link: "/solutions/multilingual-voiceovers" },
            ].map(({ title, desc, link }) => (
              <div key={title} className="border-l-4 border-blue-500 pl-6 py-2">
                <h3 className="font-bold text-slate-900 mb-1">
                  <Link href={link} className="hover:text-blue-600">{title} →</Link>
                </h3>
                <p className="text-slate-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Best Channel Types for AI Production</h2>
          <div className="flex flex-wrap gap-3">
            {["Education & Tutorials", "Finance & Investing", "Tech Reviews", "Health & Wellness", "Business & Entrepreneurship", "Marketing", "SaaS & Software", "Real Estate", "Personal Finance", "Productivity", "AI & Technology", "History & Documentaries"].map(type => (
              <span key={type} className="px-4 py-2 border border-slate-200 text-slate-700 text-sm rounded-full">{type}</span>
            ))}
          </div>
          <p className="text-slate-600 text-sm mt-4">AI production works best for knowledge-based, educational, and professional content — the highest-RPM niches on YouTube.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/guides/social-media-video-shorts", label: "Auto-Create YouTube Shorts" },
              { href: "/guides/video-captions-ai-subtitles", label: "AI Captions for SEO" },
              { href: "/solutions/multilingual-voiceovers", label: "Go Global with 140+ Languages" },
              { href: "/guides/video-marketing-strategy-ai", label: "Content Calendar Strategy" },
              { href: "/solutions/fast-explainer-videos", label: "48-Hour Video Production" },
              { href: "/contact", label: "Scale Your Channel" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block border border-slate-200 p-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-slate-700 font-medium">→ {label}</Link>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Stop Spending 80% of Your Time Editing</h2>
          <p className="text-slate-300 mb-8">Focus on ideas and storytelling. Let AI handle the production. Your channel will thank you.</p>
          <Link href="/contact" className="inline-block bg-[#ebff00] text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition">Start Creating Faster</Link>
        </section>
      </div>
    </main>
  );
}
