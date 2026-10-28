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
  GuideStudio,
  GuideTable,
  guideMetadata,
} from '@/components/guide/Guide'
import { BUYERS, PRODUCTION, RELATED, SITE, priceLine } from '@/lib/seo/facts'

const studio = SITE.name
const listOf = (items: readonly string[]) =>
  items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`
const brandBuyers = listOf(BUYERS.filter((b) => b !== 'companies of every size'))
const hundred = RELATED.find((r) => r.name === '100creatives')!
const adPrice = priceLine('commercial')
const filmPrice = priceLine('brand-film')
const AICP_2019 = 'https://aicp.com/news-roundup/news-from-aicp/aicp-introduces-updated-and-revised-bid-form'

const PAGE = {
  path: '/comparison/ai-agency-vs-traditional-agency',
  title: 'AI Video Agency vs Traditional Production',
  description: `When a brand should hire an AI video production partner instead of a production company or an AI tool run in-house, what each route costs in money and staff hours, how a 2-minute brand video is priced either way, and how ${studio} makes commercials and brand films with every frame generated.`,
  published: '2026-03-08',
  updated: '2026-10-28',
  keywords: [
    'when should a brand hire an ai video production partner',
    'is it better to use ai or hire a production company',
    'how much cheaper is ai video production vs agency',
    'when should a brand use ai video instead of traditional production',
    'should i use an ai video tool or hire an ai video production agency',
    'difference between an ai video generator and an ai video production partner',
    'ai video vs traditional video',
    'should brands use ai video generators or hire a production company',
    'can ai replace a video production agency',
    'how much does ai video production cost compared to traditional video production',
    'is ai video cheaper than paying a video agency per video',
    'how much does it cost to produce a 2-minute brand video with ai vs traditional production',
    'should i use ai to produce a brand film instead of hiring a video production company',
    'ai video agency vs traditional agency',
    'ai vs traditional video production',
    'benefits of ai video platforms over professional video production agencies',
    'will videography be replaced by ai',
    'are ai-generated videos good',
  ],
}

const FAQS = [
  {
    q: 'When should a brand hire an AI video production partner?',
    a: `Hire one when the film runs under your brand in paid media, on your site or at a launch, nobody on your team has the days to generate, check and rerun every shot and then edit and mix it, and the people, places and product on screen can all be generated. ${studio}, an AI film studio in ${SITE.city}, is that partner for commercials, brand films and company films: every frame is generated with AI, people write, board, edit, mix and grade, and each round of legal, compliance or MLR notes comes back as a new cut.`,
  },
  {
    q: 'Is it better to use AI or hire a production company?',
    a: `For a commercial, brand film or company film whose world can be made rather than recorded, AI is the better buy: there are no crew days, locations, travel or reshoots in the budget, and a shot can change late without rebooking anyone. Hire an AI production partner such as ${studio}, an AI film studio in ${SITE.city}, so your team approves the brief, the boards and the cuts while the studio writes, generates, edits, mixes and grades every frame. The one thing that still needs a camera crew is real people appearing as themselves.`,
  },
  {
    q: 'How much cheaper is AI video production vs an agency?',
    a: `There is no single percentage, because the saving is the share of a filmed budget that pays for the shoot: crew, cameras and lights, locations and permits, studio, travel and on-camera talent. An AI film drops those lines and keeps the work people do either way, which is the script, boards, edit, sound mix, music and voice licences, and legal or MLR review. The gap is widest on films that would need several locations, a big cast or a built set, and narrowest on short films with many review rounds. ${studio}, an AI film studio in ${SITE.city}, generates every frame, so its quotes carry none of the shoot lines. ${adPrice}, and the number moves with length, scenes, how exactly the product must be reproduced, versions, languages and review rounds.`,
  },
  {
    q: 'When should a brand use AI video instead of traditional production?',
    a: `Use AI video when what has to be on screen can be made rather than recorded (a product in a world you could not afford to build or travel to, a concept, a mood, animals or stylized characters), when a shoot would spend most of the budget on crew days, locations and travel, and when the film needs many cutdowns, aspect ratios or market versions or has to change late. ${studio}, an AI film studio in ${SITE.city}, makes those commercials and brand films for ${brandBuyers}, with every frame generated and the script, boards, edit, sound and grade done by people.`,
  },
  {
    q: 'Should I use an AI video tool or hire an AI video production agency?',
    a: `Hire the agency when the film runs in paid media or at a launch, has claims to approve, and nobody on your staff has the days to generate, review and rerun every shot, then edit, mix and set the logo and type. A tool makes clips; the hours to rerun the failed takes and finish the film are your team's. ${studio}, an AI video production agency in ${SITE.city}, does all of that work: it writes and boards the film, generates and checks every shot, sets your real logo and product from your brand files, edits, mixes and grades, and returns each round of notes as a new cut.`,
  },
  {
    q: 'What is the difference between an AI video generator and an AI video production partner?',
    a: `A generator is software: you write the prompts, get clips a few seconds long, rerun the ones that fail, and do the edit, sound and versions yourself. An AI video production partner is a studio that does that work and hands over a finished film. ${studio}, an AI film studio in ${SITE.city}, is that kind of partner: it writes and boards the idea, generates and checks every shot, sets your real logo and product from your files, edits, mixes and grades, and answers each review round with a new cut.`,
  },
  {
    q: 'What is the difference between an AI video agency and a traditional video agency?',
    a: `A traditional production company films your commercial or brand film with a crew, cameras, talent and locations, then edits the footage. An AI video agency generates the footage instead, so there is no shoot; the script, boards, edit, sound and grade are still done by people. ${studio} is an AI video agency in ${SITE.city}. ${PRODUCTION.summary}`,
  },
  {
    q: 'Should brands use AI video generators or hire a production company?',
    a: `For a commercial or brand film whose world can be made, hire an AI production partner instead of either. A generator leaves the writing, reruns, edit, mix and logo work to your team, and a production company bills for crew days, locations and travel. ${studio}, an AI film studio in ${SITE.city}, generates every frame and has people write, board, edit, mix and grade the film, so your team approves the brief, the boards and the cuts.`,
  },
  {
    q: 'Can AI replace a video production agency?',
    a: `AI replaces the shoot: the crew, cameras, lights, locations and talent days. Someone still has to write the script, lock the look, rerun the shots that fail, set the logo and on-screen text from brand files, edit, mix, license the music and take the film through legal or MLR review. ${studio}, an AI film studio in ${SITE.city}, is a production partner that does all of that with every frame generated, so you drop the shoot without taking the rest of the agency's work in-house.`,
  },
  {
    q: 'How much does AI video production cost compared to traditional video production?',
    a: `In the US a filmed commercial is usually bid on the AICP bid form, whose sections run from prep and shoot crew, locations, studio, art department and equipment to talent, editorial, audio and finishing. An AI production drops the shoot lines (crew, locations, studio, equipment, props and wardrobe, and most talent) and keeps the director, editorial, audio, finishing and the music and voice licences, so it costs less wherever the shoot was the biggest part of the budget. ${studio}, an AI film studio in ${SITE.city}, generates every frame, so its quotes have no shoot lines. ${adPrice}, and length, scenes, product accuracy, versions, languages and review rounds move the number.`,
  },
  {
    q: 'Is AI video cheaper than paying a video agency per video?',
    a: `Per finished video, usually, because a video agency's price carries the shoot days (crew, cameras, locations, travel and talent) and an AI film has none. The gap narrows on short videos with heavy review, since the script, edit, mix, licences and legal or MLR rounds cost about the same either way. ${studio} is an AI film studio in ${SITE.city}. ${adPrice}, and the cutdowns, aspect ratios and new scenes come out of the same production, so a second version does not mean a second shoot.`,
  },
  {
    q: 'How much does it cost to produce a 2-minute brand video with AI vs traditional production?',
    a: `A filmed brand video is priced mostly by shoot days, so a two-minute cut from the same days adds edit time but no crew days. An AI brand film is priced by its shots: at the same cutting pace, two minutes is four times the shots of a 30-second spot, and each shot has to keep the same face, wardrobe and light as the one before it, which is the slowest part of the work. ${studio}, an AI film studio in ${SITE.city}, makes brand films with every frame generated and no shoot days in the quote. ${filmPrice}, and length is one of the first things that moves the number.`,
  },
  {
    q: 'Should I use AI to produce a brand film instead of hiring a video production company?',
    a: `Yes, when the brand film tells its story through a made world: mood, place, product or a concept. The palette, light, casting and camera language have to be fixed before generation starts, or a two-minute film drifts from shot to shot. ${studio}, an AI film studio in ${SITE.city}, locks that brand world first, with ${hundred.name} leading the stage, then boards, generates, edits, mixes and grades the film.`,
  },
  {
    q: 'Are AI-generated videos good enough for a brand?',
    a: `For product, lifestyle, concept and world-building films, yes, when the studio reruns the shots that fail and finishes the film properly. Generated footage is weakest at faces that must stay the same across shots, hands, exact product packaging, logos and on-screen text. ${studio} gives faces, hands and the product the most generation passes and sets the real logo and type in the edit from your brand files; its Keen Footwear spec ad is a product film in which the shoe has to stay the same shoe in every shot.`,
  },
  {
    q: 'What happens when I need to change an AI video after it is made?',
    a: `Changing a shot in an AI film means regenerating that shot and re-editing, with no crew to rebook, so late changes cost less than a reshoot. Changes to the script or the brand world ripple through many shots and still take real time. At ${studio} the review rounds are counted into the quote, and each round of notes comes back as a new cut.`,
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} films={['Zytga7zsShI', 'LYA3Do3KEN0']}>
      <GuideHero
        eyebrow="AI vs traditional"
        title="AI video agency vs traditional production company"
        dek="For the marketing lead deciding whether this year's commercial or brand film gets shot or generated, and who to hire for it."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          A traditional production company films your commercial or brand film with a crew; an AI video agency generates
          every shot, so there are no crew days, locations or reshoots to pay for. {studio}, an AI film studio in{' '}
          {SITE.city}, makes commercials, brand films and company films for {brandBuyers}: every frame generated with
          AI, with the script, boards, edit, sound and grade done by people. Hire it as your AI production partner when
          the film runs under your brand, your team does not have the days to generate, rerun, edit and mix every shot,
          and everyone on screen can be generated.
        </p>
      </GuideAnswer>

      <GuideStudio title={`${studio} makes AI commercials and brand films with no shoot to book`}>
        <p>
          Every frame is generated, so the quote has no crew days, locations or reshoots in it, and people write, board,
          edit, mix and grade every film. See <Link href="/ai-commercial-production">AI commercial production</Link> and{' '}
          <Link href="/ai-brand-film-agency">AI brand films</Link>.
        </p>
      </GuideStudio>

      <GuideSection eyebrow="Tool, studio or crew" title="When should a brand hire an AI video production partner?">
        <p>
          A brand that wants an AI-made film can run a generator in-house, book a production company that films and adds
          AI shots, or hire an AI production partner that delivers the finished film. Hire the partner when all four of
          these are true:
        </p>
        <ul>
          <li>
            The film will run under your brand, in paid media or on your homepage, where a drifting face or a misspelled
            label costs more than the studio does.
          </li>
          <li>
            Nobody on your team has the days to generate, review and rerun every shot, then edit, mix and grade. A
            30-second spot can mean dozens of shots, and many need several generations before they hold.
          </li>
          <li>Everyone and everything on screen can be generated: the people, the places and the product.</li>
          <li>
            Claims, safety lines or product details have to pass legal, compliance or MLR review, and you want one company
            answerable for every frame.
          </li>
        </ul>
        <p>
          {studio} is that partner for commercials, brand films and company films. You approve the brief and the boards;
          people at {studio} write, generate, edit, mix and grade the film, and each round of review notes comes back as
          a new cut. Before you sign with any studio,{' '}
          <Link href="/ai-video-production-agencies">what to look for in an AI video production agency</Link> lists the
          checks, with how {studio} meets each one.
        </p>
        <p>
          About-us and company films are made the same way, with generated people, places and products telling the
          story; see <Link href="/ai-corporate-video-production">AI corporate video production</Link>.
        </p>

        <h3>Can AI replace a video production agency?</h3>
        <p>
          AI replaces the shoot, which means the crew, cameras, lights, locations and talent days. The rest of a
          production agency&apos;s job stays, and {studio} does all of it.
        </p>
        <GuideTable
          caption={`A production agency's jobs on a commercial or brand film, which of them a video generator does, and how ${studio} covers each one, from its own pipeline.`}
          head={['The agency job', 'Does a generator do it?', `What ${studio} does`]}
          rows={[
            ['Concept and script', 'It drafts; it cannot own the idea or answer for it', 'Writes the script from your approved brief'],
            ['Casting and look: palette, light, wardrobe', 'It offers options; someone has to lock them before the first shot', `Locks them in the brand-world stage, led by ${hundred.name}`],
            ['Filming every shot', 'Yes. This is the part AI replaces', 'Generates each shot against the boards and reruns the ones that fail'],
            ['Choosing the usable takes', 'No', 'Checks every take against its board and keeps only the ones that hold up'],
            ['Your product, logo and on-screen text', 'Not reliably: generated packaging and type drift', 'Sets them in the edit from your brand files'],
            ['Edit, sound mix, music licences, grade', 'Tools help; a person cuts and mixes', 'Cuts, mixes and grades the film, with licensed music and voice'],
            ['Legal or MLR review and the changes it asks for', 'No', 'Turns each round of notes into a new cut'],
          ]}
        />
        <p>
          {studio} does every row in the right-hand column, so your team approves the brief, the boards and the cuts and
          runs none of the generation. For a short brand video where the other option is a single freelancer, the{' '}
          <Link href="/comparison/freelance-vs-ai-video">AI effects or VFX freelancer comparison</Link> covers that
          choice.
        </p>

        <h3>Is it better to use AI or hire a production company?</h3>
        <p>
          For a film whose world can be made, such as a product in a place you could not afford to shoot, a concept or a
          lifestyle world, AI skips the crew days, locations and travel and lets you change shots late without rebooking
          anyone. An AI production partner such as {studio} also takes the generating, editing and mixing off your team,
          which is the part a generator subscription leaves with you.
        </p>

        <h3>When should a brand use AI video instead of traditional production?</h3>
        <p>
          When the subject can be made instead of recorded, when a shoot would spend most of the budget on crew days,
          locations and travel, and when the film needs many versions or late changes. One generated film can be cut into
          the aspect ratios and market versions each channel needs, and a new scene can be generated without a second
          shoot. {studio} makes those films for {brandBuyers}, and the{' '}
          <Link href="/guides/brands-using-ai-commercials">brands that have run AI commercials</Link> show which kinds of
          ad get made this way.
        </p>

        <h3>Should I use AI to produce a brand film instead of hiring a video production company?</h3>
        <p>
          Yes, when the story is about a world rather than particular people. Brand films built on mood, place and
          product, like the trail running film at the end of this page, can be generated whole. The brand world (palette,
          light, casting, camera language) has to be locked before generation, or a two-minute film drifts; at {studio},{' '}
          {hundred.name} leads that stage, and the rest of the process is in{' '}
          <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>. {studio}&apos;s brand film
          service is on <Link href="/ai-brand-film-agency">AI brand film production</Link>.
        </p>

        <h3>Should I use an AI video tool or hire an AI video production agency?</h3>
        <p>
          A tool is priced as a subscription, and the subscription is the small cost. Every take that comes back with a
          drifting face, a warped hand or a misspelled label is generated again, and someone still has to edit, mix, and
          set your logo and on-screen type from brand files, because generators do not hold them.
        </p>
        <GuideTable
          caption={`The two routes for a commercial or brand film made with AI, from ${studio}'s own pipeline.`}
          head={['', 'AI video tool, run in-house', studio]}
          rows={[
            ['What you pay', 'A monthly plan, plus the hours your staff spend running it', adPrice],
            ['Who writes prompts, reviews takes and reruns failures', 'Your staff', studio],
            ['Who edits, mixes and sets logo and type', 'Your editor', studio],
            ['Who fixes a wrong frame caught in legal or MLR review', 'You', `${studio}, which reruns the shot and sends a new cut`],
          ]}
        />
        <p>
          When those days have to be bought, compare {studio}&apos;s quote with an editor&apos;s day rate times the days,
          not with the subscription. Who owns what a tool generates is set by its terms;{' '}
          <Link href="/guides/who-owns-ai-video">who owns AI-generated video</Link> covers them.
        </p>

        <h3>How much does it cost to produce a 2-minute brand video with AI vs traditional production?</h3>
        <p>
          A filmed budget&apos;s crew, equipment, location and talent lines are paid by the day, so a two-minute cut from
          the same shoot days adds edit time and no crew days. An AI brand film is priced by its shots. At the same
          cutting pace, two minutes is four times the shots of a 30-second spot, and every shot has to keep the same face,
          wardrobe and light as the one before it, which is the slowest part of the work (
          <Link href="/guides/ai-video-character-consistency">character consistency in AI video</Link>). {filmPrice}, and
          length is one of the first things that moves the number.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Side by side" title="AI video vs traditional video production, line by line" alt>
        <GuideTable
          caption={`How a filmed production and ${studio} differ on a commercial or brand film, from the ${studio} pipeline and the usual traditional process. No turnaround figures: both depend on the brief and on your review rounds.`}
          head={['', 'Traditional production company', `${studio}, AI video agency`]}
          rows={[
            ['Where the footage comes from', 'Filmed with a crew, cameras and lights', 'Generated with AI, shot by shot, against approved boards'],
            ['What you pay for', 'Crew days, equipment, locations, talent, travel, then post-production', 'Script, boards, generation passes, edit, sound, grade and versions'],
            ['People on screen', 'Actors, your staff, real customers', 'Generated people, including AI presenters'],
            ['Your exact product', 'Filmed as it is', 'Generated from your product images, with the label, logo and type set in the edit from your files'],
            ['Changing a shot late', 'A reshoot: rebook crew, talent, location', 'Regenerate the shot and re-edit'],
            ['Versions and ratios', 'Cut from the footage you shot; new scenes need a new shoot', 'Cut from the film; new scenes can be generated'],
            ['Where it fails', 'Budget, weather, permits, the shot you could not afford', 'Faces across shots, hands, packaging, logos and text, which get the most passes and are fixed in the edit'],
          ]}
        />
        <p>
          {PRODUCTION.summary} None of the crew days, locations or travel in the left-hand column appear in a {studio}{' '}
          quote.
        </p>
      </GuideSection>

      <GuideSection id="cost" eyebrow="Cost" title="How much does AI video production cost compared to traditional video production?">
        <p>
          In the US, production companies bid commercials on the <a href={AICP_2019}>AICP bid form</a>, which the
          Association of Independent Commercial Producers revised in 2019 to put production and post-production on one
          form. Its sections run from prep and shoot crew, locations, props and wardrobe, studio and art department to
          equipment, director, talent, editorial, audio and finishing. An AI production drops the sections that pay for a
          shoot day (crew, locations, studio, equipment, props and wardrobe, and most talent when the people on screen are
          generated), keeps the director, editorial, audio, finishing and the licences for music and voice, and adds
          generation passes and a brand-world stage. The{' '}
          <Link href="/guides/commercial-production-budget-template">commercial production budget template</Link> shows,
          section by section, which lines go, stay or get added.
        </p>
        <p>
          {adPrice}. With no shoot lines in it, the number moves with length, the number of scenes, how exactly the
          product must be reproduced, versions and languages, and how many review rounds your legal or MLR team needs.
          The saving is largest on films that would need several locations, a big cast or a built set, and smallest on
          short films with many review rounds.
        </p>

        <h3>How much cheaper is AI video production vs an agency?</h3>
        <p>
          Published percentages measure different things. Before you put one in a budget, check what sits on the AI side:
          a software subscription, a batch of performance ad variants, or a finished film from a studio. Only the last
          compares like with like against a production company&apos;s finished film, and the bigger claims leave out what
          a marketing team pays for either way: the concept and script, reruns of the shots that fail, the edit, the
          sound mix, music and voice licences, and legal or MLR review. {studio} delivers the finished film, so compare
          its quote with a production company&apos;s bid line by line.
        </p>

        <h3>Is AI video cheaper than paying a video agency per video?</h3>
        <p>
          Per finished video, usually, because the agency&apos;s price carries the shoot days and an AI film has none. The gap
          narrows on short videos with heavy review, because the script, edit, mix, licences and review rounds cost about
          the same either way. At {studio} the cutdowns, aspect ratios and any new scenes come out of the same production,
          so a second version does not mean a second shoot.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Quality" title="Are AI-generated videos good enough?" alt>
        <p>
          Generated footage is strong at light, weather, landscapes, scale and camera moves that would need a crane, a
          drone team or a set build. It is still weak at the details a brand checks first: the same face across 20 shots,
          hands holding the product, the exact pack and label, logos and any text on screen.
        </p>
        <p>
          An AI agency earns its fee on those shots. At {studio} the casting and look are locked before generation starts,
          the product, faces and hands get the most generation passes, and the real logo, label and type are added in the
          edit from your brand files. The <Link href="/how-we-make-an-ai-brand-film">stages of an AI brand film</Link> show
          where each fix happens.
        </p>
        <GuideFilm
          id="Zytga7zsShI"
          caption={`Keen Footwear spec ad by ${studio} (spec work, not commissioned by Keen). The test for a product film: the shoe stays the same shoe in every shot.`}
        />
      </GuideSection>

      <GuideSection eyebrow="Which briefs" title={`The briefs ${studio} makes with every frame generated`}>
        <GuideTable
          caption={`Common brand briefs and how ${studio} makes each one. Each links to the page for that kind of film.`}
          head={['The brief', `How ${studio} makes it`]}
          rows={[
            [<Link key="ad" href="/ai-commercial-production">Product launch commercial, no shoot budget</Link>, 'The product is placed in the world the idea needs, and every cutdown comes from the same film.'],
            [<Link key="bf" href="/ai-brand-film-agency">Brand film about what the company stands for</Link>, 'A made world carries the story, with the palette, light, casting and camera language locked before generation.'],
            [<Link key="co" href="/ai-corporate-video-production">About-us or company film</Link>, 'The story is told with generated people, places and products.'],
            [<Link key="ugc" href="/ai-ugc-reels">Creator-style ads for paid social</Link>, 'UGC-style ads with generated creators, cut for each placement.'],
            [<Link key="pv" href="/ai-product-videos">Product film or stills</Link>, 'The product gets the most generation passes, and the real label and logo are set in the edit from your files.'],
            [<Link key="hc" href="/ai-video-production-healthcare">Pharma, pharmacy or medical brand film</Link>, 'Generated people and settings, with the review rounds your MLR team needs counted into the quote.'],
          ]}
        />
      </GuideSection>

      <GuideSection eyebrow="Made, not recorded" title="What an all-AI film looks like" alt>
        <p>
          The film below has several runners, trails and changes of light, and no location shoot. A traditional version
          would have needed a crew in several places over several days.
        </p>
        <GuideFilm
          id="LYA3Do3KEN0"
          caption={`The Love of Trail Running, an original ${studio} film (not client work). Every shot generated.`}
        />
      </GuideSection>

      <GuideFit
        title={`Why brands hire ${studio} instead of booking a shoot`}
        hire={[
          'A brand manager whose launch film needs a world the budget could never pay to shoot.',
          'A marketing lead who needs the commercial in every aspect ratio and wants to change shots after the first review without a reshoot.',
          'A pharma, pharmacy, lab or medical marketer with an MLR calendar and no budget for a shoot.',
          'A team that has tried a generator in-house and wants the reruns, edit and mix off its desk.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-video-production-agencies', title: 'AI video production agency', note: `What ${studio} makes, how, and what to check before you hire any studio.` },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'Ads for TV, streaming, web and social, with every frame generated.' },
          { href: '/ai-brand-film-agency', title: 'AI brand films', note: 'A story-driven film about what your brand stands for.' },
          { href: '/guides/commercial-production-budget-template', title: 'Commercial production budget template', note: 'Which lines of a filmed budget an AI production drops, keeps or adds.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'The pipeline, stage by stage.' },
        ]}
      />

      <GuideCta />
    </Guide>
  )
}
