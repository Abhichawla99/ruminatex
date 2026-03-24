import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog'
import { locations } from '@/lib/locations'

const siteUrl = 'https://ruminatex.com'
const lastModified = new Date('2026-03-17T17:30:00.000Z')

type SitemapPriority = 0.6 | 0.7 | 0.8 | 0.9 | 1

type StaticRoute = {
  path: `/${string}` | '/'
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  priority: SitemapPriority
}

const staticRoutes: StaticRoute[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/work', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },

  { path: '/ai-brand-film-agency', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/ai-commercial-production', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/ai-product-video-agency', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-social-media-video-agency', changeFrequency: 'monthly', priority: 0.8 },

  { path: '/ai-video-production-ecommerce', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-video-production-fashion', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-video-production-saas', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-video-production-enterprise', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-video-production-real-estate', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-video-production-finance', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-video-production-luxury', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-video-production-healthcare', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-video-production-hospitality', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-video-production-automotive', changeFrequency: 'monthly', priority: 0.8 },

  { path: '/solutions/fast-explainer-videos', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/cut-video-production-costs', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/professional-product-demo', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/multilingual-voiceovers', changeFrequency: 'monthly', priority: 0.8 },

  { path: '/guides/how-to-create-explainer-videos-with-ai', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guides/video-captions-ai-subtitles', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guides/social-media-video-shorts', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guides/interactive-product-demos', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guides/6-step-video-production-process', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guides/video-marketing-strategy-ai', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guides/screen-recording-automated-demos', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guides/why-traditional-video-agencies-are-expensive', changeFrequency: 'monthly', priority: 0.9 },

  { path: '/use-cases/saas-video-production', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/use-cases/ecommerce-product-videos', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/use-cases/real-estate-video-tours', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/use-cases/educational-training-videos', changeFrequency: 'monthly', priority: 0.7 },

  { path: '/tools/ai-vs-traditional-video', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/tools/best-ai-video-tools-comparison', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/tools/video-automation-workflow-integration', changeFrequency: 'monthly', priority: 0.7 },

  { path: '/faq-ai-video-production', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/roi-calculator', changeFrequency: 'monthly', priority: 0.8 },

  { path: '/comparison/ai-agency-vs-traditional-agency', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/comparison/freelance-vs-ai-video', changeFrequency: 'monthly', priority: 0.8 },

  { path: '/ai-video-production-small-business', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-video-production-agencies', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-ugc-reels', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/ai-video-production-youtube-creators', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/ai-video-production-nonprofits', changeFrequency: 'monthly', priority: 0.7 },

  { path: '/markets/ai-video-production-canada', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/markets/ai-video-production-uk', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/markets/ai-video-production-australia', changeFrequency: 'monthly', priority: 0.8 },

  { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },

  { path: '/video-production-calgary', changeFrequency: 'weekly', priority: 1 },
  { path: '/brand-film-production-calgary', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/commercial-video-production-calgary', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/product-video-production-calgary', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/social-media-video-production-calgary', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/video-production-calgary-real-estate', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/video-production-calgary-oil-gas', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/video-production-calgary-restaurants', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/video-production-calgary-tech', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/video-production-calgary-small-business', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/affordable-video-production-calgary', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/video-production-near-me', changeFrequency: 'monthly', priority: 0.9 },

  { path: '/best-video-production-company-calgary', changeFrequency: 'monthly', priority: 1 },
  { path: '/corporate-video-production-calgary', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/videographer-calgary', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/calgary-video-production-packages', changeFrequency: 'monthly', priority: 0.9 },

  { path: '/video-production-calgary-healthcare', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/video-production-calgary-construction', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/video-production-calgary-fitness', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/video-production-calgary-legal', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/video-production-calgary-retail', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/video-production-calgary-finance', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/video-production-calgary-automotive', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/video-production-calgary-nonprofit', changeFrequency: 'monthly', priority: 0.8 },

  { path: '/video-production-downtown-calgary', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/video-production-se-calgary', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/video-production-nw-calgary', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/video-production-airdrie', changeFrequency: 'monthly', priority: 0.8 },

  { path: '/blog/how-much-does-video-production-cost-calgary', changeFrequency: 'monthly', priority: 1 },
  { path: '/blog/best-video-production-companies-calgary', changeFrequency: 'monthly', priority: 1 },
  { path: '/blog/why-calgary-businesses-need-video-marketing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/blog/top-ai-video-agencies-2026', changeFrequency: 'monthly', priority: 1 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const locationRoutes: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${siteUrl}/${location.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  return [...staticEntries, ...locationRoutes, ...blogRoutes]
}
