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
import { OVERS, STILLS_MATH } from '@/lib/seo/overs'

const PAGE = {
  path: '/guides/video-vs-static-ads',
  title: 'Video vs Static Ads: Where AI Film Fits',
  description:
    'Video vs static ads in 2026: what Meta, Google and TikTok publish about each format, what a static still does better, how to split a creative budget between an AI-made film and campaign stills, and how to test them.',
  published: '2026-09-24',
  updated: '2026-09-24',
  keywords: [
    'video vs static ads',
    'static vs video ads meta',
    'video vs static ads facebook',
    'static ads vs video ads',
    'reels ads vs image ads',
    'video or image ads',
  ],
}

const studio = SITE.name
const META_REELS = 'https://www.facebook.com/business/ads/facebook-instagram-reels-ads'
const DEMAND_GEN_BOTH = 'https://support.google.com/google-ads/answer/13695777?hl=en'
const GOOGLE_VERTICAL = 'https://support.google.com/google-ads/answer/9128498?hl=en'
const TIKTOK_BEST = 'https://ads.tiktok.com/help/article/creative-best-practices?lang=en'
const GEMINI_PRICING = 'https://ai.google.dev/gemini-api/docs/pricing'
const OVERS_VOLUME_GUIDE = 'https://www.overs.studio/guides/how-many-ad-creatives-do-you-need'

