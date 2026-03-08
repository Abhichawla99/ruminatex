import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Production for SaaS & Tech Startups | Ruminate X',
  description:
    'AI-powered brand films, product explainer videos, and campaign content for SaaS companies and tech startups. Move fast without compromising on quality.',
  keywords: [
    'AI video production for SaaS companies',
    'tech startup video production AI',
    'brand video for tech companies',
    'SaaS explainer video AI',
    'startup brand film production',
    'AI video agency for tech startups',
  ],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function SaaSPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">SaaS & Tech Startups</span>
          </div>
          <h1
            style={{ ...displayStyle, fontSize: 'clamp(52px, 11vw, 150px)' }}
            className="text-white leading-none mb-8 max-w-5xl"
          >
            AI VIDEO FOR<br />
            <span style={{ color: '#ebff00' }}>TECH STARTUPS<br />& SAAS BRANDS</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-xl mb-12 leading-relaxed">
            Move at startup speed without sacrificing the brand story that drives growth.
            Cinematic brand films, product videos, and campaign content — built for the pace
            of tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* What tech brands need */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Built for Tech</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">
          CONTENT THAT<br />KEEPS PACE WITH<br />YOUR GROWTH
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Brand Films', desc: 'The narrative that explains not just what your product does — but why it exists and why it matters. The video that turns visitors into believers.' },
            { title: 'Product Explainers', desc: 'Complex technology made visually compelling. We translate your product story into cinematic content that anyone can understand.' },
            { title: 'Series A & Fundraising Content', desc: 'Investors want to see traction, vision, and execution. Your brand film should communicate all three in under 90 seconds.' },
            { title: 'Conference & Event Content', desc: 'From Dreamforce to TechCrunch — you need content that stands out in a sea of demo videos and booth presentations.' },
            { title: 'Customer Success Stories', desc: 'Testimonials elevated to cinematic case studies. Real outcomes, storytelling that makes data feel human.' },
            { title: 'Social & Content Marketing', desc: 'A consistent video presence across LinkedIn, YouTube, and beyond — at the volume growth-stage companies require.' },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why AI fits tech */}
      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Fit</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-12">
            WHY AI PRODUCTION<br />FITS TECH BRANDS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'You Already Understand AI',
                body: "Tech brands get the value proposition: better output, faster, more efficiently. AI video production is that same logic applied to creative.",
              },
              {
                title: 'Speed Matches Your Sprints',
                body: "2–3 week delivery means you can produce video content within your product release cycles. No more waiting 3 months for an agency to deliver.",
              },
              {
                title: 'Budget Stretches Further',
                body: "Series A budgets are precious. AI production delivers the same cinematic quality as agencies charging 10× more — freeing budget for growth.",
              },
              {
                title: 'Scale as You Grow',
                body: "Need 3 videos now and 20 by Q4? AI production scales with your growth without the lead time and overhead of a traditional agency relationship.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="border border-[#1a1a1a] p-8">
                <h3 style={{ ...displayStyle, fontSize: '24px', color: '#ebff00' }} className="mb-3">{title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-6">
            BUILD YOUR<br />BRAND STORY<br />
            <span style={{ color: '#ebff00' }}>AT STARTUP SPEED.</span>
          </h2>
          <p className="text-[#888888] mb-8">
            Tell us what you&apos;re building. We&apos;ll build the story around it.
          </p>
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
