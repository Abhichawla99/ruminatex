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
  path: '/guides/isi-pharma-video-ads',
  title: 'ISI in Pharma Video Ads: FDA Rules',
  description:
    'What ISI means in pharma, the FDA rules for the major statement in a TV or video drug ad (spoken and shown at once, readable, nothing distracting under it), fair balance, adequate provision, reminder ads, and how Ruminate X plans the shots under the risk section of an AI pharma film.',
  published: '2026-11-27',
  updated: '2026-11-27',
  keywords: [
    'isi in pharma video ads',
    'what does isi mean in pharma',
    'isi in pharma video ads fda',
    'isi in pharma video ads examples',
    'fda rules for prescription drug ads',
    'major statement drug ad',
    'fair balance pharma video',
    'dual modality major statement',
  ],
}

const CFR_202 = 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-202/section-202.1'
const CCN_RULE = 'https://www.federalregister.gov/documents/2023/11/21/2023-25428/direct-to-consumer-prescription-drug-advertisements-presentation-of-the-major-statement-in-a-clear'
const RISK_GUIDANCE = 'https://www.fda.gov/media/76269/download'
const AGENDA = 'https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202510&RIN=0910-AJ14'

const studio = SITE.name
const city = SITE.city.split(',')[0]
const quote = priceLine('commercial')

