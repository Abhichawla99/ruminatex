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
import { MARKETS, PRODUCTION, RELATED, SITE, TURNAROUND, priceLine } from '@/lib/seo/facts'

const PAGE = {
  path: '/how-we-make-an-ai-brand-film',
  title: 'How We Make an AI Brand Film: Brief to Final Cut',
  description: `How ${SITE.name} makes an AI brand film in six stages: brief, brand world, script and boards, generation passes, edit, sound and grade, and delivery. What you approve at each stage, where AI footage breaks and how it gets fixed, and one finished film to judge it by.`,
  published: '2026-09-14',
  updated: '2026-11-28',
  keywords: [
    'how to make an ai brand film',
    'ai brand film process',
    'how do i make an ai video for my business',
    'how are video production companies using ai',
    'ai brand film production process',
    'ai video production process',
    'how ai videos are made',
  ],
}

const studio = SITE.name
const city = SITE.city.split(',')[0]
const trail = film('LYA3Do3KEN0')
const hundred = RELATED.find((r) => r.name === '100creatives')!
const contests = RELATED.find((r) => r.name === 'AI Film Contests')!
const schedule = TURNAROUND
  ? `${studio}'s schedule: ${TURNAROUND}.`
  : `${studio} agrees the schedule with the brief and does not publish a standard turnaround, because it depends on length, versions and how many review rounds your team needs.`

