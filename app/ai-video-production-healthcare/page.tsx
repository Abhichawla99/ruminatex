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
import { BUYERS, PRODUCTION, SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/ai-video-production-healthcare',
  title: 'AI Video for Pharma and Healthcare Marketing',
  description:
    'How pharma, pharmacy, lab and medical companies use AI-made brand films and ads, what MLR reviewers ask about AI footage, the US and Canadian drug-ad rules that shape a video, and when to film real clinicians instead.',
  published: '2026-03-07',
  updated: '2026-10-08',
  keywords: [
    'ai video for pharma marketing',
    'ai video production healthcare',
    'pharmaceutical video production company',
    'fda rules for prescription drug tv ads',
    'isi in pharma video ads',
    'can i use ai to make a marketing video',
    'medical ai video',
    'ai doctor video',
    'pharma video production',
  ],
}

const studio = SITE.name
const healthBuyers = BUYERS.filter((b) => /pharma|labs|medical/.test(b)).join(', ')

const CFR = 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-202/section-202.1'
const CANADA_RX = 'https://laws-lois.justice.gc.ca/eng/regulations/C.R.C.,_c._870/section-C.01.044.html'
const HC_ADS = 'https://www.canada.ca/en/health-canada/services/drugs-health-products/regulatory-requirements-advertising.html'
const CCN_RULE = 'https://www.govinfo.gov/content/pkg/FR-2023-11-21/pdf/2023-25428.pdf'
const RISK_GUIDANCE = 'https://www.fda.gov/media/76269/download'
const LINZESS = 'https://www.fda.gov/media/188750/download'
const VONJO = 'https://www.fda.gov/media/191036/download'
const FDA_SEPT = 'https://www.fda.gov/news-events/press-announcements/fda-launches-crackdown-deceptive-drug-advertising'
const AGENDA = 'https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202510&RIN=0910-AJ14'

