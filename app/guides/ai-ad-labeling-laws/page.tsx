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
import { BUYERS, MARKETS, PRODUCTION, SITE, priceLine } from '@/lib/seo/facts'

const studio = SITE.name
const price = priceLine('commercial')

const PAGE = {
  path: '/guides/ai-ad-labeling-laws',
  title: 'AI Ad Labeling Laws in the US',
  description: `Do AI ads have to be labeled in the US? No federal law requires it, but New York requires a disclosure when an ad shows a synthetic performer, Pennsylvania's Act 99 requires one when AI content could mislead about the product, and Meta, Google and TikTok have their own rules. ${studio} makes AI commercials and sets the label in the edit.`,
  published: '2026-11-14',
  updated: '2026-11-14',
  keywords: [
    'do ai ads have to be labeled',
    'do ai ads have to be labeled in the us',
    'do ads have to disclose ai',
    'ny synthetic performer law',
    'synthetic performers in advertising',
    'n.y. gen bus law 396-b',
    'do ai ads have to be labeled on facebook',
    'is it legal to use ai in commercials',
  ],
}

const NY_LAW = 'https://www.nysenate.gov/legislation/laws/GBS/396-B'
const NY_AP = 'https://apnews.com/article/new-york-ai-law-hochul-synthetic-performers-e433625bfb61c8abeab0d619869192ed'
const PA_ACT = 'https://www.palegis.us/legislation/bills/2025/sb806'
const PA_TEXT = 'https://www.palegis.us/legislation/bills/text/PDF/2025/0/SB0806/PN1808'
const FTC_465 = 'https://www.law.cornell.edu/cfr/text/16/465.2'
const FTC_255 = 'https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-255/section-255.2'
const FDA_202 = 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-202/section-202.1'
const GOOGLE_ADS = 'https://support.google.com/adspolicy/answer/17257106?hl=en'
const META_ADS = 'https://www.meta.com/help/artificial-intelligence/355108217670024/'
const TIKTOK = 'https://www.tiktok.com/community-guidelines/en/integrity-authenticity'
const FDA_PLAIN = 'https://www.govinfo.gov/content/pkg/FR-2023-11-21/pdf/2023-25428.pdf'
const EU_ART50 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50'

