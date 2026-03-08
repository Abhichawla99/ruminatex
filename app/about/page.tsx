import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Ruminate X — Cinematic Story Studio Making Films for Brands',
  description:
    "Ruminate X is a cinematic story studio based in Calgary. We make films for brands — story-driven brand films, AI commercials, and campaign content that treats every brief with the seriousness of a feature production.",
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
    title: 'Story First',
    description: "Before the shot list, before the format, before the platform — the story. Every project starts with the narrative truth your brand needs to tell. If the story isn't right, nothing else matters.",
  },
  {
    title: 'Every Frame Earned',
    description: "We don't render filler. Every single frame in every film we produce exists because it earns its place — it advances the story, creates the feeling, or lands the moment. Cinema is not a style. It's a standard.",
  },
  {
    title: 'The Impossible Shot',
    description: "The scene you thought was out of reach — the location that doesn't exist, the physics that can't be filmed, the aesthetic that costs a million dollars — that's our starting point. We build the shot list first and solve the 'how' second.",
  },
  {
    title: 'Craft at Speed',
    description: "The best creative work takes time. We disagree. AI has collapsed the gap between idea and execution. We move at the speed of culture without ever moving away from craft.",
  },
  {
    title: 'No Compromise',
    description: "Traditional agencies compromise. Budgets force cuts. Crews have limits. Schedules slip. We operate without those constraints — which means the version you imagined is the version that gets made.",
  },
  {
    title: 'The Audience Decides',
    description: "Beautiful films that don't move people are screensavers. Every story we tell is designed to create a specific feeling in a specific viewer at a specific moment. That's not art direction — that's craft.",
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
                WE MAKE FILMS<br />FOR BRANDS.<br />
                <span style={{ color: '#ebff00' }}>FULL STOP.</span>
              </h2>
            </div>
            <div className="space-y-6 text-[#888888] leading-relaxed">
              <p>
                There is a scene in every brand&apos;s story that has never been put on screen.
                The one that would make people actually feel something. The one that would make
                them stop, rewatch, and share it without being asked. That scene exists. It just
                hasn&apos;t been made yet.
              </p>
              <p>
                Ruminate X was built to make that scene. We are a cinematic story studio — not
                a content factory, not an ad agency, not a video vendor. We approach every brief
                the way a director approaches a script: with obsessive attention to narrative,
                to emotion, to the exact frame where everything clicks.
              </p>
              <p>
                AI gives us the production capability to execute any shot list imaginable.
                But capability without craft is just noise. Story is what separates a film from
                a file. We bring both.
              </p>
              <p>
                Based in Calgary. Making cinema for brands in New York, London, Dubai, Los Angeles,
                and everywhere a great story deserves to be told.
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
            BRING US<br />THE SCENE.<br />
            <span style={{ color: '#ebff00' }}>WE&apos;LL MAKE IT.</span>
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
