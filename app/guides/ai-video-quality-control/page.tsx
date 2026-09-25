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
import { OVERS } from '@/lib/seo/overs'

const PAGE = {
  path: '/guides/ai-video-quality-control',
  title: 'AI Video Quality Control Before It Airs',
  description:
    'An AI video quality control checklist for commercials and brand films: faces, hands, the product, text, continuity, physics, sound, loudness, delivery specs, AI labels and rights, who checks what, and the same checks for the campaign stills.',
  published: '2026-09-24',
  updated: '2026-09-24',
  keywords: [
    'ai video quality control',
    'ai video qa checklist',
    'how to check ai generated video',
    'ai commercial review checklist',
    'ai video artifacts',
    'ai generated ad disclosure rules',
  ],
}

const studio = SITE.name
const RUNWAY_GEN45 = 'https://runway.com/research/introducing-runway-gen-4.5'
const KLING_GUIDE = 'https://kling.ai/blog/ai-character-consistency-guide'
const VEO_DOCS = 'https://ai.google.dev/gemini-api/docs/veo'
const META_REELS = 'https://www.facebook.com/business/ads-guide/update/image/instagram-reels'
const CALM_ACT = 'https://www.congress.gov/111/plaws/publ311/PLAW-111publ311.htm'
const ATSC_A85 = 'https://www.atsc.org/news/atsc-modernizes-industry-audio-loudness-guidance-with-revision-to-a-85-recommended-practice/'
const EBU_R128 = 'https://tech.ebu.ch/publications/r128'
const YOUTUBE_DISCLOSURE = 'https://support.google.com/youtube/answer/14328491'
const GOOGLE_ADS_LABEL = 'https://support.google.com/google-ads/answer/17140115?hl=en'
const META_ADS_AI = 'https://about.fb.com/news/2025/02/gen-ai-transparency-metas-ads-products/'
const TIKTOK_AIGC = 'https://ads.tiktok.com/help/article/tiktok-ads-policy-misleading-and-false-content'
const NY_SYNTHETIC = 'https://www.nysenate.gov/legislation/bills/2025/S8420/amendment/A'
const EU_ART50 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50'
const OVERS_QA_GUIDE = 'https://www.overs.studio/guides/ai-image-qa-checklist'

