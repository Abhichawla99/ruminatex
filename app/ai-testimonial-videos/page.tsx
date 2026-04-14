import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Testimonial Videos | Customer Story Production for Brands | Ruminate X',
  description: 'AI testimonial videos that turn customer stories into scroll-stopping social proof. Ruminate X produces authentic, on-brand testimonial content fast.',
  keywords: ['AI testimonial videos', 'AI customer testimonial video', 'AI-powered testimonial production', 'testimonial video agency', 'AI case study videos', 'customer story video production'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-testimonial-videos',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Testimonial Videos',
  description: 'AI-powered testimonial video production that captures authentic customer stories and turns them into polished, on-brand social proof at scale.',
  provider: {
    '@type': 'Organization',
    name: 'Ruminate X',
    url: 'https://ruminatex.com',
  },
  areaServed: 'Worldwide',
  serviceType: 'AI Testimonial Video Production',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const benefits = [
  { title: 'Authentic Customer Voice', desc: 'We capture real customer stories with remote-friendly workflows, then layer AI-powered editing, B-roll, and motion design on top so every testimonial feels cinematic without losing honesty.' },
  { title: 'Produced At The Speed Of Sales', desc: 'Traditional testimonial shoots take weeks to coordinate and months to publish. Our AI production pipeline turns a single 30-minute customer call into a polished video sequence in a matter of days.' },
  { title: 'On-Brand, Every Time', desc: 'Your brand colors, motion style, lower-thirds, and typography are encoded into reusable AI templates. Every testimonial looks like it came from the same studio because — functionally — it did.' },
  { title: 'Cut For Every Channel', desc: 'A single customer interview becomes a 60-second hero video for your website, a 15-second hook for paid social, a vertical reel for Instagram, and quote cards for LinkedIn. One input, many on-brand outputs.' },
]

const useCases = [
  { title: 'SaaS Customer Stories', desc: 'Turn power users into public advocates. Showcase the ROI, workflow changes, and specific results your software delivers — in the customer\'s own words, cut for the sales funnel.' },
  { title: 'E-commerce Social Proof', desc: 'Convert happy buyers into review reels and UGC-style testimonials for product pages, ads, and retention flows. Perfect for DTC brands that live and die by trust.' },
  { title: 'B2B Case Study Videos', desc: 'Turn long-form case studies into cinematic 2-3 minute videos that executives will actually watch. Ideal for enterprise sales, RFP decks, and investor updates.' },
  { title: 'Services Firm Credibility', desc: 'Agencies, consultants, and professional services teams use testimonial videos to shorten sales cycles. We produce pipelines of client stories that your BD team can deploy on demand.' },
  { title: 'Launch & Campaign Support', desc: 'Pair a product launch with a wave of pre-built testimonial videos from beta users, early customers, or partners — ready to drop on day one of the campaign.' },
  { title: 'Employer Brand & Recruiting', desc: 'Employee testimonial videos help recruiting and employer brand teams attract talent. Same workflow, different subject — the AI pipeline doesn\'t care who is on camera.' },
]

const process = [
  { step: '01', title: 'Story Shortlist', desc: 'We work with your customer success and marketing teams to identify the strongest stories — the ones with clear before-and-after arcs, measurable outcomes, and customers willing to speak on camera.' },
  { step: '02', title: 'Remote Capture', desc: 'We run short, structured remote interviews with broadcast-quality audio and video. No travel. No crew on site. No week-long production schedules. Just a calendar invite and a webcam link.' },
  { step: '03', title: 'AI Edit & Enhance', desc: 'Our pipeline transcribes the footage, surfaces the strongest soundbites, generates matching B-roll, applies your brand templates, and assembles the final cuts — often in the same week as the interview.' },
  { step: '04', title: 'Deliver & Repurpose', desc: 'You receive a hero cut plus platform-native variants (vertical reels, square social posts, quote graphics, audio clips). One customer story becomes a full campaign of social proof.' },
]

export default function AITestimonialVideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Testimonial Videos</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI TESTIMONIAL VIDEOS<br />THAT CLOSE<br /><span style={{ color: '#ebff00' }}>DEALS.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Customer stories are the highest-converting asset your marketing team can produce — and also the hardest to scale. Ruminate X uses AI production pipelines to turn real customer interviews into cinematic testimonial videos in days instead of months, so you never run out of social proof when your pipeline needs it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Book A Call</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '5x', label: 'More testimonial output per quarter' },
              { stat: '72h', label: 'From interview to first hero cut' },
              { stat: '8+', label: 'Platform-native variants per story' },
              { stat: '0', label: 'Film crews flown on location' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Are AI Testimonial Videos?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">REAL STORIES.<br />CINEMATIC<br />PRODUCTION.</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            An AI testimonial video pairs an authentic customer interview with an AI-powered post-production pipeline. The customer is real. The story is real. The soundbites are real. What changes is everything that happens after the record button stops — the editing, the B-roll, the motion graphics, the captions, the platform-specific cuts. All of that is produced through AI workflows that move faster and scale further than a traditional edit suite ever could.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            The result is a testimonial video that looks and feels like a premium brand film, but gets delivered at the pace your marketing calendar actually demands. No more sitting on a great customer story for three months while the edit gets polished. No more rationing your testimonial budget to the top two or three customers per year. With AI in the pipeline, every customer story becomes a production-worthy asset.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            This matters because buyers trust other buyers. Study after study shows that video testimonials outperform written reviews, case study PDFs, and most forms of paid advertising when it comes to conversion. But testimonial video only works as a strategy if you can produce enough of it to cover your ICP segments, your product lines, and your funnel stages. AI production is what finally makes that volume realistic.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why Brands Choose Ruminate X</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">PROOF, AT<br />THE SPEED OF<br />PIPELINE.</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">TESTIMONIALS<br />FOR EVERY FUNNEL</h2>
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">FROM INTERVIEW<br />TO EVERGREEN<br />SOCIAL PROOF</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">A TESTIMONIAL<br />ENGINE.<br />NOT A ONE-OFF.</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Most agencies treat testimonial videos as bespoke projects. Every shoot is custom, every edit starts from scratch, and every delivery takes months. That model works for a flagship brand film — but it breaks when marketing teams need a steady drumbeat of customer proof across every quarter, every segment, and every channel. At Ruminate X, we architect a testimonial engine instead of producing one-off deliverables.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            The engine is a combination of light, repeatable customer interviews and an AI post-production pipeline encoded with your brand system. Once it is set up, each new story runs through the same rails — only the customer changes. That means the tenth testimonial is faster, cheaper, and more polished than the first, and you compound a library of social proof instead of chasing a single hero film. Pair it with an <Link href="/ai-video-strategy" className="text-[#ebff00] hover:underline">AI video strategy</Link> or <Link href="/ai-video-ads" className="text-[#ebff00] hover:underline">AI video ads</Link> program, and your testimonials stop being standalone assets and start driving a full growth loop.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            READY TO TURN<br />CUSTOMERS INTO<br /><span style={{ color: '#ebff00' }}>YOUR BEST ADS?</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your best customers and the stories you wish you had on video. We&apos;ll build you a repeatable AI testimonial pipeline that ships your first hero cut within a week.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start A Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
