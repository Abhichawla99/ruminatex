import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Ads | High-Converting Ad Creatives at Scale | Ruminate X',
  description: 'Create scroll-stopping AI video ads for Meta, YouTube, TikTok & LinkedIn. Ruminate X delivers high-converting ad creatives faster and at a fraction of the cost.',
  keywords: ['AI video ads', 'AI-generated video ads', 'AI ad creatives', 'AI video advertising', 'automated video ad production', 'AI video ads agency'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-video-ads',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Video Ads',
  description: 'High-converting AI-powered video ad production for paid media campaigns across every major platform — faster iteration, lower cost, better results.',
  provider: {
    '@type': 'Organization',
    name: 'Ruminate X',
    url: 'https://ruminatex.com',
  },
  areaServed: 'Worldwide',
  serviceType: 'AI Video Production',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const benefits = [
  { title: 'Rapid Creative Testing', desc: 'Launch dozens of ad variations in the time it takes a traditional agency to deliver one. AI lets you test hooks, visuals, and CTAs at speed — so you find winners before your budget runs dry.' },
  { title: 'Platform-Native Formats', desc: 'Every ad is built for the platform it runs on — vertical for Reels and TikTok, square for feeds, landscape for YouTube pre-roll. No awkward cropping, no wasted frame space.' },
  { title: 'Fraction of Traditional Cost', desc: 'Skip the studio, the crew, and the six-week timeline. AI video ads deliver broadcast-quality results at a price point that makes creative refresh financially viable every single week.' },
  { title: 'Data-Driven Iteration', desc: 'When performance data tells you what works, we spin up new variants in hours — not weeks. AI makes the feedback loop between media buying and creative production nearly instant.' },
]

const useCases = [
  { title: 'Direct Response Ads', desc: 'Conversion-focused video ads built for Meta, Google, and TikTok campaigns. Designed to stop the scroll, communicate value, and drive clicks with clear calls to action.' },
  { title: 'Retargeting Creatives', desc: 'Sequenced video ads that re-engage warm audiences with fresh angles, social proof, and urgency — without creative fatigue killing your frequency caps.' },
  { title: 'Product Launch Campaigns', desc: 'Full suites of launch-day video ads across every format and platform. Go from announcement teaser to feature deep-dive to testimonial in a single production sprint.' },
  { title: 'App Install & Demo Ads', desc: 'Screen-captured and motion-designed video ads that showcase your app in action — optimized for install campaigns on iOS, Android, and web.' },
  { title: 'Brand Awareness Spots', desc: 'Cinematic top-of-funnel video ads that introduce your brand to cold audiences. Built to maximize view-through rate and brand recall across YouTube and Connected TV.' },
  { title: 'Seasonal & Event Promos', desc: 'Time-sensitive video ads for Black Friday, product drops, flash sales, and seasonal campaigns — produced fast enough to match the urgency of the offer.' },
]

const process = [
  { step: '01', title: 'Brief & Strategy', desc: 'We start with your campaign goals, target audience, and platform mix. Every ad we produce is rooted in performance strategy — not just creative instinct.' },
  { step: '02', title: 'Script & Storyboard', desc: 'Our team writes hooks, scripts, and visual storyboards designed for paid media. You approve the creative direction before a single frame is generated.' },
  { step: '03', title: 'AI Production', desc: 'We produce video ads using our proprietary AI pipeline — generating visuals, motion, voiceover, captions, and music. Human creatives review every output for quality.' },
  { step: '04', title: 'Delivery & Variants', desc: 'You receive finished ads in every format your media plan requires — plus variant sets for A/B testing hooks, CTAs, and visual treatments from day one.' },
]

export default function AIVideoAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Video Ads</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI VIDEO ADS<br />THAT ACTUALLY<br /><span style={{ color: '#ebff00' }}>CONVERT.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Paid media burns through creative faster than any team can produce it. Ruminate X changes the equation. We use AI-powered production to deliver scroll-stopping video ads at the speed and scale your campaigns demand — across Meta, YouTube, TikTok, LinkedIn, and every platform in between. More creatives, faster iteration, better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get AI Video Ads</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '50+', label: 'Ad variants from one concept' },
              { stat: '3–5 days', label: 'From brief to launch-ready ads' },
              { stat: '70%', label: 'Lower cost vs. traditional shoots' },
              { stat: '∞', label: 'Creative refresh on demand' },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <p style={{ ...displayStyle, fontSize: 'clamp(32px, 4vw, 52px)', color: '#ebff00' }}>{stat}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-[#666666] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Are AI Video Ads?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">PAID MEDIA CREATIVE<br />BUILT FOR<br />PERFORMANCE</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            AI video ads are professionally produced video advertisements created using artificial intelligence — directed, refined, and quality-controlled by experienced human creatives. They are not cheap template mashups or robotic slideshows with stock footage. At Ruminate X, AI video ads mean cinematic visuals, compelling hooks, and polished post-production engineered to drive measurable business results.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            The core advantage is volume and velocity. Traditional ad production gives you one or two hero creatives per campaign. AI video ad production gives you twenty, fifty, or a hundred — each tailored to a different audience segment, platform spec, or creative hypothesis. That means more data, faster learning, and better return on every dollar you spend on media.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Every performance marketer knows the truth: creative is the new targeting. Algorithms optimize delivery, but the creative determines whether someone stops scrolling. AI video ads give you the volume of creative you need to let the platforms find what works — without blowing your entire production budget on a single shoot day that may or may not produce a winner.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why AI for Paid Media</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">THE PERFORMANCE<br />ADVANTAGE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map(({ title, desc }) => (
              <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
                <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Use Cases</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">AI VIDEO ADS<br />FOR EVERY CAMPAIGN</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map(({ title, desc }) => (
            <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Our Process</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">HOW WE BUILD<br />YOUR AD CREATIVES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="border border-[#1a1a1a] p-8">
                <p style={{ ...displayStyle, fontSize: '64px', color: '#1a1a1a' }} className="mb-4">{step}</p>
                <h3 style={{ ...displayStyle, fontSize: '24px', color: '#ebff00' }} className="mb-3">{title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">How We&apos;re Different</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">NOT ANOTHER<br />AD TEMPLATE TOOL</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Self-serve AI ad tools give you a drag-and-drop editor and call it production. Ruminate X is a full-service creative agency powered by AI. You get a dedicated team that understands direct response, a strategic brief tailored to your funnel, and ad creatives that are built to perform — not just look pretty in a preview window.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            We built our own AI production pipeline specifically for paid media. That means proprietary workflows for hook testing, visual consistency, platform-native formatting, and rapid variant generation. The AI handles speed and scale. Our creatives handle strategy and storytelling. Together, we produce <Link href="/ai-brand-videos" className="text-[#ebff00] hover:underline">AI brand videos</Link> and ad creatives that outperform what either humans or machines could build alone.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            YOUR ADS<br />DESERVE BETTER<br /><span style={{ color: '#ebff00' }}>CREATIVE.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your campaigns and your goals. We&apos;ll show you how AI video ads can transform your paid media performance — and deliver a concept within the week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