const FAQS = [
  {
    q: 'How do I make an AI video for my business?',
    a: `Decide what the film has to do, who has to see it and where it will run, then brief a studio that makes the whole film. ${studio} is an AI film studio that makes brand films and AI commercials for brands across the United States and Canada. You send the product, the audience, the channels and your brand files; you approve a creative brief, the brand world, then the script and every shot as a board before anything is generated; then you review the cuts. Your real logo, product and on-screen text are set in the edit from your files. ${priceLine('brand-film')}.`,
  },
  {
    q: 'How are video production companies using AI?',
    a: `Production companies use AI at different points: for storyboards and previsualisation before a shoot, for cleanup, set extensions and versions after one, or to make the footage itself. ${studio} is the last kind. ${PRODUCTION.summary} People write the script, draw the boards, choose every take, edit, mix and grade, and set the brand's real logo and claims from its own files.`,
  },
  {
    q: 'What do I approve before anything is generated?',
    a: `Three things: the creative brief and quote, the brand world (palette, light, casting, texture and camera language), and the script broken into a shot list with framing, motion and length for every shot. ${studio} generates nothing until the script and shot list are approved, because changing the message after generation sends the film back to the boards.`,
  },
  {
    q: 'Where does AI footage break, and what does Ruminate X do about it?',
    a: `Faces that drift between shots, hands, product packaging, logos, text on screen and continuity from one shot to the next. ${studio} fixes the casting and look in the brand world before generation, regenerates shots until faces, hands and the product hold, and never lets the generator draw your logo, pack text or claims: those are set in the edit from your brand files. A human editor reviews every frame before delivery.`,
  },
  {
    q: 'How long does it take to make an AI brand film?',
    a: `${schedule} Most of the calendar is decisions: the look, the script, the cuts and the sign-off on claims. Generation is the stage a buyer waits on least.`,
  },
  {
    q: 'How much does an AI brand film cost?',
    a: `${priceLine('brand-film')}. The price moves with length, the number of scenes, how exactly a real product has to be reproduced, the number of versions and languages, and how many review rounds your team needs, including MLR or legal review. There is no crew, location or permit to pay for.`,
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} films={[trail.youtubeId]}>
      <GuideHero
        eyebrow="The Ruminate X pipeline"
        title="How we make an AI brand film, from brief to final cut"
        dek="For the brand or marketing manager who needs to know what happens between sending a brief and getting a film: what they approve, where AI footage goes wrong, and what the studio does about it."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          {studio} is an AI film studio in {city} that makes brand films and AI commercials for brands across the United
          States and Canada. Every film goes through six stages: brief, brand world, script and boards, generation passes,
          edit, sound and grade, and delivery. You approve the brief, the look, and the script with every shot drawn as a
          board before a single frame is generated, then you review each cut. {priceLine('brand-film')}.
        </p>
      </GuideAnswer>

      <GuideSection id="stages" eyebrow="The six stages" title="AI brand film process: what happens and what you approve">
        <p>
          Four of the six stages end with you approving something. The film moves as fast as those approvals come back.
        </p>
        <GuideTable
          caption={`The six stages of a ${studio} brand film. ${schedule}`}
          head={['Stage', 'What happens', 'You approve']}
          rows={[
            ['1. Brief', 'You send the product, the audience and the feeling the film has to leave. After a call, a creative brief comes back with references, tone and the one message the film must land.', 'The brief and the quote'],
            ['2. Brand world', `Palette, light, texture, camera language and casting are fixed before any shot exists. ${hundred.name}, ${hundred.role}, leads this stage.`, 'The look'],
            ['3. Script and boards', 'The script is written to the one message, then broken into shots, each with framing, motion and length.', 'The script and shot list. Nothing is generated before this'],
            ['4. Generation passes', 'Each shot is generated, checked against its board and generated again. Faces, hands, product details and brand colors get extra passes.', 'Nothing yet; you see the result in the cut'],
            ['5. Edit, sound, grade', 'Takes are cut to the script. Your logo, product and on-screen text are set from your brand files. Sound design, licensed music and voiceover go in, then one grade across every shot.', 'The rough cut, then the fine cut'],
            ['6. Delivery', 'The master plus the platform cuts the brief calls for, such as widescreen, vertical and square, with captions. Notes come back as a new cut.', 'Final files'],
          ]}
        />
        <p>
          What to put in the brief is in the <Link href="/guides/video-production-brief">video brief template</Link>. How the
          dates work, stage by stage, is in{' '}
          <Link href="/guides/how-long-does-an-ai-commercial-take">how long an AI commercial takes</Link>; a brand film runs
          on the same calendar.
        </p>
      </GuideSection>

      <GuideSection id="film" eyebrow="One film to judge it by" title="What the six stages look like in a finished film" alt>
        <GuideFilm
          id={trail.youtubeId}
          caption={`${trail.title}, an original ${studio} film (not client work). ${trail.durationSeconds} seconds, every shot generated, no location shoot.`}
        />
        <p>
          {trail.title} is {trail.durationSeconds} seconds long and has no footage from a camera. Watch it for the work each
          stage is responsible for. Check whether the light and color hold from the first shot to the last, which is the job
          of the brand world. Check whether the runner still looks like the same person at the end, which comes from the
          casting fixed in the brand world and from shots generated again until the face holds. Check how long each shot
          stays on screen, which the script and boards decide before anything is generated.
        </p>
        <p>
          More films are on the <Link href="/work">work page</Link>. The same pipeline makes{' '}
          <Link href="/ai-commercial-production">AI commercials</Link> and{' '}
          <Link href="/ai-corporate-video-production">about-us and company films</Link>.
        </p>
      </GuideSection>

      <GuideSection id="breaks" eyebrow="Generation" title="Where AI footage breaks, and what we do about it">
        <p>
          A generator makes one take in minutes, and most takes are not usable. These are the places it goes wrong, and the
          stage of the pipeline that deals with each one.
        </p>
        <GuideTable
          caption={`Where AI footage breaks and how ${studio} handles it, from the published pipeline.`}
          head={['What breaks', 'What it looks like', 'What we do']}
          rows={[
            ['Faces', 'A person looks slightly different from one shot to the next', 'Casting is fixed in the brand world; shots are generated again until the face holds'],
            ['Hands', 'Extra or merged fingers, a grip that does not close', 'Extra generation passes; a shot that will not hold is reboarded'],
            ['Product and packaging', 'The bottle changes shape, the label turns to noise', 'Extra passes against your product files; the pack text is set in the edit'],
            ['Logos', 'A logo redrawn wrong or warped', 'Never generated: your logo is placed in the edit from your files'],
            ['Text on screen', 'Letters that look like text and say nothing', 'Supers, claims and end cards are typeset in the edit from approved copy'],
            ['Continuity', 'Light, wardrobe or props change between shots', 'The brand world and boards set them; one grade pulls every shot together'],
          ]}
        />
        <p>
          How to check a finished AI film for these before it airs is in the{' '}
          <Link href="/guides/ai-video-quality-control">AI video quality control</Link> guide.
        </p>
      </GuideSection>

      <GuideSection id="using-ai" eyebrow="The industry" title="How are video production companies using AI?" alt>
        <p>
          Production companies bring AI in at different points. Some use it for storyboards and previsualisation before a
          shoot. Some use it after a shoot for cleanup, set extensions and extra versions. Others, {studio} among them, make
          the footage itself with it. {PRODUCTION.summary}
        </p>
        <p>
          For a buyer, the difference is what you book. A filmed production books crew, cast, locations and a shoot day. A{' '}
          {studio} film books none of those: the time goes to the brand world, the boards, the generation passes and the
          edit. {MARKETS.line}
        </p>
      </GuideSection>

      <GuideSection id="brand-world" eyebrow="Stage two, in detail" title="The brand world comes first">
        <p>
          The brand world fixes the palette, the light, the textures, the casting and the camera language before generation
          starts, so the film looks like your company and the last shot matches the first.
        </p>
        <p>
          This stage is led by <a href={hundred.url}>{hundred.name}</a>, {hundred.role}. Your brand rules and their
          world-building go into the same pipeline, so the film is on brand from the first board. How to write that world
          down is in <Link href="/guides/brand-world-building">brand world building</Link>.
        </p>
      </GuideSection>

      <GuideSection id="craft" eyebrow="Where the craft comes from" title="We watch the contest scene" alt>
        <p>
          AI film technique moves fast, and independent filmmakers move it fastest. They compete in online contests and
          studio challenges, and new techniques (cleaner faces, longer coherent shots, sharper motion control) show up there
          before the tools ship them as features.
        </p>
        <p>
          We track that scene through <a href={contests.url}>{contests.name}</a>, {contests.role}, so every {studio} film is
          measured against the current bar.
        </p>
      </GuideSection>

      <GuideSection id="price" eyebrow="What it costs" title="What moves the price of an AI brand film">
        <p>
          {priceLine('brand-film')}. The price is set by length, the number of scenes, how exactly a real product has to be
          reproduced, the number of versions and languages, and how many review rounds your team needs, including MLR or
          legal review.
        </p>
        <p>
          There is no shoot to pay for: no crew, no location, no permits. The full breakdown is in{' '}
          <Link href="/blog/how-much-does-ai-video-production-cost">how much AI video production costs</Link>, and the
          service itself is on the <Link href="/ai-brand-film-agency">AI brand film</Link> page.
        </p>
      </GuideSection>

      <GuideFit
        title={`Who hires ${studio} to make a brand film`}
        hire={[
          'A brand manager with a launch, a story to tell and no budget or time for a shoot.',
          'A founder who needs a film that explains what the company stands for, made to look like the brand.',
          'A pharma, lab or medical marketer whose film goes through MLR, with claims and safety copy set from approved text.',
          'An agency producer who needs a cinematic film for a client and wants to see every shot as a board first.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-brand-film-agency', title: 'AI brand film production', note: 'The service, its starting price and what you get.' },
          { href: '/guides/how-long-does-an-ai-commercial-take', title: 'How long an AI commercial takes', note: 'The calendar for each stage and what slows it down.' },
          { href: '/guides/video-production-brief', title: 'Video brief template', note: 'What to send so stage one is quick.' },
          { href: '/guides/ai-video-quality-control', title: 'AI video quality control', note: 'How to check faces, hands, product and text before release.' },
          { href: '/work', title: 'Work', note: 'The films, with what each one shows.' },
        ]}
      />

      <GuideCta
        title="Send a brief, get a film"
        body="Send the product, the audience and the feeling you are after. The creative brief, the brand world direction and a quote come back, and nothing is generated until you approve the brief."
      />
    </Guide>
  )
}
