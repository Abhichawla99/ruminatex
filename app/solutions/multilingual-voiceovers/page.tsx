import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Voiceovers in 140+ Languages in Under 1 Hour | Ruminate X',
  description: 'Get AI-generated professional voiceovers in 140+ languages and accents. Create multilingual video content in under 1 hour.',
  openGraph: {
    title: 'Multilingual AI Voiceovers | Ruminate X',
    description: 'Professional voiceovers in 140+ languages generated in minutes.',
  },
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Solutions / Multilingual</p>
        <h1 style={{ ...displayStyle, fontSize: 'clamp(52px, 10vw, 130px)' }} className="text-white leading-none mb-6">
          140+ LANGUAGES.<br />ONE HOUR.<br /><span style={{ color: '#ebff00' }}>ZERO VOICE ACTORS.</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-2xl">
          Eliminate expensive voice actors. Get natural-sounding professional voiceovers in 140+ languages and regional accents instantly. Global content without the global budget.
        </p>
      </section>

      {/* The Problem */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Traditional Way</p>
              <h2 style={{ ...displayStyle, fontSize: 'clamp(32px, 4vw, 56px)' }} className="text-white leading-none mb-8">
                GLOBAL CONTENT USED TO BE EXPENSIVE
              </h2>
              <div className="space-y-4">
                {[
                  ['$500–$2,000 per language', 'for professional voice actors'],
                  ['$100–$500/hour', 'in recording studio time'],
                  ['Weeks of coordination', 'across time zones and schedules'],
                  ['Limited language support', 'cost-prohibitive beyond 3–5 languages'],
                  ['No ability to scale', 'each new language is a new project from scratch'],
                ].map(([bold, rest]) => (
                  <div key={bold} className="flex gap-4 border-b border-[#1a1a1a] pb-4">
                    <span className="text-[#333333] font-bold text-sm mt-1">—</span>
                    <p className="text-[#888888]"><span className="text-white font-bold">{bold}</span> {rest}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The AI Way</p>
              <h2 style={{ ...displayStyle, fontSize: 'clamp(32px, 4vw, 56px)' }} className="text-white leading-none mb-8">
                NOW IT TAKES UNDER AN HOUR
              </h2>
              <div className="border border-[#1a1a1a] p-8">
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-[#666666] text-xs uppercase tracking-[0.2em] mb-2">Voice Actor Approach</p>
                    <div className="space-y-2 text-[#888888] text-sm">
                      <p>1 language: $500–$2,000</p>
                      <p>10 languages: $5,000–$20,000</p>
                      <p>Timeline: 2–4 weeks</p>
                      <p>Limited options</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#666666] text-xs uppercase tracking-[0.2em] mb-2">AI Voiceover</p>
                    <div className="space-y-2 text-[#888888] text-sm">
                      <p>1 language: <span className="text-[#ebff00]">$0.50–$5</span></p>
                      <p>140+ languages: <span className="text-[#ebff00]">Same cost</span></p>
                      <p>Timeline: <span className="text-[#ebff00]">&lt; 1 hour</span></p>
                      <p><span className="text-[#ebff00]">Every major language</span></p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-[#1a1a1a] pt-6">
                  <p style={{ ...displayStyle, fontSize: '32px' }} className="text-[#ebff00] leading-none">99% SAVINGS.</p>
                  <p style={{ ...displayStyle, fontSize: '32px' }} className="text-white leading-none">95% FASTER.</p>
                  <p style={{ ...displayStyle, fontSize: '32px' }} className="text-white leading-none">UNLIMITED REACH.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Support */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Coverage</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            140+ LANGUAGES & REGIONAL ACCENTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-6">Top Languages (with accents)</h3>
              <div className="space-y-3 text-sm">
                {[
                  ['English', 'US, UK, Australian, Indian'],
                  ['Spanish', 'Spain, Mexico, Argentina'],
                  ['Chinese', 'Mandarin, Cantonese'],
                  ['French', 'France, Canadian, African'],
                  ['German', 'Germany, Austria, Swiss'],
                  ['Arabic', 'Modern Standard, Egyptian, Gulf'],
                  ['Portuguese', 'Brazil, Portugal'],
                  ['Japanese, Korean, Russian, Italian, Dutch', ''],
                ].map(([lang, accents]) => (
                  <div key={lang} className="flex justify-between">
                    <span className="text-white">{lang}</span>
                    {accents && <span className="text-[#666666]">{accents}</span>}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#080808] p-8">
              <h3 className="text-[#888888] text-xs uppercase tracking-[0.2em] mb-6">Additional Languages</h3>
              <div className="space-y-2 text-[#666666] text-sm">
                <p>Polish, Turkish, Swedish, Norwegian, Danish, Finnish</p>
                <p>Thai, Vietnamese, Indonesian, Filipino, Malay</p>
                <p>Hindi, Tamil, Telugu, Marathi, Bengali, Urdu</p>
                <p>Greek, Romanian, Czech, Hungarian, Croatian</p>
                <p>Hebrew, Farsi, Pashto, Afrikaans, Icelandic</p>
                <p className="text-[#888888] mt-4 font-bold">And 90+ more languages.</p>
              </div>
              <div className="mt-8 border-t border-[#1a1a1a] pt-6">
                <p className="text-[#888888] text-sm">Whatever your global audience speaks, we can localize for them. Same cost, same timeline, same quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Process</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            TEXT TO VOICEOVER IN MINUTES
          </h2>
          <div className="space-y-0">
            {[
              {
                step: '01',
                title: 'Write Your Script',
                time: '5 minutes',
                body: 'Write your script in English or any language. AI preserves meaning and tone when translating. Keep sentences shorter for better pronunciation.',
              },
              {
                step: '02',
                title: 'Select Languages & Voices',
                time: '5 minutes',
                body: 'Choose from multiple voice options per language — male, female, age variations. English (US Female, British Male), Spanish (Mexico, Spain), French (Canada, France). Generate for all 140+ languages at once.',
              },
              {
                step: '03',
                title: 'Generate & Download',
                time: '30 seconds',
                body: 'AI generates professional voiceovers instantly with natural-sounding pronunciation, proper intonation, and studio-grade audio quality. Download as MP3, WAV, or sync directly to video.',
              },
            ].map(({ step, title, time, body }) => (
              <div key={step} className="border-t border-[#1a1a1a] py-10 grid grid-cols-1 md:grid-cols-[100px_1fr_200px] gap-8 items-start">
                <span style={{ ...displayStyle, fontSize: '72px' }} className="text-[#333333] leading-none">{step}</span>
                <div>
                  <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
                  <p className="text-[#888888]">{body}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#ebff00] text-xs uppercase tracking-[0.2em] mb-1">Time</p>
                  <p className="text-white font-bold">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">The Numbers</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-4">
            GLOBAL LOCALIZATION COST COMPARISON
          </h2>
          <p className="text-[#888888] mb-12">3-minute corporate video. Traditional vs. AI.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#1a1a1a]">
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4 pr-8">Approach</th>
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4 pr-8">Cost</th>
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4 pr-8">Timeline</th>
                  <th className="text-left text-[#666666] text-xs uppercase tracking-[0.2em] py-4">Languages</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-5 pr-8 text-[#888888]">1 English voice actor</td>
                  <td className="py-5 pr-8 text-[#888888]">$500–$1,500</td>
                  <td className="py-5 pr-8 text-[#888888]">3–5 days</td>
                  <td className="py-5 text-[#888888]">1</td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-5 pr-8 text-[#888888]">10 language voice actors</td>
                  <td className="py-5 pr-8 text-[#888888]">$5,000–$15,000</td>
                  <td className="py-5 pr-8 text-[#888888]">2–4 weeks</td>
                  <td className="py-5 text-[#888888]">10</td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-5 pr-8 text-white font-bold">AI voiceovers (all 140+ languages)</td>
                  <td className="py-5 pr-8 text-[#ebff00] font-bold">$5–$50</td>
                  <td className="py-5 pr-8 text-[#ebff00] font-bold">&lt; 1 hour</td>
                  <td className="py-5 text-[#ebff00] font-bold">140+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Real-World Use Cases</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            WHO USES THIS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {[
              {
                label: 'Global SaaS Company',
                detail: 'Launch in 15 markets simultaneously. Create video once, generate 15 voiceovers in 30 minutes. Same production day across all markets.',
              },
              {
                label: 'Ecommerce Business',
                detail: 'Single video with voiceovers in English, Spanish, French, German, Japanese, Chinese. Reach 3 billion people with one asset.',
              },
              {
                label: 'Educational Platform',
                detail: 'Record course once. Generate 50 voiceovers automatically. Eliminate the translation bottleneck and launch globally in weeks.',
              },
              {
                label: 'Corporate Training',
                detail: 'Localize training for 30+ country operations. Every employee gets training in their native language.',
              },
            ].map(({ label, detail }) => (
              <div key={label} className="bg-[#080808] p-8">
                <h3 className="text-white font-bold mb-3">{label}</h3>
                <p className="text-[#666666] text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">FAQ</p>
          <h2 style={{ ...displayStyle, fontSize: 'clamp(36px, 5vw, 70px)' }} className="text-white leading-none mb-16">
            AI VOICEOVERS
          </h2>
          <div className="space-y-0">
            {[
              { q: 'Do AI voiceovers sound robotic?', a: 'No. Modern AI voices sound natural and human-like. Most people cannot tell the difference.' },
              { q: 'Can I customize voice characteristics?', a: 'Yes. Adjust pitch, speed, emphasis, and tone. Choose male/female voices, different accents, and age variations.' },
              { q: 'Can I use AI voiceovers for commercial projects?', a: 'Absolutely. Full commercial rights included. Use in ads, products, presentations — anywhere you need.' },
              { q: 'What is the audio quality?', a: 'Studio-grade audio quality. 48kHz sample rate, 24-bit depth. Professional broadcast standard.' },
            ].map(({ q, a }) => (
              <div key={q} className="border-t border-[#1a1a1a] py-8">
                <h3 className="text-white font-bold mb-3">{q}</h3>
                <p className="text-[#888888]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ ...displayStyle, fontSize: 'clamp(40px, 6vw, 80px)' }} className="text-white leading-none mb-6">
            GO GLOBAL.<br /><span style={{ color: '#ebff00' }}>GO TODAY.</span>
          </h2>
          <p className="text-[#888888] mb-10">Professional voiceovers in 140+ languages. No voice actors. No studios. No delays.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Create Your First Multilingual Video
          </Link>
        </div>
      </section>
    </>
  )
}
