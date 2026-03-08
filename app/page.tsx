import type { Metadata } from 'next'
import Link from 'next/link'
import { portfolioItems, getYoutubeThumbnail } from '@/lib/portfolio'
import VideoModal from '@/components/VideoModal'

export const metadata: Metadata = {
  title: 'Ruminate X | AI Video Production Agency | Cinematic Brand Films',
  description:
    'Ruminate X is an AI-powered creative studio producing cinematic brand films, commercials, and creative content for e-commerce, fashion, and enterprise brands worldwide. No idea is impossible.',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ruminate X',
  url: 'https://ruminatex.com',
  description:
    'AI-powered creative studio producing cinematic brand films, commercials, and creative content for brands worldwide.',
  email: 'hello@ruminatex.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'Alberta',
    addressCountry: 'CA',
  },
  areaServed: 'Worldwide',
  sameAs: [
    'https://instagram.com/ruminatex',
    'https://linkedin.com/company/ruminatex',
  ],
}

const tickerItems = [
  'BRAND FILMS',
  'AI PRODUCTION',
  'COMMERCIALS',
  'FASHION CONTENT',
  'SOCIAL CONTENT',
  'PRODUCT LAUNCHES',
  'IMPOSSIBLE IDEAS',
  'CINEMATIC STORIES',
  'E-COMMERCE BRANDS',
  'NO LIMITS',
]

const services = [
  {
    number: '01',
    title: 'Brand Films',
    description:
      'Cinematic stories that define your brand beyond what you sell. We create the narrative that makes audiences believe.',
    category: 'Brand Storytelling',
  },
  {
    number: '02',
    title: 'AI Commercials',
    description:
      'Impossible visuals at unprecedented speed. Launch campaigns that stop the scroll and demand attention.',
    category: 'Campaign Production',
  },
  {
    number: '03',
    title: 'Fashion & Lifestyle',
    description:
      'Editorial-grade content for fashion, beauty, and luxury brands. Aesthetic precision at scale.',
    category: 'Fashion & Editorial',
  },
  {
    number: '04',
    title: 'Social Content',
    description:
      'High-volume, studio-quality content optimized for every platform. Never compromise on quality, ever.',
    category: 'Social Media',
  },
  {
    number: '05',
    title: 'Product Launches',
    description:
      "Debut campaigns that create cultural moments. Your product deserves a launch that becomes part of the conversation.",
    category: 'Launch Strategy',
  },
]

