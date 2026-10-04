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
  film,
  guideMetadata,
} from '@/components/guide/Guide'
import { OFFERS, PRODUCTION, SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/ai-ugc-reels',
  title: 'AI UGC Ads Agency for Brands',
  description:
    'What an AI UGC ad is, what an AI UGC ads agency, a self-serve tool and real creators cost, whether AI UGC ads are legal (FTC, TikTok, Meta, New York), where they break, and how a studio makes them.',
  published: '2026-03-08',
  updated: '2026-10-04',
  keywords: [
    'ai ugc ads agency',
    'ai ugc ads',
    'ai ugc agency',
    'are ai ugc ads legal',
    'can you do ugc content with ai',
    'do you have to disclose if an ad is ai',
    'ai ugc ads examples',
  ],
}

const studio = SITE.name
const ugc = OFFERS.find((o) => o.key === 'ugc')!
const short = film('zJgXuxFGU0U')

const ADMIRAL = 'https://admiral.media/ai-ugc-agency'
const CREATIFY_PRICING = 'https://creatify.ai/pricing'
const COLLABSTR_UGC = 'https://collabstr.com/influencer-price-calculator/user-generated-content'
const FTC_465 = 'https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-465/section-465.2'
const FTC_255 = 'https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-255/section-255.2'
const TIKTOK_AIGC = 'https://www.tiktok.com/support/faq_detail?id=7636670084747893268'
const META_ADS_AI = 'https://www.meta.com/en-gb/help/artificial-intelligence/355108217670024/'
const NY_IN_EFFECT = 'https://www.governor.ny.gov/news/governor-hochul-announces-first-nation-law-requiring-disclosure-when-advertisements-include-ai'

