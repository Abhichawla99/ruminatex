import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video for Ecommerce | Product Videos That Sell | Ruminate X',
  description: 'AI-powered ecommerce video production — product demos, lifestyle clips, and shoppable video ads built to convert browsers into buyers at scale.',
  keywords: ['AI video for ecommerce', 'ecommerce product videos', 'AI product video production', 'shoppable video ads', 'AI video for online stores', 'ecommerce video agency'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-video-for-ecommerce',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Video for Ecommerce',
  description: 'AI-powered video production built specifically for ecommerce brands — product demos, lifestyle content, shoppable ads, and UGC-style clips that drive conversions.',
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
  { title: 'Catalog-Scale Production', desc: 'Hundreds or thousands of SKUs need video content. Traditional shoots make that impossible. AI production lets you create unique product videos for every item in your catalog — without booking a single studio day.' },
  { title: 'Scroll-Stopping Creative', desc: 'Ecommerce lives and dies on the scroll. AI-generated video grabs attention in feeds, on product pages, and inside email campaigns with motion, color, and narrative — the three things static images cannot deliver.' },
  { title: 'Faster Time to Market', desc: 'New product dropping next week? AI video production turns around polished product demos, lifestyle clips, and ad creatives in days — not the weeks or months a traditional production cycle demands.' },
  { title: 'Lower Cost Per Asset', desc: 'Studio shoots, models, photographers, editors — the cost per video adds up fast. AI production delivers the same quality at a fraction of the price, making video viable for every product in your store.' },
]

const useCases = [
  { title: 'Product Demo Videos', desc: 'Detailed AI-generated product demonstrations that showcase features, materials, and use cases. Built to replace static images on product detail pages and drive purchase confidence.' },
  { title: 'Lifestyle & Lookbook Clips', desc: 'AI-produced lifestyle video that places your products in aspirational contexts — styled environments, real-world usage, and brand-aligned aesthetics without the logistics of location shoots.' },
  { title: 'Shoppable Video Ads', desc: 'Short-form video ads optimized for Meta, TikTok, and Google Shopping campaigns. Every frame designed to showcase the product and drive click-through to your store.' },
  { title: 'UGC-Style Reels', desc: 'Authentic-feeling, creator-style video content generated at scale. Perfect for social proof campaigns, influencer-style feeds, and platforms where polished ads underperform raw content.' },
  { title: 'Email & SMS Video', desc: 'Embedded video content for lifecycle marketing — welcome sequences, abandoned cart reminders, and product launch announcements that outperform static imagery in every metric.' },
  { title: 'Seasonal Campaign Suites', desc: 'Full video creative packages for Black Friday, holiday campaigns, flash sales, and product drops. Produced fast enough to match the urgency of time-sensitive ecommerce moments.' },
]

const process = [
  { step: '01', title: 'Product & Brand Brief', desc: 'We learn your catalog, brand guidelines, target customer, and sales channels. Every video we produce is rooted in your ecommerce strategy — not generic creative.' },
  { step: '02', title: 'Creative Direction', desc: 'Our team develops shot lists, scripts, and visual treatments tailored to each product category and platform. You approve the direction before production begins.' },
  { step: '03', title: 'AI Video Production', desc: 'We produce video assets using our proprietary AI pipeline — generating visuals, motion, voiceover, music, and captions. Human creatives review every output for brand consistency.' },
  { step: '04', title: 'Delivery & Optimization', desc: 'You receive finished videos in every format your channels require — product pages, paid ads, social feeds, and email. Plus variant sets for A/B testing from day one.' },
]

export default function AIVideoForEcommercePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Video for Ecommerce</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI VIDEO FOR<br />ECOMMERCE<br /><span style={{ color: '#ebff00' }}>THAT SELLS.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Ecommerce brands need video everywhere — product pages, paid ads, social feeds, email campaigns. But traditional video production cannot keep up with the scale of a modern catalog. Ruminate X uses AI-powered production to build high-converting ecommerce video content at the speed and volume your store demands. More products covered, faster turnaround, better conversion rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get Ecommerce Video</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '500+', label: 'Product videos per month' },
              { stat: '3–5 days', label: 'From brief to delivery' },
              { stat: '80%', label: 'Lower cost than studio shoots' },
              { stat: '2.4×', label: 'Average conversion lift' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Is AI Video for Ecommerce?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">PRODUCT VIDEO<br />AT CATALOG<br />SCALE</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            AI video for ecommerce is professionally produced video content created using artificial intelligence and refined by experienced human creatives — built specifically for online retail environments. This is not generic stock footage stitched together with text overlays. At Ruminate X, ecommerce video means product-accurate visuals, conversion-focused storytelling, and platform-native formatting designed to move shoppers from browsing to buying.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            The fundamental problem in ecommerce video is scale. A brand with fifty products needs fifty product videos. A brand with five thousand SKUs needs five thousand. Traditional production makes that arithmetic impossible — the cost per video is too high and the timeline too slow. AI production changes the math entirely. We generate unique, high-quality video for every product in your catalog at a cost and speed that makes comprehensive video coverage financially viable for the first time.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            The data is clear: product pages with video convert at significantly higher rates than those with static images alone. Shoppers who watch product video are more confident in their purchase, less likely to return items, and more likely to spend more per order. AI video for ecommerce is not a nice-to-have — it is the infrastructure modern online retail requires to compete.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why AI for Ecommerce Video</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">THE CONVERSION<br />ADVANTAGE</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">ECOMMERCE VIDEO<br />FOR EVERY CHANNEL</h2>
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">HOW WE BUILD<br />YOUR ECOMMERCE VIDEO</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">BUILT FOR<br />ECOMMERCE, NOT<br />ADAPTED TO IT</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Most video agencies treat ecommerce as an afterthought — they shoot brand films and repurpose the footage for product pages. Ruminate X is different. We built our AI production pipeline for the specific demands of online retail: high volume, fast turnaround, platform-native formatting, and conversion-focused creative. Every video is engineered to sell, not just to look cinematic.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Our proprietary workflows handle the unique challenges of ecommerce video at scale — maintaining brand consistency across hundreds of SKUs, producing variants for different platforms and placements, and delivering assets formatted for Shopify, Amazon, and every major marketplace. Whether you need <Link href="/ai-product-videos" className="text-[#ebff00] hover:underline">AI product videos</Link> for your catalog or <Link href="/ai-video-ads" className="text-[#ebff00] hover:underline">AI video ads</Link> for your paid campaigns, we deliver both from a single production relationship.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            YOUR STORE<br />DESERVES VIDEO<br /><span style={{ color: '#ebff00' }}>THAT CONVERTS.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your catalog and your sales channels. We&apos;ll show you how AI video production can transform your ecommerce performance — and deliver a concept within the week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
