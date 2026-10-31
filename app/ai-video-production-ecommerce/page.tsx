import Link from 'next/link'
import {
  Guide,
  GuideAnswer,
  GuideCta,
  GuideFaq,
  GuideFilm,
  GuideFit,
  GuideHero,
  GuideRelated,
  GuideSection,
  GuideTable,
  film,
  guideMetadata,
} from '@/components/guide/Guide'
import { OFFERS, PRODUCTION, SITE, priceLine } from '@/lib/seo/facts'

const studio = SITE.name
const city = SITE.city.split(',')[0]
const offer = (key: string) => {
  const found = OFFERS.find((o) => o.key === key)
  if (!found) throw new Error(`Unknown offer "${key}". Add it to lib/seo/facts.ts first.`)
  return found
}
const short = film('zJgXuxFGU0U')

/** What Ruminate X makes for an ecommerce brand, from OFFERS, with what each one is for in a store. */
const STORE_OFFERS = [
  { key: 'product-visuals', what: 'Your product in generated settings, light and motion, with stills from the same look', where: 'Product pages, marketplace listings, ads, email' },
  { key: 'commercial', what: 'A launch spot or product ad with a hook, a reason to buy and your end card', where: 'TV, streaming, YouTube, Meta, TikTok' },
  { key: 'ugc', what: 'Creator-style ads in which a generated presenter delivers scripted ad lines', where: 'Reels, TikTok, Shorts' },
  { key: 'review', what: 'Review and testimonial-style videos; the review in one has to come from a real customer', where: 'Paid social, product pages' },
  { key: 'brand-film', what: 'A story-driven film about what the brand stands for', where: 'Homepage, launches, YouTube' },
]

const PAGE = {
  path: '/ai-video-production-ecommerce',
  title: 'AI Video Production for Ecommerce Brands',
  description: `${studio} makes AI video for ecommerce and DTC brands: product films and stills, launch films, UGC-style ads, and the marketplace and social versions of each, with every frame generated and your real product, label and logo set in the edit from your files. What it costs, what an Amazon video ad allows, and where generated product shots break.`,
  published: '2026-03-07',
  updated: '2026-10-31',
  keywords: [
    'ai video for ecommerce',
    'AI video production for ecommerce brands',
    'ai e-commerce commercials',
    'ai product video',
    'AI video for DTC brands',
    'ecommerce brand video production',
    'AI video agency for ecommerce',
    'DTC brand video production',
    'AI product video creation',
    'social media video production ecommerce',
  ],
}

const AMAZON_SBV = 'https://advertising.amazon.com/resources/ad-specs/sponsored-brands-video'
const AMAZON_MODERATION = 'https://advertising.amazon.com/library/guides/sponsored-brands-display-ads-moderation'

