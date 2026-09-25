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
    updated: '2026-09-24',
  },
  {
    path: '/ai-commercial-production',
    title: 'AI Commercial Production for Brands',
    question: 'ai commercial production: how is an AI commercial made and what does it cost',
    kind: 'service',
    published: '2026-03-07',
    updated: '2026-09-24',
  },
  {
    path: '/blog/how-much-does-ai-video-production-cost',
    title: 'AI Video Production Cost: What Brands Pay',
    question: 'how much does ai video production cost',
    kind: 'guide',
    published: '2026-02-22',
    updated: '2026-09-24',
  },
  {
    path: '/comparison/ai-agency-vs-traditional-agency',
    title: 'AI Video Agency vs Traditional Production',
    question: 'ai video vs traditional video production: which should my brand hire',
    kind: 'comparison',
    published: '2026-03-08',
    updated: '2026-09-23',
  },
  {
    path: '/ai-brand-film-agency',
    title: 'AI Brand Film Production for Companies',
    question: 'ai brand film: what is it, how is it made and what does it cost',
    kind: 'service',
    published: '2026-03-07',
    updated: '2026-09-24',
  },
  {
    path: '/ai-video-production-healthcare',
    title: 'AI Video for Pharma and Healthcare Marketing',
    question: 'can pharma, pharmacy, lab and medical companies use AI video, and what will MLR ask',
    kind: 'industry',
    published: '2026-03-07',
    updated: '2026-09-24',
  },
  {
    path: '/guides/ai-video-character-consistency',
    title: 'AI Video Character Consistency for Brands',
    question: 'how do I keep the same character consistent across an AI video and the campaign photos',
    kind: 'guide',
    published: '2026-09-24',
    updated: '2026-09-24',
  },
  {
    path: '/guides/first-frame-last-frame-ai-video',
    title: 'First and Last Frame AI Video for Commercials',
    question: 'first frame last frame ai video: how does an AI commercial start from approved stills',
    kind: 'guide',
    published: '2026-09-24',
    updated: '2026-09-24',
  },
  {
    path: '/guides/brand-world-building',
    title: 'Brand World Building for AI Film and Photos',
    question: 'brand world building: how do I keep an AI brand film and its campaign photos in one world',
    kind: 'guide',
    published: '2026-09-24',
    updated: '2026-09-24',
  },
  {
    path: '/guides/brand-visual-dna',
    title: 'Brand Visual DNA: The Look Brief for AI Film',
    question: 'what is brand visual dna, and what does an AI film need on top of a photo brief',
    kind: 'guide',
    published: '2026-09-24',
    updated: '2026-09-24',
  },
  {
    path: '/guides/ai-commercial-product-accuracy',
    title: 'Product and Label Accuracy in AI Commercials',
    question: 'how do I keep my product, label and logo accurate in an AI commercial',
    kind: 'guide',
    published: '2026-09-24',
    updated: '2026-09-24',
  },
  {
    path: '/guides/commercial-production-budget-template',
    title: 'Commercial Production Budget Template for AI',
    question: 'commercial production budget template: what lines does an AI film and campaign stills budget need',
    kind: 'guide',
    published: '2026-09-24',
    updated: '2026-09-24',
  },
  {
    path: '/guides/ai-campaign-stack',
    title: 'AI Campaign Stack: Tools Behind Film and Stills',
    question: 'what tools make up an AI campaign stack, from stills to video to edit',
    kind: 'guide',
    published: '2026-09-24',
    updated: '2026-09-24',
  },
  {
    path: '/guides/ad-campaign-deliverables',
    title: 'Ad Campaign Deliverables: Film and Stills',
    question: 'ad campaign deliverables: which films, cutdowns and stills does each channel need',
    kind: 'guide',
    published: '2026-09-24',
    updated: '2026-09-24',
  },
  {
    path: '/guides/video-vs-static-ads',
    title: 'Video vs Static Ads: Where AI Film Fits',
    question: 'video vs static ads: which should I run, and where does an AI commercial fit',
    kind: 'guide',
    published: '2026-09-24',
    updated: '2026-09-24',
  },
  {
    path: '/guides/ai-video-quality-control',
    title: 'AI Video Quality Control Before It Airs',
    question: 'ai video quality control: what do I check in an AI commercial before it airs',
    kind: 'guide',
    published: '2026-09-24',
    updated: '2026-09-24',
  },
]
