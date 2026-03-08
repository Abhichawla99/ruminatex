export interface PortfolioItem {
  id: string
  title: string
  client: string
  category: 'Brand Film' | 'Commercial' | 'Fashion' | 'Social Content' | 'Product Launch'
  youtubeId: string
  description: string
  featured: boolean
  tags: string[]
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Calgary Stampede 2026',
    client: 'Calgary Stampede',
    category: 'Brand Film',
    youtubeId: 'd-s9SxA4Klk',
    description: 'An AI short film celebrating gratitude for everyone who makes the Calgary Stampede possible.',
    featured: true,
    tags: ['Brand Film', 'Cinematic', 'Cultural'],
  },
  {
    id: '2',
    title: 'The Love of Trail Running',
    client: 'Ruminate X',
    category: 'Brand Film',
    youtubeId: 'LYA3Do3KEN0',
    description: 'A cinematic AI short film capturing the raw passion and beauty of trail running.',
    featured: true,
    tags: ['Brand Film', 'Lifestyle', 'AI Production'],
  },
  {
    id: '3',
    title: 'Keen Footwear — Spec Ad',
    client: 'Keen Footwear',
    category: 'Commercial',
    youtubeId: 'Zytga7zsShI',
    description: 'A cinematic spec commercial for Keen Footwear — bold visuals, outdoor soul.',
    featured: true,
    tags: ['Commercial', 'Footwear', 'Outdoor'],
  },
  {
    id: '4',
    title: 'Keen Hiking Shoes',
    client: 'Keen Footwear',
    category: 'Social Content',
    youtubeId: 'zJgXuxFGU0U',
    description: 'Scroll-stopping AI short film for Keen Hiking Shoes — built for the trail.',
    featured: true,
    tags: ['Social Content', 'Footwear', 'Short Film'],
  },
]

export function getYoutubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

export function getYoutubeUrl(videoId: string, isShort = false): string {
  if (isShort) return `https://youtube.com/shorts/${videoId}`
  return `https://www.youtube.com/watch?v=${videoId}`
}

export function getVideoUrl(item: PortfolioItem): string {
  // Keen Hiking Shoes is a YouTube Short
  if (item.id === '4') return `https://youtube.com/shorts/${item.youtubeId}`
  return `https://www.youtube.com/watch?v=${item.youtubeId}`
}

export const portfolioCategories = [
  'All',
  'Brand Film',
  'Commercial',
  'Fashion',
  'Social Content',
  'Product Launch',
] as const
