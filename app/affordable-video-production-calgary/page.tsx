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
import { SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/affordable-video-production-calgary',
  title: 'Video Production Cost in Calgary: Real Prices',
  description:
    'What video production costs in Calgary, from prices Calgary companies publish: freelance day rates, one-day packages, two to three minute corporate videos and commercials, what moves the number, how to spend less, and where AI-made video fits.',
  published: '2026-03-08',
  updated: '2026-09-27',
  keywords: [
    'how much does video production cost in calgary',
    'video production cost calgary',
    'affordable video production calgary',
    'video production calgary',
    'calgary video production',
    'how much does a 2 minute video cost',
    'promotional video calgary',
  ],
}

const studio = SITE.name

const DCFOTOFILM = 'https://dcfotofilm.com/blog/video-production-cost-calgary'
const RINGTAIL = 'https://www.calgaryvideographer.ca/videography-rates'
const VINC = 'https://www.vinc.ca/post/video-production-done-in-a-day'
const SPERO = 'https://studiospero.com/corporate'
const VIDEOKINGS = 'https://www.videokings.ca/a-guide-to-the-cost-of-a-corporate-videographer-in-calgary'
const CLUTCH = 'https://clutch.co/agencies/video-production/calgary'
const MERIDIAN = 'https://fifteenthmeridian.com/blog/calgary-video-production'
const CROSSROAD = 'https://crossroadmedia.ca/ai-commercials'

