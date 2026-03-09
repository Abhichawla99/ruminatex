import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Shorts Generator: Create TikTok & Instagram Reels Automatically | Ruminate X',
  description: 'Convert long-form content into TikTok, Instagram Reels, and YouTube Shorts automatically with AI. One video → multiple viral shorts.',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Guides / Social Shorts</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          ONE FILM.<br />FIFTY SHORTS.<br /><span style={{ color: '#ebff00' }}>AUTOMATICALLY.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          Upload a single long-form video. AI analyzes, clips, captions, and optimizes it for TikTok, Instagram Reels, and YouTube Shorts. One hour of production becomes a month of short-form content.
        </p>
      </section>

      {/* The Opportunity */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Platform Landscape</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            SHORT-FORM DOMINATES ATTENTION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
            {[
              { platform: 'TikTok', stat: '1B+', detail: 'Monthly active users. The algorithm rewards quality over followers.' },
              { platform: 'YouTube Shorts', stat: '70B', detail: 'Daily views. The largest short-form library in the world.' },
              { platform: 'Instagram Reels', stat: 'Higher', detail: 'Engagement rate vs. feed posts. Reels get distributed more widely.' },
              { platform: 'The Trend', stat: '2026', detail: 'Short-form content dominates the attention economy. Adapt or get left behind.' },
            ].map(({ platform, stat, detail }) => (
              <div key={platform} className="bg-[#080808] p-8">
                <p className="text-[#666666] text-xs uppercase tracking-[0.2em] mb-2">{platform}</p>
                <p style={{ ...displayStyle, fontSize: '48px' }} className="text-[#ebff00] leading-none mb-3">{stat}</p>
                <p className="text-[#666666] text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How AI Shorts Generation Works */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Process</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            HOW AI SHORTS GENERATION WORKS
          </h2>
          <div className="space-y-0">
            {[
              {
                step: '01',
                title: 'Analyze',
                body: 'AI watches your long-form video and identifies the highest-engagement segments — the moments most likely to perform as standalone clips.',
                input: 'Your 10–60 minute video',
              },
              {
                step: '02',
                title: 'Clip',
                body: 'AI automatically creates 15–60 second vertical clips from the best moments. No manual scrubbing. No judgment calls about what\'s interesting.',
                input: '20–50 potential clips identified',
              },
              {
                step: '03',
                title: 'Caption',
                body: 'Auto-generated captions added to each clip. Styled, timed, and formatted for short-form viewing. Captions increase watch time by 40%.',
                input: 'Captions on every clip',
              },
              {
                step: '04',
                title: 'Optimize',
                body: 'Each clip adjusted for the target platform — aspect ratio, pacing, audio normalization, and format-specific requirements for TikTok, Reels, and Shorts.',
                input: 'Platform-ready MP4 files',
              },
              {
                step: '05',
                title: 'Export',
                body: 'Batch download all clips, ready to upload. Or connect your accounts for direct auto-publishing on your schedule.',
                input: 'Ready to publish today',
              },
            ].map(({ step, title, body, input }) => (
              <div key={step} className="border-t border-[#1a1a1a] py-10 grid grid-cols-1 md:grid-cols-[100px_1fr_200px] gap-8 items-start">
                <span style={{ ...displayStyle, fontSize: '60px' }} className="text-[#333333] leading-none">{step}</span>
                <div>
                  <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
                  <p className="text-[#888888]">{body}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-2">Output</p>
                  <p className="text-[#666666] text-sm">{input}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Example */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">In Practice</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            ONE VIDEO. ONE MONTH OF CONTENT.
          </h2>
          <div className="border border-[#1a1a1a] p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <p className="text-[#666666] text-xs uppercase tracking-[0.2em] mb-4">Input</p>
                <p style={{ ...displayStyle, fontSize: '32px' }} className="text-white leading-none mb-3">1 × 15-MINUTE VIDEO</p>
                <p className="text-[#888888]">A podcast, webinar, tutorial, or long-form explainer. Whatever you already have.</p>
              </div>
              <div>
                <p className="text-[#666666] text-xs uppercase tracking-[0.2em] mb-4">Output</p>
                <p style={{ ...displayStyle, fontSize: '32px' }} className="text-[#ebff00] leading-none mb-3">20–30 OPTIMIZED CLIPS</p>
                <p className="text-[#888888]">Platform-ready 30-second clips for TikTok, Reels, and Shorts. Each one stands alone.</p>
              </div>
            </div>
            <div className="border-t border-[#1a1a1a] mt-10 pt-8 text-center">
              <p style={{ ...displayStyle, fontSize: 'clamp(24px, 3vw, 44px)' }} className="text-[#ebff00] leading-none">
                RESULT: ENTIRE MONTH OF SHORT-FORM CONTENT FROM ONE SESSION.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types That Work */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Source Material</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            WHAT CONTENT TO REPURPOSE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
            {[
              { source: 'Podcasts', detail: 'Your best quotes, insights, and hot takes become standalone clips' },
              { source: 'Webinars', detail: 'Key moments and takeaways extracted and repackaged for social' },
              { source: 'YouTube Videos', detail: 'Long-form tutorials become quick-tip shorts that drive back to the full video' },
              { source: 'Product Demos', detail: 'Demo highlights become bite-sized feature spotlights for social' },
              { source: 'Conference Talks', detail: 'Your best stage moments reach audiences who weren\'t in the room' },
              { source: 'Internal Recordings', detail: 'Team knowledge and presentations repurposed for thought leadership' },
            ].map(({ source, detail }) => (
              <div key={source} className="bg-[#080808] p-8">
                <h3 className="text-white font-bold mb-2">{source}</h3>
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
            TURN YOUR ARCHIVE<br /><span style={{ color: '#ebff00' }}>INTO CONTENT.</span>
          </h2>
          <p className="text-[#888888] mb-10">Every long-form video you have already made is a library of clips waiting to be published. Start repurposing today.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Generate Shorts Now
          </Link>
        </div>
      </section>
    </>
  )
}
