import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Generated Brand Content | Scalable Visual Content for Modern Brands | Ruminate X',
  description: 'Create AI generated brand content at scale. Ruminate X delivers on-brand videos, visuals, and creative assets faster and more affordably than traditional agencies.',
  keywords: ['AI generated brand content', 'AI brand content creation', 'AI-powered brand visuals', 'automated brand content', 'AI content for brands', 'AI brand content agency'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-generated-brand-content',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Generated Brand Content',
  description: 'Professional AI-generated brand content production — videos, visuals, and creative assets delivered at scale with human creative direction.',
  provider: {
    '@type': 'Organization',
    name: 'Ruminate X',
    url: 'https://ruminatex.com',
  },
  areaServed: 'Worldwide',
  serviceType: 'AI Content Production',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const benefits = [
  { title: 'Volume Without Compromise', desc: 'Produce dozens of on-brand content pieces in the time it takes a traditional agency to deliver one. AI handles the heavy lifting while human creatives ensure every asset meets your standards.' },
  { title: 'Brand Consistency at Scale', desc: 'Colours, typography, tone, motion style — every piece of content stays true to your visual identity. AI enforces consistency across hundreds of assets without creative drift or fatigue.' },
  { title: 'Dramatically Lower Costs', desc: 'No photo shoots, no stock licensing, no bloated retainer fees. AI-generated brand content delivers premium results at a fraction of traditional production costs, freeing budget for distribution.' },
  { title: 'Rapid Creative Iteration', desc: 'Test five headlines, three visual styles, and two colour palettes before lunch. AI makes creative experimentation fast and affordable, so you can optimise before you commit.' },
]

const useCases = [
  { title: 'Social Media Content Libraries', desc: 'Build weeks of feed-ready content in a single session — static posts, carousels, short-form video, and stories, all tailored to each platform and audience segment.' },
  { title: 'Campaign Creative Suites', desc: 'Launch campaigns with a full suite of coordinated assets: hero videos, display banners, email headers, and social cuts, all produced from a single creative brief.' },
  { title: 'Product Marketing Visuals', desc: 'Showcase products with lifestyle imagery, explainer animations, and feature highlight videos that communicate value in seconds — no photographer required.' },
  { title: 'Brand Storytelling Content', desc: 'Bring your brand narrative to life with cinematic video, motion graphics, and visual essays that communicate mission, values, and culture across every touchpoint.' },
  { title: 'Paid Ad Creative at Scale', desc: 'Generate high-converting ad variations for Meta, Google, TikTok, and LinkedIn. Test creative concepts rapidly and refresh fatigued campaigns without starting from scratch.' },
  { title: 'Internal Communications', desc: 'Keep teams aligned with polished onboarding videos, training materials, culture content, and internal announcements that reflect the same quality as your external brand.' },
]

const process = [
  { step: '01', title: 'Brand Immersion', desc: 'We study your brand guidelines, audience, competitors, and content goals. Every piece of AI-generated content we produce is rooted in your strategy — never generic templates.' },
  { step: '02', title: 'Content Strategy', desc: 'Our team maps out what content types, formats, and themes will drive the most impact. We build a production plan that balances volume with creative quality.' },
  { step: '03', title: 'AI-Powered Production', desc: 'We generate visuals, video, copy, and motion assets using our proprietary AI pipeline. Every output is reviewed, refined, and quality-controlled by experienced human creatives.' },
  { step: '04', title: 'Delivery & Deployment', desc: 'You receive finished assets in every format and resolution you need — organised, tagged, and ready to publish across every channel in your content calendar.' },
]

export default function AIGeneratedBrandContentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Generated Brand Content</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI GENERATED<br />BRAND CONTENT<br /><span style={{ color: '#ebff00' }}>THAT CONVERTS.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Modern brands need more content than any traditional team can produce. Ruminate X combines artificial intelligence with human creative direction to generate brand content that is visually stunning, strategically sound, and ready to publish at a pace your competitors cannot match. From video and motion graphics to social assets and ad creative — we build content systems that scale with your ambition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get AI Brand Content</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '10x', label: 'More content per month' },
              { stat: '3–5 days', label: 'From brief to finished assets' },
              { stat: '70%', label: 'Cost reduction vs. traditional' },
              { stat: '100+', label: 'Asset variations per campaign' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Is AI Generated Brand Content?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">CONTENT CREATION<br />REIMAGINED FOR<br />THE AI ERA</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            AI generated brand content refers to professional visual and video assets created using artificial intelligence tools — guided, curated, and perfected by experienced human creatives. This is not about pushing a button and accepting whatever a machine produces. At Ruminate X, AI-generated brand content means cinematic video, polished motion graphics, social-ready imagery, and ad creative that looks and feels like it was produced by a top-tier agency — because it was. The AI simply makes us faster, more versatile, and dramatically more cost-effective.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            The content landscape has shifted permanently. Brands now compete for attention across Instagram, TikTok, YouTube, LinkedIn, email, and paid media simultaneously. Each channel has its own format requirements, audience expectations, and content velocity demands. Traditional production methods — with their long timelines, fixed deliverables, and high per-asset costs — were never designed for this reality. AI-generated brand content solves the volume problem without sacrificing the quality that makes your brand distinctive.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Our proprietary AI pipeline handles the production-intensive work: generating visuals, compositing scenes, creating motion assets, producing voiceovers, and formatting outputs for every platform. Our creative team handles everything that matters most — strategy, storytelling, brand alignment, and creative direction. The result is a content engine that delivers more, faster, and at a price point that makes always-on content marketing genuinely achievable.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why Brands Need AI Content</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">THE CONTENT GAP<br />IS REAL</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">AI BRAND CONTENT<br />FOR EVERY CHANNEL</h2>
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">HOW WE BUILD<br />YOUR CONTENT ENGINE</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">AN AGENCY,<br />NOT A TOOL</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Anyone can access AI content generators. The difference is what you do with them. Ruminate X is not a self-serve platform or a template library. We are a full-service creative agency with a proprietary AI production pipeline built specifically for brand content at scale. You get a dedicated creative team, a strategic brief, custom creative direction, and a quality-controlled output process — not a subscription login and a prayer.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Our workflow is purpose-built for brands that need volume without sacrificing quality. We combine <Link href="/ai-brand-videos" className="text-[#ebff00] hover:underline">AI brand video production</Link> with static design, motion graphics, and multi-format content creation to deliver complete content ecosystems from a single brief. Whether you need ten assets or ten thousand, our AI pipeline scales while our <Link href="/ai-content-creation-agency" className="text-[#ebff00] hover:underline">content creation team</Link> ensures every piece serves your brand strategy. The result is content that performs — not just content that exists.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            YOUR BRAND<br />NEEDS MORE<br /><span style={{ color: '#ebff00' }}>CONTENT.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your brand and content goals. We&apos;ll show you exactly how AI-generated brand content can transform your output — and deliver a creative concept within the week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
