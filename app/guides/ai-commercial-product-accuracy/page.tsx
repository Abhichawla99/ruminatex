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
  guideMetadata,
} from '@/components/guide/Guide'
import { PRODUCTION, SITE } from '@/lib/seo/facts'
import { AGENCY_RENDERS, OVERS } from '@/lib/seo/overs'

const PAGE = {
  path: '/guides/ai-commercial-product-accuracy',
  title: 'Product and Label Accuracy in AI Commercials',
  description:
    'Why AI video models redraw your product in every frame, what drifts (labels, logos, shape, color, count), the fixes in order of payoff, the truth-in-advertising rules that apply to AI product shots in the US, UK and EU, and the reference pack to send a studio.',
  published: '2026-09-24',
  updated: '2026-09-24',
  keywords: [
    'ai commercial product accuracy',
    'product consistency ai video',
    'ai video changes my product',
    'keep product consistent in ai video',
    'ai video logo accuracy',
    'ai product video label',
    'pack shot ai commercial',
  ],
}

const studio = SITE.name
const gummy = AGENCY_RENDERS.byCampaign.find((c) => c.job.startsWith('gummy'))!
const VEO_DOCS = 'https://ai.google.dev/gemini-api/docs/veo'
const OMNI_DOCS = 'https://ai.google.dev/gemini-api/docs/omni'
const COLGATE = 'https://www.law.cornell.edu/supremecourt/text/380/374'
const FTC_DECEPTION = 'https://www.ftc.gov/legal-library/browse/ftc-policy-statement-deception'
const ASA_FILTERS = 'https://www.asa.org.uk/news/the-mis-use-of-social-media-beauty-filters-when-advertising-cosmetic-products.html'
const ASA_AI = 'https://www.asa.org.uk/news/disclosure-of-ai-in-advertising-striking-the-balance-between-creativity-and-responsibility.html'
const ASA_WIGGYDOG = 'https://www.asa.org.uk/rulings/uab-commercecore-g25-1321974-uab-commercecore.html'
const EU_ART50 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50'
const OVERS_PRODUCT_GUIDE = 'https://www.overs.studio/guides/why-ai-changes-your-product'