const FAQS = [
  {
    q: 'Can I use AI to make a marketing video for a pharma or medical brand?',
    a: 'Yes. Nothing in the US or Canadian drug-advertising rules forbids AI-generated footage; the rules govern what the ad says and how risk information is shown, whoever made the pictures. The video still goes through your medical, legal and regulatory (MLR) review, and your reviewers decide whether AI imagery of patients or clinicians needs a label. This is not legal or regulatory advice.',
  },
  {
    q: 'Which AI tool is best for the pharmaceutical industry?',
    a: 'It depends on the job. Avatar tools such as Synthesia and HeyGen suit training and internal updates, where a presenter reads a script. A cinematic brand film or a consumer ad needs a studio that directs generation, fixes the shots that fail and sets every claim and the safety information as edited text. Ruminate X makes the second kind, for pharma, pharmacy, lab and medical companies.',
  },
  {
    q: 'Do AI-generated patients or doctors in an ad have to be disclosed?',
    a: 'Platform rules apply: YouTube asks for disclosure when realistic content is made or meaningfully altered with AI (YouTube Help, checked September 2026). Beyond that, whether an AI-generated person who looks like a patient or clinician needs a super on screen is a question for your MLR team and counsel. A label stops viewers reading a realistic generated doctor as a real one.',
  },
  {
    q: "What are the FDA's rules for prescription drug ads?",
    a: 'A consumer TV or video ad for a prescription drug must state the major side effects and contraindications (the major statement) and keep a fair balance between benefit and risk information (21 CFR 202.1). Since November 20, 2024 the major statement must be in plain language, spoken and shown as on-screen text at the same time, easy to read, and free of sounds or visuals likely to interfere with understanding it. The rules apply the same way to AI-generated footage. This is not legal or regulatory advice.',
  },
  {
    q: 'What does "ISI" mean in pharma?',
    a: 'ISI stands for Important Safety Information, the industry name for the block of risk information that runs with a drug ad or sits below it on a web page. FDA regulations do not use the term; they require a major statement of side effects and contraindications in broadcast ads and a brief summary of risks, and FDA\'s 2009 draft guidance on presenting risk information explains how to show it without distraction. In a video, the ISI is typeset in the edit from MLR-approved copy.',
  },
  {
    q: 'Are pharmaceutical commercials going to be banned?',
    a: 'No ban has been proposed. In September 2025 a presidential memorandum told HHS to increase the risk information drug ads must carry, and FDA sent letters to drug companies about misleading ads. FDA\'s regulatory agenda lists a proposed rule, planned for December 2026, that would require broadcast drug ads to carry the full risk information inside the ad instead of pointing to a website or phone number. FDA\'s own summary says it is not a ban (reginfo.gov, RIN 0910-AJ14, checked October 2026).',
  },
  {
    q: 'Can Canadian pharma companies run consumer video ads for prescription drugs?',
    a: 'Only in a narrow form. Section C.01.044 of Canada\'s Food and Drug Regulations limits prescription drug advertising to the general public to the brand, proper and common name, price and quantity. Whether a disease-awareness or brand film counts as drug advertising is a call for your regulatory team; PAAB and Ad Standards give advisory opinions on consumer messages (Health Canada, checked September 2026).',
  },
  {
    q: 'When should a healthcare company film instead of using AI?',
    a: 'When a real clinician, researcher or patient has to speak for themselves, when the film documents a real lab, clinic or procedure, or when a regulator or reviewer needs footage of the actual product or device in use. Hire a medical production company for those. Ruminate X makes every frame with AI and does not film people.',
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS}>
      <GuideHero
        eyebrow="Pharma, pharmacy, labs, medical"
        title="AI video production for pharma and healthcare marketing"
        dek="For the pharma brand manager, pharmacy marketing lead, lab or diagnostics marketer, or medical company comms head who wants a cinematic film or ad made with AI and needs it to survive MLR review."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          Pharma, pharmacy, lab and medical companies use AI video for brand films, disease-awareness and service ads, and
          science that no camera can film, such as a molecule binding or the inside of a cell. The footage is generated, but
          every claim, the safety information and your logo are set as text in the edit, so reviewers approve exact words.
          The drug-advertising rules in the US and Canada apply the same way whether the pictures were filmed or generated.
          Film instead when a real clinician or patient has to appear as themselves.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="Uses" title="What AI video is used for in pharma, labs and medical">
        <p>
          {studio} makes films for {healthBuyers}. {PRODUCTION.summary} The briefs that fit an AI-only studio:
        </p>
        <ul>
          <li>
            <strong>Brand and company films.</strong> What a pharma company, pharmacy group or lab stands for, for the
            homepage, investors, conferences and recruiting. See <Link href="/ai-brand-film-agency">AI brand film production</Link>.
          </li>
          <li>
            <strong>Science visuals.</strong> A mechanism of action, a cell, an assay, a device working inside the body.
            AI suits science visuals where the look matters more than exact molecular structure; for a figure that has to
            match published data exactly, a 3D medical animator is safer. Which jobs{' '}
            <Link href="/guides/ai-medical-animation">AI medical animation</Link> can do, and what a mechanism of action
            animation costs from a 3D studio, is in its own guide.
          </li>
          <li>
            <strong>Pharmacy and service ads.</strong> Consumer ads for a pharmacy, clinic or lab service, where the
            product is the service rather than a prescription drug.
          </li>
          <li>
            <strong>Disease awareness.</strong> Films about a condition that do not promote a product. Your MLR team
            decides where awareness ends and promotion begins.
          </li>
        </ul>
      </GuideSection>

      <GuideSection eyebrow="MLR review" title="What MLR reviewers will ask about AI footage" alt>
        <p>
          Medical, legal and regulatory reviewers judge the finished film. Expect these questions, and ask your studio how
          it answers each one before production starts:
        </p>
        <ol>
          <li>
            <strong>Is anyone on screen presented as a real patient or clinician?</strong> A generated doctor is not a
            doctor. Decide early whether generated people carry a label, and never let one make a first-person claim about
            a result.
          </li>
          <li>
            <strong>Is the science accurate?</strong> Generators invent plausible anatomy, cells and devices. Every
            science shot should be checked against your reference images and data, and rerun when it is wrong.
          </li>
          <li>
            <strong>Is every claim set as text you can approve word for word?</strong> Claims, references, the product
            name and the safety information should be typeset in the edit, never drawn by a generator.
          </li>
          <li>
            <strong>Can a shot be changed without changing the rest?</strong> Regenerating one shot can shift faces,
            light or props. Ask how the studio versions shots so an approved frame stays approved.
          </li>
          <li>
            <strong>Who owns the film and what is licensed?</strong> The contract should cover the final film, project
            files, and licenses for the video models, music and voice.
          </li>
        </ol>
        <p>
          Review rounds are the part of a healthcare video budget that grows most. Plan for them in the schedule.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The rules" title="US and Canadian rules that shape a drug or health ad">
        <p>
          <strong>United States, prescription drugs on TV.</strong> Under{' '}
          <a href={CFR}>21 CFR 202.1(e)(1)(ii)</a>, a consumer TV or radio ad for a prescription drug must present the
          major statement of side effects and contraindications in a &ldquo;clear, conspicuous, and neutral&rdquo; way:
          consumer-friendly language, audio at least as understandable as the rest of the ad, on TV the text on screen at
          the same time as the audio, readable type, and no audio or visual elements likely to interfere with it. For an
          AI film, that rules out busy generated motion behind the major statement.
        </p>
        <p>
          <strong>Canada, prescription drugs.</strong>{' '}
          <a href={CANADA_RX}>Section C.01.044 of the Food and Drug Regulations</a> limits prescription drug advertising
          to the general public to the brand name, proper name, common name, price and quantity. Advertising for health
          products aimed at health professionals is reviewed and precleared by PAAB, and PAAB and Ad Standards give
          advisory opinions on consumer messages (<a href={HC_ADS}>Health Canada</a>, page modified January 2026).
        </p>
        <p>
          <strong>Pharmacies, labs and clinics</strong> advertising their own services answer to other regulators, such
          as state boards of pharmacy and provincial colleges. Ask yours. Which rules reach a pharmacy&apos;s own ad, and the
          Washington, DC pharmacy that apologized for its AI imagery in 2026, are on{' '}
          <Link href="/guides/ai-pharma-commercials">AI pharma commercials</Link>.
        </p>
        <p>
          All sources checked September 2026. This is not legal or regulatory advice. Your MLR team and counsel decide
          what your film can say and show, and {studio} does not certify any ad as compliant.
        </p>
      </GuideSection>

      <GuideSection eyebrow="ISI and fair balance" title="FDA rules for prescription drug TV and video ads" alt>
        <p>
          A video ad for a prescription drug carries three things the creative has to make room for, whether the pictures
          are filmed or generated:
        </p>
        <ul>
          <li>
            <strong>The major statement.</strong> The major side effects and contraindications, spoken in the ad. Under
            the 2023 final rule (<a href={CCN_RULE}>88 FR 80958</a>, compliance date November 20, 2024) it must use
            consumer-friendly language, run as audio and on-screen text at the same time, be easy to read, and have no
            audio or visual elements likely to interfere with comprehension.
          </li>
          <li>
            <strong>Fair balance.</strong> Risk information has to be weighed fairly against the benefit claims across the
            whole ad, not only in the major statement (21 CFR 202.1(e)(5)).
          </li>
          <li>
            <strong>The ISI.</strong> Important Safety Information is the industry name for the risk block that runs with
            or below the ad. FDA&apos;s <a href={RISK_GUIDANCE}>2009 draft guidance on presenting risk information</a>{' '}
            names &ldquo;busy scenes, frequent scene changes, moving camera angles&rdquo; as things that can pull attention
            from risk information.
          </li>
        </ul>
        <p>
          FDA enforces the distraction standard. On September 9, 2025 it announced about 100 cease-and-desist letters
          and thousands of letters warning drug companies to remove misleading ads (<a href={FDA_SEPT}>FDA</a>), and posted untitled letters over TV
          ads, among them one about Linzess that cited &ldquo;frequent scene changes and compelling and attention-grabbing
          visuals&rdquo; (<a href={LINZESS}>letter</a>). A February 2026 letter about Vonjo cited attention-grabbing
          visuals, frequent scene changes and background music (<a href={VONJO}>letter</a>). FDA&apos;s{' '}
          <a href={AGENDA}>regulatory agenda</a> also lists a proposed rule, planned for December 2026, to require the
          full risk information inside every broadcast ad.
        </p>
        <p>
          For an AI film, that means the shots under the major statement are chosen to sit still, the ISI is typeset from
          approved copy rather than generated, and the edit leaves time for a risk section that may get longer. Which drug
          brands have already run AI-made ads, and why they used animals instead of patients, is on{' '}
          <Link href="/guides/ai-pharma-commercials">AI pharma commercials</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The weak points" title="What breaks in AI medical imagery">
        <GuideTable
          caption="Where generated footage fails in pharma and medical work, and the fix to expect. These are the shots the Ruminate X pipeline gives extra generation passes and checks against the client's references."
          head={['Problem', 'Why it matters here', 'The fix']}
          rows={[
            ['Anatomy and cells', 'An extra organ or a wrong cell shape is a scientific error on screen', 'Check every science shot against reference images; rerun, or brief a 3D medical animator for exact figures'],
            ['Pills, packs and devices', 'A tablet or pen that is almost right is the wrong product', 'Work from real product images; composite the real pack or device in the edit'],
            ['Claims, ISI and on-screen text', 'Warped words in a safety statement are unreviewable', 'Typeset every word in the edit from approved copy'],
            ['People who look like patients or clinicians', 'Viewers may take them for real people giving real testimony', 'Decide on labels with MLR; never script a generated person as a real patient'],
            ['Continuity between shots', 'A lab coat, room or light that changes reads as careless', 'Lock the look in boards; grade the shots together; regenerate what drifts'],
          ]}
        />
      </GuideSection>

      <GuideFit
        title="Should Ruminate X make your healthcare film?"
        hire={[
          'A pharma or biotech brand manager who needs a cinematic brand or disease-awareness film and has an MLR process for the claims.',
          'A pharmacy group or clinic that needs a consumer ad or company film without booking a shoot in its stores.',
          'A lab or diagnostics company that needs to show science no camera can film.',
          'A medical company that needs an about-us or recruiting film built on a made world rather than its own staff.',
        ]}
        instead={[
          'A real clinician, researcher or patient must speak for themselves: hire a medical production company.',
          'The film has to show your actual lab, clinic, procedure or device in use: film it.',
          'The visual must be scientifically exact to published data: hire a 3D medical animation studio.',
          'You need many short training or internal update videos: an avatar tool such as Synthesia or HeyGen costs less.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/guides/ai-pharma-commercials', title: 'AI pharma commercials', note: 'Breztri, Descovy and the Puppramin spec ad, and the FDA rules behind them.' },
          { href: '/ai-brand-film-agency', title: 'AI brand film production', note: 'What a brand film is, what it costs, and when to film instead.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'How a 15 to 60 second AI ad gets made, and what breaks.' },
          { href: '/blog/how-much-does-ai-video-production-cost', title: 'How much AI video production costs', note: 'Published prices, and why review rounds add cost.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'The pipeline, stage by stage.' },
        ]}
      />

      <GuideCta
        title="Send the brief and your review process"
        body="Tell us the product or service, the audience (consumers or health professionals), the markets, and how many MLR rounds to plan for."
      />
    </Guide>
  )
}
