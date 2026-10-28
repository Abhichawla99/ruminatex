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
import { OFFERS, PRODUCTION, SITE, priceLine } from '@/lib/seo/facts'

const studio = SITE.name
const city = SITE.city.split(',')[0]
const offer = (key: string) => {
  const found = OFFERS.find((o) => o.key === key)
  if (!found) throw new Error(`Unknown offer "${key}". Add it to lib/seo/facts.ts first.`)
  return found
}

/** What Ruminate X makes for financial brands, from OFFERS, with what each one is for in this field. */
const FINANCE_OFFERS = [
  {
    key: 'commercial',
    use: 'TV, streaming, web and social ads for an account, a card, a loan, a policy or an advisory service, with every rate, figure and disclaimer typeset in the edit from approved copy.',
  },
  {
    key: 'brand-film',
    use: 'What a bank, insurer or wealth firm stands for, for the homepage, investor days, conferences and recruiting.',
  },
  {
    key: 'about-us',
    use: 'A film that introduces the firm, its mission or its work. Every frame is generated, so the film tells the story with generated people, places and products, not footage of your advisers, branches or staff.',
  },
  {
    key: 'avatar',
    use: 'A generated presenter who reads approved copy, for product explainers, onboarding and internal updates. Under the SEC marketing rule a testimonial is a statement by a current client, so a generated presenter can explain a product but cannot give one.',
  },
]

const PAGE = {
  path: '/ai-video-production-finance',
  title: 'AI Video Production for Finance and Fintech',
  description: `${studio} makes AI commercials, brand films and company films for banks, fintech companies, insurers and wealth firms, with every frame generated and every rate, figure and disclaimer set in the edit from the copy your compliance team approved. Plus the SEC, FINRA, deposit and loan advertising rules a financial video has to meet.`,
  published: '2026-03-07',
  updated: '2026-10-28',
  keywords: [
    'AI video production finance',
    'fintech video production agency',
    'financial services brand video',
    'AI explainer video finance',
    'banking brand video',
    'investment firm video content',
  ],
}

const SEC_RULE = 'https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.206(4)-1'
const REG_DD = 'https://www.ecfr.gov/current/title-12/chapter-X/part-1030/section-1030.8'
const REG_Z = 'https://www.ecfr.gov/current/title-12/chapter-X/part-1026/subpart-C/section-1026.24'
const FDIC_AD = 'https://www.ecfr.gov/current/title-12/chapter-III/subchapter-B/part-328/subpart-A/section-328.6'
const STATE_INSURANCE = 'https://www.law.cornell.edu/uscode/text/15/1012'
const FCAC_INVESTMENTS = 'https://www.canada.ca/en/financial-consumer-agency/services/rights-responsibilities/rights-investing/make-complaint-investments.html'

