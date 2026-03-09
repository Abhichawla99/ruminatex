import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { locations } from '@/lib/locations'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return locations.map((loc) => ({ city: loc.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const location = locations.find((l) => l.slug === city)
  if (!location) return {}

  return {
    title: `AI Video Production ${location.city} | Cinematic Brand Films | Ruminate X`,
    description: `Ruminate X delivers AI-powered cinematic brand films and commercial production for brands in ${location.city}. ${location.description} No idea is impossible.`,
    keywords: location.keywords,
    openGraph: {
      title: `AI Video Production ${location.city} | Ruminate X`,
      description: `AI-powered cinematic brand content for ${location.city} brands. No idea is impossible.`,
    },
  }
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default async function CityPage({ params }: Props) {
  const { city } = await params
  const location = locations.find((l) => l.slug === city)
  if (!location) notFound()

  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `AI Video Production ${location.city}`,
    provider: {
      '@type': 'Organization',
      name: 'Ruminate X',
      url: 'https://ruminatex.com',
    },
    serviceType: 'AI Video Production',
    description: `AI-powered cinematic brand video production serving ${location.city} brands.`,
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: {
        '@type': 'Country',
        name: location.country,
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">
          Serving {location.city} · {location.country}
        </p>
        <h1
          style={{ ...displayStyle, fontSize: 'clamp(48px, 10vw, 130px)' }}
          className="text-white leading-none mb-6"
        >
          AI VIDEO<br />PRODUCTION<br />
          <span style={{ color: '#ebff00' }}>{location.city.toUpperCase()}</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-xl">{location.description}</p>
      </section>

      {/* Market Context */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2
                style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }}
                className="text-white leading-none mb-8"
              >
                WHY {location.city.toUpperCase()}<br />BRANDS CHOOSE US
              </h2>
              <p className="text-[#888888] leading-relaxed mb-6">{location.marketContext}</p>
              <p className="text-[#888888] leading-relaxed">
                Based in Calgary, Canada, Ruminate X serves {location.city} brands with the same
                cinematic quality as any local studio — but with AI production capabilities that
                make the impossible achievable at a fraction of local agency costs.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: '100% REMOTE',
                  desc: 'AI-powered production means we deliver cinematic work anywhere in the world. No location limits.',
                },
                {
                  title: 'RESPONSIVE COMMS',
                  desc: 'We adapt our schedules to work seamlessly with your team, wherever you are.',
                },
                {
                  title: 'GLOBAL RATES',
                  desc: `World-class production quality without the overhead of a ${location.city}-based agency.`,
                },
              ].map(({ title, desc }) => (
                <div key={title} className="border border-[#1a1a1a] p-8">
                  <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">
                    {title}
                  </h3>
                  <p className="text-[#888888] text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Industries We Serve</p>
          <h2
            style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }}
            className="text-white leading-none mb-12"
          >
            {location.city.toUpperCase()} BRANDS<br />WE WORK WITH
          </h2>
          <div className="flex flex-wrap gap-3">
            {location.industries.map((industry) => (
              <span
                key={industry}
                className="text-sm uppercase tracking-[0.15em] px-5 py-3 border border-[#1a1a1a] text-[#888888] hover:border-[#ebff00]/30 hover:text-[#ebff00] transition-colors"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">
            Production Services for {location.city} Brands
          </p>
          <h2
            style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }}
            className="text-white leading-none mb-12"
          >
            WHAT WE CREATE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Brand Films', desc: 'Cinematic brand stories, delivered to any market in the world.' },
              { title: 'AI Commercials', desc: 'Impossible visuals for campaigns that stop any scroll, in any city.' },
              { title: 'Fashion Content', desc: 'Editorial-grade video for fashion, beauty, and lifestyle brands.' },
              { title: 'Social Content', desc: 'Volume at quality. Platform-optimized for every channel.' },
              { title: 'Product Launches', desc: 'Launch campaigns built to create cultural moments.' },
              { title: 'Campaign Strategy', desc: 'Creative direction and content strategy for the full campaign.' },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
                <h3 style={{ ...displayStyle, fontSize: '28px' }} className="text-white mb-3">
                  {title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }}
            className="text-white leading-none mb-6"
          >
            {location.city.toUpperCase()} —<br />
            <span style={{ color: '#ebff00' }}>BRING US THE SCENE.</span>
          </h2>
          <p className="text-[#888888] mb-8">
            Tell us the story your brand has been trying to tell. We make films for brands in {location.city} — and everywhere a great story deserves to be told.
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
