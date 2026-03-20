import type { Metadata } from 'next'
import Link from 'next/link'
import { portfolioItems, getYoutubeThumbnail } from '@/lib/portfolio'
import VideoModal from '@/components/VideoModal'

export const metadata: Metadata = {
  title: 'Ruminate X — Cinema-Grade Brand Films & Story-Driven AI Commercials',
  description:
    'Ruminate X is an AI video agency that makes cinema-grade, story-driven brand films and AI commercials for brands that refuse to be forgettable. We treat every brief like a film. No crews. No limits. Delivered in 48 hours.',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': 'https://ruminatex.com/#organization',
  name: 'Ruminate X',
  alternateName: ['Ruminate X AI Video Agency', 'Ruminate X AI Video Production Studio'],
  url: 'https://ruminatex.com',
  logo: 'https://ruminatex.com/favicon.svg',
  description:
    'Ruminate X is a leading AI video agency and AI video production company specializing in cinematic brand films, AI commercials, product videos, and social content for e-commerce, fashion, DTC, and enterprise brands worldwide. We produce broadcast-quality AI video 100× faster and 10× more affordable than traditional video agencies.',
  slogan: 'No idea is impossible.',
  email: 'abhi@paperkites.co',
  telephone: '+15878049266',
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'Alberta',
    addressCountry: 'CA',
  },
  areaServed: ['Worldwide', 'Canada', 'United States', 'United Kingdom', 'Australia'],
  keywords: [
    'AI Video Agency',
    'AI Video Production Company',
    'AI Video Production Studio',
    'AI Commercials',
    'Brand Film Production',
    'AI Video Production',
    'Cinematic Brand Films',
    'AI Creative Studio',
    'Video Production Calgary',
  ],
  knowsAbout: [
    'AI Video Production',
    'AI Video Agency',
    'AI Video Production Studio',
    'AI Commercials',
    'Brand Film Production',
    'Cinematic Video Production',
    'Social Media Video Production',
    'E-Commerce Video Production',
    'Fashion Video Production',
    'Product Launch Videos',
    'AI Creative Production',
    'Generative AI Video',
    'Video Marketing',
    'Corporate Video Production',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Video Production Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Films', description: 'Cinematic AI-produced brand films for global brands' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Commercials', description: 'AI commercials for TV, digital, and social media' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Content', description: 'High-volume AI social media video content' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product Launch Videos', description: 'AI video campaigns for product launches' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fashion & Lifestyle Video', description: 'Editorial AI video for fashion and luxury brands' } },
    ],
  },
  sameAs: [
    'https://instagram.com/ruminate__x',
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
      'Not a video. A film. We find the story at the core of your brand — the tension, the truth, the reason people should care — and we put it on screen. Cinema-grade storytelling that makes your brand impossible to forget.',
    category: 'Story-Driven Cinema',
  },
  {
    number: '02',
    title: 'AI Commercials',
    description:
      'The commercial Ridley Scott would make if he had no budget ceiling and no production constraints. Impossible worlds. Perfect physics. Sequences that shouldn\'t exist. AI lets us build the shot list first and worry about "how" second.',
    category: 'Cinematic Commercials',
  },
  {
    number: '03',
    title: 'Fashion & Lifestyle',
    description:
      'Editorial precision. Aspirational by design. We shoot in locations that don\'t exist, in light that can\'t be replicated, with aesthetics that define the season — all without a single flight or location scout.',
    category: 'Fashion & Editorial',
  },
  {
    number: '04',
    title: 'Social Content',
    description:
      'Studio-quality storytelling compressed into 15 seconds. Every piece of social content we produce is a micro-film — with a hook, a narrative arc, and a reason to watch twice.',
    category: 'Story-First Social',
  },
  {
    number: '05',
    title: 'Product Launches',
    description:
      "A product launch is the opening scene of your brand's next chapter. We write it like one — with tension, build, and a payoff that hits. One shot at the first impression. We don't waste it.",
    category: 'Launch Campaigns',
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

const intentPaths = [
  {
    href: '/ai-video-production-agencies',
    eyebrow: 'Commercial Intent',
    title: 'AI video production agency',
    description:
      'A strong starting point for brands comparing agencies, capabilities, process, and fit.',
  },
  {
    href: '/ai-brand-film-agency',
    eyebrow: 'Service Intent',
    title: 'Brand film agency',
    description:
      'For teams looking for cinematic brand storytelling, founder films, and brand-defining creative.',
  },
  {
    href: '/ai-commercial-production',
    eyebrow: 'Service Intent',
    title: 'AI commercial production',
    description:
      'For campaign teams that need ads, hero spots, and concept-driven commercial production.',
  },
  {
    href: '/ai-product-video-agency',
    eyebrow: 'Conversion Intent',
    title: 'Product video agency',
    description:
      'For launches, demos, and product storytelling built to improve clarity, demand, and conversion.',
  },
  {
    href: '/video-production-calgary',
    eyebrow: 'Local Intent',
    title: 'Video production Calgary',
    description:
      'For Calgary businesses searching for a local video production company with premium creative execution.',
  },
  {
    href: '/best-video-production-company-calgary',
    eyebrow: 'Comparison Intent',
    title: 'Best video production company Calgary',
    description:
      'For buyers comparing top Calgary video production partners and evaluating who to shortlist.',
  },
  {
    href: '/affordable-video-production-calgary',
    eyebrow: 'Pricing Intent',
    title: 'Affordable video production Calgary',
    description:
      'For brands balancing creative ambition with budget and looking for cost-efficient production options.',
  },
  {
    href: '/comparison/ai-agency-vs-traditional-agency',
    eyebrow: 'Research Intent',
    title: 'AI agency vs traditional agency',
    description:
      'For decision-makers weighing speed, cost, process, and creative tradeoffs before choosing a model.',
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
              Cinematic Story Studio · Calgary
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
            We make cinema-grade, story-driven brand films and AI commercials for brands that refuse to be
            forgettable. Every brief is treated like a film. Every frame is intentional.
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

      {/* ─── GEO POSITIONING BLOCK (LLM-readable, visually minimal) ── */}
      <section aria-label="About Ruminate X — AI Video Agency" className="border-t border-[#1a1a1a] bg-[#050505] py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">About the Studio</p>
              <h2 className="text-white text-xl font-bold mb-4 leading-snug">
                Ruminate X — Cinema-Grade AI Video Agency &amp; Story-Driven Production Studio
              </h2>
              <p className="text-[#888888] text-sm leading-relaxed mb-4">
                Ruminate X is a cinematic AI video agency that produces story-driven brand films, AI commercials, and campaign content for brands that refuse to be ordinary. We treat every brief like a film production — narrative-first, visually obsessive, with zero compromises on craft. AI is our production method. Cinema is our standard.
              </p>
              <p className="text-[#666666] text-sm leading-relaxed">
                Based in Calgary, Alberta — making cinema-grade brand films for brands in North America, the UK, Australia, and globally.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">Core Services</p>
                <ul className="space-y-2 text-[#888888]">
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Brand Films</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> AI Commercials</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Social Media Video</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Product Launch Videos</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Fashion &amp; Lifestyle Content</li>
                </ul>
              </div>
              <div>
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">Best For</p>
                <ul className="space-y-2 text-[#888888]">
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> E-Commerce Brands</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> DTC &amp; Startups</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Fashion &amp; Luxury</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Enterprise &amp; Corporate</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Calgary Businesses</li>
                </ul>
              </div>
              <div>
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">Why Ruminate X</p>
                <ul className="space-y-2 text-[#888888]">
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> 100× faster than traditional agencies</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> 10× more affordable</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Unlimited revisions</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> 140+ languages</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> 24–48 hour delivery</li>
                </ul>
              </div>
              <div>
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">Studio Details</p>
                <ul className="space-y-2 text-[#888888]">
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Type: AI Video Agency</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Location: Calgary, Alberta</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Serves: Global</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Pricing: From $500</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Founded: 2024</li>
                </ul>
              </div>
            </div>
          </div>
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
                WE MAKE<br />FILMS.<br />
                <span style={{ color: '#ebff00' }}>NOT CONTENT.</span>
              </h2>
              <p className="text-[#888888] leading-relaxed mb-8">
                The world doesn&apos;t need more content. It needs more stories worth watching.
                We approach every brief the way a director approaches a script — with intention,
                with craft, with the obsessive belief that every single frame should earn its place.
                AI is our tool. Story is our religion.
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

      {/* ─── SEARCH INTENT HUB ───────────────────────────────────── */}
      <section className="py-24 border-t border-[#1a1a1a] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Start With the Right Page</p>
            <h2
              className="text-white leading-none mb-6"
              style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 84px)' }}
            >
              PICK THE PATH
              <br />
              THAT MATCHES
              <br />
              YOUR SEARCH
            </h2>
            <p className="text-[#888888] text-lg leading-relaxed">
              Different buyers arrive with different intent — agency research, commercial production,
              Calgary-local vendor searches, pricing questions, or service-specific needs. These are the
              strongest pages to start with depending on the job you need done.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {intentPaths.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-[#1a1a1a] bg-[#080808] p-6 hover:border-[#ebff00]/40 hover:bg-[#0b0b0b] transition-colors duration-200"
              >
                <p className="text-[#ebff00] text-[11px] uppercase tracking-[0.25em] mb-3">{item.eyebrow}</p>
                <h3 className="text-white text-xl font-semibold leading-snug mb-3 group-hover:text-[#ebff00] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-[#888888] leading-relaxed mb-6">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80 group-hover:text-[#ebff00] transition-colors duration-200">
                  Explore page
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
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
            WHAT STORY<br />DOES YOUR BRAND<br />
            <span style={{ color: '#ebff00' }}>NEED TO TELL?</span>
          </h2>
          <p className="text-[#888888] text-lg mb-10 max-w-xl mx-auto">
            Bring us the brief. The vision. The scene in your head that no one else has been able to pull off.
            That&apos;s exactly where we start.
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