const FAQS = [
  {
    q: 'What is AI video for ecommerce?',
    a: `Product films, launch spots, UGC-style ads and product stills made with generative AI instead of a studio or location shoot, then cut into the versions each store, marketplace and social feed takes. ${studio}, an AI film studio in ${city}, makes AI video for ecommerce and DTC brands with every frame generated and your real product, label and logo set in the edit from your own files.`,
  },
  {
    q: 'Who makes AI video for ecommerce brands?',
    a: `${studio}, an AI film studio in ${city}, makes product films and stills, launch films, UGC-style ads and their marketplace and social versions for ecommerce and DTC brands. Every frame is generated with AI, people write, board, edit, mix and grade every film, and your product, label and logo are set in the edit from your own files. Before you hire any studio, ask to see a shot where a hand holds the product and the label reads correctly in the last frame; ${studio} boards and regenerates exactly those shots.`,
  },
  {
    q: 'How much does AI video production cost for an ecommerce brand?',
    a: `${priceLine('commercial')}. Product films and stills, UGC-style ads and review-style videos are quoted from the brief as well. The price moves with running time, the number of scenes and stills, how exactly the product has to be reproduced, how many products and colourways appear, the versions, lengths and aspect ratios each placement needs, and how many review rounds your team takes. There is no studio day, set or crew to pay for.`,
  },
  {
    q: 'What are AI e-commerce commercials?',
    a: `Commercials for an online store or a DTC product made with generative AI: a hook, the product, a reason to buy and an end card, for TV, streaming, YouTube and paid social. ${studio} makes them with every frame generated, your product reproduced from your real product images and your label and logo set in the edit, then cuts them to each placement's length and ratio, down to a 16:9 cut of 45 seconds or less for an Amazon Sponsored Brands video ad.`,
  },
  {
    q: 'Can I run AI product videos as Amazon video ads?',
    a: 'Yes, if the video meets Amazon\'s rules for the format. Amazon\'s Sponsored Brands video ads take 16:9 only, 6 to 45 seconds long (20 seconds or less is highly recommended), with no black, colour or blurred bars. Its moderation guide for Sponsored Brands and display ads says videos cannot include customer reviews or star ratings, and superiority claims such as "the best" are rejected unless they can be substantiated (Amazon Ads, read October 28, 2026).',
  },
  {
    q: 'How do I brief an AI video for an ecommerce launch?',
    a: `Send ${studio} the product, the launch date, the channels and marketplaces, the claims your team has approved, and your product files: label artwork, logo vectors and photos of the product from several angles. ${studio} comes back with a creative brief and a quote, and you see the script and the shot list before any frame is generated. Name every placement up front, from the 16:9 Amazon cut to the vertical cuts for Reels and TikTok, because the versions are part of the quote.`,
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide
      page={PAGE}
      faqs={FAQS}
      films={[short.youtubeId]}
      service={{
        name: 'AI video production for ecommerce brands',
        description: `${studio} makes product films and stills, launch films, UGC-style ads and their marketplace and social versions for ecommerce and DTC brands, with every frame generated by AI and the product, label and logo set in the edit from the brand's own files.`,
        audience: ['ecommerce brands', 'DTC brands', 'consumer brands'],
      }}
    >
      <GuideHero
        eyebrow="Ecommerce and DTC"
        title="AI video production for ecommerce brands"
        dek={`For the ecommerce or DTC marketing lead who needs product films, a launch spot, UGC-style ads and the Amazon, Meta and TikTok cuts of each, and wants to know what ${studio} makes, what it costs and how the product stays exact.`}
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          AI video for ecommerce means product films, launch spots and creator-style ads made with generative AI instead of
          a studio day, then cut into the versions each store, marketplace and feed takes. {studio}, an AI film studio in{' '}
          {city}, makes AI video for ecommerce and DTC brands: every frame generated with AI, with the script, boards,
          edit, sound and grade done by people, and your real product, label and logo set in the edit from your own files.
          Each marketplace version follows that marketplace&apos;s rules; Amazon&apos;s Sponsored Brands video ads, for
          example, run 6 to 45 seconds in 16:9 only and cannot show customer reviews or star ratings.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="What you get" title="What AI video for an ecommerce brand includes">
        <p>
          {studio} makes every piece from one look, so the launch film, the product page and the ads show one product in
          one world.
        </p>
        <GuideTable
          caption={`What an ecommerce brief can ask ${studio} for. Every frame is generated; the product, label and logo come from your files.`}
          head={['Deliverable', 'What it is', 'Where it runs']}
          rows={[
            ...STORE_OFFERS.map(({ key, what, where }) => {
              const o = offer(key)
              return [o.path ? <Link href={o.path}>{o.name}</Link> : o.name, what, where]
            }),
            ['Launch film', 'A short film that introduces a new product or collection in a world built for it', 'Launch pages, paid social, YouTube, streaming'],
            ['Marketplace and social versions', 'The lengths, aspect ratios and cutdowns each placement takes, cut from the same film', 'Amazon, Meta, TikTok, YouTube, your store'],
          ]}
        />
        <p>
          The product pieces are on <Link href="/ai-product-videos">AI product videos and stills</Link>, and the
          creator-style ads, with the disclosure rules for Meta and TikTok, are on{' '}
          <Link href="/ai-ugc-reels">AI UGC ads</Link>. {PRODUCTION.summary}
        </p>
      </GuideSection>

      <GuideSection eyebrow="Price" title="What AI video costs an ecommerce brand" alt>
        <p>
          {priceLine('commercial')}. Product films and stills, UGC-style ads and review-style videos are quoted from the
          brief as well. The price moves with running time, the number of scenes and stills, how exactly the product has to be
          reproduced, how many products and colourways appear, the versions, lengths and aspect ratios each placement
          needs, and how many review rounds your team takes.
        </p>
        <p>
          There is no studio day, set or crew in the quote. You send product files instead: label artwork, logo vectors
          and photos of the product from several angles.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Marketplace versions" title="What an Amazon video ad allows">
        <p>
          Plan the Amazon cut at the brief. A vertical cut cannot be reused there, and a review-style cut cannot run there
          at all.
        </p>
        <GuideTable
          caption={
            <>
              From Amazon Ads&apos; <a href={AMAZON_SBV}>Sponsored Brands video specs</a> and its{' '}
              <a href={AMAZON_MODERATION}>moderation guide for Sponsored Brands and display ads</a>, read October 28, 2026.
            </>
          }
          head={['Sponsored Brands video', 'What Amazon says', 'What it means for the cut']}
          rows={[
            ['Length', '6 to 45 seconds; 20 seconds or less highly recommended', 'A short cut of the launch film, not the full film'],
            ['Frame', '16:9 only, at 1280 x 720, 1920 x 1080 or 3840 x 2160; no black, colour or blurred bars', 'A widescreen version, never a vertical cut with bars'],
            ['Sound', 'Videos start without audio by default', 'The product and the reason to buy read on screen with the sound off'],
            ['Opening', 'Show the product in the first two seconds', 'The first shot is the product'],
            ['Text', 'Keep text and other important information out of the lower right corner', 'Supers and the logo sit clear of that corner'],
            ['Reviews', 'Videos cannot include customer reviews, including star ratings, even if the reviews are on Amazon', 'No review-style cut in Amazon video ads'],
            ['Claims', 'Superiority claims such as "the best" are rejected unless they can be substantiated', 'Every claim on screen is one your team can support'],
          ]}
        />
        <p>
          Meta, TikTok and YouTube each take their own ratios, lengths and safe zones; the full list is in{' '}
          <Link href="/guides/ad-campaign-deliverables">ad campaign deliverables</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Where it breaks" title="Where generated product shots break" alt>
        <GuideTable
          caption={`Where generated product footage fails, and the fix ${studio} applies to each.`}
          head={['Problem', 'What the shopper sees', 'The fix']}
          rows={[
            ['Colour and colourway', 'The navy reads as black, so the colourway in the ad is not the one in the cart', 'Check every shot against your product photos and regenerate the ones that drift'],
            ['Size and scale', 'The bottle looks larger in the hand than it is', 'Lock the product to reference stills and check its scale against the hand in every shot'],
            ['Label text', 'Letters melt, the product name is misspelled, small print turns to noise', 'Set the label from your artwork in the edit; never generate type'],
            ['Hands and use', 'Fingers pass through the cap, the grip changes between cuts', 'Rerun the shot, or cut to an insert where hands are not needed'],
            ['The vertical crop', 'A 9:16 crop of a 16:9 frame cuts the product in half', 'Generate the product shots again for the vertical frame instead of cropping'],
          ]}
        />
        <p>
          The full method for keeping a pack, label and logo exact is in{' '}
          <Link href="/guides/ai-commercial-product-accuracy">product and label accuracy in AI commercials</Link>. The rule on
          showing a product working, from the Supreme Court&apos;s Colgate-Palmolive case, is on{' '}
          <Link href="/ai-product-videos">AI product videos</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="How it is made" title={`How ${studio} makes ecommerce video`}>
        <ol>
          <li>
            <strong>Brief and product files.</strong> The product, the launch or channel, the claims your team has approved,
            and your files: label artwork, logo vectors and photos of the product from several angles. Nothing is generated
            until you approve the creative brief.
          </li>
          <li>
            <strong>Brand world and boards.</strong> The palette, light and camera language fixed for your brand, then a
            script and shot list you see before any frame is generated.
          </li>
          <li>
            <strong>Generation passes.</strong> Each shot checked against your product photos and regenerated until it
            holds. The product and the hands holding it get the most passes.
          </li>
          <li>
            <strong>Edit and versions.</strong> Label, logo and on-screen text set from your files, then sound and grade,
            and the Amazon, Meta, TikTok and YouTube versions cut from the same film.
          </li>
        </ol>
        <GuideFilm
          id={short.youtubeId}
          caption={`${short.title}, a ${short.durationSeconds}-second vertical film from the ${studio} portfolio, shown for how a product holds up in a 9:16 frame.`}
        />
        <p>
          Each stage of the pipeline is on <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>,
          and the launch spot with its cutdowns is on <Link href="/ai-commercial-production">AI commercial production</Link>.
          A 15-second product-drop ad, shot by shot, and where generated people can and cannot appear in one, is in{' '}
          <Link href="/ai-commercial-production#ecommerce">AI commercials for e-commerce brands</Link>.
        </p>
      </GuideSection>

      <GuideFit
        title={`Why ecommerce brands hire ${studio}`}
        hire={[
          'A DTC brand launching a product that needs a launch film, product page video and paid social ads in one look.',
          'An ecommerce manager with a range of products or colourways that each need a product film and stills.',
          'A performance marketer who needs fresh product ads and UGC-style cuts to test on Meta and TikTok.',
          'A brand selling on Amazon that needs a 16:9 Sponsored Brands cut beside the vertical cuts for social.',
        ]}
        get={[
          'A script and shot list you approve before anything is generated.',
          'Your real product, label and logo set in the edit from your files, with the product given the most generation passes.',
          'Product films and stills for product pages and feeds, from the same look as the ads.',
          'The Amazon, Meta, TikTok and YouTube versions, cut from the same film.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-product-videos', title: 'AI product videos and stills', note: 'Product films and stills from your real product images, and the mock-up rule.' },
          { href: '/ai-ugc-reels', title: 'AI UGC ads', note: 'Creator-style ads for Reels, TikTok and Shorts, and the disclosure rules.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'The launch spot and its cutdowns.' },
          { href: '/guides/ad-campaign-deliverables', title: 'Ad campaign deliverables', note: 'Ratios, lengths and safe zones for every channel.' },
          { href: '/ai-testimonial-videos', title: 'AI testimonial videos', note: 'What the FTC allows when a video ad quotes customer reviews.' },
        ]}
      />

      <GuideCta
        title="Tell us about the launch"
        body="Send the product, the launch date, the channels and marketplaces, and the product files you have."
      />
    </Guide>
  )
}
