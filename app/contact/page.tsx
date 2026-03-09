import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Bring Us the Scene — Ruminate X Cinematic Story Studio',
  description:
    'Tell us the story your brand has been trying to tell. The impossible shot. The scene in your head. Ruminate X is a cinematic story studio based in Calgary — we make films for brands worldwide.',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Bring Us the Scene</p>
        <h1
          style={{ ...displayStyle, fontSize: 'clamp(60px, 12vw, 150px)' }}
          className="text-white leading-none mb-6"
        >
          LET&apos;S MAKE<br />YOUR FILM.
        </h1>
        <p className="text-[#888888] text-lg max-w-xl">
          Tell us the scene in your head — the one that&apos;s never been put on screen. The shot you thought was impossible. We start there.
        </p>
      </section>

      {/* Form + Info */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#ebff00] mb-4">Direct Contact</h3>
              <a
                href="mailto:abhi@paperkites.co"
                style={{ ...displayStyle, fontSize: '28px' }}
                className="text-white hover:text-[#ebff00] transition-colors block"
              >
                abhi@paperkites.co
              </a>
              <a
                href="tel:+15878049266"
                style={{ ...displayStyle, fontSize: '22px' }}
                className="text-[#888888] hover:text-[#ebff00] transition-colors block mt-2"
              >
                +1 (587) 804-9266
              </a>
            </div>

            <div className="border-t border-[#1a1a1a] pt-10">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#ebff00] mb-4">Studio</h3>
              <p className="text-[#888888] text-sm">Calgary, Alberta, Canada</p>
              <p className="text-[#888888] text-sm mt-1">Serving clients worldwide</p>
            </div>

            <div className="border-t border-[#1a1a1a] pt-10">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#ebff00] mb-4">Films We Make</h3>
              <div className="space-y-2 text-sm text-[#888888]">
                <p>Brand Films & Founder Stories</p>
                <p>AI Commercials & Campaign Films</p>
                <p>Fashion & Luxury Editorials</p>
                <p>Product Launch Films</p>
                <p>Social Content — Story-First</p>
              </div>
            </div>

            <div className="border border-[#1a1a1a] p-6">
              <p style={{ ...displayStyle, fontSize: '32px', color: '#ebff00' }}>THE BRIEF<br />STARTS HERE.</p>
              <p className="text-sm text-[#888888] mt-2">
                Every great film starts with a story. Tell us yours — no idea too ambitious, no shot too impossible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
