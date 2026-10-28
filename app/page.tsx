import type { Metadata } from 'next'
import Link from 'next/link'
import { portfolioItems, getYoutubeThumbnail } from '@/lib/portfolio'
import VideoModal from '@/components/VideoModal'
import { FOUNDER, OFFERS, PRICES, PRODUCTION, SITE, STUDIO_LINE, inSentence, priceLine } from '@/lib/seo/facts'
import { faqLd } from '@/lib/seo/schema'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.ruminatex.com/' },
  title: { absolute: 'Ruminate X: AI Film Studio for Brand Films and Commercials' },
  description:
    'Ruminate X is an AI film studio in Calgary that makes brand films, AI commercials, pharma and medical films, company films, UGC-style ads and product visuals. Every frame is made with AI. No crew, no set, no shoot.',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': SITE.orgId,
  name: SITE.name,
  alternateName: ['RuminateX', 'Ruminate X AI Film Studio'],
  url: SITE.url,
  logo: SITE.logo,
  image: `${SITE.url}${SITE.ogImage}`,
  description: `${STUDIO_LINE} ${PRODUCTION.summary}`,
  slogan: 'No idea is impossible.',
  email: SITE.email,
  telephone: SITE.phone,
  foundingDate: String(SITE.foundingYear),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'Alberta',
    addressCountry: 'CA',
  },
  areaServed: 'Worldwide',
  knowsAbout: [
    'AI brand film production',
    'AI commercial production',
    'AI pharma commercials',
    'AI video production for healthcare companies',
    'AI corporate video production',
    'AI avatar videos',
    'AI UGC ads',
    'AI product videos',
    'Generative AI video production',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `${SITE.name} AI film services`,
    itemListElement: OFFERS.map((o) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: o.name,
        description: `${o.plain[0].toUpperCase()}${o.plain.slice(1)}, with every frame made with generative AI.`,
        provider: { '@id': SITE.orgId },
        ...(o.path ? { url: `${SITE.url}${o.path}` } : {}),
      },
    })),
  },
  // sameAs lists only Ruminate X's own profiles. Sibling studios are linked in copy, not here.
  sameAs: [SITE.instagram],
  founder: {
    '@type': 'Person',
    '@id': FOUNDER.id,
    name: FOUNDER.name,
    jobTitle: FOUNDER.jobTitle,
    url: FOUNDER.url,
  },
}

const offerList = OFFERS.map((o) => inSentence(o.name))

const HOME_FAQS = [
  {
    q: 'What is Ruminate X?',
    a: `${STUDIO_LINE} ${FOUNDER.name} founded it in ${SITE.foundingYear}.`,
  },
  {
    q: 'What does Ruminate X make?',
    a: `${offerList.slice(0, -1).join(', ')} and ${offerList[offerList.length - 1]}. ${PRODUCTION.summary}`,
  },
  {
    q: 'How does Ruminate X make a film without a shoot?',
    a: 'It starts from the brief, then fixes the brand world (palette, light, lenses, casting, texture) and boards every shot. Each shot is generated, checked against its board and generated again until it holds; faces, hands and the product get the most passes. Your real logo, label and on-screen text are set in the edit from your brand files. Then the film is edited, scored, mixed, graded and cut into the lengths and aspect ratios each channel needs.',
  },
  {
    q: 'Can Ruminate X make an AI commercial for a pharma, pharmacy or medical brand?',
    a: "Yes. Ruminate X makes AI commercials and films for pharma and pharmacy companies, labs and medical companies. Every claim, the important safety information and any fair-balance text are set in the edit from copy your medical, legal and regulatory reviewers approved, never drawn by the generator, and nothing airs until your reviewers sign off.",
  },
  {
    q: 'How much does a Ruminate X film cost?',
    a: `${priceLine('brand-film')}. Send what the film is for, where it will run, the lengths you need and the date it has to be ready. Length, the number of scenes, how exactly your product has to be reproduced, the number of versions and the review rounds move the number.`,
  },
  {
    q: 'Where is Ruminate X based, and who does it work with?',
    a: `${SITE.name} is in ${SITE.city}. Nothing is filmed, so a brand's location does not change how a film gets made: briefs, boards and review rounds all happen online. It makes films for consumer brands, pharma and pharmacy companies, labs, medical companies and companies of every size.`,
  },
  {
    q: 'How do I start a project with Ruminate X?',
    a: `Send the brief through ${SITE.url}/contact or email ${SITE.email}. Say what the film has to do, who has to see it, where it will run and when it has to be ready.`,
  },
]

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
      'Not a video. A film. We find the story at the core of your brand, the tension and the reason people should care, and put it on screen with cinema-grade storytelling that makes your brand impossible to forget.',
    category: 'Story-Driven Cinema',
    href: '/ai-brand-film-agency',
  },
  {
    number: '02',
    title: 'AI Commercials',
    description:
      'The commercial Ridley Scott would make if he had no budget ceiling and no production constraints. Impossible worlds. Perfect physics. Sequences that shouldn\'t exist. AI lets us build the shot list first and worry about "how" second.',
    category: 'Cinematic Commercials',
    href: '/ai-commercial-production',
  },
  {
    number: '03',
    title: 'Pharma & Medical Films',
    description:
      'Commercials and brand films for pharma and pharmacy brands, labs and medical companies. Claims, safety information and fair balance are set in the edit from the copy your reviewers approved, so the generator never writes a word of it.',
    category: 'Healthcare',
    href: '/ai-video-production-healthcare',
  },
  {
    number: '04',
    title: 'Company & About-Us Films',
    description:
      'The film that introduces your company to customers, candidates, investors or your own people at the all-hands. Your mission, your work and your world on screen, without pulling anyone off the job for a shoot day.',
    category: 'Corporate',
    href: '/ai-corporate-video-production',
  },
  {
    number: '05',
    title: 'UGC-Style Ads',
    description:
      'Ads in the style of creator videos for Reels, TikTok and Shorts, with a hook in the first second and alternative openings for your performance team to test. Scripted ad lines delivered by generated creators, with no fake reviews.',
    category: 'Paid Social',
    href: '/ai-ugc-reels',
  },
  {
    number: '06',
    title: 'Product Visuals',
    description:
      'Product films and stills built from your real product images. The label, the logo and every word on screen are set in the edit from your files, so the bottle in shot nine is the bottle in shot one.',
    category: 'Product & Launch',
    href: '/ai-product-videos',
  },
  {
    number: '07',
    title: 'Avatar Videos',
    description:
      'A generated presenter or spokesperson who explains your product, trains your staff or speaks to customers, in your brand world and on your script.',
    category: 'Presenter Video',
    href: '/ai-avatar-videos',
  },
  {
    number: '08',
    title: 'Fashion & Lifestyle',
    description:
      'Editorial precision. Aspirational by design. Locations that don\'t exist, light that can\'t be replicated, and the look that defines the season, without a single flight or location scout.',
    category: 'Fashion & Editorial',
    href: '/ai-video-production-fashion',
  },
]

