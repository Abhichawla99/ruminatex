import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ruminatex.com'),
  title: {
    default: 'Ruminate X | AI Video Production Agency | Cinematic Brand Films',
    template: '%s | Ruminate X',
  },
  description:
    'Ruminate X is an AI-powered creative studio producing cinematic brand films, commercials, and creative content for e-commerce, fashion, and enterprise brands worldwide. No idea is impossible.',
  keywords: [
    'AI video production agency',
    'AI creative studio',
    'cinematic brand films',
    'AI commercial production',
    'brand video production',
    'AI content creation',
    'fashion video production',
    'ecommerce video production',
    'startup video production',
    'AI brand content',
  ],
  authors: [{ name: 'Ruminate X' }],
  creator: 'Ruminate X',
  icons: {
    icon: '/favicon.svg',
  },
  other: {
    'theme-color': '#080808',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ruminatex.com',
    siteName: 'Ruminate X',
    title: 'Ruminate X | AI Video Production Agency | Cinematic Brand Films',
    description:
      'AI-powered cinematic production for brands that dare to imagine differently. No idea is impossible.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ruminate X - AI Creative Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ruminate X | AI Video Production Agency',
    description:
      'AI-powered cinematic production for brands that dare to imagine differently.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="theme-color" content="#080808" />
      </head>
      <body className="bg-[#080808] text-white antialiased" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
