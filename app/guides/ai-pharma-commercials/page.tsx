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
    'Which drug brands have run ads made with generative AI (AstraZeneca\'s Breztri llama, Gilead Canada\'s Descovy bear and otter), the Puppramin spec ad, the Saphnelo and Lilly "is this AI?" threads, what FDA rules apply to AI imagery, and why both real campaigns used animals instead of patients.',
  published: '2026-10-01',
  updated: '2026-10-01',
  keywords: [
    'ai generated pharma commercial',
    'which pharma company is using ai',
    'is saphnelo commercial ai generated',
    'ai generated pharma commercial actors',
    'can pharma ads use ai actors',
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
const CANADA_RX ='https://laws-lois.justice.gc.ca/eng/regulations/C.R.C.,_c._870/section-C.01.044.html'

const FAQS = [
  {
    q: 'Which pharma company is using AI in its commercials?',
    a: 'AstraZeneca is the clearest case: its September 2026 asthma campaign for the Breztri inhaler, made by Edelman, shows a llama, a goat and an oryx working in an office, and the whole production was created with AI (MediaPost, September 2026). Gilead Canada\'s "Animal Attraction" ad for Descovy, made by The Local Collective with an AI-generated bear and otter, won a bronze at the 2026 Cannes Pharma Lions (Fierce Pharma, July 2026).',
  },
  {
    q: 'Is the Saphnelo commercial AI generated?',
    a: 'Nobody has confirmed it. Viewers asked on Reddit (r/CommercialsIHate, "Saphnelo pharma ad is AI generated?") and on X whether AstraZeneca\'s Saphnelo lupus ad used AI, but as of October 2026 neither AstraZeneca nor any news outlet has said it did. Treat it as viewer speculation. The question shows that audiences already look for AI in polished pharma ads.',
  },
  {
    q: 'Can pharma ads use AI actors?',
    a: 'No US rule bans AI-generated people in a drug ad. The FDA rules govern what the ad claims and how the risks are presented, not how the pictures were made. A generated person shown as a patient or a doctor raises questions your MLR team has to answer: whether it needs an on-screen label, and whether viewers could take it for a real patient describing a real result. The two confirmed AI drug campaigns so far, Breztri and Descovy, used animals instead. This is not legal or regulatory advice.',
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
          Pharma Lions bronze. Both used AI for animals, not patients. The Reddit threads asking whether Saphnelo or Eli
          Lilly ads were AI are unconfirmed. FDA&apos;s drug-ad rules apply the same way whether the footage was filmed or
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
            ['Saphnelo TV ad', 'AstraZeneca', 'Viewers asked whether the people were generated', 'US TV', 'Unconfirmed speculation'],
            ['An Eli Lilly ad', 'Eli Lilly', 'A Reddit user asked whether it was real or AI', 'Not identified', 'Unconfirmed speculation'],
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

      <GuideSection eyebrow="Is it AI?" title="Saphnelo, Lilly and the viewers already looking">
        <p>
          Viewers are already scanning pharma ads for AI. A thread in r/CommercialsIHate titled{' '}
          <a href={REDDIT_SAPHNELO}>&ldquo;Saphnelo pharma ad is AI generated?&rdquo;</a> drew more than 40 comments, and
          one reply said pharma ads would be the first to go all AI because their actors already look so polished. In
          r/RealOrAI, a user asked <a href={REDDIT_LILLY}>&ldquo;is this Eli Lilly ad real or AI?&rdquo;</a>. An older
          thread in r/questions asked <a href={REDDIT_QUESTIONS}>whether drug companies use AI to make their ads</a> (January
          2024). None of these suspicions has been confirmed by the companies or reported by a news outlet as of October
          2026.
        </p>
        <p>
          The lesson for a brand team: an undisclosed AI ad will be judged in threads like these whether or not AI was
          used. In <a href={IAB}>IAB&apos;s January 2026 survey</a> of 505 US Gen Z and Millennial consumers,
          pharmaceutical and healthcare ads ranked with political ads as the categories where consumers most often said AI
          disclosure is very important, and more than half wanted AI video and AI images disclosed.
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
          and hands are also where generated footage most often breaks across a 60-second spot. An animal in an office is
          plainly not real, so nobody is misled about who is speaking, and a slightly odd llama reads as a joke.
        </p>
        <p>
          The same pattern showed up outside pharma: Coca-Cola&apos;s 2025 AI holiday ad swapped the generated people of
          its criticised 2024 version for animals. The cases are on{' '}
          <Link href="/guides/brands-using-ai-commercials">brands using AI commercials</Link>.
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