const FAQS = [
  {
    q: 'How do you check an AI-generated video before it airs?',
    a: 'Shot by shot, then as a finished cut. Compare every shot with its board, the character sheet and the real product at full size, stepping frame by frame through hands and product contact. Then check sound sync, loudness and the delivery specs of each channel, set the AI labels each platform and market requires, and confirm the licenses behind every model, track, voice and likeness.',
  },
  {
    q: 'What are the most common artifacts in AI video?',
    a: "Faces that drift between shots, hands with the wrong number of fingers or fused to objects, product labels whose letters change, objects that vanish or appear, and physics that runs out of order. Runway lists three of these for its own Gen-4.5 model: objects that disappear after being hidden, effects that come before their causes, and actions that succeed when they should not.",
  },
  {
    q: 'Do AI-generated ads need a label?',
    a: 'Often. TikTok requires its AIGC label or a clear disclaimer on ads with significant AI-generated content and rejects or restricts undisclosed ones. Google Ads adds visible AI overlays for campaigns targeting the EU, India and New York when assets are marked as AI-made. New York requires disclosure of synthetic performers in ads, and the EU AI Act requires deep fakes to be disclosed from August 2, 2026. This is not legal advice.',
  },
  {
    q: 'Who should sign off an AI commercial?',
    a: 'The studio checks every shot before the edit. The brand checks the look, the product and the cast. Legal, and MLR in pharma and medical work, checks every claim, including what the product is shown doing, and the AI labels. The media team checks the specs and the label settings in each ad platform. Fix the number of review rounds in the contract.',
  },
  {
    q: 'Can I remove the watermark from AI video?',
    a: "Leave it in. Google's Veo and Gemini Omni Flash put an invisible SynthID watermark in every video they make. Meta and Google both say they use industry signals like these to label AI-made ads, and the EU AI Act requires AI providers to mark their outputs in a machine-readable way. Keep other provenance data in the files as well.",
  },
  {
    q: 'How does Ruminate X check its films?',
    a: `Each shot is generated, checked against its board and generated again until it holds, with faces, hands and the product getting the most passes. The real logo, label and on-screen text are set in the edit from the brand's files, and every frame is reviewed by a human editor before delivery. Every frame ${SITE.name} delivers is made with generative AI.`,
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
    <Guide page={PAGE} faqs={FAQS} trail={TRAIL}>
      <GuideHero
        eyebrow="Quality control"
        title="AI video quality control: the checks before an AI commercial airs"
        dek="For the brand manager, agency producer or legal reviewer signing off an AI-made commercial or brand film, who wants a checklist that catches what generated footage gets wrong."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          Quality control for an AI commercial is a shot-by-shot check against the boards, the character sheet and the
          real product, then a technical and legal pass on the finished cut. Check faces, hands, the product and its
          label, any text, continuity between cuts and physics; then sound, loudness and each channel&apos;s specs; then
          the AI labels each platform and market requires and the licenses behind every model, track and voice. The
          campaign stills get the same checks at full size.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="Why it is different" title="Why AI footage needs its own checks">
        <p>
          A live-action camera records what was in front of it. A video model draws every frame, so it fails in ways a
          camera cannot: a hand gains a finger for three frames, one letter of a label changes mid-shot, a cup that goes
          behind a shoulder never comes back. The model makers publish some of this themselves.{' '}
          <a href={RUNWAY_GEN45} rel="noopener">Runway&apos;s Gen-4.5 announcement</a> lists objects that disappear or
          appear across frames, effects that come before their causes, such as a door opening before the handle is
          pressed, and actions that succeed when they should not, and calls these common to AI video models.{' '}
          <a href={KLING_GUIDE} rel="noopener">Kling&apos;s own guide</a> puts setting up one consistent character at
          around 10 to 20 attempts.
        </p>
        <p>
          So the check runs frame by frame where it matters, and it runs before the edit, because a bad shot found after
          the grade costs a regeneration, an edit, a mix and a grade.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Pass one" title="The shot-by-shot checklist" alt>
        <GuideTable
          caption="Run it on every shot before it goes into the edit, at full size, on a large screen and again on a phone."
          head={['Check', 'What to look for', 'How to check']}
          rows={[
            ['Faces', 'The same person as the character sheet; eyes, teeth, ears, hairline', 'Shot and sheet side by side; watch close-ups at half speed'],
            ['Hands', 'Finger count, grip, a hand fused to an object', 'Step frame by frame through every touch'],
            ['Product and label', 'Shape, color, logo, letters, count', 'Against the reference pack; eyedropper the brand colors'],
            ['Text on screen', 'Spelling, legal lines, prices', 'All type set from files in the edit; proofread every super'],
            ['Continuity', 'Wardrobe, props, light direction, time of day between cuts', 'Scrub cut to cut; line frames up side by side'],
            ['Objects', 'Things that vanish or appear', 'Watch the background, not only the subject'],
            ['Cause and effect', 'Doors opening before the handle turns; a pour before the tilt', 'Watch every action at half speed'],
            ['Crowds and extras', 'Melted faces, duplicated people', 'Pause on every wide shot'],
            ['Texture', 'Flicker, smearing on fast moves, surfaces that crawl', 'Full size, on a good screen'],
          ]}
        />
        <p>
          The product row deserves its own page: <Link href="/guides/ai-commercial-product-accuracy">product and label
          accuracy in AI commercials</Link>. The faces row starts with the cast: see{' '}
          <Link href="/guides/ai-video-character-consistency">character consistency in AI video</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Pass two" title="The technical pass">
        <ul>
          <li>
            <strong>Resolution and frame rate.</strong> Know what the model delivered before anyone upscales it:{' '}
            <a href={VEO_DOCS} rel="noopener">Veo 3.1</a> outputs 720p, 1080p or 4K at 24 frames a second. Check upscaled
            masters for halos and invented detail.
          </li>
          <li>
            <strong>Ratios and safe zones.</strong> Every version at its own ratio, with text and logos inside each
            platform&apos;s safe zone; for Reels and Stories, <a href={META_REELS} rel="noopener">Meta</a> asks for about
            14% at the top, 35% at the bottom and 6% at each side to be kept clear.
          </li>
          <li>
            <strong>Sound.</strong> Lip-sync on any dialogue, voice and music levels, no clipped words at cuts.
          </li>
          <li>
            <strong>Loudness.</strong> US broadcast delivery is measured to ATSC A/85, which the{' '}
            <a href={CALM_ACT} rel="noopener">CALM Act</a> had the FCC make mandatory for stations and pay-TV
            distributors; ATSC <a href={ATSC_A85} rel="noopener">revised it in July 2026</a> with new guidance for
            streaming. European broadcasters work to <a href={EBU_R128} rel="noopener">EBU R 128</a>, which targets -23
            LUFS.
          </li>
          <li>
            <strong>Captions.</strong> Word for word against the final mix, including legal lines.
          </li>
          <li>
            <strong>Files.</strong> Codec, size and length limits for each channel. See{' '}
            <Link href="/guides/ad-campaign-deliverables">ad campaign deliverables</Link>.
          </li>
        </ul>
      </GuideSection>

      <GuideSection eyebrow="Pass three" title="Labels and rights" alt>
        <GuideTable
          caption={
            <>
              From <a href={YOUTUBE_DISCLOSURE} rel="noopener">YouTube</a>,{' '}
              <a href={GOOGLE_ADS_LABEL} rel="noopener">Google Ads</a>, <a href={META_ADS_AI} rel="noopener">Meta</a>,{' '}
              <a href={TIKTOK_AIGC} rel="noopener">TikTok</a>, the <a href={NY_SYNTHETIC} rel="noopener">New York Senate</a>{' '}
              and the <a href={EU_ART50} rel="noopener">EU AI Act service desk</a>, checked September 2026. Not legal advice.
            </>
          }
          head={['Where', 'The rule', 'What to do']}
          rows={[
            ['YouTube', 'Disclose realistic content made or meaningfully altered with AI', 'Set the disclosure when uploading realistic AI scenes'],
            ['Google Ads', 'An AI label setting; campaigns targeting the EU, India and New York get a visible overlay on AI-marked assets', 'Mark AI assets; Google may also label them itself'],
            ['Meta', 'AI info labels on ads made with its own AI tools; photorealistic AI people get the label next to Sponsored; third-party AI detected through industry signals', 'Expect labels; keep provenance data in the files'],
            ['TikTok', 'Significant AI content needs the AIGC label or a clear disclaimer; undisclosed ads are rejected or restricted', 'Label every AI-made ad'],
            ['New York', 'Advertisers who know an ad uses a synthetic performer must disclose it conspicuously', 'Disclose AI-made people in ads that run there'],
            ['European Union', 'From August 2, 2026, deep fakes must be disclosed by those who use AI professionally', 'Ask counsel which shots count as deep fakes'],
          ]}
        />
        <p>
          <strong>Rights.</strong> Before delivery, confirm in writing that the video model&apos;s terms allow commercial
          use of the outputs, that the music license covers every channel and territory in the media plan, that the voice
          is licensed, and that any real person&apos;s likeness has written consent. Leave provenance watermarks such as
          Google&apos;s SynthID in place.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Who signs" title="Who checks what">
        <GuideTable
          caption="A sign-off chain for an AI commercial. Fix the number of rounds in the contract."
          head={['Stage', 'Who', 'What they sign']}
          rows={[
            ['Every shot, before the edit', 'The studio', 'The shot-by-shot checklist'],
            ['The cut', 'The brand', 'The look, the cast, the product, the story'],
            ['The cut and every version', 'Legal, and MLR in pharma and medical work', 'Claims, what the product is shown doing, labels'],
            ['The files', 'The media team', 'Specs, safe zones and label settings in each platform'],
          ]}
        />
        <p>
          {PRODUCTION.summary} In the {studio} pipeline, each shot is generated, checked against its board and generated
          again until it holds; faces, hands and the product get the most passes; the real logo, label and on-screen text
          are set in the edit from the brand&apos;s files; and every frame is reviewed by a human editor before delivery.
          The full pipeline is on <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The stills" title="Where Overs comes in" alt>
        <p>
          The key visual and the campaign photos need the same scrutiny as the film, and {OVERS.name} builds much of it
          into making them. It is {OVERS.relation}: {OVERS.plain}, built on {OVERS.origin}.
        </p>
        <p>
          Before anything renders, a quality check step reads each planned photo against your brand rules; it proofreads
          and never rewrites the art direction. On Pro and Team, a reviewer then checks each finished photo against the
          references before you see it, and can retry on its own up to a limit you set. Then you approve a photo, ask for
          changes, or reject it with a reason; in a shared
          workspace {OVERS.name} records who decided, comments sit beside the photo, and the decisions become brand memory
          for later sets. A wrong photo can be remade on its own with a note, in 1 to 4 versions side by side. The export
          carries a record of the prompt, model and reference pictures behind each photo, a paper trail for legal review.
        </p>
        <p>
          The free plan makes {OVERS.freePhotosPerMonth} photos a month, with the AI billed to your own OpenRouter key at{' '}
          {OVERS.aiCostPerPhoto} a photo and no markup from {OVERS.name}. For the checks themselves, see{' '}
          <a href={OVERS_QA_GUIDE} rel="noopener">
            Overs&apos; QA checklist for AI images
          </a>
          .{' '}
          Put every campaign still through review before it goes live:{' '}
          <a href={OVERS.url} rel="noopener">
            start on Overs free at www.overs.studio
          </a>
          .
        </p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X make and check your film?"
        hire={[
          'A brand that needs an AI commercial or brand film checked shot by shot before its legal team sees it.',
          'A pharma, pharmacy, lab or medical marketer whose AI film goes through MLR review.',
          'An agency producer who needs a partner that delivers every version to spec, with the labels settled.',
        ]}
        instead={[
          'You need an independent audit of a film another studio made: a post-production house or a broadcast QC service fits better.',
          'Your ad runs on broadcast TV and needs a certified QC report for a clearance body: add a broadcast QC house to the chain.',
          'You only need stills checked: the checklist and Overs cover it.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/guides/ai-commercial-product-accuracy', title: 'Product and label accuracy', note: 'The product row of the checklist, in full.' },
          { href: '/guides/ai-video-character-consistency', title: 'Character consistency', note: 'The faces row, from casting to the last shot.' },
          { href: '/guides/ad-campaign-deliverables', title: 'Ad campaign deliverables', note: 'The specs the technical pass checks against.' },
          { href: '/ai-video-production-healthcare', title: 'AI video for pharma and healthcare', note: 'What MLR reviewers ask about AI footage.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'How an AI commercial is made.' },
        ]}
      />

      <GuideCta title="Send the cut, or the brief" body="Send the brief, the channels and your review process, and we will plan the checks with you." />
    </Guide>
  )
}
