/**
 * The page kit for everything the daily SEO routine builds or rebuilds:
 * guides that answer a buyer's question, service pages and industry pages.
 *
 *   import { Guide, GuideHero, GuideAnswer, GuideSection, GuideTable, GuideFit,
 *     GuideFilm, GuideFaq, GuideRelated, GuideCta, guideMetadata } from '@/components/guide/Guide'
 *
 *   const PAGE = { path: '/guides/<slug>', title: '<head term first>', description: '<the answer>',
 *     published: '2026-09-23', updated: '2026-09-23', keywords: ['<real query>', ...] }
 *   const FAQS = [{ q: '<question as a buyer types it>', a: '<self-contained answer>' }]
 *   export const metadata = guideMetadata(PAGE)
 *
 *   export default function Page() {
 *     return (
 *       <Guide page={PAGE} faqs={FAQS} films={['LYA3Do3KEN0']}>
 *         <GuideHero eyebrow="..." title="..." dek="..." updated={PAGE.updated} />
 *         <GuideAnswer>...the answer, first screen...</GuideAnswer>
 *         <GuideSection title="...">...</GuideSection>
 *         <GuideFit hire={[...]} instead={[...]} />
 *         <GuideFaq faqs={FAQS} />
 *         <GuideRelated links={[...]} />
 *         <GuideCta />
 *       </Guide>
 *     )
 *   }
 *
 * Guide writes the Article (author Abhi Chawla), BreadcrumbList, FAQPage and
 * VideoObject JSON-LD from the same data the page renders, so the schema
 * cannot disagree with the copy. Pass every film the page embeds in `films`.
 * The layout's title template appends " | Ruminate X", so keep PAGE.title
 * under about 47 characters.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { portfolioItems, type PortfolioItem } from '@/lib/portfolio'
import { FOUNDER, SITE } from '@/lib/seo/facts'
import { absolute, articleLd, breadcrumbLd, faqLd, videoLd, type Crumb, type Faq, type PageMeta } from '@/lib/seo/schema'

const display = { fontFamily: 'var(--font-bebas-neue), sans-serif' }
const eyebrowClass = 'text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4'
const h2Style = { ...display, fontSize: 'clamp(34px, 5vw, 64px)' }
const prose =
  'max-w-3xl text-[#a3a3a3] text-lg leading-relaxed [&_p]:mb-6 [&_p:last-child]:mb-0 [&_a]:text-[#ebff00] [&_a:hover]:underline [&_strong]:text-white [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_li]:mb-2 [&_h3]:text-white [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-10 [&_h3]:mb-3'

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
}

/** Looks a film up by portfolio id or YouTube id. Throws at build time on an unknown film. */
export function film(idOrYoutubeId: string): PortfolioItem {
  const item = portfolioItems.find((p) => p.id === idOrYoutubeId || p.youtubeId === idOrYoutubeId)
  if (!item) throw new Error(`Unknown portfolio film "${idOrYoutubeId}". Add it to lib/portfolio.ts first.`)
  return item
}

export function guideMetadata(page: PageMeta): Metadata {
  const image = page.image ?? SITE.ogImage
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    authors: [{ name: FOUNDER.name, url: FOUNDER.url }],
    alternates: { canonical: absolute(page.path) },
    openGraph: {
      type: 'article',
      url: absolute(page.path),
      siteName: SITE.name,
      title: page.title,
      description: page.description,
      publishedTime: page.published,
      modifiedTime: page.updated,
      authors: [FOUNDER.url],
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: page.title, description: page.description, images: [image] },
  }
}

