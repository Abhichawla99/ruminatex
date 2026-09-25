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
import { AGENCY_RENDERS, OVERS, STILLS_MATH } from '@/lib/seo/overs'

const PAGE = {
  path: '/guides/first-frame-last-frame-ai-video',
  title: 'First and Last Frame AI Video for Commercials',
  description:
    'How first and last frame control works in AI video, why AI commercials start from approved stills, what Veo 3.1, Gemini Omni Flash and Kling support, what makes a clean first frame, and what a still costs next to a second of video.',
  published: '2026-09-24',
  updated: '2026-09-24',
  keywords: [
    'first frame last frame ai video',
    'start frame end frame ai video',
    'image to video first frame',
    'image to video first last frame',
    'first and last frame ai',
    'keyframes ai video',
    'seedance prompt image to video',
  ],
}

const VEO_DOCS = 'https://ai.google.dev/gemini-api/docs/veo'
const OMNI_DOCS = 'https://ai.google.dev/gemini-api/docs/omni'
const GEMINI_PRICING = 'https://ai.google.dev/gemini-api/docs/pricing'
const KLING_FRAMES = 'https://kling.ai/quickstart/ai-video-start-end-frames'
const KLING_3 = 'https://kling.ai/quickstart/klingai-video-3-model-user-guide'
const KLING_TERMS = 'https://kling.ai/docs/user-policy'
const RUNWAY_API = 'https://docs.dev.runwayml.com/guides/pricing/'
const LUMA_PRICING = 'https://lumalabs.ai/api/pricing'
const MINIMAX_DOCS = 'https://platform.minimax.io/docs/guides/video-generation'
const SORA_2 = 'https://developers.openai.com/api/docs/models/sora-2'
const KALSHI = 'https://tech.yahoo.com/ai/articles/ai-generated-ad-aired-during-150507375.html'
const OVERS_TEXT_GUIDE = 'https://www.overs.studio/guides/how-to-get-text-right-in-ai-images'

