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
  guideMetadata,
} from '@/components/guide/Guide'
import { BUYERS, OFFERS, PRODUCTION, SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/markets/ai-video-production-canada',
  title: 'AI Video Production in Calgary and Canada',
  description:
    'What an AI-only film studio in Calgary makes, what AI video costs in Canada at published prices, the Quebec French rule and Ad Standards preclearance for ads, who owns AI footage under Canadian law, and when to hire a Calgary camera crew instead.',
  published: '2026-03-08',
  updated: '2026-09-25',
  keywords: [
    'ai video production calgary',
    'ai video agency calgary',
    'ai marketing video calgary',
    'ai promo video calgary',
    'synthetic video content calgary',
    'ai video agency canada',
    'ai commercial production company canada',
  ],
}

const studio = SITE.name
const offerNames = OFFERS.map((o) => o.name.toLowerCase()).join(', ')

const CROSSROAD = 'https://crossroadmedia.ca/ai-commercials'
const LEMONLIGHT = 'https://www.lemonlight.com/blog/ai-video-production-cost/'
const VERSELY = 'https://www.versely.studio/blog/how-much-does-an-ai-commercial-cost'
const QC_CHARTER = 'https://www.legisquebec.gouv.qc.ca/en/document/cs/C-11'
const AD_STANDARDS = 'https://adstandards.ca/preclearance/advertising-preclearance/'
const AD_STANDARDS_KIDS = 'https://adstandards.ca/preclearance/advertising-preclearance/childrens/childrens-code/'
const ISED =
  'https://ised-isde.canada.ca/site/strategic-policy-sector/en/marketplace-framework-policy/consultation-copyright-age-generative-artificial-intelligence-what-we-heard-report'

