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
import { OFFERS, PRODUCTION, SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/ai-avatar-videos',
  title: 'AI Avatar Video Production for Companies',
  description:
    'When a company should use an AI avatar or spokesperson video, what avatar tools and studios cost, the consent a real person\'s avatar needs, and the disclosure rules for AI presenters in ads (YouTube, Meta, TikTok, New York, FTC).',
  published: '2026-09-30',
  updated: '2026-09-30',
  keywords: [
    'ai avatar video production company',
    'ai spokesperson video for company',
    'ai avatar video for business',
    'how much does it cost to create an AI avatar',
    'how can I create an AI spokesperson video',
    'how do I make my own AI avatar for videos',
    'which AI video production agency is the best',
  ],
}

const studio = SITE.name
const avatar = OFFERS.find((o) => o.key === 'avatar')!

const HEYGEN_PRICING = 'https://www.heygen.com/pricing'
const SYNTHESIA_PRICING = 'https://www.synthesia.io/pricing'
const DID_PRICING = 'https://www.d-id.com/pricing/studio/'
const SYNTHESIA_CONSENT = 'https://help.synthesia.io/en/articles/9453224-how-do-i-create-my-personal-avatar'
const HEYGEN_CONSENT = 'https://help.heygen.com/en/articles/12092609-recording-your-consent-video'
const YOUTUBE_DISCLOSURE = 'https://support.google.com/youtube/answer/14328491'
const META_ADS_AI = 'https://www.meta.com/en-gb/help/artificial-intelligence/355108217670024/'
const TIKTOK_AIGC = 'https://www.tiktok.com/support/faq_detail?id=7636670084747893268'
const NY_SYNTHETIC = 'https://nyassembly.gov/leg/?default_fld=&leg_video=&bn=A08887&term=2025&Summary=Y&Actions=Y&Text=Y'
const NY_IN_EFFECT = 'https://www.governor.ny.gov/news/governor-hochul-announces-first-nation-law-requiring-disclosure-when-advertisements-include-ai'
const NY_REPLICA = 'https://nyassembly.gov/leg/?default_fld=&leg_video=&bn=S07676&term=2023&Summary=Y&Actions=Y&Text=Y'
const CA_AB2602 = 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB2602'
const TN_ELVIS = 'https://wapp.capitol.tn.gov/apps/Billinfo/default.aspx?BillNumber=HB2091&ga=113'
const FTC_REVIEWS = 'https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials'
const FTC_ENDORSEMENT = 'https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-255/section-255.2'

