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
import { OFFERS, PRODUCTION, RELATED, SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/ai-commercial-production',
  title: 'AI Commercial Production for Brands',
  description:
    'How an AI commercial gets made without a shoot: what you get, what it costs and why, what still breaks in AI footage, the disclosure and rights questions, and when a brand should hire a crew instead.',
  published: '2026-03-07',
  updated: '2026-09-24',
  keywords: [
    'ai commercial production',
    'ai commercial production company',
    'ai-driven commercial production',
    'ai vfx for commercial production',
    'ai commercial agency',
    'ai tv commercials',
    'how much does an ai commercial cost',
  ],
}

const studio = SITE.name
const commercial = OFFERS.find((o) => o.key === 'commercial')!
const hundred = RELATED.find((r) => r.name === '100creatives')!

const FAQS = [
  {
    q: 'Are they making commercials with AI now?',
    a: 'Yes. Brands now air commercials whose footage was generated with AI rather than filmed. One example is the Kalshi ad that ran during the 2025 NBA Finals, made with Google Veo 3 for about $2,000 in two days (Mashable, June 2025). Studios such as Ruminate X make full AI commercials for brands, with a script, boards, edit, sound and grade done by people.',
  },
  {
    q: 'Is there an AI that can create commercials?',
    a: 'Generators such as Veo, Runway, Kling and Sora produce clips of a few seconds each, and many takes come out unusable. None of them writes the idea, keeps your product the same from shot to shot, adds your real logo, mixes sound or cuts the versions each channel needs. A person or a studio does that part, which is why brands hire an AI commercial production company rather than a tool when the ad has to air.',
  },
  {
    q: 'How much does an AI commercial cost?',
    a: 'Published prices in September 2026 run from about USD 500 for a single social spot from small AI studios, to USD 2,500 to 3,500 for a 15 to 60 second hero or cinematic spot, to GBP 15,000 to 45,000 for a broadcast asset from specialist studios (compiled by Versely, September 2026). Ruminate X quotes each commercial from the brief. Length, the number of scenes, how exactly your product has to be reproduced, versions and review rounds move the number.',
  },
  {
    q: 'What does an AI commercial production company deliver?',
    a: 'A finished spot and its versions: the master, cutdowns (for example a 30 and a 15 second edit from the same film), the aspect ratios each channel needs, captions and the music and voice licensed for the use you agreed. Ask for the list in writing before production starts, because versions are where quotes differ most.',
  },
  {
    q: 'Do AI commercials have to be labelled as AI?',
    a: "It depends on the platform, the country and what the ad shows. YouTube requires creators to disclose realistic content made or meaningfully altered with AI, and exempts clearly unrealistic content such as animation or fantasy scenes (YouTube Help, checked September 2026). Ad platforms and broadcasters set their own rules. Your legal team decides for your ad; this is not legal advice.",
  },
  {
    q: 'When should a brand not make its commercial with AI?',
    a: 'When the spot needs real people who must be themselves on camera (your founder, your staff, a real customer or a real doctor), when it depends on live action such as sport or an event, or when the audience is likely to reject visibly AI-made work. Hire a traditional production company for those. If you are filming anyway and only need a few impossible shots, hire a production company with an AI VFX team.',
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} films={['Zytga7zsShI', 'LYA3Do3KEN0']}>
      <GuideHero
        eyebrow="AI commercial production"
        title="AI commercial production: the ad without the shoot"
        dek="For the brand manager, founder or agency producer who needs a commercial for TV, streaming or social and wants to know what an AI-made one involves before briefing anyone."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          AI commercial production means the footage in your ad is generated with AI instead of filmed: no crew, no
          set, no location day. A studio still writes the spot, boards every shot, reruns the shots where faces, hands or
          your product go wrong, then edits, mixes sound, grades and cuts the versions each channel needs. It suits
          product, lifestyle and concept ads that would otherwise need an expensive shoot. It does not suit ads that need
          your own people on camera.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="What you get" title="What an AI commercial production company delivers">
        <p>
          {studio} makes {commercial.name.toLowerCase()}: {commercial.plain}. {PRODUCTION.summary} A typical commercial
          brief turns into:
        </p>
        <ul>
          <li>the hero spot, at the length your media plan needs;</li>
          <li>cutdowns from the same film, so the 15 second edit matches the 30;</li>
          <li>versions for each placement: 16:9 for TV and YouTube, 9:16 for Reels, TikTok and Shorts, 1:1 or 4:5 for feeds;</li>
          <li>captions, and the music and voice licensed for where the ad runs;</li>
          <li>alternative openings when a performance team wants to test hooks.</li>
        </ul>
        <p>
          Agree the list before production starts. The generated footage is the cheap part to repeat; every extra
          version still needs an edit, a mix and a check. If what you need is a longer film about the company rather than
          one product, read <Link href="/ai-brand-film-agency">AI brand film production</Link>.
        </p>
        <GuideFilm
          id="Zytga7zsShI"
          caption="Keen Footwear spec ad by Ruminate X (spec work, not commissioned by Keen). A 32-second product commercial where the shoe has to stay the same shoe in every shot."
        />
      </GuideSection>

      <GuideSection eyebrow="How it is made" title="How an AI commercial gets made, shot by shot" alt>
        <ol>
          <li>
            <strong>Brief.</strong> The product, the audience, the one thing the viewer should remember, the channels
            and the lengths. Nothing is generated until it is approved.
          </li>
          <li>
            <strong>Brand world.</strong> Palette, light, lenses, casting and texture, fixed before the first frame so
            the last shot matches the first. <a href={hundred.url}>{hundred.name}</a>, {hundred.role}, leads this stage.
          </li>
          <li>
            <strong>Script and boards.</strong> Each shot gets framing, movement and duration. In a 30 second spot every
            second is planned, so this is where most of the quality is decided.
          </li>
          <li>
            <strong>Generation passes.</strong> Each shot is generated, checked against the board and regenerated. The
            pack shot, faces and hands get the most passes.
          </li>
          <li>
            <strong>Product and type.</strong> Your real logo, label and on-screen text are added in the edit from your
            brand files rather than drawn by the generator.
          </li>
          <li>
            <strong>Edit, sound, grade, versions.</strong> The spot is cut to time, voice and music go in, one grade ties
            the shots together, then the cutdowns and aspect ratios are made from the finished film.
          </li>
        </ol>
        <p>
          The same pipeline for longer films is on <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The weak points" title="What still breaks in an AI commercial">
        <p>
          Generators are good at light, weather, landscapes and camera moves that would need a crane or a helicopter.
          They are still unreliable at the things a commercial lives on:
        </p>
        <GuideTable
          caption="Where generated footage fails in commercial work, and the fix to expect. These are the shots the Ruminate X pipeline gives extra generation passes."
          head={['Problem', 'Why it matters in an ad', 'The fix']}
          rows={[
            ['Your product and packaging', 'A label that is almost right is a wrong label', 'Work from real product images; correct or composite the pack in the edit'],
            ['Logos and on-screen text', 'Warped letters on a price or claim', 'Set all type and the logo in the edit, never in the generator'],
            ['Faces across shots', 'The same person looks like a cousin in the next cut', 'Fix the casting in the brand-world stage; regenerate every shot that drifts'],
            ['Hands on the product', 'Extra fingers, a hand fused to a bottle', 'Board around hands where the story allows; rerun the rest'],
            ['Continuity', 'Wardrobe, props or light change between cuts', 'Lock them in the boards and the grade; regenerate what cannot be graded out'],
          ]}
        />
        <p>
          Ask any AI commercial production company to show you these shots from past work. A reel of slow drone moves
          tells you little about how your pack shot will hold up.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Price" title="How much an AI commercial costs" alt>
        <p>
          Published prices for AI commercials cover a wide range, because the word covers everything from a one-person
          social spot to a broadcast campaign:
        </p>
        <GuideTable
          caption={
            <>
              Figures are the studios&apos; own published prices, as compiled by{' '}
              <a href="https://www.versely.studio/blog/how-much-does-an-ai-commercial-cost">Versely</a> (September 2026),
              and the Kalshi figure as{' '}
              <a href="https://tech.yahoo.com/ai/articles/ai-generated-ad-aired-during-150507375.html">reported by Mashable</a>{' '}
              (June 2025). Checked September 2026. Ruminate X does not
              publish a price list.
            </>
          }
          head={['What was bought', 'Published price', 'Source']}
          rows={[
            ['One 15 to 60 second social spot, small AI studio', 'USD 500 and up', 'MAW AI Studios, via Versely'],
            ['One 15 to 60 second hero spot', 'USD 2,500 and up', 'ArcaneWiz, via Versely'],
            ['60 second cinematic AI film', 'USD 3,500 and up', 'Gisteo, via Versely'],
            ['Single-market broadcast AI commercial', 'GBP 15,000 to 45,000 per asset', 'Myth Labs, via Versely'],
            ['Kalshi NBA Finals ad (Veo 3, two days)', 'About USD 2,000', 'Mashable, June 2025'],
          ]}
        />
        <p>
          {studio} quotes each commercial from the brief. What moves the number: length and the number of distinct
          scenes; how exactly your product, a place or a character has to be reproduced; how many cutdowns, ratios,
          languages and hooks you need; and review rounds, which run longer when a legal, medical or MLR team signs off
          on claims. The full breakdown, with what each price tier buys, is in{' '}
          <Link href="/blog/how-much-does-ai-video-production-cost">how much AI video production costs</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="AI in a live-action ad" title="AI VFX for commercial production">
        <p>
          Some searches for AI commercial production come from teams who are filming anyway and want AI for a few shots:
          a set extension, a crowd, a product that transforms. That is AI VFX inside a live-action shoot, and it is a
          production company&apos;s or a VFX house&apos;s job, because someone has to film the plates.
        </p>
        <p>
          {studio} makes commercials where every shot is generated. If your idea only works with your real store, your
          real team or a real athlete in it, hire a crew and ask them about AI VFX. If the idea works as a made world,
          an AI-only commercial is usually faster to change and cheaper to version.
        </p>
        <GuideFilm
          id="LYA3Do3KEN0"
          caption="The Love of Trail Running, an original Ruminate X film (not client work). Every shot generated, no location shoot."
        />
      </GuideSection>

      <GuideSection eyebrow="Labels and rights" title="Disclosure and who owns the ad" alt>
        <p>
          <strong>Labels.</strong>{' '}
          <a href="https://support.google.com/youtube/answer/14328491">YouTube&apos;s policy</a> asks creators to disclose
          when they use AI to make or meaningfully alter realistic content, and exempts content that is clearly
          unrealistic, such as animation or a fantasy world. Meta, TikTok, ad networks and broadcasters each have their
          own rules. Checked September 2026.
        </p>
        <p>
          <strong>Rights.</strong> Your contract decides what transfers to you: the final spot, the versions, the
          project files and licenses for music and voice. Whether copyright protects the ad is a separate question. The{' '}
          <a href="https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf">
            US Copyright Office&apos;s January 2025 report
          </a>{' '}
          concluded that prompts alone do not make someone the author of AI output, while human work visible in the
          result, such as the script and the selection and arrangement of shots, can be protected.
        </p>
        <p>
          This is not legal advice. Your lawyer, and in pharma, medical and financial work your MLR or compliance team,
          decides what the ad can say and how it is labelled.
        </p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X make your commercial?"
        hire={[
          'A brand manager with a product launch and no budget or time for a shoot.',
          'A consumer brand that needs one cinematic spot plus the social cutdowns from the same film.',
          'A pharma, pharmacy, lab or medical marketer who needs a cinematic ad and has an MLR process for the claims.',
          'An agency producer who needs an AI production partner on a client spot.',
        ]}
        instead={[
          'The ad needs your founder, staff, a real customer or a real doctor on camera: hire a traditional production company.',
          'You are filming anyway and need a few AI shots: hire a production company or VFX house with AI VFX.',
          'You need dozens of cheap variations a week: a UGC creator network or a self-serve tool will cost less.',
          'Your audience is likely to reject visibly AI-made ads: film it.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/blog/how-much-does-ai-video-production-cost', title: 'How much AI video production costs', note: 'The four price tiers and what each one buys.' },
          { href: '/ai-video-production-agencies', title: 'How to hire an AI video production agency', note: 'Seven questions to ask before you sign.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'The pipeline stage by stage.' },
          { href: '/ai-video-production-healthcare', title: 'AI video for healthcare', note: 'For pharma, pharmacy, lab and medical marketers.' },
          { href: '/work', title: 'The work', note: 'Films Ruminate X has made.' },
        ]}
      />

      <GuideCta title="Tell us what the ad has to do" body="Send the product, the channels, the lengths you need and the date it has to air." />
    </Guide>
  )
}
