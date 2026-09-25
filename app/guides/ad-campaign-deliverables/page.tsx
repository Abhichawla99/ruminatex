import Link from 'next/link'
import {
  Guide,
  GuideAnswer,
  GuideCta,
  GuideFaq,
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
  path: '/guides/ad-campaign-deliverables',
  title: 'Ad Campaign Deliverables: Film and Stills',
  description:
    'Ad campaign deliverables, channel by channel: the hero film, cutdowns and ratios for YouTube, Meta, TikTok and connected TV, the stills for feeds, Google, stores and billboards, the extras people forget, and a deliverables list template.',
  published: '2026-09-24',
  updated: '2026-09-24',
  keywords: [
    'ad campaign deliverables',
    'campaign deliverables',
    'marketing campaign deliverables',
    'campaign deliverables examples',
    'social media campaign deliverables',
    'video ad specs 2026',
    'commercial deliverables list',
  ],
}

const studio = SITE.name
const YT_FORMATS = 'https://support.google.com/google-ads/answer/2375464?hl=en'
const YT_SPECS = 'https://support.google.com/google-ads/answer/13547298?hl=en'
const YT_TV = 'https://support.google.com/google-ads/answer/14442864?hl=en'
const META_REELS = 'https://www.facebook.com/business/ads-guide/update/image/instagram-reels'
const META_FEED = 'https://www.facebook.com/business/ads-guide/update/video/facebook-feed'
const TIKTOK_INFEED = 'https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads?lang=en'
const PRIME_VIDEO = 'https://advertising.amazon.com/resources/ad-specs/dsp/video/streaming-tv-prime-video-ads'
const DEMAND_GEN = 'https://support.google.com/google-ads/answer/13704860?hl=en'
const PMAX = 'https://support.google.com/google-ads/answer/14530211?hl=en'
const CALM_ACT = 'https://www.congress.gov/111/plaws/publ311/PLAW-111publ311.htm'
const EBU_R128 = 'https://tech.ebu.ch/publications/r128'
const LAMAR = 'https://www.lamar.com/Products/Digital'
const OUTFRONT = 'https://www.outfront.com/resources/specs'
const OVERS_SIZES_GUIDE = 'https://www.overs.studio/guides/adapt-one-campaign-to-every-ad-size'