const FAQS = [
  {
    q: 'How much does it cost to create an AI Avatar?',
    a: 'With a self-serve tool, a personal avatar of yourself comes with a subscription: HeyGen\'s Creator plan is USD 29 a month and its Business plan lists five custom video avatars at USD 149 a month plus 20 per seat; Synthesia\'s Creator plan is USD 89 a month with five personal avatars, and its higher-quality Studio Express-1 avatar is a USD 1,000 a year add-on for annual plans (vendor pricing pages, September 2026). A studio-made spokesperson video is priced per film, by length, scenes and versions. Ruminate X quotes each one from the brief.',
  },
  {
    q: 'How can I create an AI spokesperson video?',
    a: 'Write the script first and decide who the spokesperson is: a stock avatar from a tool, a digital twin of a real person who has consented, or a generated character designed for your brand. For simple talking-head updates, type the script into HeyGen or Synthesia and export. For a spokesperson who appears in a designed world, in ads or a brand film, a studio such as Ruminate X writes, casts and generates the presenter, then edits, licenses the voice and sets your logo and text from your own files.',
  },
  {
    q: 'How do I make my own AI avatar for videos?',
    a: 'Record the source footage the tool asks for and a consent video. Synthesia says consent footage "must be recorded live" with an on-screen passcode, and that the person in the avatar must record their own consent; HeyGen requires a consent video for every video-based avatar, recorded by the person it represents (help pages, September 2026). You cannot make an avatar of a colleague, client or celebrity without that person taking part.',
  },
  {
    q: 'Which AI video production agency is the best for avatar videos?',
    a: 'The one whose avatar work you have seen hold up at the length and on the screen you need, and who answers four questions plainly: whose likeness is it and where is the consent, who licenses the voice, how will the video be labelled on each platform, and what happens to the avatar when the contract ends. For volume training videos, a self-serve tool is usually the better buy. For a cinematic spokesperson in ads or a brand film, compare studios such as Ruminate X on those four answers and on their finished films.',
  },
  {
    q: 'Do I have to disclose an AI avatar in an ad?',
    a: 'Often, yes. New York\'s synthetic performer law, in effect since June 2026, requires whoever produces an ad to conspicuously disclose a synthetic performer they know is in it, with a USD 1,000 penalty for a first violation and 5,000 after. YouTube requires disclosure of photorealistic AI content, including making a real person appear to say something they did not, and TikTok requires a label on realistic AI-generated video of people. This is not legal advice; your legal team decides for each ad.',
  },
  {
    q: 'Can an AI avatar play a customer in a testimonial ad?',
    a: 'Not as if it were a real customer. The FTC\'s rule on consumer reviews and testimonials, final in August 2024, bans testimonials from someone who does not exist, "such as AI-generated fake reviews", and the Endorsement Guides say an ad presented as showing actual consumers should use actual consumers or clearly disclose that they are not. An avatar can present your product as a presenter; it cannot pose as someone who bought it.',
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS}>
      <GuideHero
        eyebrow="AI avatar video production"
        title="AI avatar and spokesperson videos for companies"
        dek="For the marketing, comms or HR lead weighing an AI presenter for ads, product explainers or company updates, who needs to know what it costs, whose face it can be, and what has to be disclosed."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          An AI avatar video puts a generated presenter on screen speaking your script. For a run of simple talking-head
          videos, a self-serve tool such as HeyGen or Synthesia (about USD 29 to 149 a month, September 2026) is the
          cheaper choice. A studio makes sense when the spokesperson has to carry an ad or a brand film. An avatar of a
          real person needs that person&apos;s recorded consent. Realistic AI presenters need disclosure on YouTube and
          TikTok, and in ads in New York. An avatar must never pose as a real customer.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="Options" title="Three kinds of AI avatar video, and who each suits">
        <GuideTable
          caption="The kinds of avatar video companies commission, with the fit column in Ruminate X's view. Prices from the vendors' own pages, September 2026."
          head={['Kind', 'What it is', 'Suits', 'Watch for']}
          rows={[
            ['Stock avatar in a tool', 'A ready-made presenter in HeyGen, Synthesia or D-ID reading your script', 'Training, onboarding, internal updates, many languages', 'Other companies use the same face; looks like a tool'],
            ['Personal avatar (digital twin)', 'A copy of a real person, often an executive or trainer, made from their footage', 'Routine updates from a known face', 'Consent, what it may say, what happens when they leave'],
            ['Designed spokesperson', 'A presenter generated for your brand, placed in scenes and cut like an ad', 'Ads, product films, a brand character across a campaign', 'Keeping the face the same across shots; disclosure'],
          ]}
        />
        <p>
          {studio} makes {avatar.name.toLowerCase()}, {avatar.plain}.{' '}
          {PRODUCTION.summary} If the job is a stock avatar reading a policy update, you do not need a studio.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Price" title="How much does it cost to create an AI avatar?" alt>
        <GuideTable
          caption={
            <>
              From <a href={HEYGEN_PRICING}>HeyGen</a>, <a href={SYNTHESIA_PRICING}>Synthesia</a> and{' '}
              <a href={DID_PRICING}>D-ID</a> pricing pages, read September 30, 2026. USD. D-ID prices are the annual-billing
              rates it shows. Synthesia&apos;s page gives two different avatar counts for its Starter plan, so it is left out.
            </>
          }
          head={['Tool and plan', 'Price', 'Custom avatars included']}
          rows={[
            ['HeyGen Creator', '29 a month (24 billed annually)', '1 or more custom video avatars'],
            ['HeyGen Business', '149 a month plus 20 per seat', '5 custom video avatars'],
            ['Synthesia Creator', '89 a month', '5 personal avatars'],
            ['Synthesia Studio Express-1 avatar', '1,000 a year add-on, annual plans only', 'A higher-quality studio avatar; up to 10 days to process'],
            ['D-ID Pro', '16 a month billed annually', '3 personal avatars'],
            ['D-ID Advanced', '108 a month billed annually', '5 personal avatars'],
          ]}
        />
        <p>
          A tool subscription buys the ability to make videos; your team still writes, directs and checks them. A
          studio-made avatar film is priced per film, by running time, the number of scenes, the versions and languages,
          voice licensing and review rounds. {studio} quotes each film from the brief. Published prices for AI studio work
          are in <Link href="/blog/how-much-does-ai-video-production-cost">how much AI video production costs</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Consent" title="Making an avatar of a real person">
        <p>
          The tools will not build a personal avatar without the person taking part.{' '}
          <a href={SYNTHESIA_CONSENT}>Synthesia</a> says consent footage &ldquo;must be recorded live and must include the
          on-screen passcode&rdquo; and that the person represented &ldquo;must record their own consent video&rdquo;.{' '}
          <a href={HEYGEN_CONSENT}>HeyGen</a> requires a consent video for every video-based avatar, recorded by the person
          it represents.
        </p>
        <p>US law adds contract rules for digital replicas of real people:</p>
        <ul>
          <li>
            <strong>New York</strong> (<a href={NY_REPLICA}>General Obligations Law §5-302</a>, contracts from January 1,
            2025) and <strong>California</strong> (<a href={CA_AB2602}>AB 2602, Labor Code §927</a>): a clause letting a
            digital replica do work the person would have done in person is unenforceable if it lacks a reasonably specific
            description of the intended use and the person had no lawyer or union covering the terms.
          </li>
          <li>
            <strong>Tennessee</strong> (<a href={TN_ELVIS}>ELVIS Act</a>, in effect July 1, 2024) makes using a person&apos;s
            voice or likeness to advertise products without their prior consent a civil wrong.
          </li>
        </ul>
        <p>
          For an employee avatar, put in writing what it may say, where it runs, for how long, and what happens when the
          employee leaves. Anything that rests on a leader&apos;s own credibility (results, layoffs, apologies) should be
          filmed. More on company use is in <Link href="/ai-video-production-enterprise">AI corporate video production</Link>.
          This is not legal advice.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Disclosure" title="Disclosure rules for AI presenters in ads and videos" alt>
        <GuideTable
          caption={
            <>
              From <a href={YOUTUBE_DISCLOSURE}>YouTube Help</a>, <a href={META_ADS_AI}>Meta Help</a>,{' '}
              <a href={TIKTOK_AIGC}>TikTok Support</a>, the <a href={NY_SYNTHETIC}>New York Assembly</a> (A.8887-B, Chapter 617;{' '}
              <a href={NY_IN_EFFECT}>in effect June 9, 2026</a>) and the FTC (<a href={FTC_REVIEWS}>reviews rule</a>,{' '}
              <a href={FTC_ENDORSEMENT}>Endorsement Guides §255.2</a>), read September 30, 2026. Not legal advice.
            </>
          }
          head={['Where', 'The rule', 'What it means for an avatar video']}
          rows={[
            ['YouTube', 'Creators must disclose photorealistic AI content, including making a real person appear to say or do something they did not', 'Tick the AI disclosure when uploading; a label may appear in the player'],
            ['Meta', 'An AI info label appears next to Sponsored when an ad made with Meta\'s own AI tools includes an AI-generated photorealistic human; social issue and political ads must disclose digitally created people', 'Expect labels on Meta-made assets; political and issue ads must disclose'],
            ['TikTok', 'Creators must label all AI-generated content with realistic images, audio and video, including AI videos of real or fictional people; public figures may not be shown endorsing', 'Label every realistic avatar video; no celebrity look-alikes'],
            ['New York', 'Whoever produces an ad must conspicuously disclose a synthetic performer they know is in it; USD 1,000 first violation, 5,000 after', 'Disclose AI presenters in ads that run there'],
            ['FTC (US)', 'No testimonials from people who do not exist, "such as AI-generated fake reviews"; ads showing "actual consumers" must use them or disclose', 'An avatar may present; it may not pose as a customer'],
          ]}
        />
        <p>
          Consented avatars of your own staff are still labelled on YouTube and TikTok when they look real. For regulated
          categories (pharma, medical, financial) your review team decides how a presenter is labelled; the questions
          reviewers ask about AI footage are on <Link href="/ai-video-production-healthcare">AI video for pharma and
          healthcare</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="How it is made" title="How a studio makes an AI spokesperson video">
        <ol>
          <li>
            <strong>Brief and script.</strong> Who watches, where it runs, how long, and what the presenter must and must
            not say. Claims are agreed with legal before anything is generated.
          </li>
          <li>
            <strong>Casting the presenter.</strong> A designed face, age, wardrobe and voice for the brand, fixed in a
            reference sheet so shot 30 matches shot 1. No resemblance to a real person unless that person has consented.
          </li>
          <li>
            <strong>Voice.</strong> A licensed voice actor, a licensed synthetic voice, or the consented voice of a real
            person, cleared for every channel and territory in the media plan.
          </li>
          <li>
            <strong>Generation and checks.</strong> Each shot is generated and checked for lip sync, eyes, hands and whether
            the face has drifted, then rerun until it holds.
          </li>
          <li>
            <strong>Edit and brand.</strong> Cut, sound, grade, captions, and your logo, product and on-screen text set
            from your own files, never generated. Then the platform labels and the versions each channel needs.
          </li>
        </ol>
        <p>
          Keeping one generated face the same across a series is the hardest part; the methods are in{' '}
          <Link href="/guides/ai-video-character-consistency">AI video character consistency</Link>. Who owns the finished
          video, and the presenter, is in <Link href="/guides/who-owns-ai-video">who owns an AI video</Link>.
        </p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X make your avatar video?"
        hire={[
          'A brand that wants a designed spokesperson to front a commercial or a product film, in scenes, not in front of a plain background.',
          'A marketing lead who needs one presenter to stay the same across a campaign of ads and cutdowns.',
          'A pharma, lab or medical company that wants a presenter in a mechanism-of-action or product film, with a review process for every claim.',
        ]}
        instead={[
          'You need dozens of training, policy or onboarding videos: HeyGen or Synthesia on a monthly plan costs far less.',
          'The message rests on a real leader\'s credibility: film the leader.',
          'You want real customers to vouch for the product: film real customers, with permission.',
          'Your audience is likely to reject an AI presenter: film a person.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-video-production-enterprise', title: 'AI corporate video production', note: 'Which company films AI can make, and which need a camera.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'How an AI commercial is made, and actors and likeness rules.' },
          { href: '/guides/who-owns-ai-video', title: 'Who owns an AI video', note: 'Copyright, tool terms and the contract clauses to ask for.' },
          { href: '/guides/ai-video-character-consistency', title: 'AI video character consistency', note: 'Keeping one face the same across a film or series.' },
          { href: '/faq-ai-video-production', title: 'AI video production FAQ', note: 'Commercial use, legality, cost and quality in short answers.' },
        ]}
      />

      <GuideCta
        title="Tell us about the presenter"
        body="Send the script or the idea, where it will run, how many videos and languages, and whether the presenter is a real person or designed for you."
      />
    </Guide>
  )
}
