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
import { PRODUCTION, SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/blog/how-much-does-ai-video-production-cost',
  title: 'AI Video Production Cost: What Brands Pay',
  description:
    'What AI video production costs in 2026 at each level, from self-serve tools to studios, with published prices and their sources, what drives the number, and how much cheaper it is than a traditional agency.',
  published: '2026-02-22',
  updated: '2026-09-23',
  keywords: [
    'how much does ai video production cost',
    'ai video production cost',
    'how much does it cost to make an ai video',
    'ai video agency pricing',
    'ai video production agency pricing',
    'how much cheaper is ai video production vs agency',
    'ai video cost',
  ],
}

const studio = SITE.name
const trail = film('LYA3Do3KEN0')

const LEMONLIGHT = 'https://www.lemonlight.com/blog/ai-video-production-cost/'
const VERSELY = 'https://www.versely.studio/blog/how-much-does-an-ai-commercial-cost'
const KALSHI = 'https://tech.yahoo.com/ai/articles/ai-generated-ad-aired-during-150507375.html'

const FAQS = [
  {
    q: 'How much does it cost to produce an AI video?',
    a: 'It depends on who makes it. Self-serve AI video tools cost about $20 to $300 a month (Lemonlight, March 2026), but you write, generate and edit yourself. Freelancers charge from about $500 for a simple short asset to $5,000 for a polished one. AI studios publish prices from USD 2,500 to 3,500 for a 15 to 60 second hero spot and GBP 15,000 to 45,000 for a broadcast commercial (Versely, September 2026). Ruminate X quotes each film from the brief.', // claims-ok: Lemonlight AI video production cost guide (March 2026), linked on this page
  },
  {
    q: 'How much cheaper is AI video production than a traditional agency?',
    a: 'Vendors claim large savings: Lemonlight says its expert-led AI video costs roughly 60% less than traditional production of equivalent quality, and the director of the Kalshi NBA Finals ad called it 95 percent cheaper than a traditional ad. The saving comes from having no crew, set, location, travel or reshoot days. It does not remove the script, edit, sound, licensing or review rounds, so a short film with long legal review saves less.', // claims-ok: Lemonlight AI video production cost guide (March 2026), linked on this page
  },
  {
    q: 'Is making an AI video free?',
    a: 'Free tiers exist, but a usable commercial is not free to make. Generators charge per clip or by credits, and most takes are thrown away: the director of the Kalshi NBA Finals ad reported 300 to 400 generations to get 15 usable clips (Mashable, June 2025). Add music and voice licenses and the hours of editing, and a do-it-yourself ad still costs money and time.',
  },
  {
    q: 'How much does a 2 minute AI video cost?',
    a: 'More than a 30 second one, though not four times as much. A longer film has more distinct scenes to generate and more runtime to edit, mix and grade, while the brief, the brand world and the casting are paid for once. As one published example, Gisteo lists AI avatar video at USD 1,000 for the first 30 seconds plus USD 500 for each extra 30 seconds (via Versely, September 2026), which works out to USD 2,500 for two minutes.',
  },
  {
    q: 'What makes an AI video production quote go up?',
    a: 'Length and the number of distinct scenes; how exactly a real product, place or person has to be reproduced; the number of cutdowns, aspect ratios, languages and hook variants; rush timelines; music and voice licensing; and review rounds, which run longest in pharma, medical and financial work where MLR or compliance signs off on every claim.',
  },
  {
    q: 'Does Ruminate X publish its prices?',
    a: 'No. Ruminate X quotes each brand film and commercial from the brief, because the price depends on length, scenes, product accuracy, versions and review rounds. Send the film type, length, channels, deadline and any reference films through the contact page to get a quote.',
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} films={['LYA3Do3KEN0']}>
      <GuideHero
        eyebrow="Pricing"
        title="How much does AI video production cost?"
        dek="For the marketing lead or founder building a budget for an AI-made commercial or brand film, who keeps finding prices that run from a monthly subscription to a broadcast budget."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          AI video production costs anything from a $20 a month tool subscription to five figures for a broadcast
          commercial, and the gap is about who does the work. With a tool you direct, generate and edit yourself. With a
          studio you pay for a finished film: script, boards, reruns of failed shots, edit, sound, grade and versions.
          Published studio prices in September 2026 start around USD 2,500 to 3,500 for a 15 to 60 second hero spot.{' '}
          {studio} quotes each film from the brief.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="The four levels" title="AI video production cost at each level">
        <p>
          Price guides tend to list numbers without saying what each one buys. The table adds who directs and who fixes the shots that fail.
        </p>
        <GuideTable
          caption={
            <>
              Prices are each company&apos;s own published figures, from{' '}
              <a href={LEMONLIGHT}>Lemonlight&apos;s AI video production cost guide</a> (March 2026) and the published
              studio prices compiled by <a href={VERSELY}>Versely</a> (September 2026). Checked September 2026.
            </>
          }
          head={['Level', 'Published price', 'Who directs', 'Who fixes the shots that fail']}
          rows={[
            ['Self-serve tools (Runway, Synthesia, HeyGen, Canva AI)', '$20 to $300 a month', 'You', 'You'],
            ['Freelancer', 'About $500 for a simple short asset, up to $5,000 for a polished one', 'The freelancer, within your brief', 'The freelancer, if the quote covers reruns'], // claims-ok: Lemonlight AI video production cost guide (March 2026), linked on this page
            ['AI studio', 'USD 2,500 and up for a 15 to 60 second hero spot; USD 3,500 and up for a 60 second cinematic film; GBP 15,000 to 45,000 for a broadcast asset', 'The studio', 'The studio'],
            ['Traditional production', 'About $15,000 to $50,000+ per video', 'The production company', 'Reshoots, at extra cost'],
          ]}
        />
        <p>
          The same word, &quot;AI video&quot;, covers a talking avatar made in an afternoon and a 60 second commercial
          with a cast, a product and a brand world. Before you compare two quotes, check they are for the same thing.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Against an agency" title="How much cheaper is AI video production than an agency?" alt>
        <p>
          The published claims are large.{' '}
          <a href={LEMONLIGHT}>Lemonlight</a> says an expert-led 30 second AI video costs roughly 60% less {/* claims-ok: Lemonlight's published claim, linked here */} than traditional
          production at equivalent quality. The director of Kalshi&apos;s NBA Finals ad, made with Veo 3 for about $2,000 in
          two days, <a href={KALSHI}>told Mashable</a> it was 95 percent cheaper than a traditional ad. Both are the
          makers&apos; own figures.
        </p>
        <p>The saving is real where the money in a shoot goes to physical things:</p>
        <ul>
          <li>crew days, cameras, lighting and grip;</li>
          <li>sets, locations, permits and travel;</li>
          <li>on-camera talent and their usage fees;</li>
          <li>reshoots when a shot does not work.</li>
        </ul>
        <p>It is smaller where the money goes to people and paperwork, which AI does not remove:</p>
        <ul>
          <li>the idea, the script and the boards;</li>
          <li>the edit, the sound mix and the grade;</li>
          <li>music and voice licenses;</li>
          <li>legal, medical or MLR review of every claim on screen.</li>
        </ul>
        <p>
          A 30 second spot for a pharma brand with three review rounds saves less than a lifestyle film for a shoe brand.
          For the full side-by-side, read <Link href="/comparison/ai-agency-vs-traditional-agency">AI agency vs traditional agency</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Doing it yourself" title="What an AI video costs when you make it yourself">
        <p>
          A tool subscription is the smallest line. The larger ones are generations you throw away and hours. The
          director of the Kalshi ad reported 300 to 400 generations to get 15 usable clips, and he has more than 15 years
          of directing experience (<a href={KALSHI}>Mashable, June 2025</a>). Budget for:
        </p>
        <ul>
          <li>generation credits, several times what the final clips alone would use;</li>
          <li>a voice or voiceover license, and music licensed for paid media;</li>
          <li>an editor&apos;s time for cut, sound and grade;</li>
          <li>someone to add your real logo, label and on-screen text, which generators still get wrong.</li>
        </ul>
        <p>
          Doing it yourself makes sense for drafts, internal video and high-volume social tests. For an ad that has to
          air under your brand, the reruns and the finishing are most of the work.
        </p>
      </GuideSection>

      <GuideSection eyebrow="What moves the number" title="What drives the price of an AI brand film or commercial" alt>
        <GuideTable
          caption="The cost drivers Ruminate X prices from, in the order they usually matter."
          head={['Driver', 'Why it costs more']}
          rows={[
            ['Length and scenes', 'Each distinct scene needs its own boards and generation passes; runtime adds edit, sound and grade time.'],
            ['Product accuracy', 'A real pack, label or device has to match your files in every shot, so those shots get the most reruns and compositing.'],
            ['Characters', 'Keeping one person looking like the same person across 20 shots takes more passes than a film without people.'],
            ['Versions', 'Cutdowns, 16:9, 9:16 and 1:1, languages and hook variants each need an edit, a mix and a check.'],
            ['Review rounds', 'Pharma, medical and financial films go through MLR or compliance; each round can send shots back.'],
            ['Timeline', 'A rush compresses reviews and reruns into fewer days.'],
            ['Licensing', 'Music and voice licensed for paid media, broadcast or several markets cost more than social-only use.'],
          ]}
        />
        <p>
          {PRODUCTION.summary} So {studio} prices none of the shoot lines above and all of the people lines. The{' '}
          <Link href="/how-we-make-an-ai-brand-film">stages of an AI brand film</Link> show where the hours go.
        </p>
        <GuideFilm
          id="LYA3Do3KEN0"
          caption={`${trail.title}, an original Ruminate X film (not client work), ${trail.durationSeconds} seconds. Several runners, several locations and changing light: the kind of film where scenes and characters drive the cost.`}
        />
      </GuideSection>

      <GuideSection eyebrow="Getting a quote" title="What to send to get an accurate AI video quote">
        <ol>
          <li>What the film is: a commercial, a brand film, an about-us film, a product film.</li>
          <li>Length, and the cutdowns and aspect ratios you need.</li>
          <li>Where it runs: social only, paid digital, streaming, broadcast, which countries.</li>
          <li>Whether a real product, place or person has to appear exactly, with the files.</li>
          <li>Who reviews it (brand, legal, medical, MLR) and how many rounds you expect.</li>
          <li>The date it has to be live, and one or two reference films you like.</li>
        </ol>
        <p>
          Two quotes built from the same list can be compared line by line. If one is far below the others, ask what it
          leaves out: usually the reruns on faces and product, the sound mix, or the licenses. The{' '}
          <Link href="/ai-video-production-agencies">guide to hiring an AI video production agency</Link> has the seven
          questions to ask before you sign.
        </p>
      </GuideSection>

      <GuideFit
        title="Is Ruminate X in your budget?"
        hire={[
          'You need a finished commercial or brand film that will run under your brand, and a shoot is out of budget or time.',
          'Your film needs a product, a cast and a world that hold together across every shot.',
          'You are a pharma, pharmacy, lab or medical marketer with an MLR process and a film that has to look like a film.',
        ]}
        instead={[
          'Your budget fits a subscription: use Runway, Veo, Kling, Sora, HeyGen or Synthesia and edit it yourself.',
          'You need many cheap social variations a week: a UGC creator network or a freelancer will cost less per video.',
          'Your film needs your own people or real customers on camera: a traditional production company is the right spend.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'What an AI commercial delivers and what still breaks.' },
          { href: '/ai-video-production-agencies', title: 'How to hire an AI video production agency', note: 'Tool, studio or production company, and the questions to ask.' },
          { href: '/comparison/ai-agency-vs-traditional-agency', title: 'AI agency vs traditional agency', note: 'The side-by-side for a brand deciding between them.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'Where the hours in an AI film go.' },
        ]}
      />

      <GuideCta title="Get a quote from the brief" body="Send the film type, length, channels, reviewers and the date it has to be live." />
    </Guide>
  )
}
