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
import { BUYERS, OFFERS, PRODUCTION, SITE, inSentence, priceLine } from '@/lib/seo/facts'

const studio = SITE.name
const city = SITE.city.split(',')[0]
const joinAnd = (items: readonly string[]) =>
  items.length > 1 ? `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}` : items.join('')
const offer = (key: string) => {
  const found = OFFERS.find((o) => o.key === key)
  if (!found) throw new Error(`Unknown offer "${key}". Add it to lib/seo/facts.ts first.`)
  return found
}

/** What Ruminate X makes for healthcare buyers, from OFFERS, with what each one is for in this field. */
const HEALTH_OFFERS = [
  {
    key: 'commercial',
    use: 'Consumer ads for a pharmacy, clinic or lab service, disease-awareness spots that do not promote a product, and branded drug ads with the major statement typeset and timed to the voiceover, for TV, streaming, web and social. Your MLR team decides where awareness ends and promotion begins.',
  },
  {
    key: 'brand-film',
    use: 'What a pharma company, pharmacy group or lab stands for, for the homepage, investors, conferences and recruiting. Science appears as light, particles, scale and motion, the feeling of a cell rather than a specific receptor, and your medical reviewer checks every science shot.',
  },
  {
    key: 'about-us',
    use: 'A film that introduces a medical company, its mission or its work. Every frame is generated, so the film tells the story with generated people, places and products, not footage of your staff, labs or clinics.',
  },
  {
    key: 'product-visuals',
    use: "Product films and stills for a pharmacy's own range, a device, a test kit or a pack. The real product is set in the edit from your product files, so what is on screen is your product and not the generator's guess at it.",
  },
  {
    key: 'avatar',
    use: 'A generated presenter who reads approved copy, for training, internal updates and service explainers. A generated presenter never speaks as a clinician, and your reviewers decide whether the video carries an AI label.',
  },
]
const healthOffers = joinAnd(HEALTH_OFFERS.map(({ key }) => inSentence(offer(key).name)))
const healthBuyers = joinAnd(BUYERS.filter((b) => /pharma|labs|medical/.test(b)))

