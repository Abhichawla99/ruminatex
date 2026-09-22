export interface PortfolioItem {
  id: string
  title: string
  client: string
  category: 'Brand Film' | 'Commercial' | 'Fashion' | 'Social Content' | 'Product Launch'
  youtubeId: string
  description: string
  featured: boolean
  tags: string[]
  /** From the YouTube watch page ("uploadDate"). VideoObject schema needs it. */
  uploadDate?: string
  /** From the YouTube watch page ("lengthSeconds"). */
  durationSeconds?: number
  /** 'client' only once Abhi confirms it was paid client work. Pages call a film client work only when this says so. */
  kind?: 'client' | 'spec' | 'original'
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
    uploadDate: '2026-03-07T15:54:09-08:00',
    durationSeconds: 56,
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
    uploadDate: '2026-03-07T18:10:07-08:00',
    durationSeconds: 96,
    kind: 'original',
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
    uploadDate: '2026-03-07T18:12:19-08:00',
    durationSeconds: 32,
    kind: 'spec',
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
    uploadDate: '2026-03-07T18:14:37-08:00',
    durationSeconds: 42,
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
