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
  path: '/blog/best-video-production-companies-calgary',
  title: 'Video Production Companies in Calgary: A List',
  description:
    'A list of video production companies in Calgary by type: crews, small teams, animation studios, film and TV producers and AI studios, with the prices the few that publish them state, which ones offer AI video, and where to read reviews.',
  published: '2026-03-08',
  updated: '2026-09-28',
  keywords: [
    'video production companies calgary',
    'video production companies in calgary',
    'calgary video production companies',
    'list of video production companies calgary',
    'top video production companies calgary',
    'video production companies calgary reviews',
    'best video production companies calgary',
  ],
}

const studio = SITE.name
const offerNames = OFFERS.map((o) => o.name.toLowerCase()).join(', ')

const CLUTCH = 'https://clutch.co/agencies/video-production/calgary'
const CED = 'https://www.calgaryeconomicdevelopment.com/sectors/creative-industries/film-and-tv/'
const MAVEN = 'https://www.mavenmediagroup.ca/services/video-production-services'
const RINGTAIL = 'https://calgaryvideographer.ca/videography-rates'
const SPERO = 'https://studiospero.com/corporate/'
const AJAX = 'https://www.ajaxcreative.com/production-company/office/calgary'
const VINC_AI = 'https://vinc.ca/ai-video'
const DAYONE = 'https://www.dayonemedia.ca/services'
const COMMUNITY = 'https://www.communityproductions.ca/animation'

