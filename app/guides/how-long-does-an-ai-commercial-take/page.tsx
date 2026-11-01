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
  GuideStudio,
  GuideTable,
  film,
  guideMetadata,
} from '@/components/guide/Guide'
import { PRODUCTION, SITE, TURNAROUND, priceLine } from '@/lib/seo/facts'

const PAGE = {
  path: '/guides/how-long-does-an-ai-commercial-take',
  title: 'How Long Does an AI Commercial Take?',
  description: `AI studios that publish timelines quote a few days to a week for a spot of up to 30 seconds and one to three weeks for a full commercial (checked November 2026). What each stage waits on, the approvals that set the date, what adds days, and how ${SITE.name} plans an AI commercial back from the day it airs.`,
  published: '2026-11-01',
  updated: '2026-11-01',
  keywords: [
    'how long does it take to make an ai commercial',
    'how long does an ai commercial take',
    'how long does it take to create a commercial',
    'how long does it take to create a professional-looking video ad with ai',
    'how long does it take to create ai ads',
    'ai commercial timeline',
    'ai video production timeline',
  ],
}

const studio = SITE.name
const city = SITE.city.split(',')[0]
const keen = film('Zytga7zsShI')
const schedule = TURNAROUND ? `${studio}'s schedule: ${TURNAROUND}.` : `${studio} plans each schedule back from your air date and does not publish a standard turnaround.`

