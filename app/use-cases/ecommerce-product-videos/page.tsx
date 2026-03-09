import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'E-Commerce Product Videos: Boost Sales with AI Video Demos | Ruminate X',
  description: 'Create product demo videos for ecommerce. Increase conversion 2.3x. Generate from product images automatically.',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Use Cases / E-Commerce</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          PRODUCTS THAT<br />SELL THEMSELVES.<br /><span style={{ color: '#ebff00' }}>ON SCREEN.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          Product photos are static. Product videos convert. AI turns your existing images into professional 30-second demo videos — automatically, at catalog scale.
        </p>
      </section>

      {/* Why Video Drives Sales */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Data</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            WHY PRODUCT VIDEOS DRIVE SALES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
            {[
              { stat: '2.3x', label: 'Higher Conversion', detail: 'Videos increase purchase intent vs. static images' },
              { stat: '+80%', label: 'More Engagement', detail: 'Viewers watch longer and buy more' },
              { stat: 'Fewer', label: 'Returns', detail: 'Customers see the product clearly before buying' },
              { stat: 'Higher', label: 'AOV', detail: 'Customers spend more when they see products in action' },
            ].map(({ stat, label, detail }) => (
              <div key={label} className="bg-[#080808] p-8">
                <p style={{ ...displayStyle, fontSize: '48px' }} className="text-[#ebff00] leading-none mb-2">{stat}</p>
                <p className="text-white font-bold text-sm mb-2">{label}</p>
                <p className="text-[#666666] text-xs">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Ecommerce Features */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Capabilities</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            WHAT AI ECOMMERCE VIDEO DOES
          </h2>
          <div className="space-y-0">
            {[
              {
                number: '01',
                title: 'Auto-Generate from Images',
                body: 'Upload your product photos. AI assembles them into a professional 30-second demo video with motion, transitions, and branded voiceover. No filming required.',
              },
              {
                number: '02',
                title: 'Bulk Creation at Catalog Scale',
                body: 'Create 100, 500, or 10,000 product videos in a single batch. Every SKU gets its own video. No manual work per product.',
              },
              {
                number: '03',
                title: 'Audience-Specific Messaging',
                body: 'Different videos for different buyer personas. The same running shoes with different messaging for marathoners, casual walkers, and gym-goers.',
              },
              {
                number: '04',
                title: 'Platform-Ready Formats',
                body: 'Export optimized for YouTube, Instagram, TikTok, and your product page simultaneously. One source, every format.',
              },
              {
                number: '05',
                title: 'A/B Testing at Volume',
                body: 'Create multiple video variants for the same product. Test messaging, pacing, and CTAs. Let the data pick the winner.',
              },
            ].map(({ number, title, body }) => (
              <div key={number} className="border-t border-[#1a1a1a] py-10 grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 items-start">
                <span style={{ ...displayStyle, fontSize: '60px' }} className="text-[#333333] leading-none">{number}</span>
                <div>
                  <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
                  <p className="text-[#888888]">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Process</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            PHOTOS TO PUBLISHED IN MINUTES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#1a1a1a]">
            {[
              { step: '01', action: 'Upload', detail: 'Drop in your product photos — exterior shots, detail views, lifestyle images' },
              { step: '02', action: 'AI Sequences', detail: 'AI arranges photos into a logical, compelling flow with motion and transitions' },
              { step: '03', action: 'Add Context', detail: 'Music, voiceover, product info, and your brand overlays applied automatically' },
              { step: '04', action: 'Publish', detail: 'Push to MLS, your website, TikTok, Instagram, YouTube in one click' },
            ].map(({ step, action, detail }) => (
              <div key={step} className="bg-[#080808] p-8">
                <span style={{ ...displayStyle, fontSize: '48px' }} className="text-[#333333] leading-none block mb-4">{step}</span>
                <h3 className="text-white font-bold mb-2">{action}</h3>
                <p className="text-[#666666] text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Best For</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            ECOMMERCE OPERATORS WHO NEED SCALE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {[
              { segment: 'D2C Brands', body: 'Video for every hero product and variant. Stop losing customers to competitors who already have video.' },
              { segment: 'Marketplace Sellers', body: 'Amazon, Etsy, eBay listings with video convert at 2x. Stand out in search results without expensive production.' },
              { segment: 'Enterprise Retail', body: 'Thousands of SKUs, all with professional video. Managed centrally, deployed across all channels.' },
              { segment: 'Wholesale & B2B', body: 'Product demo videos for your sales team and distributor partners. Reduce friction in the buying process.' },
            ].map(({ segment, body }) => (
              <div key={segment} className="bg-[#080808] p-8">
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">{segment}</p>
                <p className="text-[#888888]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            EVERY PRODUCT.<br /><span style={{ color: '#ebff00' }}>ON VIDEO. NOW.</span>
          </h2>
          <p className="text-[#888888] mb-10">Increase your ecommerce conversions with product demo videos generated automatically from your existing photos.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Create Product Videos
          </Link>
        </div>
      </section>
    </>
  )
}
