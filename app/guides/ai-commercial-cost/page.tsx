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
import { PRICES, PRODUCTION, SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/guides/ai-commercial-cost',
  title: 'AI Commercial Cost: What Brands Pay in 2026',
  description:
    'How much an AI commercial costs: published prices from AI studios (from about USD 1,500 for one spot to GBP 45,000 for a broadcast asset), what a filmed TV commercial costs line by line and which lines AI removes, whether actors get paid, and what the airtime costs on top.',
  published: '2026-10-22',
  updated: '2026-10-27',
  keywords: [
    'how much does an ai commercial cost',
    'ai commercial cost',
    'how much does an ai-generated commercial cost',
    'ai commercial vs traditional commercial cost',
    'do actors get paid for ai commercials',
    'can ai make a commercial for me',
    'ai commercial pricing',
    'cost of an ai tv commercial',
  ],
}

const MAW = 'https://mawaistudios.com/'
const ARCANEWIZ = 'https://arcanewiz.com/how-much-does-an-ai-commercial-cost'
const VERSELY = 'https://www.versely.studio/blog/how-much-does-an-ai-commercial-cost'
const KALSHI = 'https://tech.yahoo.com/ai/articles/ai-generated-ad-aired-during-150507375.html'
const DMAK = 'https://dmakproductions.com/blog/tv-commercial-production/'
const SAG_VOTE = 'https://www.sagaftra.org/sag-aftra-members-approve-2025-commercials-contracts-agreement'
const DLA = 'https://www.dlapiper.com/insights/publications/2025/04/2025-sag-aftra-commercials-contracts-moas-transform-in-the-digital-age'
const GALLUP = 'https://news.gallup.com/poll/713222/'

const studio = SITE.name
const keen = film('Zytga7zsShI')
const priceLine =
  PRICES.find((p) => p.offer === 'commercial')?.label ?? `${studio} quotes each commercial from the brief and does not publish a price list.`