const FAQS = [
  {
    q: 'What are campaign deliverables?',
    a: 'Campaign deliverables are every finished file a campaign needs, listed one by one: the hero film, each cutdown, each aspect ratio and length, the stills for each placement, and the extras such as captions, textless versions and audio stems. The list goes into the brief and the contract, because it decides what the studio makes and what it quotes.',
  },
  {
    q: 'What deliverables does a video ad campaign need?',
    a: 'Usually a hero film at its full length, cutdowns such as 15 and 6 seconds, versions in 16:9 for YouTube and connected TV, 9:16 for Reels, Stories, TikTok and Shorts, and 4:5 for the Meta feed, plus captions, a textless version, audio stems and thumbnails. Add the stills the same campaign needs in feeds, on Google, in stores and on billboards.',
  },
  {
    q: 'What aspect ratios do video ads need in 2026?',
    a: "16:9 for YouTube in-stream and connected TV; 9:16 for Instagram and Facebook Reels and Stories (1440 by 2560 pixels), TikTok and YouTube Shorts; and 4:5 for the Facebook feed (1440 by 1800). YouTube also accepts 1:1. In 9:16, Meta asks advertisers to keep about 14% at the top, 35% at the bottom and 6% on each side free of text and logos.",
  },
  {
    q: 'How long should the cutdowns of a commercial be?',
    a: 'Match the placements. YouTube bumper ads run up to 6 seconds; non-skippable in-stream ads run 15 to 60 seconds depending on the campaign type; YouTube TV takes 6, 15, 30 and 60-second ads that must be within one second of their length; Prime Video takes 15, 30, 45 and 60 seconds. A 30-second hero with a 15 and a 6 covers most plans.',
  },
  {
    q: 'What are textless versions and audio stems, and do I need them?',
    a: 'A textless version is the film with no supers, prices or legal lines, so new text can be set for another market or offer without remaking the film. Audio stems are the voice, music and effects as separate files, so a new voiceover or a different music license does not mean a new mix from scratch. Ask for both; they cost little when made with the master.',
  },
  {
    q: 'Does every aspect ratio need its own AI generation?',
    a: 'Not always, but often. A 9:16 crop from a 16:9 frame keeps under a third of its width, which usually cuts the product or a face, so shots with either are generated again for the vertical frame. Wide establishing shots can sometimes be cropped. Settle which ratios are generated and which are cropped before the quote.',
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS}>
      <GuideHero
        eyebrow="Deliverables"
        title="Ad campaign deliverables: every film, cutdown and still, by channel"
        dek="For the brand or marketing manager writing the deliverables list into a brief, who needs to know what each channel asks for before a studio quotes."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          A campaign&apos;s deliverables list names every file the campaign needs: the hero film and each cutdown, in
          every aspect ratio and length the channels accept, the stills for feeds, stores, display and billboards, and the
          extras (captions, textless versions, audio stems, thumbnails). Write it before production starts. In AI
          production an extra ratio or length can mean new generations rather than a crop, so the list sets both the plan
          and the price.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="Video" title="Video deliverables, channel by channel">
        <GuideTable
          caption={
            <>
              From <a href={YT_FORMATS} rel="noopener">Google Ads video formats</a> and{' '}
              <a href={YT_SPECS} rel="noopener">video specs</a>, <a href={YT_TV} rel="noopener">YouTube TV ad lengths</a>,{' '}
              <a href={META_REELS} rel="noopener">Meta&apos;s Reels</a> and <a href={META_FEED} rel="noopener">Feed</a>{' '}
              ad guides, <a href={TIKTOK_INFEED} rel="noopener">TikTok In-Feed ads</a> and{' '}
              <a href={PRIME_VIDEO} rel="noopener">Amazon&apos;s Prime Video ad specs</a>, checked September 2026.
            </>
          }
          head={['Channel', 'Ratio and size', 'Length']}
          rows={[
            ['YouTube skippable in-stream', '16:9 at 1920 x 1080 recommended; 9:16 and 1:1 accepted', 'No maximum; under 3 minutes recommended; skippable after 5 seconds'],
            ['YouTube bumper', '16:9', 'Up to 6 seconds, not skippable'],
            ['YouTube non-skippable', '16:9', '15 to 60 seconds, depending on the campaign type'],
            ['YouTube TV (connected TV)', '16:9', '6, 15, 30 or 60 seconds, within one second of the length'],
            ['Prime Video', '16:9, at least 1920 x 1080', '15, 30, 45 or 60 seconds'],
            ['Instagram and Facebook Reels, Stories', '9:16 at 1440 x 2560; keep 14% top, 35% bottom, 6% sides clear', 'Up to 15 minutes on Instagram Reels'],
            ['Facebook Feed', '4:5 at 1440 x 1800', 'Up to 241 minutes'],
            ['TikTok In-Feed', '9:16 recommended, at least 540 x 960', 'Up to 10 minutes for auction ads'],
          ]}
        />
        <p>
          For broadcast, sound is a deliverable too. In the US the{' '}
          <a href={CALM_ACT} rel="noopener">CALM Act</a> directed the FCC to make the ATSC A/85 loudness practice
          mandatory for TV stations and pay-TV distributors, and in Europe broadcasters work to{' '}
          <a href={EBU_R128} rel="noopener">EBU R 128</a>,
          which targets -23 LUFS. Ask for a broadcast mix measured to the standard of the country where the ad airs.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Stills" title="Stills deliverables, channel by channel" alt>
        <GuideTable
          caption={
            <>
              From <a href={META_REELS} rel="noopener">Meta&apos;s ads guide</a>,{' '}
              <a href={DEMAND_GEN} rel="noopener">Google Demand Gen</a> and{' '}
              <a href={PMAX} rel="noopener">Performance Max</a> image specs, <a href={LAMAR} rel="noopener">Lamar</a> and{' '}
              <a href={OUTFRONT} rel="noopener">OUTFRONT</a>, checked September 2026.
            </>
          }
          head={['Placement', 'Size', 'Note']}
          rows={[
            ['Meta Feed image', '4:5 at 1440 x 1800', 'The same frame as the 4:5 video, so the campaign reads as one'],
            ['Meta Stories and Reels image', '9:16 at 1440 x 2560', 'Same safe zone as the video'],
            ['Google Demand Gen and Performance Max', '1200 x 628, 1200 x 1200 and 960 x 1200; JPG or PNG up to 5 MB', 'Keep key content in the center 80%; include one image per ratio without text'],
            ['Store and marketplace', 'Set by each marketplace', 'Main images usually on a plain white background; check each rulebook'],
            ['Digital billboards', 'Set per screen by the media owner', 'Lamar rotates ads every 6 to 8 seconds; about seven words or fewer'],
            ['Key visual', 'A large master, wide and tall', 'The frame the site hero, press and out-of-home crop from'],
          ]}
        />
      </GuideSection>

      <GuideSection eyebrow="The extras" title="The deliverables people forget">
        <ul>
          <li>
            <strong>Captions</strong>, as a sidecar file and burned in, for everyone who watches with the sound off.
          </li>
          <li>
            <strong>A textless version</strong> of every film, so a new price, offer or language needs only a new
            title pass.
          </li>
          <li>
            <strong>Audio stems</strong>: voice, music and effects as separate files.
          </li>
          <li>
            <strong>End cards</strong> with and without the price, legal line or URL.
          </li>
          <li>
            <strong>Thumbnails and cover frames</strong> for YouTube, Reels and TikTok, chosen by you rather than left to
            the platform.
          </li>
          <li>
            <strong>Clean stills</strong>: every photo with type on it, also delivered without.
          </li>
          <li>
            <strong>Licenses in writing</strong>: music, voice and any real likeness, with territories and dates.
          </li>
          <li>
            <strong>AI disclosure settings</strong> for each platform. See{' '}
            <Link href="/guides/ai-video-quality-control">AI video quality control</Link>.
          </li>
        </ul>
      </GuideSection>

      <GuideSection eyebrow="Template" title="How to write the deliverables list" alt>
        <p>One row per file. A made-up launch, as an example:</p>
        <GuideTable
          caption="An example deliverables list for a made-up launch. Copy the columns; replace the rows."
          head={['ID', 'Asset', 'Channel', 'Ratio and size', 'Length', 'Text']}
          rows={[
            ['F01', 'Hero film', 'YouTube, connected TV', '16:9, 1920 x 1080', '30 s', 'Supers on; textless too'],
            ['F02', 'Cutdown', 'YouTube bumper', '16:9, 1920 x 1080', '6 s', 'End card only'],
            ['F03', 'Vertical cut', 'Reels, TikTok, Shorts', '9:16, 1440 x 2560', '15 s', 'Captions burned in'],
            ['F04', 'Feed cut', 'Facebook Feed', '4:5, 1440 x 1800', '15 s', 'Captions burned in'],
            ['S01', 'Key visual', 'Site hero, press, billboard', 'Wide and tall masters', 'Still', 'Clean and with headline'],
            ['S02 to S07', 'Feed stills', 'Meta, Google Demand Gen', '4:5, 1:1, 1.91:1', 'Still', 'Three with text, three without'],
            ['S08 to S12', 'Store photos', 'Product page, marketplaces', 'Square masters', 'Still', 'None'],
          ]}
        />
        <p>
          Each row gets priced. A version made for its own frame costs more than a crop and looks better, and that choice
          belongs in the quote, before anyone starts the edit. How each row turns into a budget line is in the{' '}
          <Link href="/guides/commercial-production-budget-template">commercial production budget template</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Why it matters" title="Why the list matters more in AI production">
        <p>
          On a shoot, a vertical version can be framed on the day, with a second camera or a second setup. In AI production
          it is often a new generation of every shot with a face or the product in it, because a 9:16 crop from a 16:9
          frame keeps under a third of its width. Type is set in the edit rather than in the generated frames, so a textless master costs
          little if it is asked for at the start and a lot if it is asked for after the grade.
        </p>
        <p>
          {PRODUCTION.summary} {studio} quotes each film from the brief, and versions are one of the things that move the
          number: the cutdowns, ratios, languages and hooks a channel plan needs. More on what an AI commercial delivers is
          on <Link href="/ai-commercial-production">AI commercial production</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The stills rows" title="Where Overs comes in" alt>
        <p>
          Most of the files in the example list above are stills, and {OVERS.name} plans stills the way this page does:
          by deliverable. {OVERS.name} is {OVERS.plain}. It is {OVERS.relation}, and it was built on {OVERS.origin}.
        </p>
        <p>
          You tell {OVERS.name} what the set is for (store page, feed ads, editorial, hero, banner, billboard), and the
          shot plan covers each one, in sets of 5, 8, 10 or 12 photos. Headlines, sublines and buttons go on in a separate
          typography step that keeps the clean version, so every still arrives with and without type. You see the plan and
          an estimated cost before anything renders, and the export carries the whole campaign with a record of the
          prompt, model and reference pictures behind each photo. A client review file, one HTML file, can go to the
          client, and their decisions come back into {OVERS.name}.
        </p>
        <p>
          At published model prices a usable photo costs {STILLS_MATH.perUsablePhotoLow} to{' '}
          {STILLS_MATH.perUsablePhotoHigh} in AI fees. The free plan makes {OVERS.freePhotosPerMonth} photos a month, with
          the AI billed to your own OpenRouter key and no markup from {OVERS.name}. How to size one campaign for every
          placement is in{' '}
          <a href={OVERS_SIZES_GUIDE} rel="noopener">
            Overs&apos; guide to adapting one campaign to every ad size
          </a>
          . Fill the stills rows of your list before the film is cut;{' '}
          <a href={OVERS.url} rel="noopener">
            Overs is free to start at www.overs.studio
          </a>
          .
        </p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X make your deliverables?"
        hire={[
          'A brand that needs the film, its cutdowns and every ratio from one world, made for each frame rather than cropped.',
          'A marketing team launching across YouTube, Meta, TikTok and connected TV at once.',
          'An agency producer who needs a partner to quote against a written deliverables list.',
        ]}
        instead={[
          'You only need finished assets resized: a motion-graphics designer or a resizing tool costs less.',
          'You only need store and feed photos: Overs, or a product photographer.',
          'The campaign is one social post: make it in-house.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/guides/commercial-production-budget-template', title: 'Budget template', note: 'Turning each deliverable into a budget line.' },
          { href: '/guides/video-vs-static-ads', title: 'Video vs static ads', note: 'How to split the list between film and stills.' },
          { href: '/guides/ai-video-quality-control', title: 'AI video quality control', note: 'The checks each file passes before delivery.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'What an AI commercial delivers and costs.' },
        ]}
      />

      <GuideCta title="Send the list" body="Send your deliverables list, or the channels and dates, and get a quote row by row." />
    </Guide>
  )
}
