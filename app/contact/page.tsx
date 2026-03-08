import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Start Your AI Video Project',
  description:
    'Ready to create the impossible? Get in touch with Ruminate X — AI-powered cinematic production for brands worldwide. Tell us your vision.',
}

const displayStyle = { fontFamily: 'var(--font-bebas-neue), sans-serif' }

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Get In Touch</p>
        <h1
          style={{ ...displayStyle, fontSize: 'clamp(60px, 12vw, 150px)' }}
          className="text-white leading-none mb-6"
        >
          LET&apos;S TALK
        </h1>
        <p className="text-[#888888] text-lg max-w-xl">
          Tell us about your brand, your vision, and your wildest idea. We&apos;re ready to say yes.
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
                href="mailto:hello@ruminatex.com"
                style={{ ...displayStyle, fontSize: '28px' }}
                className="text-white hover:text-[#ebff00] transition-colors block"
              >
                hello@ruminatex.com
              </a>
            </div>

            <div className="border-t border-[#1a1a1a] pt-10">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#ebff00] mb-4">Studio</h3>
              <p className="text-[#888888] text-sm">Calgary, Alberta, Canada</p>
              <p className="text-[#888888] text-sm mt-1">Serving clients worldwide</p>
            </div>

            <div className="border-t border-[#1a1a1a] pt-10">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#ebff00] mb-4">We Work With</h3>
              <div className="space-y-2 text-sm text-[#888888]">
                <p>E-Commerce & DTC Brands</p>
                <p>Startups & Tech Companies</p>
                <p>Enterprise & Fortune 500</p>
                <p>Fashion & Luxury Brands</p>
                <p>Retail & Consumer Products</p>
              </div>
            </div>

            <div className="border border-[#1a1a1a] p-6">
              <p style={{ ...displayStyle, fontSize: '32px', color: '#ebff00' }}>24–48 HRS</p>
              <p className="text-sm text-[#888888] mt-2">
                Average response time. We take every inquiry seriously.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