const PAGE = {
  path: '/ai-video-production-healthcare',
  title: 'AI Video Production for Pharma and Healthcare',
  description: `${studio} makes ${healthOffers} for ${healthBuyers}. Every frame is generated with AI, and every claim, the ISI and the fair-balance text are set in the edit from MLR-approved copy. Plus the FDA and Health Canada rules that shape a drug or health video, and what breaks in AI medical imagery.`,
  published: '2026-03-07',
  updated: '2026-10-28',
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
    q: 'Who makes AI video for pharma and healthcare companies?',
    a: `${studio}, an AI film studio in ${city}, makes ${healthOffers} for ${healthBuyers}. Every frame is generated with AI, and people write, board, edit, mix and grade every film. Your medical, legal and regulatory (MLR) reviewers sign off on every claim, and ${studio} sets each claim, the ISI and the fair-balance text in the edit from the copy they approved, never in the generator.`,
  },
  {
    q: 'Can I use AI to make a marketing video for a pharma or medical brand?',
    a: `Yes. Nothing in the US or Canadian drug-advertising rules forbids AI-generated footage; the rules govern what the ad says and how risk information is shown, whoever made the pictures. The video still goes through your medical, legal and regulatory (MLR) review, and your reviewers decide whether AI imagery of patients or clinicians needs a label. ${studio} makes these films with every claim and the safety information set in the edit from the copy your reviewers approved. This is not legal or regulatory advice.`,
  },
  {
    q: 'Which AI tool is best for the pharmaceutical industry?',
    a: `For a consumer ad, brand film or company film, the generator matters less than who directs it. Generators draw text as shapes and invent plausible anatomy, so a drug or health film needs a studio that checks every science shot against your references, regenerates the shots that fail, and typesets every claim, the ISI and the fair-balance text in the edit. ${studio}, an AI film studio in ${city}, makes films that way for ${healthBuyers}, and your MLR reviewers sign off on every claim.`,
  },
  {
    q: 'How much does AI video production cost for a pharma or healthcare company?',
    a: `${priceLine('commercial')}. The price moves with length, the number of scenes, how exactly your pack or device has to appear, the number of versions and cutdowns, and how many MLR review rounds your team needs. There is no shoot to pay for, but each review round is a new cut, so ${studio} plans the rounds into the schedule at the brief.`,
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
    a: `ISI stands for Important Safety Information, the industry name for the block of risk information that runs with a drug ad or sits below it on a web page. FDA regulations do not use the term; they require a major statement of side effects and contraindications in broadcast ads and a brief summary of risks, and FDA's 2009 draft guidance on presenting risk information explains how to show it without distraction. In a ${studio} film, the ISI is typeset in the edit from MLR-approved copy.`,
  },
  {
    q: 'Are pharmaceutical commercials going to be banned?',
    a: 'No ban has been proposed. In September 2025 a presidential memorandum told HHS to increase the risk information drug ads must carry, and FDA sent letters to drug companies about misleading ads. FDA\'s regulatory agenda lists a proposed rule, planned for December 2026, that would require broadcast drug ads to carry the full risk information inside the ad instead of pointing to a website or phone number. FDA\'s own summary says it is not a ban (reginfo.gov, RIN 0910-AJ14, checked October 2026).',
  },
  {
    q: 'Can Canadian pharma companies run consumer video ads for prescription drugs?',
    a: 'Only in a narrow form. Section C.01.044 of Canada\'s Food and Drug Regulations limits prescription drug advertising to the general public to the brand, proper and common name, price and quantity. Whether a disease-awareness or brand film counts as drug advertising is a call for your regulatory team; PAAB and Ad Standards give advisory opinions on consumer messages (Health Canada, checked September 2026).',
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide
      page={PAGE}
      faqs={FAQS}
      service={{
        name: 'AI video production for pharma and healthcare',
        description: `${studio} makes ${healthOffers} for pharma companies, pharmacies, labs and medical companies, with every frame generated by AI and every claim, the ISI and the fair-balance text set in the edit from MLR-approved copy.`,
        audience: ['pharma companies', 'pharmacies', 'labs', 'medical companies'],
      }}
    >
      <GuideHero
        eyebrow="Pharma, pharmacy, labs, medical"
        title="AI video production for pharma and healthcare marketing"
        dek="For the pharma brand manager, pharmacy marketing lead, lab or diagnostics marketer, or medical company comms head who wants a film or ad made with AI and needs every claim in it to get through MLR."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          AI video production for pharma and healthcare means making commercials and films with generative AI instead of a
          shoot, then putting them through the same medical, legal and regulatory (MLR) review as filmed work. {studio},
          an AI film studio in {city}, makes {healthOffers} for {healthBuyers}: every frame generated with AI, with the
          script, boards, edit, sound and grade done by people. Your reviewers sign off on every claim, and {studio} sets
          each claim, the ISI and the fair-balance text in the edit from the copy they approved, never in the generator. The
          US and Canadian drug-advertising rules apply the same way whether the pictures were filmed or generated.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="What we make" title={`What ${studio} makes for pharma, pharmacy, lab and medical companies`}>
        <p>
          {studio} makes films for {healthBuyers}. {PRODUCTION.summary}
        </p>
        <ul>
          {HEALTH_OFFERS.map(({ key, use }) => {
            const o = offer(key)
            return (
              <li key={key}>
                <strong>{o.path ? <Link href={o.path}>{o.name}</Link> : o.name}.</strong> {use}
              </li>
            )
          })}
        </ul>
      </GuideSection>

      <GuideSection eyebrow="MLR review" title="How every claim gets through MLR" alt>
        <p>
          Your medical, legal and regulatory reviewers sign off on every word and every frame. {studio} builds the film so
          they can:
        </p>
        <ol>
          <li>
            <strong>Approved copy comes first.</strong> Your MLR team approves the script, the claims, the references, the
            ISI and the fair-balance text before a frame is generated, so the pictures are made to fit approved words.
          </li>
          <li>
            <strong>Boards before generation.</strong> Reviewers see the script broken into shots, with framing, motion and
            duration, before anything is generated, and can strike a shot that implies a claim the copy does not make.
          </li>
          <li>
            <strong>Every claim is set in the edit.</strong> Each claim, the product name, the ISI and the fair-balance text
            are typeset in the edit from the approved copy, never drawn by the generator, so reviewers approve exact words.
          </li>
          <li>
            <strong>Calm shots under the major statement.</strong> The pictures behind the risk information are chosen to
            sit still, because FDA bars visual elements likely to interfere with it.
          </li>
          <li>
            <strong>Science checked against your references.</strong> Your reference images go in the brief, and your
            medical reviewer sees every science shot at the board and rough-cut stages. A shot that reads as a wrong
            mechanism is regenerated or cut.
          </li>
          <li>
            <strong>No generated person speaks as a real one.</strong> Generated people are portrayals. None makes a
            first-person claim about a result, and whether they carry an AI label is agreed with your reviewers at the
            brief.
          </li>
          <li>
            <strong>Notes come back as a new cut.</strong> Boards and reference frames lock the characters, sets and light,
            so a shot regenerated after review still matches the frames already approved.
          </li>
        </ol>
        <p>
          {priceLine('commercial')}, and the quote counts the MLR rounds your calendar needs, because each round is a new
          cut. Ownership and licensing clauses for a commissioned AI film are in{' '}
          <Link href="/guides/who-owns-ai-video">who owns an AI video</Link>.
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
          as US state boards of pharmacy and the colleges that regulate health professions in Canada. Ask yours. Which
          rules reach a pharmacy&apos;s own ad, and the Washington, DC pharmacy that apologized for its AI imagery in 2026,
          are on <Link href="/guides/ai-pharma-commercials">AI pharma commercials</Link>.
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
          In a {studio} film, the shots under the major statement are chosen to sit still, the ISI is typeset from approved
          copy, and the edit leaves room for a risk section that may get longer. Which drug brands have already run AI-made
          ads, and why they used animals instead of patients, is on{' '}
          <Link href="/guides/ai-pharma-commercials">AI pharma commercials</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The weak points" title={`What breaks in AI medical imagery, and how ${studio} fixes it`}>
        <GuideTable
          caption={`Where generated footage fails in pharma and medical work. Faces, hands and the product get the most generation passes in the ${studio} pipeline, and every science shot is checked against your references.`}
          head={['Problem', 'Why it matters here', `How ${studio} fixes it`]}
          rows={[
            ['Anatomy and cells', 'An extra organ or a wrong cell shape is a scientific error on screen', 'Your medical reviewer checks every science shot against your reference images; a wrong shot is regenerated, or the scene is rewritten so it does not depend on exact structure'],
            ['Pills, packs and devices', 'A tablet or pen that is almost right is the wrong product', 'The real tablet, pack or device is set in the edit from your product files'],
            ['Claims, ISI and on-screen text', 'Warped words in a safety statement are unreviewable', 'Every word is typeset in the edit from approved copy'],
            ['People who look like patients or clinicians', 'Viewers may take them for real people giving real testimony', 'Labels agreed with MLR at the brief; no generated person is scripted as a real patient'],
            ['Continuity between shots', 'A lab coat, room or light that changes reads as careless', 'The look is locked in boards, the shots are graded together, and what drifts is regenerated'],
          ]}
        />
      </GuideSection>

      <GuideFit
        title={`Why pharma and healthcare marketers hire ${studio}`}
        hire={[
          'A pharma or biotech brand manager with an MLR calendar and no budget for a shoot.',
          'A pharmacy group or clinic that needs a consumer ad or company film without a shoot in its stores.',
          'A lab or diagnostics company that needs to show its science at a scale no camera reaches.',
          'A medical company that needs an about-us or recruiting film told with generated people, places and products.',
        ]}
        get={[
          'Every claim, the ISI and the fair-balance text typeset in the edit from copy your MLR team approved, never drawn by the generator.',
          'Boards and a shot list your reviewers see before a frame is generated.',
          'Calm shots under the major statement, and your real logo, pack or device set in the edit from your files.',
          'Science shots checked against your references, and regenerated or cut when they read wrong.',
          'The cutdowns and aspect ratios each channel needs, cut from the same film.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/guides/ai-pharma-commercials', title: 'AI pharma commercials', note: 'Breztri, Descovy, and whether the Saphnelo, Icotyde and Peak Blue Rx ads are AI.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'How a 15 to 60 second AI ad gets made, and what breaks.' },
          { href: '/ai-brand-film-agency', title: 'AI brand film production', note: `What a brand film is, and how ${studio} makes one.` },
          { href: '/guides/ai-medical-animation', title: 'Medical animation cost', note: 'What medical animation costs a minute, and which science shots AI can show.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'The pipeline, stage by stage.' },
        ]}
      />

      <GuideCta
        title="Send the brief and your review process"
        body={`Tell us the product or service, the audience (consumers or health professionals), the markets, and how many MLR rounds to plan for. ${studio} comes back with a creative brief and a quote.`}
      />
    </Guide>
  )
}
