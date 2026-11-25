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
  GuideStudio,
  GuideTable,
  guideMetadata,
} from '@/components/guide/Guide'
import { SITE, priceLine } from '@/lib/seo/facts'

const PAGE = {
  path: '/guides/mlr-review-video',
  title: 'MLR Review for Pharma Video',
  description:
    'What MLR stands for in pharma, the MLR review process for a video stage by stage, what an MLR review cycle is and how many to plan, what reviewers ask about AI-generated footage, and how Ruminate X builds pharma films so every claim gets through review.',
  published: '2026-11-26',
  updated: '2026-11-26',
  keywords: [
    'mlr review process',
    'what is the mlr review process',
    'mlr review cycles',
    'what are mlr review cycles',
    'what does mlr stand for in pharma',
    'mlr review pharma',
    'mlr review video',
    'mlr review ai video',
  ],
}

const CFR_202 = 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-202/section-202.1'
const CFR_314 = 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-314/subpart-B/section-314.81'

const studio = SITE.name
const city = SITE.city.split(',')[0]
const quote = priceLine('commercial')

const FAQS = [
  {
    q: 'What does MLR stand for in pharma?',
    a: `MLR stands for medical, legal and regulatory review. It is the sign-off a pharma, biotech or medical device company runs on every promotional piece before it is used: the medical reviewer checks the science and the references behind each claim, the legal reviewer checks claims, trademarks and the rights to every image and voice, and the regulatory reviewer checks the piece against the approved labeling and FDA's advertising rules. Many companies run it through a promotional review committee that meets on a set schedule.`,
  },
  {
    q: 'What is the MLR review process?',
    a: `For a video, the MLR review process runs in stages: reviewers approve the claims and the annotated script first, then the storyboard, then a rough cut, then the final cut with every on-screen super, the important safety information and the voiceover locked. Each stage is a submission, a round of comments and a revised version. After final approval, a prescription drug company submits the ad to FDA on Form FDA-2253 when it first runs (21 CFR 314.81(b)(3)(i)). ${studio}, an AI film studio, builds pharma films around those stages: approved copy first, boards before generation, every claim typeset in the edit.`,
  },
  {
    q: 'What are MLR review cycles?',
    a: `An MLR review cycle is one loop of submit, review, consolidated comments and revision. A video usually needs more than one cycle per stage, because a change to a claim moves the voiceover, the timing of the on-screen text and the safety section with it. Your company's review calendar sets how long each cycle takes. ${studio} asks how many cycles to plan for at the brief and prices them into the quote: ${quote}.`,
  },
  {
    q: 'How many MLR review rounds should a pharma video plan for?',
    a: `Plan at least one round at each stage (script, storyboard, rough cut, final), and ask your review team how many rounds their last video of the same type took, because that history is the best estimate you have. Rounds at the script and storyboard stages are cheap; a claim changed after the final mix means a new edit, mix and safety section. ${studio} plans the rounds into the schedule and the quote at the brief.`,
  },
  {
    q: 'Can AI-generated video go through MLR review?',
    a: `Yes. FDA's rules govern what a drug ad says and how risk information is shown, whoever made the pictures, so AI footage goes through the same MLR review as filmed footage. Reviewers ask extra questions about it: whether any person on screen is real, whether a shot implies a claim the copy does not make, and whether a generated person needs an AI label. ${studio} answers them by design: every person is a portrayal, every shot is boarded before it is generated, and every claim and the safety text are typeset from approved copy. This is not legal or regulatory advice.`,
  },
  {
    q: 'Who makes pharma videos built for MLR review?',
    a: `${studio} is an AI film studio in ${city} that makes brand films, commercials and company films for pharma, pharmacy, biotech, lab and medical companies across the United States and Canada. Every frame is generated with AI, your MLR team approves the claims, the important safety information and the fair-balance text before anything is generated, and each of them is set in the edit from that approved copy. ${quote}.`,
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide
      page={PAGE}
      faqs={FAQS}
      trail={[
        { name: 'Home', path: '/' },
        { name: 'Guides', path: '/guides' },
        { name: PAGE.title, path: PAGE.path },
      ]}
    >
      <GuideHero
        eyebrow="Pharma video"
        title="MLR review for pharma video: the process, the cycles and the AI questions"
        dek="For the pharma or biotech brand manager, medical device marketer or healthcare agency producer who has a video to make and an MLR calendar to fit it into."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          MLR stands for medical, legal and regulatory review, the sign-off every promotional piece needs before a pharma,
          biotech or medical company can use it. For a video, reviewers approve the claims and script first, then the
          storyboard, a rough cut and the final cut with every super, the important safety information (ISI) and the
          voiceover locked; each round of comments and revisions is one review cycle. {studio} is an AI film studio in{' '}
          {city} that builds pharma films around those stages, with every claim typeset in the edit from the copy your
          reviewers approved. {quote}.
        </p>
      </GuideAnswer>

      <GuideStudio title={`${studio} makes pharma films that get through MLR`}>
        <p>
          The claims and safety copy are approved before a frame is generated, the pictures are made to fit them, and
          your reviewers see boards, a rough cut and the final. What {studio} makes for pharma, pharmacy, lab and medical
          companies is on <Link href="/ai-video-production-healthcare">AI video production for pharma and healthcare</Link>.
        </p>
      </GuideStudio>

      <GuideSection id="what-mlr-stands-for" eyebrow="The term" title="What does MLR stand for in pharma?">
        <p>
          <strong>Medical, legal and regulatory.</strong> Three reviewers, or three teams, sign off on a promotional piece
          before it is used, and each reads it for something different:
        </p>
        <ul>
          <li>
            <strong>Medical</strong> checks the science: that each claim matches the evidence and the references cited
            for it, that benefit and risk are presented in balance, and that a mechanism or anatomy shot is right.
          </li>
          <li>
            <strong>Legal</strong> checks the claims a court could test, the trademarks, and the rights to every image,
            voice and piece of music in the cut.
          </li>
          <li>
            <strong>Regulatory</strong> checks the piece against the product&apos;s approved labeling and FDA&apos;s
            advertising rules, and owns the submission to FDA.
          </li>
        </ul>
        <p>
          Many companies run all three through a promotional review committee that meets on a fixed schedule, so a video
          that misses a meeting waits for the next one. {studio} builds each film so the committee approves the words first
          and sees the pictures made to fit them.
        </p>
      </GuideSection>

      <GuideSection id="process" eyebrow="The process" title="What is the MLR review process for a video?" alt>
        <p>
          A video is reviewed in stages, because the words, the pictures and the timing are approved separately and a
          change at one stage moves the others. This is the order {studio} works to, and what changes when every frame is
          generated:
        </p>
        <GuideTable
          caption={`The stages ${studio} plans a pharma film around. Your company's process may add or merge stages; ask your review team at the brief.`}
          head={['Stage', 'What reviewers see', 'What they approve', 'In an AI film']}
          rows={[
            [
              '1. Claims and script',
              'The script with each claim annotated to its reference, plus the ISI and fair-balance copy',
              'Every word that will be spoken or shown',
              'Approved before a frame is generated, so the pictures are made to fit approved words',
            ],
            [
              '2. Storyboard',
              'Each shot drawn out with framing, motion and duration, and where each claim and super lands',
              'That no picture implies a claim the copy does not make',
              'Boards lock the look and the generated people before generation starts',
            ],
            [
              '3. Rough cut',
              'The edit with temp voiceover and draft supers',
              'Pacing, the science shots against references, how risk information plays',
              'A shot that fails review is regenerated to match the approved boards',
            ],
            [
              '4. Final cut',
              'Final voiceover, music, grade, every super, the ISI and the major statement',
              'The exact frames and words that will air',
              'Every claim, the product name and the safety text are typeset in the edit, never drawn by the generator',
            ],
            [
              '5. Versions',
              'Each cutdown and aspect ratio',
              'That each version keeps its own complete risk section',
              'Cut from the same approved film, not regenerated',
            ],
          ]}
        />
        <p>
          The FDA rules behind stage 4 are specific for broadcast. A consumer TV ad for a prescription drug must present
          the major statement of side effects and contraindications in a clear, conspicuous and neutral way: spoken, shown
          as text at the same time, readable, and with no sound or picture likely to interfere with it (
          <a href={CFR_202}>21 CFR 202.1(e)(1)(ii)</a>, checked November 2026). In an AI film that means calm, boarded shots
          under the risk section, which is why reviewers see that section at the storyboard stage.
        </p>
      </GuideSection>

      <GuideSection id="cycles" eyebrow="The cycles" title="What are MLR review cycles?">
        <p>
          A cycle is one loop: the agency or studio submits, the reviewers comment, the comments are consolidated into
          one set of changes, and a revised version comes back. Your company&apos;s review calendar sets how long a cycle
          takes and how often the committee meets. How many cycles a stage needs depends on the claims, the product and
          the reviewers.
        </p>
        <h3>Why late cycles cost more in a video</h3>
        <p>
          A note on the script costs a rewrite. The same note on the final cut can change a spoken line, which changes the
          voiceover, the timing of the super under it, the length of the shot and the place where the risk section
          starts, in every cutdown. So {studio} pushes decisions as early as they can go: claims and safety copy at stage
          1, the shots under them at stage 2.
        </p>
        <h3>How many cycles to plan for</h3>
        <p>
          Plan at least one per stage, and ask your review team how many their last video took. {studio} asks at the
          brief, puts the rounds in the schedule, and prices them in: {quote}. Each round is a new cut that someone edits,
          mixes and sends back, so the rounds cost the same whether the footage was filmed or generated. What a drug ad
          costs line by line, review rounds included, is on{' '}
          <Link href="/guides/pharmaceutical-commercial-cost">pharmaceutical commercial cost</Link>.
        </p>
      </GuideSection>

      <GuideSection id="ai" eyebrow="AI footage" title="What MLR reviewers ask about AI-generated video" alt>
        <p>
          FDA&apos;s drug advertising rules govern what an ad says and how it shows risk, whoever made the pictures. AI
          footage goes through the same review as filmed footage, and reviewers ask a few extra questions. These are the
          ones {studio} answers before they are asked:
        </p>
        <ul>
          <li>
            <strong>Is anyone on screen real?</strong> No. Every person is a generated portrayal. None is presented as a
            real patient or clinician, and none makes a first-person claim about a result. Whether a generated person
            carries an on-screen label is agreed with your reviewers at the brief; the state laws on AI labels in ads are
            on <Link href="/guides/ai-ad-labeling-laws">AI ad labeling laws</Link>.
          </li>
          <li>
            <strong>Could a picture imply a claim?</strong> A generator draws what looks plausible, so a shot can suggest a
            speed of relief or a result the copy never states. Boards are approved before generation, and a shot that
            drifts from its board is regenerated or cut.
          </li>
          <li>
            <strong>Is any text drawn by the AI?</strong> No. Generators draw letters as shapes. The product name, every
            claim, the ISI and the fair-balance text are typeset in the edit from the approved copy, so reviewers approve
            exact words.
          </li>
          <li>
            <strong>Is the science right?</strong> Your reference images go in the brief, and your medical reviewer sees
            every mechanism or anatomy shot at the board and rough-cut stages.
          </li>
          <li>
            <strong>Will a fix change what was already approved?</strong> Boards and reference frames lock the characters,
            sets and light, so a shot regenerated after a note matches the approved shots around it.
          </li>
          <li>
            <strong>Who owns the footage?</strong> Legal will ask. The ownership and licensing terms for a commissioned AI
            film are on <Link href="/guides/who-owns-ai-video">who owns an AI video</Link>.
          </li>
        </ul>
      </GuideSection>

      <GuideSection id="fda" eyebrow="After MLR" title="What happens after MLR approves a drug video">
        <p>
          <strong>Submission at first use.</strong> A prescription drug company submits each advertisement to FDA when it
          is first published, with transmittal Form FDA-2253 and the product&apos;s current professional labeling (
          <a href={CFR_314}>21 CFR 314.81(b)(3)(i)</a>, checked November 2026). Your regulatory team files it; the studio
          delivers the final files and the versions that will run.
        </p>
        <p>
          <strong>Optional comment before airing.</strong> Any advertisement may be sent to FDA before publication for
          comment, and FDA answers in writing (<a href={CFR_202}>21 CFR 202.1(j)(4)</a>, checked November 2026). Whether
          to do that is your regulatory team&apos;s call, and it adds time to the plan.
        </p>
        <p>
          Pharmacies, labs and clinics advertising their own services answer to other regulators, such as state boards of
          pharmacy; which rules reach them is on <Link href="/guides/ai-pharma-commercials#pharmacy-rules">AI pharma
          commercials</Link>. This page is not legal or regulatory advice. Your MLR team and counsel decide what your video
          can say and show, and {studio} does not certify any ad as compliant.
        </p>
      </GuideSection>

      <GuideFit
        title={`Why pharma marketers hire ${studio}`}
        hire={[
          'A pharma or biotech brand manager with an MLR calendar and no budget for a shoot.',
          'A medical device or diagnostics marketer who needs mechanism and product shots checked against references.',
          'A healthcare agency producer who needs boards, a rough cut and a final built for review, in every cutdown.',
          'A pharmacy marketing lead who needs a consumer ad without filming in the store.',
        ]}
        get={[
          'Claims, the ISI and the fair-balance text approved first and typeset in the edit, never drawn by the generator.',
          'Boards before generation, so reviewers can strike a shot before it exists.',
          'Review rounds planned into the schedule and priced at the brief.',
          'Every length and aspect ratio cut from the approved film, each with its own risk section.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-video-production-healthcare', title: 'AI video production for pharma and healthcare', note: `What ${studio} makes for pharma, pharmacy, lab and medical companies, and its seven steps for getting claims through MLR.` },
          { href: '/guides/pharmaceutical-commercial-cost', title: 'Pharmaceutical commercial cost', note: 'What MLR rounds, the major statement and channel versions add to a drug ad.' },
          { href: '/guides/ai-pharma-commercials', title: 'AI pharma commercials', note: 'Which drug brands have run AI ads, and the FDA rules that apply to them.' },
          { href: '/guides/how-long-does-an-ai-commercial-take', title: 'How long an AI commercial takes', note: 'Where review rounds sit in the schedule of an AI ad.' },
          { href: '/guides/ai-ad-labeling-laws', title: 'AI ad labeling laws', note: 'Which US states require an AI label on an ad, and when.' },
        ]}
      />

      <GuideCta
        title="Send the brief and your review calendar"
        body={`Tell us the product, the audience (consumers or health professionals), where the video runs and how many MLR rounds to plan for. ${studio} comes back with a creative brief and a quote.`}
      />
    </Guide>
  )
}
