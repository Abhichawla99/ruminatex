import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Content Workflow Automation | Streamline Your Video Pipeline | Ruminate X',
  description: 'Automate your content workflow with AI. Ruminate X builds scalable video production pipelines that cut turnaround times and eliminate bottlenecks.',
  keywords: ['AI content workflow automation', 'AI video production pipeline', 'automated content creation', 'AI content operations', 'video workflow automation', 'scalable content production'],
  alternates: {
    canonical: 'https://ruminatex.com/ai-content-workflow-automation',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Content Workflow Automation',
  description: 'AI-powered content workflow automation that streamlines video production from brief to delivery — faster turnaround, fewer bottlenecks, limitless scale.',
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
  { title: 'Eliminate Bottlenecks', desc: 'Traditional content pipelines break down at every handoff — brief to script, script to production, production to review. Our AI automation connects every stage into a single continuous flow, so nothing sits waiting in someone\'s inbox for three days.' },
  { title: 'Scale Without Hiring', desc: 'Need to go from ten videos a month to fifty? With AI-automated workflows, you scale output by adjusting parameters — not by tripling your headcount. The same team produces dramatically more content because the repetitive production work is handled by AI.' },
  { title: 'Consistent Brand Quality', desc: 'Automated workflows enforce your brand guidelines at every stage. Color palettes, typography, tone of voice, and visual style are baked into the pipeline — not dependent on which freelancer happens to be available that week.' },
  { title: 'Faster Iteration Cycles', desc: 'When a campaign needs a pivot or a new creative direction, AI workflows let you regenerate and adapt content in hours instead of weeks. Your marketing team stays agile without burning out your production resources.' },
]

const useCases = [
  { title: 'Always-On Social Content', desc: 'Automate the production of daily social media videos — from script generation to final render. Your social team focuses on strategy and community while the pipeline handles the production grind.' },
  { title: 'Product Launch Campaigns', desc: 'Launch with a full suite of video assets — hero films, product demos, social cuts, and ad creatives — all produced through a single automated pipeline that keeps every asset on-brand and on-schedule.' },
  { title: 'Multi-Market Localization', desc: 'Adapt one hero video into dozens of localized versions with automated translation, voiceover generation, and subtitle formatting. Reach new markets without starting from scratch each time.' },
  { title: 'Performance Ad Creative', desc: 'Generate, test, and iterate paid media creatives at the pace your ad platform demands. AI workflows produce multiple variations per concept so your media team never runs out of fresh creative to test.' },
  { title: 'Internal Communications', desc: 'Automate recurring internal video formats — weekly updates, onboarding sequences, training modules — so your comms team produces polished video without monopolizing production resources.' },
  { title: 'E-Commerce Content at Scale', desc: 'Turn product catalogs into video content automatically. Our workflows pull product data, generate visuals, and produce platform-ready videos for every SKU — not just your bestsellers.' },
]

const process = [
  { step: '01', title: 'Audit', desc: 'We map your current content workflow end-to-end — identifying every bottleneck, manual step, and approval loop that slows down production and limits output.' },
  { step: '02', title: 'Design', desc: 'We architect a custom AI workflow tailored to your content types, brand guidelines, and team structure. Every automation is designed to integrate with the tools your team already uses.' },
  { step: '03', title: 'Build', desc: 'Our engineers build and configure the pipeline — connecting AI generation, templating, review gates, and delivery outputs into a seamless automated system.' },
  { step: '04', title: 'Optimize', desc: 'We monitor output quality and pipeline performance, continuously tuning the automation to improve speed, reduce error rates, and adapt to your evolving content needs.' },
]

export default function AIContentWorkflowAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ebff00] rounded-full blur-[300px] opacity-[0.03]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#ebff00] rounded-full animate-pulse" />
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">AI Content Workflow Automation</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 12vw, 160px)' }} className="text-white leading-none mb-8 max-w-6xl">
            AI CONTENT WORKFLOW<br />AUTOMATION THAT<br /><span style={{ color: '#ebff00' }}>ELIMINATES THE GRIND.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-2xl mb-12 leading-relaxed">
            Your content team has more ideas than bandwidth. Ruminate X builds AI-powered production pipelines that automate the repetitive, time-consuming stages of video creation — so your team focuses on strategy and storytelling while the pipeline handles everything from generation to final delivery. Faster turnaround, higher output, zero compromise on quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Automate Your Workflow</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '10×', label: 'Faster content turnaround' },
              { stat: '80%', label: 'Reduction in manual tasks' },
              { stat: '50+', label: 'Videos per month per client' },
              { stat: '24hrs', label: 'Brief to final delivery' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What Is AI Content Workflow Automation?</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">YOUR CONTENT<br />PIPELINE ON<br />AUTOPILOT</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            AI content workflow automation is the practice of using artificial intelligence to handle the production-intensive stages of content creation — scripting, visual generation, editing, formatting, and delivery — while keeping creative strategy and brand oversight firmly in human hands. At Ruminate X, we design and operate these pipelines for brands that need to produce video content at a pace traditional workflows simply cannot sustain.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            The problem most marketing teams face is not a lack of ideas. It is the gap between what they want to produce and what their production capacity allows. Every video requires a chain of tasks — writing, asset creation, editing, review, revision, formatting, and distribution. Each handoff introduces delays. Each revision cycle adds days. The result is a backlog of content that never gets made and campaigns that launch with a fraction of the creative assets they need.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            AI workflow automation collapses that chain. Our pipelines accept a brief and move it through generation, assembly, and formatting stages autonomously — producing review-ready drafts in hours rather than weeks. Human creatives review, refine, and approve. The system learns from their feedback and improves with every cycle. The output is not generic AI content. It is brand-aligned, strategically sound video produced at a speed and volume that would require an army of freelancers to match through traditional methods.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why Automate Your Content Workflow</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">LESS BUSYWORK<br />MORE CREATIVE OUTPUT</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">AUTOMATED WORKFLOWS<br />FOR EVERY CHANNEL</h2>
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
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">FROM BOTTLENECK<br />TO PIPELINE</h2>
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
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-8">AUTOMATION THAT<br />STILL FEELS HUMAN</h2>
        <div className="max-w-3xl">
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Most automation tools give you templates and tell you to figure it out. Ruminate X builds, operates, and optimizes your entire content pipeline. We are not selling software — we are running the production engine so your team does not have to. Every workflow is custom-built around your brand, your content types, and your approval process.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed">
            The automation handles the heavy lifting, but human creativity drives every decision that matters. Our creative strategists design the content frameworks. Our editors review every output. The AI accelerates production — it never replaces taste. Combined with our <Link href="/ai-video-agency" className="text-[#ebff00] hover:underline">AI video agency</Link> services and <Link href="/ai-short-form-video" className="text-[#ebff00] hover:underline">AI short form video</Link> capabilities, workflow automation becomes the backbone of a content operation that scales as fast as your ambition demands.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            STOP MANAGING<br />PRODUCTION.<br /><span style={{ color: '#ebff00' }}>START SCALING IT.</span>
          </h2>
          <p className="text-[#888888] mb-8">Tell us about your content bottlenecks. We&apos;ll design an AI-powered workflow that transforms your production capacity — and show you a working prototype within two weeks.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
