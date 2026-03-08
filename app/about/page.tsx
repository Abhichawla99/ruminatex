import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | AI Creative Studio Based in Calgary, Serving Brands Worldwide',
  description:
    "Ruminate X is an AI creative studio based in Calgary, Canada, producing cinematic brand content for brands worldwide. No idea is impossible — we say yes when others say it can't be done.",
  keywords: [
    'AI creative studio Calgary',
    'AI video production Canada',
    'cinematic brand film studio',
    'AI content agency Canada',
  ],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const values = [
  {
    title: 'No Limits',
    description: "We approach every brief by asking 'what if?' instead of 'can we?' Constraints are starting points for creativity, not stopping points.",
  },
  {
    title: 'Cinema First',
    description: "We never use AI as a shortcut at the expense of quality. Every frame should feel intentional, crafted, and cinematic — regardless of how it was made.",
  },
  {
    title: 'Brand Truth',
    description: "Great content doesn't just look good — it says something real about your brand. We dig deep to understand the truth your brand needs to tell.",
  },
  {
    title: 'Speed Matters',
    description: 'The market moves fast. We move faster. AI allows us to move at the speed of culture without sacrificing craft.',
  },
  {
    title: 'Global Perspective',
    description: 'From Calgary, we see the whole world. Our work is informed by global creative trends, cultural moments, and the best creative work happening anywhere.',
  },
  {
    title: 'Results-Obsessed',
    description: "Beautiful content that doesn't perform is decoration. Every piece we create is designed to achieve measurable outcomes for your brand.",
  },
]

const cities = [
  'New York', 'Los Angeles', 'London', 'Toronto',
  'Dubai', 'Miami', 'San Francisco', 'Sydney',
  'Singapore', 'Chicago', 'Paris', 'Amsterdam',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Our Story</p>
        <h1
          style={{ ...displayStyle, fontSize: 'clamp(60px, 12vw, 150px)' }}
          className="text-white leading-none mb-6"
        >
          ABOUT US
        </h1>
      </section>

      {/* Mission */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2
                style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 75px)' }}
                className="text-white leading-none mb-8"
              >
                WE BELIEVE NO<br />IDEA SHOULD STAY<br />
                <span style={{ color: '#ebff00' }}>IMAGINARY.</span>
              </h2>
            </div>
            <div className="space-y-6 text-[#888888] leading-relaxed">
              <p>
                Ruminate X was born from a frustration. Too many brands had powerful, cinematic
                visions for their content — but traditional production agencies told them it was
                too expensive, too complex, or simply impossible. The ideas died in boardrooms.
              </p>
              <p>
                We built Ruminate X to change that. By harnessing the power of AI-driven
                production tools alongside cinematic storytelling craft, we can now make real
                what was once only imagined.
              </p>
              <p>
                Based in Calgary, Canada — but built for the world. We work with brands from
                New York to Dubai, London to Los Angeles. Great creative knows no borders.
              </p>
              <p>
                Our singular promise: when you come to us with an idea, no matter how ambitious,
                our answer will always start with &quot;yes, here&apos;s how.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Our Values</p>
          <h2
            style={{ ...displayStyle, fontSize: 'clamp(48px, 8vw, 100px)' }}
            className="text-white leading-none mb-16"
          >
            HOW WE THINK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ title, description }) => (
              <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
                <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-4">
                  {title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global reach */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Our Reach</p>
              <h2
                style={{ ...displayStyle, fontSize: 'clamp(48px, 7vw, 90px)' }}
                className="text-white leading-none mb-8"
              >
                CALGARY.<br />
                <span style={{ color: '#ebff00' }}>THE WORLD.</span>
              </h2>
              <p className="text-[#888888] leading-relaxed mb-6">
                AI-powered production has no geographical boundaries. We create content for brands
                in the world&apos;s most competitive markets — New York, London, Los Angeles, Dubai,
                Toronto, and beyond — from our studio in Calgary.
              </p>
              <p className="text-[#888888] leading-relaxed">
                Time zones don&apos;t slow us down. Neither does distance. What matters is the work.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {cities.map((city) => (
                <div
                  key={city}
                  className="border border-[#1a1a1a] px-6 py-4 text-sm uppercase tracking-[0.2em] text-[#666666] hover:text-[#ebff00] hover:border-[#ebff00]/30 transition-colors"
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[#1a1a1a] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }}
            className="text-white leading-none mb-6"
          >
            LET&apos;S BUILD<br />
            <span style={{ color: '#ebff00' }}>SOMETHING REAL.</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
