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
import { PRODUCTION, SITE, priceLine } from '@/lib/seo/facts'

const PAGE = {
  path: '/guides/ai-pharma-commercials',
  title: 'AI Pharma Commercials: Who Has Made Them',
  description: `No one has confirmed that the Saphnelo, Icotyde or Peak Blue Rx commercials are AI. The confirmed AI pharma ads are AstraZeneca's Breztri llama and Gilead Canada's Descovy bear and otter, and Grubb's Pharmacy apologized for AI imagery in its marketing. Plus the FDA rules for AI drug ads, who may appear in one, and how ${SITE.name} makes AI commercials for pharma and pharmacy brands.`,
  published: '2026-10-01',
  updated: '2026-10-28',
  keywords: [
    'ai generated pharma commercial',
    'which pharma company is using ai',
    'is saphnelo commercial ai generated',
    'saphnelo ai ad',
    'saphnelo ai commercial',
    'is the saphnelo ad ai',
    'grubbs pharmacy ai ad',
    'ai pharmaceutical commercial',
    'peakbluerx',
    'peak blue rx ai commercial',
    'is the peak blue rx commercial ai',
    'peak blue rx commercial',
    'is the icotyde commercial made with ai',
    'is the icotyde commercial ai generated',
    'does the icotyde commercial use ai',
    'are the people in the icotyde commercial ai',
    'ai generated pharma commercial actors',
    'can pharma ads use ai actors',
    'pharma celebrity endorsements',
    'pharmaceutical commercial models',
    'is it legal to use ai for ads',
  ],
}

const studio = SITE.name
const city = SITE.city.split(',')[0]

const FIERCE_BREZTRI = 'https://www.fiercepharma.com/marketing/az-leans-ai-generated-llama-promote-lama-combo-inhaler-breztri-new-campaign'
const MEDIAPOST_BREZTRI = 'https://www.mediapost.com/publications/article/417676/wonderfully-weird-breztris-ai-created-llama-ad.html'
const FIERCE_GILEAD = 'https://www.fiercepharma.com/marketing/otters-bears-and-pharma-lions-inside-gileads-bronze-winning-cannes-spot'
const MEDIAPOST_ICOTYDE = 'https://www.mediapost.com/publications/article/416555/jj-reporting-25b-in-q2-sales-launches-campaign.html'
const ISPOT_ICOTYDE = 'https://www.ispot.tv/brands/DQA/icotyde'
const AJMC_ICOTYDE = 'https://www.ajmc.com/view/fda-approves-icotrokinra-first-oral-il-23-inhibitor-for-plaque-psoriasis'
const FIERCE_SAPHNELO_2022 = 'https://www.fiercepharma.com/marketing/az-rolls-out-first-dtc-ads-here-more-campaign-new-lupus-drug-saphnelo'
const ISPOT_PEAK = 'https://www.ispot.tv/ad/gT7g/peak-blue-rx-same-results'
const FTC_HEALTH = 'https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance'
const FEEDME_GRUBBS = 'https://www.readfeedme.com/p/feed-mes-first-dc-edition-black-book'
const POPVILLE_GRUBBS = 'https://www.popville.com/2026/10/grubbs-pharmacy-also-a-good-spot-for-vaccines-plus-theyve-added-a-tea-lab/'
const HAWAII_PHARMACY = 'https://www.law.cornell.edu/regulations/hawaii/Haw-Code-R-SS-16-95-102'
const IAB = 'https://www.iab.com/insights/the-ai-gap-widens/'
const CFR = 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-202/section-202.1'
const CCN_RULE = 'https://www.govinfo.gov/content/pkg/FR-2023-11-21/pdf/2023-25428.pdf'
const FASENRA = 'https://www.fda.gov/media/188717/download'
const LINZESS = 'https://www.fda.gov/media/188750/download'
const MEMO = 'https://www.whitehouse.gov/presidential-actions/2025/09/memorandum-for-the-secretary-of-health-and-human-services-the-commissioner-of-food-and-drugs/'
const AGENDA = 'https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202510&RIN=0910-AJ14'
const PHRMA = 'https://www.phrma.org/-/media/Project/PhRMA/PhRMA-Org/PhRMA-Org/PDF/P-R/PhRMA_Guiding_Principles_2018.pdf'
const FTC_255 = 'https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-255'
const FTC_255_1 = 'https://www.law.cornell.edu/cfr/text/16/255.1'
const FTC_465_2 = 'https://www.law.cornell.edu/cfr/text/16/465.2'
const MERCK_DTC = 'https://www.merck.com/wp-content/uploads/sites/124/2025/12/Direct-To-Consumer_Advertising_MRK.pdf'
const MMM_CELEBS = 'https://www.mmm-online.com/news/4-celeb-pharma-ads-shaq-nick-jonas-jesse-mccartney/'
const CANADA_RX ='https://laws-lois.justice.gc.ca/eng/regulations/C.R.C.,_c._870/section-C.01.044.html'

