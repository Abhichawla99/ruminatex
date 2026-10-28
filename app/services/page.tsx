import type { Metadata } from 'next'
import Link from 'next/link'
import { PRODUCTION, SITE } from '@/lib/seo/facts'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.ruminatex.com/services' },
  title: 'AI Video Production Services: Brand Films, AI Commercials',
  description:
    'What Ruminate X makes: AI brand films, AI commercials, pharma and medical films, company films, UGC-style ads, product visuals and avatar videos. Every frame made with AI, with people writing, editing and grading every film.',
  keywords: [
    'AI video production services',
    'AI video production service',
    'AI brand film production',
    'AI commercial production',
    'AI pharma commercials',
    'AI corporate video production',
    'AI UGC ads',
    'AI product videos',
    'AI avatar videos',
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
      "Most brands are defined by what they sell. Great brands are defined by what they believe. A brand film puts that belief on screen: the tension at the heart of the brand and the reason it exists beyond revenue, told with the craft of a feature film and the precision of a 30-second spot. Every frame is generated, so the film can go anywhere the story needs to go.",
    deliverables: ['Narrative brand film', 'Mission and vision film', 'Brand anthem', 'Launch film', 'Cutdowns and aspect ratios for every channel'],
    idealFor: 'Brands ready to stop describing themselves and start showing who they are.',
    categories: ['Story-Driven', 'Cinematic', 'Brand Identity'],
  },
  {
    number: '02',
    title: 'AI Commercials',
    href: '/ai-commercial-production',
    tagline: "The commercial that shouldn't be possible. It is.",
    description:
      "Picture the shot. The one that's been in your head since the brief dropped, the one your last production company said would cost $300K and take three months. We start there. AI removes every physical constraint between a great idea and a great frame: impossible environments, perfect product physics, sequences that bend reality without breaking believability. We write the shot list first and figure out 'how' second.",
    deliverables: ['Hero commercial', 'TV and streaming spots (15, 30 and 60 seconds)', 'Social cutdowns in 9:16, 1:1 and 4:5', 'Alternative openings for hook tests', 'Captions, music and voice licensed for where it runs'],
    idealFor: "Brands with a creative vision a shoot couldn't deliver, or couldn't deliver in time.",
    categories: ['Cinematic Commercials', 'Campaign', 'Story-Driven'],
  },
  {
    number: '03',
    title: 'Pharma & Medical Films',
    href: '/ai-video-production-healthcare',
    tagline: 'Cinematic, with every claim approved.',
    description:
      'AI commercials, brand films and company films for pharma and pharmacy companies, labs and medical companies. The pictures are generated; the claims are not. Every claim, the important safety information and any fair-balance text are set in the edit from the copy your medical, legal and regulatory reviewers approved, and nothing ships until they sign off.',
    deliverables: ['Pharma and pharmacy commercials', 'Brand films for labs and medical companies', 'About-us films for healthcare companies', 'Product visuals', 'Versions for each channel, claims set from approved copy'],
    idealFor: 'Pharma, pharmacy, lab and medical marketers with a review process for every claim.',
    categories: ['Pharma', 'Pharmacy', 'Medical'],
  },
  {
    number: '04',
    title: 'Company & About-Us Films',
    href: '/ai-corporate-video-production',
    tagline: 'Your company on screen, without a shoot day.',
    description:
      "The film that introduces your company to customers, candidates, investors or your own people. Your mission and your work, told in a world built for the film, so nobody gets pulled off the job for a shoot, and a new office, product or headcount is a regenerated scene instead of a reshoot.",
    deliverables: ['About-us film', 'Mission film', 'All-hands and conference opener', 'Recruiting film', 'Investor and board film'],
    idealFor: 'Comms, HR and marketing leads who need a company film without taking the team off the job.',
    categories: ['Corporate', 'Internal Comms', 'Recruiting'],
  },
  {
    number: '05',
    title: 'UGC-Style Ads',
    href: '/ai-ugc-reels',
    tagline: 'The creator ad, without the creator roster.',
    description:
      'Ads in the style of creator videos for Reels, TikTok and Shorts: a hook in the first second, the product in hand and a clear line to the offer. The creators are generated and deliver scripted ad lines, so there are no fake reviews, and your performance team gets alternative openings to test.',
    deliverables: ['Creator-style ads for Reels, TikTok and Shorts', 'Alternative hooks for testing', '9:16, 1:1 and 4:5 versions', 'Captions', 'AI labels where a platform requires them'],
    idealFor: 'Performance marketers who need more creative to test every week.',
    categories: ['Paid Social', 'Performance', 'DTC'],
  },
  {
    number: '06',
    title: 'Product Visuals',
    href: '/ai-product-videos',
    tagline: 'The product, exactly as it is.',
    description:
      'Product films and stills built from your real product images. Generation does the light, the place and the motion; your label, your logo and every word on screen are set in the edit from your files, so the product stays the same product in every shot.',
    deliverables: ['Product hero film', 'Launch teaser', 'Product stills', 'E-commerce and marketplace video', 'Social cutdowns'],
    idealFor: 'Brands launching a product without the budget or the time for a product shoot.',
    categories: ['Product', 'Launch', 'E-Commerce'],
  },
  {
    number: '07',
    title: 'Avatar Videos',
    href: '/ai-avatar-videos',
    tagline: 'A presenter on your script, in your brand world.',
    description:
      "A generated presenter or spokesperson who explains your product, trains your staff or speaks to your customers. If the presenter is based on a real person, that person's consent and contract come first.",
    deliverables: ['Product explainer with a presenter', 'Training and onboarding video', 'Customer-facing spokesperson video', 'Versions in each format you need'],
    idealFor: 'Teams that need someone on screen without booking a presenter and a studio.',
    categories: ['Presenter', 'Training', 'Explainer'],
  },
  {
    number: '08',
    title: 'Fashion & Lifestyle',
    href: '/ai-video-production-fashion',
    tagline: "The shoot that doesn't need a location.",
    description:
      "The best fashion film you've ever seen probably cost a small fortune in locations, travel, talent and light you could never recreate. We make that feeling, the specific quality of editorial desire, without a single flight. AI gives us every location, every light and every aesthetic. What we bring is the eye: the obsession with texture, movement and the single frame that makes someone stop scrolling and start wanting.",
    deliverables: ['Fashion films', 'Seasonal campaign content', 'Lookbook and editorial', 'Luxury brand films', 'Beauty and product films'],
    idealFor: 'Fashion, beauty, luxury and lifestyle brands who demand editorial precision.',
    categories: ['Fashion', 'Editorial', 'Luxury'],
  },
]

const serviceHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${SITE.name} AI film services`,
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${SITE.url}${service.href}`,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.description,
      provider: { '@id': SITE.orgId },
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
          Ruminate X is an AI film studio in {SITE.city}. {PRODUCTION.summary} People write, board, edit, score and
          grade every film, so what you get is a finished film made the way a production company would make it, minus
          the crew, the set and the location day.
        </p>
        <p className="text-[#888888] text-lg max-w-3xl leading-relaxed mt-6">
          Pick the film you need below. Each one links to the page that shows how Ruminate X makes it, what you get and
          what moves the price. The whole pipeline, stage by stage, is in{' '}
          <Link href="/how-we-make-an-ai-brand-film" className="text-[#ebff00] hover:underline">how we make an AI brand film</Link>,
          and the films are on <Link href="/work" className="text-[#ebff00] hover:underline">the work page</Link>.
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
            The four films brands brief Ruminate X for most. Each page shows the process, the deliverables and the questions buyers ask before they hire.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              {
                href: '/ai-brand-film-agency',
                title: 'AI Brand Films',
                copy: 'For brands that want the film about what they stand for, made without a shoot.',
              },
              {
                href: '/ai-commercial-production',
                title: 'AI Commercial Production',
                copy: 'For campaign teams that need a spot for TV, streaming and social, plus every cutdown.',
              },
              {
                href: '/ai-video-production-healthcare',
                title: 'Pharma & Medical Films',
                copy: 'For pharma, pharmacy, lab and medical marketers whose every claim goes through review.',
              },
              {
                href: '/ai-corporate-video-production',
                title: 'Company & About-Us Films',
                copy: 'For comms and HR leads who need the company film without pulling people off the job.',
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
              { step: '01', title: 'The Brief', description: "Tell us what the film has to do, who has to see it, where it will run and when. The scene in your head that nobody has been able to pull off is where we start. Nothing is generated until the brief is approved." },
              { step: '02', title: 'World & Boards', description: 'Palette, light, lenses, casting and texture are fixed before the first frame, so the last shot matches the first. Then the script, and a board for every shot with its framing, movement and length.' },
              { step: '03', title: 'Generation', description: 'Each shot is generated, checked against its board and generated again until it holds. Faces, hands and your product get the most passes, because that is where AI footage goes wrong.' },
              { step: '04', title: 'The Cut', description: 'Edit, voice, music, mix and grade. Your real logo and on-screen text go in from your brand files, then the cutdowns and aspect ratios are cut from the finished film.' },
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
