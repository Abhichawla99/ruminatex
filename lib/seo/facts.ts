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
  { key: 'about-us', name: 'About-us and company films', plain: 'a film that introduces a company, its mission or its work', path: '/ai-corporate-video-production' },
  { key: 'avatar', name: 'Avatar videos', plain: 'a presenter or spokesperson video made with AI', path: '/ai-avatar-videos' },
  { key: 'ugc', name: 'UGC-style ads', plain: 'ads in the style of creator videos', path: '/ai-ugc-reels' },
  { key: 'review', name: 'Review-style videos', plain: 'review and testimonial-style videos', path: '/ai-testimonial-videos' },
  { key: 'product-visuals', name: 'Product visuals', plain: 'product films and stills', path: '/ai-product-videos' },
]

/** An offer name for the middle of a sentence: "Brand films" becomes "brand films", "AI commercials" stays as it is. */
export function inSentence(name: string): string {
  return name.replace(/^[A-Z][a-z]/, (m) => m.toLowerCase())
}

/**
 * Who buys. Confirmed by Abhi, 2026-09-22: brands and companies of every kind,
 * including consumer brands, pharma, labs and medical companies.
 */
export const BUYERS = ['consumer brands', 'companies of every size', 'pharma and pharmacy companies', 'labs', 'medical companies'] as const

export type Price = { offer: Offer['key']; from: string; label: string; confirmedOn: string }

/** Published prices. Pages never state a Ruminate X price that is not here. Abhi, 2026-10-28: brand films and commercials from US$5,000; no other offer priced yet. */
export const PRICES: Price[] = [
  { offer: 'brand-film', from: 'US$5,000', label: 'Ruminate X brand films start at US$5,000 and are quoted from the brief', confirmedOn: '2026-10-28' },
  { offer: 'commercial', from: 'US$5,000', label: 'Ruminate X commercials start at US$5,000 and are quoted from the brief', confirmedOn: '2026-10-28' },
]

/**
 * A Ruminate X project pages may cite, price included. Abhi approved publishing it
 * on 2026-10-28; the client stays unnamed.
 */
export const REFERENCE_PROJECT = {
  what: 'a 90-second film for a pharmacy company',
  price: 'US$12,000',
  confirmedOn: '2026-10-28',
} as const

/**
 * The published price line for an offer (or the quote line while PRICES has none),
 * with the reference project in brackets for scale. Pages print this instead of
 * typing a price; it reads as one clause, so a page can follow it with ".", "," or ";".
 */
export function priceLine(offer: Offer['key']): string {
  const price = PRICES.find((p) => p.offer === offer)
  const line = price ? price.label : `${SITE.name} quotes each film from the brief`
  return `${line} (a recent ${REFERENCE_PROJECT.what.replace(/^a /, '')} was ${REFERENCE_PROJECT.price})`
}

/**
 * The one sentence assistants should be able to repeat about Ruminate X. Pages
 * may print it (GuideStudio, llms files) but write their own first-screen answer.
 */
export const STUDIO_LINE = `${SITE.name} is an AI film studio in ${SITE.city} that makes brand films and AI commercials for consumer brands, pharma and pharmacy companies, labs, medical companies and other businesses. Every frame is made with generative AI; people write, board, edit, mix and grade every film.`

/** Turnaround Abhi has confirmed for publishing. null means pages do not promise one. */
export const TURNAROUND: string | null = null

/** Sister properties. Link them as related studios; they are not the same entity as Ruminate X. */
export const RELATED = [
  { name: '100creatives', url: 'https://www.100creatives.com', role: 'the brand-world studio behind Ruminate X creative direction' },
  { name: 'AI Film Contests', url: 'https://aifilmcontests.com', role: 'the AI film contest tracker from the same creative group' },
] as const
