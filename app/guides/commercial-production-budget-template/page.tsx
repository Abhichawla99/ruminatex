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
import { PRODUCTION, SITE } from '@/lib/seo/facts'
import { AGENCY_RENDERS, OVERS, STILLS_MATH } from '@/lib/seo/overs'

const PAGE = {
  path: '/guides/commercial-production-budget-template',
  title: 'Commercial Production Budget Template for AI',
  description:
    'A commercial production budget template for an AI-made film plus campaign stills: the sections of the standard AICP bid form, which ones an AI production drops, keeps or adds, published prices for each line, and a worked example.',
  published: '2026-09-24',
  updated: '2026-09-24',
  keywords: [
    'commercial production budget template',
    'commercial production budget',
    'commercial production cost',
    'how much does a commercial cost to make',
    'tv commercial production budget template',
    'aicp bid form',
    'ai commercial budget',
  ],
}

const studio = SITE.name
const AICP_2019 = 'https://aicp.com/news-roundup/news-from-aicp/aicp-introduces-updated-and-revised-bid-form'
const WRAPBOOK = 'https://www.wrapbook.com/blog/how-to-fill-out-aicp-bid-form'
const DMAK = 'https://dmakproductions.com/blog/tv-commercial-production/'
const VERSELY = 'https://www.versely.studio/blog/how-much-does-an-ai-commercial-cost'
const KALSHI = 'https://tech.yahoo.com/ai/articles/ai-generated-ad-aired-during-150507375.html'
const GEMINI_PRICING = 'https://ai.google.dev/gemini-api/docs/pricing'
const SOUNDSTRIPE = 'https://www.soundstripe.com/library/pricing'
const EPIDEMIC_PRO = 'https://www.epidemicsound.com/our-plans/pro-plan/'
const ELEVENLABS = 'https://elevenlabs.io/pricing'

