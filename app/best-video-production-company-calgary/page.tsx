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
import { OFFERS, PRODUCTION, SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/best-video-production-company-calgary',
  title: 'Calgary Video Production Company: How to Choose',
  description:
    'How to choose a video production company in Calgary: camera crew, freelancer or AI studio, what Calgary firms publish as prices, what a real quote separates out, how to read reviews, and when an AI-only studio is the wrong hire.',
  published: '2026-03-08',
  updated: '2026-09-27',
  keywords: [
    'video production calgary',
    'calgary video company',
    'calgary video production',
    'video production company',
    'video production companies calgary',
    'best video production company calgary',
    'ai video agency calgary',
  ],
}

const studio = SITE.name
const offerNames = OFFERS.map((o) => o.name.toLowerCase()).join(', ')

const CLUTCH = 'https://clutch.co/agencies/video-production/calgary'
const DCFOTOFILM = 'https://dcfotofilm.com/blog/video-production-cost-calgary'
const RINGTAIL = 'https://www.calgaryvideographer.ca/videography-rates'
const VINC = 'https://www.vinc.ca/post/video-production-done-in-a-day'
const SPERO = 'https://studiospero.com/corporate'
const MERIDIAN = 'https://fifteenthmeridian.com/blog/calgary-video-production'

const FAQS = [
  {
    q: 'What is the best video production company in Calgary?',
    a: `There is no single best one; the right company depends on whether your video needs a camera. For filmed work with your own people, locations or events, shortlist two or three Calgary crews whose portfolios show your kind of video, and compare their quotes line by line. Clutch lists Calgary video production companies with client reviews, and Google reviews show how local clients rate them. For a cinematic brand film or ad that does not need real people on camera, an AI studio such as ${studio} in Calgary is another option.`,
  },
  {
    q: 'How do I choose a video production company in Calgary?',
    a: 'Start with what the video must show. Real staff, customers, a venue or an event need a camera crew; an imagined scene, a product in a place it has never been, or a story told with generated characters can be made by an AI studio. Then ask each company for two or three films like yours, a quote that prices pre-production, the shoot and post separately, a fixed number of revision rounds, who owns the raw footage, the delivery formats, and the music licence term and territory.',
  },
  {
    q: 'How much does a video production company in Calgary charge?',
    a: `Published Calgary prices in 2026: a camera operator day rate of $800 to $2,000 CAD, a lean single-day video at $2,500 to $6,000, and a polished two to three minute brand or corporate video at $6,000 to $15,000 (DCFOTOFILM, July 2026). V Strategies sells a one-day package for $4,995 and Studio Spero says most of its corporate projects fall between $3,000 and $15,000. ${studio} quotes each AI film from the brief and does not publish a price list.`, // claims-ok: DCFOTOFILM Calgary cost guide, V Strategies Done In A Day page, Studio Spero corporate FAQ, all linked on this page
  },
  {
    q: 'Is there a film industry in Calgary?',
    a: `Yes. Calgary has camera crews, directors of photography, editors, animation studios and full-service agencies, and Clutch keeps a list of Calgary video production companies with client reviews. ${studio}, founded in Calgary in ${SITE.foundingYear}, is an AI film studio: it makes films with generative AI and does not film on location.`,
  },
  {
    q: 'Should I hire a Calgary crew or an AI video studio?',
    a: 'Hire a crew when the video has to show real people as themselves (your team, a customer, a doctor), a real place or a real event. Consider an AI studio when the idea is cinematic but cannot be shot on your budget: a mountain at a light you cannot book, winter in July, a product in an impossible setting, a character who does not exist. Many companies use both, a crew for testimonials and an AI studio for the brand film or ad.',
  },
  {
    q: 'Do I need a video production company in Calgary, or can the studio be anywhere?',
    a: `For filmed work, a local crew saves travel days and knows Calgary locations, permits and weather. For AI-made films nothing is shot, so the studio can be anywhere; you approve scripts, boards and cuts online. ${studio} is based in Calgary and works the same way with companies in Calgary, the rest of Canada and abroad.`,
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} films={['d-s9SxA4Klk', 'LYA3Do3KEN0']}>
      <GuideHero
        eyebrow="Calgary, Alberta"
        title="How to choose a video production company in Calgary"
        dek="For the marketing lead, founder or comms manager in Calgary who needs a video made and has three quotes that look nothing alike. Written by an AI film studio based here, which is the wrong hire for most filmed work, and says so below."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          Pick by what the video has to show. If it needs your own people, a customer, a venue or an event on camera,
          hire a Calgary crew: published local prices run $2,500 to $6,000 CAD for a lean one-day video and $6,000 to
          $15,000 for a polished two to three minute brand or corporate video (DCFOTOFILM, July 2026). {/* claims-ok: DCFOTOFILM Calgary cost guide, linked in the price table */} If
          it is a cinematic brand film or ad that nobody could afford to shoot, an AI studio can make it. Either way,
          compare quotes that price pre-production, the shoot and post separately and state a fixed number of revisions.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="Three kinds of hire" title="Crew, freelancer or AI studio: what each one is for">
        <p>
          Most people searching for video production in Calgary want a camera at their office, their site or their
          event. That is a crew job. A smaller group wants a brand film or commercial with a look their budget cannot
          shoot. That is where an AI studio fits. The table sets the three side by side.
        </p>
        <GuideTable
          head={['', 'Production company with a crew', 'Freelance videographer', 'AI film studio']}
          rows={[
            ['What it makes', 'Corporate, commercial, testimonial, event, real estate and social video, filmed', 'Interviews, events, social clips, small corporate pieces', `${OFFERS.map((o) => o.name).join(', ')}, all generated`],
            ['Real people and places on camera', 'Yes', 'Yes', 'No. Scenes, characters and products are generated'],
            ['Who writes and directs', 'Producer, director, often a writer', 'Usually the videographer', 'Director and writer; AI does the shooting'],
            ['Published Calgary prices', '$2,500 to $15,000+ per project (DCFOTOFILM)', '$550 half day, $1,000 full day (Ring Tail Films)', 'Quoted per film; see our AI cost guide'], // claims-ok: DCFOTOFILM and Ring Tail Films published rates, linked in the price table below
            ['Where it goes wrong', 'Budget spent on shoot days the idea did not need', 'No writer or producer, so the story is thin', 'Faces, hands, logos and on-screen text that break between shots'],
          ]}
          caption={`Prices from the Calgary sources in the price table below, checked September 2026. The AI studio column describes ${studio}.`}
        />
        <p>
          {studio} is the third column. {PRODUCTION.summary} It makes {offerNames}. If your video needs the first or
          second column, the rest of this page is still meant to help you hire well.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Prices" title="What Calgary video production companies charge" alt>
        <p>
          Several Calgary firms publish prices. These are the figures we could check on each company&apos;s
          own page. Our <Link href="/affordable-video-production-calgary">Calgary video production cost guide</Link> breaks
          them down by format and length.
        </p>
        <GuideTable
          head={['Source', 'Published figure', 'What it covers']}
          rows={[
            [<a key="d" href={DCFOTOFILM}>DCFOTOFILM, July 2026</a>, '$800 to $2,000 a day; $2,500 to $6,000; $6,000 to $15,000; $15,000+', 'Camera operator day rate; lean single-day video; 2 to 3 minute brand or corporate video; commercial'], // claims-ok: DCFOTOFILM Calgary cost guide, linked in this row
            [<a key="r" href={RINGTAIL}>Ring Tail Films</a>, '$550 half day, $1,000 full day, $250 an hour', 'Freelance videographer with equipment; corporate videos typically $1,500 to $2,000'], // claims-ok: Ring Tail Films rates page, linked in this row
            [<a key="v" href={VINC}>V Strategies</a>, '$4,995', 'Done In A Day package: project management, shoot, edit and music'], // claims-ok: V Strategies Done In A Day page, linked in this row
            [<a key="s" href={SPERO}>Studio Spero</a>, '$3,000 to $15,000', 'Where most of its corporate projects fall, per its FAQ'], // claims-ok: Studio Spero corporate page, linked in this row
            [<a key="c" href={CLUTCH}>Clutch, Calgary list</a>, '$50-$99 to $200-$300 an hour; minimums from $1,000 to $10,000+', 'Hourly rates and minimum project sizes listed by Calgary firms'], // claims-ok: Clutch Calgary video production list, linked in this row
          ]}
          caption="Checked on each source page in September 2026. Currency is Canadian dollars where the source says so; Ring Tail, V Strategies, Studio Spero and Clutch do not state it."
        />
      </GuideSection>

      <GuideSection eyebrow="The shortlist" title="How to compare Calgary video production companies">
        <p>
          <strong>Ask for work like yours.</strong> A reel of weddings says little about a recruiting film. Ask for two
          or three finished videos in your format and length, and ask who on that project will work on yours.
        </p>
        <p>
          <strong>Read the quote, not the total.</strong> Meridian15, a Calgary producer,{' '}
          <a href={MERIDIAN}>lists what a real quote separates out</a> (July 2026): pre-production, shoot and post priced
          separately; revision rounds as a number; who owns the raw footage; delivery formats and aspect ratios; and the
          music licence term and territory. When two quotes are far apart, compare those lines first.
        </p>
        <p>
          <strong>Check timing.</strong> The same guide puts a typical shoot at a single day and post at one to three
          weeks, depending on revision rounds. Pre-production is usually the longest stretch, so a quote that skips it is
          either cheap or incomplete.
        </p>
        <p>
          <strong>Read reviews where the company does not write them.</strong> Google reviews and{' '}
          <a href={CLUTCH}>Clutch</a> are harder to fake than a testimonial
          block on a company&apos;s own site. Read the three-star ones; they say what went wrong. Our{' '}
          <Link href="/blog/best-video-production-companies-calgary">list of video production companies in Calgary</Link>{' '}
          sorts local firms by type and notes which publish prices.
        </p>
        <p>
          <strong>Ask about AI, whoever you hire.</strong> Ask whether any shots or voices will be generated, which ones, whether the tools&apos; licences allow commercial use, and who owns the result.
          Our guide to <Link href="/ai-video-production-agencies">hiring an AI video agency</Link> has the full question
          list.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The AI option" title="When an AI studio in Calgary is the better hire" alt>
        <p>
          An AI studio pays for no crew days, locations, permits or weather holds. That money goes into writing,
          direction and the shots that take many generation passes to get right. It suits ideas a Calgary shoot budget
          cannot reach: a brand film across four seasons, a commercial set somewhere the product has never been, a
          character who ages thirty years in a minute.
        </p>
        <p>
          The weak spots are known. Faces drift between shots, hands and small products deform, generators invent logos
          and label text, and one character has to look the same across every cut. Our page on{' '}
          <Link href="/ai-brand-film-agency">AI brand film production</Link> shows how each one gets fixed, and{' '}
          <Link href="/markets/ai-video-production-canada">AI video production in Calgary and Canada</Link> covers
          Canadian prices and ad rules.
        </p>
        <GuideFilm id="d-s9SxA4Klk" />
        <p>
          This Calgary Stampede film and the one below were both made with AI. The trail running film is an original
          the studio made, not client work.
        </p>
        <GuideFilm id="LYA3Do3KEN0" />
      </GuideSection>

      <GuideFit
        hire={[
          'You want a cinematic brand film or commercial and the idea cannot be shot on your budget.',
          'The story can be told with generated scenes, characters and products; nobody has to appear as themselves.',
          'You need several cutdowns and aspect ratios from one idea for TV, YouTube and social.',
          'You are happy to approve scripts, boards and cuts online.',
        ]}
        instead={[
          'Your staff, a customer or a clinician has to appear and speak as themselves. Hire a Calgary production company with a crew.',
          'You need an event filmed, such as a conference, a Stampede party or a product launch. That is a camera job.',
          'You need a property walkthrough, a site tour or drone footage of a real place. Hire a real estate or drone videographer.',
          'You need a talking-head interview or a simple social clip on a small budget. A freelance videographer is the better value.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/affordable-video-production-calgary', title: 'Video production cost in Calgary', note: 'Published Calgary prices by format and length, and what moves a quote.' },
          { href: '/ai-video-production-agencies', title: 'How to hire an AI video agency', note: 'Seven questions to ask any AI studio before you sign.' },
          { href: '/markets/ai-video-production-canada', title: 'AI video production in Calgary and Canada', note: 'Canadian AI video prices, the Quebec French rule and Ad Standards preclearance.' },
          { href: '/comparison/ai-agency-vs-traditional-agency', title: 'AI video vs traditional production', note: 'Line by line, and which to hire for which brief.' },
          { href: '/ai-video-production-enterprise', title: 'AI corporate video production', note: 'Which company videos can be made with AI, and which need a crew.' },
        ]}
      />

      <GuideCta body="Send what the video is for and who has to be in it. If it needs a crew, we will say so." />
    </Guide>
  )
}