const FAQS = [
  {
    q: 'Who makes AI video for banks, fintech and financial services companies?',
    a: `${studio}, an AI film studio in ${city}, makes AI commercials, brand films and company films for banks, fintech companies, insurers and wealth firms. Every frame is generated with AI, and people write, board, edit, mix and grade every film. Your compliance team approves the script before anything is generated, and every rate, figure and disclaimer is set in the edit from the copy they approved, never drawn by the generator.`,
  },
  {
    q: 'Can a bank or financial firm use AI-generated video in its ads?',
    a: `Yes. The US and Canadian rules on financial advertising govern what an ad says and shows, whoever made the pictures, so a generated film goes through the same review as a filmed one: approval by a registered principal under FINRA Rule 2210 for a broker-dealer, the SEC marketing rule for an investment adviser, and Regulation DD and Regulation Z for deposit and loan ads. ${studio} makes these films with every rate, figure and disclaimer set in the edit from approved copy. This is not legal advice.`,
  },
  {
    q: 'Can an AI-generated person give a testimonial in a financial ad?',
    a: 'No. Under the SEC marketing rule a testimonial is a statement by a current client or private fund investor about their experience with the adviser (17 CFR 275.206(4)-1(e)(17)), and an ad that includes one must disclose clearly and prominently that it came from a current client, whether they were paid, and any material conflicts. FINRA Rule 2210 requires a testimonial about investment advice or performance to disclose that it may not be representative, that it is no guarantee of future performance, and that it was paid if more than $100 was paid. A generated person is not a client. A generated presenter can explain a product; it cannot speak as a client. This is not legal advice.',
  },
  {
    q: 'Do financial video ads need FINRA approval?',
    a: 'They need approval inside the firm, and some need filing with FINRA. Under FINRA Rule 2210 an appropriately qualified registered principal of the member firm must approve each retail communication before it is used or filed with FINRA\'s Advertising Regulation Department. For its first year, a new member firm files retail communications in public media, television and video included, at least 10 business days before first use. A firm that files a draft or storyboard of a TV or video ad must also file the final filmed version within 10 business days of first use or broadcast. This is not legal advice.',
  },
  {
    q: 'What disclosures does a bank TV commercial need?',
    a: 'It depends on what the ad says. Under Regulation DD (12 CFR 1030.8), a deposit ad that states a rate of return must call it the "annual percentage yield", and one that states the APY must give terms such as the minimum balance needed to earn it, though TV and radio ads are exempt from several of those terms. Ads that promote deposit products, or the bank\'s services in general, carry the FDIC\'s official advertising statement, such as "Member FDIC"; radio and TV ads of 30 seconds or less, other than display ads, are among the exemptions (12 CFR 328.6). An ad for a closed-end loan that names a down payment, the number of payments, a payment amount or a finance charge must also give the down payment, the repayment terms and the APR, or on TV or radio the APR and a toll-free number for the rest (12 CFR 1026.24). This is not legal advice.',
  },
  {
    q: 'How much does AI video production cost for a financial services company?',
    a: `${priceLine('commercial')}. The price moves with length, the number of scenes, the number of versions and cutdowns, how many disclosures each version carries, and how many compliance review rounds your team needs. There is no shoot to pay for, but each review round is a new cut, so ${studio} plans the rounds into the schedule at the brief.`,
  },
  {
    q: 'Who regulates investment ads in Canada?',
    a: 'In Canada, securities regulation is the responsibility of the provincial and territorial governments, and CIRO, the national self-regulatory organization, oversees all investment dealers and mutual fund dealers (Financial Consumer Agency of Canada, read October 28, 2026). Ask which of them regulates your firm; their rules on sales communications apply to a generated film the same way as to a filmed one. This is not legal advice.',
  },
  {
    q: 'How do I hire a studio to make a financial services commercial with AI?',
    a: `Send ${studio} the product or service, the audience, the markets, the claims, rates and disclosures your compliance team has approved, and how many review rounds to plan for. ${studio} comes back with a creative brief and a quote, and your reviewers see the script and the shot list before any frame is generated. Ask any studio how it puts numbers and legal lines on screen; ${studio} typesets every one in the edit from your approved copy.`,
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide
      page={PAGE}
      faqs={FAQS}
      service={{
        name: 'AI video production for financial services',
        description: `${studio} makes AI commercials, brand films and company films for banks, fintech companies, insurers and wealth firms, with every frame generated by AI and every rate, figure and disclaimer set in the edit from copy the client's compliance team approved.`,
        audience: ['banks and credit unions', 'fintech companies', 'insurers', 'wealth and investment firms'],
      }}
    >
      <GuideHero
        eyebrow="Banks, fintech, insurers, wealth firms"
        title="AI video production for finance and fintech brands"
        dek="For the marketing lead at a bank, fintech, insurer or wealth firm who wants a commercial or brand film made with AI, and needs every rate, figure and disclaimer in it to get through compliance."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          AI video production for finance means making commercials and brand films for banks, fintech companies, insurers
          and wealth firms with generative AI instead of a shoot, then putting them through the same compliance review as
          filmed work. {studio}, an AI film studio in {city}, makes AI commercials, brand films and company films for
          financial brands: every frame generated with AI, with the script, boards, edit, sound and grade done by people.
          Your compliance team signs off on the script before anything is generated, and every rate, figure and disclaimer
          is set in the edit from the copy they approved, never drawn by the generator. In the US, an investment
          adviser&apos;s ad answers to the SEC marketing rule and a broker-dealer&apos;s to FINRA Rule 2210, which requires
          a registered principal to approve each retail communication before it is used or filed.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="What we make" title={`What ${studio} makes for financial brands`}>
        <p>
          {studio} makes films for banks and credit unions, fintech companies, insurers and wealth and advisory firms.{' '}
          {PRODUCTION.summary}
        </p>
        <ul>
          {FINANCE_OFFERS.map(({ key, use }) => {
            const o = offer(key)
            return (
              <li key={key}>
                <strong>{o.path ? <Link href={o.path}>{o.name}</Link> : o.name}.</strong> {use}
              </li>
            )
          })}
        </ul>
      </GuideSection>

      <GuideSection eyebrow="Compliance review" title="How every rate, figure and disclaimer gets through compliance" alt>
        <p>Your compliance team signs off on every word and every frame. {studio} builds the film so they can.</p>
        <ol>
          <li>
            <strong>Approved copy first.</strong> Your compliance team approves the script, every claim, rate and figure,
            and the disclosures before a frame is generated, so the pictures are made to fit approved words.
          </li>
          <li>
            <strong>Boards before generation.</strong> Reviewers see the script broken into shots, with framing, motion and
            duration, before anything is generated, and can strike a shot that implies a claim the copy does not make,
            such as a chart that only goes up.
          </li>
          <li>
            <strong>Every number set in the edit.</strong> Rates, APYs and APRs, fees, performance figures, the disclaimer
            and the legal lines are typeset in the edit from approved copy. Generators draw digits as shapes, and one wrong
            digit in a rate is a wrong number in a regulated ad.
          </li>
          <li>
            <strong>Disclosures for each version.</strong> Each cutdown and aspect ratio gets the disclosures that version
            needs, set in the edit for its frame, and goes to your reviewers as its own file.
          </li>
          <li>
            <strong>No generated person speaks as a client.</strong> Generated people are portrayals. None is scripted to
            describe their own results with your firm, because a testimonial has to come from a real client and carry the
            disclosures the SEC marketing rule and FINRA Rule 2210 require.
          </li>
          <li>
            <strong>Notes come back as a new cut.</strong> Each round of compliance notes comes back as a new cut of the
            whole film, so your reviewers approve the version that will run.
          </li>
        </ol>
        <p>
          {priceLine('commercial')}, and the quote counts the compliance rounds your calendar needs, because each round is
          a new cut. Ownership and licensing clauses for a commissioned AI film are in{' '}
          <Link href="/guides/who-owns-ai-video">who owns an AI video</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The rules" title="US and Canadian rules that shape a financial ad">
        <p>
          These rules govern what an ad says and shows, whoever made the pictures, so a generated film goes through the
          same review as a filmed one.
        </p>
        <GuideTable
          caption={
            <>
              Rule text read October 28, 2026: the <a href={SEC_RULE}>SEC marketing rule</a>,{' '}
              <a href={REG_DD}>Regulation DD</a>, <a href={REG_Z}>Regulation Z</a> and the{' '}
              <a href={FDIC_AD}>FDIC advertising statement rule</a> on the eCFR; FINRA Rule 2210 in FINRA&apos;s rulebook;{' '}
              <a href={STATE_INSURANCE}>15 U.S.C. 1012</a>; and the{' '}
              <a href={FCAC_INVESTMENTS}>Financial Consumer Agency of Canada</a>. Not legal advice. Your compliance team and
              counsel decide what your ad can say and show, and {studio} does not certify any ad as compliant.
            </>
          }
          head={['Who', 'The rule', 'What it means for the film']}
          rows={[
            ['Investment advisers registered with the SEC', 'SEC marketing rule (17 CFR 275.206(4)-1): no untrue statement of a material fact, and no material statement of fact the adviser could not substantiate on the SEC\'s demand; any potential benefit shown with fair and balanced treatment of the material risks; a testimonial (from a current client) or endorsement (from anyone else) only with clear and prominent disclosure of who gave it, any compensation and material conflicts; gross performance only beside net performance', 'Substantiation on file for every claim before generation; no generated person as a client; any performance figure typeset from approved copy, net beside gross'],
            ['Broker-dealers (FINRA members)', 'FINRA Rule 2210: a registered principal approves each retail communication before use or filing; communications must be fair and balanced, with no false, exaggerated, promissory or misleading claim and, outside narrow exceptions, no prediction or projection of performance; a firm that files a draft or storyboard of a TV or video ad files the final filmed version within 10 business days of first use', 'Your principal approves the final cut; no generated chart implies future returns; if you file a storyboard, the final version follows within 10 business days of first use'],
            ['Banks advertising deposits', 'Regulation DD (12 CFR 1030.8): a stated rate of return is the "annual percentage yield"; no "free" account if fees may apply; an ad that states the APY gives terms such as the minimum balance to earn it, with broadcast and electronic media such as TV and radio exempt from several', 'The APY wording, the minimum balance and the other terms are typeset from approved copy'],
            ['FDIC-insured banks', '12 CFR 328.6: ads that promote deposit products, or the bank\'s services in general, carry the official advertising statement, such as "Member FDIC"; radio and TV ads of 30 seconds or less, other than display ads, are among the exemptions', 'Your compliance team decides which cuts carry the statement, and it is set in the edit for each'],
            ['Lenders (closed-end credit)', 'Regulation Z (12 CFR 1026.24): a stated rate is the "annual percentage rate"; a down payment, number of payments, payment amount or finance charge on screen triggers the down payment, repayment terms and APR; a TV or radio ad may give the APR and a toll-free number instead', 'No trigger term goes in the script without the disclosures it requires in the same cut'],
            ['Insurers in the US', 'The business of insurance is subject to the laws of the several states (15 U.S.C. 1012(a))', 'Your compliance team names the states whose advertising rules apply'],
            ['Canada', 'Securities regulation is the responsibility of the provincial and territorial governments; CIRO, the national self-regulatory organization, oversees all investment dealers and mutual fund dealers', 'Ask which regulator covers your firm; its rules on sales communications apply to a generated film as to a filmed one'],
          ]}
        />
        <p>
          The same review applies to a generated presenter. What an AI presenter may say, and when it needs a label, is on{' '}
          <Link href="/ai-avatar-videos">AI avatar videos</Link>; why a generated person cannot give a testimonial under the
          FTC rule is on <Link href="/ai-testimonial-videos">AI testimonial videos</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The weak points" title={`What breaks in AI financial imagery, and how ${studio} fixes it`} alt>
        <GuideTable
          caption={`Where generated footage fails in financial ads. Faces, hands and the product get the most generation passes in the ${studio} pipeline, and every number on screen is typeset from approved copy.`}
          head={['Problem', 'Why it matters here', `How ${studio} fixes it`]}
          rows={[
            ['Numbers on screen', 'A generated digit in a rate or a fee is a wrong number in a regulated ad', 'Every number is typeset in the edit from approved copy, never generated'],
            ['Charts', 'A generated chart that climbs reads as a performance claim', 'Charts with data are typeset from approved figures; generated shots carry no data'],
            ['Phones and app screens', 'A generated screen shows features your app does not have', 'The screen shows an approved image from your files, set in the edit, or stays out of focus'],
            ['Cards and logos', 'A card with the wrong mark, or a near-copy of your logo', 'Your card art and logo are set in the edit from your files'],
            ['People who look like clients or advisers', 'Viewers may take them for real clients describing real results', 'Generated people are portrayals; none is scripted as a client describing results'],
            ['Hands with cards and phones', 'Fingers merge with the card, the phone changes shape between cuts', 'Hands get the most generation passes; a shot that will not hold is regenerated or cut'],
          ]}
        />
      </GuideSection>

      <GuideFit
        title={`Why financial brands hire ${studio}`}
        hire={[
          'A bank or credit union marketing lead who needs a TV or social spot for an account or a card, with the APY and every disclosure exactly as compliance approved it.',
          'A fintech growth team launching an app, a card or a loan product that wants a commercial without a shoot.',
          'An insurer that needs a brand film or commercial told with generated people, places and products.',
          'A wealth or advisory firm that wants a brand film about how it works with clients, reviewed under the SEC marketing rule before it runs.',
        ]}
        get={[
          'A script and shot list your compliance team approves before a frame is generated.',
          'Every rate, figure, disclaimer and legal line typeset in the edit from approved copy, never drawn by the generator.',
          'Your logo and card art set in the edit from your files.',
          'The cutdowns and aspect ratios each channel needs, each with the disclosures that version requires.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'How an AI ad gets made, and what breaks.' },
          { href: '/ai-brand-film-agency', title: 'AI brand film production', note: `What a brand film is, and how ${studio} makes one.` },
          { href: '/ai-corporate-video-production', title: 'AI corporate video production', note: 'About-us and company films told with generated people, places and products.' },
          { href: '/ai-avatar-videos', title: 'AI avatar videos', note: 'A generated presenter for explainers and onboarding, and the disclosure rules.' },
          { href: '/ai-testimonial-videos', title: 'AI testimonial videos', note: 'Why a generated person cannot give a testimonial, and what the FTC requires.' },
        ]}
      />

      <GuideCta
        title="Send the brief and your review process"
        body={`Tell us the product or service, the markets, the approved claims and disclosures, and how many compliance rounds to plan for. ${studio} comes back with a creative brief and a quote.`}
      />
    </Guide>
  )
}
