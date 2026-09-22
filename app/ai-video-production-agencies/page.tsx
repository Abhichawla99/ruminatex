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
  path: '/ai-video-production-agencies',
  title: 'AI Video Production Agency: How to Hire One',
  description:
    'What an AI video production agency does, how it differs from an AI video tool, what drives the price, what still breaks in AI footage, who owns the result, and the questions to ask before you sign.',
  published: '2026-03-08',
  updated: '2026-09-22',
  keywords: [
    'ai video production agency',
    'ai video production company',
    'ai video agency',
    'ai video production companies',
    'ai video production agencies',
    'best ai video production agency',
    'ai video agency pricing',
  ],
}

const studio = SITE.name
const offerList = OFFERS.map((o) => o.name.toLowerCase()).join(', ')
const hundred = RELATED.find((r) => r.name === '100creatives')!

const FAQS = [
  {
    q: 'What does an AI video production agency do?',
    a: 'An AI video production agency takes a brief and delivers a finished film: concept, script, storyboards, the generated shots, edit, sound, color grade and the cuts for each platform. The client never touches an AI tool. The difference from a traditional production company is that the footage is generated instead of filmed, so there is no crew, set or location.',
  },
  {
    q: 'How much does it cost to produce an AI video with an agency?',
    a: `Agencies price by the film, and the price moves with length, the number of distinct scenes, how exactly a real product or person has to be reproduced, the number of versions and languages, and how many review rounds your legal or medical team needs. ${studio} quotes each project from the brief and does not publish a price list. A self-serve AI tool costs far less, but you do the directing, generating and editing yourself.`,
  },
  {
    q: 'What is the difference between an AI video agency and an AI video tool?',
    a: 'A tool such as Runway, Veo, Kling, Sora, HeyGen or Synthesia gives you a generator and leaves the film to you. An agency gives you the finished film and takes responsibility for it: it writes, directs, reruns the shots that fail, edits, adds sound and grades. Hire a tool if you have an editor with time; hire an agency if you need a finished commercial or brand film on a deadline.',
  },
  {
    q: 'Who owns a video made by an AI video production agency?',
    a: 'Your contract decides what the agency transfers to you, so it should assign the final film and license any music and voice. Copyright itself is less settled: the US Copyright Office concluded in January 2025 that prompts alone do not make someone the author of AI output, while human work such as the script, the selection and arrangement of shots, and the edit can be protected. This is not legal advice; ask your own lawyer.',
  },
  {
    q: 'Will an AI-made commercial look like AI?',
    a: 'It can, and the weak points are known: faces that drift between shots, hands, product packaging, logos, on-screen text and continuity from one shot to the next. A good agency regenerates those shots until they hold, and composites the real logo, label and type in the edit instead of trusting the generator to draw them. Ask to see those shots in their reel before you hire.',
  },
  {
    q: 'When should a company not hire an AI video production agency?',
    a: 'When the film needs real people on camera (your own staff, a real doctor, a customer speaking for themselves), when it is documentary or event coverage, when the budget only fits a self-serve tool, or when your audience is likely to reject visibly AI-made content. A traditional production company or a tool will serve those better.',
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} films={['LYA3Do3KEN0', 'Zytga7zsShI']}>
      <GuideHero
        eyebrow="Hiring an AI video production agency"
        title="AI video production agency: what you are hiring"
        dek="For the marketing lead, founder or agency producer who has decided to try AI for a commercial or brand film and needs to pick who makes it."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          An AI video production agency writes, directs and delivers a finished film whose footage is generated with AI
          instead of shot with a crew. You are paying for the judgment around the generator: the concept, the boards, the
          shots rerun until faces, hands and your product hold up, the edit, sound and grade. Hire one when you need a
          finished commercial or brand film and have no time or editor to make it with a tool yourself. Hire someone else
          when the film needs real people on camera.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="Three kinds of company" title="Agency, tool or production company">
        <p>
          The search results for &quot;ai video production company&quot; mix three different things, and they are priced and
          staffed differently.
        </p>
        <GuideTable
          caption="How the three options differ for a brand buyer. Compiled by Ruminate X from the companies ranking for these searches, September 2026."
          head={['', 'AI video tool', 'AI video production agency', 'Production company that added AI']}
          rows={[
            ['Examples', 'Runway, Veo, Kling, Sora, HeyGen, Synthesia', `Studios such as ${studio}`, 'Traditional crews offering AI shots or AI post'],
            ['What you get', 'A generator and a subscription', 'A finished film, cut for each platform', 'A shoot, with some shots generated or extended'],
            ['Who directs', 'You', 'The agency', 'The production company'],
            ['Real people on camera', 'Avatars only', 'No, or disclosed AI presenters', 'Yes'],
            ['Where it fits', 'Volume social, drafts, internal video', 'Commercials and brand films without a shoot', 'Films that need real people or places'],
          ]}
        />
        <p>
          {PRODUCTION.summary} That makes {studio} the middle column: it makes {offerList}.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The work" title="What an AI video agency does that a generator does not" alt>
        <p>
          A generator returns a few seconds of footage per prompt, and many takes are unusable. The agency&apos;s job is
          everything that turns a pile of takes into a film a brand can air. At {studio} the order is fixed:
        </p>
        <ol>
          <li>
            <strong>Brief.</strong> The product, the audience, the one message and where the film will run. Nothing is
            generated until the brief is approved.
          </li>
          <li>
            <strong>Brand world.</strong> Palette, light, texture, camera language and casting, locked before the first
            frame so shot 40 matches shot 4. <a href={hundred.url}>{hundred.name}</a>, {hundred.role}, leads this stage.
          </li>
          <li>
            <strong>Script and boards.</strong> Every shot gets framing, movement and duration on paper. Most of the
            quality is decided here.
          </li>
          <li>
            <strong>Generation passes.</strong> Each shot is generated, checked against the board and regenerated.
            Faces, hands, product details and brand colors get the most passes.
          </li>
          <li>
            <strong>Edit, sound, grade.</strong> The takes are cut to the script, then sound, music and voice go in and
            one grade pulls the shots into one film.
          </li>
          <li>
            <strong>Delivery.</strong> A master and the cuts each platform needs.
          </li>
        </ol>
        <p>
          The full pipeline, stage by stage, is on{' '}
          <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The weak points" title="What still breaks in AI footage, and what a good agency does about it">
        <GuideTable
          caption="Where generated footage fails most often, and the fix to expect from an agency. These are the same points the Ruminate X pipeline gives extra generation passes."
          head={['Problem', 'What you see', 'What the agency should do']}
          rows={[
            ['Faces', 'A character looks slightly different from shot to shot', 'Lock the character in the brand-world stage and regenerate every shot that drifts'],
            ['Hands', 'Extra fingers, hands that merge with the product', 'Board around hands where possible; rerun the rest'],
            ['Your product and packaging', 'A label that is almost right, a bottle the wrong shape', 'Start from real product images and correct or composite the pack in the edit'],
            ['Logos and on-screen text', 'Warped letters, invented words', 'Add the real logo and all type in the edit, never trust the generator to draw them'],
            ['Continuity', 'Light, wardrobe or props change between cuts', 'Fix them in the boards and the grade; regenerate what cannot be graded out'],
          ]}
        />
        <p>
          When you review an agency&apos;s reel, look for exactly these shots. A reel of landscapes and slow pushes says
          little about how they will handle your pack shot.
        </p>
        <GuideFilm
          id="LYA3Do3KEN0"
          caption="The Love of Trail Running, an original Ruminate X film (not client work). Watch the runners' faces and footing across cuts."
        />
      </GuideSection>

      <GuideSection eyebrow="Price" title="AI video agency pricing: what moves the number" alt>
        <p>
          Agencies in this category rarely publish price lists, and {studio} quotes each film from the brief. The number
          moves with:
        </p>
        <ul>
          <li>length, and how many distinct scenes and characters the film has;</li>
          <li>how exactly a real product, place or person has to be reproduced;</li>
          <li>versions: cutdowns, aspect ratios, languages, A/B hooks;</li>
          <li>review rounds, which run longer in pharma, medical and financial work where MLR or compliance signs off;</li>
          <li>music and voice licensing.</li>
        </ul>
        <p>
          If a quote is far below the others, ask what it leaves out. The usual answers are the brand-world stage, the
          reruns on faces and product, and a real sound mix. For a side-by-side with a traditional shoot, read{' '}
          <Link href="/comparison/ai-agency-vs-traditional-agency">AI agency vs traditional agency</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Rights" title="Who owns the film">
        <p>
          Two separate questions. First, what the contract transfers: the final film, the project files, and licenses for
          music, voice and any stock. Get that in writing. Second, whether copyright protects the film at all. The{' '}
          <a href="https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf">
            US Copyright Office&apos;s January 2025 report on copyrightability
          </a>{' '}
          concluded that prompts alone do not give enough human control to make someone the author of AI output, and that
          human work visible in the result (a script, the creative selection and arrangement of shots, creative edits) can
          be protected. Checked September 2026.
        </p>
        <p>
          This is not legal advice. Your own lawyer, and in regulated industries your MLR or compliance team, decides what
          the film can say and how it is used.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Before you sign" title="Seven questions to ask an AI video production company" alt>
        <ol>
          <li>Show me a shot from your reel where a face turns, a hand holds a product, and a logo is on screen.</li>
          <li>Which parts of the film are made by people (script, boards, edit, sound) and which are generated?</li>
          <li>Do the licenses on the AI models you use allow commercial use of the output?</li>
          <li>What happens when a shot will not come out right: do you regenerate, composite or change the board?</li>
          <li>What do you deliver: master, cutdowns, aspect ratios, captions, project files?</li>
          <li>How many review rounds are included, and how do you handle legal or medical review?</li>
          <li>Will the film be labelled as AI-made where the platform or the law requires it, and who does that?</li>
        </ol>
        <GuideFilm
          id="Zytga7zsShI"
          caption="Keen Footwear spec ad by Ruminate X (spec work, not commissioned). A product film where the shoe has to stay the same shoe in every shot."
        />
      </GuideSection>

      <GuideFit
        title="Is Ruminate X the right AI video agency for you?"
        hire={[
          'A brand or marketing manager who needs a commercial or brand film without a shoot.',
          'A pharma, pharmacy, lab or medical marketer who needs a cinematic film and has an MLR process for the claims.',
          'An agency producer who needs an AI production partner for a client film.',
          'A founder who wants an about-us or company film that looks like a film.',
        ]}
        instead={[
          'Your film needs your own staff, a real doctor or a real customer on camera: hire a traditional production company.',
          'You need documentary or event coverage: hire a crew.',
          'Your budget fits a subscription, not a studio: use Runway, Veo, Kling, Sora, HeyGen or Synthesia yourself.',
          'Your audience is likely to reject visibly AI-made content: film it.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'Each stage of the pipeline, from brief to delivery.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'If what you need is an ad for TV, streaming or social.' },
          { href: '/ai-brand-film-agency', title: 'AI brand films', note: 'If what you need is a film about what your brand stands for.' },
          { href: '/ai-video-production-healthcare', title: 'AI video for healthcare', note: 'For pharma, pharmacy, lab and medical marketers.' },
          { href: '/work', title: 'The work', note: 'Films Ruminate X has made.' },
        ]}
      />

      <GuideCta />
    </Guide>
  )
}
