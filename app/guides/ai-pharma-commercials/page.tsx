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
import { PRODUCTION, SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/guides/ai-pharma-commercials',
  title: 'AI Pharma Commercials: Who Has Made Them',
  description:
    'Which drug brands and pharmacies have run ads made with generative AI (AstraZeneca\'s Breztri llama, Gilead Canada\'s Descovy bear and otter, Grubb\'s Pharmacy\'s apology in DC), the Saphnelo, Icotyde and Peak Blue Rx "is this AI?" questions, what FDA rules apply to AI imagery, who may appear in a drug ad (actors, celebrities, AI people), and why both drug campaigns used animals instead of patients.',
  published: '2026-10-01',
  updated: '2026-10-09',
  keywords: [
    'ai generated pharma commercial',
    'which pharma company is using ai',
    'is saphnelo commercial ai generated',
    'saphnelo ai ad',
    'grubbs pharmacy ai ad',
    'ai pharmaceutical commercial',
    'peak blue rx ai commercial',
    'is the icotyde commercial made with ai',
    'ai generated pharma commercial actors',
    'can pharma ads use ai actors',
    'pharma celebrity endorsements',
    'pharmaceutical commercial models',
    'is it legal to use ai for ads',
  ],
}

const studio = SITE.name

const FIERCE_BREZTRI = 'https://www.fiercepharma.com/marketing/az-leans-ai-generated-llama-promote-lama-combo-inhaler-breztri-new-campaign'
const MEDIAPOST_BREZTRI = 'https://www.mediapost.com/publications/article/417676/wonderfully-weird-breztris-ai-created-llama-ad.html'
const FIERCE_GILEAD = 'https://www.fiercepharma.com/marketing/otters-bears-and-pharma-lions-inside-gileads-bronze-winning-cannes-spot'
const PUPPRAMIN = 'https://curiousrefuge.com/ai-film-gallery/puppramin'
const REDDIT_SAPHNELO = 'https://www.reddit.com/r/CommercialsIHate/comments/1sgve8r/saphnelo_pharma_ad_is_ai_generated/'
const REDDIT_LILLY = 'https://www.reddit.com/r/RealOrAI/comments/1qd2n3u/help_is_this_eli_lilly_ad_real_or_ai/'
const MEDIAPOST_ICOTYDE = 'https://www.mediapost.com/publications/article/416555/jj-reporting-25b-in-q2-sales-launches-campaign.html'
const ISPOT_ICOTYDE = 'https://www.ispot.tv/brands/DQA/icotyde'
const CURMUDGEON_ICOTYDE = 'http://www.thecommercialcurmudgeon.com/2026/08/this-icotyde-ad-has-to-be-ai.html'
const AJMC_ICOTYDE = 'https://www.ajmc.com/view/fda-approves-icotrokinra-first-oral-il-23-inhibitor-for-plaque-psoriasis'
const FIERCE_SAPHNELO_2022 = 'https://www.fiercepharma.com/marketing/az-rolls-out-first-dtc-ads-here-more-campaign-new-lupus-drug-saphnelo'
const ISPOT_PEAK = 'https://www.ispot.tv/ad/gT7g/peak-blue-rx-same-results'
const REDDIT_GRUBBS = 'https://www.reddit.com/r/washingtondc/comments/1wybf0b/grubbs_pharmacy_in_ne_apologizes_for_aigenerated/'
const FEEDME_GRUBBS = 'https://www.readfeedme.com/p/feed-mes-first-dc-edition-black-book'
const POPVILLE_GRUBBS = 'https://www.popville.com/2026/10/grubbs-pharmacy-also-a-good-spot-for-vaccines-plus-theyve-added-a-tea-lab/'
const FTC_HEALTH = 'https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance'
const HAWAII_PHARMACY = 'https://www.law.cornell.edu/regulations/hawaii/Haw-Code-R-SS-16-95-102'
const REDDIT_QUESTIONS = 'https://www.reddit.com/r/questions/comments/196xtw7/do_some_drug_companies_use_ai_to_make_their/'
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
    a: 'AstraZeneca is the clearest case: its September 2026 asthma campaign for the Breztri inhaler, made by Edelman, shows a llama, a goat and an oryx working in an office, and the whole production was created with AI (MediaPost, September 2026). Gilead Canada\'s "Animal Attraction" ad for Descovy, made by The Local Collective with an AI-generated bear and otter, won a bronze at the 2026 Cannes Pharma Lions (Fierce Pharma, July 2026).',
  },
  {
    q: 'Is the Saphnelo commercial AI generated?',
    a: 'Nobody has confirmed it. Viewers asked on Reddit (r/CommercialsIHate, "Saphnelo pharma ad is AI generated?") and on X whether AstraZeneca\'s Saphnelo lupus ad used AI, but as of October 2026 neither AstraZeneca nor any news outlet has said it did. The threads do not say which Saphnelo spot they mean. AstraZeneca\'s first consumer campaign for Saphnelo, "Here for More", came out in May 2022 (Fierce Pharma), before video generators could make realistic people. Treat it as viewer speculation. The question shows that audiences already look for AI in polished pharma ads.',
  },
  {
    q: 'Is the Icotyde commercial made with AI?',
    a: 'Nobody has confirmed it. Johnson & Johnson\'s Icotyde psoriasis ad, "Unbelievable", launched on July 14, 2026 during Fox\'s World Cup semifinal and the MLB All-Star Game (MediaPost) and had aired nationally 6,354 times by October 7, 2026 (iSpot). Viewers took the stiff delivery and the unicorn outside the doctor\'s window as signs of AI, but as of October 2026 neither J&J nor any agency has said AI made it, and no news outlet has reported that it did.',
  },
  {
    q: 'Did Grubb\'s Pharmacy use an AI ad?',
    a: 'Yes, by its own account. Grubb\'s Pharmacy on Capitol Hill in Washington, DC, which calls itself the city\'s oldest pharmacy (established 1867), apologized in October 2026 for using AI-generated imagery in its marketing (Feed Me, October 7, 2026). The r/washingtondc post about the apology drew more than 1,100 comments, and the pharmacy\'s next Instagram post promised "non-AI marketing materials". It is the only case this guide has found of a pharmacy, rather than a drug maker, confirming an AI ad, and it ended in an apology.',
  },
  {
    q: 'Is the Peak Blue Rx commercial AI?',
    a: 'No public source says so. iSpot lists Peak Blue Rx\'s 60-second men\'s health TV spot "Same Results", published March 2, 2026, with no actors identified, and as of October 2026 neither the company nor any news outlet has said AI made it. People search the question because realistic pharma and telehealth ads now get checked for AI as a matter of course.',
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
    q: 'Was the Puppramin commercial a real drug ad?',
    a: 'No. "Puppramin" was a spec ad by AI filmmaker PJ Accetturo (PJ Ace), posted on May 22, 2025, for a made-up pill that attracts puppies. He wrote that he used to shoot USD 500,000 pharmaceutical commercials and made this one in less than a day for USD 500 in Google Veo 3 credits. It had no client, no MLR review and no real safety information, which is most of the work in a real drug ad.',
  },
  {
    q: 'Do viewers want AI in drug ads disclosed?',
    a: 'In IAB\'s January 2026 survey of 505 US Gen Z and Millennial consumers, pharmaceutical and healthcare ads ranked with political ads as the categories where consumers most often called AI disclosure very important. More than half wanted disclosure when an ad uses AI video or AI images. Ruminate X recommends deciding on disclosure with your MLR team before production, not after a Reddit thread.',
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
        dek="For the pharma brand manager whose agency has pitched an AI-made spot, or who has seen the Breztri llama and wants to know what happened, what the rules say and what MLR will ask."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          Two drug brands have confirmed ads made with generative AI. AstraZeneca&apos;s Breztri asthma campaign
          (Edelman, September 2026) puts an AI-made llama, goat and oryx in an office, and Gilead Canada&apos;s Descovy ad
          &ldquo;Animal Attraction&rdquo; (The Local Collective) uses an AI-made bear and otter and won a 2026 Cannes
          Pharma Lions bronze. Both used AI for animals, not patients. Viewer questions about whether the Saphnelo, Icotyde,
          Peak Blue Rx and Eli Lilly ads were AI are unconfirmed. The one pharmacy case is Grubb&apos;s Pharmacy in Washington,
          DC, which apologized for AI-generated imagery in October 2026. FDA&apos;s drug-ad rules apply the same way whether the footage was filmed or
          generated.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="The cases" title="AI pharma commercials so far, and what is confirmed">
        <GuideTable
          caption={
            <>
              Each row from the source linked in the sections below, read October 2026. &ldquo;Confirmed&rdquo; means
              the company, its agency or the creator said AI was used.
            </>
          }
          head={['Ad', 'Company, agency', 'What AI made', 'Where it ran', 'Status']}
          rows={[
            ['Breztri, "put a LAMA to work" (2026)', 'AstraZeneca, Edelman', 'The whole production: a llama, a goat and an oryx as office co-workers', 'Connected TV, YouTube, display, social (US)', 'Confirmed'],
            ['Descovy, "Animal Attraction" (launched 2025)', 'Gilead Canada, The Local Collective', 'A realistic bear holding an otter in a river', 'Canada; bronze, Cannes Pharma Lions 2026', 'Confirmed'],
            ['"Puppramin" (May 2025)', 'PJ Accetturo, no client', 'A full parody drug ad with people, made in Veo 3', 'X, then news coverage', 'Spec ad, not a real drug'],
            ['Icotyde, "Unbelievable" (July 2026)', 'Johnson & Johnson', 'Viewers asked whether the doctor and patient were generated', 'US national TV, 6,354 airings to October 7, 2026 (iSpot)', 'Unconfirmed speculation'],
            ['Saphnelo TV ad', 'AstraZeneca', 'Viewers asked whether the people were generated', 'US TV', 'Unconfirmed speculation'],
            ['An Eli Lilly ad', 'Eli Lilly', 'A Reddit user asked whether it was real or AI', 'Not identified', 'Unconfirmed speculation'],
            ['Peak Blue Rx, "Same Results" (March 2026)', 'Peak Blue Rx', 'People search whether it is AI; no source says so', 'US TV, 60 seconds (iSpot)', 'Unconfirmed speculation'],
            ["Grubb's Pharmacy marketing (2026)", "Grubb's Pharmacy, Washington, DC", 'AI-generated imagery in its marketing', 'Its own channels', 'Confirmed by the pharmacy, which apologized (October 2026)'],
          ]}
        />
      </GuideSection>

      <GuideSection eyebrow="AstraZeneca" title="Breztri: the first fully AI-made drug campaign" alt>
        <p>
          When Breztri won an asthma indication on top of COPD, AstraZeneca needed to reach a younger patient group than
          its cruise-ship and RV ads had. Its campaign, made by Edelman, plays on LAMA, the long-acting muscarinic
          antagonist in the inhaler: a business-casual llama works late with a goat and an oryx while a voiceover explains
          the drug. <a href={MEDIAPOST_BREZTRI}>MediaPost reported</a> that the entire production was created through AI,
          with a one-minute spot and two 30-second cuts running on connected TV, YouTube, display and social (September
          2026).
        </p>
        <p>
          AstraZeneca&apos;s marketing senior director Katie Pansegrau told{' '}
          <a href={FIERCE_BREZTRI}>Fierce Pharma</a> the idea &ldquo;kind of led itself to AI&rdquo;, since a real llama
          will not push an elevator button. Edelman used AI tools inside its usual production process, and its group
          creative director told MediaPost the team shot &ldquo;multiple takes for each scene&rdquo;. The standards and the
          educational goal did not change, Pansegrau said.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Gilead Canada" title="Descovy: AI animals and a Cannes Lions bronze">
        <p>
          Gilead Canada&apos;s &ldquo;Animal Attraction&rdquo; ad for Descovy, by the Toronto agency The Local Collective,
          shows a realistic bear holding an otter in a river beside the line &ldquo;it&apos;s wild out there&rdquo; and
          &ldquo;Ask your doctor&rdquo;, with small type reading &ldquo;not intended for animal use, even fake ones like
          these.&rdquo; Bear and otter are slang the HIV-prevention audience recognises. The agency told{' '}
          <a href={FIERCE_GILEAD}>Fierce Pharma</a> that AI let it build a world it could not have made as richly through
          illustration, and that the work was led by &ldquo;human judgment and craft&rdquo; (July 2026).
        </p>
        <p>
          Fierce notes the ad does not endorse Descovy for any specific indication. That fits Canada, where{' '}
          <a href={CANADA_RX}>section C.01.044 of the Food and Drug Regulations</a> limits consumer advertising of a
          prescription drug to its name, price and quantity. A Canadian AI drug ad works inside the same limit as a filmed
          one.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The spec ad" title="Puppramin: USD 500 and less than a day, with no review" alt>
        <p>
          On May 22, 2025, AI filmmaker PJ Accetturo posted &ldquo;Puppramin&rdquo;, a parody ad for a pill that makes
          puppies follow you. He wrote that he used to shoot USD 500,000 pharmaceutical commercials and made this one for
          USD 500 in Veo 3 credits in less than a day (<a href={PUPPRAMIN}>Curious Refuge</a>, which reposts his post).
          Two threads built on that line, in{' '}
          <a href="https://www.reddit.com/r/aivideo/comments/1kslhy3/i_used_to_make_500k_in_pharmaceutical_commercial/">r/aivideo</a>{' '}
          and r/singularity, drew hundreds of replies.
        </p>
        <p>
          The comparison leaves out what makes a real drug ad expensive. Puppramin had no approved claims, no major
          statement of risks to typeset and time to the voiceover, no product or pack that had to be exact, and no
          medical, legal and regulatory review round. Those are the parts that stay when the camera goes. An AI drug ad
          is cheaper to shoot and costs the same to review.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Is it AI?" title="Saphnelo, Icotyde, Lilly and the viewers already looking">
        <p>
          Viewers are already scanning pharma ads for AI. A thread in r/CommercialsIHate titled{' '}
          <a href={REDDIT_SAPHNELO}>&ldquo;Saphnelo pharma ad is AI generated?&rdquo;</a> drew more than 40 comments, and
          one reply said pharma ads would be the first to go all AI because their actors already look so polished. In
          r/RealOrAI, a user asked <a href={REDDIT_LILLY}>&ldquo;is this Eli Lilly ad real or AI?&rdquo;</a>. An older
          thread in r/questions asked <a href={REDDIT_QUESTIONS}>whether drug companies use AI to make their ads</a> (January
          2024). None of these suspicions has been confirmed by the companies or reported by a news outlet as of October
          2026.
        </p>
        <h3>Is the Icotyde commercial made with AI?</h3>
        <p>
          The most-watched case in 2026 is Johnson &amp; Johnson&apos;s ad for Icotyde, the once-daily psoriasis pill FDA{' '}
          <a href={AJMC_ICOTYDE}>approved in March 2026</a>. The spot, &ldquo;Unbelievable&rdquo;, set to the EMF song,{' '}
          <a href={MEDIAPOST_ICOTYDE}>launched on July 14</a> during Fox&apos;s coverage of the World Cup semifinal and the
          MLB All-Star Game, and had <a href={ISPOT_ICOTYDE}>aired nationally 6,354 times</a> by October 7. A patient hears
          &ldquo;good news&rdquo; from her doctor while a unicorn walks past the window. The Commercial Curmudgeon blog
          titled its August review <a href={CURMUDGEON_ICOTYDE}>&ldquo;This Icotyde Ad HAS to be AI&rdquo;</a>, pointing
          at the people, who it said talk and act as if a low-cost AI provider made them. Johnson &amp; Johnson has not said
          AI was used, no agency has claimed the work, and no news outlet has reported it as of October 2026.
        </p>
        <p>
          For a brand team the case shows that an ad can be judged as AI on stiff delivery alone, whether or not AI made
          it. Performance direction and the disclosure decision belong in the same review.
        </p>
        <p>
          Peak Blue Rx, which sells men&apos;s health prescriptions, gets the same question for{' '}
          <a href={ISPOT_PEAK}>&ldquo;Same Results&rdquo;</a>, a 60-second TV spot iSpot lists from March 2, 2026. No
          source says AI made it. On Saphnelo, the threads do not say which spot they mean, and AstraZeneca&apos;s first
          consumer campaign for the drug, &ldquo;Here for More&rdquo;, launched in{' '}
          <a href={FIERCE_SAPHNELO_2022}>May 2022</a>, before generators could make realistic people.
        </p>
        <p>
          An undisclosed AI ad will be judged in threads like these whether or not AI was used. In <a href={IAB}>IAB&apos;s January 2026 survey</a> of 505 US Gen Z and Millennial consumers,
          pharmaceutical and healthcare ads ranked with political ads as the categories where consumers most often said AI
          disclosure is very important, and more than half wanted AI video and AI images disclosed.
        </p>
      </GuideSection>

      <GuideSection eyebrow="A pharmacy" title="Grubb's Pharmacy: the AI ad a pharmacy apologized for" alt>
        <p>
          The one confirmed AI ad from a pharmacy that we have found ended in an apology. Grubb&apos;s Pharmacy at
          326 East Capitol Street NE describes itself as Washington, DC&apos;s oldest pharmacy, established in 1867, and it
          does retail, compounding, vaccinations and delivery. In October 2026 its head pharmacist, Michael Kim, posted an
          apology for using AI-generated imagery in its marketing (<a href={FEEDME_GRUBBS}>Feed Me</a>, October 7, 2026).
          The r/washingtondc post{' '}
          <a href={REDDIT_GRUBBS}>&ldquo;Grubb&apos;s Pharmacy in NE apologizes for AI-generated ad&rdquo;</a> drew more
          than 1,100 comments, with readers arguing over whether a boycott of a small local business went too far.
        </p>
        <p>
          The pharmacy&apos;s next Instagram post, announcing a tea lab inside the store, said it still had to work out
          &ldquo;creating non-AI marketing materials&rdquo; (quoted by <a href={POPVILLE_GRUBBS}>PoPville</a>, October 6,
          2026). Nothing in the coverage says the imagery made a false health claim. The complaints were about
          who made the pictures, at a 159-year-old pharmacy whose owners say they want to connect with their community
          beyond dispensing medications.
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

      <GuideSection eyebrow="The rules" title="What FDA rules apply to an AI-made drug ad">
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

      <GuideSection eyebrow="Animals, not patients" title="Why both real campaigns avoided AI people" alt>
        <p>
          Breztri and Descovy both put AI on animals and kept generated humans out of the frame. The reasons are
          practical. A generated woman taking an inhaler looks like a patient describing a real result, and an MLR
          reviewer has to decide whether she needs a label. A generated person in a white coat looks like a doctor. Faces
          and hands are also where generated footage most often breaks across a 60-second spot. An animal in an office is
          plainly not real, so nobody is misled about who is speaking, and a slightly odd llama reads as a joke.
        </p>
        <p>
          The same pattern showed up outside pharma: Coca-Cola&apos;s 2025 AI holiday ad swapped the generated people of
          its criticised 2024 version for animals, and Progressive&apos;s 2025 &ldquo;Drive Like an Animal&rdquo; insurance ad
          generated animals at the wheel while keeping the real voice of its Flo actress. The cases are on{' '}
          <Link href="/guides/brands-using-ai-commercials">brands using AI commercials</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Who is on screen" title="Actors, celebrities and AI people in drug ads">
        <p>
          Most people in a drug commercial are paid actors playing patients and doctors. Merck&apos;s{' '}
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
          performers are on <Link href="/ai-commercial-production">AI commercial production</Link>. {studio} recommends
          boarding generated people as portrayals only and filming any patient, doctor or celebrity who speaks to results
          with a crew. This is not legal advice; your MLR team and counsel decide.
        </p>
      </GuideSection>

      <GuideSection eyebrow="How it gets made" title="How an AI drug ad is built so it survives review" alt>
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
            <strong>Real product, set in the edit.</strong> The pack, inhaler or pen comes from your product files and is
            composited, never drawn by the generator. Every word on screen is typeset from approved copy.
          </li>
          <li>
            <strong>A decision on labels.</strong> Whether generated people or a generated world carry an on-screen
            disclosure is settled with your reviewers at the brief, not after launch.
          </li>
        </ol>
        <p>
          What MLR reviewers ask about AI footage, shot by shot, is on{' '}
          <Link href="/ai-video-production-healthcare">AI video for pharma and healthcare marketing</Link>.
        </p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X make your pharma ad?"
        hire={[
          'A brand manager with an idea that works as a made world, animals or a visual metaphor, the Breztri and Descovy kind.',
          'A pharmacy, lab or medical company that needs a consumer ad or brand film without a shoot.',
          'A team that needs science or mechanism visuals no camera can film, for awareness or company films.',
        ]}
        instead={[
          'The ad needs real patients telling their own story: film them with a medical production company.',
          'A real clinician has to speak on camera: film it.',
          <>
            The visual must match published data exactly, such as a mechanism of action figure: hire a 3D medical
            animation studio (where <Link href="/guides/ai-medical-animation">AI medical animation</Link> fits and where it
            does not).
          </>,
          'Your reviewers will not approve generated people and the idea depends on them: film it.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-video-production-healthcare', title: 'AI video for pharma and healthcare marketing', note: 'What MLR asks about AI footage, and the US and Canadian drug-ad rules.' },
          { href: '/guides/brands-using-ai-commercials', title: 'Brands using AI commercials', note: 'Coca-Cola, McDonald\'s, Kalshi and others, and how audiences reacted.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'How a 15 to 60 second AI ad is made, and what breaks.' },
          { href: '/guides/who-owns-ai-video', title: 'Who owns an AI video', note: 'Copyright and the contract clauses for a commissioned AI film.' },
          { href: '/guides/ai-video-quality-control', title: 'AI video quality control', note: 'What to check before an AI ad airs.' },
        ]}
      />

      <GuideCta
        title="Send the brief and your review process"
        body="Tell us the product, the market, the audience and how many MLR rounds to plan for. We will say whether the idea suits AI."
      />
    </Guide>
  )
}