const FAQS = [
  {
    q: 'Are AI UGC ads legal?',
    a: 'Yes, with conditions. In the US, the FTC rule on consumer reviews and testimonials (16 CFR 465.2) bans testimonials that misrepresent that the person exists or used the product, and the Endorsement Guides (16 CFR 255.2(c)) say an ad presented as showing actual consumers must use actual consumers or clearly disclose that they are not. TikTok requires a label on realistic AI-generated video, and New York has required ads to disclose AI synthetic performers since June 9, 2026. An AI presenter can demonstrate a product; it cannot pose as a customer. This is not legal advice.',
  },
  {
    q: 'Can you do UGC content with AI?',
    a: 'You can make UGC-style content with AI: a generated presenter talking to camera, a product demo, an unboxing shot as a demonstration. What AI cannot make is real user-generated content, because nobody used the product. Brands that want genuine customer voices film real customers, with permission. Brands that want creator-style ads at testing volume use an AI tool or a studio such as Ruminate X, and label the ads as AI where the platform or law requires it.',
  },
  {
    q: 'Do you have to disclose if an ad is AI?',
    a: 'Often. TikTok requires creators to label AI-generated content that contains realistic images, audio and video. Meta adds an "AI info" label next to Sponsored when an ad made with its own generative AI tools contains a photorealistic AI human, and political and social issue ads must disclose AI-made images, video or audio. New York requires ads to identify AI synthetic performers (in effect June 9, 2026). Your legal team decides for each ad; this is not legal advice.',
  },
  {
    q: 'How much does an AI UGC ads agency cost?',
    a: 'Published prices vary by model. Admiral Media lists AI UGC batches at EUR 10,000 for 20 video ads (EUR 500 each), EUR 16,000 for 40 and EUR 29,000 for 80, aimed at advertisers spending US$50,000 or more a month on paid media. A self-serve tool such as Creatify costs USD 39 or 99 a month for credits, and real UGC creators on Collabstr charge USD 195 on average (pages read October 2026). Ruminate X quotes UGC-style ads from the brief.',
  },
  {
    q: 'Do AI UGC ads work?',
    a: 'No independent public test settles it; the results that get quoted come from tool vendors and agencies about their own clients. Test it on your own account: run AI UGC-style ads against your best creator ads on the same offer, audience and budget, and judge on purchases or sign-ups, not clicks. Watch for fatigue sooner if the presenter is a stock avatar other brands also use.',
  },
  {
    q: 'Can an AI UGC ad show a customer review?',
    a: 'Only a real one. Under the FTC rule (16 CFR 465.2) a review or testimonial may not misrepresent that the reviewer exists or used the product, and AI-generated fake reviews fall inside that ban. A compliant review-style ad quotes a real customer who agreed to it, shows or reads their words accurately, and discloses that the presenter is AI-made. This is not legal advice.',
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} films={[short.youtubeId]}>
      <GuideHero
        eyebrow="AI UGC ads"
        title="AI UGC ads: creator-style ads made with AI"
        dek="For the performance marketer or DTC brand manager who needs more hooks to test on Meta and TikTok than creators can deliver, and wants to know what AI UGC ads cost, what has to be disclosed, and where they fall apart."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          An AI UGC ad is a scripted ad made to look like a creator&apos;s phone video, with a generated presenter. You can
          make them yourself with a tool (Creatify is USD 39 to 99 a month), hire an AI UGC agency (Admiral Media lists EUR
          500 a video in batches of 20), or pay real creators (USD 195 on average on Collabstr; pages read October 2026). They
          are legal in the US when the presenter never poses as a real customer, and they need an AI label on TikTok and in
          ads that run in New York.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="What it is" title="What counts as an AI UGC ad">
        <p>
          The format copies what works in creator ads: a face in the first second, a hook, the product in hand, captions, a
          reason to buy, all in 9:16. The presenter, the setting and often the voice are generated. Nobody bought the product,
          so it is advertising in a creator&apos;s style. Admiral Media, which sells it, puts it plainly on its own page:
          &ldquo;AI UGC is scripted advertising, not content submitted by a real customer.&rdquo;
        </p>
        <GuideTable
          caption="Common AI UGC ad formats and the line each one must not cross, in Ruminate X's reading of the FTC rules cited below. Not legal advice."
          head={['Format', 'What the viewer sees', 'Stays honest when']}
          rows={[
            ['Hook-first presenter ad', 'A presenter talks to camera about one problem the product solves', 'The presenter speaks as a presenter, never "I bought this and..."'],
            ['Demo or how-to', 'Hands using the product, step by step, with captions', 'The product does what the ad shows; label and pack match the real one'],
            ['Unboxing', 'The product coming out of its box', 'It is shown as a demonstration, with no invented customer reaction'],
            ['Comparison', 'Before and after, or side by side with the old way', 'Any claim is one your legal team can support'],
            ['Review-style', 'A real customer review, read or shown on screen', 'The review is real, used with permission, and the AI presenter is disclosed'],
          ]}
        />
        <p>
          {studio} makes {ugc.name}, {ugc.plain}. {PRODUCTION.summary}
        </p>
      </GuideSection>

      <GuideSection eyebrow="Price" title="AI UGC ads agency, tool or real creators: what each costs" alt>
        <GuideTable
          caption={
            <>
              From <a href={ADMIRAL}>Admiral Media</a>, <a href={CREATIFY_PRICING}>Creatify</a> and the{' '}
              <a href={COLLABSTR_UGC}>Collabstr UGC price calculator</a>, read October 4, 2026. Each source sells what it
              prices.
            </>
          }
          head={['Option', 'Published price', 'Who writes, directs and fixes the shots']}
          rows={[
            ['Self-serve tool (Creatify Starter / Pro)', 'USD 39 a month for 100 credits; USD 99 a month for 300 credits', 'Your team'],
            ['AI UGC agency (Admiral Media)', 'EUR 10,000 for 20 ads (EUR 500 each), EUR 16,000 for 40, EUR 29,000 for 80; for advertisers spending US$50,000+ a month', 'The agency'],
            ['Real UGC creators (Collabstr marketplace)', 'USD 195 on average per creator, across 1.3 million rates', 'The creator films; you brief and choose'],
          ]}
        />
        <p>
          The tool price buys generations, not ads. Someone still writes the hooks, picks the takes that hold up, fixes the
          product in the presenter&apos;s hand and cuts the variants. With real creators you get a real person and real
          usage, but each new hook means a new shoot. {studio} quotes UGC-style ads from the brief: how many concepts, hooks
          and versions, which platforms, and how much of the product has to be shown in use. Published prices for AI studio
          work in general are in <Link href="/blog/how-much-does-ai-video-production-cost">how much AI video production
          costs</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Rules" title="Are AI UGC ads legal? Disclosure on TikTok, Meta and in the US">
        <GuideTable
          caption={
            <>
              From the FTC rules on <a href={FTC_465}>consumer reviews and testimonials (16 CFR 465.2)</a> and{' '}
              <a href={FTC_255}>endorsements (16 CFR 255.2)</a>, <a href={TIKTOK_AIGC}>TikTok Support</a>,{' '}
              <a href={META_ADS_AI}>Meta Help</a> and the <a href={NY_IN_EFFECT}>New York Governor&apos;s office</a>, read
              October 4, 2026. Not legal advice.
            </>
          }
          head={['Where', 'The rule', 'What it means for an AI UGC ad']}
          rows={[
            ['FTC reviews rule', 'No review or testimonial that misrepresents that the person exists, used the product, or what their experience was', 'A generated presenter cannot claim to have used the product'],
            ['FTC Endorsement Guides 255.2(c)', 'Ads presented as showing "actual consumers" should use actual consumers, or clearly disclose they are not', 'If the ad looks like a customer talking, disclose that it is not one'],
            ['TikTok', 'Creators must label all AI-generated content with realistic images, audio and video; no AI content showing public figures endorsing', 'Turn on the AI-generated content label; no celebrity look-alikes'],
            ['Meta', '"AI info" appears next to Sponsored when an ad made with Meta\'s generative AI tools includes a photorealistic AI human; political and social issue ads must disclose AI-made media', 'Expect the label on Meta-made assets; disclose in issue ads'],
            ['New York', 'Whoever produces an ad must identify AI synthetic performers, "digitally-created media that appear as a real person"; in effect June 9, 2026', 'Disclose the presenter in ads that run there'],
          ]}
        />
        <p>
          The disclosure itself can be a line of on-screen text, the platform&apos;s own AI label, or both. Pharma, medical
          and financial brands have their own review rules on top of these; the questions reviewers ask about AI footage are
          on <Link href="/ai-video-production-healthcare">AI video for pharma and healthcare</Link>. Penalties and the rest of
          the presenter rules are in <Link href="/ai-avatar-videos">AI avatar video production</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Where it breaks" title="Where AI UGC ads break, and what fixes them" alt>
        <GuideTable
          caption="Common failures in generated creator-style ads, and what a studio does about each."
          head={['Problem', 'What the viewer notices', 'Fix']}
          rows={[
            ['Hands on the product', 'Fingers merge with the bottle, the grip changes between cuts', 'Generate the hand shot separately, rerun until it holds, or cut to a product insert'],
            ['Label and packaging', 'Misspelled brand name, wrong pack colour, text that warps', 'Set the label from your own artwork in the edit, never generated'],
            ['Lip sync and eyes', 'Mouth a beat late, a stare that never blinks', 'Check every take at full size; reject the ones that drift'],
            ['The stock face', 'The same presenter seen in other brands\' ads', 'Design a presenter for your brand and fix it in a reference sheet'],
            ['Sameness across variants', 'Ten hooks that feel like one ad, so fatigue sets in early', 'Change the setting, opening shot and presenter energy per hook, not only the first line'],
          ]}
        />
        <p>
          Keeping one generated presenter the same across a batch is the hardest part; the methods are in{' '}
          <Link href="/guides/ai-video-character-consistency">AI video character consistency</Link>. Keeping the product
          right is in <Link href="/guides/ai-commercial-product-accuracy">product and label accuracy in AI commercials</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="How it is made" title="How a studio makes UGC-style ads">
        <ol>
          <li>
            <strong>Brief.</strong> The product, the audience, the offer, the claims your legal team has approved, the
            platforms, and your best-performing creator ads so far, if you have them.
          </li>
          <li>
            <strong>Presenter.</strong> A face, age, wardrobe, setting and voice designed for the brand, with no resemblance
            to a real person or a celebrity.
          </li>
          <li>
            <strong>Hooks and scripts.</strong> Several openings per concept, each a different reason to stop scrolling,
            written to the approved claims.
          </li>
          <li>
            <strong>Generation and checks.</strong> Each shot generated and checked for hands, lip sync, eyes and face drift,
            then rerun until it holds.
          </li>
          <li>
            <strong>Edit.</strong> Captions inside each platform&apos;s safe zones, music cleared for paid use, your logo and
            pack from your own files, the AI disclosure where the platform or law asks for one, and the versions each placement needs.
          </li>
        </ol>
        <GuideFilm
          id={short.youtubeId}
          caption={`${short.title}, a ${short.durationSeconds}-second vertical film from the ${studio} portfolio. A short-form product film, shown for the product shots; the portfolio has no creator-style presenter ad yet.`}
        />
        <p>
          The same pipeline makes longer work; how a brand film is made from brief to final cut is in{' '}
          <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.
        </p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X make your UGC-style ads?"
        hire={[
          'A DTC or consumer brand that runs paid social and needs more hooks and variants to test than its creators can film.',
          'A brand that wants one designed presenter across a campaign, with the product and label exact in every cut.',
          'A team that also needs a hero commercial or brand film from the same look, so the UGC-style ads and the hero spot match.',
        ]}
        instead={[
          'You want real customers vouching for the product: pay real creators or film your customers, with permission.',
          'You need a few talking-head ads a month and have someone to run the tool: Creatify, Arcads or HeyGen on a monthly plan costs less.',
          'Your audience reacts badly to AI presenters, or your category bans them in ads: use real people.',
          'The ad depends on a real person\'s results, such as a before-and-after: film the real person.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-avatar-videos', title: 'AI avatar video production', note: 'Presenter consent, avatar tool prices and the full disclosure table.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'The hero spot that UGC-style cutdowns often sit beside.' },
          { href: '/guides/ai-commercial-product-accuracy', title: 'Product and label accuracy', note: 'Keeping the pack, label and logo right in generated shots.' },
          { href: '/guides/ad-campaign-deliverables', title: 'Ad campaign deliverables', note: 'Which films, cutdowns and ratios each channel needs.' },
          { href: '/blog/how-much-does-ai-video-production-cost', title: 'AI video production cost', note: 'Published prices from tools, freelancers, AI studios and crews.' },
        ]}
      />

      <GuideCta
        title="Tell us what you are testing"
        body="Send the product, the offer, the platforms, your best creator ads so far, and how many concepts and hooks you want to test."
      />
    </Guide>
  )
}
