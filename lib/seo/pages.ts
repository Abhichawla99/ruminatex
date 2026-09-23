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

export const SEO_PAGES: SeoPage[] = [
  {
    path: '/how-we-make-an-ai-brand-film',
    title: 'How We Make an AI Brand Film: Brief to Final Cut',
    question: 'how are AI brand films made',
    kind: 'guide',
    published: '2026-09-14',
    updated: '2026-09-22',
  },
  {
    path: '/ai-video-production-agencies',
    title: 'AI Video Production Agency: How to Hire One',
    question: 'ai video production agency: what am I hiring and how do I pick one',
    kind: 'service',
    published: '2026-03-08',
    updated: '2026-09-23',
  },
  {
    path: '/ai-commercial-production',
    title: 'AI Commercial Production for Brands',
    question: 'ai commercial production: how is an AI commercial made and what does it cost',
    kind: 'service',
    published: '2026-03-07',
    updated: '2026-09-23',
  },
  {
    path: '/blog/how-much-does-ai-video-production-cost',
    title: 'AI Video Production Cost: What Brands Pay',
    question: 'how much does ai video production cost',
    kind: 'guide',
    published: '2026-02-22',
    updated: '2026-09-23',
  },
  {
    path: '/comparison/ai-agency-vs-traditional-agency',
    title: 'AI Video Agency vs Traditional Production',
    question: 'ai video vs traditional video production: which should my brand hire',
    kind: 'comparison',
    published: '2026-03-08',
    updated: '2026-09-23',
  },
]
