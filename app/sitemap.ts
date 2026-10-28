import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog'
import { SEO_PAGES } from '@/lib/seo/pages'

const siteUrl = 'https://www.ruminatex.com'
const lastModified = new Date('2026-03-17T17:30:00.000Z')

type SitemapPriority = 0.6 | 0.7 | 0.8 | 0.9 | 1

type StaticRoute = {
  path: `/${string}` | '/'
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  priority: SitemapPriority
}

/** Redirected (next.config.ts) or noindexed on 2026-10-28; never listed. */
const MERGED_PATHS = new Set<string>([
  '/affordable-video-production-calgary',
  '/ai-brand-videos',
  '/ai-content-creation-agency',
  '/ai-content-workflow-automation',
  '/ai-creative-studio',
  '/ai-explainer-videos',
  '/ai-generated-brand-content',
  '/ai-influencer-style-content',
  '/ai-motion-content',
  '/ai-product-launch-videos',
  '/ai-product-video-agency',
  '/ai-reel-creation',
  '/ai-short-form-video',
  '/ai-social-media-video',
  '/ai-social-media-video-agency',
  '/ai-tiktok-video-agency',
  '/ai-video-ads',
  '/ai-video-agency',
  '/ai-video-content-repurposing',
  '/ai-video-for-brands',
  '/ai-video-for-ecommerce',
  '/ai-video-for-restaurants',
  '/ai-video-for-startups',
  '/ai-video-marketing-agency',
  '/ai-video-personalization',
  '/ai-video-production-automotive',
  '/ai-video-production-company',
  '/ai-video-production-hospitality',
  '/ai-video-production-luxury',
  '/ai-video-production-nonprofits',
  '/ai-video-production-real-estate',
  '/ai-video-production-saas',
  '/ai-video-production-small-business',
  '/ai-video-production-youtube-creators',
  '/ai-video-strategy',
  '/ai-visual-content-for-companies',
  '/blog/ai-video-production-agency-guide',
  '/blog/ai-video-production-ecommerce-brands-guide',
  '/blog/ai-video-production-fashion-luxury-brands',
  '/blog/ai-vs-traditional-video-production',
  '/blog/ai-vs-traditional-video-production-cost-comparison',
  '/blog/best-video-production-companies-calgary',
  '/blog/how-much-does-video-production-cost-calgary',
  '/blog/why-calgary-businesses-need-video-marketing',
  '/calgary-video-production-packages',
  '/corporate-video-production-calgary',
  '/guides/6-step-video-production-process',
  '/guides/how-to-create-explainer-videos-with-ai',
  '/guides/interactive-product-demos',
  '/guides/screen-recording-automated-demos',
  '/guides/social-media-video-shorts',
  '/guides/video-captions-ai-subtitles',
  '/guides/video-marketing-strategy-ai',
  '/guides/why-traditional-video-agencies-are-expensive',
  '/markets/ai-video-production-australia',
  '/markets/ai-video-production-uk',
  '/product-video-production-calgary',
  '/roi-calculator',
  '/social-media-video-production-calgary',
  '/solutions/cut-video-production-costs',
  '/solutions/fast-explainer-videos',
  '/solutions/multilingual-voiceovers',
  '/solutions/professional-product-demo',
  '/tools/ai-vs-traditional-video',
  '/tools/best-ai-video-tools-comparison',
  '/tools/video-automation-workflow-integration',
  '/use-cases/ecommerce-product-videos',
  '/use-cases/educational-training-videos',
  '/use-cases/real-estate-video-tours',
  '/use-cases/saas-video-production',
  '/video-production-airdrie',
  '/video-production-calgary-automotive',
  '/video-production-calgary-construction',
  '/video-production-calgary-finance',
  '/video-production-calgary-fitness',
  '/video-production-calgary-healthcare',
  '/video-production-calgary-legal',
  '/video-production-calgary-nonprofit',
  '/video-production-calgary-oil-gas',
  '/video-production-calgary-real-estate',
  '/video-production-calgary-restaurants',
  '/video-production-calgary-retail',
  '/video-production-calgary-small-business',
  '/video-production-calgary-tech',
  '/video-production-downtown-calgary',
  '/video-production-near-me',
  '/video-production-nw-calgary',
  '/video-production-se-calgary',
  '/videographer-calgary',
])

const staticRoutes: StaticRoute[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/work', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },

  { path: '/ai-brand-film-agency', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/ai-commercial-production', changeFrequency: 'monthly', priority: 0.9 },

  { path: '/ai-video-production-ecommerce', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-video-production-fashion', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-corporate-video-production', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-video-production-finance', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-video-production-healthcare', changeFrequency: 'monthly', priority: 0.8 },


  { path: '/guides', changeFrequency: 'weekly', priority: 0.8 },



  { path: '/faq-ai-video-production', changeFrequency: 'monthly', priority: 0.8 },

  { path: '/comparison/ai-agency-vs-traditional-agency', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/comparison/freelance-vs-ai-video', changeFrequency: 'monthly', priority: 0.8 },

  { path: '/ai-video-production-agencies', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-ugc-reels', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-product-videos', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-testimonial-videos', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/how-we-make-an-ai-brand-film', changeFrequency: 'monthly', priority: 0.8 },

  { path: '/markets/ai-video-production-canada', changeFrequency: 'monthly', priority: 0.8 },

  { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },

  { path: '/video-production-calgary', changeFrequency: 'weekly', priority: 1 },
  { path: '/brand-film-production-calgary', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/commercial-video-production-calgary', changeFrequency: 'monthly', priority: 0.9 },

  { path: '/best-video-production-company-calgary', changeFrequency: 'monthly', priority: 1 },



  { path: '/blog/top-ai-video-agencies-2026', changeFrequency: 'monthly', priority: 1 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const seoUpdated = new Map(SEO_PAGES.map((page) => [page.path, new Date(`${page.updated}T12:00:00Z`)]))

  // Posts that moved into another page redirect there (next.config.ts), so they stay out.
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.filter((post) => !MERGED_PATHS.has(`/blog/${post.slug}`)).map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: seoUpdated.get(`/blog/${post.slug}`) ?? new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: seoUpdated.get(route.path) ?? lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const listed = new Set<string>([...staticRoutes.map((route) => route.path), ...blogPosts.map((post) => `/blog/${post.slug}`)])
  const seoEntries: MetadataRoute.Sitemap = SEO_PAGES.filter((page) => !listed.has(page.path)).map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: new Date(`${page.updated}T12:00:00Z`),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticEntries, ...seoEntries.filter((e) => !MERGED_PATHS.has(e.url.slice(siteUrl.length))), ...blogRoutes]
}
