import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Influencer Style Content | Creator-Quality Video at Scale | Ruminate X',
  description: 'Get authentic influencer-style video content powered by AI. Ruminate X produces UGC-style reels, talking-head videos & creator content for brands at scale.',
  keywords: ['AI influencer style content', 'AI UGC content', 'influencer-style video production', 'AI creator content', 'synthetic influencer video', 'AI talking head videos'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-influencer-style-content',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Influencer Style Content',
  description: 'AI-powered influencer-style video content production — authentic creator aesthetics, UGC-style reels, and talking-head videos at scale without talent management overhead.',
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
  { title: 'No Talent Management', desc: 'Skip the creator outreach, contract negotiation, and revision cycles. AI influencer-style content gives you the authentic look and feel of creator video without depending on any individual\'s schedule, rates, or availability.' },
  { title: 'Unlimited Variations', desc: 'Test different hooks, scripts, and visual styles across dozens of variations — all in a single production sprint. Find what resonates with your audience before scaling spend, not after.' },
  { title: 'Brand-Safe Every Time', desc: 'AI-generated creator content carries zero reputational risk. No surprise controversies, no off-brand posts, no licensing disputes. You own every frame and control every word.' },
  { title: 'Consistent Output at Scale', desc: 'Whether you need five videos a week or fifty, the quality and turnaround stay the same. AI production scales linearly while traditional influencer partnerships hit bottlenecks fast.' },
]

const useCases = [
  { title: 'UGC-Style Ad Creatives', desc: 'Authentic-feeling video ads designed to blend into social feeds. Built for Meta, TikTok, and YouTube Shorts campaigns where native content outperforms polished brand spots by two to five times.' },
  { title: 'Product Reviews & Unboxings', desc: 'AI-produced review-style videos that walk viewers through product features, benefits, and use cases — with the casual energy of a real creator sharing their experience.' },
  { title: 'Talking-Head Explainers', desc: 'Direct-to-camera style videos that explain your product, answer common questions, or deliver thought leadership — produced at the pace your content calendar actually demands.' },
  { title: 'Social Proof & Testimonials', desc: 'Testimonial-style video content that communicates real customer outcomes in a format audiences trust. Ideal for landing pages, retargeting campaigns, and email sequences.' },
  { title: 'Platform-Specific Reels', desc: 'Vertical-first influencer-style reels optimized for Instagram, TikTok, and YouTube Shorts. Each version is tailored to platform-specific pacing, caption styles, and engagement patterns.' },
  { title: 'Multi-Persona Campaigns', desc: 'Different audiences respond to different voices. AI lets you produce the same message through multiple personas — varying tone, style, and presentation to match each segment.' },
]

const process = [
  { step: '01', title: 'Creative Brief', desc: 'We define the creator aesthetic, tone of voice, and content goals. You tell us who your audience is and what action you want them to take — we handle the rest.' },
  { step: '02', title: 'Script & Style', desc: 'Our team writes scripts in natural, conversational language that mirrors how real creators speak. We match the visual style to the platforms and audiences you are targeting.' },
  { step: '03', title: 'AI Production', desc: 'We produce influencer-style video using our AI pipeline — generating realistic presenter visuals, natural voiceover, on-screen text, and platform-native editing. Human creatives review every output.' },
  { step: '04', title: 'Delivery & Testing', desc: 'You receive finished videos in every format your campaigns need — plus variant sets for A/B testing hooks, presenters, and calls to action from day one.' },
]

export default function AIInfluencerStyleContentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Influencer Style Content</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI INFLUENCER<br />STYLE CONTENT<br /><span style={{ color: '#ebff00' }}>AT SCALE.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Influencer-style video is the highest-performing creative format on social media — but sourcing, managing, and scaling real creators is expensive and unpredictable. Ruminate X produces authentic, creator-quality video content using AI, giving your brand the UGC aesthetic audiences trust without the talent management overhead. More content, faster turnaround, total creative control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Get Creator-Style Content</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '10x', label: 'More content vs. traditional creators' },
              { stat: '48hrs', label: 'Average turnaround time' },
              { stat: '80%', label: 'Lower cost than influencer deals' },
              { stat: '0', label: 'Talent management headaches' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Is AI Influencer Style Content?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">CREATOR ENERGY<br />WITHOUT THE<br />CREATOR</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            AI influencer style content is professionally produced video that looks and feels like it was made by a real social media creator — casual framing, direct-to-camera delivery, natural language, and the raw authenticity audiences have come to expect on platforms like TikTok, Instagram Reels, and YouTube Shorts. The difference is that every element is generated and controlled by AI, directed by experienced human creatives at Ruminate X.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            This is not stock footage with a voiceover slapped on top. AI influencer style content replicates the specific visual language of creator-led video — the pacing, the tone, the camera angles, the text overlays — because that is the format that consistently outperforms traditional brand creative in paid and organic social campaigns. Audiences scroll past polished ads. They stop for content that feels like it belongs in their feed.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            The business case is simple. Brands that invest in influencer marketing spend weeks sourcing creators, negotiating rates, managing revisions, and hoping the final product matches their brief. AI influencer style content eliminates every one of those friction points while delivering the same authentic aesthetic — at a fraction of the cost and a multiple of the volume.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why AI Creator Content</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">THE SCALE<br />ADVANTAGE</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">INFLUENCER CONTENT<br />FOR EVERY CHANNEL</h2>
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">HOW WE BUILD<br />YOUR CREATOR CONTENT</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">NOT A UGC<br />MARKETPLACE</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            UGC marketplaces connect you with freelance creators and hope for the best. You are still managing people, waiting on deliveries, and crossing your fingers that the content matches your brand. Ruminate X is a full-service production partner. We produce AI influencer style content that is strategically scripted, visually consistent, and ready to deploy across every channel — with zero dependency on external talent.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            Our AI pipeline is purpose-built for creator-style video. That means natural speech patterns, authentic visual framing, platform-native editing, and the kind of casual energy that makes audiences lean in instead of scroll past. Combined with our expertise in <Link href="/ai-ugc-reels" className="text-[#ebff00] hover:underline">AI UGC reels</Link> and <Link href="/ai-video-ads" className="text-[#ebff00] hover:underline">AI video ads</Link>, we give brands a complete content engine that runs at the speed of social media — not the speed of traditional production.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            YOUR FEED<br />NEEDS CONTENT<br /><span style={{ color: '#ebff00' }}>THAT CONNECTS.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your brand and your audience. We&apos;ll show you how AI influencer style content can fill your content calendar and outperform traditional creator partnerships — with a concept ready within the week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