const FAQS = [
  {
    q: 'Are video ads better than static ads?',
    a: "Where video is the native format, the platforms' own studies say yes: Meta reports 34.5% lower cost per result than image ads for Reels campaigns with 9:16 video and sound, from 15 split tests. Google says Demand Gen campaigns that use both video and images typically perform better than either alone. Statics still win on cost to make and speed to test, so most brands should run both.",
  },
  {
    q: 'Do static ads still work on Meta?',
    a: "Yes. Meta's ads guide still specifies image ads for Feed, Stories and Reels, and statics are the cheapest creative to make and to test. Meta's own Reels study found lower cost per result for 9:16 video with sound than for images, so a plan built only on statics leaves the Reels result on the table.",
  },
  {
    q: 'Video vs static ads on Facebook: which is cheaper?',
    a: "Cheaper to make: statics, by far. At published prices an AI-made usable still costs $0.27 to $1.69 in model fees, while one 8-second shot from Google's Veo 3.1 costs $3.20 at 1080p before any takes are thrown away. Cheaper per result: in Meta's study of Reels-only campaigns, 9:16 video with sound came in 34.5% lower than image ads. Test both on your own account.",
  },
  {
    q: 'How many creatives should I test at once?',
    a: "TikTok recommends 3 to 5 different creatives per ad group and 3 to 5 varied ad groups per campaign. On Meta and Google, test a small set of distinct ideas rather than many near-copies: a film with two or three different openings, and a handful of statics built on different messages.",
  },
  {
    q: 'Can I turn a static ad into a video ad with AI?',
    a: "Yes. Image-to-video models such as Google's Veo 3.1 and Gemini Omni Flash take the still as the first frame and generate a few seconds of motion from a written motion prompt. Check the product, label and logo in every frame of the result, and set any text in the edit rather than leaving it in the still.",
  },
  {
    q: 'How should a brand split a creative budget between video and statics?',
    a: 'Put the craft into one hero film per campaign idea, cut for 9:16, 4:5 and 16:9, with two or three alternative openings to test. Put the volume into stills from the same world: the key visual, feed statics per ratio, Google sizes and store photos. Refresh statics often, because they are cheap, and refresh the film by recutting it before generating new shots.',
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
    <Guide page={PAGE} faqs={FAQS} trail={TRAIL} films={['zJgXuxFGU0U']}>
      <GuideHero
        eyebrow="Video vs static"
        title="Video vs static ads: run both, from one world"
        dek="For the performance marketer or growth lead deciding how much of the creative budget goes to an AI-made film, and how much to campaign stills."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          Run both, made from the same world. The platforms&apos; own evidence favors video where video is native: Meta
          reports 34.5% lower cost per result for Reels campaigns with 9:16 video and sound than for image ads, from 15
          split tests, and Google says Demand Gen campaigns that use both video and images typically perform better than
          one format alone. Statics stay far cheaper to make and faster to test. A sound split is one hero film with
          vertical and feed cutdowns for the video placements, and a larger set of stills for feeds, Google, retargeting
          and stores.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="The evidence" title="What the platforms publish">
        <GuideTable
          caption={
            <>
              From <a href={META_REELS} rel="noopener">Meta&apos;s Reels ads page</a>,{' '}
              <a href={DEMAND_GEN_BOTH} rel="noopener">Google&apos;s Demand Gen help</a>,{' '}
              <a href={GOOGLE_VERTICAL} rel="noopener">Google&apos;s vertical video guidance</a> and{' '}
              <a href={TIKTOK_BEST} rel="noopener">TikTok&apos;s creative best practices</a>, checked September 2026. Each
              is a platform&apos;s own study of its own placements, not a neutral benchmark.
            </>
          }
          head={['Source', 'Finding', 'Scope']}
          rows={[
            ['Meta', '34.5% lower cost per result than image ads, for campaigns with 9:16 video with sound and key messages in the safe zone', '15 split tests of Reels-only campaigns; small and medium ecommerce, retail and packaged-goods advertisers; 99.9% confidence'],
            ['Google, Demand Gen', 'Using both video and images typically yields better performance than one format', 'No figure given'],
            ['Google, Shorts', 'Adding a vertical video to a Demand Gen campaign raised conversions on Shorts by more than 35%', 'Google internal data, global, 2024'],
            ['TikTok', '3 to 5 different creatives per ad group, 3 to 5 varied ad groups per campaign', 'Creative best practices; 9:16, at least 720p'],
          ]}
        />
        <p>
          Read the Meta result for what it tested: Reels-only campaigns, one with a still and one with 9:16 video with
          sound that kept its message inside the safe zone. It says video wins in a video placement. It says nothing
          about catalog ads, retargeting or a marketplace listing, where the still is the ad.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The formats" title="What each format does better" alt>
        <GuideTable
          caption="Where each format earns its place in a paid plan."
          head={['Job', 'Video', 'Static']}
          rows={[
            ['Reels, Stories, TikTok, Shorts', 'Native; the Meta and Google results above', 'Runs, but gives up the video result'],
            ['Showing the product in use, or a story', 'Motion, sound and a before and after', 'One moment'],
            ['Testing many messages cheaply', 'Each new shot costs video generation', 'A usable AI still costs cents to a couple of dollars'],
            ['Catalog, retargeting, shopping, marketplaces', 'Optional', 'The main format'],
            ['Billboards and display', 'Digital screens rotate short spots', 'The main format'],
            ['Shelf life', 'Recut into new lengths and hooks', 'Refreshed with new stills from the same world'],
          ]}
        />
      </GuideSection>

      <GuideSection eyebrow="The split" title="How to split a creative budget between film and stills">
        <ol>
          <li>
            <strong>One hero film per campaign idea.</strong> Cut it for 9:16 with sound for Reels, TikTok and Shorts,
            4:5 for the feed and 16:9 for YouTube, with the message inside each platform&apos;s safe zone. See{' '}
            <Link href="/guides/ad-campaign-deliverables">ad campaign deliverables</Link> for the specs.
          </li>
          <li>
            <strong>Two or three openings of the same film.</strong> The first seconds are the hook. Testing openings
            costs an edit and a few new shots, and the rest of the film stays as it is.
          </li>
          <li>
            <strong>A larger set of stills from the same world.</strong> The key visual, feed statics per ratio, Google
            Demand Gen sizes and store photos, with and without type.
          </li>
          <li>
            <strong>Refresh at the cheap end first.</strong> New statics cost cents in model fees. New film shots cost
            more: at Google&apos;s <a href={GEMINI_PRICING} rel="noopener">published prices</a> one 8-second Veo 3.1
            shot at 1080p is $3.20 before any take is thrown away. Recut the film before regenerating it.
          </li>
        </ol>
        <p>
          The budget lines behind each row are in the{' '}
          <Link href="/guides/commercial-production-budget-template">commercial production budget template</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="One campaign" title="Making the film and the statics look like one campaign" alt>
        <p>
          A viewer who sees the Reel on Monday and the static in the feed on Tuesday should recognize the same campaign.
          That comes from making both from one{' '}
          <Link href="/guides/brand-world-building">world bible</Link>: the same cast, the same product references, the same
          palette and light. The order that holds them together is stills first, with the film&apos;s product and face shots starting
          from approved stills as <Link href="/guides/first-frame-last-frame-ai-video">first frames</Link>, then one grade
          for the film and the stills matched to it.
        </p>
        <GuideFilm
          id="zJgXuxFGU0U"
          caption="Keen Hiking Shoes by Ruminate X: a 42-second AI short film, published as a YouTube Short."
        />
        <p>
          {PRODUCTION.summary} {studio} makes the film side: brand films, AI commercials and UGC-style ads, cut for the
          channels in the brief.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The statics" title="Where Overs comes in">
        <p>
          The static half of the plan is where {OVERS.name} comes in. {OVERS.name}, {OVERS.relation}, is {OVERS.plain}.
          It grew out of {OVERS.origin}.
        </p>
        <p>
          It learns the brand once (its website, its photos, its guidelines), then plans each set around named uses such
          as feed ads, store page, banner and billboard, in sets of 5, 8, 10 or 12 photos. You see the shot plan and an
          estimated cost before anything renders, and you approve, change or reject every photo, with each decision kept
          as brand memory for the next set. Headlines and buttons go on in a separate typography step that keeps the clean
          version, which is how a test of five messages stays five versions of one good photo. When a static wins, it can
          become a video test: {OVERS.name} writes a motion prompt per photo for {OVERS.motionModels}, to run with the
          photo as the first frame. It makes no video itself.
        </p>
        <p>
          At published model prices a usable photo costs {STILLS_MATH.perUsablePhotoLow} to{' '}
          {STILLS_MATH.perUsablePhotoHigh} in AI fees, at the 8 renders per usable photo 100creatives averaged across its
          2026 campaigns. The free plan makes {OVERS.freePhotosPerMonth} photos a month, with the AI billed to your own
          OpenRouter key and no markup from {OVERS.name}. How many creatives a paid plan needs is worked through in{' '}
          <a href={OVERS_VOLUME_GUIDE} rel="noopener">
            Overs&apos; guide to how many ad creatives you need
          </a>
          . Build your next static test from your own brand,{' '}
          <a href={OVERS.url} rel="noopener">
            free on Overs at www.overs.studio
          </a>
          .
        </p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X make the video half?"
        hire={[
          'A brand whose paid plan includes Reels, TikTok, Shorts or YouTube, and needs a hero film with vertical and feed cutdowns.',
          'A performance team that wants several openings of one strong film to test, rather than a new film for every test.',
          'A brand that wants the film and the statics from one world.',
        ]}
        instead={[
          'Your plan is catalog, shopping and marketplace ads only: stills from Overs or a photographer cover it.',
          'You need dozens of new video variations every week: UGC creators or a self-serve tool cost less than a studio.',
          'You have one product photo and a small test budget: animate the still yourself with an image-to-video model first.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/guides/ad-campaign-deliverables', title: 'Ad campaign deliverables', note: 'The ratios and lengths each placement needs.' },
          { href: '/guides/commercial-production-budget-template', title: 'Budget template', note: 'What the film lines and the stills lines cost.' },
          { href: '/guides/first-frame-last-frame-ai-video', title: 'First and last frames', note: 'Turning an approved still into the start of a shot.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'The hero film side of the plan.' },
          { href: '/ai-ugc-reels', title: 'AI UGC reels', note: 'Creator-style ads for testing volume.' },
        ]}
      />

      <GuideCta title="Plan the video half" body="Send the channels, the budget split you have in mind and the product, and get a plan for the film and its cutdowns." />
    </Guide>
  )
}
