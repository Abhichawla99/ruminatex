/**
 * What Ruminate X pages may say about Ruminate X.
 *
 * Every page the daily SEO routine writes takes its company facts from this
 * file and lib/portfolio.ts, interpolated in code, never typed into prose. If a
 * fact is not here, pages do not state it. New facts come only from Abhi.
 *
 * This repo is public. Only publishable facts belong here.
 */

export const SITE = {
  name: 'Ruminate X',
  url: 'https://www.ruminatex.com',
  orgId: 'https://www.ruminatex.com/#organization',
  logo: 'https://www.ruminatex.com/favicon.svg',
  ogImage: '/og-image.jpg',
  email: 'abhi@paperkites.co',
  phone: '+15878049266',
  instagram: 'https://instagram.com/ruminate__x',
  city: 'Calgary, Alberta, Canada',
  foundingYear: 2024,
} as const

export const FOUNDER = {
  name: 'Abhi Chawla',
  jobTitle: 'Founder',
  id: 'https://www.ruminatex.com/about#founder',
  url: 'https://www.ruminatex.com/about',
} as const

/** Confirmed by Abhi, 2026-09-22. */
export const PRODUCTION = {
  aiOnly: true,
  summary:
    'Every frame Ruminate X delivers is made with generative AI. There are no film crews, sets or location shoots.',
} as const

export type Offer = {
  key: string
  name: string
  /** What the buyer gets, in their words. */
  plain: string
  /** The page that sells it, when one exists. */
  path?: string
}

/** What Ruminate X makes. Confirmed by Abhi, 2026-09-22. */
export const OFFERS: Offer[] = [
  { key: 'brand-film', name: 'Brand films', plain: 'a story-driven film about what a brand stands for', path: '/ai-brand-film-agency' },
  { key: 'commercial', name: 'AI commercials', plain: 'ads for TV, streaming, web and social', path: '/ai-commercial-production' },
  { key: 'about-us', name: 'About-us and company films', plain: 'a film that introduces a company, its mission or its work' },
  { key: 'avatar', name: 'Avatar videos', plain: 'a presenter or spokesperson video made with AI' },
  { key: 'ugc', name: 'UGC-style ads', plain: 'ads in the style of creator videos', path: '/ai-ugc-reels' },
  { key: 'review', name: 'Review-style videos', plain: 'review and testimonial-style videos', path: '/ai-testimonial-videos' },
  { key: 'product-visuals', name: 'Product visuals', plain: 'product films and stills', path: '/ai-product-videos' },
]

/**
 * Who buys. Confirmed by Abhi, 2026-09-22: brands and companies of every kind,
 * including consumer brands, pharma, labs and medical companies.
 */
export const BUYERS = ['consumer brands', 'companies of every size', 'pharma and pharmacy companies', 'labs', 'medical companies'] as const

export type Price = { offer: Offer['key']; label: string; confirmedOn: string }

/** Published prices. Empty until Abhi confirms what can be published. Pages never state a Ruminate X price that is not here. */
export const PRICES: Price[] = []

/** Turnaround Abhi has confirmed for publishing. null means pages do not promise one. */
export const TURNAROUND: string | null = null

/** Sister properties. Link them as related studios; they are not the same entity as Ruminate X. */
export const RELATED = [
  { name: '100creatives', url: 'https://www.100creatives.com', role: 'the brand-world studio behind Ruminate X creative direction' },
  { name: 'AI Film Contests', url: 'https://aifilmcontests.com', role: 'the AI film contest tracker from the same creative group' },
] as const