const FAQS = [
  {
    q: 'How long does it take to make an AI commercial?',
    a: `AI studios that publish timelines quote a few days to a week for a spot of up to 30 seconds with a clear concept, one to three weeks for a full commercial, and three to five weeks when people direct every stage (published timelines, checked November 2026). Generating clips is the short part. The time goes to the brand world, the script and boards, rerunning shots until faces, hands and the product hold, the edit and mix, and your own approvals. ${schedule}`,
  },
  {
    q: 'How long does it take to create a commercial?',
    a: `Production companies that publish schedules put a filmed commercial at about three to six weeks from brief to delivery, before booking lead time for crew, cast and locations (published schedules, checked November 2026). An AI commercial has no casting, location scouting, permits, travel or shoot day, so those weeks go. The script, the boards, the edit, the sound and your review rounds take about as long as they would for a shoot.`,
  },
  {
    q: 'Why does an AI commercial take weeks if a generator makes a clip in minutes?',
    a: `A generator makes one take in minutes, and most takes are not usable: faces drift between shots, hands break, the product changes shape and on-screen text comes out as nonsense. The filmmaker behind Kalshi's 2025 NBA Finals ad reported 300 to 400 generations to get 15 usable clips. On top of that come the script, the boards, the edit, your real logo and pack set from your files, the mix, the versions for each channel and your approvals. In a ${studio} commercial nothing is generated until you have approved the script and the shot list.`,
  },
  {
    q: 'What slows an AI commercial down?',
    a: 'Changing the message after the script is approved, which sends the film back to the boards. Waiting for feedback, and feedback from several people arriving separately. Legal, medical or MLR review rounds that were not planned in. A product that has to match its pack exactly in many shots. A person who has to look the same in every scene. Versions added late, since each new length or aspect ratio needs its own edit, mix and check.',
  },
  {
    q: 'Can an AI commercial be made in a week?',
    a: `A short spot with one decision-maker, an approved script, a product that appears in a few shots and one version can move fast. A launch with a 30, a 15, a 6 and vertical cuts, a recurring character and a legal or MLR review cannot. Put the air date in the brief: ${studio} plans the stages back from it, with your review rounds inside the schedule, and says at the quote whether the date holds.`,
  },
  {
    q: 'How long does MLR or legal review add to an AI commercial?',
    a: `As long as your reviewers take per round, times the number of rounds. ${studio} cannot shorten your MLR or legal process, so it plans around it: claims, drug names, safety copy and supers are set in the edit from approved copy, generated shots are reviewed at the boards and the rough cut, and each round is in the schedule from the start. This is not legal or regulatory advice; your own reviewers decide.`,
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide
      page={PAGE}
      faqs={FAQS}
      films={[keen.youtubeId]}
      trail={[
        { name: 'Home', path: '/' },
        { name: 'Guides', path: '/guides' },
        { name: PAGE.title, path: PAGE.path },
      ]}
    >
      <GuideHero
        eyebrow="Guide · Timeline"
        title="How long does it take to make an AI commercial?"
        dek="For the founder or brand manager with a launch date, who has seen a generator make a clip in a minute and needs to know when a finished, approved commercial can actually air."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          AI studios that publish timelines quote a few days to a week for a spot of up to 30 seconds and one to three
          weeks for a full commercial, and production companies put a filmed commercial at three to six weeks plus booking
          time (published timelines, checked November 2026). What decides your date is how many scenes and versions the ad
          has, how exactly the product must appear, and how many review rounds your team needs. {studio}, an AI film studio
          in {city}, makes AI commercials with every frame generated: you approve the brand world, then the script and shot
          list before anything is generated, then each cut, and the schedule is planned back from your air date.
        </p>
      </GuideAnswer>

      <GuideStudio title={`${studio} makes AI commercials for TV, streaming and social`}>
        <p>
          No casting, locations or shoot day to book, and your logo, pack and claims are set in the edit from your files.
          See <Link href="/ai-commercial-production">AI commercial production</Link>, and{' '}
          <Link href="/ai-commercial-production#hire">how to hire a company to make an AI commercial</Link>.
        </p>
      </GuideStudio>

      <GuideSection eyebrow="The stages" title="AI commercial timeline: what each stage waits on">
        <p>
          A {studio} commercial goes through six stages. Four of them end with you approving something, and the schedule
          moves as fast as those approvals come back.
        </p>
        <GuideTable
          caption={`The six stages of a ${studio} commercial and what each one waits on. ${schedule}`}
          head={['Stage', 'What happens', 'What it waits on', 'You approve']}
          rows={[
            ['1. Brief', 'A creative brief and a quote come back from your brief', 'Your product files, logo, claims, channels and air date', 'The quote'],
            ['2. Brand world', 'Palette, light, casting, texture and camera language are fixed before any shot exists', 'Your references and brand guidelines', 'The look'],
            ['3. Script and boards', 'The script, broken into shots with framing, motion and length', 'Your notes, and claims checked by whoever signs them off', 'Script and shot list. Nothing is generated before this'],
            ['4. Generation', 'Each shot is generated and generated again until faces, hands and the product hold', 'The number of scenes, and how exactly the product has to appear', 'Nothing yet; you see the result in the cut'],
            ['5. Edit, sound, grade', 'Takes cut to the script; logo, pack, supers and on-screen text set from your files; voice, music and mix', 'Approved copy for every line of on-screen text', 'The rough cut, then the fine cut'],
            ['6. Versions and delivery', 'The master, then each length and aspect ratio, captions and files for each channel', 'The media plan: which lengths and ratios, for which platforms', 'Final files'],
          ]}
        />
        <p>
          Generation is the stage people expect to take the longest and the one a buyer waits on least. Most of the
          calendar is decisions: the look, the script, the cut and the sign-off on claims. Every stage is described in{' '}
          <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>, and a commercial runs the same way.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Why it is not minutes" title="How long does it take to create a professional-looking video ad with AI?" alt>
        <p>
          A generator makes one take in minutes. A professional-looking ad needs every take in it to hold, and most do not:
          a face changes between shots, a hand grows a finger, the bottle loses its label, on-screen text turns into
          shapes. The filmmaker behind Kalshi&apos;s 2025 NBA Finals ad reported 300 to 400 generations to get 15 usable
          clips (
          <a href="https://tech.yahoo.com/ai/articles/ai-generated-ad-aired-during-150507375.html">Mashable, June 2025</a>
          ). Then the clips need an edit, a mix, your real logo and pack, and a version for each place the ad runs.
        </p>
        <p>
          That is why a {studio} commercial has boards before generation: you approve each shot as a drawing, so every rerun
          goes into making an approved shot hold. The real pack, logo and on-screen text
          are never generated. They are set in the edit from your files, which removes the shots most likely to be rerun.
        </p>
        <GuideFilm
          id={keen.youtubeId}
          caption={`${keen.title}: a ${keen.durationSeconds} second spec commercial by ${studio} (spec work, not commissioned by Keen). Outdoor scenes, a product that has to look like the real shoe, and no shoot.`}
        />
      </GuideSection>

      <GuideSection eyebrow="Filmed or generated" title="How long does it take to create a commercial? AI against a shoot">
        <GuideTable
          caption="Ranges from the timelines AI studios and production companies publish on their own sites, checked November 2026. Each firm sells the schedule it quotes, so read these as their claims."
          head={['', 'Filmed commercial', 'AI commercial']}
          rows={[
            ['Published brief-to-delivery range', 'About three to six weeks, plus booking lead time', 'A few days to a week for up to 30 seconds; one to three weeks for a full commercial; three to five weeks with people directing every stage'],
            ['Casting, locations, permits, travel', 'Booked around people and places', 'None; people and places are generated'],
            ['Shoot day', 'Weather, light and availability decide it', 'None; generation runs until each shot holds'],
            ['A change after the shoot or generation', 'Often another shoot day', 'Another generation pass on the shots that change'],
            ['Script, boards, edit, sound, review rounds', 'Same work', 'Same work'],
          ]}
        />
        <p>
          The weeks an AI commercial saves are the booking and shoot weeks. If your team needs three rounds of legal review,
          that takes the same time for both. If the ad needs your founder, staff or a real customer on screen as themselves,
          a shoot is part of it: every {studio} frame is generated, and the story is told with generated people, places and
          products.
        </p>
      </GuideSection>

      <GuideSection eyebrow="What adds days" title="What makes an AI commercial take longer" alt>
        <ul>
          <li>
            <strong>Changing the message after the script is approved.</strong> The boards, and every shot generated from
            them, start again.
          </li>
          <li>
            <strong>Feedback that arrives in pieces.</strong> Five people replying on different days is five rounds. Name
            one person who collects notes and approves.
          </li>
          <li>
            <strong>Review rounds nobody planned.</strong> Legal, medical and MLR review are the longest waits in a
            regulated ad. Put them in the brief so each round is in the schedule.
          </li>
          <li>
            <strong>A product that must match its pack in many shots.</strong> Close-ups of a label or device take the most
            reruns. Send the pack files that are on shelf now.
          </li>
          <li>
            <strong>One person in every scene.</strong> Keeping a generated face the same across shots is the hardest
            thing to hold, so a recurring character adds passes.
          </li>
          <li>
            <strong>Versions added late.</strong> A 30, a 15, a 6, vertical and square are each an edit, a mix and a check.
            Decide them with the media plan, at the brief.
          </li>
        </ul>
      </GuideSection>

      <GuideSection eyebrow="Planning" title="How to plan an AI commercial back from the air date">
        <ol>
          <li>Put the air date, or the date the files are due to the platform or media agency, in the brief.</li>
          <li>Send the product files, logo, fonts and approved claims with the brief, so stage 1 is not waiting on them.</li>
          <li>Name one approver, and book your legal, medical or MLR reviewers for the script and the rough cut.</li>
          <li>Decide every length and aspect ratio before the script, because the script is written to the shortest cut.</li>
          <li>Leave a few days between final files and the air date for platform review and trafficking.</li>
        </ol>
        <p>
          {studio} answers at the quote whether your date holds with the review rounds you describe. {priceLine('commercial')};
          what moves the price is in <Link href="/guides/ai-commercial-cost">how much an AI commercial costs</Link>. A
          fuller list of what to put in the brief is in{' '}
          <Link href="/guides/video-production-brief">how to write a video production brief</Link>.
        </p>
      </GuideSection>

      <GuideFit
        title={`Who hires ${studio} against a launch date`}
        hire={[
          'A founder with a product launch, a date that will not move and no budget or time for a shoot.',
          'A brand manager who needs a hero spot and its cutdowns for streaming, web and social by one air date.',
          'A pharma, lab or medical marketer whose ad goes through MLR, and who wants the review rounds planned in from the brief.',
          'An agency producer who has to show a client when an AI commercial can air against a shoot.',
        ]}
        get={[
          `A schedule planned back from your air date, with your review rounds inside it. ${PRODUCTION.summary}`,
          'The brand world, then the script and every shot as a board, approved before anything is generated.',
          'Your real logo, pack, claims and supers set in the edit from your files, never drawn by the generator.',
          'The master and every length and aspect ratio the media plan needs, with captions.',
        ]}
      />
      <GuideFaq faqs={FAQS} />
      <GuideRelated
        links={[
          { href: '/ai-commercial-production', title: 'AI commercial production', note: `What a ${studio} commercial includes, and how to hire a company to make one.` },
          { href: '/guides/ai-commercial-cost', title: 'How much an AI commercial costs', note: 'What the money pays for, against a shoot.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'The six stages, brief to final cut.' },
          { href: '/guides/video-production-brief', title: 'How to write a video production brief', note: 'What to send so stage 1 does not wait on you.' },
          { href: '/guides/ad-campaign-deliverables', title: 'Ad campaign deliverables', note: 'The lengths, ratios and files to decide before the script.' },
        ]}
      />
      <GuideCta title="Send the brief and the air date" body="Send the product, the lengths and channels, who signs off the claims, and the date it has to air." />
    </Guide>
  )
}
