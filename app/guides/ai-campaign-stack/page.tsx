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
  path: '/guides/ai-campaign-stack',
  title: 'AI Campaign Stack: Tools Behind Film and Stills',
  description:
    'The layers of an AI campaign stack as of September 2026, from the brief and the stills to video models, voice, music, edit, grade and review, with the tools in each layer, their published prices and the terms a brand should read before using them.',
  published: '2026-09-24',
  updated: '2026-09-24',
  keywords: [
    'ai campaign stack',
    'ai creative stack',
    'ai filmmaking workflow',
    'ai video production pipeline',
    'ai video production stack',
    'ai tools for ad campaigns',
    'best ai video tools for commercials',
  ],
}

const studio = SITE.name
const GEMINI_PRICING = 'https://ai.google.dev/gemini-api/docs/pricing'
const VIDEO_OVERVIEW = 'https://ai.google.dev/gemini-api/docs/video'
const SORA_2 = 'https://developers.openai.com/api/docs/models/sora-2'
const KLING_3 = 'https://kling.ai/quickstart/klingai-video-3-model-user-guide'
const KLING_TERMS = 'https://kling.ai/docs/user-policy'
const RUNWAY_API = 'https://docs.dev.runwayml.com/guides/pricing/'
const RUNWAY_TERMS = 'https://runway.com/terms-of-use'
const LUMA_PRICING = 'https://lumalabs.ai/api/pricing'
const MINIMAX_PRICING = 'https://platform.minimax.io/docs/guides/pricing-paygo.md'
const ELEVENLABS = 'https://elevenlabs.io/pricing'
const SOUNDSTRIPE = 'https://www.soundstripe.com/library/pricing'
const SUNO = 'https://suno.com/pricing'
const TOPAZ = 'https://www.topazlabs.com/pricing'
const RESOLVE = 'https://www.blackmagicdesign.com/products/davinciresolve/studio'
const PREMIERE = 'https://www.adobe.com/products/premiere/plans.html'
const FRAMEIO = 'https://frame.io/pricing'
const WEAVE = 'https://weave.figma.com/pricing'
const COMFY = 'https://www.comfy.org/pricing'
const OVERS_BYOK_GUIDE = 'https://www.overs.studio/guides/what-is-byok-bring-your-own-key'

