import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI UGC Reels for Brands | Authentic-Looking AI Video | Ruminate X',
  description: 'AI UGC reels that look real, convert like crazy, and ship in days — not weeks. Ruminate X builds scroll-stopping user-generated content at scale for modern brands.',
  keywords: ['AI UGC reels', 'AI-generated UGC content', 'AI UGC video agency', 'AI user generated content reels', 'AI UGC ads', 'UGC style AI video'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-ugc-reels',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI UGC Reels',
  description: 'AI-generated user-generated content (UGC) reels for brands — authentic-looking, scroll-stopping short-form video produced at scale.',
  provider: {
    '@type': 'Organization',
    name: 'Ruminate X',
    url: 'https://ruminatex.com',
  },
  serviceType: 'AI Video Production',
  areaServed: 'Worldwide',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const formats = [
  { title: 'Testimonial-Style Reels', desc: 'AI avatars or voice-matched personas delivering real-sounding product testimonials — no actors, no booking, no waiting.' },
  { title: 'Unboxing & First Impression', desc: 'The moment your product is pulled from the box — recreated at scale with authentic energy and genuine-feeling reactions.' },
  { title: 'Tutorial & How-To UGC', desc: 'Short, punchy tutorial reels showing your product in action. Built to educate and convert in under 60 seconds.' },
  { title: 'Hook-First Ad Reels', desc: 'Performance-focused UGC reels engineered around a single hook — designed to stop the scroll in the first two frames.' },
  { title: 'Comparison & Review', desc: 'Before-and-after, competitor comparisons, and honest-feeling review content your media buyer will love testing.' },
  { title: 'Creator-Style Lifestyle Reels', desc: 'AI-generated lifestyle content that looks like it came from your top-performing creator — every time, at any volume.' },
]

const process = [
  { step: '01', title: 'Brief & Persona', desc: 'You tell us the product, the audience, and the feeling you want to create. We define the persona — their voice, their energy, their world — before anything is produced.' },
  { step: '02', title: 'Script & Hook Architecture', desc: 'We write hooks that arrest attention in frame one. Every script is built around a single conversion insight — not a list of features.' },
  { step: '03', title: 'AI Production', desc: 'Our AI production pipeline generates authentic-looking UGC reels — synced audio, real-environment visuals, persona-consistent delivery. No studio. No casting. No delays.' },
  { step: '04', title: 'Batch & Test', desc: 'We deliver multiple variations per concept so your media team can test hooks, CTAs, and personas without ordering a second shoot.' },
]

export default function AiUgcReelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI UGC Reels</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            UGC THAT<br />LOOKS REAL.<br /><span style={{ color: '#ebff00' }}>PERFORMS HARDER.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            The best-performing ads on TikTok, Reels, and Shorts don&apos;t look like ads. They look like someone&apos;s best friend found something they couldn&apos;t stop talking about. We make that content — at scale, with AI, on demand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get AI UGC Reels</Link>
            <Link href="/ai-social-media-video-agency" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Social Video Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '48 hrs', label: 'From brief to first draft' },
              { stat: '5–10x', label: 'More variations per budget' },
              { stat: '0', label: 'Casting, scheduling, or studio fees' },
              { stat: '∞', label: 'Personas, hooks, and formats' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What We Make</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">EVERY FORMAT<br />THAT CONVERTS</h2>
        <p className="text-[#888888] max-w-2xl mb-16 leading-relaxed">
          UGC works because it doesn&apos;t feel produced. It feels discovered. Our AI UGC reels are built from the ground up to carry that energy — the messy authenticity, the raw enthusiasm, the off-the-cuff honesty that makes people stop scrolling and start watching. Here is what we produce.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formats.map(({ title, desc }) => (
            <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
              <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why AI UGC</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">THE UGCC PROBLEM<br />WE SOLVE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#888888] leading-relaxed mb-6">
                Traditional UGC is broken. You find a creator, negotiate rates, ship product, wait two weeks, receive footage that misses the brief, then repeat. By the time the content is live, the trend has moved. Your competitors have already tested twelve variations and found their winner.
              </p>
              <p className="text-[#888888] leading-relaxed mb-6">
                AI UGC reels from Ruminate X are different because they are built for speed and volume. We produce the content in our pipeline — no casting, no shipping, no reshoots. A brief that arrives Monday is in your inbox Wednesday. A concept that needs ten variations gets ten variations, not one.
              </p>
              <p className="text-[#888888] leading-relaxed">
                The result is a content engine your media buyer can actually use. More hooks to test. More personas to rotate. More angles to find the one that performs. At a cost that makes testing a standard operating procedure, not an expensive gamble.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { label: 'Speed', value: 'First drafts in 48 hours. Full batch in under a week.' },
                { label: 'Volume', value: 'Five to ten variations per concept — standard.' },
                { label: 'Consistency', value: 'Same persona, same energy, every time. No off days.' },
                { label: 'Cost', value: 'A fraction of traditional UGC creator rates — with more output.' },
                { label: 'Testing', value: 'Built to be A/B tested. Every variation is a controlled experiment.' },
              ].map(({ label, value }) => (
                <div key={label} className="border border-[#1a1a1a] p-6">
                  <p style={{ ...displayStyle, fontSize: '20px', color: '#ebff00' }} className="mb-2">{label}</p>
                  <p className="text-[#666666] text-sm leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Our Process</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">HOW WE BUILD<br />YOUR UGC ENGINE</h2>
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

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Who This Is For</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-12">BUILT FOR BRANDS<br />THAT RUN PAID</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'DTC & Ecommerce', desc: 'You\'re running Meta and TikTok ads and need a constant supply of fresh creative. Our AI UGC reels plug directly into your paid media machine — tested, iterated, and refreshed on a cycle that matches your spend.' },
              { title: 'SaaS & Apps', desc: 'Software is hard to show. UGC makes it easy. We create personas who talk about your product the way real power users do — discovering features, solving problems, having genuine reactions.' },
              { title: 'Consumer Brands', desc: 'Your product deserves more than one influencer\'s take. We build a roster of AI personas that cover every demographic, tone, and use case — so your targeting has content to match.' },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-[#1a1a1a] p-8 hover:border-[#ebff00]/20 transition-colors">
                <h3 style={{ ...displayStyle, fontSize: '28px', color: '#ebff00' }} className="mb-3">{title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            STOP WAITING<br />ON CREATORS.<br /><span style={{ color: '#ebff00' }}>START TESTING.</span>
          </h2>
          <p className="text-[#888888] mb-8">
            Your next best-performing ad is one brief away. Tell us your product, your audience, and the feeling you want to create. We handle everything else — and we&apos;ll have your first batch ready before your next media meeting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start Your UGC Batch</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Ruminate X</Link>
          </div>
        </div>
      </section>
    </>
  )
}
