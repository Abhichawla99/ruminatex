import type { Metadata } from 'next'
import Link from 'next/link'
import { portfolioItems, getYoutubeThumbnail } from '@/lib/portfolio'
import VideoModal from '@/components/VideoModal'

export const metadata: Metadata = {
  title: 'Our Work | Cinema-Grade Brand Films & AI Commercials | Ruminate X',
  description:
    "The reel. Cinematic brand films, AI commercials, fashion editorials, and story-driven campaign content — every frame earned. Ruminate X is a cinematic story studio that makes films for brands.",
  openGraph: {
    title: 'Our Work | Ruminate X',
    description: 'Cinema-grade brand films and AI commercials — every frame earned, every story real.',
  },
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Reel</p>
        <h1
          style={{ ...displayStyle, fontSize: 'clamp(60px, 12vw, 150px)' }}
          className="text-white leading-none mb-6"
        >
          THE<br />FILMS.
        </h1>
        <p className="text-[#888888] text-lg max-w-xl">
          Every frame earned. Every story real. These are the films we&apos;ve made for brands that refused to be ordinary.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioItems.map((video, i) => (
            <VideoModal
              key={video.id}
              youtubeId={video.youtubeId}
              title={video.title}
              className={`group relative overflow-hidden bg-[#111111] ${
                i === 0 ? 'md:col-span-2' : 'aspect-video'
              }`}
              style={i === 0 ? { aspectRatio: '21/9' } : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getYoutubeThumbnail(video.youtubeId)}
                alt={`${video.title} — ${video.client}`}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 border-2 border-[#ebff00] flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-[#ebff00] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-[#ebff00] text-xs uppercase tracking-[0.2em] border border-[#ebff00]/30 px-3 py-1">
                    {video.category}
                  </span>
                  {video.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[#666666] text-xs uppercase tracking-[0.2em] border border-[#333] px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 style={{ ...displayStyle, fontSize: 'clamp(24px, 4vw, 40px)' }} className="text-white mb-1">
                  {video.title}
                </h2>
                <p className="text-[#888888] text-sm">{video.client}</p>
              </div>
            </VideoModal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            READY TO MAKE<br />
            <span style={{ color: '#ebff00' }}>YOUR FILM?</span>
          </h2>
          <p className="text-[#888888] mb-8">
            Tell us the scene in your head — the one your brand has been trying to tell. We start with story. Always.
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
