import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Automated Video Captions & AI Subtitles: SEO Boost for YouTube & Beyond | Ruminate X',
  description: 'AI-generated captions and subtitles improve SEO, engagement, and accessibility. Learn how to auto-caption videos in 125+ languages.',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Guides / Captions & Subtitles</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          CAPTIONS ARE<br />NOT OPTIONAL.<br /><span style={{ color: '#ebff00' }}>THEY'RE STRATEGY.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          AI-generated captions increase engagement 80%, improve SEO ranking, and ensure accessibility compliance. Auto-caption videos in 125+ languages. Every video. Instantly.
        </p>
      </section>

      {/* Why Captions Matter */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Data</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            WHY CAPTIONS MATTER
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
            {[
              { stat: '+80%', label: 'Engagement Boost', detail: 'Videos with captions get 80% more engagement across all platforms' },
              { stat: '+40%', label: 'Retention Improvement', detail: 'Viewers watch longer when captions are available — even with sound on' },
              { stat: '15%', label: 'Accessibility Reach', detail: 'Of the population has hearing difficulties. Captions aren\'t nice to have — they\'re required.' },
            ].map(({ stat, label, detail }) => (
              <div key={label} className="bg-[#080808] p-10 text-center">
                <p style={{ ...displayStyle, fontSize: 'clamp(48px, 6vw, 80px)' }} className="text-[#ebff00] leading-none mb-3">{stat}</p>
                <p className="text-white font-bold text-sm mb-2 uppercase tracking-[0.1em]">{label}</p>
                <p className="text-[#666666] text-xs">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Impact */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Search Engine Visibility</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            HOW CAPTIONS IMPROVE SEO
          </h2>
          <div className="space-y-0">
            {[
              {
                title: 'Searchable Video Content',
                body: 'Search engines cannot watch video. But they can read caption text. Captions make your video content indexable and discoverable through search.',
              },
              {
                title: 'Keyword Density',
                body: 'Include target keywords naturally in your captions. YouTube and Google both rank videos partly based on caption content matching search queries.',
              },
              {
                title: 'Dwell Time Signal',
                body: 'Viewers with captions watch longer. YouTube\'s algorithm rewards watch time. Longer watch time = higher ranking = more organic reach.',
              },
              {
                title: 'Auto-Generated Transcripts',
                body: 'Captions create a full text transcript of your video. That transcript becomes a crawlable page of keyword-rich content on your video platform.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="border-t border-[#1a1a1a] py-8 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
                <h3 className="text-white font-bold text-xl">{title}</h3>
                <p className="text-[#888888]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Process</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            AUTO-CAPTION ANY VIDEO IN THREE STEPS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
            {[
              {
                step: '01',
                title: 'Upload Video',
                detail: 'Upload MP4, MOV, or WebM. AI analyzes audio automatically. Works with any video, any language.',
                time: '30 seconds',
              },
              {
                step: '02',
                title: 'Generate Captions',
                detail: 'AI transcribes and timestamps captions in seconds. 99% accuracy across 125+ languages.',
                time: '60–120 seconds',
              },
              {
                step: '03',
                title: 'Edit & Customize',
                detail: 'Fix any errors, customize font and color, add translations for international audiences.',
                time: '5–15 minutes',
              },
            ].map(({ step, title, detail, time }) => (
              <div key={step} className="bg-[#080808] p-8">
                <span style={{ ...displayStyle, fontSize: '60px' }} className="text-[#333333] leading-none block mb-4">{step}</span>
                <h3 className="text-white font-bold mb-3">{title}</h3>
                <p className="text-[#666666] text-sm mb-4">{detail}</p>
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em]">{time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caption Types */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Types</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            CAPTION FORMATS WE SUPPORT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {[
              {
                type: 'Closed Captions (CC)',
                detail: 'Toggle on/off. Standard for YouTube, Vimeo, and streaming platforms. Fully searchable by search engines.',
              },
              {
                type: 'Open Captions',
                detail: 'Burned directly into the video. Preferred for social media where autoplay without audio is common.',
              },
              {
                type: 'Subtitles',
                detail: 'Translation into other languages. One video, multilingual reach without re-recording.',
              },
              {
                type: 'SDH (Deaf and Hard of Hearing)',
                detail: 'Includes speaker identification and sound descriptions. Required for ADA compliance and broadcast standards.',
              },
            ].map(({ type, detail }) => (
              <div key={type} className="bg-[#080808] p-8">
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">Format</p>
                <h3 className="text-white font-bold mb-2">{type}</h3>
                <p className="text-[#666666] text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            EVERY VIDEO.<br /><span style={{ color: '#ebff00' }}>CAPTIONED. NOW.</span>
          </h2>
          <p className="text-[#888888] mb-10">Boost video engagement by 80%. Improve SEO. Ensure accessibility. AI captions on every video, instantly.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Get Started with Captions
          </Link>
        </div>
      </section>
    </>
  )
}
