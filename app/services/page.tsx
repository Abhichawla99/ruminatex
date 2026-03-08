import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | AI Video Production, Brand Films & Commercial Content',
  description:
    "Ruminate X offers AI-powered brand films, commercial production, fashion content, social media content, and product launch campaigns for brands worldwide. See what's possible.",
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
    tagline: 'Tell the story only you can tell.',
    description:
      "Your brand has a story worth telling — one that goes beyond products and prices. We create cinematic brand films that communicate your values, culture, and vision in a way that resonates deeply with your audience. These aren't just videos; they're the content people share, remember, and return to.",
    deliverables: ['Brand Narrative Film', 'Founder Story', 'Mission Films', 'Culture Videos', 'Anniversary Films'],
    idealFor: 'Established brands ready to define their identity at a higher level.',
    categories: ['Brand Storytelling', 'Cinematic', 'AI-Powered'],
  },
  {
    number: '02',
    title: 'AI Commercials',
    tagline: 'The impossible ad. Made real.',
    description:
      "The visuals you've always wanted but thought were too expensive, too complex, or simply impossible. With AI-powered production, we shatter those limits. Product demos with impossible physics, fantasy world-building, photorealistic scenarios — all at commercial quality and timeline efficiency that traditional production can't match.",
    deliverables: ['Product Commercials', 'Launch Ads', 'Campaign Videos', 'TV & Digital Spots', 'Concept Films'],
    idealFor: 'Brands launching campaigns and needing high-impact visual storytelling.',
    categories: ['Campaign Production', 'AI Visual', 'Commercial'],
  },
  {
    number: '03',
    title: 'Fashion & Lifestyle',
    tagline: 'Beauty that moves.',
    description:
      "Fashion content requires a specific kind of eye — one that understands aesthetics, movement, texture, and the aspirational quality that makes people desire. We bring editorial-magazine-level craft to every frame, combined with AI capabilities that allow for locations, looks, and aesthetics that no single shoot could achieve.",
    deliverables: ['Fashion Films', 'Lookbook Videos', 'Campaign Content', 'Runway & Editorial', 'Product Beauty Films'],
    idealFor: 'Fashion, beauty, apparel, and luxury brands seeking premium content.',
    categories: ['Fashion', 'Editorial', 'Lifestyle'],
  },
  {
    number: '04',
    title: 'Social Content',
    tagline: 'Volume. Quality. Both.',
    description:
      "The modern brand needs to show up consistently across platforms — without compromising on quality. We produce high-volume, studio-quality social content optimized for each platform's algorithm, format, and audience behavior. Never choose between frequency and craft again.",
    deliverables: ['Instagram Reels', 'TikTok Content', 'YouTube Shorts', 'Social Ads', 'Content Series'],
    idealFor: "DTC brands, e-commerce businesses, and consumer brands scaling their content.",
    categories: ['Social Media', 'DTC', 'E-commerce'],
  },
  {
    number: '05',
    title: 'Product Launches',
    tagline: 'Debut that demands attention.',
    description:
      "A product launch is a moment. You only get one first impression, and it should be impossible to ignore. We create launch campaigns that generate anticipation, drive conversion, and leave a lasting mark in your category. From teaser content to hero launch films to post-launch series — we own the full launch arc.",
    deliverables: ['Launch Films', 'Teaser Campaigns', 'Product Demo Videos', 'Pre-launch Content', 'Launch Day Content'],
    idealFor: 'Any brand launching a new product or entering a new market.',
    categories: ['Launch Strategy', 'Campaign', 'Conversion'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What We Do</p>
        <h1
          style={{ ...displayStyle, fontSize: 'clamp(60px, 12vw, 150px)' }}
          className="text-white leading-none mb-6"
        >
          SERVICES
        </h1>
        <p className="text-[#888888] text-lg max-w-xl">
          Every service we offer is built on one principle: your vision matters more than convention.
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
                  <div className="flex flex-wrap gap-2">
                    {service.categories.map((cat) => (
                      <span key={cat} className="text-xs uppercase tracking-[0.15em] px-3 py-1 border border-[#1a1a1a] text-[#666666]">
                        {cat}
                      </span>
                    ))}
                  </div>
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
                      <p className="text-sm text-[#888888] leading-relaxed">{service.idealFor}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
              { step: '01', title: 'Discovery', description: "We start by understanding your brand, goals, and the vision you're trying to achieve. No idea is too ambitious." },
              { step: '02', title: 'Concept', description: 'Our creative team develops a concept that captures your vision — with AI possibilities built in from day one.' },
              { step: '03', title: 'Production', description: 'We execute with AI-powered production tools that deliver cinematic quality at a fraction of traditional timelines.' },
              { step: '04', title: 'Delivery', description: 'You receive broadcast-quality content ready for any platform, format, or campaign — delivered on time.' },
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
            WHAT DO YOU<br />
            <span style={{ color: '#ebff00' }}>WANT TO CREATE?</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us your idea. No matter how ambitious, we want to hear it.</p>
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
