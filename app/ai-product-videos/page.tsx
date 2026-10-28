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
const visuals = OFFERS.find((o) => o.key === 'product-visuals')!
const spec = film('Zytga7zsShI')

const PAGE = {
  path: '/ai-product-videos',
  title: 'AI Product Videos and Stills for Brands',
  description: `${studio} makes AI product videos and stills for brands: the product reproduced from your real product images, every frame generated, and the label, logo and on-screen text set in the edit from your files. What a product video costs, where generated product shots go wrong, and the mock-up rule for product demos.`,
  published: '2026-03-08',
  updated: '2026-10-28',
  keywords: [
    'ai product video production',
    'ai product videos',
    'how much does a product video cost',
    'which ai can make product videos',
    'best ai product video production',
    'how much do ai video creators cost',
  ],
}

const COLGATE = 'https://www.law.cornell.edu/supremecourt/text/380/374'

const FAQS = [
  {
    q: 'How much does a product video cost?',
    a: `A filmed product video is billed by studio or location days, crew, props and talent; one production company's published price guide (September 2026) puts a filmed ecommerce product video at USD 1,000 to 7,000 and 3D product visualization at USD 5,000 to 50,000 or more. An AI product video has no shoot to pay for. ${priceLine('product-visuals')}; the price moves with running time, the number of shots and stills, how exactly the product has to be reproduced, the versions and ratios, and review rounds.`,
  },
  {
    q: 'Which AI can make product videos?',
    a: `Video generators can animate a product photo, but none of them reliably keeps small label text sharp or the pack the same shape from shot to shot, and hands on the product often break. ${studio}, an AI film studio in ${SITE.city}, makes product videos and stills with generative AI from your real product images, checks every shot against the real pack, regenerates the ones that drift, and sets the label, logo and on-screen text in the edit from your own files.`,
  },
  {
    q: 'How much do AI video creators cost?',
    a: `${studio}, an AI film studio in ${SITE.city}, makes product films and stills with generative AI. ${priceLine('product-visuals')}. What you pay for is the work around the generations: the script, the boards, the passes that keep your product exact, and the edit, sound and grade. The price moves with running time, the number of shots, how exactly the product must be reproduced, the versions and ratios, and how many review rounds your team needs.`,
  },
  {
    q: 'Can AI show my product working in an ad?',
    a: `Only if the ad does not pass the generated shot off as proof. In FTC v. Colgate-Palmolive (1965) the US Supreme Court held that an undisclosed mock-up in a TV demonstration was a deceptive practice even though the product claim itself was true. A generated shot of a stain lifting or a cream smoothing skin is a mock-up; ${studio} uses such shots for setting and mood, and marks any shot that shows a result as an illustration, as your legal team directs. This is not legal advice.`,
  },
  {
    q: 'What is the best AI product video production for a brand launch?',
    a: `Judge any studio on one shot: your real product, held in a hand, turning, with the label readable in the last frame. If a studio can show that from your own product files, the rest is direction and taste. ${studio} makes AI product films and launch spots that way: from your real product images, with every shot checked against the real pack and the label and logo set from your artwork in the edit.`,
  },
  {
    q: 'How do I hire a studio to make AI product videos?',
    a: `Send ${studio} the product, where the video will run, the claims your legal team has approved, and your product files: label artwork, logo vectors and photos of the product from several angles. ${studio} comes back with a creative brief and a quote, agrees the look with you as stills before any motion, and delivers the films and stills in the ratios each placement needs.`,
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide
      page={PAGE}
      faqs={FAQS}
      films={[spec.youtubeId]}
      service={{
        name: 'AI product video production',
        description: `${studio} makes product films and stills with generative AI for brands, with the product reproduced from the brand's real product images and the label, logo and on-screen text set in the edit from the brand's own files.`,
        audience: ['consumer brands', 'ecommerce brands', 'companies of every size'],
      }}
    >
      <GuideHero
        eyebrow="AI product visuals"
        title="AI product videos and stills, made from your real product"
        dek="For the brand or ecommerce manager with a launch, a new SKU or a tired product page, who wants the product in settings a shoot could not reach and needs to know what it costs and how the label stays right."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          An AI product video puts your product in generated scenes, light and motion, with no studio day or location
          shoot. {studio}, an AI film studio in {SITE.city}, makes {visuals.plain} for brands: every frame generated with
          AI, with the script, boards, edit, sound and grade done by people. The product is reproduced from your real
          product images, and the label, logo and on-screen text are set in the edit from your own files, never generated.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="What you get" title="Product films and stills from one look">
        <p>
          {studio} makes {visuals.plain} from the same look, so a launch spot, its social cuts and the stills on your
          product page show one product in one world.
        </p>
        <GuideTable
          caption={`What a product brief can ask ${studio} for. Every frame is generated; the product, label and logo come from your files.`}
          head={['Deliverable', 'What it is', 'Where it runs']}
          rows={[
            ['Launch film', 'A short film that introduces the product in a world built for it', 'Launch pages, paid social, streaming, event screens'],
            ['Product ad and cutdowns', 'The product in motion with a hook, a reason to buy and your end card', 'Meta, TikTok, YouTube'],
            ['Product stills', 'Hero and lifestyle stills of the product in generated settings', 'Product pages, ads, email'],
            ['One product, several worlds', 'The same product in different settings, seasons or occasions, from one set of product images', 'Seasonal campaigns, regional ads, creative tests'],
          ]}
        />
        <p>
          When the product video is a full commercial with cutdowns, see{' '}
          <Link href="/ai-commercial-production">AI commercial production</Link>. When it needs a presenter talking to
          camera in a creator&apos;s style, see <Link href="/ai-ugc-reels">AI UGC ads</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Price" title="How much does a product video cost?" alt>
        <p>
          A filmed product video is billed by studio or location days, crew, props and talent. One production
          company&apos;s published price guide (September 2026) puts a filmed ecommerce product video at USD 1,000 to 7,000
          and 3D product visualization at USD 5,000 to 50,000 or more. An AI product film has no studio day, set or crew to
          pay for.
        </p>
        <p>
          {priceLine('product-visuals')}. The price moves with running time, the number of shots and stills, how exactly
          the product has to be reproduced, the versions and ratios each placement needs, and how many review rounds your
          team takes.
        </p>
      </GuideSection>

      <GuideSection eyebrow="How it is made" title={`How ${studio} keeps your product right`}>
        <ol>
          <li>
            <strong>Brief and product files.</strong> The product, the launch or channel, the claims legal has approved, and
            the real artwork: label files, logo vectors and photos of the product from several angles.
          </li>
          <li>
            <strong>Look and boards.</strong> Settings, light and camera moves agreed as stills before any motion, so you
            approve the product in frame first.
          </li>
          <li>
            <strong>Generation passes.</strong> Shots started from the approved stills, checked against the real pack for
            shape, colour, hands and physics, and regenerated until they hold. The product gets the most passes.
          </li>
          <li>
            <strong>Edit and finish.</strong> Label, logo and on-screen text set from your files, then sound, grade, and the
            ratios and lengths each placement needs.
          </li>
        </ol>
        <GuideFilm
          id={spec.youtubeId}
          caption={`${spec.client} spec ad: a ${spec.durationSeconds}-second spec commercial by ${studio}, made without a shoot. Spec work, not commissioned by Keen.`}
        />
        <p>
          Starting each shot from an approved still is the most reliable way to keep a product right; how it works is in{' '}
          <Link href="/guides/first-frame-last-frame-ai-video">first and last frame AI video</Link>. Each stage of the
          pipeline is on <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.{' '}
          {PRODUCTION.summary}
        </p>
      </GuideSection>

      <GuideSection eyebrow="Where it breaks" title="Where generated product shots go wrong" alt>
        <GuideTable
          caption={`The failures that show up in AI product footage, and the fix ${studio} applies to each.`}
          head={['Problem', 'What it looks like', 'The fix']}
          rows={[
            ['Label text', 'Letters melt, the brand name is misspelled, small print turns to noise', 'Set the label from your artwork in the edit; never generate type'],
            ['Pack shape and colour', 'The bottle grows taller across shots, the red shifts to orange', 'Lock the product to reference stills and check every shot against the real pack'],
            ['Hands and use', 'Fingers pass through the cap, the grip changes between cuts', 'Rerun the shot, or cut to an insert where hands are not needed'],
            ['Physics', 'Liquid pours upward, foam behaves like smoke', 'Simplify the action or show the result, not the process'],
            ['Logo', 'A near-copy of your logo with the proportions wrong', 'Set your vector logo in the edit'],
          ]}
        />
        <p>
          The full method for keeping a product, label and logo exact is in{' '}
          <Link href="/guides/ai-commercial-product-accuracy">product and label accuracy in AI commercials</Link>. The checks
          a film goes through before delivery are in <Link href="/guides/ai-video-quality-control">AI video quality
          control</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The rule" title="Showing the product working: the mock-up rule">
        <p>
          In <a href={COLGATE}>FTC v. Colgate-Palmolive</a> (US Supreme Court, April 5, 1965), a shaving cream commercial
          showed sandpaper being shaved; the &ldquo;sandpaper&rdquo; was sand on plexiglass. The Court held the undisclosed
          mock-up was a material deceptive practice, separate from whether the cream worked. A generated shot of a product
          doing its job is a mock-up by definition, so it can never be the proof of a claim. {studio} uses generated
          product shots for setting, scale and mood, and marks any shot that shows a result as an illustration, as your
          legal team directs. This is not legal advice.
        </p>
      </GuideSection>

      <GuideFit
        title={`Why brands hire ${studio} for product visuals`}
        hire={[
          'A brand launching a product that wants a launch spot in settings a shoot could not reach on its budget.',
          'An ecommerce manager who needs the same product in several settings, seasons or ratios for product pages, ads and social.',
          'A brand manager whose label, pack colour and logo have to be exact in every frame.',
          'A brand that also needs UGC-style ads or a brand film in the same look, so the launch reads as one campaign.',
        ]}
        get={[
          'Product films and stills from one look, agreed as stills before any motion.',
          'Your product reproduced from your real product images and checked shot by shot against the real pack.',
          'Label, logo and on-screen text set in the edit from your files, never generated.',
          'The lengths and ratios each placement needs, cut from the same film.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/guides/ai-commercial-product-accuracy', title: 'Product and label accuracy', note: 'Keeping the pack, label and logo right in generated shots.' },
          { href: '/ai-ugc-reels', title: 'AI UGC ads', note: 'Creator-style product ads with generated presenters, and the rules that apply.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'When the product video is a full commercial with cutdowns.' },
          { href: '/guides/first-frame-last-frame-ai-video', title: 'First and last frame AI video', note: 'Starting each shot from an approved product still.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'Brief, brand world, boards, generation passes, edit and delivery.' },
        ]}
      />

      <GuideCta
        title="Tell us about the product"
        body="Send the product, the launch date or channel, the product files you have, and the settings you want it seen in."
      />
    </Guide>
  )
}
