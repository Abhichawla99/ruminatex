import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Product Videos | Scalable Product Video Production | Ruminate X',
  description: 'Create stunning AI product videos that showcase features, drive conversions, and scale across platforms. Ruminate X delivers product video production faster.',
  keywords: ['AI product videos', 'AI product video production', 'product demo videos', 'AI-generated product videos', 'product showcase videos', 'ecommerce product videos'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-product-videos',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Product Videos',
  description: 'AI-powered product video production that showcases features, builds desire, and drives conversions — at scale and speed traditional production cannot match.',
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
  { title: 'Launch-Day Ready', desc: 'New SKU dropping next week? AI product video production delivers polished hero videos, lifestyle clips, and feature breakdowns in days — not the weeks a traditional shoot demands. Your product hits the market with video from day one.' },
  { title: 'Infinite Variations', desc: 'One product, dozens of audiences. AI lets you generate unique versions for every platform, demographic, and use case — different angles, different messaging, different music — without rebooking a studio for each variation.' },
  { title: 'Consistent Brand Quality', desc: 'Every frame matches your brand guidelines. AI pipelines lock in lighting, color grading, typography, and motion style so that your hundredth product video looks as polished and on-brand as your first.' },
  { title: 'Lower Cost per Video', desc: 'Traditional product shoots require studios, lighting rigs, camera operators, and post-production timelines. AI product video production removes those fixed costs and lets you invest in volume and creative testing instead.' },
]

const useCases = [
  { title: 'Ecommerce PDP Videos', desc: 'Hero videos for product detail pages that show the item in context, highlight key features, and reduce return rates by giving shoppers a realistic preview before they buy.' },
  { title: 'Social Commerce Clips', desc: 'Short, scroll-stopping product videos built for Instagram Shopping, TikTok Shop, and Pinterest — formatted natively for each platform and designed to convert in under fifteen seconds.' },
  { title: 'Product Launch Teasers', desc: 'Build anticipation before a drop with cinematic teaser videos that reveal just enough to generate excitement — then follow up with full feature reveals on launch day.' },
  { title: 'Feature Highlight Reels', desc: 'Isolate individual product features in focused video segments. Perfect for paid media, email campaigns, and landing pages where you need to communicate one benefit clearly.' },
  { title: 'Comparison & Demo Videos', desc: 'Side-by-side comparisons and hands-on demo videos that help prospects understand what makes your product different — and why it is worth the investment.' },
  { title: 'Catalog-Scale Production', desc: 'Need video for fifty, a hundred, or a thousand SKUs? AI-powered batch production creates consistent, high-quality product videos across your entire catalog without linear cost scaling.' },
]

const process = [
  { step: '01', title: 'Product Brief', desc: 'Share your product details, brand guidelines, hero features, and target audience. We build a creative brief tailored to where and how your product videos will be used.' },
  { step: '02', title: 'Creative Direction', desc: 'Our team develops visual concepts — camera angles, environments, motion treatments, and messaging hierarchy. You approve the direction before production begins.' },
  { step: '03', title: 'AI Production', desc: 'We generate product visuals, motion sequences, transitions, and post-production elements using our AI pipeline. Human creatives review every frame for quality and brand consistency.' },
  { step: '04', title: 'Delivery & Variants', desc: 'You receive finished product videos in every format and aspect ratio your channels require — plus variant sets optimized for A/B testing across paid and organic placements.' },
]

export default function AIProductVideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Product Videos</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI PRODUCT VIDEOS<br />THAT SELL<br /><span style={{ color: '#ebff00' }}>ON SIGHT.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Your product deserves more than a static image on a white background. Ruminate X creates AI-powered product videos that showcase features, build desire, and drive conversions — at the speed and scale that modern commerce demands. From hero videos to catalog-wide production, we turn your entire product line into a visual sales engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get Product Videos</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '1,000+', label: 'Product videos delivered' },
              { stat: '3–5 days', label: 'Average turnaround time' },
              { stat: '80%', label: 'Cost reduction vs. studio shoots' },
              { stat: '100+', label: 'SKUs per production sprint' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Are AI Product Videos?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">YOUR PRODUCTS<br />IN MOTION</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            AI product videos are professionally produced video content that brings your products to life using artificial intelligence — directed by experienced creatives who understand commerce, conversion, and storytelling. These are not auto-generated slideshows or stock footage montages. At Ruminate X, AI product videos mean cinematic product reveals, dynamic feature callouts, and polished motion design that makes people want to buy.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            The fundamental challenge of product video has always been scale. A traditional studio shoot produces beautiful results for one or two hero SKUs, but falls apart when you need video across an entire catalog. AI changes that equation completely. Our production pipeline generates product videos at catalog scale while maintaining the visual quality and brand consistency that premium brands require.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Every ecommerce marketer knows the data: product pages with video convert at significantly higher rates than those without. Shoppers who watch product videos are more confident in their purchase decisions, return products less frequently, and spend more per order. The only thing that has held brands back from putting video on every product page is the cost and time of traditional production. AI product videos eliminate that bottleneck entirely.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why AI for Product Video</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">THE COMMERCE<br />ADVANTAGE</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">PRODUCT VIDEO<br />FOR EVERY CHANNEL</h2>
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">FROM PRODUCT<br />TO POLISHED VIDEO</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">NOT A TEMPLATE.<br />A PRODUCTION TEAM.</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            DIY product video tools give you a timeline editor and a library of generic transitions. Ruminate X is a full-service creative agency that happens to be powered by AI. You get a dedicated team that understands product marketing, a creative brief built around your brand and your audience, and videos engineered to convert — not just fill space on a product page.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            We built our AI production pipeline specifically for commerce. That means proprietary workflows for product visualization, feature callout sequencing, lifestyle context generation, and multi-format delivery. The AI handles scale and speed. Our creatives handle strategy and storytelling. The result is <Link href="/ai-video-ads" className="text-[#ebff00] hover:underline">AI video ads</Link> and product content that outperforms what either humans or machines could produce alone — whether you need one hero video or a thousand across your full <Link href="/ai-video-production-ecommerce" className="text-[#ebff00] hover:underline">ecommerce catalog</Link>.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            YOUR PRODUCTS<br />DESERVE VIDEO<br /><span style={{ color: '#ebff00' }}>THAT CONVERTS.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your product line and your goals. We&apos;ll show you how AI product videos can transform your conversion rates — and deliver a concept within the week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
