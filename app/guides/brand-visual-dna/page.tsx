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
  path: '/guides/brand-visual-dna',
  title: 'Brand Visual DNA: The Look Brief for AI Film',
  description:
    "A brand's visual DNA is the set of visual habits its best images share. What it covers for an AI brand film, the fields film adds to a photo DNA (movement, pace, frame rate, grade, sound), how to pull it from your own films, and a template.",
  published: '2026-09-24',
  updated: '2026-09-24',
  keywords: [
    'brand visual dna',
    'visual dna',
    'what is visual dna',
    'brand dna vs brand identity',
    'visual brand dna',
    'ai brand consistency',
    'brand guidelines for ai video',
  ],
}

const studio = SITE.name
const OVERS_DNA_GUIDE = 'https://www.overs.studio/guides/what-is-visual-dna'
const VEO_DOCS = 'https://ai.google.dev/gemini-api/docs/veo'

const FAQS = [
  {
    q: 'What is visual DNA?',
    a: "A brand's visual DNA is the set of visual habits that repeat across its best images: the palette written as hex codes, the direction and hardness of the light, the lenses and framing, texture and grain, styling and casting. For a brand film it also covers motion: how the camera moves, how long shots hold, the frame rate, the grade and the sound. It is written as lines someone can check, such as \"light from camera left, soft, slightly warm\".",
  },
  {
    q: 'What is the difference between brand DNA and brand identity?',
    a: "Brand identity is who the brand says it is and the marks that say it: the name, logo, type, voice and values. Visual DNA is narrower and measurable: how the brand's photos and films look, from the palette to the light to the pace of the cut. Brand guidelines usually cover the identity well and say little about how images are lit, framed or moved, which is the gap visual DNA fills.",
  },
  {
    q: "How do you find a brand's visual DNA?",
    a: 'Take the images and films the brand is proudest of, pull frames from the films, and write down what they share: the recurring colors (measured with an eyedropper as hex codes), where the light comes from, the lenses, how the camera moves and how long each shot lasts. Keep only lines that most of the images obey, then test them by making a few shots and checking each line.',
  },
  {
    q: 'Does an AI brand film need different guidelines than photos?',
    a: 'It needs more of them. The photo fields (palette, light, lens, texture, styling, casting) carry over as they are. A film adds camera movement, shot length and cutting rhythm, frame rate, transitions, the grade across a sequence, sound and the timing of type on screen. Without those lines, each generated shot drifts toward the look the model defaults to.',
  },
  {
    q: 'Can AI keep brand colors exact in a film?',
    a: "Not on its own. Image and video models do not measure color, so a hex code in a prompt is a hint rather than a setting. Studios show the color on the reference images, check frames with an eyedropper against the brand's hex codes, and correct the rest in the grade, where one color decision is applied to every shot of the film.",
  },
  {
    q: 'When is the look fixed in an AI film production?',
    a: 'Before anything is generated. In the Ruminate X pipeline the palette, light, texture, camera language and casting are fixed in the brand-world stage, ahead of script and boards, so the last shot matches the first. Each generated shot is then checked against its board and generated again until it holds, and the grade ties the shots together.',
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS}>
      <GuideHero
        eyebrow="Visual DNA"
        title="Brand visual DNA: the look brief for an AI film and its photos"
        dek="For the brand or creative lead who wants an AI-made film to look like the brand's best work, and wants that look written down once, for the film and the campaign photos."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          A brand&apos;s visual DNA is the set of visual habits its best images share: the palette in hex codes, the light,
          the lens and framing, texture and grain, styling and casting. A film adds the habits of motion: how the camera
          moves, how long shots hold, the frame rate, the grade and the sound. Written as lines someone can check, the DNA
          becomes the brief that every generated shot and every campaign photo is measured against.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="Definitions" title="Visual DNA, brand identity, guidelines and the brand world">
        <p>
          The four terms get used as if they were one thing. They answer different questions, and an AI production needs
          all four answered before the first shot:
        </p>
        <GuideTable
          caption="How the four documents divide the work. The first three change rarely; the brand world changes with every campaign."
          head={['Document', 'What it answers', 'Example line']}
          rows={[
            ['Brand identity', 'Who the brand is and how it signs its name', 'Logo, name, voice, values'],
            ['Brand guidelines', 'The rules for using the marks', 'Clear space around the logo, the type scale, color use'],
            ['Visual DNA', 'How the brand’s images look, measured', '“Warm key light from camera left, blacks never fully black”'],
            ['Brand world', 'Where this campaign happens, and who is in it', '“A salt flat at dawn, one runner, a red jacket”'],
          ]}
        />
        <p>
          Visual DNA sits between the rules and the campaign. It carries from one campaign to the next, while each
          campaign builds its own world on top of it. How to write that world is in{' '}
          <Link href="/guides/brand-world-building">brand world building for AI film and photos</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The shared fields" title="What a film and its photos share" alt>
        <p>
          The fields that describe a still image carry into film unchanged, because every frame of a film is a still:
        </p>
        <ul>
          <li>
            <strong>Palette</strong>, as five to seven hex codes, each with a job: background, shadow, skin, accent, the
            product&apos;s own color.
          </li>
          <li>
            <strong>Light</strong>: direction, hard or soft, warm or cool, and how dark the shadows are allowed to go.
          </li>
          <li>
            <strong>Lens and framing</strong>: the focal lengths the brand uses for wides and faces, and where the
            subject sits in the frame.
          </li>
          <li>
            <strong>Texture</strong>: grain, sharpness, halation around highlights, how clean or worn surfaces look.
          </li>
          <li>
            <strong>Styling and casting</strong>: wardrobe, props, hair, the age range and look of the people.
          </li>
        </ul>
        <p>
          For stills, the method is set out in{' '}
          <a href={OVERS_DNA_GUIDE} rel="noopener">
            Overs&apos; guide to a brand&apos;s visual DNA
          </a>
          , which lists ten fields and a template. The rest of this page covers what a film needs on top.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The film fields" title="What a film adds to the DNA">
        <p>
          A photo DNA says nothing about time, and a film is made of it. A generated shot can get the palette right and
          still feel wrong because it moves, holds or sounds like another brand.
        </p>
        <GuideTable
          caption="The film-only fields of a visual DNA, each with a line a reviewer can check. Example lines are for a made-up outdoor brand."
          head={['Field', 'Example line', 'How to check it']}
          rows={[
            ['Camera movement', 'Handheld when following a person; one locked-off wide per scene', 'Label every shot of your best film as static, push, pan, handheld or aerial, and count'],
            ['Shot length', 'Two to three seconds in action, five or more in quiet moments', 'Divide the film’s running time by its number of shots'],
            ['Frame rate and blur', '24 frames a second, natural motion blur, no stutter on fast pans', 'Check the export settings and watch fast moves at full size'],
            ['Transitions', 'Hard cuts only; one match cut per film at most', 'Scrub the edit and list every transition'],
            ['Grade over the sequence', 'Lifted blacks, warm highlights, skin never orange', 'Put frames from shot 1 and shot 30 side by side'],
            ['Sound', 'Breath and footsteps first; music enters at the midpoint', 'Listen with the picture off'],
            ['Type on screen', 'One typeface, lower third, on for at least two seconds', 'Pause on every title card'],
          ]}
        />
        <p>
          Shot length matters more in AI film than in live action. Generated shots are short:{' '}
          <a href={VEO_DOCS} rel="noopener">Veo 3.1</a> makes clips of 4, 6 or 8 seconds, so the rhythm of the cut is a
          choice the studio makes on purpose. A brand that cuts slowly should not get a film that cuts fast because the
          tool made short clips.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Method" title="How to pull the visual DNA from your own films" alt>
        <ol>
          <li>
            <strong>Pick the evidence.</strong> Your three best films and ten to twenty of your best stills, the ones the
            brand team would hold up as &ldquo;us&rdquo;. Leave out work you are trying to move away from.
          </li>
          <li>
            <strong>Pull frames.</strong> One frame a second is enough. With the free tool ffmpeg:{' '}
            <code>ffmpeg -i film.mp4 -vf fps=1 frames/%04d.png</code>
          </li>
          <li>
            <strong>Measure the palette.</strong> Use an eyedropper on the recurring colors and write each one as a hex
            code with its job. A color that shows up in only one film belongs to that campaign; leave it out.
          </li>
          <li>
            <strong>Count the shots.</strong> The free tool PySceneDetect lists every cut:{' '}
            <code>scenedetect -i film.mp4 detect-content list-scenes</code>. Running time divided by the number of shots
            gives the average shot length.
          </li>
          <li>
            <strong>Label the movement.</strong> Tag each shot static, push, pan, handheld or aerial, and note which
            moves the brand never uses.
          </li>
          <li>
            <strong>Write ten to fifteen lines.</strong> Each line has to be checkable by someone who was not in the
            room, like &ldquo;one light source, from camera left&rdquo;. Words like &ldquo;premium&rdquo; fail that test.
          </li>
          <li>
            <strong>Test it.</strong> Make three shots and three stills from the lines alone, then check every line. Any
            line the output breaks is either unclear or wrong. Rewrite it before production starts.
          </li>
        </ol>
      </GuideSection>

      <GuideSection eyebrow="Why it matters in AI production" title="What happens to a film with no DNA written down">
        <p>
          A generator draws every shot from scratch. Nothing carries from shot 12 to shot 13 unless it is in the prompt or
          the reference images. So a film made without a written DNA drifts in small steps: the blacks lift a little, the
          palette warms, a lens gets wider, and by the end the film looks like the model&apos;s idea of a brand film rather
          than yours.
        </p>
        <p>
          {PRODUCTION.summary} At {studio}, the look is fixed in the brand-world stage, before script and boards, and
          each generated shot is checked against its board and generated again until it holds. The stage-by-stage process is on{' '}
          <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>. The grade then does the last
          part: one color decision applied to every shot, so frames that were generated days apart match on screen.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The photo side" title="Where Overs comes in" alt>
        <p>
          A campaign rarely ends at the film. The key visual, the social posts and the store photos need the same DNA, and
          that is the job {OVERS.name} was built for. {OVERS.name} is {OVERS.relation}: {OVERS.plain}. It was built on{' '}
          {OVERS.origin}.
        </p>
        <p>
          Give {OVERS.name} a brand&apos;s website, the photos it already has and, if there is one, its guidelines PDF, and
          it writes the visual DNA for you: colors with hex codes, light, lens, grain and styling. You fix anything it gets
          wrong once, and every campaign after that reuses it. Its Brand Watch reads the brand&apos;s recent Instagram posts
          so the DNA keeps up with how the brand looks now: when you ask on the free plan (at most once a month), weekly on
          Pro, daily on Team. Brand rules are applied last, so they have the final say over every photo. You see the shot
          plan and an estimated cost before anything renders.
        </p>
        <p>
          {OVERS.name} makes stills and no video. For each photo it can write a motion prompt for a video model such as{' '}
          {OVERS.motionModels}, to run with that photo as the first frame of a shot. The free plan makes{' '}
          {OVERS.freePhotosPerMonth} photos a month, and the AI costs {OVERS.aiCostPerPhoto} a photo on your own OpenRouter
          key, with no markup from {OVERS.name}.{' '}
          <a href={OVERS.url} rel="noopener">
            Start on Overs&apos; free plan at www.overs.studio
          </a>{' '}
          and see your brand&apos;s DNA written out before you spend anything on a render.
        </p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X build the look for your film?"
        hire={[
          'A brand with strong photography and no film language yet, that wants its first AI brand film to look like its best stills.',
          'A marketing lead whose past films each looked different, who wants one look carried through the next film and its cutdowns.',
          'An agency producer who needs the DNA written, tested and held across a whole AI commercial.',
        ]}
        instead={[
          'You need a new logo, name or typeface: hire a branding agency first, because visual DNA builds on an identity that already exists.',
          'You only need campaign photos in your existing look: a photographer, or Overs for AI-made photos, costs less than a film studio.',
          'Your film is interviews with real staff or customers: a documentary crew fits better, and their look is set on the day.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/guides/brand-world-building', title: 'Brand world building', note: 'The made world of one campaign, written down for the film and the photos.' },
          { href: '/guides/ai-video-character-consistency', title: 'Character consistency in AI video', note: 'Keeping the same person in every shot and every photo.' },
          { href: '/guides/ai-video-quality-control', title: 'AI video quality control', note: 'The checks a film passes before it airs, DNA lines included.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'Where the look gets fixed in the pipeline.' },
          { href: '/ai-brand-film-agency', title: 'AI brand film production', note: 'What a brand film is, what it costs and when to film instead.' },
        ]}
      />

      <GuideCta title="Show us your best work" body="Send the films and photos your brand is proudest of, and what the next film has to do." />
    </Guide>
  )
}