const FAQS = [
  {
    q: 'What are the top video production companies in Calgary?',
    a: 'It depends on the video. For filmed corporate, event and case-study work, Calgary companies with crews include Maven Media Group, 2C Media, Vek Labs, Studio Spero, Aspen Films, Community Productions and Symbol Syndication. For commercials and branded content, Ajax Creative, Light Factory and V Strategies. For animation, Broken Pencil Studios and Studio Dialog. Clutch lists Calgary video production companies with client reviews, though its order can include paid placement. No list, including this one, replaces asking each company for work like yours.',
  },
  {
    q: 'How do I hire a video production company?',
    a: 'Decide first whether the video needs a camera: real staff, customers, a venue or an event need a crew; an imagined scene or a product in an impossible place can be made by an AI studio. Then shortlist two or three companies whose portfolios show your format, ask each for a quote that prices pre-production, the shoot and post separately, the number of revision rounds, who owns the raw footage, the delivery formats and the music licence, and compare those lines rather than the totals.',
  },
  {
    q: 'Which Calgary video production companies publish their prices?',
    a: 'Few do. In September 2026, Maven Media Group said most of its video projects range between $5,000 and $15,000 and its filming-only packages from $1,200 to $2,700+. Ring Tail Films put corporate and live event videos in the $1,500 to $2,000 range and a full shoot day at $1,000. Studio Spero said most corporate projects fall within $3,000 to $15,000. Ajax Creative publishes terms rather than prices: 5 to 7 weeks per project and a 50% deposit.', // claims-ok: Maven services page, Ring Tail Films rates page, Studio Spero corporate page, Ajax Creative Calgary page, all linked on this page
  },
  {
    q: 'Do Calgary video production companies use AI?',
    a: `Some do. In September 2026, Maven Media Group offered packages for videos that are primarily AI-based, V Strategies listed an AI video service alongside its filmed work, Day One Media said it uses generative AI video and photo where appropriate, and Community Productions offered AI voiceovers for animation. ${studio}, founded in Calgary in ${SITE.foundingYear}, makes every frame with AI and does no filming. Ask any company which shots or voices will be generated and whether the tools' licences allow commercial use.`,
  },
  {
    q: 'Is there a film industry in Calgary?',
    a: 'Yes. Calgary Economic Development cites over 750,000 square feet of stages and production space and Alberta\'s uncapped 22% to 30% refundable Film and Television Tax Credit, and names local producers including SEVEN24 Films, Polyscope Productions, Meta Productions, Nomadic Pictures and JOE MEDIA GROUP. Those companies mostly make series, features and commercials; business video for marketing and internal use is a separate set of firms.',
  },
  {
    q: 'How much does a video production company in Calgary charge?',
    a: 'Published Calgary figures in September 2026 run from $250 an hour or $1,000 a day for a freelance videographer (Ring Tail Films) to $5,000 to $15,000 for most projects at a full-service agency (Maven Media Group). Clutch shows Calgary firms with minimum project sizes from $1,000+ to $10,000+. Our Calgary video production cost guide has the full table by format.', // claims-ok: Ring Tail Films rates page, Maven services page, Clutch Calgary list, all linked on this page
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} films={['d-s9SxA4Klk']}>
      <GuideHero
        eyebrow="Calgary, Alberta"
        title="Video production companies in Calgary: who does what"
        dek="For the marketing manager, founder or comms lead in Calgary building a shortlist. Written by an AI film studio in Calgary, so it lists crews too, and does not rank anyone."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          Calgary&apos;s video production companies fall into five groups: agencies and production companies with crews,
          small teams and freelancers, animation and post studios, film and TV producers, and AI studios. Few publish
          prices. Those that do put most business videos between about $1,500 and $15,000 (Ring Tail Films, Studio Spero,
          Maven Media Group, September 2026). {/* claims-ok: Ring Tail Films, Studio Spero and Maven pages, linked in the price table */}
          Shortlist by the kind of video you need, then read reviews on Clutch and Google.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="The list" title="Calgary video production companies by type">
        <p>
          We read each company&apos;s own site on September 28, 2026. The table says what each one says it makes, whether
          it publishes a price, and whether it mentions AI video. It is in no order of quality. We have not worked with
          any of them.
        </p>
        <GuideTable
          head={['Company', 'What it says it makes', 'Published price', 'AI video']}
          rows={[
            [<a key="maven" href="https://www.mavenmediagroup.ca/">Maven Media Group</a>, 'Full-service agency: corporate video, case studies, events, motion graphics, live streaming', 'Yes', 'Yes, AI-based video packages'],
            [<a key="ajax" href={AJAX}>Ajax Creative</a>, 'Commercials, campaigns and branded content; offices across Canada', 'Terms only', 'Not mentioned'],
            [<a key="2c" href="https://www.2cmedia.ca/">2C Media</a>, 'Commercial, documentary, product and event video', 'No', 'Not mentioned'],
            [<a key="vek" href="https://veklabs.com/">Vek Labs</a>, 'Business video, photography, drone and post-production', 'No', 'Not mentioned'],
            [<a key="aspen" href="https://aspenfilms.ca/">Aspen Films</a>, 'Promo, award shows, events, TV commercials, live streaming, aerial', 'No', 'Not mentioned'],
            [<a key="comm" href="https://www.communityproductions.ca/">Community Productions</a>, 'Corporate, commercial and music video, 2D and 3D animation, drone', 'No', 'AI voiceovers only'],
            [<a key="lf" href="https://lightfactory.studio/">Light Factory</a>, 'Production house for commercials and branded content', 'No', 'Not mentioned'],
            [<a key="vinc" href="https://vinc.ca/">V Strategies</a>, 'Commercials, promo, animation, testimonial and training video', 'One package', 'Yes, AI video service'],
            [<a key="nw" href="https://newwestvideo.ca/">New West Video</a>, 'Corporate and marketing video, testimonials, event recaps', 'No, custom quotes', 'Not mentioned'],
            [<a key="spero" href={SPERO}>Studio Spero</a>, 'Video and photo for small businesses: corporate, events, real estate, weddings', 'Yes', 'Not mentioned'],
            [<a key="d1" href="https://www.dayonemedia.ca/">Day One Media</a>, 'Business and live event video, photo, design, drone', 'No', 'Yes, where appropriate'],
            [<a key="sym" href="https://www.symbolsyndication.com/">Symbol Syndication</a>, 'Corporate, training, events, real estate, podcasts, drone', 'No', 'Not mentioned'],
            [<a key="tw" href="https://www.twowordsproductions.ca/">Two Words Productions</a>, 'Videography and editing: corporate, profiles, music videos', 'No', 'Not mentioned'],
            [<a key="rt" href="https://calgaryvideographer.ca/">Ring Tail Films</a>, 'Small team in Calgary and Canmore: corporate, live events, instructional, interviews', 'Yes', 'Not mentioned'],
            [<a key="dc" href="https://dcfotofilm.com/">DCFOTOFILM</a>, 'Director of photography for commercials, documentaries and tourism', 'No', 'Not mentioned'],
            [<a key="fs" href="https://www.fullswingproductions.com/">Full Swing Productions</a>, 'Corporate video, creative films, web series, commercials', 'No', 'Not mentioned'],
            [<a key="bp" href="https://www.brokenpencilstudios.ca/">Broken Pencil Studios</a>, 'Animation studio: 2D and 3D, motion graphics, explainers', 'No', 'Not mentioned'],
            [<a key="sd" href="https://studiodialog.com/">Studio Dialog</a>, 'Post-production and design: motion design, animation, VFX', 'No', 'Not mentioned'],
            [<a key="meta" href="https://www.metaproductions.tv/">META Productions</a>, 'Original TV series and commercial campaigns', 'No', 'Not mentioned'],
            [studio, `AI film studio: ${offerNames}`, 'No, quoted per film', 'Every frame is AI; no filming'],
          ]}
          caption="Read on each company's own site, September 28, 2026. 'Not mentioned' means not on the pages we read. The last row is the studio that wrote this page."
        />
        <p>
          Most of the firms with crews make the same core formats: corporate and recruiting video, case studies and
          testimonials, event coverage and social cutdowns. The differences show up in their portfolios, so ask for two or
          three finished videos in your format before you ask for a quote. Our guide to{' '}
          <Link href="/best-video-production-company-calgary">choosing a video production company in Calgary</Link> covers
          what to compare.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Prices" title="Which Calgary companies publish prices" alt>
        <GuideTable
          head={['Company', 'Published figure (verbatim where quoted)']}
          rows={[
            [<a key="m" href={MAVEN}>Maven Media Group</a>, '"Most video projects range between $5,000-$15,000." Filming-only packages "$1,200-$2,700+".'], // claims-ok: Maven services page, linked in this row
            [<a key="r" href={RINGTAIL}>Ring Tail Films</a>, 'Corporate or live event videos in the "$1500 to $2000 range"; interviews about $800 to $1,500; full day $1,000, half day $550, $250 an hour'], // claims-ok: Ring Tail Films rates page, linked in this row
            [<a key="s" href={SPERO}>Studio Spero</a>, 'Corporate projects "most falling within the $3000-$15000 range"'], // claims-ok: Studio Spero corporate page, linked in this row
            [<a key="a" href={AJAX}>Ajax Creative</a>, 'No price. "Each project typically takes us between 5-7 weeks to produce"; 50% deposit on projects under $100k; one round of changes included'],
            [<a key="c" href={CLUTCH}>Clutch, Calgary list</a>, 'Listed firms show minimum projects from $1,000+ to $10,000+ and hourly rates from $50-$99 to $200-$300'], // claims-ok: Clutch Calgary list, linked in this row
          ]}
          caption="Checked on each linked page, September 28, 2026. None of these pages states the currency; assume Canadian dollars and confirm in the quote."
        />
        <p>
          For what drives those numbers (shoot days, crew size, post, music) and what a two or three minute video costs,
          read our <Link href="/affordable-video-production-calgary">Calgary video production cost guide</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="AI video" title="Calgary video companies that offer AI video">
        <p>
          Four of the companies above mention AI on the pages we read.{' '}
          <a href={MAVEN}>Maven Media Group</a> sells packages for videos that are &quot;primarily AI-based&quot; next to its
          filmed work. <a href={VINC_AI}>V Strategies</a> lists an AI video service and describes AI-generated environments
          working alongside its creative direction. <a href={DAYONE}>Day One Media</a> says it uses generative AI video and
          photo where it fits the budget. <a href={COMMUNITY}>Community Productions</a> offers AI voiceovers for animation and
          says they cost less but lose inflection and tone.
        </p>
        <p>
          {studio} works the other way round. {PRODUCTION.summary} That suits a brand film or commercial whose world can be
          made rather than recorded: a product in a place it has never been, weather you cannot book, a character who does
          not exist. It does not suit a video where your staff, a customer or an event has to appear as it is. For those,
          hire one of the crews above.
        </p>
        <GuideFilm id="d-s9SxA4Klk" />
        <p>
          Whoever you hire, ask which shots or voices will be generated, whether the tools&apos; licences allow commercial
          use, who owns the result, and how faces, hands, logos and on-screen text will be checked. Our page on{' '}
          <Link href="/ai-video-production-agencies">hiring an AI video production agency</Link> has the full question list,
          and <Link href="/markets/ai-video-production-canada">AI video production in Calgary and Canada</Link> covers
          Canadian prices and ad rules.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Film and TV" title="Is there a film industry in Calgary?" alt>
        <p>
          Yes, and it is mostly separate from business video. <a href={CED}>Calgary Economic Development</a> cites over
          750,000 square feet of stages and production space and Alberta&apos;s uncapped 22% to 30% refundable Film and
          Television Tax Credit, and names local producers including SEVEN24 Films, Polyscope Productions, Meta Productions,
          Nomadic Pictures and JOE MEDIA GROUP. Crews who work on series and features also take commercial days, which is
          one reason Calgary shoots can draw on experienced camera, grip and lighting people.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Reviews" title="Where to read reviews of Calgary video companies">
        <p>
          <a href={CLUTCH}>Clutch</a> lists Calgary video production companies with verified client reviews, hourly rates
          and minimum project sizes: 70 companies, ratings updated September 28, 2026. Clutch says it may earn a fee for some
          placements, so read its order as a directory with paid spots in it. Google reviews on each company&apos;s map listing are the other place local clients
          write. Read the three-star reviews; they say what went wrong. A testimonial block on a company&apos;s own site,
          ours included, is the weakest evidence of the three.
        </p>
      </GuideSection>

      <GuideFit
        hire={[
          'You want a cinematic brand film or commercial that a Calgary shoot budget cannot reach.',
          'Nobody has to appear as themselves; generated scenes, characters and products can tell the story.',
          'You want one idea cut into TV, YouTube and social versions.',
          'You are happy to approve scripts, boards and cuts online.',
        ]}
        instead={[
          'Your team, a customer or a clinician has to speak on camera: hire a Calgary company with a crew from the list above.',
          'You need an event, a site or a property filmed: hire a crew or a drone videographer.',
          'You need an animated explainer from diagrams: an animation studio such as those listed above.',
          'You need a simple interview or social clip on a small budget: a freelance videographer is better value.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/best-video-production-company-calgary', title: 'How to choose a video production company in Calgary', note: 'Crew, freelancer or AI studio, and what a quote should separate.' },
          { href: '/affordable-video-production-calgary', title: 'Video production cost in Calgary', note: 'Published Calgary prices by format and length.' },
          { href: '/markets/ai-video-production-canada', title: 'AI video production in Calgary and Canada', note: 'What an AI studio here makes, and the Canadian ad rules.' },
          { href: '/comparison/ai-agency-vs-traditional-agency', title: 'AI video agency vs traditional production', note: 'Which one to hire for which brief.' },
        ]}
      />

      <GuideCta />
    </Guide>
  )
}