const FAQS = [
  {
    q: 'How much does an AI commercial cost?',
    a: `Studios that publish prices charged from about USD 1,500 for one 15 to 60 second AI commercial (MAW AI Studios), USD 2,500 and up for a single hero spot (ArcaneWiz) and USD 3,500 and up for a 60 second cinematic film (Gisteo), to GBP 15,000 to 45,000 per asset for a single-market broadcast commercial (Myth Labs), as read on their own pages or Versely's compilation in October 2026. Kalshi's AI ad for the 2025 NBA Finals cost about USD 2,000 in generation, per Mashable. Airtime is extra. ${priceLine}`,
  },
  {
    q: 'How much does an AI commercial cost compared to a traditional commercial?',
    a: 'A filmed TV commercial typically costs USD 10,000 to 50,000 to produce in 2026, and a national campaign USD 150,000 to 500,000 or more (D-MAK Productions, June 2026). Published AI commercial prices start near USD 1,500 and reach about GBP 45,000 for broadcast work. The gap comes from the lines an AI commercial does not have: director and crew, equipment, locations, permits, travel, wardrobe and props. Script, producing, edit, music, sound and versions are still paid for.',
  },
  {
    q: 'Do actors get paid for AI commercials?',
    a: 'When a real union performer is copied, yes. Under the SAG-AFTRA 2025 Commercials Contracts, ratified by members in May 2025 and running April 1, 2025 to March 31, 2028, a producer needs the performer\'s consent and two days\' notice to create or use a digital replica, and pays 1.5 times the scale session fee for each commercial that uses a replica performance, plus use fees as if the performer had worked in person (DLA Piper summary, April 2025). A character generated from scratch copies no one, so no performer is paid for it. This is not legal advice.',
  },
  {
    q: 'Can AI make a commercial for me?',
    a: 'AI video generators such as Veo, Runway, Kling and Sora make clips a few seconds long. A commercial also needs an idea, a script, the same product and character in every shot, your real logo, an edit, a sound mix and a version for each channel. If someone on your team can do that work, a generator subscription is most of the cost. If not, you pay a studio for those hours, and that is what the published prices buy.',
  },
  {
    q: 'Why do AI commercial prices vary so much?',
    a: 'The prices cover different jobs. A USD 1,500 package is one spot with two revision rounds; a GBP 45,000 broadcast asset includes research routes, more review and clearance for TV. Inside one studio the price moves with the number of distinct scenes, how exactly the product has to match its packaging, whether one character must stay the same across shots, how many cutdowns and ratios you need, and how many people review it.',
  },
  {
    q: `How much does ${studio} charge for an AI commercial?`,
    a: `${priceLine} ${PRODUCTION.summary} The quote follows the number of scenes, product accuracy, characters, versions, review rounds and the date you need it. Send the brief to ${SITE.email} or through ruminatex.com/contact.`,
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide
      page={PAGE}
      faqs={FAQS}
      films={[keen.youtubeId]}
      trail={[
        { name: 'Home', path: '/' },
        { name: 'Guides', path: '/guides' },
        { name: PAGE.title, path: PAGE.path },
      ]}
    >
      <GuideHero
        eyebrow="Guide · Price"
        title="How much does an AI commercial cost?"
        dek="For the brand or marketing manager pricing a 15 to 60 second ad before deciding between a shoot, an AI studio and a tool."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          AI studios that publish prices charge from about USD 1,500 for one 15 to 60 second commercial, USD 2,500 to
          8,000 for a hero spot or a small campaign, and GBP 15,000 to 45,000 per asset for a broadcast commercial in one
          market (studio pages and Versely, read October 2026). A filmed TV commercial typically costs USD 10,000 to
          50,000 to produce (D-MAK Productions, June 2026). Airtime is a separate budget in both cases. {priceLine}
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="Published prices" title="AI commercial cost: what studios publish">
        <p>
          Few AI studios publish a price. These are the ones that do, from their own pages where we could read them
          and from Versely&apos;s compilation where we could not.
        </p>
        <GuideTable
          caption={
            <>
              Read October 22, 2026: <a href={MAW}>MAW AI Studios</a> and <a href={ARCANEWIZ}>ArcaneWiz</a> from their
              own pages; Gisteo and Myth Labs as compiled by <a href={VERSELY}>Versely</a> (reviewed September 2026);
              Kalshi as <a href={KALSHI}>reported by Mashable</a> (June 2025). Prices exclude airtime.
            </>
          }
          head={['What is bought', 'Published price', 'What the price includes', 'Source']}
          rows={[
            ['One 15 to 60 second commercial', 'From USD 1,500', 'Two revision rounds, all platform cuts, five to seven days', 'MAW AI Studios, own site'],
            ['One hero film and three cutdowns', 'From USD 5,000', 'Storyboard revisions; two to three weeks', 'MAW AI Studios, own site'],
            ['One 15 to 60 second hero spot', 'From USD 2,500', 'Two revision rounds, colour grade, licensed music and mix', 'ArcaneWiz, own site'],
            ['Three to five videos', 'From USD 8,000', 'Pre-production workshop, three revisions per video, 16:9, 9:16 and 4:5', 'ArcaneWiz, own site'],
            ['60 second cinematic AI film', 'From USD 3,500', 'Not itemised', 'Gisteo, via Versely'],
            ['Broadcast commercial, one market', 'GBP 15,000 to 45,000 per asset', 'Per 15 to 60 second asset', 'Myth Labs, via Versely'],
            ['Broadcast commercial, several markets', 'GBP 40,000 to 120,000 and up', 'Not itemised', 'Myth Labs, via Versely'],
            ['Kalshi NBA Finals ad, Veo 3', 'About USD 2,000', 'Generation for one spot, made in about two days', 'Mashable, June 2025'],
          ]}
        />
        <p>
          Compilations go stale. Versely lists MAW&apos;s single-spot package from USD 500; MAW&apos;s own site showed
          USD 1,500 on the day we checked. Read the studio&apos;s own page, and ask what the number leaves out: music
          licensed for broadcast, a voice-over, extra ratios, a language version, a third round of changes. The Kalshi
          figure covers about two days of generation with Veo 3; it is not a studio quote with review rounds and
          versions in it. Six AI commercial studios, their minimums and their review counts are
          compared in <Link href="/ai-commercial-production">who makes AI commercials</Link>. Agencies buying an AI
          commercial for a client, uncredited, will find the partners that publish agency prices in{' '}
          <Link href="/guides/white-label-ai-video-production">white-label AI video production</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Against a shoot" title="AI commercial vs traditional commercial cost" alt>
        <p>
          D-MAK Productions, a video production company, published what a filmed TV commercial costs to produce in
          2026, line by line. The last column is what happens to each line when the commercial is made with AI.
        </p>
        <GuideTable
          caption={
            <>
              Line items and ranges from <a href={DMAK}>D-MAK Productions, &ldquo;How Much Does TV Commercial Production
              Cost in 2026?&rdquo;</a> (June 18, 2026; industry ranges, not its rate card), read October 2026. The last
              column is how {studio} makes a commercial.
            </>
          }
          head={['Line in a filmed commercial', 'Filmed (USD)', 'In an AI commercial']}
          rows={[
            ['Creative concept and script', '2,000 to 10,000', 'Still paid. Someone writes the idea and the script.'],
            ['Pre-production and producing', '2,500 to 10,000', 'Still paid, as boards, a look and a shot list instead of casting and scouting.'],
            ['Director and crew', '5,000 to 20,000', 'Gone. Replaced by generation passes, paid in people\'s hours and model credits.'],
            ['Equipment, lighting and audio', '2,500 to 15,000', 'Gone.'],
            ['Talent, wardrobe and props', '1,500 to 20,000+', 'Gone for generated characters. A real performer\'s likeness still needs consent and pay.'],
            ['Location, permits and travel', '1,000 to 15,000+', 'Gone. Each new setting adds generation and continuity work instead.'],
            ['Editing and post-production', '5,000 to 25,000', 'Still paid, and larger: fixing hands, faces, packaging and logos is post work.'],
            ['Motion graphics, music and sound', '2,000 to 15,000', 'Still paid. Music and voice licences cost the same.'],
            ['Final versions and delivery', '1,000 to 7,500', 'Still paid.'],
          ]}
        />
        <p>
          By D-MAK&apos;s tiers, a basic local spot costs USD 5,000 to 15,000, a professional 30 second spot 15,000 to
          50,000, a premium brand campaign 50,000 to 150,000 or more, and a national campaign 150,000 to 500,000 or more.
          The lines an AI commercial drops are the shoot lines. The lines it keeps are people&apos;s time, which is why
          a well-made AI commercial is cheaper than a shoot and still not as cheap as the generator subscription.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Where the money goes" title="What you pay for in an AI commercial">
        <p>
          {PRODUCTION.summary} A 30 second commercial at {studio} goes through the same stages as a{' '}
          <Link href="/how-we-make-an-ai-brand-film">brand film</Link>, and each one has a cost driver:
        </p>
        <ul>
          <li>
            <strong>Script and boards.</strong> The idea, the script, and a frame for every shot, approved before any
            footage is made. Changes here cost minutes; changes after generation cost reruns.
          </li>
          <li>
            <strong>Generation passes.</strong> Each shot is generated many times and the usable take is kept. A spot
            with eight distinct scenes costs more than one with three, whatever the running time.
          </li>
          <li>
            <strong>Fixes.</strong> AI footage breaks on faces, hands, product packaging, logos, text on screen and
            continuity between shots. Your real pack and logo are matched from your files in every shot, which is
            where most of the rework goes (see <Link href="/guides/ai-commercial-product-accuracy">keeping a product
            accurate in AI video</Link>).
          </li>
          <li>
            <strong>Edit, sound and grade.</strong> Cutting to time, voice-over, music, the mix and the colour grade,
            done by people.
          </li>
          <li>
            <strong>Versions.</strong> 15 and 6 second cutdowns, 16:9, 9:16 and 1:1, languages and alternate hooks each
            need an edit and a check. The full list is in{' '}
            <Link href="/guides/ad-campaign-deliverables">ad campaign deliverables</Link>.
          </li>
          <li>
            <strong>Review rounds.</strong> A pharma, medical or financial ad goes through legal or MLR review, and
            each round can send shots back.
          </li>
        </ul>
        <GuideFilm
          id={keen.youtubeId}
          caption={`${keen.title}: a ${keen.durationSeconds} second spec commercial by Ruminate X (not client work). Outdoor scenes, a product that has to look like the real shoe, and no shoot.`}
        />
      </GuideSection>

      <GuideSection eyebrow="People on screen" title="Do actors get paid for AI commercials?" alt>
        <p>
          When the ad copies a real union performer, yes. SAG-AFTRA members ratified the{' '}
          <a href={SAG_VOTE}>2025 Commercials Contracts</a> in May 2025; they run from April 1, 2025 to March 31, 2028.
          As summarised by <a href={DLA}>DLA Piper</a> (April 2025), a producer under the contract gives two days&apos;
          notice before creating or using a digital replica, gets the performer&apos;s consent in a rider or a separate
          signed document, and pays 1.5 times the scale session fee for each commercial that uses a replica
          performance, plus use and holding fees as if the performer had worked in person.
        </p>
        <p>
          A character generated from scratch is no one&apos;s replica, so there is no performer to pay, and that is
          where part of the AI saving comes from. If your ad needs a recognisable spokesperson, a real doctor or your
          own founder, budget their fee and their consent first, or film them. This is not legal advice; your lawyer or
          the agency that holds the union agreement decides what applies to your ad.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Doing it yourself" title="Can AI make a commercial for me?">
        <p>
          A generator can make the shots. It will not decide what the ad says, keep your product identical from shot
          to shot, place your real logo, or cut the six versions a campaign needs. A marketer who has those skills in
          house pays for a subscription and their own hours; what each tool costs is in{' '}
          <Link href="/blog/how-much-does-ai-video-production-cost">AI video production cost</Link>. Everyone else is
          paying a studio for that work, and the published prices above are the price of it.
        </p>
        <h3>Airtime is a separate budget</h3>
        <p>
          Every price on this page is for making the commercial. Showing it costs money on top: a YouTube or social
          placement is bought in the platform&apos;s ad manager at a budget you set, and TV time is bought from the
          station or network. D-MAK&apos;s figures for a Super Bowl spot, for example, are production only, &ldquo;plus
          media&rdquo;. A buyer who has USD 20,000 for a launch should decide the media split before asking for quotes.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Getting a number" title={`How ${studio} prices a commercial`} alt>
        <p>
          {priceLine} The quote follows the drivers above, in roughly this order of weight: the number of scenes, how
          exactly the product has to match, whether one character must stay the same across shots, the versions, the
          review rounds and the date. The more of these the brief settles, the tighter the number. What to put in the
          brief is in <Link href="/guides/video-production-brief">how to brief a video production company</Link>, and
          what each budget line covers is in the{' '}
          <Link href="/guides/commercial-production-budget-template">commercial production budget template</Link>.
        </p>
        <p>
          One thing the price does not buy is a guarantee that viewers will like it. In a{' '}
          <a href={GALLUP}>Gallup survey published August 2026</a>, 62% of US adults called AI-created people or voices
          in ads unacceptable even when disclosed. A commercial built on products, places and worlds avoids most of
          that; one built on a generated spokesperson does not.
        </p>
      </GuideSection>

      <GuideFit
        title="Who should pay for an AI commercial"
        hire={[
          'A brand manager with a launch in six weeks, a product that can be shown accurately from its files, and no budget for a shoot.',
          'A marketing lead who needs one hero spot and its cutdowns for web, social and streaming, cinematic rather than templated.',
          'A pharma, lab or medical marketer whose ad shows mechanisms, products or places rather than real patients, with an MLR process already in place.',
          'An agency producer pricing an AI production partner against a shoot for a client pitch.',
        ]}
        instead={[
          'The ad needs your own staff, a real customer or a named doctor speaking for themselves: hire a crew.',
          'You need a local spot for a few hundred dollars: a self-serve generator, or the template ad a TV station sells with its airtime, costs less than any studio.',
          'You make many short ads a month and have an editor in house: a Runway, Veo, Kling or Sora subscription plus your editor is cheaper per ad.',
          'Your audience is likely to reject anything visibly AI-made: film it.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-commercial-production', title: 'AI commercial production companies', note: 'Who makes AI commercials, and how to choose one once the budget is set.' },
          { href: '/blog/how-much-does-ai-video-production-cost', title: 'AI video production cost and agency pricing', note: 'Every kind of AI video, retainers and subscriptions, and three sample budgets.' },
          { href: '/guides/brands-using-ai-commercials', title: 'Brands using AI commercials', note: 'What Coca-Cola, Kalshi and others spent in time, and how audiences reacted.' },
          { href: '/comparison/ai-agency-vs-traditional-agency', title: 'AI video production vs a traditional agency', note: 'When the shoot is still the better buy.' },
          { href: '/guides/who-owns-ai-video', title: 'Who owns an AI video?', note: 'The rights clauses to price into the contract.' },
        ]}
      />

      <GuideCta title="Get a number for your commercial" body="Send the product, the length, the channels, how many versions you need and the date it has to air." />
    </Guide>
  )
}
