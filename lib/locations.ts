export interface Location {
  city: string
  slug: string
  country: string
  region: string
  description: string
  marketContext: string
  industries: string[]
  keywords: string[]
}

export const locations: Location[] = [
  {
    city: 'New York',
    slug: 'new-york',
    country: 'United States',
    region: 'East Coast',
    description: "The world's most competitive creative market, home to the largest concentration of Fortune 500 brands and agencies.",
    marketContext: "New York City is the global capital of advertising, fashion, and brand marketing. Home to major agencies, media companies, and brand headquarters — the demand for premium video content here is relentless.",
    industries: ['Fashion', 'Finance', 'Media', 'Technology', 'Retail', 'Luxury'],
    keywords: ['AI video production New York', 'brand video agency NYC', 'AI creative studio New York', 'cinematic brand film New York'],
  },
  {
    city: 'Los Angeles',
    slug: 'los-angeles',
    country: 'United States',
    region: 'West Coast',
    description: "The entertainment capital of the world, where creative vision meets commercial scale.",
    marketContext: "LA sits at the intersection of entertainment, tech, and culture. DTC brands, influencer-driven companies, and entertainment giants all need premium video content — and they demand the best.",
    industries: ['Entertainment', 'Fashion', 'Beauty', 'Technology', 'Lifestyle', 'Gaming'],
    keywords: ['AI video production Los Angeles', 'brand video agency LA', 'AI creative studio Los Angeles', 'cinematic video production LA'],
  },
  {
    city: 'London',
    slug: 'london',
    country: 'United Kingdom',
    region: 'Europe',
    description: "Europe's creative and financial hub, where world-class brands demand world-class content.",
    marketContext: "London is Europe's most significant market for brand content, with a strong culture of creative excellence in advertising and brand storytelling. Brands here set global creative standards.",
    industries: ['Finance', 'Fashion', 'Luxury', 'Technology', 'Retail', 'Media'],
    keywords: ['AI video production London', 'brand video agency London', 'AI creative studio UK', 'cinematic brand film London'],
  },
  {
    city: 'Toronto',
    slug: 'toronto',
    country: 'Canada',
    region: 'North America',
    description: "Canada's largest city and fastest-growing tech hub, home to ambitious brands ready to scale.",
    marketContext: "Toronto's thriving tech ecosystem, strong DTC brand scene, and proximity to US markets make it a prime market for premium AI video production. The city punches above its weight creatively.",
    industries: ['Technology', 'Finance', 'Retail', 'Media', 'Startups', 'Real Estate'],
    keywords: ['AI video production Toronto', 'brand video agency Toronto', 'AI creative studio Canada', 'cinematic brand film Toronto'],
  },
  {
    city: 'Miami',
    slug: 'miami',
    country: 'United States',
    region: 'Southeast',
    description: "The fastest-growing tech and creative hub in the US, where culture and commerce collide.",
    marketContext: "Miami's booming startup scene, strong Latin American brand presence, and culture-forward mindset create massive demand for premium creative content. The city is redefining what modern brands look like.",
    industries: ['Tech', 'Lifestyle', 'Luxury', 'Fashion', 'E-commerce', 'Real Estate'],
    keywords: ['AI video production Miami', 'brand video agency Miami', 'AI creative studio Miami', 'brand film production Miami'],
  },
  {
    city: 'Dubai',
    slug: 'dubai',
    country: 'United Arab Emirates',
    region: 'Middle East',
    description: "The Middle East's premier business hub, where luxury brands and ambitious vision meet.",
    marketContext: "Dubai's luxury brand market, high-spending consumer base, and forward-thinking business culture create strong demand for AI-powered premium video production. Brands here expect nothing less than extraordinary.",
    industries: ['Luxury', 'Real Estate', 'Tourism', 'Fashion', 'Technology', 'Hospitality'],
    keywords: ['AI video production Dubai', 'brand video agency Dubai', 'AI creative studio UAE', 'luxury brand film Dubai'],
  },
  {
    city: 'San Francisco',
    slug: 'san-francisco',
    country: 'United States',
    region: 'West Coast',
    description: "The global tech capital, where VC-backed startups and tech giants need compelling brand stories.",
    marketContext: "The Bay Area's concentration of tech startups and innovation-forward brands creates a unique market for AI-native creative production. Companies here understand the value of AI and invest in the best.",
    industries: ['Technology', 'SaaS', 'Startups', 'Fintech', 'AI', 'Biotech'],
    keywords: ['AI video production San Francisco', 'brand video agency Bay Area', 'AI creative studio Silicon Valley', 'tech brand film San Francisco'],
  },
  {
    city: 'Chicago',
    slug: 'chicago',
    country: 'United States',
    region: 'Midwest',
    description: "America's most underrated brand market — Fortune 500 headquarters with massive content needs.",
    marketContext: "Chicago hosts dozens of Fortune 500 headquarters and a thriving advertising industry. Brands here are hungry for innovative, cost-effective production solutions that don't compromise on quality.",
    industries: ['Finance', 'Retail', 'Food & Beverage', 'Manufacturing', 'Healthcare', 'Media'],
    keywords: ['AI video production Chicago', 'brand video agency Chicago', 'AI creative studio Chicago', 'brand film production Chicago'],
  },
  {
    city: 'Sydney',
    slug: 'sydney',
    country: 'Australia',
    region: 'Asia-Pacific',
    description: "Australia's most dynamic brand market, gateway to the fast-growing Asia-Pacific region.",
    marketContext: "Sydney's vibrant brand ecosystem and proximity to Asia-Pacific markets make it a strategic market for cutting-edge creative production. Australian brands are known for bold, distinctive creative work.",
    industries: ['Finance', 'Retail', 'Tourism', 'Technology', 'Fashion', 'Mining'],
    keywords: ['AI video production Sydney', 'brand video agency Australia', 'AI creative studio Sydney', 'brand film production Australia'],
  },
  {
    city: 'Singapore',
    slug: 'singapore',
    country: 'Singapore',
    region: 'Southeast Asia',
    description: "Asia's premier business hub, where global brands and regional powerhouses converge.",
    marketContext: "Singapore's role as Asia's financial and creative capital creates strong demand for premium brand content. It serves as the regional HQ for hundreds of multinational brands targeting Southeast Asia.",
    industries: ['Finance', 'Technology', 'Luxury', 'FMCG', 'Healthcare', 'Logistics'],
    keywords: ['AI video production Singapore', 'brand video agency Singapore', 'AI creative studio Asia', 'brand film production Singapore'],
  },
]