const valueProps = [
  {
    stat: '100×',
    label: 'Faster than traditional production',
    description:
      'AI-accelerated production means you get cinematic results in days, not months.',
  },
  {
    stat: '∞',
    label: 'Creative possibilities',
    description:
      "No set. No budget ceiling. No 'that's not possible.' If you can imagine it, we make it real.",
  },
  {
    stat: '10×',
    label: 'More affordable',
    description:
      'Premium cinematic quality at a fraction of what a traditional agency would charge.',
  },
]

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function HomePage() {
  const featuredVideos = portfolioItems.filter((v) => v.featured)
  const repeatedTicker = [...tickerItems, ...tickerItems]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#ebff00] rounded-full blur-[250px] opacity-[0.05]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">
              AI Creative Studio · Calgary
            </span>
          </div>

          {/* Headline */}
          <h1
            className="leading-none tracking-tight text-white mb-8 max-w-5xl"
            style={{ ...displayStyle, fontSize: 'clamp(70px, 14vw, 190px)' }}
          >
            NO IDEA
            <br />
            <span style={{ color: '#ebff00' }}>IS IMPOSSIBLE.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#888888] max-w-xl mb-12 leading-relaxed">
            AI-powered cinematic production for brands that dare to imagine differently. We
            create what traditional agencies say can&apos;t be done.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors duration-200"
            >
              See Our Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors duration-200"
            >
              Start a Project
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-[#1a1a1a]">
            {[
              { value: '100×', label: 'Faster than traditional' },
              { value: '∞', label: 'Creative possibilities' },
              { value: '10×', label: 'More affordable' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p
                  className="text-[#ebff00] mb-1"
                  style={{ ...displayStyle, fontSize: 'clamp(32px, 4vw, 52px)' }}
                >
                  {value}
                </p>
                <p className="text-xs uppercase tracking-[0.15em] text-[#666666]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#444444] text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#ebff00]/50 to-transparent" />
        </div>
      </section>

      {/* ─── TICKER ───────────────────────────────────────────────── */}
      <section className="border-y border-[#1a1a1a] bg-[#080808] overflow-hidden py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {repeatedTicker.map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <span
                className="px-8 text-white/10"
                style={{ ...displayStyle, fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '0.1em' }}
              >
                {item}
              </span>
              <span className="text-[#ebff00] text-2xl">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ─── FEATURED WORK ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-3">Selected Projects</p>
            <h2 style={{ ...displayStyle, fontSize: 'clamp(48px, 8vw, 100px)' }} className="text-white leading-none">
              OUR WORK
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#888888] hover:text-[#ebff00] transition-colors"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {/* Hero featured video — full width, tall */}
          {featuredVideos[0] && (
            <VideoModal
              youtubeId={featuredVideos[0].youtubeId}
              title={featuredVideos[0].title}
              className="group relative overflow-hidden bg-[#111111] w-full"
              style={{ aspectRatio: '21/9' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getYoutubeThumbnail(featuredVideos[0].youtubeId)}
                alt={`${featuredVideos[0].title} — ${featuredVideos[0].client}`}
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-24 h-24 border-2 border-[#ebff00] flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-10 h-10 text-[#ebff00] ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-2">
                  {featuredVideos[0].category} · Featured
                </p>
                <h3
                  style={{ ...displayStyle, fontSize: 'clamp(32px, 5vw, 72px)' }}
                  className="text-white leading-none mb-2"
                >
                  {featuredVideos[0].title}
                </h3>
                <p className="text-[#888888] text-sm">{featuredVideos[0].client}</p>
              </div>
            </VideoModal>
          )}

          {/* Remaining featured videos — 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredVideos.slice(1).map((video) => (
              <VideoModal
                key={video.id}
                youtubeId={video.youtubeId}
                title={video.title}
                className="group relative overflow-hidden bg-[#111111] aspect-video"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getYoutubeThumbnail(video.youtubeId)}
                  alt={`${video.title} — ${video.client}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 border-2 border-[#ebff00] flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-[#ebff00] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-1">{video.category}</p>
                  <h3 style={{ ...displayStyle, fontSize: 'clamp(20px, 2.5vw, 30px)' }} className="text-white">
                    {video.title}
                  </h3>
                  <p className="text-[#888888] text-sm mt-1">{video.client}</p>
                </div>
              </VideoModal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-3">What We Do</p>
            <h2 style={{ ...displayStyle, fontSize: 'clamp(48px, 8vw, 100px)' }} className="text-white leading-none">
              SERVICES
            </h2>
          </div>
          <div className="divide-y divide-[#1a1a1a]">
            {services.map((service) => (
              <Link
                key={service.number}
                href="/services"
                className="group flex flex-col md:flex-row items-start md:items-center gap-6 py-8 hover:bg-[#0f0f0f] px-4 -mx-4 transition-colors duration-200"
              >
                <span
                  style={{ ...displayStyle, fontSize: '48px', color: '#1a1a1a' }}
                  className="group-hover:text-[#ebff00] transition-colors duration-300 min-w-[80px] block"
                >
                  {service.number}
                </span>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                    <h3 style={{ ...displayStyle, fontSize: 'clamp(24px, 3vw, 36px)' }} className="text-white">
                      {service.title}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#ebff00] border border-[#ebff00]/30 px-3 py-1 self-start">
                      {service.category}
                    </span>
                  </div>
                  <p className="text-[#666666] text-sm leading-relaxed max-w-2xl">{service.description}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-[#ebff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY RUMINATE X ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-[#1a1a1a] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-3">Why Us</p>
              <h2
                className="text-white leading-none mb-8"
                style={{ ...displayStyle, fontSize: 'clamp(48px, 7vw, 90px)' }}
              >
                THE STUDIO<br />THAT SAYS<br />
                <span style={{ color: '#ebff00' }}>YES.</span>
              </h2>
              <p className="text-[#888888] leading-relaxed mb-8">
                Traditional agencies say &quot;that&apos;s not in scope.&quot; We say &quot;let&apos;s
                figure it out.&quot; AI gives us the power to bring any creative vision to life —
                without the overhead, the waiting, or the watered-down compromise.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#ebff00] hover:text-white transition-colors"
              >
                About the Studio
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {valueProps.map(({ stat, label, description }) => (
                <div key={stat} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/30 transition-colors">
                  <div className="flex items-start gap-6">
                    <span
                      className="text-[#ebff00] leading-none flex-shrink-0"
                      style={{ ...displayStyle, fontSize: '48px' }}
                    >
                      {stat}
                    </span>
                    <div>
                      <h3 className="text-white font-bold uppercase tracking-wide mb-2 text-sm">{label}</h3>
                      <p className="text-[#666666] text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ───────────────────────────────────────────── */}
      <section className="py-24 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-3">Industries</p>
          <h2
            className="text-white leading-none mb-12"
            style={{ ...displayStyle, fontSize: 'clamp(48px, 7vw, 90px)' }}
          >
            WE WORK WITH
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              'E-Commerce Brands', 'DTC Startups', 'Fashion & Apparel',
              'Luxury Brands', 'Tech Companies', 'Consumer Goods',
              'Beauty & Wellness', 'Retail Brands', 'Enterprise', 'Food & Beverage',
            ].map((industry) => (
              <span
                key={industry}
                className="text-sm uppercase tracking-[0.15em] px-5 py-3 border border-[#1a1a1a] text-[#888888] hover:border-[#ebff00]/30 hover:text-[#ebff00] transition-colors cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-32 lg:py-40 border-t border-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="text-white/[0.02] whitespace-nowrap"
            style={{ ...displayStyle, fontSize: '20vw' }}
          >
            RUMINATE X
          </span>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-white mb-6 leading-none"
            style={{ ...displayStyle, fontSize: 'clamp(48px, 8vw, 110px)' }}
          >
            READY TO CREATE<br />
            <span style={{ color: '#ebff00' }}>THE IMPOSSIBLE?</span>
          </h2>
          <p className="text-[#888888] text-lg mb-10 max-w-xl mx-auto">
            Tell us your wildest idea. We&apos;ll tell you how we make it real.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-10 py-5 hover:bg-white transition-colors duration-200"
          >
            Start a Conversation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