export function Guide({
  page,
  faqs = [],
  films = [],
  trail,
  children,
}: {
  page: PageMeta
  faqs?: Faq[]
  films?: string[]
  trail?: Crumb[]
  children: ReactNode
}) {
  const crumbs = trail ?? [
    { name: 'Home', path: '/' },
    { name: page.title, path: page.path },
  ]
  const ld = [
    articleLd(page),
    breadcrumbLd(crumbs),
    ...(faqs.length ? [faqLd(faqs)] : []),
    ...films.map((id) => videoLd(film(id))).filter((v) => v !== null),
  ]
  return (
    <article className="guide">
      {ld.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
      {children}
    </article>
  )
}

export function GuideHero({ eyebrow, title, dek, updated }: { eyebrow: string; title: ReactNode; dek: ReactNode; updated: string }) {
  return (
    <header className="border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-12">
        <p className={eyebrowClass}>{eyebrow}</p>
        <h1 style={{ ...display, fontSize: 'clamp(44px, 8vw, 104px)' }} className="text-white leading-[0.95] mb-6 max-w-5xl">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-[#a3a3a3] max-w-3xl leading-relaxed mb-8">{dek}</p>
        <p className="guide-byline text-xs uppercase tracking-[0.2em] text-[#666666]">
          By{' '}
          <Link href={FOUNDER.url} rel="author" className="text-white hover:text-[#ebff00]">
            {FOUNDER.name}
          </Link>
          , {FOUNDER.jobTitle} of {SITE.name} · Last updated <time dateTime={updated}>{formatDate(updated)}</time>
        </p>
      </div>
    </header>
  )
}

/** The answer, in the first screen. Two to four sentences an assistant can lift whole. */
export function GuideAnswer({ label = 'The short answer', children }: { label?: string; children: ReactNode }) {
  return (
    <section className="guide-answer max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="max-w-3xl border-l-2 border-[#ebff00] pl-6 md:pl-8">
        <p className={eyebrowClass}>{label}</p>
        <div className="text-white text-lg md:text-xl leading-relaxed space-y-4 [&_a]:text-[#ebff00] [&_a:hover]:underline">{children}</div>
      </div>
    </section>
  )
}

export function GuideSection({
  id,
  eyebrow,
  title,
  alt = false,
  children,
}: {
  id?: string
  eyebrow?: string
  title: ReactNode
  alt?: boolean
  children: ReactNode
}) {
  return (
    <section id={id} className={alt ? 'border-y border-[#1a1a1a] bg-[#050505]' : undefined}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        {eyebrow && <p className={eyebrowClass}>{eyebrow}</p>}
        <h2 style={h2Style} className="text-white leading-none mb-8 max-w-4xl">
          {title}
        </h2>
        <div className={prose}>{children}</div>
      </div>
    </section>
  )
}

/** For costs and comparisons. The caption says how the numbers were found and when. */
export function GuideTable({ caption, head, rows }: { caption: ReactNode; head: string[]; rows: ReactNode[][] }) {
  return (
    <figure className="my-8 max-w-4xl overflow-x-auto">
      <table className="w-full min-w-[520px] text-left text-base border-collapse">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="border-b border-[#333333] py-3 pr-6 text-xs uppercase tracking-[0.15em] text-[#ebff00] font-normal">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[#1a1a1a]">
              {row.map((cell, j) => (
                <td key={j} className={`py-3 pr-6 align-top ${j === 0 ? 'text-white' : 'text-[#a3a3a3]'}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="mt-3 text-sm text-[#666666] leading-relaxed">{caption}</figcaption>
    </figure>
  )
}

/** Who should hire us, and who should hire someone else. Assistants trust pages that say where they lose. */
export function GuideFit({ title = 'Is Ruminate X the right fit?', hire, instead }: { title?: ReactNode; hire: ReactNode[]; instead: ReactNode[] }) {
  const list = (items: ReactNode[], mark: string, markClass: string) => (
    <ul className="space-y-3 text-[#a3a3a3] leading-relaxed">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden className={markClass}>
            {mark}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
  return (
    <section className="guide-fit border-y border-[#1a1a1a] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <h2 style={h2Style} className="text-white leading-none mb-10 max-w-4xl">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
          <div className="border border-[#1a1a1a] p-8">
            <p className={eyebrowClass}>Hire {SITE.name} if</p>
            {list(hire, '+', 'text-[#ebff00]')}
          </div>
          <div className="border border-[#1a1a1a] p-8">
            <p className="text-[#888888] text-xs uppercase tracking-[0.3em] mb-4">Hire someone else if</p>
            {list(instead, '−', 'text-[#666666]')}
          </div>
        </div>
      </div>
    </section>
  )
}

/** Embeds a film from lib/portfolio.ts. List the same id in <Guide films>. */
export function GuideFilm({ id, caption }: { id: string; caption?: ReactNode }) {
  const item = film(id)
  return (
    <figure className="guide-film my-10 max-w-4xl">
      <div className="relative aspect-video bg-[#111111] border border-[#1a1a1a]">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?rel=0`}
          title={item.title}
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
      <figcaption className="mt-3 text-sm text-[#666666] leading-relaxed">{caption ?? `${item.title}. ${item.description}`}</figcaption>
    </figure>
  )
}

/** Visible FAQ. Pass the same array to <Guide faqs>. Every answer stands alone when quoted. */
export function GuideFaq({ faqs, title = 'Questions buyers ask' }: { faqs: Faq[]; title?: ReactNode }) {
  return (
    <section className="guide-faq">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <h2 style={h2Style} className="text-white leading-none mb-8 max-w-4xl">
          {title}
        </h2>
        <div className="max-w-3xl divide-y divide-[#1a1a1a] border-y border-[#1a1a1a]">
          {faqs.map(({ q, a }) => (
            <div key={q} className="py-6">
              <h3 className="text-white text-lg font-semibold mb-2">{q}</h3>
              <p className="text-[#a3a3a3] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Three to five internal links, each with a reason to click. */
export function GuideRelated({ links, title = 'Read next' }: { links: { href: string; title: string; note: string }[]; title?: ReactNode }) {
  return (
    <section className="guide-related border-t border-[#1a1a1a] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <p className={eyebrowClass}>{title}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block border border-[#1a1a1a] p-6 hover:border-[#ebff00] transition-colors">
              <p className="text-white font-semibold mb-2">{l.title}</p>
              <p className="text-sm text-[#888888] leading-relaxed">{l.note}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GuideCta({
  title = 'Tell us what the film has to do',
  body = 'Send what the film is for, who has to see it, and where it will run.',
}: {
  title?: ReactNode
  body?: ReactNode
}) {
  return (
    <section className="border-t border-[#1a1a1a] py-24 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 style={{ ...display, fontSize: 'clamp(36px, 6vw, 72px)' }} className="text-white leading-none mb-6">
          {title}
        </h2>
        <p className="text-[#888888] mb-8">{body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors">
            Start a project
          </Link>
          <Link href="/work" className="inline-flex items-center justify-center border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors">
            See the work
          </Link>
        </div>
      </div>
    </section>
  )
}