const FAQS = [
  {
    q: 'Do AI ads have to be labeled in the US?',
    a: `Sometimes. No federal law requires a label on an AI-generated commercial ad (checked November 2026); the FTC polices deception instead. Two states have label laws: New York's General Business Law 396-b, in force since June 9, 2026, requires a conspicuous disclosure when an ad shows a synthetic performer (a generated person), and Pennsylvania's Act 99 of 2026, in force 60 days after its October 22, 2026 approval, requires a clear "made with AI" disclosure when AI content in an ad could create a false impression about the product. Meta, Google and TikTok add their own labels. ${studio}, an AI film studio that makes commercials for US brands, sets the disclosure in the edit. This is not legal advice.`,
  },
  {
    q: 'Do ads have to disclose AI?',
    a: `Only in some cases, and the trigger is what the AI shows, not the fact that AI was used. In the US, a generated person in an ad that runs in New York needs a disclosure; AI content that could mislead about what is sold needs one in Pennsylvania; an AI script, an AI-written caption or a clearly animated world usually needs none. Whatever the label says, the FTC still bans an ad that misleads, and its reviews rule (16 CFR 465.2) bans testimonials from people who do not exist, labeled or not. This is not legal advice.`,
  },
  {
    q: 'What is the New York synthetic performer law?',
    a: 'It is section 396-b of New York\'s General Business Law, in force since June 9, 2026. A business that creates an ad for a commercial purpose must conspicuously disclose in the ad that a synthetic performer is in it, when it actually knows one is. A synthetic performer is a digitally created asset, often made with generative AI, meant to look like a human performance by someone who is not an identifiable real person. Ads for films, TV shows and games, audio-only ads and AI used only to translate a real performer\'s speech are exempt, and so are the media outlets that run the ad. The civil penalty is USD 1,000 for a first violation and USD 5,000 for each one after. This is not legal advice.',
  },
  {
    q: 'Does Pennsylvania require AI labels on ads?',
    a: 'Yes, from 60 days after October 22, 2026. Act 99 of 2026, the Artificial Intelligence Deceptive Advertising Act, says an advertiser may not run an ad that uses AI-generated or significantly AI-modified images, video, audio or text in a way that creates a false impression about the nature, origin or authenticity of what is sold, without a clear and conspicuous statement that the ad contains content modified or generated using AI. The statement appears the first time the synthetic content does, in the same medium, and is hard to remove where that is technically feasible. Evidently fictional content, parody and text-only content are exempt. The Attorney General or a district attorney enforces it, with a civil fine of up to USD 3,000 plus attorney fees. This is not legal advice.',
  },
  {
    q: 'Do AI ads have to be labeled on Facebook?',
    a: 'Meta labels them for you in some cases. Meta adds an "AI info" label to ad images created or significantly edited with its own generative AI features or with third-party AI tools, shown on the "About this ad" screen and sometimes next to the Sponsored label; political and social-issue ads must disclose AI use themselves. Meta\'s label does not satisfy a state law on its own: a New York or Pennsylvania disclosure belongs in the ad itself. This is not legal advice.',
  },
  {
    q: 'Who can make an AI commercial that meets US labeling rules?',
    a: `${studio} is an AI film studio that makes AI commercials and brand films for brands across the United States and Canada, with every frame generated by AI and the script, boards, edit, sound and grade done by people. The markets an ad will run in are part of the brief, and the AI disclosure is typeset in the edit, timed to the first generated shot and carried into every cutdown and aspect ratio. Generated people never pose as customers. ${price}. Your counsel or regulatory team signs off the final wording.`,
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
      service={{
        name: 'AI commercial production for US brands',
        description: `${studio} makes AI commercials and brand films for US brands, with every frame generated by AI and the AI disclosure each market requires set in the edit.`,
        audience: [...BUYERS],
      }}
    >
      <GuideHero
        eyebrow="US rules · AI disclosure"
        title="AI ad labeling laws: when a US ad needs an AI label"
        dek="For the brand manager, performance marketer or agency producer about to run an ad made with AI in the US, who wants to know which states and platforms require a label, what triggers it, and what it has to look like."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          No federal law requires a label on an AI-generated commercial ad in the US, but two states do in specific cases.
          New York requires a conspicuous disclosure when an ad shows a synthetic performer, a generated person (General
          Business Law 396-b, in force since June 9, 2026). Pennsylvania&apos;s Act 99 of 2026 requires a clear statement
          that the ad contains AI-generated or AI-modified content when that content could create a false impression about
          the product, from 60 days after its October 22, 2026 approval. Meta, Google and TikTok add their own labels, and
          the FTC bans misleading ads and fake testimonials whether or not they are labeled.
        </p>
      </GuideAnswer>

      <GuideStudio title={`${studio} makes AI commercials with the label built in`}>
        <p>
          {studio} is an AI film studio that makes AI commercials and brand films for US brands. {PRODUCTION.summary} The
          markets your ad will run in go into the brief, and the disclosure is typeset in the edit like any other on-screen
          line. {price}. See <Link href="/ai-commercial-production">AI commercial production</Link> or{' '}
          <Link href="/markets/ai-video-production-usa">AI commercial production for US brands</Link>.
        </p>
      </GuideStudio>

      <GuideSection id="federal" eyebrow="Federal" title="Is there a federal AI label law for ads?">
        <p>
          Not for commercial ads, as of November 2026. The Federal Trade Commission has no rule that requires a label on
          AI footage. It polices what the ad claims and who it says is speaking, and two of its rules decide most AI
          ads:
        </p>
        <ul>
          <li>
            The <a href={FTC_465}>rule on consumer reviews and testimonials (16 CFR 465.2)</a> makes it unfair or deceptive
            to create or spread a review or testimonial that misrepresents that the reviewer exists or used the product. A
            generated person saying &quot;I tried it and it worked&quot; breaks it, and a label does not cure it.
          </li>
          <li>
            The <a href={FTC_255}>Endorsement Guides (16 CFR 255.2)</a> say an ad presented as showing actual consumers
            should use actual consumers or clearly disclose that it does not.
          </li>
        </ul>
        <p>
          For a prescription drug ad, FDA&apos;s rules apply on top: <a href={FDA_202}>21 CFR 202.1</a> requires the major
          statement of side effects and fair balance whether the pictures were filmed or generated. Political ads are
          covered by separate state laws and platform rules and are outside this guide.
        </p>
      </GuideSection>

      <GuideSection id="new-york" eyebrow="New York" title="New York's synthetic performer law (GBL 396-b)" alt>
        <p>
          <a href={NY_LAW}>Section 396-b of the General Business Law</a> took effect on June 9, 2026 (<a href={NY_AP}>AP</a>).
          Read November 14, 2026:
        </p>
        <ul>
          <li>
            <strong>Who.</strong> A person in the business of selling property or services who creates an ad for a
            commercial purpose, when they have actual knowledge that a synthetic performer is in it.
          </li>
          <li>
            <strong>What triggers it.</strong> A synthetic performer: a digitally created asset, often made with generative
            AI, meant to give the impression of a human performance by someone who is not recognizable as a real,
            identifiable performer. A generated presenter, actor or person on screen fits; a generated product shot with
            no person does not.
          </li>
          <li>
            <strong>What it requires.</strong> A conspicuous disclosure in the ad that a synthetic performer is in it.
          </li>
          <li>
            <strong>Exempt.</strong> Ads for expressive works such as films, TV shows, streaming programs and video games,
            when the performer is used as in the work; audio-only ads; AI used only to translate a real performer&apos;s
            language; and the newspapers, broadcasters, streaming services and billboard owners that run the ad.
          </li>
          <li>
            <strong>Penalty.</strong> A civil penalty of USD 1,000 for a first violation and USD 5,000 for each one after.
          </li>
        </ul>
      </GuideSection>

      <GuideSection id="pennsylvania" eyebrow="Pennsylvania" title="Pennsylvania's AI Deceptive Advertising Act (Act 99)">
        <p>
          <a href={PA_ACT}>SB 806</a> was approved on October 22, 2026 as Act 99 of 2026 and takes effect 60 days later.
          From the <a href={PA_TEXT}>enacted text (Printer&apos;s No. 1808)</a>, read November 14, 2026:
        </p>
        <ul>
          <li>
            <strong>What triggers it.</strong> An ad that uses synthetic content (an image, video, audio clip or text
            significantly modified or generated by AI) in a way that creates a false consumer perception about the nature,
            origin or authenticity of the goods or services.
          </li>
          <li>
            <strong>What the disclosure says.</strong> That the ad contains content modified or generated using artificial
            intelligence.
          </li>
          <li>
            <strong>Where and how.</strong> Shown the first time the synthetic content is, in the same medium (on screen for
            video, spoken for audio), permanent or very hard to remove where technically feasible, and clear and
            conspicuous: a size, contrast, position and duration a viewer can read, never contradicted or obscured by
            anything around it.
          </li>
          <li>
            <strong>Exempt.</strong> Content that is evidently fictional from its content or context; parody, satire,
            commentary or criticism; content limited to text.
          </li>
          <li>
            <strong>Enforcement.</strong> The Attorney General or a district attorney; a court may award a civil fine of up
            to USD 3,000 plus attorney fees and costs.
          </li>
        </ul>
        <p>
          The act turns on whether the AI content could mislead about what is sold. A generated shot of a real product
          doing something it cannot do is the case it was written for. Whether a generated backdrop behind a real product
          counts is a judgment for your counsel.
        </p>
      </GuideSection>

      <GuideSection id="platforms" eyebrow="Platforms" title="Meta, Google and TikTok labels" alt>
        <ul>
          <li>
            <strong>Meta (Facebook, Instagram).</strong> <a href={META_ADS}>Meta labels ad images</a> created or
            significantly edited with its own generative AI features or with third-party AI tools as &quot;AI info&quot;,
            shown on the &quot;About this ad&quot; screen and sometimes next to Sponsored. Political and social-issue ads
            must disclose AI use themselves.
          </li>
          <li>
            <strong>Google Ads, YouTube and Display &amp; Video 360.</strong> Since July 2026,{' '}
            <a href={GOOGLE_ADS}>Google lets advertisers put text or visual AI labels inside image and video ads</a> without
            breaking its overlay and watermark policies, may label assets made with its own AI tools automatically, and
            names New York among the places that require disclosures. Google says its label setting does not guarantee
            compliance with any law.
          </li>
          <li>
            <strong>TikTok.</strong> <a href={TIKTOK}>TikTok&apos;s Community Guidelines</a> require creators to label
            AI-generated or significantly edited content.
          </li>
        </ul>
        <p>
          A platform label sits in a menu or beside the ad. The New York and Pennsylvania disclosures belong in the ad
          itself, so plan for both. Checked November 14, 2026.
        </p>
      </GuideSection>

      <GuideSection id="checklist" eyebrow="By shot" title="Does my ad need an AI label? A shot-by-shot table">
        <GuideTable
          caption="From the New York and Pennsylvania statute texts, the FTC rules and platform pages linked on this page, read November 14, 2026. Not legal advice."
          head={['What the AI made', 'New York (GBL 396-b)', 'Pennsylvania (Act 99)', 'FTC']}
          rows={[
            ['A generated presenter, actor or person on screen', 'Disclose', 'Disclose if it could mislead about the product', 'Fine as a presenter; never as a customer'],
            ['A generated person giving a customer review', 'Disclose', 'Disclose', 'Banned (16 CFR 465.2); a label does not fix it'],
            ['A photoreal shot of your product', 'No performer, no NY label', 'Disclose if it could mislead about the product', 'The product must look and work as shown'],
            ['An evidently fictional or animated world with no people', 'No', 'Exempt', 'Claims still have to be true'],
            ['An audio-only ad with an AI voice', 'Exempt', 'Spoken disclosure if it could mislead', 'No fake testimonials'],
            ['AI used only to translate a real performer', 'Exempt', 'Disclose if it could mislead', 'As for any ad'],
            ['AI-written script or copy only', 'No', 'Exempt (text only)', 'Claims still have to be true'],
          ]}
        />
      </GuideSection>

      <GuideSection id="how" eyebrow="In the edit" title={`How ${studio} places the label in a film`} alt>
        <p>
          {PRODUCTION.summary} So every {studio} commercial with a person on screen shows a synthetic performer, and the
          question is only where the ad runs. The label is handled like the legal line in any ad:
        </p>
        <ol>
          <li>The brief lists the markets and platforms the ad will run in, including New York and Pennsylvania.</li>
          <li>The script and boards mark every shot with a generated person and every generated product shot.</li>
          <li>
            The disclosure is typeset in the edit, at a size and contrast a viewer can read, on screen from the first
            generated shot and long enough to read, in your brand&apos;s type and the wording your counsel approves.
          </li>
          <li>
            It is burned into the master and every cutdown and aspect ratio, so a 9:16 crop or a 6 second bumper still
            carries it. An audio spot gets it spoken.
          </li>
          <li>
            You get a list of which versions show a generated person, so whoever uploads the ad can set Meta&apos;s and
            Google&apos;s AI disclosure to match.
          </li>
        </ol>
        <p>
          For a drug ad, the label never sits over the major statement. <a href={FDA_PLAIN}>FDA&apos;s 2023 final rule</a>{' '}
          wants that statement free of distracting sounds and visuals (checked November 2026), so the AI line appears with the first generated shot and the risk section stays clean.
          More on <Link href="/guides/ai-pharma-commercials">AI pharma commercials and MLR review</Link>.
        </p>
        <p>
          A generated person can present, demonstrate and act. Every {studio} frame is generated, so an ad that needs a
          real customer or your own staff speaking as themselves is told instead with generated people, places and
          products, and nobody on screen claims to be a customer.
        </p>
      </GuideSection>

      <GuideSection id="eu" eyebrow="Outside the US" title="If the campaign also runs in the EU">
        <p>
          <a href={EU_ART50}>Article 50(4) of the EU AI Act</a> requires anyone deploying AI to make deepfake video, audio
          or images to disclose that the content was artificially generated or manipulated, with a lighter duty for
          evidently artistic, creative, satirical or fictional work. A US brand running the same spot in Europe adds that
          disclosure; it can share the on-screen line made for New York and Pennsylvania. {MARKETS.line}
        </p>
        <p>This guide is not legal or regulatory advice. Your counsel, and for a drug ad your MLR team, decides the final wording.</p>
      </GuideSection>

      <GuideFit
        title={`Who hires ${studio} for AI commercials`}
        hire={[
          'A brand manager launching a national spot that will run in New York and Pennsylvania along with every other state.',
          'A performance marketer running AI presenter or UGC-style ads on Meta, TikTok and YouTube who needs every version labeled.',
          'A pharma or pharmacy marketer whose ad goes through MLR review and has to keep its risk section clean.',
          'An agency producer who wants the AI disclosure solved in the edit, not patched in after delivery.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/markets/ai-video-production-usa', title: 'AI commercial production for US brands', note: 'How a US brand works with the studio, what it costs and the US rules in one table.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'Commercials for TV, streaming and social, with every frame generated.' },
          { href: '/ai-ugc-reels', title: 'AI UGC agency', note: 'Creator-style ads with generated presenters, and why they never pose as customers.' },
          { href: '/guides/ai-pharma-commercials', title: 'AI pharma commercials', note: 'MLR review, the major statement and fair balance in an AI drug ad.' },
          { href: '/guides/who-owns-ai-video', title: 'Who owns an AI video', note: 'Copyright and the contract clauses for AI-generated footage.' },
        ]}
      />

      <GuideCta body="Send what the ad is for, the states and platforms it will run on, and whether a legal or MLR team reviews it." />
    </Guide>
  )
}
