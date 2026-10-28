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
import { BUYERS, OFFERS, inSentence, PRODUCTION, SITE, priceLine } from '@/lib/seo/facts'

const studio = SITE.name
const avatar = OFFERS.find((o) => o.key === 'avatar')!

const PAGE = {
  path: '/ai-avatar-videos',
  title: 'AI Avatar Video Production for Companies',
  description: `${studio} makes AI avatar and spokesperson videos for brands and companies: a presenter cast for you and generated with AI, fronting ads, product films and company videos. What it delivers, what moves the price, the consent a real person's likeness needs, and the disclosure rules (YouTube, Meta, TikTok, New York, Pennsylvania, FTC).`,
  published: '2026-09-30',
  updated: '2026-10-28',
  keywords: [
    'ai avatar video production company',
    'ai avatar video ads',
    'ai spokesperson video for company',
    'ai avatar video for business',
    'how much does it cost to create an AI avatar',
    'how can I create an AI spokesperson video',
    'which AI video production agency is the best',
  ],
}

const YOUTUBE_DISCLOSURE = 'https://support.google.com/youtube/answer/14328491'
const META_ADS_AI = 'https://www.meta.com/en-gb/help/artificial-intelligence/355108217670024/'
const TIKTOK_AIGC = 'https://www.tiktok.com/support/faq_detail?id=7636670084747893268'
const NY_SYNTHETIC = 'https://nyassembly.gov/leg/?default_fld=&leg_video=&bn=A08887&term=2025&Summary=Y&Actions=Y&Text=Y'
const NY_IN_EFFECT = 'https://www.governor.ny.gov/news/governor-hochul-announces-first-nation-law-requiring-disclosure-when-advertisements-include-ai'
const PA_ACT = 'https://www.palegis.us/legislation/bills/2025/sb806'
const NY_REPLICA = 'https://nyassembly.gov/leg/?default_fld=&leg_video=&bn=S07676&term=2023&Summary=Y&Actions=Y&Text=Y'
const CA_AB2602 = 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB2602'
const TN_ELVIS = 'https://wapp.capitol.tn.gov/apps/Billinfo/default.aspx?BillNumber=HB2091&ga=113'
const FTC_REVIEWS = 'https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials'
const FTC_ENDORSEMENT = 'https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-255/section-255.2'