const FAQS = [
  {
    q: 'Why does AI video change my product?',
    a: 'Because the model redraws the product in every frame from your reference images and prompt. The product in an AI shot is the model\'s drawing of it, fitted to the new light, angle and motion, so label text, logo shapes, proportions and colors can drift between shots and within a shot. The more the product moves, turns or is handled, the more chances it has to drift.',
  },
  {
    q: 'How do you keep a product consistent in an AI commercial?',
    a: "Send references of every side and the label artwork, start each product shot from an approved first frame, use the video model's reference feature, keep readable text out of generated shots, set the real logo, label and claims in the edit from the brand's files, end on a pack shot built from a real photo, and check every frame against the real product before legal review.",
  },
  {
    q: 'Can AI video get a label or logo right?',
    a: "Sometimes, and it is improving. Google says its Gemini Omni Flash model renders prompted text correctly and readably, as of September 2026. For a label that legal has approved, a studio should still not rely on generated lettering: the real logo and label are set in the edit from the brand's files, and every frame is checked against the real product.",
  },
  {
    q: 'Is it legal to show a product in an AI commercial?',
    a: "Yes, if the ad shows the product accurately. In the US, the FTC treats a demonstration or depiction that misleads consumers about a product as deceptive, and the Supreme Court upheld that for an undisclosed mock-up in 1965 (FTC v. Colgate-Palmolive). The UK's advertising regulator says an AI image of a product's effect that does not match real results is likely misleading even with an AI label. This is not legal advice.",
  },
  {
    q: 'What should I send an AI studio so my product comes out right?',
    a: 'Photos of every side on a plain background, the label and logo artwork files, close-ups of the logo, closure and any texture, the product in a hand for scale, the exact brand colors, the dimensions, a 3D or CAD file if one exists, and a written list of what must never change, such as cap color, logo position or the number of items in the pack.',
  },
  {
    q: 'How does Ruminate X keep a product accurate?',
    a: `The product gets extra generation passes, and ${SITE.name} adds the real logo, label and on-screen text in the edit from the brand's files rather than having the generator draw them. Each shot is checked against its board and generated again when the product drifts. Every frame is made with generative AI, with no crew, set or location shoot.`,
  },
]

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Guides', path: '/guides' },
  { name: PAGE.title, path: PAGE.path },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} trail={TRAIL} films={['Zytga7zsShI']}>
      <GuideHero
        eyebrow="Product accuracy"
        title="Product and label accuracy in AI commercials"
        dek="For the brand manager whose product has a label legal has approved, a logo that cannot move and a shape customers know on sight, and who is about to put it in an AI-made commercial."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          A video model redraws your product in every frame from your reference images and prompt, so label text, logos,
          proportions and colors can drift from shot to shot. The fixes, in order: send clean references of every side,
          start product shots from an approved first frame, keep readable text out of generated shots, set the real logo,
          label and claims in the edit, end on a pack shot built from a real photo, and check every frame against the real
          product before legal sees it. An ad that shows a product looking or working unlike the real one is misleading,
          however it was made.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="The cause" title="Why AI video changes your product">
        <p>
          Nothing in an AI shot is pasted in. The model studies your reference images and draws the whole frame again,
          product included, fitted to new light, a new angle and motion. It can get the light right and the fourth letter
          of your brand name wrong. Video multiplies the problem: a 6-second shot at 24 frames a second is 144 drawings
          of your product, and every turn, reflection and hand that touches it is another chance to drift.
        </p>
        <p>
          The model makers are working on it. <a href={VEO_DOCS} rel="noopener">Veo 3.1</a> takes up to three reference
          images of a product to keep its appearance in a clip, and Google says{' '}
          <a href={OMNI_DOCS} rel="noopener">Gemini Omni Flash</a> renders prompted text correctly and readably. Neither
          is a guarantee for a regulated label. For stills, the same cause is taken apart in{' '}
          <a href={OVERS_PRODUCT_GUIDE} rel="noopener">
            Overs&apos; guide to why AI changes your product
          </a>
          .
        </p>
      </GuideSection>

      <GuideSection eyebrow="What drifts" title="What drifts, and why it matters in an ad" alt>
        <GuideTable
          caption="The product details that drift most in AI video, and the fix for each."
          head={['Detail', 'How it drifts', 'Why it matters', 'The fix']}
          rows={[
            ['Label text', 'Letters warp or change; small print turns to noise', 'A wrong word on a label is a wrong label', 'Keep small print unreadable in generated shots; composite the real label'],
            ['Logo', 'Shape, spacing or color shifts', 'A brand-guideline and trademark problem', 'Place the real logo file in the edit'],
            ['Shape', 'The bottle grows taller; the cap changes', 'Customers know the shape on shelf', 'References of every side; the dimensions in the prompt'],
            ['Color', 'The pack shifts under the scene’s light', 'The brand color is part of the product', 'Hex codes on the brief; grade back to the reference color'],
            ['Count and size', 'Nine gummies become eleven; the jar doubles in size', 'Quantity and size are claims', 'State the count; a reference of the product in a hand'],
            ['Finish', 'Matte turns glossy; glass turns to plastic', 'It misrepresents what the buyer gets', 'Material words; references shot in similar light'],
            ['Physics', 'A pour runs backward; a cap unscrews the wrong way', 'It looks fake, and it can mislead', 'Keep the action simple on the board; rerun or cut around it'],
          ]}
        />
      </GuideSection>

      <GuideSection eyebrow="The fixes" title="The fixes, in order of payoff">
        <ol>
          <li>
            <strong>A reference pack.</strong> Every side on a plain background, the label and logo artwork, close-ups of
            the closure and texture, the product in a hand for scale, the exact colors and dimensions, and a 3D file if one
            exists.
          </li>
          <li>
            <strong>An approved first frame for every product shot.</strong> The label, logo and shape are checked on a
            still before any motion is paid for. See{' '}
            <Link href="/guides/first-frame-last-frame-ai-video">first and last frames in AI video</Link>.
          </li>
          <li>
            <strong>No readable text in generated shots.</strong> Turn the label a few degrees, soften the focus, or let
            motion carry it. The words the viewer reads come in step 4.
          </li>
          <li>
            <strong>Real files in the edit.</strong> The logo, the label, supers and any claim are set from the
            brand&apos;s own files, never drawn by the generator.
          </li>
          <li>
            <strong>A real pack shot.</strong> End on the product from a real photo or a 3D render, animated in the edit,
            so the last image the viewer sees is exact.
          </li>
          <li>
            <strong>A frame-by-frame check.</strong> Someone who knows the product compares every product shot with the
            real thing, at full size, before the cut goes to legal.
          </li>
          <li>
            <strong>Legal or MLR review of what the product is shown doing.</strong> A generated shot of the product at
            work is a claim, the same as a line of copy.
          </li>
        </ol>
        <p>
          {PRODUCTION.summary} In the {studio} pipeline the product gets extra generation passes, and the real logo,
          label and on-screen text are added in the edit from the brand&apos;s files. More on how an AI commercial is
          made, and what else breaks, is on <Link href="/ai-commercial-production">AI commercial production</Link>.
        </p>
        <GuideFilm
          id="Zytga7zsShI"
          caption="Keen Footwear spec ad by Ruminate X (spec work, not commissioned by Keen). A 32-second product commercial in which the shoe has to stay the same shoe in every shot."
        />
      </GuideSection>

      <GuideSection eyebrow="The rules" title="An AI product shot is still a claim" alt>
        <p>
          <strong>United States.</strong> The FTC&apos;s{' '}
          <a href={FTC_DECEPTION} rel="noopener">Deception Policy Statement</a> (1983) treats an ad as deceptive when it
          is likely to mislead a reasonable consumer about something material. The Supreme Court applied that to a TV
          demonstration in <a href={COLGATE} rel="noopener">FTC v. Colgate-Palmolive</a> (1965): the shaving-cream ad
          showed sandpaper being shaved, the &ldquo;sandpaper&rdquo; was sand on plexiglass, and the Court held the
          undisclosed mock-up a material deceptive practice. A generated shot that shows a product doing what it cannot do
          is the same problem in a new medium.
        </p>
        <p>
          <strong>United Kingdom.</strong> The ASA ruled in 2021 that{' '}
          <a href={ASA_FILTERS} rel="noopener">beauty filters that exaggerate a product&apos;s effect</a> should not be
          used in ads. Its <a href={ASA_AI} rel="noopener">May 2025 guidance</a> says a disclosure alone will not fix a
          misleading ad, and that an AI image of a cosmetic&apos;s effect that does not match real results is likely
          misleading even with an AI label. In March 2026 it upheld complaints against an{' '}
          <a href={ASA_WIGGYDOG} rel="noopener">ad for a robotic puppy</a> whose footage, real or AI-generated,
          exaggerated how lifelike the toy was.
        </p>
        <p>
          <strong>European Union.</strong> From August 2, 2026,{' '}
          <a href={EU_ART50} rel="noopener">Article 50 of the AI Act</a> requires those who use AI professionally to
          disclose deep fakes, and the Act&apos;s definition of a deep fake covers objects and places as well as people.
          Ask your counsel whether a realistic product shot needs a label where you sell.
        </p>
        <p>Checked September 2026. This is not legal advice; your legal, regulatory or MLR team decides for each ad.</p>
      </GuideSection>

      <GuideSection eyebrow="The stills" title="Where Overs comes in">
        <p>
          The product stills around a commercial have the same problem, and {OVERS.name} was built around it.{' '}
          {OVERS.name} is {OVERS.plain}. It is {OVERS.relation}, and it was built on {OVERS.origin}.
        </p>
        <p>
          Product analysis is one of its ten steps. Before a photo is made, the plan names the reference pictures that
          photo needs, in order, and only those go to the image model; if a needed reference does not exist,{' '}
          {OVERS.name} skips it instead of guessing with the wrong picture. Among the image models it offers, it lists GPT
          Image 2.5 Sunburst as the most exact at keeping a product identical while the scene changes. On Pro and Team, a
          reviewer checks each photo against the references before you see it. Headlines, sublines and buttons go on in a
          separate typography step, and the clean version is kept, so no render has to spell your claim. The same method,
          words added in a second pass, is how 100creatives made its gummy supplement ads by hand in{' '}
          {AGENCY_RENDERS.year}, at {gummy.perKeeper} renders per usable photo, the fastest of its{' '}
          {AGENCY_RENDERS.campaigns} campaigns that year.
        </p>
        <p>
          You see the shot plan and an estimated cost before anything renders. The free plan makes{' '}
          {OVERS.freePhotosPerMonth} photos a month, and the AI costs {OVERS.aiCostPerPhoto} a photo on your own
          OpenRouter key, with no markup from {OVERS.name}.{' '}
          <a href={OVERS.url} rel="noopener">
            Run your product through Overs free at www.overs.studio
          </a>{' '}
          and check it across a whole set of stills before it goes anywhere near a video model.
        </p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X put your product on screen?"
        hire={[
          'A consumer brand that needs a cinematic ad in which the product looks exactly like the one on shelf.',
          'A supplement, beauty, pharma or pharmacy brand whose on-screen claims go through legal or MLR review.',
          'A launch with final packaging and no budget or calendar for a shoot.',
        ]}
        instead={[
          'The ad demonstrates performance, such as a stain coming out or a blade cutting: film the real product, because a generated demonstration is a claim you cannot back up.',
          'The product is reflective, transparent or carries small print the viewer must read on screen: a macro shoot or a 3D product render holds it better.',
          'The packaging is not final: wait for final artwork, because every shot is built on it.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/guides/first-frame-last-frame-ai-video', title: 'First and last frames', note: 'Checking the product on a still before motion is paid for.' },
          { href: '/guides/ai-video-quality-control', title: 'AI video quality control', note: 'The frame-by-frame checks before an AI ad airs.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'How an AI commercial is made and what still breaks.' },
          { href: '/ai-video-production-healthcare', title: 'AI video for pharma and healthcare', note: 'Labels, claims and MLR review for regulated products.' },
        ]}
      />

      <GuideCta title="Send us the product" body="Send the product, its label artwork, where the ad will run and what legal has to sign off." />
    </Guide>
  )
}
