import { FOUNDER, SITE } from './facts'
import { getVideoUrl, getYoutubeThumbnail, type PortfolioItem } from '@/lib/portfolio'

export type PageMeta = {
  /** Path from the site root, e.g. '/guides/ai-commercial-cost'. */
  path: string
  /** The <title>. Lead with the phrase people search. 60 characters or fewer. */
  title: string
  /** The meta description. It answers the question. */
  description: string
  /** ISO dates, YYYY-MM-DD. */
  published: string
  updated: string
  /** Real query strings, in demand order. */
  keywords?: string[]
  image?: string
}

export type Faq = { q: string; a: string }
export type Crumb = { name: string; path: string }

export const absolute = (path: string) => (path.startsWith('http') ? path : `${SITE.url}${path}`)

export const authorLd = {
  '@type': 'Person',
  '@id': FOUNDER.id,
  name: FOUNDER.name,
  jobTitle: FOUNDER.jobTitle,
  url: FOUNDER.url,
  worksFor: { '@id': SITE.orgId },
}

export const publisherLd = {
  '@type': 'Organization',
  '@id': SITE.orgId,
  name: SITE.name,
  url: SITE.url,
  logo: { '@type': 'ImageObject', url: SITE.logo },
}

export function articleLd(page: PageMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.title,
    description: page.description,
    datePublished: page.published,
    dateModified: page.updated,
    mainEntityOfPage: absolute(page.path),
    image: absolute(page.image ?? SITE.ogImage),
    author: authorLd,
    publisher: publisherLd,
  }
}

export function faqLd(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function breadcrumbLd(trail: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: absolute(crumb.path),
    })),
  }
}

/** Returns null when the film has no uploadDate, because Google rejects a VideoObject without one. */
export function videoLd(item: PortfolioItem) {
  if (!item.uploadDate) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: item.title,
    description: item.description,
    thumbnailUrl: [getYoutubeThumbnail(item.youtubeId)],
    uploadDate: item.uploadDate,
    ...(item.durationSeconds ? { duration: `PT${item.durationSeconds}S` } : {}),
    embedUrl: `https://www.youtube-nocookie.com/embed/${item.youtubeId}`,
    url: getVideoUrl(item),
    publisher: publisherLd,
  }
}
