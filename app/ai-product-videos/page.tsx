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
import { OFFERS, PRODUCTION, SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/ai-product-videos',
  title: 'AI Product Video Production for Brands',
  description:
    'What an AI product video is, what product videos cost filmed, in 3D or made with AI, which AI tools make product videos, where generated product shots go wrong, and the one rule for product demos.',
  published: '2026-03-08',
  updated: '2026-10-04',
  keywords: [
    'ai product video production',
    'ai product videos',
    'how much does a product video cost',
    'which ai can make product videos',
    'best ai product video production',
    'how much do ai video creators cost',
  ],
}

const studio = SITE.name
const visuals = OFFERS.find((o) => o.key === 'product-visuals')!
const spec = film('Zytga7zsShI')

const BLARE = 'https://blaremedia.net/product-video-cost/'
const CREATIFY_PRICING = 'https://creatify.ai/pricing'
const COLGATE = 'https://www.law.cornell.edu/supremecourt/text/380/374'

const FAQS = [
  {
    q: 'How much does a product video cost?',
    a: 'Filmed, BLARE Media\'s September 2026 guide puts an ecommerce or catalogue product video at USD 1,000 to 7,000, a marketplace listing video at 500 to 7,000, 3D product visualization at 5,000 to 50,000 or more, and a launch film with talent at 10,000 to 200,000 or more. An AI product-ad tool such as Creatify costs USD 39 or 99 a month for credits. Ruminate X prices AI product films per film, from the brief.',
  },
  {
    q: 'Which AI can make product videos?',
    a: 'Two kinds of tool. Product-ad tools (Creatify, Topview, HeyGen\'s product video tool) turn a product link or photos into a template ad with a presenter. General video models (Runway, Google Veo, Kling) animate a product photo used as the first frame, which gives more control over the shot and more failures to fix. Neither reliably keeps small label text sharp, so a studio such as Ruminate X sets the label and logo from the brand\'s own artwork in the edit.',
  },
  {
    q: 'How much do AI video creators cost?',
    a: 'It depends who does the work. A self-serve tool is a monthly subscription (Creatify lists USD 39 and 99 a month, October 2026) and your team writes, directs and fixes the shots. A freelancer or an AI studio prices per video or per film, by length, the number of shots, versions and revision rounds. Published prices across tools, freelancers, AI studios and film crews are on Ruminate X\'s AI video production cost page.',
  },
  {
    q: 'Can AI show my product working in an ad?',
    a: 'Only if the ad does not pass the generated shot off as proof. In FTC v. Colgate-Palmolive (1965) the US Supreme Court held that an undisclosed mock-up in a TV demonstration was a deceptive practice even though the product claim itself was true. A generated shot of a stain lifting or a cream smoothing skin is a mock-up; show it as illustration, disclose it, or film the real result. This is not legal advice.',
  },
  {
    q: 'What is the best AI product video production for a brand launch?',
    a: 'Judge it on one shot: your real product, held in a hand, turning, with the label readable in the last frame. If a studio or tool can show that from your own pack files, the rest is direction and taste. Ruminate X makes AI product films and cinematic launch spots this way, and tells brands to film instead when texture, fit or a real result is what sells the product.',
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} films={[spec.youtubeId]}>
      <GuideHero
        eyebrow="AI product videos"
        title="AI product video production: launch films and product ads without a shoot"
        dek="For the brand or ecommerce manager with a product launch, a new SKU or a tired product page, who wants to know what a product video costs, which AI tools make one, and what goes wrong when the product is generated."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          An AI product video puts your product in generated scenes, motion and light, with the product, label and logo taken
          from your own files. Filmed, a product page video costs USD 1,000 to 7,000 and 3D visualization 5,000 to 50,000 or
          more (BLARE Media, September 2026). A product-ad tool costs USD 39 to 99 a month. AI suits launch spots, social cuts
          and settings you cannot afford to shoot. Film instead when texture, fit or a real result is what sells the product.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="Price" title="How much does a product video cost?">
        <GuideTable
          caption={
            <>
              Filmed and 3D ranges from <a href={BLARE}>BLARE Media&apos;s product video cost guide</a> (September 14,
              2026), a production company&apos;s own figures; tool prices from <a href={CREATIFY_PRICING}>Creatify</a>. Read
              October 4, 2026. USD.
            </>
          }
          head={['Kind of product video', 'Published price', 'What drives it']}
          rows={[
            ['UGC-style review or testimonial (filmed)', '200 to 2,000', 'A creator, a phone and a script'],
            ['Ecommerce or catalogue showcase (filmed)', '1,000 to 7,000', 'Discounts for several SKUs on one shoot day'],
            ['Amazon or marketplace listing video (filmed)', '500 to 7,000', 'The platform\'s format and length limits'],
            ['3D animation or product visualization', '5,000 to 50,000+', 'Model complexity and render time'],
            ['Launch film with narrative and talent (filmed)', '10,000 to 200,000+', 'Casting, locations and story'],
            ['AI product-ad tool (Creatify Starter / Pro)', '39 or 99 a month for credits', 'Your team writes, directs and fixes the shots'],
          ]}
        />
        <p>
          An AI product film from a studio sits beside the 3D and launch-film rows in what it can show (any setting, any
          light, the product in motion) and is priced by the same things: running time, number of shots, versions and
          review rounds. {studio} quotes each film from the brief. Published AI studio prices are in{' '}
          <Link href="/blog/how-much-does-ai-video-production-cost">how much AI video production costs</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Tools" title="Which AI can make product videos?" alt>
        <GuideTable
          caption="The two kinds of AI tool brands use for product video, and where each stops, in Ruminate X's experience of the tools."
          head={['Kind', 'Examples', 'Good for', 'Where it stops']}
          rows={[
            ['Product-ad tools', 'Creatify, Topview, HeyGen product video', 'Fast template ads from a product link, often with a stock presenter', 'Every brand on the tool gets the same templates and faces'],
            ['General video models', 'Runway, Google Veo, Kling', 'Cinematic shots that start from your product photo as the first frame', 'Labels warp, the pack changes shape between shots, hands fail'],
            ['A studio using both', 'Ruminate X and other AI studios', 'Launch films and campaigns where the product has to be exact in every cut', 'Costs more per film than a subscription'],
          ]}
        />
        <p>
          Starting a shot from an approved still is the most reliable way to keep a product right; how it works is in{' '}
          <Link href="/guides/first-frame-last-frame-ai-video">first and last frame AI video</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Where it breaks" title="Where generated product shots go wrong">
        <GuideTable
          caption="The failures that show up in AI product footage, and the fix for each."
          head={['Problem', 'What it looks like', 'Fix']}
          rows={[
            ['Label text', 'Letters melt, the brand name is misspelled, small print turns to noise', 'Set the label from your artwork in the edit; never generate type'],
            ['Pack shape and colour', 'The bottle grows taller across shots, the red shifts to orange', 'Lock the product to reference stills and check every shot against the real pack'],
            ['Hands and use', 'Fingers pass through the cap, the grip changes between cuts', 'Rerun the shot, or cut to an insert where hands are not needed'],
            ['Physics', 'Liquid pours upward, foam behaves like smoke', 'Simplify the action or show the result, not the process'],
            ['Logo', 'A near-copy of your logo with the proportions wrong', 'Composite your vector logo in the edit'],
          ]}
        />
        <p>
          The full method for keeping a product, label and logo exact is in{' '}
          <Link href="/guides/ai-commercial-product-accuracy">product and label accuracy in AI commercials</Link>. The checks
          a film goes through before delivery are in <Link href="/guides/ai-video-quality-control">AI video quality
          control</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The rule" title="Showing the product working: the mock-up rule" alt>
        <p>
          In <a href={COLGATE}>FTC v. Colgate-Palmolive</a> (US Supreme Court, April 5, 1965), a shaving cream commercial
          showed sandpaper being shaved; the &ldquo;sandpaper&rdquo; was sand on plexiglass. The Court held the undisclosed
          mock-up was a material deceptive practice, separate from whether the cream worked. A generated shot of a product
          doing its job is a mock-up by definition. Use it for mood, scale and setting, label it as illustration when it
          shows a result, and film the real result when the result is the claim. Your legal team decides for each ad; this
          is not legal advice.
        </p>
      </GuideSection>

      <GuideSection eyebrow="How it is made" title="How a studio makes an AI product film">
        <ol>
          <li>
            <strong>Brief and pack files.</strong> The product, the launch or channel, the claims legal has approved, and the
            real artwork: label files, logo vectors, pack photos from several angles.
          </li>
          <li>
            <strong>Look and boards.</strong> Settings, light and camera moves agreed as stills before any motion, so the
            product is approved in frame first.
          </li>
          <li>
            <strong>Generation.</strong> Shots started from the approved stills, checked for pack shape, colour, hands and
            physics, and rerun until they hold.
          </li>
          <li>
            <strong>Edit and finish.</strong> Label, logo and on-screen text set from your files, sound, grade, and the
            ratios and lengths each placement needs.
          </li>
        </ol>
        <GuideFilm
          id={spec.youtubeId}
          caption={`${spec.client} spec ad: a ${spec.durationSeconds}-second spec commercial by ${studio}, made without a shoot. Spec work, not client work.`}
        />
        <p>
          {studio} makes {visuals.name.toLowerCase()}, {visuals.plain}. {PRODUCTION.summary} The full pipeline is in{' '}
          <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.
        </p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X make your product video?"
        hire={[
          'A brand launching a product that wants a cinematic launch spot in settings a shoot could not reach on the budget.',
          'An ecommerce team that needs the same product in several worlds, seasons or ratios for ads and social.',
          'A brand that also needs UGC-style ads or a brand film in the same look, so the launch reads as one campaign.',
        ]}
        instead={[
          'Texture, fit or colour accuracy is what sells it (apparel on a body, cosmetics swatches, food close-ups): shoot it.',
          'The ad proves the product works (cleaning, skincare results, performance): film the real result.',
          'You need plain white-background videos for hundreds of SKUs: a product studio with a turntable is faster and cheaper.',
          'You want a quick template ad from a product link: a product-ad tool on a monthly plan.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/guides/ai-commercial-product-accuracy', title: 'Product and label accuracy', note: 'Keeping the pack, label and logo right in generated shots.' },
          { href: '/ai-ugc-reels', title: 'AI UGC ads', note: 'Creator-style product ads, what they cost and what must be disclosed.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'When the product video is a full commercial with cutdowns.' },
          { href: '/guides/first-frame-last-frame-ai-video', title: 'First and last frame AI video', note: 'Starting each shot from an approved product still.' },
          { href: '/blog/how-much-does-ai-video-production-cost', title: 'AI video production cost', note: 'Published prices from tools, freelancers, AI studios and crews.' },
        ]}
      />

      <GuideCta
        title="Tell us about the product"
        body="Send the product, the launch date or channel, the pack files you have, and the settings you want it seen in."
      />
    </Guide>
  )
}
