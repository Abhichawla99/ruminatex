import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Automate Video Production: Zapier, Slack & CMS Integration | Ruminate X',
  description: 'Integrate AI video generation into your workflow. Automate with Zapier, Slack, and CMS platforms.',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Tools / Automation</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          VIDEO ON<br />AUTOPILOT.<br /><span style={{ color: '#ebff00' }}>HANDS-FREE.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          Integrate video generation directly into your tech stack. Trigger on blog posts, product launches, lead submissions. Auto-publish to YouTube, Slack, your CMS. Zero manual steps.
        </p>
      </section>

      {/* Automation Workflows */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Workflows</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            FOUR AUTOMATION SCENARIOS
          </h2>
          <div className="space-y-0">
            {[
              {
                number: '01',
                title: 'Email → Video',
                trigger: 'Email received with product launch details',
                flow: 'AI generates demo video → Sends to Slack for review → Auto-publishes to YouTube → Notifies sales team',
                outcome: 'Product launch video live without a single manual step.',
              },
              {
                number: '02',
                title: 'Blog Post → Video',
                trigger: 'New blog post published in CMS',
                flow: 'AI extracts key points → Generates 60-second explainer → Adds captions → Posts to social media → Embeds in blog',
                outcome: 'Every article automatically becomes a video. Your content gets 80% more reach.',
              },
              {
                number: '03',
                title: 'Product Update → Training Video',
                trigger: 'Feature released in production',
                flow: 'Brief automatically generated from changelog → Video created with AI → Captions added → Training deployed to LMS',
                outcome: 'Your team learns every new feature the day it ships.',
              },
              {
                number: '04',
                title: 'Form Submission → Personalized Video',
                trigger: 'Lead fills out contact or demo request form',
                flow: 'Personalized video generated using lead data → Sent via email → CRM updated with engagement data',
                outcome: '3x higher email engagement. Prospects feel known before the first call.',
              },
            ].map(({ number, title, trigger, flow, outcome }) => (
              <div key={number} className="border-t border-[#1a1a1a] py-10 grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8">
                <span style={{ ...displayStyle, fontSize: '72px' }} className="text-[#333333] leading-none">{number}</span>
                <div>
                  <h3 style={{ ...displayStyle, fontSize: '36px' }} className="text-white leading-none mb-4">{title}</h3>
                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-[#666666] text-xs uppercase tracking-[0.2em] mb-1">Trigger</p>
                      <p className="text-[#888888]">{trigger}</p>
                    </div>
                    <div>
                      <p className="text-[#666666] text-xs uppercase tracking-[0.2em] mb-1">Flow</p>
                      <p className="text-[#888888]">{flow}</p>
                    </div>
                  </div>
                  <div className="border-t border-[#1a1a1a] pt-4">
                    <p className="text-[#ebff00] text-sm font-bold">{outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Integrations */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Integrations</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            PLUGS INTO YOUR STACK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
            {[
              { name: 'Zapier', detail: '1,000+ app integrations. Build automation without code.' },
              { name: 'Slack', detail: 'Instant notifications and video delivery to your team.' },
              { name: 'WordPress & HubSpot CMS', detail: 'Auto-embed videos in published content.' },
              { name: 'Google Workspace & Microsoft 365', detail: 'Trigger videos from Docs, Sheets, and Teams.' },
              { name: 'Salesforce & Marketo', detail: 'CRM-triggered personalized video for sales and marketing.' },
              { name: 'Custom API', detail: 'Build any integration. Full REST API access for engineering teams.' },
            ].map(({ name, detail }) => (
              <div key={name} className="bg-[#080808] p-8">
                <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-3">Integration</p>
                <h3 className="text-white font-bold mb-2">{name}</h3>
                <p className="text-[#666666] text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Automate */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Case for Automation</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            WHY AUTOMATE VIDEO PRODUCTION?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              {[
                { title: 'Eliminate Human Bottlenecks', body: 'Manual video production requires a person at every step. Automation removes the dependency on individual availability.' },
                { title: 'Publish at the Speed of Your Product', body: 'When you ship a feature on Friday, the training video is live on Friday — not three weeks later.' },
                { title: 'Scale Without Headcount', body: 'Produce 500 videos with the same team that was producing 5. Automation makes volume a system problem, not a people problem.' },
              ].map(({ title, body }) => (
                <div key={title} className="border-b border-[#1a1a1a] pb-6">
                  <h3 className="text-white font-bold mb-2">{title}</h3>
                  <p className="text-[#888888]">{body}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                { title: 'Consistency at Scale', body: 'Every automated video follows the same quality standard, brand guidelines, and pacing. No human variance.' },
                { title: 'Data-Driven Iteration', body: 'Automated systems collect engagement data and can trigger new video variants based on performance.' },
                { title: 'Zero Context-Switching', body: 'Your team stays focused on their core work. The video pipeline runs in the background without interruption.' },
              ].map(({ title, body }) => (
                <div key={title} className="border-b border-[#1a1a1a] pb-6">
                  <h3 className="text-white font-bold mb-2">{title}</h3>
                  <p className="text-[#888888]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            BUILD YOUR<br /><span style={{ color: '#ebff00' }}>VIDEO PIPELINE.</span>
          </h2>
          <p className="text-[#888888] mb-10">We architect the automation, configure the integrations, and hand you a system that runs without you. Brief us.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            View Integration Docs
          </Link>
        </div>
      </section>
    </>
  )
}
