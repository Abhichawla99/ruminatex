import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Video Production for Small Business | Compete at Cinema Level | Ruminate X',
  description:
    'Small businesses get cinema-grade brand films and commercials at prices that make sense. Your bigger competitor has the budget — you have the story. We make the film that wins.',
  keywords: ['AI video production small business', 'small business brand film', 'affordable brand video production', 'AI video for local business', 'small business commercial production'],
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

const useCases = [
  { title: 'Brand Films', desc: 'The film that explains not just what you do — but why you do it, why it matters, and why a customer should choose you over anyone else.' },
  { title: 'Product & Service Videos', desc: 'Show exactly what you offer with the clarity and visual quality that turns consideration into conviction. No explaining required.' },
  { title: 'Social Content', desc: 'A consistent presence on the platforms where your customers live — without a content team, without a studio, without the cost.' },
  { title: 'Launch Campaigns', desc: 'New product. New location. New offer. The launch film that gives you one shot to make a first impression that sticks.' },
  { title: 'Testimonial Films', desc: 'Real customer stories, told with the craft of a documentary. Not talking-head reviews — cinematic case studies that build trust.' },
  { title: 'Brand Anthem', desc: 'The 30-second film that captures what you stand for. The one that runs before everything else, that plays at every touchpoint.' },
]

export default function SmallBusinessPage() {
  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ebff00 1px, transparent 1px), linear-gradient(90deg, #ebff00 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="inline-flex items-center gap-2 border border-[#ebff00]/30 px-4 py-2 mb-10">
            <span className="text-[#ebff00] text-xs uppercase tracking-[0.3em]">Small Business</span>
          </div>
          <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 11vw, 150px)' }} className="text-white leading-none mb-8 max-w-5xl">
            YOUR STORY<br />IS WORTH<br /><span style={{ color: '#ebff00' }}>A REAL FILM.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-xl mb-12 leading-relaxed">
            Your competitor with a $500K marketing budget has video everywhere. The advantage they have is not the story — it&apos;s the access to production. AI closes that gap. Cinema-grade brand films and commercials at prices built for businesses that are building something real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1a1a1a] py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '70%', label: 'Lower cost than traditional video production' },
              { stat: '2–3 wks', label: 'From brief to finished film' },
              { stat: '4K', label: 'Cinema quality on every project' },
              { stat: '∞', label: 'Creative possibilities, no limits' },
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
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Films We Make</p>
        <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-16">EVERY BUSINESS<br />HAS A STORY</h2>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Level Playing Field</p>
              <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-8">
                YOU DON&apos;T NEED<br />THEIR BUDGET.<br />YOU NEED THE STORY.
              </h2>
              <p className="text-[#888888] leading-relaxed mb-6">
                The big brands have money. But the best stories don&apos;t come from money — they come from knowing exactly who you are and why what you do matters. AI gives you the production firepower. You already have the story.
              </p>
              <p className="text-[#888888] leading-relaxed">
                We start with your brand. Your reason for existing. The thing that makes your customers come back. Then we build the shot list around that truth.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'STORY FIRST', desc: 'Every film we make starts with understanding your brand deeply — before a single frame is conceived.' },
                { title: 'NO TEMPLATES', desc: "Your film is built from scratch for your brand. We don't have a small business template. We have a process." },
                { title: 'CINEMA QUALITY', desc: 'The same standard we apply to global brands applies to every project we take. Quality is not a tier — it\'s our baseline.' },
              ].map(({ title, desc }) => (
                <div key={title} className="border border-[#1a1a1a] p-6">
                  <h3 style={{ ...displayStyle, fontSize: '22px', color: '#ebff00' }} className="mb-2">{title}</h3>
                  <p className="text-[#666666] text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 60px)' }} className="text-white leading-none mb-6">
            TELL US YOUR STORY.<br /><span style={{ color: '#ebff00' }}>WE&apos;LL MAKE THE FILM.</span>
          </h2>
          <p className="text-[#888888] mb-8">
            No idea too ambitious. No budget too small to start a conversation. We&apos;ll find the story — and find the way to tell it.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">Start a Project</Link>
        </div>
      </section>
    </>
  )
}