const FAQS = [
  {
    q: 'What is a commercial production budget template?',
    a: "In the US the standard one is the AICP bid form from the Association of Independent Commercial Producers. Its 2019 revision put production and post-production on one form, in lettered sections from A to X: crew, locations, studio, art department, equipment, director, talent, usage, editorial, social versions, audio, finishing and visual effects. Production companies bid on it, so agencies and brands can compare bids line by line.",
  },
  {
    q: 'How much does it cost to make a commercial?',
    a: 'Filmed TV commercials are published at about USD 5,000 to 15,000 for a basic local spot, 15,000 to 50,000 for a professional 30-second spot and 150,000 to 500,000 or more for national work, before airtime (D-MAK Productions, June 2026). AI studios publish lower figures, such as USD 2,500 and up for a 15 to 60 second hero spot (ArcaneWiz, via Versely, September 2026). Ruminate X quotes each commercial from the brief.',
  },
  {
    q: 'Which budget lines does an AI commercial not need?',
    a: 'The lines that pay for a shoot day: shoot crew, location fees and permits, studio rental, camera and lighting rental, props and wardrobe bought for the set, physical media, and most talent fees when the people on screen are generated. The creative, direction, editorial, sound, finishing and versioning lines stay.',
  },
  {
    q: 'What new lines does an AI commercial add?',
    a: 'Generation fees for video takes and for stills or first frames, billed per second or per image by the model makers; a brand-world stage with character sheets and approved key frames; more review rounds, because generated shots are checked one by one against the boards and the product; and a rights check on the models, music and voice used.',
  },
  {
    q: 'How much does music licensing cost for a commercial?',
    a: "It depends on where the ad runs. Soundstripe's single-song licenses are $199 for paid social and digital ads, $399 and up when out-of-home is added, and $1,249 and up for TV, radio and connected TV with national distribution for three months (Soundstripe, September 2026). Subscription plans often stop short of TV: Epidemic Sound's Pro plan covers digital ads and excludes TV ads.",
  },
  {
    q: 'Does Ruminate X publish its prices?',
    a: `No. ${SITE.name} quotes each brand film and commercial from the brief, because the price depends on length, the number of scenes, how exactly the product has to be reproduced, versions and review rounds. Send the film type, length, channels and deadline through the contact page for a quote.`,
  },
]

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Guides', path: '/guides' },
  { name: PAGE.title, path: PAGE.path },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} trail={TRAIL}>
      <GuideHero
        eyebrow="Budget template"
        title="A commercial production budget template for an AI film and its stills"
        dek="For the marketing lead or agency producer who has a traditional commercial budget template, is budgeting an AI-made commercial and the campaign photos around it, and needs to know which lines still apply."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          An AI commercial keeps the budget lines that pay for ideas and finishing: creative, direction, editorial, music,
          sound, finishing and versions. It drops the lines that pay for a shoot day: crew, locations, studio, equipment,
          props, wardrobe and most talent fees. It adds lines for generating video and stills, for the extra review
          generated footage needs, and for checking the rights on models, music and voice. Media, the cost of airing the
          ad, stays a separate budget.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="The standard form" title="The AICP bid form, read for an AI production">
        <p>
          US production companies bid commercials on the AICP bid form. Its{' '}
          <a href={AICP_2019} rel="noopener">2019 revision</a> put production and post-production on one form, with
          sections lettered A to X; sections A to N stayed essentially unchanged, and Q to W took over the post-production
          sections. Here is what happens to each section when every frame is generated:
        </p>
        <GuideTable
          caption={
            <>
              Section names as listed in <a href={WRAPBOOK} rel="noopener">Wrapbook&apos;s guide to the AICP bid form</a>{' '}
              (May 2020); structure from AICP&apos;s December 2019 announcement. The right-hand column is our reading of an
              AI-only production, where there is no shoot.
            </>
          }
          head={['AICP section', 'Pays for', 'In an AI commercial']}
          rows={[
            ['A, B: Prep crew, shoot crew', 'The people on set and before it', 'Dropped. The studio’s creative and generation team replaces them'],
            ['C, D: Prep and wrap, locations', 'Scouting, permits, location fees', 'Dropped'],
            ['E: Props, wardrobe and animals', 'Everything bought or rented for the set', 'Dropped, except shipping the product for reference photos'],
            ['F: Studio costs', 'Stage and studio rental', 'Dropped'],
            ['G, H: Art department', 'Set design and build', 'Becomes the brand-world stage: world bible, character sheets, key frames'],
            ['I, J: Equipment, media', 'Cameras, lights, drives', 'Dropped. Generation fees take their place'],
            ['L: Director’s fees', 'The director', 'Kept. Someone still directs every shot'],
            ['M, N: Talent, talent expenses', 'Actors and their costs', 'Mostly dropped for generated people; kept for a real person’s likeness or voice'],
            ['P: Usage', 'Where and how long the ad may run', 'Kept, for music, voice and any real likeness'],
            ['Q to W: Editorial, social versions, audio, finishing', 'Post-production', 'Kept in full'],
            ['X: Visual effects, design, animation', 'Design, animation, VFX and interactive studios that bid in their own format', 'Where an AI studio’s own-format quote fits'],
          ]}
        />
      </GuideSection>

      <GuideSection eyebrow="The template" title="An AI campaign budget, line by line" alt>
        <p>
          Copy these lines into your own sheet. The first column is the line; the last is a published price where one
          exists, so you can sanity-check a quote.
        </p>
        <GuideTable
          caption={
            <>
              Prices from <a href={GEMINI_PRICING} rel="noopener">Google&apos;s Gemini API pricing</a>,{' '}
              <a href={SOUNDSTRIPE} rel="noopener">Soundstripe</a>, <a href={EPIDEMIC_PRO} rel="noopener">Epidemic Sound</a>{' '}
              and <a href={ELEVENLABS} rel="noopener">ElevenLabs</a>, checked September 2026, in USD. Studio lines are
              quoted per project.
            </>
          }
          head={['Line', 'What it pays for', 'How it is priced', 'Published reference']}
          rows={[
            ['Creative and script', 'The idea, script, beat sheet', 'Studio fee', 'Quoted'],
            ['Brand world and casting', 'World bible, character sheets, approved key frames', 'Studio fee', 'Quoted'],
            ['Video generation', 'Every take, kept or thrown away', 'Per second of video', 'Veo 3.1 $0.40 a second with audio at 1080p; Veo 3.1 Fast $0.12; Gemini Omni Flash about $0.10 at 720p'],
            ['Stills and first frames', 'Key visual, campaign photos, frames to animate', 'Per image, plus any tool plan', 'Nano Banana 2 $0.067 per 1K image; Nano Banana Pro $0.134'],
            ['Voice', 'Voiceover', 'AI voice plan or a voice actor', 'ElevenLabs Starter $6 a month includes a commercial license; the free plan does not'],
            ['Music', 'A licensed track', 'Per use', 'Soundstripe: $199 for paid social and digital ads; $1,249 and up for TV, radio and connected TV'],
            ['Edit, sound, grade', 'Cut, mix, one grade across every shot', 'Studio fee', 'Quoted'],
            ['Versions', 'Cutdowns, ratios, languages, captions', 'Per version', 'Quoted'],
            ['Review rounds', 'Brand, legal, MLR sign-off', 'Time', 'Set the number of rounds in the contract'],
            ['Rights check', 'Model terms, music, voice, likeness', 'Time', 'Ask for it in writing'],
            ['Media', 'Airtime and paid placement', 'Separate budget', 'Not a production line'],
          ]}
        />
      </GuideSection>

      <GuideSection eyebrow="The market" title="What commercials cost to make, filmed and with AI">
        <p>
          Published ranges help you tell a normal quote from an odd one. For filmed TV commercials,{' '}
          <a href={DMAK} rel="noopener">D-MAK Productions</a> (June 2026) publishes industry ranges of about USD 5,000 to
          15,000 for a basic local spot, 15,000 to 50,000 for a polished 30-second spot, 50,000 to 150,000 or more for
          larger campaigns with actors and several locations, and 150,000 to 500,000 or more for national work, all before
          airtime.
        </p>
        <p>
          AI studios publish lower figures. <a href={VERSELY} rel="noopener">Versely&apos;s September 2026 compilation</a>{' '}
          lists USD 2,500 and up for a 15 to 60 second hero spot (ArcaneWiz), USD 3,500 and up for a 60-second cinematic AI
          film (Gisteo), GBP 15,000 to 45,000 per broadcast asset in one market (Myth Labs), and larger spots around EUR
          200,000 (The Dor Brothers). One low-cost example is the Kalshi ad that aired during the 2025 NBA Finals:
          about $2,000 and two days, and 300 to 400 generations for 15 usable clips (
          <a href={KALSHI} rel="noopener">Mashable, June 2025</a>).
        </p>
        <p>
          {PRODUCTION.summary} {studio} quotes each commercial from the brief and does not publish a price list. The four
          price levels for AI video, and what each buys, are in{' '}
          <Link href="/blog/how-much-does-ai-video-production-cost">how much AI video production costs</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="An example" title="A worked example: one film, its cutdowns and 30 stills" alt>
        <p>
          A made-up brand launches one product with a 30-second film, a 15 and a 6-second cutdown in 16:9 and 9:16, and{' '}
          {STILLS_MATH.setSize} campaign stills. The studio lines are quotes, so they stay blank here. The lines with
          published prices look like this:
        </p>
        <GuideTable
          caption="Every assumption is in the middle column. Prices checked September 2026, in USD. The Kalshi ratio is one director's published figure, used here as an example."
          head={['Line', 'Assumption', 'Money out']}
          rows={[
            ['Video generation, 16:9', '12 kept shots; 25 takes per kept shot, near the Kalshi ratio; 8-second takes at 1080p = 2,400 seconds', '$288 on Veo 3.1 Fast; $960 on Veo 3.1'],
            ['Video generation, 9:16', 'The same 12 shots generated again in 9:16 instead of cropped', '$288 to $960 again'],
            ['Stills', `${STILLS_MATH.setSize} kept stills at 3 to 14 renders each, one month of Overs Pro, planning`, `${STILLS_MATH.oversLow} to ${STILLS_MATH.oversHigh}`],
            ['Music', 'One track for paid social and digital ads', '$199'],
            ['Music, if it airs on TV', 'All Media license, three months national', '$1,249 and up'],
            ['Voice', 'AI voiceover with a commercial license', '$6 a month and up'],
            ['Creative, direction, edit, sound, grade, versions, review', 'The studio’s quote', 'Quoted'],
          ]}
        />
        <p>
          The published lines add up to a few hundred to a few thousand dollars. The rest of the budget is people:
          the idea, the direction, the takes someone chooses and the ones they throw away, the edit and the review rounds.
          That is where AI commercial quotes differ, and it is the line to ask a studio to explain.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The stills line" title="Where Overs comes in">
        <p>
          The stills line is where the numbers move most, and it is the line {OVERS.name} was built for. {OVERS.name},{' '}
          {OVERS.relation}, is {OVERS.plain}. It grew out of {OVERS.origin}.
        </p>
        <p>
          Here is the {STILLS_MATH.setSize}-photo set from the example, priced three ways. At soona&apos;s published prices
          it comes to {STILLS_MATH.studio}; with a hired crew for one day, {STILLS_MATH.crew} before usage fees, a
          producer or props. Both figures are from{' '}
          <a href={STILLS_MATH.shootCostGuide} rel="noopener">
            Overs&apos; guide to what a product photo shoot costs
          </a>
          , for 10 white-background, 10 lifestyle and 10 on-model photos. On {OVERS.name}, the same set comes to about{' '}
          {STILLS_MATH.oversLow} to {STILLS_MATH.oversHigh}: one month of Pro at {OVERS.proPerMonth}, about 20 cents of
          planning for each of three runs, and model fees for {STILLS_MATH.lowRenders} renders on Nano Banana 2 at the low
          end (3 per usable photo) or {STILLS_MATH.highRenders} on GPT Image 2 at the high end (14 per usable photo). Those
          render counts are the range from {AGENCY_RENDERS.campaigns} campaigns 100creatives made in{' '}
          {AGENCY_RENDERS.year}.
        </p>
        <p>
          What the number leaves out is someone&apos;s time: at 8 renders per usable photo, choosing 30 means looking at
          about 240 images. And a real shoot still wins for some shots, such as fine label text on a reflective bottle.
          {' '}{OVERS.name} shows the shot plan and an estimated cost before anything renders, so the budget line is known
          before the money is spent. The free plan makes {OVERS.freePhotosPerMonth} photos a month; Pro is{' '}
          {OVERS.proPerMonth} a month and Team {OVERS.teamPerMonth} (
          <a href={OVERS.pricingUrl} rel="noopener">
            Overs pricing
          </a>
          , September 2026), and on every plan the AI is billed to your own OpenRouter key with no markup from{' '}
          {OVERS.name}. Price your stills line on{' '}
          <a href={OVERS.url} rel="noopener">
            Overs&apos; free plan at www.overs.studio
          </a>{' '}
          before you sign a shoot.
        </p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X take this budget?"
        hire={[
          'A marketing lead with a budget for a finished commercial, who wants the shoot lines gone and the creative lines kept.',
          'An agency producer who needs an AI production partner to bid a client spot line by line.',
          'A brand that needs the film and the campaign stills from one world, on one budget.',
        ]}
        instead={[
          'The budget covers only model fees: make it in-house with a self-serve tool, and count your own team’s hours.',
          'The spot needs actors, a real location or a product demonstration filmed for real: bid it as a shoot on the AICP form.',
          'You need only stills: a photo studio, or Overs, costs less than a film studio.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/blog/how-much-does-ai-video-production-cost', title: 'How much AI video production costs', note: 'Four price levels, from tools to studios, with sources.' },
          { href: '/guides/ad-campaign-deliverables', title: 'Ad campaign deliverables', note: 'The versions and stills that decide the size of the quote.' },
          { href: '/guides/ai-campaign-stack', title: 'The AI campaign stack', note: 'The tools behind each budget line, with prices.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'What an AI commercial delivers and what still breaks.' },
          { href: '/comparison/ai-agency-vs-traditional-agency', title: 'AI studio vs traditional production', note: 'The two compared line by line.' },
        ]}
      />

      <GuideCta title="Send the budget you have" body="Send the brief, the channels, the versions you need and the budget range, and get a quote line by line." />
    </Guide>
  )
}
