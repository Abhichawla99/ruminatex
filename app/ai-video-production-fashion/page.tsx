import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Production for Fashion & Luxury Brands | Ruminate X',
  description:
    'Editorial-grade AI video production for fashion, luxury, and lifestyle brands. Campaign films, lookbooks, social content — cinematic quality at a fraction of traditional production cost.',
  keywords: [
    'AI video production for fashion brands',
    'luxury brand video production AI',
    'AI fashion editorial video',
    'fashion brand film production',
    'AI video production luxury',
    'fashion campaign video AI',
    'editorial video production AI',
  ],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function FashionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">Fashion & Luxury</span>
          </div>
          <h1
            style={{ ...displayStyle, fontSize: 'clamp(52px, 11vw, 150px)' }}
            className="text-white leading-none mb-8 max-w-5xl"
          >
            AI VIDEO FOR<br />
            <span style={{ color: '#ebff00' }}>FASHION &<br />LUXURY BRANDS</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-xl mb-12 leading-relaxed">
            Editorial-grade cinematic content for brands that demand aesthetic excellence. Any
            environment. Any aesthetic. Any vision — executed with precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* What we create */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Content We Create</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">
          EVERY FORMAT,<br />EDITORIAL QUALITY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Campaign Films', desc: 'Seasonal campaign films with the cinematic depth of a major fashion house — at a fraction of A-list director budgets.' },
            { title: 'Lookbook Video', desc: "Your collection in motion. Any environment, any light quality, any aesthetic. AI removes the limits of what's physically filmable." },
            { title: 'Editorial Content', desc: 'Magazine-grade editorial that communicates your brand\'s aesthetic positioning with absolute precision.' },
            { title: 'Social Content Series', desc: 'Volume without compromise. 12+ pieces per season, consistent with your brand\'s visual language, platform-optimized.' },
            { title: 'Luxury Product Film', desc: 'Close-up, detail-rich video showcasing craftsmanship, texture, and the tactile quality that makes luxury compelling.' },
            { title: 'Brand Films', desc: 'The definitive story of what your brand represents — aspirational, cinematic, identity-defining.' },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The aesthetic argument */}
      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Quality Question</p>
              <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-8">
                DOES AI VIDEO<br />MEET LUXURY<br />STANDARDS?
              </h2>
              <p className="text-[#888888] leading-relaxed mb-6">
                The honest answer: it depends entirely on who&apos;s wielding the tools. Generic AI
                content looks generic. But AI in the hands of a creative director who understands
                fashion aesthetics, editorial composition, and brand positioning produces something
                entirely different.
              </p>
              <p className="text-[#888888] leading-relaxed">
                Our work starts with your brand. Your aesthetic codes. Your customer&apos;s aspiration.
                We apply genuine creative direction — then use AI to execute that vision at a quality
                level that traditional production can&apos;t achieve within comparable budgets.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { q: 'Can it match editorial quality?', a: 'Yes — current AI production achieves lighting, texture, and visual rendering that rivals major editorial campaigns.' },
                { q: 'Will it look like AI?', a: "Not in our hands. Generic tools produce generic results. We apply art direction to every frame." },
                { q: 'Can you capture real garments?', a: 'We work with your physical products and brand assets — AI enhances and places them cinematically.' },
                { q: 'How long does it take?', a: '2–3 weeks from brief to delivery, versus 8–14 weeks for a comparable traditional production.' },
              ].map(({ q, a }) => (
                <div key={q} className="border border-[#1a1a1a] p-6">
                  <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-2">{q}</p>
                  <p className="text-[#888888] text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog link */}
      <section className="border-t border-[#1a1a1a] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#888888] text-sm mb-4">Deep dive:</p>
          <Link
            href="/blog/ai-video-production-fashion-luxury-brands"
            className="inline-flex items-center gap-2 text-[#ebff00] hover:text-white transition-colors text-lg font-medium"
          >
            Read: AI Video Production for Fashion & Luxury Brands — What&apos;s Possible
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-6">
            YOUR AESTHETIC.<br />
            <span style={{ color: '#ebff00' }}>ELEVATED.</span>
          </h2>
          <p className="text-[#888888] mb-8">
            Tell us about your brand and what you want to create. We&apos;ll show you what&apos;s possible.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  )
}
