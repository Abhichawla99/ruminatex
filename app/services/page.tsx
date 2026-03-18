import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Cinema-Grade Brand Films, AI Commercials & Story-Driven Production',
  description:
    "Ruminate X makes cinema-grade brand films, AI commercials, and story-driven campaign content for brands that refuse to be ordinary. Every brief is treated like a film. Every frame is earned.",
  keywords: [
    'AI video production services',
    'brand film production',
    'AI commercial production',
    'fashion video content',
    'social media video production',
    'product launch video',
  ],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const services = [
  {
    number: '01',
    title: 'Brand Films',
    href: '/ai-brand-film-agency',
    tagline: 'Your brand has one true story. We find it.',
    description:
      "Most brands are defined by what they sell. Great brands are defined by what they believe. A brand film is not a product showcase — it's a declaration. We dig into the tension at the heart of your brand, the reason you exist beyond revenue, the thing that makes your people get out of bed. Then we put it on screen with the craft of a feature film and the precision of a 30-second spot. The result is the single most powerful piece of marketing you will ever create.",
    deliverables: ['Narrative Brand Film', 'Founder Story Film', 'Mission & Vision Film', 'Culture Documentary', 'Brand Anthem'],
    idealFor: 'Brands ready to stop describing themselves and start showing who they are.',
    categories: ['Story-Driven', 'Cinematic', 'Brand Identity'],
  },
  {
    number: '02',
    title: 'AI Commercials',
    href: '/ai-commercial-production',
    tagline: 'The commercial that shouldn\'t be possible. It is.',
    description:
      "Picture the shot. The one that's been in your head since the brief dropped — the one your last production company said would cost $300K and take three months. We start there. AI removes every physical constraint that traditionally stood between a great idea and a great frame. Impossible environments. Perfect product physics. Sequences that bend reality without breaking believability. We write the shot list first. We figure out 'how' second. Always.",
    deliverables: ['Hero Brand Commercial', 'TV & Streaming Spots (15/30/60 sec)', 'Digital Campaign Films', 'Product Story Ads', 'Concept & Experimental Films'],
    idealFor: 'Brands with a creative vision that traditional production couldn\'t execute.',
    categories: ['Cinematic Commercials', 'Campaign', 'Story-Driven'],
  },
  {
    number: '03',
    title: 'Fashion & Lifestyle',
    href: '/ai-video-production-fashion',
    tagline: 'The shoot that doesn\'t need a location.',
    description:
      "The best fashion film you've ever seen probably cost a small fortune in locations, travel, talent, and light you could never recreate. We reproduce that feeling — that specific quality of editorial desire — without a single flight. AI gives us access to every location, every light, every aesthetic in existence. What we bring is the eye. The obsession with texture, movement, and the single frame that makes someone stop scrolling and start wanting.",
    deliverables: ['Fashion Films', 'Seasonal Campaign Content', 'Lookbook & Editorial', 'Luxury Brand Films', 'Beauty & Product Films'],
    idealFor: 'Fashion, beauty, luxury, and lifestyle brands who demand editorial precision.',
    categories: ['Fashion', 'Editorial', 'Luxury'],
  },
  {
    number: '04',
    title: 'Social Content',
    href: '/ai-social-media-video-agency',
    tagline: 'A micro-film. Every single time.',
    description:
      "We refuse to make filler content. Every piece of social content we produce is built around a story — a hook that earns attention, a middle that builds tension or desire, an ending that lands. Fifteen seconds is a story. Sixty seconds is a film. We treat them both with the same seriousness, because your audience does too. High volume. No shortcuts. No templates.",
    deliverables: ['TikTok Story Series', 'Instagram Reels', 'YouTube Shorts', 'Social Campaign Films', 'Always-On Content'],
    idealFor: 'Brands that want to show up consistently without looking like they gave up.',
    categories: ['Story-First Social', 'DTC', 'Campaign'],
  },
  {
    number: '05',
    title: 'Product Launches',
    href: '/ai-product-video-agency',
    tagline: 'Opening scene. Make it count.',
    description:
      "A launch is an act one. The scene that establishes the world, introduces the protagonist, and makes the audience lean forward. We write it, we shoot it, and we make sure it hits. From the teaser that builds dread and anticipation, to the hero film that delivers the payoff, to the post-launch content that keeps the story moving — we own the entire narrative arc of your launch.",
    deliverables: ['Hero Launch Film', 'Teaser & Countdown Content', 'Product Story Commercials', 'Launch Day Campaign Assets', 'Post-Launch Content Arc'],
    idealFor: 'Brands with one shot to make a first impression that sticks.',
    categories: ['Launch Strategy', 'Narrative Campaign', 'Story Arc'],
  },
]

const serviceHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ruminate X AI Video Production Services',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `https://ruminatex.com${service.href}`,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.description,
      provider: {
        '@type': 'Organization',
        name: 'Ruminate X',
        url: 'https://ruminatex.com',
      },
      areaServed: 'Worldwide',
      serviceType: service.title,
    },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceHubSchema) }}
      />

      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What We Do</p>
        <h1
          style={{ ...displayStyle, fontSize: 'clamp(60px, 12vw, 150px)' }}
          className="text-white leading-none mb-6"
        >
          SERVICES
        </h1>
        <p className="text-[#888888] text-lg max-w-3xl leading-relaxed">
          Ruminate X offers AI video production services for brands that need cinema-grade brand films, AI commercials, product videos, fashion campaigns, and story-driven social content without the cost and drag of traditional production. If you&apos;re comparing video production services, this page shows what we make, who each service fits best, and where to go next based on your campaign intent.
        </p>
      </section>

      {/* Services Detail */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="divide-y divide-[#1a1a1a]">
          {services.map((service) => (
            <div key={service.number} className="py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left */}
                <div className="lg:col-span-4">
                  <span style={{ ...displayStyle, fontSize: '80px', color: '#1a1a1a' }} className="block mb-4">
                    {service.number}
                  </span>
                  <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 5vw, 60px)' }} className="text-white mb-3 leading-none">
                    {service.title}
                  </h2>
                  <p className="text-[#ebff00] text-sm italic mb-6">{service.tagline}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.categories.map((cat) => (
                      <span key={cat} className="text-xs uppercase tracking-[0.15em] px-3 py-1 border border-[#1a1a1a] text-[#666666]">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#ebff00] hover:text-white transition-colors"
                  >
                    Explore {service.title}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Right */}
                <div className="lg:col-span-8">
                  <p className="text-[#888888] leading-relaxed text-lg mb-10">{service.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-[#ebff00] mb-4">Deliverables</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-sm text-[#888888]">
                            <span className="w-1 h-1 bg-[#ebff00] rounded-full flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-[#ebff00] mb-4">Ideal For</h4>
                      <p className="text-sm text-[#888888] leading-relaxed mb-6">{service.idealFor}</p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#ebff00] transition-colors"
                      >
                        Visit the dedicated {service.title.toLowerCase()} page
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service path chooser */}
      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Choose the Right Path</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 72px)' }} className="text-white leading-none mb-6">
            START WITH THE
            <br />
            RIGHT SERVICE PAGE
          </h2>
          <p className="text-[#888888] text-lg max-w-3xl leading-relaxed mb-12">
            Different search intents need different landing pages. If you&apos;re looking for a cinematic brand film agency, AI commercial production, product video support, or social-first creative, use the page below that matches the job you need done.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              {
                href: '/ai-brand-film-agency',
                title: 'Brand Film Agency',
                copy: 'For companies searching for a cinematic brand film partner with narrative depth.',
              },
              {
                href: '/ai-commercial-production',
                title: 'AI Commercial Production',
                copy: 'For campaign teams comparing commercial production options, speed, and creative range.',
              },
              {
                href: '/ai-product-video-agency',
                title: 'Product Video Agency',
                copy: 'For launches, demos, and product storytelling built to improve clarity and conversion.',
              },
              {
                href: '/ai-social-media-video-agency',
                title: 'Social Video Agency',
                copy: 'For brands that need repeatable, story-led social video without template fatigue.',
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-[#1a1a1a] p-6 hover:border-[#ebff00]/40 hover:bg-[#0b0b0b] transition-colors"
              >
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#888888] leading-relaxed">{item.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">How We Work</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(48px, 8vw, 100px)' }} className="text-white leading-none mb-16">
            THE PROCESS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'The Brief', description: "Tell us the story you want to tell. The feeling you want to create. The scene in your head that no one else has been able to pull off. That's where we start — not with formats or deliverables, but with the idea." },
              { step: '02', title: 'The Script', description: 'Every great film starts with a great script. We write the narrative arc, the visual language, the emotional throughline — before a single frame is rendered. Story first. Always.' },
              { step: '03', title: 'The Shoot', description: 'This is where AI becomes our director of photography, our location scout, our VFX team. We execute the shot list with cinema-grade precision — no constraints, no compromises.' },
              { step: '04', title: 'The Cut', description: 'We edit like a film editor — for rhythm, for emotion, for the exact moment the music and the image and the idea collide. What you receive is a finished film, not a draft.' },
            ].map(({ step, title, description }) => (
              <div key={step} className="border border-[#1a1a1a] p-8">
                <span style={{ ...displayStyle, fontSize: '48px', color: '#ebff00' }} className="block mb-4">{step}</span>
                <h3 style={{ ...displayStyle, fontSize: '28px' }} className="text-white mb-4">{title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[#1a1a1a] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            WHAT SCENE<br />ARE YOU TRYING<br />
            <span style={{ color: '#ebff00' }}>TO MAKE REAL?</span>
          </h2>
          <p className="text-[#888888] mb-8">Bring us the vision. The impossible shot. The story your brand has been trying to tell. We start there.</p>
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