const FAQS = [
  {
    q: 'What is first frame last frame in AI video?',
    a: 'It is an image-to-video mode where you give the model two stills: the frame the shot starts on and the frame it ends on. The model generates the motion between them. With only a first frame, the model starts from your still and decides where the shot goes. Google calls the two-frame version interpolation; Kling calls it Start and End Frames.',
  },
  {
    q: 'Which AI video models support first and last frames?',
    a: "As of September 2026: Google's Veo 3.1 (a starting image plus a lastFrame image), Google's Gemini Omni Flash (images tagged FIRST_FRAME and LAST_FRAME), Kling 3.0 (Start & End Frames-to-Video), Luma Ray3.2 (start and end frames) and MiniMax H3 (first-frame and last-frame roles). Runway's Gen-4.5 API takes a first frame only. Check each vendor's documentation and terms before a project, because limits change with every model version.",
  },
  {
    q: 'Why do AI commercials start from stills?',
    a: "Because a still is cheap to remake and quick to approve, and a second of video is neither. At Google's published September 2026 prices, a 2K still from Nano Banana 2 costs about $0.10, and an 8-second 1080p shot from Veo 3.1 with audio costs $3.20. Approving the cast, the product and the composition on a still before paying for motion keeps rejected takes cheap.",
  },
  {
    q: 'How long can a first and last frame clip be?',
    a: "Short. Veo 3.1 makes clips of 4, 6 or 8 seconds; Kling 3.0 and MiniMax H3 go up to 15 seconds, though Kling's guide says start and end frames work best for transitions within 5 seconds. Longer shots are built by extending a clip or by cutting several shots together in the edit, each with its own first frame.",
  },
  {
    q: 'Can I use my campaign photos as first frames?',
    a: 'Often, if the photo is at the aspect ratio and resolution of the video, has no text or logo set into it, and leaves room in the frame for the planned camera move. A 4:5 feed photo cropped to 16:9 usually loses the top of the product or the head of the person, so make a separate first frame for each video ratio. You also need the rights to the photo, and people in it must be cleared for the new use.',
  },
  {
    q: 'How does Ruminate X plan the shots of an AI commercial?',
    a: `Every shot is boarded before generation, with its framing, movement and duration, and the client sees the beat sheet and shot list before a single frame is generated. Each shot is then generated, checked against its board and generated again until it holds; the pack shot, faces and hands get the most passes. Every frame ${SITE.name} delivers is made with generative AI, with no crew, set or location shoot.`,
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS}>
      <GuideHero
        eyebrow="Image to video"
        title="First frame, last frame: how an AI commercial starts as stills"
        dek="For the brand manager or agency producer approving an AI commercial, who is shown stills before any motion and wants to know what to look for in them."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          In image-to-video, the model starts a shot from a still you give it, the first frame, and if you give it a
          second still, the last frame, it generates the motion between the two. Google&apos;s Veo 3.1 and Gemini Omni
          Flash, Kling 3.0, Luma and MiniMax all offer it. It lets a brand approve the cast, the product and the composition on a still that
          costs cents, before paying for motion at Google&apos;s published $0.05 to $0.60 a second of video, and it is the
          most direct control a studio has over where a shot begins and ends.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="The modes" title="Four ways to start an AI video shot">
        <GuideTable
          caption="How much of the frame you decide in each mode. The more you decide before generation, the fewer takes you throw away."
          head={['Mode', 'What you give the model', 'What you control', 'Good for']}
          rows={[
            ['Text to video', 'A prompt', 'The idea; the model invents the frame', 'Exploring ideas, backgrounds, crowds'],
            ['Reference images', 'A prompt plus pictures of the person or product', 'Who and what appears; the model frames it', 'Keeping a face or a product across new scenes'],
            ['First frame', 'A prompt plus the opening still', 'The composition, cast, product and light of the first frame', 'Most commercial shots'],
            ['First and last frame', 'A prompt plus the opening and closing stills', 'Where the shot starts and where it lands', 'Reveals, transitions, landing on a pack shot'],
          ]}
        />
        <p>
          A commercial usually mixes all four. A studio might generate a mood shot of weather from text alone, then build
          every shot with a face or the product from an approved first frame, so the parts of the ad that carry the brand
          start from a picture someone signed off.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The models" title="What the main video models support" alt>
        <GuideTable
          caption={
            <>
              From each vendor&apos;s documentation and pricing page, checked September 2026:{' '}
              <a href={VEO_DOCS} rel="noopener">Veo 3.1</a>, <a href={OMNI_DOCS} rel="noopener">Gemini Omni Flash</a>,{' '}
              <a href={GEMINI_PRICING} rel="noopener">Gemini API pricing</a>,{' '}
              <a href={KLING_3} rel="noopener">Kling 3.0</a>, <a href={RUNWAY_API} rel="noopener">Runway API pricing</a>,{' '}
              <a href={LUMA_PRICING} rel="noopener">Luma API pricing</a> and{' '}
              <a href={MINIMAX_DOCS} rel="noopener">MiniMax video generation</a>. Prices in USD.
            </>
          }
          head={['Model', 'First and last frame', 'Clip length', 'Published price']}
          rows={[
            ['Veo 3.1 (Google)', 'A starting image, plus a lastFrame image for interpolation', '4, 6 or 8 seconds at 24 fps; 8 with reference images, 1080p or 4K', '$0.40 a second with audio at 720p or 1080p; Fast $0.10 to $0.30; Lite $0.05 to $0.08'],
            ['Gemini Omni Flash (Google)', 'Images tagged FIRST_FRAME and LAST_FRAME', 'Extensions of 3 to 10 seconds, up to 40 seconds in total', 'About $0.10 a second at 720p'],
            ['Kling 3.0', 'Start & End Frames-to-Video', '3 to 15 seconds, 720p or 1080p', 'App credits: 6 to 12 a second; no dollar price on the pages checked'],
            ['Runway Gen-4.5', 'A first frame only, in the API', '2 to 10 seconds', '$0.12 a second in the API'],
            ['Luma Ray3.2', 'Start and end frames, and several keyframes', '5 or 10 seconds; 10-second clips take no start or end frame', '$1.20 for a 5-second clip at 1080p'],
            ['MiniMax H3', 'First-frame and last-frame roles', '4 to 15 seconds, 768P or 2K', '$0.08 a second at 768P; $0.13 at 2K'],
          ]}
        />
        <p>
          Google now names Gemini Omni Flash its default video model and keeps Veo 3.1 for scene extension and last-frame
          control. Both put an invisible SynthID watermark in every video they make. Veo 3.1 allows only adults in
          image-to-video, interpolation and reference-image shots, which matters for any campaign with children in it.
        </p>
        <p>
          <a href={KLING_FRAMES} rel="noopener">Kling&apos;s guide to start and end frames</a> has the most useful rule
          for commercials: pick two similar images, because large differences between the first and last frame can make
          the model cut to a new shot instead of moving smoothly. It also notes that many users make similar images first,
          with an image model, and then use the feature.
        </p>
        <p>
          Read the terms as closely as the features. OpenAI shut down its{' '}
          <a href={SORA_2} rel="noopener">Sora 2 models and Videos API</a> on September 24, 2026. Kling&apos;s{' '}
          <a href={KLING_TERMS} rel="noopener">user terms</a>, effective April 21, 2026, say outputs may not be used for
          any commercial purpose without Kling&apos;s written permission, so get that permission, or a plan whose terms
          grant it, before Kling footage goes into an ad.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The reason" title="Why AI commercials start from approved stills">
        <p>
          <strong>Money.</strong> At Google&apos;s published prices, a Nano Banana 2 still costs $0.067 at 1K and $0.101
          at 2K. An 8-second 1080p shot from Veo 3.1 with audio costs $3.20. Most takes get thrown away: the director of
          the Kalshi ad that aired during the 2025 NBA Finals reported 300 to 400 generations to get 15 usable clips (
          <a href={KALSHI} rel="noopener">Mashable, June 2025</a>). A rejected still costs cents, and a rejected shot costs
          dollars.
        </p>
        <p>
          <strong>Approval.</strong> A frame is quick to approve: the product, the label, the cast, the wardrobe and the
          light are all visible and still. A legal or MLR reviewer can check a claim on a frame without scrubbing through
          a clip.
        </p>
        <p>
          <strong>Control.</strong> Google&apos;s own Veo documentation shows this workflow: make an image with Nano Banana
          2, then use it as the starting frame for Veo 3.1. Anything the first frame leaves open, from the background to
          the wardrobe, is left to the model.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The checklist" title="What makes a clean first frame" alt>
        <ol>
          <li>
            <strong>Made at the delivery ratio.</strong> Veo 3.1 generates 16:9 or 9:16. Make a separate first frame for
            each ratio you deliver; a 16:9 frame cropped to 9:16 usually cuts the product or a face.
          </li>
          <li>
            <strong>At or above the output resolution.</strong> Google&apos;s Omni guide asks for high-resolution images.
            A 1080p shot needs a first frame of at least 1920 by 1080 pixels.
          </li>
          <li>
            <strong>Room to move.</strong> Leave space on the side the subject moves toward. A push-in needs detail at the
            center of the frame; a pull-out needs a world around the edges.
          </li>
          <li>
            <strong>The product right in frame one.</strong> The model carries what it sees, so check the label, the
            logo and the shape against the real product before the still is approved. See{' '}
            <Link href="/guides/ai-commercial-product-accuracy">product and label accuracy in AI commercials</Link>.
          </li>
          <li>
            <strong>No type in the frame.</strong> Supers, prices, claims and logos go on in the edit, from the brand&apos;s
            real files. A headline painted into a first frame is redrawn by the model in every frame after it, where it can
            warp.{' '}
            <a href={OVERS_TEXT_GUIDE} rel="noopener">
              Overs&apos; guide to getting text right in AI images
            </a>{' '}
            makes the same case for stills: render clean, set the words in a second pass.
          </li>
          <li>
            <strong>Light that matches the next shot.</strong> If the sun is at frame left in shot 4, it is at frame left
            in the first frame of shot 5.
          </li>
          <li>
            <strong>The moment before the action.</strong> One action per shot. The first frame shows the runner about to
            tie the lace, not halfway through it.
          </li>
          <li>
            <strong>A last frame close to the first.</strong> For interpolation, the end frame should share the place, the
            light and the lens with the start frame, so the model moves between them instead of cutting.
          </li>
        </ol>
      </GuideSection>

      <GuideSection eyebrow="The prompt" title="What to write with the frame">
        <p>
          The still fixes what the shot looks like. The motion prompt says what happens: the camera move, the action, the
          timing, what stays still and what the shot sounds like. Google&apos;s Omni guide puts it plainly: vague prompts
          like &ldquo;make it move&rdquo; produce less compelling results than detailed descriptions of the camera
          movement, the subject&apos;s motion and the surroundings.
        </p>
        <p>An example motion prompt, written for this page for a made-up shoe ad:</p>
        <p>
          <em>
            Slow push-in from a medium shot to a close-up over six seconds. The runner ties the lace on the left shoe,
            then looks up toward frame right. Leaves move in a light wind. The shoe and its logo stay sharp and do not
            change. Forest ambience, footsteps on gravel, no music.
          </em>
        </p>
        <p>
          Every line of it can be checked against the result, and the line about the shoe names what must not change.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The stills" title="Where Overs comes in" alt>
        <p>
          The first frames of an AI commercial are stills, and often the campaign stills themselves, which is where{' '}
          {OVERS.name} comes in. It is {OVERS.relation}: {OVERS.plain}, built on {OVERS.origin}.
        </p>
        <p>
          Two of its features go straight at the parts of a first frame that break most often, the person and the product.
          For a product that is worn or held, {OVERS.name}{' '}
          makes a character sheet first, one model from several angles wearing the exact product, and every later photo
          with a person uses that same model. Each photo gets only the reference pictures it needs, in order, and if a
          needed reference does not exist, {OVERS.name} skips it instead of guessing with the wrong one. You see the shot
          plan and an estimated cost before anything renders, and you approve, change or reject every photo. For each
          photo, it can write a motion prompt for {OVERS.motionModels}, so each still comes with a written starting point
          for the motion. {OVERS.name} makes no video itself; the motion happens in the video model.
        </p>
        <p>
          Stills are the cheap end of the job. In {AGENCY_RENDERS.campaigns} campaigns 100creatives made in{' '}
          {AGENCY_RENDERS.year}, a usable photo took {AGENCY_RENDERS.perKeeper} renders, which comes to{' '}
          {STILLS_MATH.perUsablePhotoLow} to {STILLS_MATH.perUsablePhotoHigh} in AI fees per usable photo at published
          model prices. The free plan makes {OVERS.freePhotosPerMonth} photos a month, with the AI billed to your own
          OpenRouter key at {OVERS.aiCostPerPhoto} a photo and no markup from {OVERS.name}.{' '}
          <a href={OVERS.url} rel="noopener">
            Try Overs free at www.overs.studio
          </a>{' '}
          and approve your first frames before a single second of video is paid for.
        </p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X make your commercial?"
        hire={[
          'A brand that needs a full commercial where every shot with the product or a face is planned, boarded and checked.',
          'A marketing team with approved campaign stills that wants a film made from the same world.',
          'A product that has to stay exact across many shots, where each take has to be checked against the real thing.',
        ]}
        instead={[
          'You need one five-second loop from a product photo: make the still yourself and animate it in Veo or Gemini Omni Flash.',
          'The ad needs real footage of your store, team or customers: hire a crew.',
          'You need dozens of quick variations a week for testing: a self-serve tool costs less than a studio.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/guides/ai-video-character-consistency', title: 'Character consistency in AI video', note: 'Keeping one face through every first frame and every shot.' },
          { href: '/guides/ai-commercial-product-accuracy', title: 'Product and label accuracy', note: 'What drifts when a model redraws your product, and the fixes.' },
          { href: '/guides/ai-campaign-stack', title: 'The AI campaign stack', note: 'Where stills, video models, edit and grade sit in the chain.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'What an AI commercial delivers and what it costs.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'Boards, generation passes and the edit, stage by stage.' },
        ]}
      />

      <GuideCta title="Send the frames you have" body={`Send your campaign stills, the product and where the ad will run. ${PRODUCTION.summary}`} />
    </Guide>
  )
}
