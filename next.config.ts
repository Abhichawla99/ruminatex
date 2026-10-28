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
