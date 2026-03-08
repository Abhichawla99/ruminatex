import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-display text-3xl tracking-[0.2em] text-white block mb-4"
            >
              RUMINATE X
            </Link>
            <p className="text-[#666666] text-sm leading-relaxed max-w-xs">
              AI-powered cinematic production for brands that dare to imagine differently. No idea is impossible.
            </p>
            <div className="flex gap-6 mt-6">
              <a
                href="https://instagram.com/ruminatex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666666] hover:text-[#ebff00] transition-colors text-xs uppercase tracking-widest"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/ruminatex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666666] hover:text-[#ebff00] transition-colors text-xs uppercase tracking-widest"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Studio links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#ebff00] mb-6">Studio</h3>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Our Work', href: '/work' },
                { label: 'Services', href: '/services' },
                { label: 'About', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-[#888888] hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#ebff00] mb-6">Contact</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@ruminatex.com"
                className="text-sm text-[#888888] hover:text-white transition-colors"
              >
                hello@ruminatex.com
              </a>
              <p className="text-sm text-[#888888]">Calgary, Alberta, Canada</p>
              <p className="text-sm text-[#888888]">Serving clients worldwide</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-[#444444]">
            © {currentYear} Ruminate X. All rights reserved.
          </p>
          <p className="text-xs text-[#444444]">
            AI Creative Studio · Calgary, Canada · Serving Brands Worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
