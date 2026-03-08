'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `New Project Inquiry from ${formData.name}${formData.company ? ` — ${formData.company}` : ''}`
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.company && `Company: ${formData.company}`,
      formData.projectType && `Project Type: ${formData.projectType}`,
      formData.budget && `Budget: ${formData.budget}`,
      '',
      `Message:\n${formData.message}`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(
      `mailto:hello@ruminatex.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    )
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-[#ebff00]/30 p-12 text-center">
        <span
          className="block mb-4"
          style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: '60px', color: '#ebff00' }}
        >
          SENT.
        </span>
        <p className="text-[#888888] mb-6">
          Your email client should have opened with the details. We&apos;ll be in touch soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs uppercase tracking-[0.2em] text-[#666666] hover:text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full bg-[#111111] border border-[#1a1a1a] text-white px-4 py-3 text-sm focus:border-[#ebff00]/50 focus:outline-none transition-colors placeholder:text-[#444444]'
  const labelClass = 'block text-xs uppercase tracking-[0.2em] text-[#ebff00] mb-2'

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Company / Brand</label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className={inputClass}
          placeholder="Your company name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Project Type</label>
          <select
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className={`${inputClass} appearance-none`}
          >
            <option value="">Select type</option>
            <option>Brand Film</option>
            <option>AI Commercial</option>
            <option>Fashion & Lifestyle</option>
            <option>Social Content</option>
            <option>Product Launch</option>
            <option>Other / Not Sure</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Budget Range</label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className={`${inputClass} appearance-none`}
          >
            <option value="">Select budget</option>
            <option>Under $5K</option>
            <option>$5K – $15K</option>
            <option>$15K – $30K</option>
            <option>$30K – $60K</option>
            <option>$60K+</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Tell Us Your Idea *</label>
        <textarea
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClass} resize-none`}
          placeholder="Describe your project, your brand, and the boldest version of what you want to create..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] py-4 hover:bg-white transition-colors"
      >
        Send Message
      </button>
    </form>
  )
}
