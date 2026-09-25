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
import { AGENCY_RENDERS, OVERS } from '@/lib/seo/overs'

const PAGE = {
  path: '/guides/ai-video-character-consistency',
  title: 'AI Video Character Consistency for Brands',
  description:
    'How to keep the same person in every shot of an AI brand film and in the campaign photos around it: why faces drift, the character sheet, what Veo 3.1 and Gemini Omni Flash offer, and the consent and disclosure rules for synthetic people in ads.',
  published: '2026-09-24',
  updated: '2026-09-24',
  keywords: [
    'character consistency ai video',
    'how to maintain character consistency in ai video',
    'consistent character ai video',
    'same character in ai video and photos',
    'ai character consistency',
    'synthetic performer disclosure',
  ],
}

const studio = SITE.name
const surf = AGENCY_RENDERS.byCampaign.find((c) => c.job.startsWith('surf'))!
const gummy = AGENCY_RENDERS.byCampaign.find((c) => c.job.startsWith('gummy'))!
const VEO_DOCS = 'https://ai.google.dev/gemini-api/docs/veo'
const OMNI_DOCS = 'https://ai.google.dev/gemini-api/docs/omni'
const VIDEO_OVERVIEW = 'https://ai.google.dev/gemini-api/docs/video'
const KLING_GUIDE = 'https://kling.ai/blog/ai-character-consistency-guide'
const NY_SYNTHETIC = 'https://www.nysenate.gov/legislation/bills/2025/S8420/amendment/A'
const NY_FWA = 'https://dol.ny.gov/new-york-state-fashion-workers-act-faqs'
const YOUTUBE_DISCLOSURE = 'https://support.google.com/youtube/answer/14328491'
const OVERS_MODEL_GUIDE = 'https://www.overs.studio/guides/how-to-keep-the-same-model-in-ai-photos'