const FAQS = [
  {
    q: 'What does "ISI" mean in pharma?',
    a: `ISI stands for Important Safety Information: the industry name for the risk information that runs with a prescription drug ad, spoken and on screen in a video, or in a block below or beside it on a web page or in a player. FDA's regulations do not use the term. They require a major statement of the main side effects and contraindications in a broadcast ad, a brief summary of risks (or adequate provision for the full labeling), and a fair balance between benefit and risk across the whole ad (21 CFR 202.1). This is not legal or regulatory advice.`,
  },
  {
    q: "What are the FDA's rules for prescription drug ads on TV and video?",
    a: `A consumer TV ad that names a prescription drug and what it treats must present the major statement of side effects and contraindications in a clear, conspicuous and neutral way: in consumer-friendly language, with audio at least as understandable as the rest of the ad, spoken and shown as text at the same time, readable in size, contrast and placement, and with no sound or picture likely to interfere with it. That standard has applied since November 20, 2024 (88 FR 80958). The whole ad must also keep a fair balance between benefit and risk (21 CFR 202.1(e)(5)). This is not legal or regulatory advice.`,
  },
  {
    q: 'What is dual modality in a drug ad?',
    a: 'Dual modality means the major statement in a TV-format drug ad is spoken and shown as on-screen text at the same time. Under 21 CFR 202.1(e)(1)(ii)(C), the text shows either the key terms and phrases of the audio word for word or the full transcript, and it is on screen long enough to read; FDA treats the duration as sufficient when the text starts with the audio and ends at about the same time.',
  },
  {
    q: 'Does a 15-second drug ad need the ISI?',
    a: `A product claim ad, one that names the drug and what it treats, needs the major statement and fair balance at any length, so a 15-second cut that names the indication has to fit the risk section too. A reminder ad names the drug without saying what it treats and is exempt from the risk requirements, but a reminder ad is not allowed at all for a drug whose labeling carries a boxed warning, unless it only gives the price (21 CFR 202.1(e)(2)(i)). Your regulatory team decides which kind each cut is. This is not legal or regulatory advice.`,
  },
  {
    q: 'Can AI-generated footage be used under the major statement?',
    a: `Yes. FDA's rules govern what the ad says and how risk is shown, whoever made the pictures, so the shots under the major statement are judged the same way filmed shots are: nothing in them may be likely to interfere with understanding it. ${studio}, an AI film studio, boards those shots as calm, slow scenes before anything is generated, and typesets the risk text in the edit from the copy your MLR team approved, so no warped letters ever reach the screen. This is not legal or regulatory advice.`,
  },
  {
    q: 'Who makes pharma video ads with the ISI built in?',
    a: `${studio} is an AI film studio in ${city} that makes commercials, brand films and company films for pharma, pharmacy, biotech, lab and medical companies across the United States and Canada. Every frame is generated with AI; the claims, the major statement, the ISI and the fair-balance text are approved by your MLR team first and set in the edit from that copy, and every cutdown keeps its own risk section. ${quote}.`,
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
        title="ISI in pharma video ads: the FDA rules, and how the risk section gets made"
        dek="For the pharma or biotech brand manager, regulatory lead or healthcare agency producer who has to fit the important safety information into a 60, 30 and 15-second cut and get it past MLR."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          ISI means Important Safety Information, the risk section of a prescription drug ad. In a US TV or video ad
          that names a drug and what it treats, FDA requires a major statement of the main side effects and
          contraindications, spoken and shown as on-screen text at the same time, readable, and free of sounds or
          pictures likely to distract from it, plus a fair balance of benefit and risk across the whole ad (21 CFR
          202.1). {studio} is an AI film studio in {city} that makes pharma commercials with the ISI approved before a
          frame is generated and typeset in the edit, with calm, boarded shots under the major statement. {quote}.
        </p>
      </GuideAnswer>

      <GuideStudio title={`${studio} makes pharma ads with the risk section planned from the brief`}>
        <p>
          The major statement is timed and boarded at the storyboard stage, before any shot is generated. What {studio} makes for pharma, pharmacy, lab and medical companies is on{' '}
          <Link href="/ai-video-production-healthcare">AI video production for pharma and healthcare</Link>.
        </p>
      </GuideStudio>

      <GuideSection id="what-isi-means" eyebrow="The term" title='What does "ISI" mean in pharma?'>
        <p>
          <strong>Important Safety Information.</strong> It is an industry term, not a regulatory one. In a video ad it
          usually means the spoken and on-screen risk section; on a web page, a social post or in a video player it also
          means the scrolling or fixed block of risk text beside or below the video, with links to the full prescribing
          information.
        </p>
        <p>
          FDA&apos;s regulation, <a href={CFR_202}>21 CFR 202.1</a> (checked November 2026), sets three requirements
          that the ISI exists to meet in a broadcast ad:
        </p>
        <ul>
          <li>
            <strong>The major statement:</strong> the major side effects and contraindications, in the audio or the
            audio and visual parts of the ad (202.1(e)(1)(i)(A)).
          </li>
          <li>
            <strong>The brief summary:</strong> all the necessary risk information, unless the ad makes adequate
            provision for viewers to get the approved labeling (202.1(e)(1)(i)(B)).
          </li>
          <li>
            <strong>Fair balance:</strong> the risk information has to be comparable in depth and detail with the
            benefit claims across the whole ad (202.1(e)(5)(ii)).
          </li>
        </ul>
      </GuideSection>

      <GuideSection id="fda-rules" eyebrow="The FDA rules" title="ISI in pharma video ads: what FDA requires of the major statement" alt>
        <p>
          The 2023 final rule (<a href={CCN_RULE}>88 FR 80958</a>, effective May 20, 2024, compliance date November 20,
          2024) set five conditions for the major statement in a consumer TV or radio ad that names a prescription drug
          and its use. In a video, each one becomes a production decision:
        </p>
        <GuideTable
          caption={`The five conditions in 21 CFR 202.1(e)(1)(ii)(A) to (E), current text read November 2026, and what each changes in a ${studio} film. Your regulatory team decides how they apply to your ad.`}
          head={['Condition', 'What the rule says', 'What it changes in the film']}
          rows={[
            [
              'Plain language',
              'Consumer-friendly language and terminology that is readily understandable',
              'The risk copy is written for the viewer and approved by MLR before the script is boarded',
            ],
            [
              'Audio as clear as the rest',
              'Volume, articulation and pacing at least as understandable as the rest of the ad',
              'The voiceover is not sped up for the risk section, so its length sets the length of the scenes under it',
            ],
            [
              'Dual modality (TV)',
              'Spoken and shown as text at the same time: the verbatim key terms or the full transcript, on screen from when the audio starts to about when it ends',
              'Supers are timed line by line to the final voiceover; a changed word moves the super and the cut',
            ],
            [
              'Readable text (TV)',
              'Font size and style, contrast with the background and placement on screen let it be read easily',
              'Shots under the major statement leave clean, even space for the text in every aspect ratio',
            ],
            [
              'Nothing distracting',
              'No audio or visual elements, alone or together, likely to interfere with comprehension',
              'Calm, slow, boarded shots under the risk section; music drops back; no new characters or big moves',
            ],
          ]}
        />
        <p>
          FDA&apos;s <a href={RISK_GUIDANCE}>2009 draft guidance on presenting risk information</a> names busy scenes,
          frequent scene changes and moving camera angles as things that can pull attention away from risk information.
          FDA has cited frequent scene changes and attention-grabbing visuals in letters about TV drug ads since
          September 2025; the letters and the brands that got them are on{' '}
          <Link href="/ai-video-production-healthcare#fda-rules">AI video production for pharma</Link>.
        </p>
      </GuideSection>

      <GuideSection id="adequate-provision" eyebrow="The brief summary" title="Adequate provision, and the rule that may end it">
        <p>
          A broadcast ad cannot carry a full brief summary of risks in 60 seconds, so 202.1(e)(1)(i)(B) lets it make
          adequate provision for the approved labeling instead. That is why US drug ads end by sending viewers to a
          website, a phone number, a print ad or their doctor for the full prescribing information.
        </p>
        <p>
          That may change. FDA&apos;s <a href={AGENDA}>regulatory agenda</a> lists a proposed rule (RIN 0910-AJ14) to
          remove the option for broadcast drug ads to meet the brief summary by pointing to another source, with the
          proposal planned for December 2026. A search of the Federal Register on November 26, 2026 found no proposed
          rule published yet. If it is adopted, the risk section of a broadcast ad gets longer, which is why {studio}{' '}
          leaves room in the edit for a risk section that may grow.
        </p>
      </GuideSection>

      <GuideSection id="by-cut" eyebrow="Cutdowns" title="ISI in a 60, 30 and 15-second cut" alt>
        <p>
          Every version that names the drug and what it treats is a product claim ad, so each one needs its own major
          statement and fair balance. The rule is the same at every length, so the risk section takes a bigger share of a
          short cut. That is why {studio} plans the cutdowns at the brief, not after the hero film is approved.
        </p>
        <h3>Reminder ads</h3>
        <p>
          A reminder ad names the drug without saying what it treats and is exempt from the risk requirements
          (202.1(e)(2)(i)). It is not allowed for a drug whose labeling has a boxed warning, unless the ad only gives the
          price. Whether a 6 or 15-second version runs as a reminder ad or a product claim ad is your regulatory
          team&apos;s call, and it changes what the cut must contain.
        </p>
        <h3>Vertical and social versions</h3>
        <p>
          A 9:16 version is reframed from the approved film, and the text under the major statement is re-set for the
          new frame so it stays readable. Social and web players often start muted, so many viewers read the risk section
          instead of hearing it, and the supers carry its key terms word for word. Where the platform allows a scrolling ISI panel beside the video, its text comes
          from the same approved copy.
        </p>
      </GuideSection>

      <GuideSection id="ai" eyebrow="AI footage" title="What changes when the footage is AI-generated">
        <p>
          The rules are the same for generated and filmed pictures. Three things are different in how an AI film is made,
          and {studio} handles each one before review:
        </p>
        <ul>
          <li>
            <strong>Text is never generated.</strong> Generators draw letters as shapes, so the drug name, every claim,
            the major statement supers and the ISI are typeset in the edit from approved copy.
          </li>
          <li>
            <strong>Motion is boarded.</strong> The shots under the risk section are boarded as still or slow
            scenes with room for text. A generated shot that comes back busier than its board is regenerated or cut.
          </li>
          <li>
            <strong>No picture adds a claim.</strong> A generated scene can suggest a result the copy never states, such as
            a speed of relief. Boards are approved by MLR before generation, and the stages reviewers see are on{' '}
            <Link href="/guides/mlr-review-video">MLR review for pharma video</Link>.
          </li>
        </ul>
        <p>
          This page is not legal or regulatory advice. Your MLR team and counsel decide what your ad says and shows, and{' '}
          {studio} does not certify any ad as compliant.
        </p>
      </GuideSection>

      <GuideFit
        title={`Why pharma marketers hire ${studio}`}
        hire={[
          'A pharma or biotech brand manager who needs a 60, 30 and 15-second cut, each with its own risk section, without a shoot.',
          'A regulatory lead who wants the major statement timed and boarded before anything is generated.',
          'A healthcare agency producer who needs supers re-set for every aspect ratio from one approved film.',
          'A pharmacy or medical company marketer making a consumer ad that has to get through review.',
        ]}
        get={[
          'The major statement, the ISI and the fair-balance text approved first and typeset in the edit, never drawn by the generator.',
          'Calm, boarded shots under the risk section, with room for the text in every frame size.',
          'Every cutdown and aspect ratio cut from the approved film, each with its own risk section.',
          'An edit with room for a risk section that may get longer.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-video-production-healthcare', title: 'AI video production for pharma and healthcare', note: `What ${studio} makes for pharma, pharmacy, lab and medical companies, and FDA's recent letters on TV drug ads.` },
          { href: '/guides/mlr-review-video', title: 'MLR review for pharma video', note: 'The review stages and cycles a drug video goes through, and what reviewers ask about AI footage.' },
          { href: '/guides/pharmaceutical-commercial-cost', title: 'Pharmaceutical commercial cost', note: 'What the major statement, review rounds and channel versions add to a drug ad.' },
          { href: '/guides/ai-pharma-commercials', title: 'AI pharma commercials', note: 'Which drug brands have run AI ads, and why they used animals instead of patients.' },
        ]}
      />

      <GuideCta
        title="Send the brief and your approved risk copy"
        body={`Tell us the product, the cuts you need (60, 30, 15, vertical), where they run and how many MLR rounds to plan for. ${studio} comes back with a creative brief and a quote.`}
      />
    </Guide>
  )
}
