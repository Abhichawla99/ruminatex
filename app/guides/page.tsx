import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideCta, GuideHero } from '@/components/guide/Guide'
import { SITE } from '@/lib/seo/facts'
import { SEO_PAGES, type SeoPage } from '@/lib/seo/pages'
import { absolute, breadcrumbLd } from '@/lib/seo/schema'

const PATH = '/guides'
const TITLE = 'Guides for Brands Buying AI Film'
const DESCRIPTION =
  'Guides for marketing leads hiring an AI studio for a brand film or commercial: what it costs, how to hire, how the film is made, and how to keep faces, products and labels right before it airs.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: absolute(PATH) },
  openGraph: { type: 'website', url: absolute(PATH), siteName: SITE.name, title: TITLE, description: DESCRIPTION },
}

/** Which shelf each guide sits on. A guide missing here lands under "More guides". */
const SHELVES: { title: string; note: string; paths: string[] }[] = [
  {
    title: 'Before you hire',
    note: 'What it costs, who to hire, and how an AI film gets made.',
    paths: [
      '/blog/how-much-does-ai-video-production-cost',
      '/ai-video-production-agencies',
      '/comparison/ai-agency-vs-traditional-agency',
      '/how-we-make-an-ai-brand-film',
      '/guides/brands-using-ai-commercials',
    ],
  },
  {
    title: 'Planning the campaign',
    note: 'The look, the budget lines and the list of files each channel needs.',
    paths: [
      '/guides/brand-world-building',
      '/guides/brand-visual-dna',
      '/guides/commercial-production-budget-template',
      '/guides/ad-campaign-deliverables',
      '/guides/video-vs-static-ads',
      '/guides/ai-campaign-stack',
    ],
  },
  {
    title: 'Making it hold up',
    note: 'Where AI footage breaks, and the checks that catch it before it airs.',
    paths: [
      '/guides/ai-video-character-consistency',
      '/guides/first-frame-last-frame-ai-video',
      '/guides/ai-commercial-product-accuracy',
      '/guides/ai-video-quality-control',
    ],
  },
]

const byPath = new Map(SEO_PAGES.map((p) => [p.path, p]))
const shelved = new Set(SHELVES.flatMap((s) => s.paths))
const more = SEO_PAGES.filter((p) => p.kind === 'guide' && !shelved.has(p.path))
const shelves = [
  ...SHELVES.map((s) => ({ ...s, pages: s.paths.map((p) => byPath.get(p)).filter((p): p is SeoPage => !!p) })),
  ...(more.length ? [{ title: 'More guides', note: '', paths: [], pages: more }] : []),
]

const updated = SEO_PAGES.map((p) => p.updated).sort().at(-1) ?? '2026-09-25'
const listed = shelves.flatMap((s) => s.pages)

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: TITLE,
  description: DESCRIPTION,
  url: absolute(PATH),
  isPartOf: { '@id': SITE.orgId },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: listed.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: absolute(p.path), name: p.title })),
  },
}

const sentence = (q: string) => {
  const s = q.replace(/\bai\b/g, 'AI').replace(/\bmlr\b/g, 'MLR')
  return s.charAt(0).toUpperCase() + s.slice(1) + (/[?.]$/.test(s) ? '' : '?')
}

export default function Page() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Guides', path: PATH },
  ]
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd(crumbs)) }} />
      <GuideHero
        eyebrow="Guides"
        title="Guides for brands buying an AI film"
        dek="For the brand manager, founder or agency producer about to hire a studio for an AI brand film or commercial. Each guide answers one question a buyer asks, with published prices and sources where they exist."
        updated={updated}
      />
      {shelves.map((shelf) => (
        <section key={shelf.title} className="border-b border-[#1a1a1a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <h2 className="text-white text-2xl font-semibold mb-2">{shelf.title}</h2>
            {shelf.note && <p className="text-[#888888] mb-8">{shelf.note}</p>}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {shelf.pages.map((p) => (
                <Link key={p.path} href={p.path} className="block border border-[#1a1a1a] p-6 hover:border-[#ebff00] transition-colors">
                  <p className="text-white font-semibold mb-2">{p.title}</p>
                  <p className="text-sm text-[#888888] leading-relaxed">{sentence(p.question)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
      <GuideCta />
    </main>
  )
}
