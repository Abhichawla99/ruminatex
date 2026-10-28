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
import { OFFERS, PRODUCTION, SITE, priceLine } from '@/lib/seo/facts'

const studio = SITE.name
const ugc = OFFERS.find((o) => o.key === 'ugc')!
const short = film('zJgXuxFGU0U')

const PAGE = {
  path: '/ai-ugc-reels',
  title: 'AI UGC Ads Agency for Brands',
  description: `${studio} is an AI UGC ad agency that makes creator-style ads for Reels, TikTok and Shorts, with generated creators delivering scripted ad lines and your real product, label and logo set from your files. What moves the price, where these ads break, and the FTC, Meta, TikTok, New York and Pennsylvania rules.`,
  published: '2026-03-08',
  updated: '2026-10-28',
  keywords: [
    'ai ugc ads agency',
    'ai ugc ads',
    'ai ugc agency',
    'ai ugc ad agency',
    'best ai ugc ads agency',
    'ai ugc video creator',
    'are ai ugc ads legal',
    'can you do ugc content with ai',
    'do you have to disclose if an ad is ai',
    'are ai-generated ugc ads allowed on meta and tiktok?',
    'ai ugc ads examples',
  ],
}

const FTC_465 = 'https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-465/section-465.2'
const FTC_255 = 'https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-255/section-255.2'
const TIKTOK_AIGC = 'https://www.tiktok.com/support/faq_detail?id=7636670084747893268'
const META_ADS_AI = 'https://www.meta.com/en-gb/help/artificial-intelligence/355108217670024/'
const NY_IN_EFFECT = 'https://www.governor.ny.gov/news/governor-hochul-announces-first-nation-law-requiring-disclosure-when-advertisements-include-ai'
const PA_ACT = 'https://www.palegis.us/legislation/bills/2025/sb806'