const FAQS = [
  {
    q: 'How do you keep the same character in an AI video?',
    a: 'Cast before you shoot. Make a character sheet of the person (front, three-quarter, side, back and face close-ups, in the exact wardrobe, on a plain background), approve it, and give it to every shot as the first reference, using the video model\'s reference feature or an approved first frame. Describe the face, hair and clothes in the same words every time, check every take against the sheet, and regenerate the takes that drift.',
  },
  {
    q: 'What is a character sheet in AI video?',
    a: 'A character sheet is one image, or a small set, showing the same person from several angles with face close-ups, wearing the exact wardrobe, on a plain background, with no words on it. It is approved before any scene is made and then sent as a reference with every shot and every photo, so the model draws the same person each time.',
  },
  {
    q: 'Which AI video models keep characters consistent?',
    a: "Most current models take reference images for this. As of September 2026, Google's Veo 3.1 accepts up to three reference images of one person, character or product; Google's Gemini Omni Flash takes image references and up to three short video clips as references; and Kling offers a character reference feature. No model guarantees a face across a long film, so every take still gets checked.",
  },
  {
    q: 'Can the same AI character appear in the film and the campaign photos?',
    a: 'Yes, if both are made from the same approved character sheet and the same wardrobe and product references, and the photos are graded to match the film. The usual failure is two teams casting separately, one for the film and one for the photos, so the key visual shows a slightly different person from the ad.',
  },
  {
    q: 'Do you have to disclose an AI-generated person in an ad?',
    a: 'Sometimes. In New York, a law signed on December 11, 2025 and in force 180 days later requires an advertiser who knows an ad uses a synthetic performer to disclose it conspicuously, with civil penalties of $1,000 for a first violation and $5,000 after that. Platforms such as YouTube ask for disclosure of realistic AI-made content. Your legal team decides for each ad; this is not legal advice.',
  },
  {
    q: "Can an AI video use a real person's face?",
    a: "Only with that person's permission, in writing, for the specific use. In New York, the Fashion Workers Act, in force since June 19, 2025, requires clear written approval before a client creates or uses a model's digital replica, stating the scope, purpose, rate of pay and how long it will be used. A synthetic face should not resemble a real, recognizable person. This is not legal advice.",
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS}>
      <GuideHero
        eyebrow="Character consistency"
        title="Character consistency in AI video: one face in every shot and every photo"
        dek="For the brand or marketing lead whose campaign has a face: a hero character who has to be the same person in the brand film, the cutdowns and the campaign photos."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          A video model draws the person again in every shot, so faces, hair and clothes drift unless something holds
          them. The fix is to cast before anything else: make a character sheet, one person from several angles in the
          exact wardrobe on a plain background, approve it, and give it to every shot and every photo as the first
          reference. Then check each take against the sheet and regenerate the ones that drift. If the person is real, or
          looks like someone real, you also need consent in writing, and in New York a synthetic person in an ad has to be
          disclosed.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="The problem" title="Why faces drift between AI shots">
        <p>
          Nothing carries from one generation to the next unless you send it again. Each take is a new drawing made from
          the prompt and the reference images, so small differences pile up: the jaw softens, the hairline moves, the eyes
          change color, a jacket loses its zip. In a 30-second commercial that is a handful of shots. In a 90-second brand
          film it can be dozens, and the audience sees them all in a row.
        </p>
        <p>
          The model makers say as much. Kling&apos;s own{' '}
          <a href={KLING_GUIDE} rel="noopener">guide to character consistency</a> (July 2026) says setting up a
          character normally takes around 10 to 20 attempts and two to three hours before any fine-tuning. Google&apos;s{' '}
          <a href={VIDEO_OVERVIEW} rel="noopener">video overview</a> lists character consistency among the reasons to use
          its newest model, Gemini Omni Flash, over Veo 3.1.
        </p>
        <GuideTable
          caption="What drifts, in the order a viewer tends to notice it."
          head={['What drifts', 'What the viewer sees', 'What holds it']}
          rows={[
            ['Face shape and age', 'A cousin, or the same person ten years older', 'The character sheet as the first reference in every shot'],
            ['Hair and skin', 'A new hairline, a lighter skin tone', 'The same words for hair and skin in every prompt; one grade'],
            ['Wardrobe details', 'A zip becomes buttons; a logo moves', 'The outfit on the sheet; a garment reference for close-ups'],
            ['Build and height', 'Taller in the wide than in the medium shot', 'The full-body views on the sheet'],
            ['Voice', 'A different voice in the next line', 'One recorded or licensed voice, laid in the edit'],
          ]}
        />
      </GuideSection>

      <GuideSection eyebrow="The fix" title="The character sheet, and what 20 attempts at one showed" alt>
        <p>
          A character sheet shows one person from the front, three-quarter, side and back, with close-ups of the face, in
          the exact wardrobe, on a plain background. It is approved before any scene exists, because a wrong face on the
          sheet is a wrong face in every shot built on it.
        </p>
        <p>
          The first-hand numbers come from 100creatives, the agency from the same founder. On a 2026 surf apparel job with
          one model in studio, cliff and ocean scenes, the character sheet took 20 attempts. The first was the longest
          prompt, with four reference images and a detailed list of what had to stay identical; it was not kept. Later
          attempts added references, up to eight. The one that was kept, the twentieth, used five well-chosen references
          and a short prompt, and it had to say &ldquo;no words on the image&rdquo;, because character sheets tend to
          come back with labels printed on them. The full story is in{' '}
          <a href={OVERS_MODEL_GUIDE} rel="noopener">
            Overs&apos; guide to keeping the same model in every photo
          </a>
          .
        </p>
        <p>
          On that surf job, where one person had to look the same in the studio, on a cliff and in the sea, a usable photo
          took {surf.perKeeper} renders; on a gummy supplement ad with no person in it, {gummy.perKeeper}.
        </p>
      </GuideSection>

      <GuideSection eyebrow="In the film" title="Holding the character through a film">
        <ol>
          <li>
            <strong>Use the model&apos;s reference feature.</strong>{' '}
            <a href={VEO_DOCS} rel="noopener">Veo 3.1</a> takes up to three reference images of a single person,
            character or product and keeps the subject&apos;s appearance in the clip; clips with references are 8
            seconds long. <a href={OMNI_DOCS} rel="noopener">Gemini Omni Flash</a> takes image references and up to three
            video clips of up to three seconds each, which Google says work best for likenesses.
          </li>
          <li>
            <strong>Start the shot from an approved still.</strong> An approved first frame gives the model the face as the
            picture it starts from, on top of any reference. See{' '}
            <Link href="/guides/first-frame-last-frame-ai-video">first and last frames in AI video</Link>.
          </li>
          <li>
            <strong>Repeat the same words.</strong> The face, hair and wardrobe lines are copied into every prompt
            unchanged. Change one adjective and the model may draw someone new.
          </li>
          <li>
            <strong>Board around the weak shots.</strong> Long, emotional close-ups drift most. Where the story allows,
            play the moment wider and save close-ups for the shots that need them.
          </li>
          <li>
            <strong>Check every take against the sheet.</strong> Put the take and the sheet side by side before a shot
            goes into the edit, and regenerate the ones that drift.
          </li>
        </ol>
        <p>
          Two limits to plan around: Veo 3.1 allows only adults in shots built from images or references, and Google does
          not support uploading and editing images of certain recognizable people in Gemini Omni Flash.
        </p>
        <p>
          {PRODUCTION.summary} In the {studio} pipeline, casting is fixed in the brand-world stage, and faces get the most
          generation passes. The stage-by-stage process is on{' '}
          <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The campaign" title="One person across the film and the photos" alt>
        <p>
          The brand film, its cutdowns, the key visual and the social photos all need the same person. The way to get
          that is to make them from one source: the approved character sheet, the same wardrobe and product references,
          and the same palette and light lines from the{' '}
          <Link href="/guides/brand-world-building">campaign&apos;s world bible</Link>. When the film is graded, grade the
          photos to match, so a frame from the ad and the billboard photo sit side by side without a jump.
        </p>
        <p>
          The mistake to avoid is casting twice: an agency makes the photos with one tool and one prompt, the studio makes
          the film with another, and the key visual ends up with a slightly different person from the ad.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Rights" title="Consent, likeness and disclosure">
        <p>
          <strong>A synthetic person.</strong> A face the model invented has no one to sign a model release, but it should
          not resemble a real, recognizable person. Check the approved sheet for that before production.
        </p>
        <p>
          <strong>A real person.</strong> Your founder, an ambassador or a model&apos;s digital twin needs written
          consent for the specific use. In New York, the{' '}
          <a href={NY_FWA} rel="noopener">Fashion Workers Act</a>, in force since June 19, 2025, requires clear written
          approval before a client creates or uses a model&apos;s digital replica, stating the scope, purpose, rate of pay
          and how long it will be used.
        </p>
        <p>
          <strong>Disclosure.</strong> New York&apos;s{' '}
          <a href={NY_SYNTHETIC} rel="noopener">bill S8420A</a>, signed on December 11, 2025 and in force 180 days later,
          requires an advertiser who knows an ad uses a synthetic performer to disclose it conspicuously; the civil
          penalty is $1,000 for a first violation and $5,000 after that. Ads for expressive works such as films, audio
          ads and AI used only to translate a human performer are exempt.{' '}
          <a href={YOUTUBE_DISCLOSURE} rel="noopener">YouTube</a> asks for disclosure of realistic content made or
          meaningfully altered with AI. Checked September 2026. This is not legal advice; your legal team decides for
          each ad.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The photo side" title="Where Overs comes in" alt>
        <p>
          The character sheet is a still, and so are the key visual and the campaign photos around the film. Stills are
          what {OVERS.name} makes. {OVERS.name}, {OVERS.relation}, is {OVERS.plain}. It grew out of {OVERS.origin}, the
          surf job above included.
        </p>
        <p>
          In {OVERS.name}, casting comes first. For a product that is worn or held, it makes a character sheet before
          anything else: one model, several angles and close-ups, wearing your exact product, on a plain background. You
          approve it, and every later photo with a person in it uses that same model. Approved sheets can be reused as a
          talent library for the next campaign, and packaged products can use a cast too. Each photo gets only the
          reference pictures it needs, in order, starting with the character sheet, and you see the shot plan and an
          estimated cost before anything renders.
        </p>
        <p>
          The free plan makes {OVERS.freePhotosPerMonth} photos a month, and the AI costs {OVERS.aiCostPerPhoto} a photo
          on your own OpenRouter key, with no markup from {OVERS.name}.{' '}
          <a href={OVERS.url} rel="noopener">
            Start free with Overs at www.overs.studio
          </a>{' '}
          and approve your cast on a sheet before the first frame of the film is made.
        </p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X cast your film?"
        hire={[
          'A brand whose campaign has a recurring character who has to hold across a brand film, its cutdowns and the key visuals.',
          'A marketing lead who wants a synthetic cast that looks like no one real, with the disclosure question handled with their legal team.',
          'A pharma, lab or medical marketer who needs a patient or clinician character that is not a real person.',
        ]}
        instead={[
          'The face has to be a real person, such as your founder, an ambassador or a customer: film them, or license a digital twin with their written consent.',
          'The film rests on long dialogue scenes carried by one performance in close-up: a live-action shoot still holds a performance better.',
          'You need the same character in hundreds of social posts a month: a self-serve tool with a saved character costs less than a studio.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/guides/first-frame-last-frame-ai-video', title: 'First and last frames', note: 'Starting each shot from an approved still.' },
          { href: '/guides/brand-world-building', title: 'Brand world building', note: 'The world bible the cast lives in.' },
          { href: '/guides/ai-video-quality-control', title: 'AI video quality control', note: 'Checking faces, hands and continuity before the film airs.' },
          { href: '/ai-brand-film-agency', title: 'AI brand film production', note: 'Why the same character across 30 shots is the hardest part of a brand film.' },
          { href: '/ai-video-production-healthcare', title: 'AI video for pharma and healthcare', note: 'Portraying patients and clinicians with AI, and what MLR asks.' },
        ]}
      />

      <GuideCta title="Tell us who is in the film" body="Send the character you have in mind, the product, and where the film and photos will run." />
    </Guide>
  )
}
