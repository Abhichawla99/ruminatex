/**
 * Every page the daily SEO routine has written or rebuilt, newest last.
 *
 * app/sitemap.ts reads this: a path listed here gets `updated` as its
 * lastModified, and a path the static sitemap list does not have is added.
 * Add a row when a page ships. Change `updated` whenever its copy changes
 * materially, and in the same commit change PAGE.updated on the page itself.
 */
export type SeoPage = {
  path: string
  title: string
  /** One line: the question the page answers, the way a buyer asks it. */
  question: string
  kind: 'guide' | 'service' | 'industry' | 'case-study' | 'comparison'
  /** ISO dates, YYYY-MM-DD. */
  published: string
  updated: string
}

export const SEO_PAGES: SeoPage[] = []
