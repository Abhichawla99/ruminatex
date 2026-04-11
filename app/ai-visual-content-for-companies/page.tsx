import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Visual Content for Companies | On-Brand Visuals at Scale | Ruminate X',
  description: 'AI visual content for companies that need stunning brand imagery, video, and motion graphics at scale. Ruminate X delivers fast, on-brand visual assets.',
  keywords: ['AI visual content for companies', 'AI visual content creation', 'AI brand visuals', 'visual content agency AI', 'AI imagery for business', 'corporate visual content AI'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-visual-content-for-companies',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Visual Content for Companies',
  description: 'End-to-end AI-powered visual content production for companies — brand imagery, video, motion graphics, and social assets delivered at speed and scale.',
  provider: {
    '@type': 'Organization',
    name: 'Ruminate X',
    url: 'https://ruminatex.com',
  },
  areaServed: 'Worldwide',
  serviceType: 'AI Visual Content Production',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const benefits = [
  { title: 'Unified Visual Language', desc: 'Every asset — from hero videos to social tiles — follows your brand system. AI ensures colour palettes, typography, and visual tone stay consistent across hundreds of deliverables without creative drift.' },
  { title: 'Volume Without Compromise', desc: 'Modern marketing demands an endless stream of fresh visuals. AI production pipelines let you scale from ten assets a month to two hundred without hiring additional teams or sacrificing quality.' },
  { title: 'Days, Not Weeks', desc: 'Traditional shoots and design cycles eat up calendars. AI visual content workflows compress production from weeks to days, so your campaigns launch while the moment is still relevant.' },
  { title: 'Cost-Efficient at Any Scale', desc: 'No studios, no location fees, no bloated post-production invoices. AI-powered visual content delivers premium results at a fraction of conventional cost — freeing budget for distribution and strategy.' },
]

const useCases = [
  { title: 'Social Media Visual Suites', desc: 'Cohesive imagery, carousels, reels, and stories purpose-built for every platform — produced in volume and optimised for engagement.' },
  { title: 'Product & Lifestyle Imagery', desc: 'Photorealistic product shots, lifestyle compositions, and hero images generated without a single physical photoshoot.' },
  { title: 'Brand Campaign Assets', desc: 'Full visual toolkits for seasonal campaigns, product launches, and brand refreshes — delivered as a turnkey package ready for deployment.' },
  { title: 'Video & Motion Graphics', desc: 'Short-form video, animated explainers, logo reveals, and kinetic typography that bring your brand to life across digital touchpoints.' },
  { title: 'Presentation & Pitch Visuals', desc: 'High-impact imagery and data visualisations for investor decks, keynote presentations, and internal communications that elevate your narrative.' },
  { title: 'Website & Digital Experience', desc: 'Custom hero banners, background textures, icon systems, and interactive visual elements that make your digital presence unmistakable.' },
]

const process = [
  { step: '01', title: 'Brand Audit', desc: 'We immerse ourselves in your brand — guidelines, existing assets, competitive landscape, and visual aspirations. This ensures every AI-generated asset is strategically grounded.' },
  { step: '02', title: 'Creative Strategy', desc: 'Our team defines the visual direction, mood, formats, and deliverables. You approve the creative framework before a single asset is produced.' },
  { step: '03', title: 'AI Production', desc: 'We generate visuals, video, and motion content using our proprietary AI pipeline. Every output is reviewed and refined by human creatives for brand fidelity and craft.' },
  { step: '04', title: 'Deliver & Iterate', desc: 'You receive finished assets in every format and resolution you need — plus rapid iteration cycles so you can refine, adapt, and scale without starting over.' },
]

export default function AIVisualContentForCompaniesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Visual Content</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI VISUAL CONTENT<br />FOR COMPANIES<br /><span style={{ color: '#ebff00' }}>THAT MOVE FAST.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Your brand needs more visual content than ever — and it needs it yesterday. Ruminate X delivers AI-powered visual content for companies that refuse to choose between quality and speed. From product imagery and brand videos to social media suites and motion graphics, we build visual systems that scale with your ambitions and stay true to your brand at every touchpoint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get Visual Content</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '10×', label: 'More visual output per month' },
              { stat: '3–5 days', label: 'Average turnaround time' },
              { stat: '100+', label: 'Asset variations per campaign' },
              { stat: '4K+', label: 'Resolution across all formats' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Is AI Visual Content?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">EVERY VISUAL<br />YOUR COMPANY<br />NEEDS — AT SCALE</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            AI visual content for companies encompasses every type of brand imagery a modern business requires — product photography, lifestyle shots, video content, motion graphics, social media assets, presentation visuals, and digital experience elements — all created using artificial intelligence tools under the guidance of experienced human creatives. This is not clip art or stock photography with a filter. It is custom, on-brand visual production built for your specific business goals.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            At Ruminate X, we pair proprietary AI generation pipelines with a full creative team to produce visual content that looks and feels indistinguishable from what a traditional agency would deliver — except we do it faster, at higher volume, and at a fraction of the cost. The AI handles rendering, compositing, animation, and format adaptation while our creatives handle taste, strategy, and brand alignment.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            The companies winning attention today are the ones that show up consistently with polished, distinctive visuals across every channel. AI visual content makes that possible without the traditional tradeoff between quality and quantity. Whether you need five hero images or five hundred social tiles, every asset stays on-brand and production-ready.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why Companies Choose AI Visuals</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">THE ADVANTAGES<br />ARE CLEAR</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">AI VISUAL CONTENT<br />FOR EVERY CHANNEL</h2>
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">HOW WE BUILD<br />YOUR VISUAL SYSTEM</h2>
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
            Self-serve AI image generators give you raw output and leave you to figure out brand consistency, creative direction, and format adaptation on your own. Ruminate X is a full-service visual content agency powered by AI — you get a dedicated creative team, a strategic brief, and a production process engineered around your brand identity. We handle everything from concept to final delivery.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Our proprietary AI pipeline was built specifically for brand-grade visual production. That means advanced workflows for colour matching, style consistency, multi-format export, and rapid iteration. Combined with human creative oversight at every stage, we produce <Link href="/ai-brand-videos" className="text-[#ebff00] hover:underline">AI brand videos</Link> and visual content that feels crafted, not generated. Whether you are scaling your <Link href="/ai-content-creation-agency" className="text-[#ebff00] hover:underline">content creation</Link> or launching a new campaign, every asset we deliver is ready to publish.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            YOUR COMPANY<br />DESERVES BETTER<br /><span style={{ color: '#ebff00' }}>VISUALS.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your brand and visual content needs. We&apos;ll show you how AI-powered production can transform your output — and deliver a concept within the week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
