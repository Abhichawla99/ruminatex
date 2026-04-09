import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Motion Content | Animated Brand Videos & Motion Graphics | Ruminate X',
  description: 'Create scroll-stopping AI motion content for your brand. Ruminate X delivers animated videos, motion graphics, and kinetic visuals at scale.',
  keywords: ['AI motion content', 'AI motion graphics', 'animated brand content', 'AI kinetic video', 'motion design AI', 'AI animated video production'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-motion-content',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Motion Content',
  description: 'AI-powered motion content production — animated videos, motion graphics, and kinetic brand visuals created at speed and scale for modern brands.',
  provider: {
    '@type': 'Organization',
    name: 'Ruminate X',
    url: 'https://ruminatex.com',
  },
  areaServed: 'Worldwide',
  serviceType: 'AI Motion Content Production',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const benefits = [
  { title: 'Scroll-Stopping Movement', desc: 'Static content gets ignored. Motion captures attention in the first fraction of a second. Our AI motion content is engineered to stop thumbs and hold eyes across every feed and platform your brand lives on.' },
  { title: 'Brand-Consistent Animation', desc: 'Every motion asset we produce follows your brand system — colors, typography, pacing, and visual tone are locked in from the start. AI ensures consistency across hundreds of assets without manual oversight.' },
  { title: 'Production at Platform Speed', desc: 'Social algorithms reward fresh content. Our AI workflows produce motion assets in hours, not weeks — so your brand can publish on the timeline platforms demand without sacrificing quality.' },
  { title: 'Format-Flexible Output', desc: 'One concept becomes a vertical reel, a horizontal hero banner, a square social post, and an animated email header. AI handles reformatting and resizing so every placement gets a native-feeling asset.' },
]

const useCases = [
  { title: 'Social Media Motion Posts', desc: 'Animated posts and carousels that outperform static content on Instagram, LinkedIn, and TikTok. Designed to earn engagement and shares through movement, rhythm, and visual surprise.' },
  { title: 'Product Reveal Animations', desc: 'Showcase new products with cinematic motion — rotating angles, feature call-outs, and dynamic transitions that make launches feel like events, not just announcements.' },
  { title: 'Kinetic Typography Videos', desc: 'Turn quotes, testimonials, and key messages into visually compelling text animations. Perfect for thought leadership content, customer proof, and brand storytelling.' },
  { title: 'Animated Ad Creatives', desc: 'Motion-based ad units for paid social and display campaigns. AI generates dozens of variations from a single concept so you can test hooks, pacing, and visuals at scale.' },
  { title: 'Logo & Brand Animations', desc: 'Dynamic logo reveals, animated brand marks, and motion identity systems that bring your visual brand to life across video intros, presentations, and digital touchpoints.' },
  { title: 'Event & Campaign Teasers', desc: 'Build anticipation with countdown animations, teaser loops, and promotional motion assets that drive registrations and attendance before the main event.' },
]

const process = [
  { step: '01', title: 'Creative Brief', desc: 'We define the motion style, brand parameters, and content goals. Whether you need a single hero animation or a library of assets, we scope the project around your objectives and timelines.' },
  { step: '02', title: 'Style & Motion Design', desc: 'We develop the visual language — pacing, transitions, color movement, and typographic rhythm. AI generates style frames so you see the look and feel before full production begins.' },
  { step: '03', title: 'AI Production', desc: 'Our AI pipeline renders motion assets at scale. Each piece is produced to spec for its target platform, with variations generated automatically for testing and personalization.' },
  { step: '04', title: 'Deliver & Iterate', desc: 'Assets are delivered in all required formats and resolutions. Performance data from early deployments feeds back into the next production cycle for continuous improvement.' },
]

export default function AIMotionContentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Motion Content</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI MOTION CONTENT<br />THAT MOVES<br /><span style={{ color: '#ebff00' }}>YOUR AUDIENCE.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Static visuals are invisible in a world built on movement. Ruminate X creates AI-powered motion content — animated videos, kinetic graphics, and dynamic brand visuals — that captures attention and communicates faster than any still image ever could. From social feeds to paid media, we produce motion assets at the speed and scale your brand needs to stay relevant and visible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get Motion Content</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '3×', label: 'Higher engagement than static posts' },
              { stat: '48h', label: 'Average turnaround per asset batch' },
              { stat: '50+', label: 'Motion assets per campaign' },
              { stat: '6+', label: 'Formats per concept' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Is AI Motion Content?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">MOVEMENT<br />IS THE<br />MESSAGE</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            AI motion content is any visual brand asset that uses movement to communicate — animated social posts, motion graphics, kinetic typography, product animations, and dynamic video elements. It sits between static design and full video production, delivering the engagement benefits of video at a fraction of the complexity and cost.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            At Ruminate X, we produce motion content using AI-powered workflows that compress what used to take a motion design team weeks into a streamlined pipeline that delivers in days. Our systems handle everything from initial concept generation to final rendering across multiple formats and aspect ratios. The result is a library of on-brand motion assets ready to deploy across every channel your audience uses.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            The shift toward motion is not a trend — it is a structural change in how digital platforms surface content. Algorithms on Instagram, TikTok, LinkedIn, and even Google prioritize video and animated content over static images. Brands that invest in motion are not just creating better content; they are buying access to distribution that static-only brands cannot reach. AI makes this investment practical at any budget because the cost per asset drops dramatically when production is automated.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why Brands Need Motion Content</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">STOP BLENDING IN.<br />START MOVING.</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">MOTION FOR<br />EVERY MOMENT</h2>
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">FROM CONCEPT<br />TO MOTION</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">AI-NATIVE<br />MOTION<br />PRODUCTION</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Traditional motion design is expensive and slow. A single 15-second animated social post can take a freelancer three to five days. Multiply that by the volume most brands need — weekly posts, campaign variations, platform-specific edits — and the cost becomes prohibitive. That is why most brands settle for static content even though they know motion performs better.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Ruminate X eliminates that trade-off. Our AI production pipeline generates motion content from structured brand inputs — your colors, type system, imagery, and messaging guidelines. Once the system is trained on your brand, it produces assets with remarkable consistency and speed. Need 30 variations of an animated ad for A/B testing? Done in a day. Need a full quarter of social motion content planned and produced? We deliver it on a timeline that traditional studios would call impossible. Whether you are scaling <Link href="/ai-video-ads" className="text-[#ebff00] hover:underline">AI video ads</Link> or building a library of <Link href="/ai-brand-videos" className="text-[#ebff00] hover:underline">AI brand videos</Link>, motion content is the connective tissue that keeps your brand alive across every digital surface.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            READY TO PUT<br />YOUR BRAND<br /><span style={{ color: '#ebff00' }}>IN MOTION?</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us what you need and we&apos;ll build a motion content system that keeps your brand visible, engaging, and ahead of the competition — with first assets delivered in days, not months.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start Creating</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
