import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Production for YouTube Creators | Scale Without Burning Out | Ruminate X',
  description:
    'YouTube creators use cinematic AI production to publish more, grow faster, and stop spending every hour in the edit. Scale your channel without scaling your workload.',
  keywords: ['AI video production YouTube', 'YouTube creator video production', 'AI YouTube content', 'creator video agency', 'YouTube channel AI production'],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function YouTubeCreatorsPage() {
  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">Creators & YouTube</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 11vw, 150px)' }} className="text-white leading-none mb-8 max-w-5xl">
            THE IDEAS<br />ARE YOURS.<br /><span style={{ color: '#ebff00' }}>LET US FILM THEM.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-xl mb-12 leading-relaxed">
            You got into creating because you had something to say. Not to spend 40 hours a week in post-production. AI handles the production. You handle the idea — the only part that actually matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '4–10hrs', label: 'Average time to edit one 10-minute video' },
              { stat: '2–3×', label: 'More uploads = significantly faster growth' },
              { stat: '80%', label: 'Of production time reclaimed with AI' },
              { stat: '4K', label: 'Cinema quality on every upload' },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <p style={{ ...displayStyle, fontSize: 'clamp(28px, 3.5vw, 48px)', color: '#ebff00' }}>{stat}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-[#666666] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What We Build</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">EVERY FORMAT.<br />SAME CRAFT.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Cinematic Intros & Openers', desc: 'The first 10 seconds decide everything. A cinema-grade channel opener that communicates your brand identity before a word is spoken.' },
            { title: 'B-Roll & Visual Sequences', desc: 'The visuals that elevate your talking-head content into something worth watching. Any scene, any environment, any aesthetic.' },
            { title: 'YouTube Shorts', desc: 'High-impact short-form content that drives subscribers and expands reach — story-first, even in 60 seconds.' },
            { title: 'Sponsor Integration Films', desc: 'Sponsored segments that feel like part of the story, not interruptions. AI-produced content that sponsors actually want to be part of.' },
            { title: 'Channel Trailer', desc: 'The first thing a new visitor sees. The film that tells them exactly who you are and why they should subscribe — in under 90 seconds.' },
            { title: 'Series Titles & Branding', desc: 'Cinematic title sequences for your series and recurring segments. The visual identity that makes your channel feel like a show.' },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-6">
            SPEND MORE TIME<br />ON THE IDEA.<br /><span style={{ color: '#ebff00' }}>WE HANDLE THE REST.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us what you&apos;re creating. We&apos;ll show you what it looks like when the production matches the vision.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
        </div>
      </section>
    </>
  )
}