const FAQS = [
  {
    q: 'Is there an AI video production company in Calgary?',
    a: `Yes. ${studio} is an AI film studio based in ${SITE.city}, founded in ${SITE.foundingYear}. Every frame it delivers is made with generative AI, with no crews, sets or location shoots, and it makes brand films, AI commercials, about-us films, avatar videos, UGC-style ads and product visuals for companies in Calgary and across Canada.`,
  },
  {
    q: 'How much does AI video production cost in Canada?',
    a: 'Published prices vary by who makes the film. Crossroad Media in Surrey, BC says its AI commercials start at $2,500 and most 15 to 60 second spots land between $2,500 and $10,000 (checked September 2026). Self-serve AI tools cost about $20 to $300 a month and you do the work yourself; traditional filmed production starts around $15,000 (Lemonlight, March 2026). Ruminate X quotes each film from the brief.', // claims-ok: Crossroad Media AI commercials page and Lemonlight AI video cost guide, both linked on this page
  },
  {
    q: 'Do AI video ads shown in Quebec have to be in French?',
    a: 'Section 58 of Quebec\'s Charter of the French Language says commercial advertising must be in French. It may also be in French and another language if French is markedly predominant, and the Quebec government can set exceptions by regulation; a registered trademark with no French version on the register can stay in its original language (section 58.1). Plan a French version, or a French-led bilingual cut, for any campaign that runs in Quebec, and ask Quebec counsel how the rule applies to your media buy. This is not legal advice.',
  },
  {
    q: 'Who owns an AI-generated video in Canada?',
    a: 'Canada\'s Copyright Act has no rule written for AI output yet. The federal government\'s 2025 consultation report says existing Canadian case law suggests authorship must be attributed to a human who exercises skill and judgment to create a work. A film where people write the script, choose and fix the shots and cut the edit has a stronger claim than a raw generation. Put ownership of the final film, the project files and the licences for models, music and voice in the contract. This is not legal advice.',
  },
  {
    q: 'Do AI commercials in Canada need to be precleared before they air?',
    a: 'It depends on the product and the audience, not on whether the footage was generated. Ad Standards runs fee-based preclearance for alcoholic beverages, children\'s advertising, cosmetics, food and non-alcoholic beverages, food and beverage ads to children, and health products. Children\'s advertising, except purely local ads, must be authorized by its Children\'s Clearance Committee before broadcast; clearance numbers are not required in Quebec. Build review time into the schedule if your ad falls in one of those categories.',
  },
  {
    q: 'Can a Calgary AI studio work with brands in Toronto, Vancouver or Montreal?',
    a: `Yes. An AI-only studio does not shoot, so nobody travels and nothing depends on where the brand is. ${studio} works from ${SITE.city} with briefs, scripts, boards and review cuts shared online, and delivers the same way to a company in Toronto, Vancouver, Montreal or outside Canada.`,
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} films={['d-s9SxA4Klk', 'LYA3Do3KEN0']}>
      <GuideHero
        eyebrow="Calgary, Alberta · serving Canada"
        title="AI video production in Calgary, for brands across Canada"
        dek="For the marketing lead in Calgary, Edmonton, Toronto or Vancouver who wants a brand film or an ad made with AI, and wants to know what it costs here, which Canadian rules apply, and when a local crew is the better call."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          {studio} is an AI film studio in {SITE.city}. It makes {offerNames} for companies in Calgary and across Canada,
          and every frame is generated with AI: no crew, no set, no location day. Crossroad Media in Surrey, BC, one of the
          few Canadian studios that publish prices, puts most 15 to 60 second AI commercials at $2,500 to $10,000. {/* claims-ok: Crossroad Media, linked in the cost table */} Two
          Canadian rules shape the ad more than the AI does: Quebec requires commercial advertising in French, and some
          product categories go through Ad Standards preclearance.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="What we make" title="What an AI studio in Calgary makes, and for whom">
        <p>
          {PRODUCTION.summary} The studio works for {BUYERS.join(', ')}. The briefs that fit best:
        </p>
        <ul>
          <li>
            <strong>Brand films.</strong> A story about what the company stands for, for the homepage, a launch, investors
            or recruiting. See <Link href="/ai-brand-film-agency">AI brand film production</Link>.
          </li>
          <li>
            <strong>Commercials.</strong> A hero spot for TV, streaming, YouTube or social, with the cutdowns and aspect
            ratios each channel needs. See <Link href="/ai-commercial-production">AI commercial production</Link>.
          </li>
          <li>
            <strong>Scenes a Calgary budget cannot shoot.</strong> A mountain range at a light you cannot book, a winter
            street in July, a product in a place it has never been. AI removes the location, permit and weather day from
            the budget.
          </li>
          <li>
            <strong>Pharma, pharmacy, lab and medical films</strong>, where Health Canada&apos;s advertising rules apply.
            See <Link href="/ai-video-production-healthcare">AI video for pharma and healthcare</Link>.
          </li>
        </ul>
        <GuideFilm id="d-s9SxA4Klk" />
      </GuideSection>

      <GuideSection eyebrow="How it works from here" title="Working with an AI studio when you are not in Calgary" alt>
        <p>
          A filmed production is local because the crew, gear and locations are. An AI production has none of those, so
          a brand in Toronto or Halifax works with a Calgary studio exactly as one in Calgary does. The steps are the ones
          on our page about <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>: the brief, a
          brand world with <a href="https://www.100creatives.com">100creatives</a>, script and boards, generation passes,
          fixes to the shots that break, then edit, sound, grade and delivery.
        </p>
        <p>
          What still needs you: approving the script and boards before anything is generated, sending real product
          packaging, logo files and brand fonts (generators invent labels, so the real ones go in during the edit), and
          one person who can say yes to a cut.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Cost" title="What AI video production costs in Canada">
        <p>
          Few Canadian studios publish prices. These are the published figures we could check, next to the national
          ranges on our <Link href="/blog/how-much-does-ai-video-production-cost">AI video production cost guide</Link>.
          {' '}{studio} does not publish a price list; each film is quoted from the brief.
        </p>
        <GuideTable
          head={['Who makes it', 'Published price', 'Source']}
          rows={[
            ['Self-serve AI tools', 'About $20 to $300 a month; you write, generate and edit', <a key="l1" href={LEMONLIGHT}>Lemonlight, March 2026</a>], // claims-ok: Lemonlight AI video production cost guide, linked in this row
            ['Canadian AI studio (Surrey, BC)', 'Commercials start at $2,500; most 15 to 60 second spots $2,500 to $10,000', <a key="c" href={CROSSROAD}>Crossroad Media, checked September 2026</a>], // claims-ok: Crossroad Media AI commercials page, linked in this row
            ['AI studios, US and UK', 'USD 2,500 to 3,500 for a hero spot; GBP 15,000 to 45,000 per broadcast asset', <a key="v" href={VERSELY}>Versely, September 2026</a>], // claims-ok: Versely compilation of published studio prices, linked in this row
            ['Traditional filmed production', '$15,000 to $50,000 and up', <a key="l2" href={LEMONLIGHT}>Lemonlight, March 2026</a>], // claims-ok: Lemonlight AI video production cost guide, linked in this row
          ]}
          caption="Prices as published on each source page, checked September 2026. Crossroad Media does not state a currency. Scope differs between studios, so compare what each quote includes: script, revisions, music and voice licences, cutdowns."
        />
        <p>
          What moves a Canadian quote: length, the number of cutdowns and ratios, a French version, how many characters
          must stay consistent across shots, licensed music and voice, and how many review rounds your legal or regulatory
          team needs.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Canadian rules" title="Canadian rules that apply to an AI ad" alt>
        <p>
          <strong>French in Quebec.</strong> Section 58 of the{' '}
          <a href={QC_CHARTER}>Charter of the French Language</a> says commercial advertising must be in French. It can be
          bilingual if French is markedly predominant, and the government can set exceptions by regulation. A registered
          trademark with no French version on the register may stay as it is (section 58.1). For an AI ad, a French version
          means a French voice track, French supers and French end cards, and a lip-synced presenter has to be generated
          again in French.
        </p>
        <p>
          <strong>Preclearance.</strong> <a href={AD_STANDARDS}>Ad Standards</a> offers fee-based preclearance in six
          categories: alcoholic beverages, children&apos;s advertising, cosmetics, food and non-alcoholic beverages, food and
          beverage advertising to children, and health products. Children&apos;s advertising, except purely local ads, must
          be <a href={AD_STANDARDS_KIDS}>authorized before broadcast</a>; clearance numbers are not required for ads
          broadcast in Quebec. Nothing in these rules changes because the footage was generated.
        </p>
        <p>
          <strong>Health products and drugs.</strong> Health Canada limits what a prescription drug ad to the public may
          say. Our <Link href="/ai-video-production-healthcare">pharma and healthcare page</Link> covers the regulation
          and what it means for a video.
        </p>
        <p>
          <strong>Who owns the footage.</strong> The Copyright Act does not address AI output directly. The federal{' '}
          <a href={ISED}>consultation report</a> (February 2025) says existing case law suggests authorship must be
          attributed to a human who exercises skill and judgment. Get ownership of the final film, the project files and
          the model, music and voice licences written into the contract.
        </p>
        <p>This section is not legal or regulatory advice. Your own counsel and, where it applies, your clearance body decide.</p>
      </GuideSection>

      <GuideSection eyebrow="Proof" title="Films made this way">
        <p>
          {studio} publishes its films on the <Link href="/work">work page</Link>. This one is an original film the
          studio made, not client work.
        </p>
        <GuideFilm id="LYA3Do3KEN0" />
      </GuideSection>

      <GuideFit
        hire={[
          'You want a cinematic brand film or commercial and cannot fund a crew, cast and location days.',
          'The scene is hard or impossible to shoot: landscapes at a set light, seasons out of season, products in impossible places.',
          'Your team is anywhere in Canada and is happy to approve scripts, boards and cuts online.',
          'You need several cutdowns and ratios from one idea for TV, YouTube and social.',
        ]}
        instead={[
          'Your own staff, a real customer or a real clinician has to appear and speak as themselves. Hire a Calgary production company with a crew.',
          'You need coverage of a real event, such as a Stampede party or a conference. That is a camera job.',
          'Your budget fits a self-serve tool (Runway, Veo, Kling, Sora, HeyGen, Synthesia) and you have someone to run it.',
          'The campaign is French-first for Quebec and the idea has to be written in French from the start. A Montreal agency that writes in French will serve it better.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-video-production-agencies', title: 'How to hire an AI video agency', note: 'Seven questions to ask any AI studio before you sign, in Canada or anywhere.' },
          { href: '/blog/how-much-does-ai-video-production-cost', title: 'AI video production cost', note: 'Published prices at four levels, and what each level buys.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'What a commercial brief turns into, and what breaks in AI ads.' },
          { href: '/ai-brand-film-agency', title: 'AI brand film production', note: 'What a brand film is for, and how it differs from an ad.' },
          { href: '/guides', title: 'Guides for brands buying AI film', note: 'Budgets, deliverables, product accuracy and quality control.' },
        ]}
      />

      <GuideCta body="Send what the film is for, where it will run in Canada, and whether you need a French version." />
    </Guide>
  )
}