const FAQS = [
  {
    q: 'How much does video production cost in Calgary?',
    a: 'Calgary companies publish these 2026 prices: a lean single-day video at $2,500 to $6,000 CAD, a polished two to three minute brand or corporate video at $6,000 to $15,000, and commercials from $15,000 (DCFOTOFILM, July 2026). A freelance videographer with equipment charges about $550 for a half day and $1,000 for a full day (Ring Tail Films). Shoot days and crew size move the price more than the length of the finished video.', // claims-ok: DCFOTOFILM Calgary cost guide and Ring Tail Films rates, both linked on this page
  },
  {
    q: 'What is the average cost of video production?',
    a: 'There is no useful single average, because a one-person interview and a crewed commercial are different jobs. In Calgary, the published middle is a two to three minute corporate or brand video at $6,000 to $15,000 CAD (DCFOTOFILM, July 2026), and Studio Spero says most of its corporate projects fall between $3,000 and $15,000. On Clutch, the most common hourly rate listed by Calgary video firms is $100 to $149.', // claims-ok: DCFOTOFILM, Studio Spero corporate FAQ and Clutch Calgary list, all linked on this page
  },
  {
    q: 'How much does a 2 minute video cost?',
    a: 'In Calgary, a polished two to three minute brand or corporate video costs $6,000 to $15,000 CAD at published 2026 prices (DCFOTOFILM). A simpler two minute piece shot by one freelancer in a single day can cost far less: Ring Tail Films lists corporate videos at typically $1,500 to $2,000. The difference is crew size, shoot days, script and editing, not the running time.', // claims-ok: DCFOTOFILM Calgary cost guide and Ring Tail Films rates, both linked on this page
  },
  {
    q: 'How much does a videographer cost per hour in Calgary?',
    a: 'Published Calgary rates run $100 to $300 an hour (DCFOTOFILM, July 2026; Video Kings, April 2024). Ring Tail Films lists $250 an hour, $550 for a half day of up to three hours and $1,000 for a full day of up to ten hours, equipment included, plus $0.65 per km for travel outside Calgary.', // claims-ok: DCFOTOFILM, Video Kings and Ring Tail Films, all linked on this page
  },
  {
    q: 'What is the cheapest way to get a professional video made in Calgary?',
    a: 'Book one shoot day and plan it to produce several videos, keep to one or two locations, write the script before the shoot, and hire a freelancer for simple interviews or social clips. Fixed one-day packages exist: V Strategies sells Done In A Day for $4,995 including project management, the shoot, editing and music.', // claims-ok: V Strategies Done In A Day page, linked on this page
  },
  {
    q: 'Is AI video cheaper than hiring a Calgary video crew?',
    a: `It can be for a cinematic brand film or commercial that would need many shoot days, locations or actors, because an AI studio pays for no crew, gear or location days. It is not cheaper, and not suitable, for an interview with your own staff or event coverage. Crossroad Media in BC publishes most 15 to 60 second AI commercials at $2,500 to $10,000. ${studio}, an AI film studio in Calgary, quotes each film from the brief and does not publish a price list.`, // claims-ok: Crossroad Media AI commercials page, linked on this page
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} films={['LYA3Do3KEN0']}>
      <GuideHero
        eyebrow="Calgary, Alberta · prices checked September 2026"
        title="What video production costs in Calgary"
        dek="For the Calgary business owner or marketing lead who needs a video and wants to know what a fair quote looks like before calling anyone. Every figure below comes from a Calgary company's own published page, linked."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          At prices Calgary companies publish in 2026, a lean single-day video costs $2,500 to $6,000 CAD, a polished
          two to three minute brand or corporate video $6,000 to $15,000, and a commercial $15,000 and up (DCFOTOFILM,
          July 2026). {/* claims-ok: DCFOTOFILM Calgary cost guide, linked in the price table */} A freelance videographer
          with equipment charges about $550 for a half day and $1,000 for a full day. {/* claims-ok: Ring Tail Films rates, linked in the price table */} Shoot
          days and crew size move the number more than the length of the finished video.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="Published prices" title="Calgary video production prices, by source">
        <GuideTable
          head={['Source', 'Published figure', 'What it covers']}
          rows={[
            [<a key="r" href={RINGTAIL}>Ring Tail Films</a>, '$250 an hour; $550 half day; $1,000 full day', 'Freelance videographer, equipment included; extra crew $475 half day, $800 full day'], // claims-ok: Ring Tail Films rates page, linked in this row
            [<a key="r2" href={RINGTAIL}>Ring Tail Films</a>, '$800 to $1,500; $1,500 to $2,000', 'Interview videos; corporate videos, typically'], // claims-ok: Ring Tail Films rates page, linked in this row
            [<a key="d1" href={DCFOTOFILM}>DCFOTOFILM, July 2026</a>, '$800 to $2,000 a day; $1,500 to $4,000 a day', 'Camera operator; director of photography'], // claims-ok: DCFOTOFILM Calgary cost guide, linked in this row
            [<a key="d2" href={DCFOTOFILM}>DCFOTOFILM, July 2026</a>, '$2,500 to $6,000', 'Lean single-day video'], // claims-ok: DCFOTOFILM Calgary cost guide, linked in this row
            [<a key="v" href={VINC}>V Strategies</a>, '$4,995', 'Done In A Day package: project management, shoot, editing, music'], // claims-ok: V Strategies Done In A Day page, linked in this row
            [<a key="s" href={SPERO}>Studio Spero</a>, '$3,000 to $15,000', 'Where most of its corporate projects fall'], // claims-ok: Studio Spero corporate FAQ, linked in this row
            [<a key="d3" href={DCFOTOFILM}>DCFOTOFILM, July 2026</a>, '$6,000 to $15,000', 'Polished 2 to 3 minute brand or corporate video'], // claims-ok: DCFOTOFILM Calgary cost guide, linked in this row
            [<a key="d4" href={DCFOTOFILM}>DCFOTOFILM, July 2026</a>, '$15,000 and up', 'Commercial or high-production piece'], // claims-ok: DCFOTOFILM Calgary cost guide, linked in this row
          ]}
          caption="Figures as published on each company's page, checked September 2026. DCFOTOFILM states Canadian dollars; the others do not state a currency. Scope differs, so compare what each price includes."
        />
        <p>
          Two wider checks agree with the table. <a href={VIDEOKINGS}>Video Kings</a> put a Calgary corporate
          videographer at $1,500 to $12,000 per project and $100 to $300 an hour (April 2024), and the most common hourly {/* claims-ok: Video Kings guide, linked in this sentence */}
          rate on <a href={CLUTCH}>Clutch&apos;s Calgary list</a> is $100 to $149, with minimum project sizes of $1,000 to {/* claims-ok: Clutch Calgary list, linked on this line */}
          $10,000 and up (September 2026).
        </p>
      </GuideSection>

      <GuideSection eyebrow="What moves it" title="What moves a Calgary video quote" alt>
        <p>
          DCFOTOFILM names shoot days as the single biggest lever, then crew size, the camera and lighting package,
          editing and post (grade, motion graphics, sound), and extras: talent, licensed music, drone, travel, permits and
          scripting. In practice:
        </p>
        <ul>
          <li>
            <strong>A second shoot day</strong> roughly adds another day of every crew rate on the quote, plus gear.
          </li>
          <li>
            <strong>Each extra location</strong> costs setup time, and some need permits.
          </li>
          <li>
            <strong>Actors and voice talent</strong> add session fees, and an ad needs usage rights for every channel and month it runs.
          </li>
          <li>
            <strong>Revision rounds</strong> add editing days. Meridian15 puts post at{' '}
            <a href={MERIDIAN}>one to three weeks depending on revision rounds</a>.
          </li>
          <li>
            <strong>Cutdowns and aspect ratios</strong> (a 30 second, a 15 second, a vertical cut) are cheaper to plan
            than to add later.
          </li>
        </ul>
      </GuideSection>

      <GuideSection eyebrow="Spending less" title="How to get an affordable video in Calgary without a worse one">
        <p>
          <strong>Plan one day to produce a library.</strong> Meridian15&apos;s guide is built on scoping a shoot so it
          yields several videos rather than one film: the long version, cutdowns, social clips and stills from the same
          setups.
        </p>
        <p>
          <strong>Write before you shoot.</strong> A script and shot list approved before the shoot day keep the crew
          from filming options you will not use.
        </p>
        <p>
          <strong>Match the hire to the job.</strong> A talking-head interview does not need a full crew; a freelancer at a
          half-day rate can do it. A commercial with actors and several locations does.
        </p>
        <p>
          <strong>Buy a fixed package when the brief fits it.</strong> One-day packages such as V Strategies&apos;{' '}
          <a href={VINC}>Done In A Day</a> price the whole job up front.
        </p>
        <p>
          <strong>Read what the quote leaves out.</strong> A real quote, per Meridian15, prices pre-production, shoot and
          post separately and states the revision count, raw footage ownership, delivery formats and the music licence
          term and territory. When one total is much lower than the others, check which of those lines it leaves out.
        </p>
      </GuideSection>

      <GuideSection eyebrow="AI-made video" title="Where AI video fits in a Calgary budget" alt>
        <p>
          AI video removes shoot days, crew, locations and weather from the budget, which are the biggest lines above. It
          fits a brand film or commercial whose idea would take many shoot days to film: several seasons, faraway
          places, crowds, a product somewhere it has never been. It does not replace filming your own team, a customer or
          an event.
        </p>
        <p>
          Few Canadian AI studios publish prices. Crossroad Media in Surrey, BC says most of its 15 to 60 second AI
          commercials cost $2,500 to $10,000 (checked September 2026). {/* claims-ok: Crossroad Media AI commercials page, linked here */} {studio}, an AI film studio in {SITE.city}, quotes each film from
          the brief; our <Link href="/blog/how-much-does-ai-video-production-cost">AI video production cost guide</Link>{' '}
          compares published AI prices at four levels, and the <a href={CROSSROAD}>Crossroad Media page</a> shows one
          Canadian studio&apos;s range.
        </p>
        <GuideFilm id="LYA3Do3KEN0" caption={`An original AI short film by ${studio}, not client work.`} />
      </GuideSection>

      <GuideFit
        title="Who should call us, and who should call a crew"
        hire={[
          'You want a cinematic brand film or commercial and the idea would take more shoot days than your budget allows.',
          'Nobody has to appear as themselves; the story can be told with generated scenes, characters and products.',
          'You need several cutdowns and ratios from one idea.',
        ]}
        instead={[
          'You need your staff, a customer or a clinician on camera. Hire a Calgary crew or a freelance videographer.',
          'You need an event, a property or a site filmed. That is a camera job.',
          'You need one simple interview or social clip. A freelancer at a half-day rate is the affordable answer.',
          <>
            You are still choosing between Calgary companies. Our guide to{' '}
            <Link href="/best-video-production-company-calgary">choosing a video production company in Calgary</Link>{' '}
            compares crews, freelancers and AI studios.
          </>,
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/best-video-production-company-calgary', title: 'How to choose a Calgary video production company', note: 'Crew, freelancer or AI studio, and how to compare quotes and reviews.' },
          { href: '/blog/how-much-does-ai-video-production-cost', title: 'AI video production cost', note: 'Published AI video prices at four levels, and what each level buys.' },
          { href: '/markets/ai-video-production-canada', title: 'AI video production in Calgary and Canada', note: 'Canadian AI prices, the Quebec French rule and Ad Standards preclearance.' },
          { href: '/guides/commercial-production-budget-template', title: 'Commercial production budget template', note: 'The lines an AI film and campaign stills budget needs.' },
        ]}
      />

      <GuideCta body="Send what the video is for, how long it runs and who has to be in it. If a crew is the cheaper answer, we will say so." />
    </Guide>
  )
}
