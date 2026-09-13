import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // AI answer engines — explicit allow so content is citable
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'PerplexityBot',
          'Perplexity-User',
          'Google-Extended',
          'Applebot-Extended',
          'Amazonbot',
          'CCBot',
          'Meta-ExternalAgent',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://www.ruminatex.com/sitemap.xml',
  }
}