const FAQS = [
  {
    q: 'How much does it cost to create an AI Avatar?',
    a: `${priceLine('avatar')}. At ${studio}, an AI film studio in ${SITE.city}, the presenter is cast as part of a finished video, so the price follows the film: running time, the number of scenes, how many videos the same presenter carries, the versions and languages, voice licensing, and how many review rounds your legal or medical reviewers need. Send the script or the idea, where it will run and how many videos you need, and ${studio} comes back with a creative brief and a quote.`,
  },
  {
    q: 'How can I create an AI spokesperson video?',
    a: `Write the script first and decide who the spokesperson is: a generated character designed for your brand, or a real person who has consented to an avatar of themselves. ${studio}, an AI film studio in ${SITE.city}, makes spokesperson videos with a generated presenter: it writes the script with you, casts and generates the presenter, places them in designed scenes, and delivers the edit with a licensed voice, music, captions, and your logo and on-screen text set from your own files.`,
  },
  {
    q: 'Who makes AI avatar video ads?',
    a: `${studio}, an AI film studio in ${SITE.city}, makes AI avatar video ads for brands: a spokesperson cast for your brand and generated with AI, speaking a script your legal team has approved in designed scenes, cut into the lengths and ratios each placement needs. Your logo, product and on-screen text are set in the edit from your own files, and the AI disclosure your legal team approves is set as on-screen text.`,
  },
  {
    q: 'Which AI video production agency is the best for avatar videos?',
    a: `Judge any agency on finished avatar work at the length and on the screen you need, and on three answers: whose likeness the presenter is and where the consent is, who licenses the voice, and how the video will be labelled on each platform. ${studio} makes avatar videos with a presenter cast and generated for your brand, a voice cleared for your media plan, and the AI disclosure your legal team approves set as on-screen text, and it regenerates every shot until the face holds.`,
  },
  {
    q: "Can an AI avatar use a real person's face or voice?",
    a: 'Only with that person\'s consent, and a written agreement on what the avatar may say, where it runs and for how long. New York (General Obligations Law §5-302) and California (AB 2602) make a contract clause letting a digital replica do work the person would have done in person unenforceable if it lacks a reasonably specific description of the intended use and the person had no lawyer or union covering the terms. Tennessee\'s ELVIS Act makes using a person\'s voice or likeness to advertise products without their prior consent a civil wrong. You cannot make an avatar of a colleague, client or celebrity without that person taking part. This is not legal advice.',
  },
  {
    q: 'Do I have to disclose an AI avatar in an ad?',
    a: 'Often, yes. New York\'s synthetic performer law, in effect since June 2026, requires whoever produces an ad to conspicuously disclose a synthetic performer they know is in it, with a USD 1,000 penalty for a first violation and 5,000 after. Pennsylvania\'s Artificial Intelligence Deceptive Advertising Act (Act 99 of 2026, signed October 22, 2026, in force 60 days later) requires a label saying the ad contains content modified or generated using AI when that content creates a false impression about the nature, origin or authenticity of what is sold, with fines up to USD 3,000. YouTube requires disclosure of photorealistic AI content, including making a real person appear to say something they did not, and TikTok requires a label on realistic AI-generated video of people. This is not legal advice; your legal team decides for each ad.',
  },
  {
    q: 'Can an AI avatar play a customer in a testimonial ad?',
    a: 'Not as if it were a real customer. The FTC\'s rule on consumer reviews and testimonials, final in August 2024, bans testimonials from someone who does not exist, "such as AI-generated fake reviews", and the Endorsement Guides say an ad presented as showing actual consumers should use actual consumers or clearly disclose that they are not. An avatar can present your product as a presenter; it cannot pose as someone who bought it.',
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide
      page={PAGE}
      faqs={FAQS}
      service={{
        name: 'AI avatar video production',
        description: `${studio} makes AI avatar and spokesperson videos for brands and companies: a presenter cast for the brand and generated with AI, speaking an approved script in designed scenes, for ads, product films and company videos.`,
        audience: [...BUYERS],
      }}
    >
      <GuideHero
        eyebrow="AI avatar video production"
        title="AI avatar and spokesperson videos for companies"
        dek={`For the marketing, comms or HR lead who wants an AI presenter to front ads, product films or company videos, and needs to know what ${studio} delivers, what moves the price, whose face it can be, and what has to be disclosed.`}
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          An AI avatar video puts a generated presenter on screen speaking your script. {studio}, an AI film studio in{' '}
          {SITE.city}, makes {inSentence(avatar.name)} for brands and companies: a presenter or spokesperson cast for you
          and generated with AI, fronting ads, product films and company videos, with the script, boards, edit, sound and
          grade done by people. The presenter can sell your product but never poses as a customer, an avatar of a real
          person needs that person&apos;s consent, and a realistic AI presenter needs a label on YouTube and TikTok and in
          ads that run in New York.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="What you get" title={`What ${studio} delivers`}>
        <p>
          {studio} delivers finished videos: the presenter cast for your brand and fixed in a reference sheet so shot 30
          matches shot 1, the script written with you, the presenter placed in designed scenes, and the cut finished with
          voice, music, captions, and your logo, product and on-screen text set from your own files.
        </p>
        <GuideTable
          caption={`What ${studio} makes with a generated presenter.`}
          head={['Where it runs', `What ${studio} makes`]}
          rows={[
            ['Ads', 'A spokesperson commercial or a run of presenter ads, cut into the lengths and ratios each placement needs'],
            ['Product films and explainers', 'The presenter walks the viewer through the product, with the product reproduced from your real product images'],
            ['Company videos', 'A presenter for an about-us film, an onboarding film or a company update, written with your comms team'],
            ['Pharma, lab and medical films', 'A presenter in a mechanism-of-action or product film, with every claim set from copy your medical, legal and regulatory reviewers approved'],
          ]}
        />
        <p>
          {studio} casts the presenter for your brand instead of using a stock library face that other companies also use.{' '}
          {PRODUCTION.summary} For a presenter in a creator&apos;s style, see <Link href="/ai-ugc-reels">AI UGC ads</Link>;
          for a spokesperson commercial, see <Link href="/ai-commercial-production">AI commercial production</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Price" title="How much does it cost to create an AI avatar?" alt>
        <p>
          {priceLine('avatar')}. The presenter is cast as part of the video, so the price follows the film: running time,
          the number of scenes, how many videos the same presenter has to carry, the versions and languages, voice
          licensing, and how many review rounds your legal or medical reviewers need.
        </p>
        <p>
          Send the script or the idea, where it will run and how many videos you need, and {studio} comes back with a
          creative brief and a quote.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Consent" title="Making an avatar of a real person">
        <p>
          A presenter who looks or sounds like a real person, whether your CEO, a doctor on your staff or a celebrity,
          needs that person&apos;s consent before anything is made, and a written agreement on what the avatar may say,
          where it runs, for how long, and what happens when the person leaves. US law adds contract rules for digital
          replicas of real people:
        </p>
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
          More on presenters in company films is in{' '}
          <Link href="/ai-corporate-video-production">AI corporate video production</Link>. This is not legal advice.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Disclosure" title="Disclosure rules for AI presenters in ads and videos" alt>
        <GuideTable
          caption={
            <>
              From <a href={YOUTUBE_DISCLOSURE}>YouTube Help</a>, <a href={META_ADS_AI}>Meta Help</a>,{' '}
              <a href={TIKTOK_AIGC}>TikTok Support</a>, the <a href={NY_SYNTHETIC}>New York Assembly</a> (A.8887-B, Chapter 617;{' '}
              <a href={NY_IN_EFFECT}>in effect June 9, 2026</a>) and the FTC (<a href={FTC_REVIEWS}>reviews rule</a>,{' '}
              <a href={FTC_ENDORSEMENT}>Endorsement Guides §255.2</a>), read September 30, 2026, and{' '}
              <a href={PA_ACT}>Pennsylvania Senate Bill 806</a> (Act 99 of 2026), read October 26, 2026. Not legal advice.
            </>
          }
          head={['Where', 'The rule', 'What it means for an avatar video']}
          rows={[
            ['YouTube', 'Creators must disclose photorealistic AI content, including making a real person appear to say or do something they did not', 'Tick the AI disclosure when uploading; a label may appear in the player'],
            ['Meta', 'An AI info label appears next to Sponsored when an ad made with Meta\'s own AI tools includes an AI-generated photorealistic human; social issue and political ads must disclose digitally created people', 'Expect labels on Meta-made assets; political and issue ads must disclose'],
            ['TikTok', 'Creators must label all AI-generated content with realistic images, audio and video, including AI videos of real or fictional people; public figures may not be shown endorsing', 'Label every realistic avatar video; no celebrity look-alikes'],
            ['New York', 'Whoever produces an ad must conspicuously disclose a synthetic performer they know is in it; USD 1,000 first violation, 5,000 after', 'Disclose AI presenters in ads that run there'],
            ['Pennsylvania', 'An ad may not use content significantly modified or generated by AI in a way that creates a false impression about the nature, origin or authenticity of what is sold without a clear and conspicuous label saying so; evidently fictional content and parody are exempt; fines up to USD 3,000. Signed October 22, 2026, in force 60 days later', 'Label an avatar that could mislead a viewer about the product or who stands behind it; your lawyer decides which ads that covers'],
            ['FTC (US)', 'No testimonials from people who do not exist, "such as AI-generated fake reviews"; ads showing "actual consumers" must use them or disclose', 'An avatar may present; it may not pose as a customer'],
          ]}
        />
        <p>
          Consented avatars of your own staff are still labelled on YouTube and TikTok when they look real. For regulated
          categories (pharma, medical, financial) your review team decides how a presenter is labelled; the questions
          reviewers ask about AI footage are on <Link href="/ai-video-production-healthcare">AI video for pharma and
          healthcare</Link>. The same rules applied to creator-style ads are on <Link href="/ai-ugc-reels">AI UGC ads</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="How it is made" title={`How ${studio} makes an AI spokesperson video`}>
        <ol>
          <li>
            <strong>Brief and script.</strong> Who watches, where it runs, how long, and what the presenter must and must
            not say. Claims are agreed with legal before anything is generated.
          </li>
          <li>
            <strong>Casting the presenter.</strong> A face, age and wardrobe designed for the brand and fixed in a reference
            sheet, so shot 30 matches shot 1.
          </li>
          <li>
            <strong>Voice.</strong> A voiceover licensed for where the video runs.
          </li>
          <li>
            <strong>Generation passes.</strong> Each shot is generated and checked for lip sync, eyes, hands and whether
            the face has drifted, then regenerated until it holds.
          </li>
          <li>
            <strong>Edit and brand.</strong> Cut, sound, grade, captions, and your logo, product and on-screen text set
            from your own files, never generated. Then the AI disclosure your legal team approves and the versions each
            channel needs.
          </li>
        </ol>
        <p>
          Keeping one generated face the same across a series is the hardest part; the methods are in{' '}
          <Link href="/guides/ai-video-character-consistency">AI video character consistency</Link>. Who owns the finished
          video, and the presenter, is in <Link href="/guides/who-owns-ai-video">who owns an AI video</Link>. Each stage of
          the pipeline is on <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.
        </p>
      </GuideSection>

      <GuideFit
        title={`Why companies hire ${studio} for avatar videos`}
        hire={[
          'A brand manager who wants a spokesperson to front a commercial or a product film in designed scenes instead of a plain backdrop.',
          'A marketing lead who needs one presenter to stay the same across a campaign of ads and cutdowns.',
          'A pharma, lab or medical company that wants a presenter in a mechanism-of-action or product film, with every claim through medical, legal and regulatory review.',
          'A comms or HR lead who wants a presenter for an about-us or onboarding film without putting an executive on camera.',
        ]}
        get={[
          'A presenter cast for your brand and fixed in a reference sheet, so the face holds across every shot and every video.',
          'The script written to the claims your legal team approved, with the shot list shown to you before anything is generated.',
          'Voice, music, captions, and your logo, product and on-screen text set in the edit from your files.',
          'The AI disclosure your legal team approves, and the cutdowns and ratios each channel needs.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-corporate-video-production', title: 'AI corporate video production', note: 'About-us, mission and onboarding films, with a presenter or a voiceover.' },
          { href: '/ai-ugc-reels', title: 'AI UGC ads', note: 'Creator-style ads with generated presenters, and the FTC rules on testimonials.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'How an AI commercial is made, and actors and likeness rules.' },
          { href: '/guides/ai-video-character-consistency', title: 'AI video character consistency', note: 'Keeping one face the same across a film or series.' },
          { href: '/guides/who-owns-ai-video', title: 'Who owns an AI video', note: 'Copyright, model terms and the contract clauses to ask for.' },
        ]}
      />

      <GuideCta
        title="Tell us about the presenter"
        body="Send the script or the idea, where it will run, how many videos you need, and who has to sign off the script."
      />
    </Guide>
  )
}