const FAQS = [
  {
    q: 'What is an AI campaign stack?',
    a: 'It is the chain of tools that turns a brief into a finished campaign made with AI: something to hold the brief and the world, an image model for stills and first frames, a video model for motion, voice and music, an upscaler, an editor with sound and grade, a review tool and the delivery specs. Each layer can be swapped as models change; the order stays the same.',
  },
  {
    q: 'Which AI video model is best for commercials?',
    a: "There is no single answer, and the list changes every few months. As of September 2026, Google names Gemini Omni Flash its default video model and keeps Veo 3.1 for extension and last-frame control; Kling 3.0, Runway Gen-4.5, Luma Ray3.2, MiniMax H3 and Seedance are the other common choices. OpenAI shut down the Sora 2 API on September 24, 2026. Test two or three models on the hardest shot of the brief before choosing.",
  },
  {
    q: 'What does the AI part of a campaign cost?',
    a: "Less than most people expect, per unit. At Google's September 2026 prices a Nano Banana 2 image costs $0.067 at 1K, and Veo 3.1 video costs $0.40 a second with audio at 1080p, or $0.12 on Veo 3.1 Fast. Most of a campaign's cost is people: directing, choosing takes, editing and review. A studio quote reflects that time more than the model bill.",
  },
  {
    q: 'Can brands use AI video tools commercially?',
    a: "It depends on the tool's terms, so read them before a shot goes into an ad. Runway's terms (September 2026) do not restrict commercial use of outputs but let Runway train on your inputs and outputs. Kling's user terms (April 2026) say outputs need Kling's written permission for commercial use. Suno's free plan has no commercial rights. This is not legal advice.",
  },
  {
    q: 'Should we build an AI stack in-house or hire a studio?',
    a: 'Build it in-house when you have an editor, time for many takes per usable shot, and a steady volume of simple assets. Hire a studio when the work is a cinematic film or a commercial that has to hold a product, a face and a look across dozens of shots, or when you need it once and do not want to learn the chain.',
  },
  {
    q: 'What does a studio add on top of the tools?',
    a: `The people work: writing the spot, boarding every shot, rerunning the shots where faces, hands or the product go wrong, then editing, mixing sound, grading and cutting the versions each channel needs. Every frame ${SITE.name} delivers is made with generative AI, with no crew, set or location shoot, and its quotes reflect that people time more than the model bill.`,
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
        eyebrow="The stack"
        title="The AI campaign stack: what makes the film and the stills"
        dek="For the marketing or creative lead deciding whether to run an AI campaign in-house or hire a studio, who wants to know what each tool in the chain does, what it costs and which terms to read."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          An AI campaign runs through seven layers: the brief and the world, stills and first frames, video generation,
          voice and music, finishing, review, and delivery. The tools in each layer change every few months (OpenAI shut
          down its Sora 2 API on September 24, 2026), so choose them layer by layer, read each one&apos;s terms for
          commercial use and training, and keep the order fixed: the world before the frames, the frames before the
          motion, the motion before the edit.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="The layers" title="Seven layers, in the order they run">
        <ol>
          <li>
            <strong>Brief and world.</strong> The brief, the <Link href="/guides/brand-world-building">world bible</Link>,
            the script and the boards. Documents and a board tool; no model yet.
          </li>
          <li>
            <strong>Stills and first frames.</strong> Character sheets, the key visual, campaign photos and the frames
            each video shot starts from. An image model, and often a tool around it.
          </li>
          <li>
            <strong>Video generation.</strong> The motion, shot by shot, usually from approved{' '}
            <Link href="/guides/first-frame-last-frame-ai-video">first frames</Link>.
          </li>
          <li>
            <strong>Voice and music.</strong> A voiceover, a licensed or generated score, sound effects.
          </li>
          <li>
            <strong>Finishing.</strong> Upscaling, the edit, the sound mix and one grade across every shot.
          </li>
          <li>
            <strong>Review.</strong> Frame-accurate comments from the brand, legal and MLR, round by round.
          </li>
          <li>
            <strong>Delivery.</strong> The versions, ratios and specs each channel needs. See{' '}
            <Link href="/guides/ad-campaign-deliverables">ad campaign deliverables</Link>.
          </li>
        </ol>
      </GuideSection>

      <GuideSection eyebrow="Layer 2" title="Stills and first frames" alt>
        <GuideTable
          caption={
            <>
              Prices from <a href={GEMINI_PRICING} rel="noopener">Gemini API pricing</a>,{' '}
              <a href={WEAVE} rel="noopener">Figma Weave</a> and <a href={COMFY} rel="noopener">Comfy</a>; the model
              descriptions and the GPT Image 2 price as Overs lists them. Checked September 2026, in USD.
            </>
          }
          head={['Tool', 'What it is', 'Published price']}
          rows={[
            ['Nano Banana 2 (Google)', 'Image model, fast, good at keeping products accurate in batches', '$0.067 per 1K image; $0.101 at 2K'],
            ['Nano Banana Pro (Google)', 'Image model for fine detail and matching references', '$0.134 per 1K or 2K image'],
            ['GPT Image 2 (OpenAI)', 'Image model, often stronger on text, fabric and bright studio light', 'About $0.21 per high-quality image'],
            ['Figma Weave', 'A node canvas that wires image and video models together', 'Free plan with 150 credits; paid plans $24 to $60 a month'],
            ['ComfyUI', 'Open-source node canvas you run yourself', 'Free; Comfy Cloud plans are paid'],
            ['Overs', 'Brand-matched campaign photos on your own model key', `Free for ${OVERS.freePhotosPerMonth} photos a month; Pro ${OVERS.proPerMonth} a month`],
          ]}
        />
      </GuideSection>

      <GuideSection eyebrow="Layer 3" title="Video models, September 2026">
        <GuideTable
          caption={
            <>
              From <a href={GEMINI_PRICING} rel="noopener">Gemini API pricing</a>,{' '}
              <a href={KLING_3} rel="noopener">Kling&apos;s 3.0 guide</a>,{' '}
              <a href={RUNWAY_API} rel="noopener">Runway&apos;s API pricing</a>,{' '}
              <a href={LUMA_PRICING} rel="noopener">Luma&apos;s API pricing</a> and{' '}
              <a href={MINIMAX_PRICING} rel="noopener">MiniMax pricing</a>, checked September 2026, in USD.
            </>
          }
          head={['Model', 'Published price', 'Note']}
          rows={[
            ['Gemini Omni Flash (Google)', 'About $0.10 a second at 720p', 'Google’s default video model; conversational editing'],
            ['Veo 3.1 (Google)', '$0.40 a second with audio at 720p or 1080p; Fast $0.10 to $0.30; Lite $0.05 to $0.08', 'First and last frames; up to three reference images'],
            ['Kling 3.0', '6 to 12 app credits a second', 'Clips of 3 to 15 seconds; read the terms below'],
            ['Runway Gen-4.5', '$0.12 a second in the API', 'Runway’s API also resells Veo 3.1, Gemini Omni Flash and Seedance'],
            ['Seedance 2.0 (ByteDance)', '$0.36 to $0.40 a second through Runway’s API', 'ByteDance’s own price was not published on the pages checked'],
            ['Luma Ray3.2', '$1.20 for a 5-second clip at 1080p', 'HDR output, several keyframes'],
            ['MiniMax H3', '$0.08 a second at 768P; $0.13 at 2K', 'First and last frames; up to 15 seconds'],
          ]}
        />
        <p>
          Two changes this year show why a stack is chosen per project.{' '}
          <a href={VIDEO_OVERVIEW} rel="noopener">Google now points developers</a> to Gemini Omni Flash by default and
          keeps Veo 3.1 for scene extension and last-frame control, and OpenAI shut down the{' '}
          <a href={SORA_2} rel="noopener">Sora 2 models and Videos API</a> on September 24, 2026. A campaign planned on
          Sora 2 in the spring would have had to move to another model to finish this autumn.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Layers 4 to 6" title="Voice, music, finishing and review" alt>
        <GuideTable
          caption={
            <>
              From <a href={ELEVENLABS} rel="noopener">ElevenLabs</a>, <a href={SOUNDSTRIPE} rel="noopener">Soundstripe</a>,{' '}
              <a href={GEMINI_PRICING} rel="noopener">Gemini API pricing</a> (Lyria), <a href={SUNO} rel="noopener">Suno</a>,{' '}
              <a href={TOPAZ} rel="noopener">Topaz Labs</a>, <a href={RESOLVE} rel="noopener">Blackmagic Design</a>,{' '}
              <a href={PREMIERE} rel="noopener">Adobe</a> and <a href={FRAMEIO} rel="noopener">Frame.io</a>, checked
              September 2026, in USD.
            </>
          }
          head={['Layer', 'Tool', 'Published price', 'Terms to know']}
          rows={[
            ['Voice', 'ElevenLabs', 'Starter $6 a month', 'Paid plans include a commercial license; the free plan does not'],
            ['Music, licensed', 'Soundstripe single-song license', '$199 for paid social and digital ads; $1,249 and up for TV', 'The license tier sets where the ad may run'],
            ['Music, generated', 'Lyria 3.5 (Google)', '$0.08 per full song', 'Check the output terms for your use'],
            ['Music, generated', 'Suno', 'Pro and Premier plans', 'The free plan has no commercial rights; the paid plans include commercial use rights'],
            ['Upscaling', 'Topaz Video', '$299 a year for Personal', 'Personal covers commercial use only for organizations under $1M in annual revenue; Pro covers the rest'],
            ['Edit and grade', 'DaVinci Resolve', 'Free; Studio $295', 'Studio adds AI tools such as Super Scale'],
            ['Edit', 'Premiere Pro', '$22.99 a month on an annual plan', 'Generative Extend runs on Adobe Firefly'],
            ['Review', 'Frame.io', 'Free for 2 members; Pro $15 and Team $25 per member a month', 'Included with Premiere plans'],
          ]}
        />
      </GuideSection>

      <GuideSection eyebrow="Before a brand uses a tool" title="The terms to read">
        <p>
          <strong>Commercial use.</strong> Kling&apos;s <a href={KLING_TERMS} rel="noopener">user terms</a>, effective
          April 21, 2026, say outputs may not be used for any commercial purpose without Kling&apos;s written permission,
          and ask users to label outputs with Kling&apos;s brand. Runway&apos;s{' '}
          <a href={RUNWAY_TERMS} rel="noopener">terms</a> (September 15, 2026) do not restrict commercial use of outputs.
          Suno&apos;s free plan carries no commercial rights.
        </p>
        <p>
          <strong>Training on your material.</strong> Runway&apos;s standard terms let it use your inputs and outputs to
          train and improve its models; enterprise customers have separate terms. Google&apos;s pricing page marks free-tier
          Gemini API use as used to improve its products and paid-tier use as not. For an unreleased product, that line
          decides which tier you upload it to.
        </p>
        <p>
          <strong>Watermarks and labels.</strong> Every video from Veo and Gemini Omni Flash carries an invisible SynthID
          watermark. Platform AI labels are covered in{' '}
          <Link href="/guides/ai-video-quality-control">AI video quality control</Link>. None of this is legal advice.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Who runs it" title="In-house or a studio" alt>
        <p>
          The model bill is the small part. At Google&apos;s published prices, 2,400 seconds of Veo 3.1 Fast takes at
          1080p, enough for a 30-second film at 25 takes per kept shot, costs $288. The large part is people: someone
          directs every shot, chooses the take worth keeping from many, fixes the product and the faces, edits, mixes and
          grades, and runs the review rounds. The{' '}
          <Link href="/guides/commercial-production-budget-template">budget template</Link> breaks that down line by line.
        </p>
        <p>
          {PRODUCTION.summary} At {studio}, people write and board every film, rerun the shots where faces, hands or the
          product go wrong, then edit, mix and grade it. A brand with an editor, time and a steady run of simple assets can
          run the stack itself.
          A brand that needs one cinematic film to hold a product, a face and a look across dozens of shots usually
          should not learn the chain on its launch.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Layer 2, for brands" title="Where Overs comes in">
        <p>
          The stills layer is where {OVERS.name} sits. {OVERS.name} is {OVERS.relation}: {OVERS.plain}. It was built on{' '}
          {OVERS.origin}.
        </p>
        <p>
          It runs on your own OpenRouter key. OpenRouter is a service that gives one account and one bill for many AI
          models, and requests go from your browser to OpenRouter, so {OVERS.name} adds no markup to the AI. You choose the
          image model that makes the final photos, from Nano Banana 2 Lite at about $0.034 a photo to GPT Image 2 at about
          $0.21, and the planning steps always run on strong models (Gemini to look and plan, Claude Opus to write and
          check) for {OVERS.planningPerRun} a run. You see the shot plan and an estimated cost before anything renders.
          For worn products it makes a character sheet first, and for each photo it can write a motion prompt for{' '}
          {OVERS.motionModels}, the next layer in the stack. It makes no video, publishes nowhere and has no public API;
          you export the files.
        </p>
        <p>
          At 8 renders per usable photo, published model prices put a usable photo at {STILLS_MATH.perUsablePhotoLow} to{' '}
          {STILLS_MATH.perUsablePhotoHigh} in AI fees. The free plan makes {OVERS.freePhotosPerMonth} photos a month; Pro
          is {OVERS.proPerMonth} a month and Team {OVERS.teamPerMonth}. What bringing your own key means in practice is in{' '}
          <a href={OVERS_BYOK_GUIDE} rel="noopener">
            Overs&apos; guide to bring-your-own-key AI tools
          </a>
          . Put the stills layer of your stack on your own key today;{' '}
          <a href={OVERS.url} rel="noopener">
            Overs at www.overs.studio
          </a>{' '}
          starts free.
        </p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X run the stack for you?"
        hire={[
          'A brand that needs a cinematic film or commercial, not a pile of clips, and does not want to choose between six video models.',
          'A marketing team that wants the film and the campaign stills from one world without building the chain in-house.',
          'An agency producer who needs a partner that tracks which models and terms fit a client brief this month.',
        ]}
        instead={[
          'Your team has an editor, time and a steady run of simple assets: build the stack yourself and pay the model makers directly.',
          'You need stills only: Overs, or an image model and a canvas like Figma Weave, is enough.',
          'You need talking-head explainers at volume: an avatar tool such as HeyGen or Synthesia fits better.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/guides/commercial-production-budget-template', title: 'Budget template', note: 'What each layer costs as a budget line.' },
          { href: '/guides/first-frame-last-frame-ai-video', title: 'First and last frames', note: 'How the stills layer hands off to the video layer.' },
          { href: '/guides/ai-video-quality-control', title: 'AI video quality control', note: 'The checks at the end of the chain.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'The pipeline the stack serves.' },
          { href: '/ai-video-production-agencies', title: 'How to hire an AI video production agency', note: 'Seven questions to ask before you sign.' },
        ]}
      />

      <GuideCta title="Skip building the chain" body="Send the brief, the channels and the date, and we will tell you how the film gets made." />
    </Guide>
  )
}
