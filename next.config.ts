import type { NextConfig } from "next";

/**
 * Pages merged into the page that answers the same question (approved by Abhi,
 * 2026-10-28, from the SEO ledger's consolidation proposal). Each old URL sends a
 * permanent redirect to its target; the old page files are gone.
 */
const MERGED: [target: string, sources: string[]][] = [
  // Row 13: the corporate page moves to a URL with its head term; Google had not recrawled the old one since Sep 20.
  ['/ai-corporate-video-production', [
    '/ai-video-production-enterprise',
  ]],
  ['/ai-video-production-agencies', [
    '/ai-video-agency',
    '/ai-video-production-company',
    '/ai-video-marketing-agency',
    '/ai-content-creation-agency',
    '/ai-creative-studio',
    '/ai-generated-brand-content',
    '/ai-visual-content-for-companies',
    '/ai-video-for-brands',
    '/blog/ai-video-production-agency-guide',
  ]],
  ['/ai-brand-film-agency', [
    '/ai-brand-videos',
  ]],
  ['/ai-commercial-production', [
    '/ai-video-ads',
  ]],
  ['/ai-ugc-reels', [
    '/ai-reel-creation',
    '/ai-social-media-video-agency',
    '/ai-social-media-video',
    '/ai-short-form-video',
    '/ai-tiktok-video-agency',
    '/ai-influencer-style-content',
  ]],
  ['/ai-product-videos', [
    '/ai-product-video-agency',
    '/ai-product-launch-videos',
  ]],
  ['/ai-video-production-ecommerce', [
    '/ai-video-for-ecommerce',
    '/blog/ai-video-production-ecommerce-brands-guide',
  ]],
  ['/ai-video-production-fashion', [
    '/ai-video-production-luxury',
    '/blog/ai-video-production-fashion-luxury-brands',
  ]],
  ['/comparison/ai-agency-vs-traditional-agency', [
    '/tools/ai-vs-traditional-video',
    '/blog/ai-vs-traditional-video-production',
    '/blog/ai-vs-traditional-video-production-cost-comparison',
    '/solutions/cut-video-production-costs',
    '/guides/why-traditional-video-agencies-are-expensive',
  ]],
  ['/best-video-production-company-calgary', [
    '/blog/best-video-production-companies-calgary',
  ]],
  // 2026-11-13 (Abhi: "fix all that's needed"): legacy pages that were noindexed on 10-28
  // but still served claims facts.ts does not hold (48-hour delivery, 140+ languages,
  // "80% less", savings and speed multipliers, tool comparisons). No Search Console
  // impressions in the 28 days to 11-10. Each goes to the page that sells the same thing.
  ['/services', [
    '/solutions/fast-explainer-videos',
    '/solutions/multilingual-voiceovers',
    '/markets/ai-video-production-australia',
    '/markets/ai-video-production-uk',
    '/use-cases/real-estate-video-tours',
    '/guides/how-to-create-explainer-videos-with-ai',
  ]],
  ['/ai-product-videos', [
    '/solutions/professional-product-demo',
    '/guides/interactive-product-demos',
  ]],
  ['/ai-video-production-ecommerce', [
    '/use-cases/ecommerce-product-videos',
  ]],
  ['/ai-corporate-video-production', [
    '/use-cases/educational-training-videos',
  ]],
  ['/comparison/ai-agency-vs-traditional-agency', [
    '/tools/best-ai-video-tools-comparison',
  ]],
  ['/guides/ai-commercial-cost', [
    '/roi-calculator',
  ]],
  ['/guides', [
    '/guides/video-captions-ai-subtitles',
    '/guides/video-marketing-strategy-ai',
  ]],
  // The rest of the 10-28 noindexed pages: boilerplate stat blocks ("80% savings",
  // "3-5 days", unlimited revisions, engagement multipliers) with no source and no
  // Search Console demand (/ai-video-strategy 9 impressions; the rest none).
  ['/services', [
    '/ai-video-for-restaurants',
    '/ai-video-production-real-estate',
    '/ai-content-workflow-automation',
    '/ai-video-production-youtube-creators',
    '/ai-video-strategy',
    '/tools/video-automation-workflow-integration',
    '/ai-video-personalization',
    '/ai-video-for-startups',
    '/ai-video-production-small-business',
    '/ai-video-content-repurposing',
    '/ai-video-production-hospitality',
  ]],
  ['/ai-commercial-production', [
    '/ai-video-production-automotive',
    '/ai-video-production-saas',
    '/use-cases/saas-video-production',
  ]],
  ['/ai-product-videos', [
    '/ai-motion-content',
    '/guides/screen-recording-automated-demos',
  ]],
  ['/ai-brand-film-agency', [
    '/ai-video-production-nonprofits',
  ]],
  ['/ai-corporate-video-production', [
    '/ai-explainer-videos',
  ]],
  ['/how-we-make-an-ai-brand-film', [
    '/guides/6-step-video-production-process',
  ]],
  ['/ai-ugc-reels', [
    '/guides/social-media-video-shorts',
  ]],
  ['/video-production-calgary', [
    '/video-production-downtown-calgary',
    '/video-production-se-calgary',
    '/video-production-nw-calgary',
    '/video-production-airdrie',
    '/video-production-calgary-real-estate',
    '/video-production-calgary-oil-gas',
    '/video-production-calgary-restaurants',
    '/video-production-calgary-tech',
    '/video-production-calgary-small-business',
    '/video-production-calgary-healthcare',
    '/video-production-calgary-construction',
    '/video-production-calgary-fitness',
    '/video-production-calgary-legal',
    '/video-production-calgary-retail',
    '/video-production-calgary-finance',
    '/video-production-calgary-automotive',
    '/video-production-calgary-nonprofit',
    '/affordable-video-production-calgary',
    '/video-production-near-me',
    '/videographer-calgary',
    '/calgary-video-production-packages',
    '/corporate-video-production-calgary',
    '/product-video-production-calgary',
    '/social-media-video-production-calgary',
    '/blog/why-calgary-businesses-need-video-marketing',
    '/blog/how-much-does-video-production-cost-calgary',
  ]],
]

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
  async redirects() {
    return MERGED.flatMap(([destination, sources]) => sources.map((source) => ({ source, destination, permanent: true })))
  },
};

export default nextConfig;