const FAQS = [
  {
    q: 'Which pharma company is using AI in its commercials?',
    a: 'AstraZeneca is the clearest case. Its September 2026 asthma campaign for the Breztri inhaler shows a llama, a goat and an oryx working in an office, and the whole production was created with AI (MediaPost, September 2026). Gilead Canada\'s "Animal Attraction" ad for Descovy, with an AI-generated bear and otter, won a bronze at the 2026 Cannes Pharma Lions (Fierce Pharma, July 2026). Both used AI for animals, not patients.',
  },
  {
    q: 'Is the Saphnelo commercial AI generated?',
    a: 'No one has confirmed that the Saphnelo ad is AI. As of October 2026, neither AstraZeneca nor any news outlet has said AI was used in a Saphnelo lupus commercial. AstraZeneca\'s first consumer campaign for Saphnelo, "Here for More", came out in May 2022 (Fierce Pharma), before video generators could make realistic people, so a spot from that campaign predates the tools. Until AstraZeneca says otherwise, treat it as viewer speculation.',
  },
  {
    q: 'Is the Icotyde commercial made with AI?',
    a: 'No one has confirmed that the Icotyde commercial is AI generated or uses AI at all. Johnson & Johnson\'s Icotyde psoriasis ad, "Unbelievable", launched on July 14, 2026 during Fox\'s World Cup semifinal and the MLB All-Star Game (MediaPost) and had aired nationally 6,354 times by October 7, 2026 (iSpot). It shows a patient hearing "good news" from her doctor while a unicorn walks past the window, and viewers ask whether the people in it are AI. As of October 2026 neither J&J nor any agency has said AI made it, and no news outlet has reported that it did.',
  },
  {
    q: 'Is the Peak Blue Rx commercial AI?',
    a: 'No one has confirmed it. Peak Blue Rx, which sells generic versions of Viagra and Cialis online, runs a 60-second men\'s health TV spot, "Same Results", listed by iSpot from March 2, 2026, and people search whether the commercial and its actors are AI. As of October 28, 2026 Peak Blue Rx has not said whether AI was used, iSpot names no actors for the spot, and no news outlet has reported it.',
  },
  {
    q: 'Did Grubb\'s Pharmacy use an AI ad?',
    a: 'Yes, by its own account. Grubb\'s Pharmacy on Capitol Hill in Washington, DC, which calls itself the city\'s oldest pharmacy (established 1867), apologized in October 2026 for using AI-generated imagery in its marketing, and its next Instagram post said it still had to work out "creating non-AI marketing materials". It is the only case this guide has found of a pharmacy, rather than a drug maker, confirming an AI ad.',
  },
  {
    q: 'Who makes AI pharma commercials?',
    a: `${studio}, an AI film studio in ${city}, makes AI commercials for pharma and pharmacy brands, with every frame generated by AI and the script, boards, edit, sound and grade done by people. Your medical, legal and regulatory (MLR) reviewers sign off on every claim, and ${studio} typesets each claim, the major statement of risks and the safety information in the edit from the copy they approved, never in the generator. The shots under the risk statement are chosen to sit still, because FDA rules bar visuals that distract from it. Before you hire any studio for a drug ad, ask how it handles a shot your reviewers reject; ${studio} locks the look in boards, so a regenerated shot still matches the ones already approved.`,
  },
  {
    q: 'How much does an AI pharma commercial cost?',
    a: `${priceLine('commercial')}. The price moves with length, the number of scenes, how exactly the pack, inhaler or pen has to appear, the number of versions and cutdowns, and how many MLR review rounds your team needs. AI takes the shoot out of a drug ad. The approved claims, the major statement typeset and timed to the voiceover, and the review rounds all stay, so an AI drug ad costs the same to review as a filmed one.`,
  },
  {
    q: 'Can pharma ads use AI actors?',
    a: 'No US rule bans AI-generated people in a drug ad. The FDA rules govern what the ad claims and how the risks are presented, not how the pictures were made. A generated person shown as a patient or a doctor raises questions your MLR team has to answer: whether it needs an on-screen label, and whether viewers could take it for a real patient describing a real result. The two confirmed AI drug campaigns so far, Breztri and Descovy, used animals instead. This is not legal or regulatory advice.',
  },
  {
    q: 'Can a pharma ad use a celebrity endorsement?',
    a: 'Yes, if the celebrity\'s statements are true for them. Under the FTC Endorsement Guides (16 CFR 255.1), an endorsement must reflect the endorser\'s honest views, and a celebrity shown as using a product must have been a real user when they gave it. Merck\'s December 2025 policy on consumer drug ads goes further: celebrities in its product ads must have the condition and use the product. A generated person cannot meet that test, so it cannot give the endorsement. An AI copy of a real celebrity needs that person\'s consent, and what it says still has to be true for them. This is not legal advice.',
  },
  {
    q: 'Is it legal to use AI for a prescription drug ad?',
    a: 'Yes, as far as the visuals go. In the US, 21 CFR 202.1 sets what a consumer drug ad must say and how the major statement of risks is shown, whoever made the footage. In Canada, section C.01.044 of the Food and Drug Regulations limits consumer advertising of prescription drugs to the name, price and quantity, with or without AI. Platform AI-label rules (YouTube, Meta, TikTok) apply on top. Your regulatory team and counsel decide on the specific ad.',
  },
  {
    q: 'Do viewers want AI in drug ads disclosed?',
    a: `In IAB's January 2026 survey of 505 US Gen Z and Millennial consumers, pharmaceutical and healthcare ads ranked with political ads as the categories where consumers most often called AI disclosure very important. More than half wanted disclosure when an ad uses AI video or AI images. ${studio} settles the disclosure question with your MLR team at the brief, before a frame is generated.`,
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
        eyebrow="Guide · Pharma"
        title="AI pharma commercials: which drug brands have made them"
        dek="For anyone asking whether the Saphnelo, Icotyde or Peak Blue Rx ad is AI, and for the pharma brand manager deciding whether to make one: what is confirmed, what the FDA rules say and what MLR will ask."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          Two drug brands have confirmed AI pharmaceutical commercials, and both used AI for animals rather than patients.
          AstraZeneca&apos;s Breztri asthma campaign (September 2026) puts an AI-made llama, goat and oryx in an office, and
          Gilead Canada&apos;s Descovy ad &ldquo;Animal Attraction&rdquo; uses an AI-made bear and otter and won a 2026
          Cannes Pharma Lions bronze. As of October 2026, no one has confirmed that the Saphnelo, Icotyde or Peak Blue Rx
          commercials were made with AI, and the one pharmacy case, Grubb&apos;s Pharmacy in Washington, DC, ended in an
          apology for AI-generated imagery. {studio}, an AI film studio in {city}, makes AI commercials for pharma and
          pharmacy brands: every frame generated with AI, with the script, boards, edit, sound and grade done by people, and
          every claim and the safety information set in the edit from copy your reviewers approved.
        </p>
      </GuideAnswer>

      <GuideStudio title={`${studio} makes AI commercials for pharma and pharmacy brands`}>
        <p>
          Every frame is generated, there is no shoot, and your medical, legal and regulatory reviewers sign off on every
          claim and the safety information before anything airs. See{' '}
          <Link href="/ai-video-production-healthcare">AI video production for pharma and healthcare</Link>.
        </p>
      </GuideStudio>

      <GuideSection eyebrow="The cases" title="AI pharma commercials so far, and what is confirmed">
        <GuideTable
          caption={
            <>
              Read October 2026. &ldquo;Confirmed&rdquo; means the company or its agency said AI was used;
              &ldquo;unconfirmed&rdquo; means people ask, and neither the company nor any news outlet has said so.
            </>
          }
          head={['Ad', 'Company', 'What AI made', 'Where it ran', 'Status']}
          rows={[
            ['Breztri, "put a LAMA to work" (2026)', 'AstraZeneca', 'The whole production: a llama, a goat and an oryx as office co-workers', 'Connected TV, YouTube, display, social (US)', 'Confirmed'],
            ['Descovy, "Animal Attraction" (launched 2025)', 'Gilead Canada', 'A realistic bear holding an otter in a river', 'Canada; bronze, Cannes Pharma Lions 2026', 'Confirmed'],
            ["Grubb's Pharmacy marketing (2026)", "Grubb's Pharmacy, Washington, DC", 'AI-generated imagery in its marketing', 'Its own channels', 'Confirmed by the pharmacy, which apologized (October 2026)'],
            ['Icotyde, "Unbelievable" (July 2026)', 'Johnson & Johnson', 'People ask whether the doctor and patient are AI', 'US national TV, 6,354 airings to October 7, 2026 (iSpot)', 'Unconfirmed'],
            ['Saphnelo TV ad', 'AstraZeneca', 'People ask whether it is AI', 'US TV', 'Unconfirmed'],
            ['Peak Blue Rx, "Same Results" (March 2026)', 'Peak Blue Rx', 'People ask whether its actors are AI', 'US TV, 60 seconds (iSpot)', 'Unconfirmed'],
          ]}
        />
      </GuideSection>

      <GuideSection eyebrow="AstraZeneca" title="Breztri: a drug campaign made entirely with AI" alt>
        <p>
          When Breztri won an asthma indication on top of COPD, AstraZeneca needed to reach a younger patient group than
          its cruise-ship and RV ads had. Its campaign plays on LAMA, the long-acting muscarinic antagonist in the inhaler.
          A business-casual llama works late with a goat and an oryx while a voiceover explains the drug.{' '}
          <a href={MEDIAPOST_BREZTRI}>MediaPost reported</a> that the entire production was created through AI, with a
          one-minute spot and two 30-second cuts running on connected TV, YouTube, display and social (September 2026).
        </p>
        <p>
          AstraZeneca&apos;s marketing senior director Katie Pansegrau told{' '}
          <a href={FIERCE_BREZTRI}>Fierce Pharma</a> the idea &ldquo;kind of led itself to AI&rdquo;, since a real llama
          will not push an elevator button. The standards and the educational goal did not change, she said.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Gilead Canada" title="Descovy: AI animals and a Cannes Lions bronze">
        <p>
          Gilead Canada&apos;s &ldquo;Animal Attraction&rdquo; ad for Descovy shows a realistic bear holding an otter in a
          river beside the line &ldquo;it&apos;s wild out there&rdquo; and &ldquo;Ask your doctor&rdquo;, with small type
          reading &ldquo;not intended for animal use, even fake ones like these.&rdquo; Bear and otter are slang the
          HIV-prevention audience recognises. Gilead Canada&apos;s agency told <a href={FIERCE_GILEAD}>Fierce Pharma</a>{' '}
          it used AI because illustration could not have built that world as richly (July 2026).
        </p>
        <p>
          Fierce notes the ad does not endorse Descovy for any specific indication. That fits Canada, where{' '}
          <a href={CANADA_RX}>section C.01.044 of the Food and Drug Regulations</a> limits consumer advertising of a
          prescription drug to its name, price and quantity. A Canadian AI drug ad works inside the same limit as a filmed
          one.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Is it AI?" title="Is the Saphnelo, Icotyde or Peak Blue Rx ad AI?" alt>
        <p>
          People now check polished pharma ads for AI, and three get asked about by name: Saphnelo, Icotyde and Peak Blue
          Rx. As of October 2026, none of the three companies has said AI was used, and no news outlet has reported that it
          was.
        </p>
        <h3>Is the Saphnelo ad AI?</h3>
        <p>
          No one has confirmed it. AstraZeneca has not said AI was used in a Saphnelo lupus commercial, and its first
          consumer campaign for the drug, &ldquo;Here for More&rdquo;, launched in{' '}
          <a href={FIERCE_SAPHNELO_2022}>May 2022</a>, before generators could make realistic people. A spot from that
          campaign predates the tools.
        </p>
        <h3>Is the Icotyde commercial AI generated?</h3>
        <p>
          Icotyde is Johnson &amp; Johnson&apos;s once-daily psoriasis pill, which FDA{' '}
          <a href={AJMC_ICOTYDE}>approved in March 2026</a>. Its spot, &ldquo;Unbelievable&rdquo;, set to the EMF song,{' '}
          <a href={MEDIAPOST_ICOTYDE}>launched on July 14</a> during Fox&apos;s coverage of the World Cup semifinal and the
          MLB All-Star Game, and had <a href={ISPOT_ICOTYDE}>aired nationally 6,354 times</a> by October 7. A patient hears
          &ldquo;good news&rdquo; from her doctor while a unicorn walks past the window, and searchers ask whether the
          people in the Icotyde commercial are AI. Johnson &amp; Johnson has not said AI was used, no agency has claimed the
          work, and no news outlet has reported it as of October 2026.
        </p>
        <p>
          For a brand team the case shows that an ad can be read as AI whether or not AI made it. Performance direction and
          the disclosure decision belong in the same review.
        </p>
        <h3>Is the Peak Blue Rx commercial AI?</h3>
        <p>
          Peak Blue Rx sells generic versions of Viagra and Cialis online. Its 60-second TV spot{' '}
          <a href={ISPOT_PEAK}>&ldquo;Same Results&rdquo;</a>, listed by iSpot from March 2, 2026, is the one people ask
          about, and Google&apos;s related searches ask about the commercial&apos;s AI actress, actor and cast. Peak Blue Rx
          has not said whether AI was used, iSpot names no actors for the spot, and no news outlet has reported it as of
          October 28, 2026. It is viewer suspicion, the same as Icotyde.
        </p>
        <p>
          Viewers also say they want to be told. In <a href={IAB}>IAB&apos;s January 2026 survey</a> of 505 US Gen Z and
          Millennial consumers, pharmaceutical and healthcare ads ranked with political ads as the categories where
          consumers most often said AI disclosure is very important, and more than half wanted AI video and AI images
          disclosed.
        </p>
      </GuideSection>

      <GuideSection eyebrow="A pharmacy" title="Grubb's Pharmacy: the AI ad a pharmacy apologized for">
        <p>
          The one confirmed AI ad from a pharmacy that we have found ended in an apology. Grubb&apos;s Pharmacy at
          326 East Capitol Street NE describes itself as Washington, DC&apos;s oldest pharmacy, established in 1867, and it
          does retail, compounding, vaccinations and delivery. In October 2026 the pharmacy posted an apology for using
          AI-generated imagery in its marketing (<a href={FEEDME_GRUBBS}>Feed Me</a>, October 7, 2026).
        </p>
        <p>
          Its next Instagram post, announcing a tea lab inside the store, said it still had to work out &ldquo;creating
          non-AI marketing materials&rdquo; (quoted by <a href={POPVILLE_GRUBBS}>PoPville</a>, October 6, 2026). The
          apology was for using AI to make the pictures, not for any health claim in them.
        </p>
        <h3>Which rules apply to a pharmacy&apos;s ad</h3>
        <p>
          A pharmacy advertising its own services (vaccinations, delivery, compounding, a tea lab) is not running a
          prescription drug ad, so the FDA rules below do not decide it. The FTC has primary responsibility for claims in
          advertising of health products (<a href={FTC_HEALTH}>FTC Health Products Compliance Guidance</a>, December
          2022), and the pharmacy&apos;s state board sets its own advertising rules. Hawaii&apos;s, for example, requires
          that advertising of pharmacy services be truthful and not misleading, and defines exactly what a pharmacy must
          do before it may advertise &ldquo;emergency prescription service&rdquo; (
          <a href={HAWAII_PHARMACY}>Haw. Code R. 16-95-102</a>). Neither mentions AI. If the ad shows a generated
          pharmacist or customer as if they were real staff or patients, the FTC rule against misleading endorsements
          applies the same way it does to a drug maker. Read in October 2026; not legal advice, and your counsel and state
          board decide.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The rules" title="What FDA rules apply to an AI-made drug ad" alt>
        <p>
          No FDA rule mentions AI. The rules that decide an AI drug ad are the ones for every broadcast drug ad, and the
          one most exposed by generated footage is the ban on distracting pictures during the risk statement.
        </p>
        <ul>
          <li>
            <strong>The major statement.</strong> Under <a href={CFR}>21 CFR 202.1(e)(1)</a>, a TV ad for a prescription
            drug must state its major side effects and contraindications. Since the 2023 final rule (
            <a href={CCN_RULE}>88 FR 80958</a>, compliance date November 20, 2024), that statement must use
            consumer-friendly language, run as audio and on-screen text at the same time, be easy to read, and carry no
            audio or visual elements &ldquo;likely to interfere with comprehension&rdquo;.
          </li>
          <li>
            <strong>Distracting visuals.</strong> On September 9, 2025 FDA posted untitled letters over TV ads, including{' '}
            <a href={FASENRA}>one to AstraZeneca about a Fasenra spot</a> with salsa dancing, and one about Linzess that
            cited &ldquo;frequent scene changes and compelling and attention-grabbing visuals&rdquo; (
            <a href={LINZESS}>FDA letter</a>). Generated footage makes busy, vivid shots cheap to add. In a drug ad, those
            are the shots to keep out of the risk section.
          </li>
          <li>
            <strong>More risk information inside the ad.</strong> The same day, a <a href={MEMO}>presidential
            memorandum</a> told HHS to increase the risk information drug ads must carry. FDA&apos;s{' '}
            <a href={AGENDA}>regulatory agenda</a> lists a proposed rule, planned for December 2026, that would end the
            option of pointing viewers to a website or phone number for the full risk information. If it is finalized,
            every broadcast drug ad gets a longer risk section, AI-made or not.
          </li>
          <li>
            <strong>Actors as doctors.</strong> FDA has no rule on actors or generated people. PhRMA&apos;s voluntary{' '}
            <a href={PHRMA}>Guiding Principles</a> (2018 revision) say an ad using actors to portray health care
            professionals should say so, and the FTC&apos;s <a href={FTC_255}>Endorsement Guides</a> require ads that
            claim to show actual consumers to use real ones or disclose that they are not. A generated doctor or patient
            falls in the same place.
          </li>
        </ul>
        <p>
          Sources checked October 2026. This is not legal or regulatory advice. Your MLR team and counsel decide what your
          ad can show and say, and {studio} does not certify any ad as compliant.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Animals, not patients" title="Why both real campaigns avoided AI people">
        <p>
          Breztri and Descovy both put AI on animals and kept generated humans out of the frame. The reasons are
          practical. A generated woman taking an inhaler looks like a patient describing a real result, and an MLR
          reviewer has to decide whether she needs a label. A generated person in a white coat looks like a doctor. Faces
          and hands are also where generated footage most often breaks across a 60-second spot, which is why {studio} gives
          them the most generation passes. An animal in an office is plainly not real, so nobody is misled about who is
          speaking, and a slightly odd llama reads as a joke.
        </p>
        <p>
          The same pattern showed up outside pharma: Coca-Cola&apos;s 2025 AI holiday ad swapped the generated people of
          its criticised 2024 version for animals, and Progressive&apos;s 2025 &ldquo;Drive Like an Animal&rdquo; insurance ad
          generated animals at the wheel while keeping the real voice of its Flo actress. The cases are on{' '}
          <Link href="/guides/brands-using-ai-commercials">brands using AI commercials</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Who is on screen" title="Actors, celebrities and AI people in drug ads" alt>
        <p>
          Most people in a pharmaceutical commercial are paid actors and models playing patients and doctors. Merck&apos;s{' '}
          <a href={MERCK_DTC}>December 2025 policy statement</a> on consumer broadcast ads shows the conventions a large
          drug maker commits to: it identifies an actor portraying a physician, says when a physician in a product ad was
          paid to appear, and says when a real patient is used. It also pledges to meet or exceed PhRMA&apos;s guidelines.
        </p>
        <h3>Pharma celebrity endorsements</h3>
        <p>
          A celebrity is held to more. Under the FTC&apos;s <a href={FTC_255_1}>Endorsement Guides, 16 CFR 255.1</a>, an
          endorsement must reflect the endorser&apos;s honest views, and a celebrity presented as using a product must have
          been a real user when the endorsement was given; the advertiser has to keep checking that it is still true.
          Merck&apos;s policy says celebrities in its product ads must have the condition and use the product.
        </p>
        <p>
          The recent campaigns follow that pattern. MM+M&apos;s <a href={MMM_CELEBS}>round-up of four celebrity pharma
          ads</a> (October 2025) has Shaquille O&apos;Neal talking about his own sleep apnea for Eli Lilly, Jesse McCartney,
          an allergy sufferer, using Zyrtec on tour, Nick Jonas for Beyond Type 1, the diabetes nonprofit he co-founded, and
          Barbara Costello for Astellas, drawing on her family&apos;s history with geographic atrophy. Each one is tied to
          the celebrity&apos;s own condition, family or cause. The Lilly spot sends viewers to a condition website and to their doctor rather than to
          a named drug.
        </p>
        <h3>Where a generated person fits</h3>
        <p>
          An AI-generated person can stand in for an actor: someone in a scene, identified the way an actor playing a
          doctor is. It cannot stand in for anyone whose authority comes from real experience. A generated person has no
          condition and has never taken the drug, and the FTC&apos;s rule on reviews and testimonials,{' '}
          <a href={FTC_465_2}>16 CFR 465.2</a>, bars testimonials that misrepresent that the testimonialist exists or used
          the product. An AI copy of a real celebrity needs that person&apos;s consent and a contract; the SAG-AFTRA terms for union
          performers are on <Link href="/ai-commercial-production">AI commercial production</Link>. Every frame {studio}{' '}
          makes is generated, so the people in a {studio} drug ad are portrayals, identified the way an actor would be, and
          none of them speaks to a result as a real patient, doctor or celebrity. This is not legal advice; your MLR team and
          counsel decide.
        </p>
      </GuideSection>

      <GuideSection eyebrow="How it gets made" title={`How ${studio} builds an AI drug ad for MLR review`}>
        <p>
          {PRODUCTION.summary} For a pharma or pharmacy brand, {studio} plans the film around the review, not the
          generator:
        </p>
        <ol>
          <li>
            <strong>Claims and safety copy first.</strong> The script, the claims and the risk information are approved
            before a frame is generated, so the pictures are made to fit the words.
          </li>
          <li>
            <strong>A locked look.</strong> Boards and reference frames fix the characters, sets and light, so a shot
            regenerated after review still matches the approved ones.
          </li>
          <li>
            <strong>Calm pictures under the risk statement.</strong> The shots behind the major statement are chosen to
            sit still, because the rule bars visuals that distract from it.
          </li>
          <li>
            <strong>Real product, set in the edit.</strong> The pack, inhaler or pen is set in the edit from your product
            files, never drawn by the generator. Every word on screen is typeset from approved copy.
          </li>
          <li>
            <strong>A decision on labels.</strong> Whether generated people or a generated world carry an on-screen
            disclosure is settled with your reviewers at the brief, not after launch.
          </li>
        </ol>
        <p>
          AI takes the shoot out of a drug ad. The approved claims, the major statement typeset and timed to the
          voiceover, the exact pack and the review rounds all stay, so an AI drug ad costs the same to review as a filmed
          one. {priceLine('commercial')}, and the number of MLR rounds is one of the things that sets the price.
        </p>
        <p>
          What MLR reviewers ask about AI footage, shot by shot, is on{' '}
          <Link href="/ai-video-production-healthcare">AI video production for pharma and healthcare</Link>, and every
          stage from brief to final cut is on <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.
        </p>
      </GuideSection>

      <GuideFit
        title={`Why pharma marketers hire ${studio}`}
        hire={[
          'A pharma brand manager with an MLR calendar and no budget for a shoot.',
          'A brand team whose idea works as a made world, animals or a visual metaphor.',
          'A pharmacy that needs a consumer ad for its vaccinations, delivery or compounding without a shoot in the store.',
          <>
            A lab or medical company that needs science no camera can film, shown as the backdrop of an awareness or
            company film (what <Link href="/guides/ai-medical-animation">AI medical animation</Link> can show).
          </>,
        ]}
        get={[
          'Every claim, the major statement and the ISI typeset in the edit from copy your MLR team approved, never drawn by the generator.',
          'Boards and reference frames that lock the look, so a shot regenerated after review matches the approved ones.',
          'Calm shots under the risk statement, and your real pack, inhaler or pen set in the edit from your product files.',
          'A decision on AI labels made with your reviewers at the brief.',
          'The cutdowns and aspect ratios each channel needs, cut from the same film.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-video-production-healthcare', title: 'AI video production for pharma and healthcare', note: `What ${studio} makes for pharma, pharmacy, lab and medical companies, and how claims get through MLR.` },
          { href: '/guides/brands-using-ai-commercials', title: 'Brands using AI commercials', note: 'Coca-Cola, McDonald\'s, Kalshi and others, and how audiences reacted.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'How a 15 to 60 second AI ad is made, and what breaks.' },
          { href: '/guides/who-owns-ai-video', title: 'Who owns an AI video', note: 'Copyright and the contract clauses for a commissioned AI film.' },
          { href: '/guides/ai-video-quality-control', title: 'AI video quality control', note: 'What to check before an AI ad airs.' },
        ]}
      />

      <GuideCta
        title="Send the brief and your review process"
        body={`Tell us the product, the market, the audience and how many MLR rounds to plan for. ${studio} comes back with a creative brief and a quote.`}
      />
    </Guide>
  )
}