const valueProps = [
  {
    stat: '0',
    label: 'Shoot days to book',
    description:
      'No crew, set, location, talent or travel. The shot list starts with the idea instead of the budget, and a scene that would need a helicopter costs the same as one at a desk.',
  },
  {
    stat: '∞',
    label: 'Creative possibilities',
    description:
      "No set. No budget ceiling. No 'that's not possible.' If you can imagine it, we make it real.",
  },
  {
    stat: '100%',
    label: 'Of every frame made with AI',
    description:
      'Every shot is boarded before it is generated, then checked against the board and generated again until faces, hands and your product hold. People write, cut, score, mix and grade every film.',
  },
]

const intentPaths = [
  {
    href: '/ai-commercial-production',
    eyebrow: 'AI commercials',
    title: 'AI commercial production',
    description: 'Spots for TV, streaming and social, every frame generated, with the cutdowns and ratios your media plan needs.',
  },
  {
    href: '/ai-brand-film-agency',
    eyebrow: 'Brand films',
    title: 'AI brand film production',
    description: 'The story-driven film about what your brand stands for, made without a shoot.',
  },
  {
    href: '/guides/ai-pharma-commercials',
    eyebrow: 'Pharma & medical',
    title: 'AI pharma commercials',
    description: 'How drug and pharmacy brands are using AI ads, the FDA rules that apply, and how Ruminate X makes them.',
  },
  {
    href: '/ai-video-production-agencies',
    eyebrow: 'Hiring a studio',
    title: 'AI video production agency',
    description: 'What to look for in an AI video production agency, and how Ruminate X answers each point.',
  },
  {
    href: '/ai-corporate-video-production',
    eyebrow: 'Company films',
    title: 'AI corporate video production',
    description: 'About-us, mission and all-hands films for comms, HR and marketing leads, without a shoot day.',
  },
  {
    href: '/blog/how-much-does-ai-video-production-cost',
    eyebrow: 'Budgets',
    title: 'What AI video production costs',
    description: 'What moves the price of an AI film or commercial, and what a filmed shoot costs for the same job.',
  },
  {
    href: '/comparison/ai-agency-vs-traditional-agency',
    eyebrow: 'AI or a shoot',
    title: 'AI studio vs traditional production',
    description: 'When a brand should hire an AI production partner like Ruminate X instead of booking a shoot.',
  },
  {
    href: '/best-video-production-company-calgary',
    eyebrow: 'Calgary',
    title: 'Video production company in Calgary',
    description: 'Ruminate X is a Calgary studio. How to judge any Calgary video company, and what we make here.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(HOME_FAQS)) }} />

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
              AI Film Studio · Calgary
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
            Ruminate X makes cinema-grade brand films and AI commercials for consumer brands, pharma, labs and
            medical companies. Every frame is made with AI, so there is no crew, set or location to book. Every
            brief is treated like a film.
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
              { value: '0', label: 'Crews, sets or location days' },
              { value: '∞', label: 'Creative possibilities' },
              { value: '100%', label: 'Of every frame made with AI' },
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
      <section aria-label="About Ruminate X, AI film studio" className="border-t border-[#1a1a1a] bg-[#050505] py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">About the Studio</p>
              <h2 className="text-white text-xl font-bold mb-4 leading-snug">
                Ruminate X: the AI film studio for brand films and AI commercials
              </h2>
              <p className="text-[#888888] text-sm leading-relaxed mb-4">{STUDIO_LINE}</p>
              <p className="text-[#888888] text-sm leading-relaxed mb-4">
                Brands hire Ruminate X when the film they want would need a crew, a location, talent and weeks of
                production, and they want it without a shoot. The story gets written and boarded first. Every shot is
                then generated, checked and generated again until faces, hands and the product hold, and your real logo
                and on-screen text go in during the edit.
              </p>
              <p className="text-[#666666] text-sm leading-relaxed">
                Founded in {SITE.foundingYear} by <Link href="/about" className="text-white hover:text-[#ebff00]">{FOUNDER.name}</Link>.
                Based in {SITE.city}, making films for brands anywhere.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">What We Make</p>
                <ul className="space-y-2 text-[#888888]">
                  {OFFERS.map((o) => (
                    <li key={o.key} className="flex items-start gap-2">
                      <span className="text-[#ebff00] mt-0.5">·</span>
                      {o.path ? <Link href={o.path} className="hover:text-[#ebff00]">{o.name}</Link> : o.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">Made For</p>
                <ul className="space-y-2 text-[#888888]">
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Consumer brands</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> <Link href="/ai-video-production-healthcare" className="hover:text-[#ebff00]">Pharma &amp; pharmacy companies</Link></li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Labs &amp; medical companies</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> <Link href="/ai-corporate-video-production" className="hover:text-[#ebff00]">Companies of every size</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">Why Ruminate X</p>
                <ul className="space-y-2 text-[#888888]">
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Every frame made with generative AI</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> No crews, sets or location shoots</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Script, boards, edit, sound and grade by people</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Your real logo and type, set from your files</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Cutdowns and ratios for every channel</li>
                </ul>
              </div>
              <div>
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">Studio Details</p>
                <ul className="space-y-2 text-[#888888]">
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Type: AI film studio</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Location: Calgary, Alberta</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Serves: brands anywhere</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Pricing: {PRICES.find((p) => p.offer === 'brand-film') ? `brand films and commercials from ${PRICES.find((p) => p.offer === 'brand-film')!.from}` : 'quoted from the brief'}</li>
                  <li className="flex items-start gap-2"><span className="text-[#ebff00] mt-0.5">·</span> Founded: {SITE.foundingYear}</li>
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
                href={service.href}
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
            WHO WE MAKE FILMS FOR
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Pharma & Pharmacy', href: '/ai-video-production-healthcare' },
              { label: 'Labs & Medical', href: '/ai-video-production-healthcare' },
              { label: 'Consumer Brands', href: '/ai-commercial-production' },
              { label: 'E-Commerce Brands', href: '/ai-video-production-ecommerce' },
              { label: 'Fashion & Apparel', href: '/ai-video-production-fashion' },
              { label: 'Tech Companies', href: '/ai-commercial-production' },
              { label: 'Companies & Enterprise', href: '/ai-corporate-video-production' },
              { label: 'Food & Beverage', href: '/ai-commercial-production' },
              { label: 'Beauty & Wellness', href: '/ai-product-videos' },
              { label: 'Calgary Businesses', href: '/best-video-production-company-calgary' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm uppercase tracking-[0.15em] px-5 py-3 border border-[#1a1a1a] text-[#888888] hover:border-[#ebff00]/30 hover:text-[#ebff00] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEARCH INTENT HUB ───────────────────────────────────── */}
      <section className="py-24 border-t border-[#1a1a1a] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Start Here</p>
            <h2
              className="text-white leading-none mb-6"
              style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 84px)' }}
            >
              WHAT ARE YOU
              <br />
              MAKING?
            </h2>
            <p className="text-[#888888] text-lg leading-relaxed">
              Pick the film you need. Each page shows how Ruminate X makes it, what you get and what moves the price.
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
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ (written as FAQPage JSON-LD above) ───────────────── */}
      <section className="py-24 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-3">Questions</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(48px, 7vw, 90px)' }} className="text-white leading-none mb-12">
            ABOUT RUMINATE X
          </h2>
          <div className="max-w-3xl divide-y divide-[#1a1a1a] border-y border-[#1a1a1a]">
            {HOME_FAQS.map(({ q, a }) => (
              <div key={q} className="py-6">
                <h3 className="text-white text-lg font-semibold mb-2">{q}</h3>
                <p className="text-[#a3a3a3] leading-relaxed">{a}</p>
              </div>
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