const FAQS = [
  {
    q: 'Are AI UGC ads legal?',
    a: 'Yes, with conditions. In the US, the FTC rule on consumer reviews and testimonials (16 CFR 465.2) bans testimonials that misrepresent that the person exists or used the product, and the Endorsement Guides (16 CFR 255.2(c)) say an ad presented as showing actual consumers should use actual consumers or clearly disclose that they are not. TikTok requires a label on realistic AI-generated video, and New York has required ads to disclose AI synthetic performers since June 9, 2026. Pennsylvania\'s Artificial Intelligence Deceptive Advertising Act (Act 99 of 2026, signed October 22, 2026, in force 60 days later) requires a label saying the ad contains content modified or generated using AI when that content creates a false impression about the nature, origin or authenticity of what is sold. An AI presenter can demonstrate a product; it cannot pose as a customer. This is not legal advice.',
  },
  {
    q: 'Can you do UGC content with AI?',
    a: `You can make UGC-style content with AI: a generated creator talking to camera, a product demo, an unboxing shown as a demonstration. AI cannot make real user-generated content, because nobody used the product. ${studio}, an AI UGC ad agency in ${SITE.city}, makes UGC-style ads in which generated creators deliver scripted ad lines, never testimonials, with your real product, label and logo set in the edit from your files and the AI disclosure your legal team approves set as on-screen text.`,
  },
  {
    q: 'Do you have to disclose if an ad is AI?',
    a: 'Often. TikTok requires creators to label AI-generated content that contains realistic images, audio and video. Meta adds an "AI info" label next to Sponsored when an ad made with its own generative AI tools contains a photorealistic AI human, and political and social issue ads must disclose AI-made images, video or audio. New York requires ads to identify AI synthetic performers (in effect June 9, 2026). Pennsylvania\'s Artificial Intelligence Deceptive Advertising Act (Act 99 of 2026, signed October 22, 2026, in force 60 days later) requires a label saying the ad contains content modified or generated using AI when that content creates a false impression about the nature, origin or authenticity of what is sold. Your legal team decides for each ad; this is not legal advice.',
  },
  {
    q: 'Are AI-generated UGC ads allowed on Meta and TikTok?',
    a: 'Yes, with labels. TikTok allows AI-generated content but requires creators to label realistic AI-generated images, audio and video, and does not allow AI content that shows a public figure endorsing a product. Meta runs ads made with AI and adds an "AI info" label next to Sponsored when an ad made with its own generative AI tools includes a photorealistic AI human; political and social issue ads must disclose AI-made media. On both, the ad still cannot present a generated presenter as a real customer, under the FTC reviews rule (16 CFR 465.2). Platform pages read October 4, 2026; this is not legal advice.',
  },
  {
    q: 'Who makes AI UGC ads for brands?',
    a: `${studio} is an AI UGC ad agency in ${SITE.city}, that makes UGC-style ads for consumer and DTC brands running paid social on Reels, TikTok and Shorts. Every frame is generated with AI, and people write the hooks and scripts, board every shot, and edit, mix and grade every ad. Before you hire any AI UGC agency, ask to see one ad where a hand holds the product, the label reads correctly and the mouth matches the words; ${studio} boards and regenerates exactly those shots.`,
  },
  {
    q: 'How much does an AI UGC ads agency cost?',
    a: `${priceLine('ugc')}. For UGC-style ads the price moves with the number of concepts, the hooks written for each, how many shots show the product in a hand (those get the most generation passes), the lengths and aspect ratios each placement needs, and how many review rounds your marketing and legal teams take. Send the product, the offer and the platforms, and ${studio} comes back with a creative brief and a quote.`,
  },
  {
    q: 'How do I hire an AI UGC video creator?',
    a: `Brief an agency that makes the whole ad, from hook to final cut. ${studio} makes UGC-style ads for paid social with generated creators: send the product, the offer, the claims your legal team has approved, the platforms and your best creator ads so far, and ${studio} comes back with a creative brief and a quote. You see every script and the shot list before anything is generated, and the ads arrive in the lengths and ratios each placement needs.`,
  },
  {
    q: 'Do AI UGC ads work?',
    a: `No independent public test settles it; the results that get quoted come from tool vendors and agencies about their own clients. Test it on your own account: run AI UGC-style ads against your best creator ads on the same offer, audience and budget, and judge on purchases or sign-ups, not clicks. Expect fatigue sooner if the presenter is a stock face other brands also use; ${studio} casts a presenter for each brand instead.`,
  },
  {
    q: 'Can an AI UGC ad show a customer review?',
    a: `Only a real one. Under the FTC rule (16 CFR 465.2) a review or testimonial may not misrepresent that the reviewer exists or used the product, and AI-generated fake reviews fall inside that ban. A compliant review-style ad shows a real customer's review word for word, with their permission, and any generated presenter introduces it as a presenter and never speaks it as their own experience. ${studio}'s generated creators deliver scripted ad lines, not testimonials. This is not legal advice.`,
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide
      page={PAGE}
      faqs={FAQS}
      films={[short.youtubeId]}
      service={{
        name: 'AI UGC ad production',
        description: `${studio} makes UGC-style ads for paid social, with generated creators delivering scripted ad lines written to the brand's approved claims, and the product, label and logo set in the edit from the brand's own files.`,
        audience: ['consumer brands', 'DTC and ecommerce brands', 'performance marketing teams'],
      }}
    >
      <GuideHero
        eyebrow="AI UGC ads"
        title="AI UGC ads: creator-style ads made with AI"
        dek={`For the performance marketer or DTC brand manager who needs more hooks to test on Meta and TikTok than creators can film, and wants to know how ${studio} makes them, what moves the price, what has to be disclosed, and where these ads fall apart.`}
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          An AI UGC ad is a scripted ad made to look like a creator&apos;s phone video, with a presenter generated by AI.{' '}
          {studio} is an AI UGC ad agency in {SITE.city}, that makes these ads for consumer and DTC brands running paid
          social: every frame generated with AI, with the hooks, script, boards, edit, sound and grade done by people. Its
          generated creators deliver scripted ad lines and never pose as customers, as the FTC rules on testimonials
          require. TikTok and New York require an AI label on realistic generated presenters, and Pennsylvania&apos;s Act 99
          label rule takes effect 60 days after its October 22, 2026 signing.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="What it is" title="What counts as an AI UGC ad">
        <p>
          The format copies what works in creator ads: a face in the first second, a hook, the product in hand, captions, a
          reason to buy, all in 9:16. The presenter, the setting and often the voice are generated. Nobody bought the
          product, so it is advertising in a creator&apos;s style, and {studio} writes every presenter line as an ad line,
          never as a claim to have used the product.
        </p>
        <GuideTable
          caption={`The UGC-style formats ${studio} makes, and the line each one keeps, in ${studio}'s reading of the FTC rules cited below. Not legal advice.`}
          head={['Format', 'What the viewer sees', 'Stays honest when']}
          rows={[
            ['Hook-first presenter ad', 'A generated creator talks to camera about one problem the product solves', 'The presenter speaks as a presenter, never "I bought this and..."'],
            ['Demo or how-to', 'Hands using the product, step by step, with captions', 'The product does what the ad shows; label and pack match the real one'],
            ['Unboxing', 'The product coming out of its box', 'It is shown as a demonstration, with no invented customer reaction'],
            ['Comparison', 'Before and after, or side by side with the old way', 'Any claim is one your legal team can support, and a generated result is shown as an illustration'],
            ['Review-style', 'A real customer\'s review shown on screen, word for word', 'The review is real and used with permission; the presenter introduces it and never speaks it as their own'],
          ]}
        />
        <p>
          {studio} makes {ugc.name} beside its <Link href="/ai-commercial-production">AI commercials</Link> and{' '}
          <Link href="/ai-product-videos">product films and stills</Link>, so the creator-style cuts and the hero spot of a
          campaign can share one look and one product. {PRODUCTION.summary}
        </p>
      </GuideSection>

      <GuideSection eyebrow="Price" title="What AI UGC ads cost" alt>
        <p>
          {priceLine('ugc')}. The price moves with the number of concepts in the batch, the hooks written for each, how
          many shots show the product in a hand (those get the most generation passes), the lengths and aspect ratios each
          placement needs, and how many review rounds your marketing and legal teams take.
        </p>
        <p>
          Twenty ads can mean twenty concepts or one script with twenty first lines. One concept with many hooks reuses a
          presenter, a setting and a set of product shots; twenty concepts build each of those from the start. With{' '}
          {studio} you see every script before anything is generated, so you know which one you are buying.
        </p>
        <p>
          What you pay for is the work around each generation: writing the hooks, picking the takes that hold up,
          regenerating the shots where a hand or a label breaks, and cutting the variants.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Before you hire" title="What to ask any AI UGC ads agency">
        <p>Ask these before you sign with any agency. Each answer is how {studio} works.</p>
        <ol>
          <li>
            <strong>Whose face is it?</strong> {studio} casts a generated presenter for your brand and fixes the face in a
            reference sheet, so the same person appears across the batch. A stock library face turns up in other
            brands&apos; ads.
          </li>
          <li>
            <strong>Whose footage is it?</strong> Every frame {studio} delivers is generated, so no real creator&apos;s
            video is reused and no face is swapped onto someone else&apos;s footage.
          </li>
          <li>
            <strong>Does any ad speak as a customer?</strong> {studio}&apos;s presenters deliver scripted ad lines and
            never say they used the product, and you see every script before production.
          </li>
          <li>
            <strong>Who adds the AI label?</strong> {studio} sets the disclosure your legal team approves as on-screen text
            in the edit, and you switch on TikTok&apos;s AI-generated content label when the ad goes live.
          </li>
          <li>
            <strong>Who fixes the product?</strong> {studio} sets your pack, label and logo from your own artwork in the
            edit and regenerates any shot where a hand or a label breaks.
          </li>
        </ol>
      </GuideSection>

      <GuideSection eyebrow="Rules" title="Are AI UGC ads legal? Disclosure on TikTok, Meta and in the US" alt>
        <GuideTable
          caption={
            <>
              From the FTC rules on <a href={FTC_465}>consumer reviews and testimonials (16 CFR 465.2)</a> and{' '}
              <a href={FTC_255}>endorsements (16 CFR 255.2)</a>, <a href={TIKTOK_AIGC}>TikTok Support</a>,{' '}
              <a href={META_ADS_AI}>Meta Help</a> and the <a href={NY_IN_EFFECT}>New York Governor&apos;s office</a>, read
              October 4, 2026, and <a href={PA_ACT}>Pennsylvania Senate Bill 806</a> (Act 99 of 2026), read October 26,
              2026. Not legal advice.
            </>
          }
          head={['Where', 'The rule', 'What it means for an AI UGC ad']}
          rows={[
            ['FTC reviews rule', 'No review or testimonial that misrepresents that the person exists, used the product, or what their experience was', 'A generated presenter cannot claim to have used the product'],
            ['FTC Endorsement Guides 255.2(c)', 'Ads presented as showing "actual consumers" should use actual consumers, or clearly disclose they are not', 'If the ad looks like a customer talking, disclose that it is not one'],
            ['TikTok', 'Creators must label all AI-generated content with realistic images, audio and video; no AI content showing public figures endorsing', 'Turn on the AI-generated content label; no celebrity look-alikes'],
            ['Meta', '"AI info" appears next to Sponsored when an ad made with Meta\'s generative AI tools includes a photorealistic AI human; political and social issue ads must disclose AI-made media', 'Expect the label on Meta-made assets; disclose in issue ads'],
            ['New York', 'Whoever produces an ad must identify AI synthetic performers, "digitally-created media that appear as a real person"; in effect June 9, 2026', 'Disclose the presenter in ads that run there'],
            ['Pennsylvania', 'An ad may not use content significantly modified or generated by AI in a way that creates a false impression about the nature, origin or authenticity of what is sold without a clear and conspicuous label saying so, shown the first time that content appears; evidently fictional content, parody and text-only ads are exempt; fines up to $3,000. Signed October 22, 2026, in force 60 days later', 'Label any generated presenter or shot that could mislead a viewer about the product; your lawyer decides which ads that covers'], // claims-ok: Pennsylvania SB 806 (Act 99 of 2026), section 5(c), linked in the caption (PA_ACT)
          ]}
        />
        <p>
          The disclosure itself can be a line of on-screen text, the platform&apos;s own AI label, or both. Pharma, medical
          and financial brands have their own review rules on top of these; the questions reviewers ask about AI footage are
          on <Link href="/ai-video-production-healthcare">AI video for pharma and healthcare</Link>. Penalties and the rest of
          the presenter rules are on <Link href="/ai-avatar-videos">AI avatar videos</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Where it breaks" title="Where AI UGC ads break, and what fixes them">
        <GuideTable
          caption={`Common failures in generated creator-style ads, and the fix ${studio} applies to each.`}
          head={['Problem', 'What the viewer notices', 'The fix']}
          rows={[
            ['Hands on the product', 'Fingers merge with the bottle, the grip changes between cuts', 'Generate the hand shot on its own and rerun it until it holds, or cut to a product insert'],
            ['Label and packaging', 'Misspelled brand name, wrong pack colour, text that warps', 'Set the label from your own artwork in the edit, never generated'],
            ['Lip sync and eyes', 'Mouth a beat late, a stare that never blinks', 'Check every take at full size; reject the ones that drift'],
            ['The stock face', 'The same presenter seen in other brands\' ads', 'Cast a presenter for your brand and fix it in a reference sheet'],
            ['Sameness across variants', 'Ten hooks that feel like one ad, so fatigue sets in early', 'Change the setting, opening shot and presenter energy per hook, not only the first line'],
          ]}
        />
        <p>
          Keeping one generated presenter the same across a batch is the hardest part; the methods are in{' '}
          <Link href="/guides/ai-video-character-consistency">AI video character consistency</Link>. Keeping the product
          right is in <Link href="/guides/ai-commercial-product-accuracy">product and label accuracy in AI commercials</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="How it is made" title={`How ${studio} makes UGC-style ads`} alt>
        <ol>
          <li>
            <strong>Brief.</strong> The product, the audience, the offer, the claims your legal team has approved, the
            platforms, and your best-performing creator ads so far, if you have them. {studio} hands back a creative brief,
            and nothing is generated until you approve it.
          </li>
          <li>
            <strong>Presenter.</strong> A face, age, wardrobe, setting and voice cast for the brand, not modelled on a real
            person or a celebrity, and fixed in a reference sheet.
          </li>
          <li>
            <strong>Hooks, scripts and boards.</strong> Several openings per concept, each a different reason to stop
            scrolling, written to the approved claims and broken into shots you see before generation starts.
          </li>
          <li>
            <strong>Generation passes.</strong> Each shot generated and checked for hands, lip sync, eyes and face drift,
            then regenerated until it holds. The product and the hands holding it get the most passes.
          </li>
          <li>
            <strong>Edit and versions.</strong> Captions inside each platform&apos;s safe zones, licensed music, your logo
            and pack from your own files, the AI disclosure your legal team approves, and the lengths and ratios each
            placement needs.
          </li>
        </ol>
        <GuideFilm
          id={short.youtubeId}
          caption={`${short.title}, a ${short.durationSeconds}-second vertical film from the ${studio} portfolio. It is a short product film, shown for how the product holds up in a 9:16 frame, not a presenter ad.`}
        />
        <p>
          The same pipeline makes {studio}&apos;s longer work; each stage is on{' '}
          <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>, and the finished films are on{' '}
          <Link href="/work">the work page</Link>.
        </p>
      </GuideSection>

      <GuideFit
        title={`Why DTC brands hire ${studio} for UGC-style ads`}
        hire={[
          'A DTC or consumer brand running paid social on Meta and TikTok that needs more hooks and variants to test than its creators can film.',
          'A performance marketer whose best ad is fatiguing and who needs new openings on the same offer without booking another round of creators.',
          'A brand manager who wants one presenter across a whole campaign, with the pack and label exact in every cut.',
          'A team that also needs a hero commercial or a brand film in the same look, so the UGC-style ads and the hero spot match.',
        ]}
        get={[
          'Hooks, scripts and a shot list written to the claims your legal team approved, shown to you before anything is generated.',
          'A presenter cast for your brand and kept the same across the batch.',
          'Your real pack, label and logo set in the edit from your files, with any shot where a hand or a label breaks regenerated.',
          '9:16 cuts with captions inside each platform\'s safe zones, plus the other lengths and ratios your placements need.',
          'The AI disclosure your legal team approves, set as on-screen text.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-avatar-videos', title: 'AI avatar videos', note: 'Spokesperson videos, presenter consent and the full disclosure table.' },
          { href: '/ai-product-videos', title: 'AI product videos and stills', note: 'Product films and stills in the same look as your UGC-style ads.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'The hero spot that UGC-style cutdowns often sit beside.' },
          { href: '/guides/ai-commercial-product-accuracy', title: 'Product and label accuracy', note: 'Keeping the pack, label and logo right in generated shots.' },
          { href: '/guides/ad-campaign-deliverables', title: 'Ad campaign deliverables', note: 'Which films, cutdowns and ratios each channel needs.' },
        ]}
      />

      <GuideCta
        title="Tell us what you are testing"
        body="Send the product, the offer, the platforms, your best creator ads so far, and how many concepts and hooks you want to test."
      />
    </Guide>
  )
}
