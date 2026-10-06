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
  updated: '2026-10-03',
  keywords: [
    'ai video production agency',
    'ai video production company',
    'ai video agency',
    'ai media production company',
    'ai video production companies',
    'ai video production services',
    'ai media production agency',
    'ai video production agencies',
    'best ai video production agency',
    'ai video agency pricing',
    'hire ai-native production house for campaigns',
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
    q: 'What is an AI media production company?',
    a: `It is another name for an AI video production company or AI production studio: a company that delivers finished video made partly or wholly with generative AI. The label does not tell you how much of the film is generated, so ask whether the company also films, who writes and edits, and what you receive at the end. ${studio} generates every frame and does no filming.`,
  },
  {
    q: 'What are some good AI video production companies?',
    a: `It depends on whether your film needs real people on camera. AI-native studios such as Secret Level, The Dor Brothers and 351 Studio generate the footage. Production companies such as Synima, American Movie Company and Tiger House Films film and also work with AI. ${studio} is an AI-only studio in ${SITE.city}. Judge any of them by a shot in their reel where a face turns, a hand holds a product and a logo is on screen.`,
  },
  {
    q: 'How do I hire an AI-native production house for campaigns?',
    a: `Brief it on everything the campaign needs: the hero film, the cutdowns and aspect ratios for each channel, any stills, the markets and languages, and how many review rounds your legal or medical team needs. An AI-native production house generates the footage instead of filming it, so ask to see a campaign in its reel where the same character, product and logo hold across every cut. ${studio} is an AI-native studio in ${SITE.city}; it quotes campaigns from the brief.`,
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
          An AI video production agency, also sold as an AI media production company or AI video production services, writes, directs and delivers a finished film whose footage is generated with AI
          instead of shot with a crew. You are paying for the judgment around the generator: the concept, the boards, the
          shots rerun until faces, hands and your product hold up, the edit, sound and grade. Hire one when you need a
          finished commercial or <Link href="/ai-brand-film-agency">brand film</Link> and have no time or editor to make it with a tool yourself. Hire someone else
          when the film needs real people on camera. If you are looking for an{' '}
          <Link href="/ai-video-production-enterprise">AI corporate video production company</Link> for company films,
          that page sets out which ones AI can make and which need your staff on camera. If what
          you need is an ad, <Link href="/ai-commercial-production">AI commercial production</Link> covers how to choose
          an AI commercial production company and what the ad costs.
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
        <h3>The companies you will find when you search</h3>
        <p>
          Searches for an AI media production company, an AI production studio or AI video production services return
          the same mix. These are the companies Google US showed on the first page for &quot;ai media production
          company&quot; on October 2, 2026, sorted by kind and described from their own sites. We compete with all of them,
          so read the table as a map of the options.
        </p>
        <GuideTable
          caption="Each company as it describes itself on its own site, read October 2026. Sorted by kind of company, not by quality."
          head={['Company', 'Kind', 'What it says it makes']}
          rows={[
            ['Secret Level', 'AI-native studio', 'Films, series and brand worlds; its site shows work for Coca-Cola and Raising Cane\'s'],
            ['The Dor Brothers', 'AI-native studio', 'Music videos, commercials, viral videos and films'],
            ['351 Studio', 'AI video agency', 'Marketing videos, brand stories, product explainers, social content and commercials, plus AI post-production'],
            [studio, 'AI-only studio', `${offerList}; based in ${SITE.city}`],
            ['Synima', 'Production company: traditional, hybrid and AI', 'Full-service production, with offices in London, New York, Los Angeles and Amsterdam'],
            ['American Movie Company', 'New York production company that added AI', 'AI video alongside filmed production; says most AI projects are delivered in 7 to 21 days'],
            ['Tiger House Films', 'Los Angeles production company with an AI workflow', 'Commercial content for brands and agencies, filmed and AI-driven'],
          ]}
        />
        <p>
          If your film needs real people on camera, start with the production companies that also film. If no one has to
          appear and you want the film finished for you, compare the AI-native studios on the seven questions further
          down. Listicles such as{' '}
          <a href="https://www.superside.com/blog/ai-video-production-companies">Superside&apos;s list of AI video production companies</a>{' '}
          mix studios with self-serve tools such as Runway, Colossyan and Animoto, so check which kind each entry is before you
          shortlist it. Whether to hire anyone at all, or make the film yourself, is on{' '}
          <Link href="/comparison/ai-agency-vs-traditional-agency">AI video agency vs traditional production</Link>.
        </p>
        <p>
          If you are filming a commercial anyway and want AI for a set extension, a crowd or a product effect, you need
          the right-hand column: a production company or VFX house that films the plates and adds the AI shots in post.
          Our commercial page explains where{' '}
          <Link href="/ai-commercial-production">AI VFX for commercial production</Link> ends and a fully generated
          commercial begins.
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
          little about how they will handle your pack shot. How a studio keeps one face steady across a film is in our
          guide to <Link href="/guides/ai-video-character-consistency">AI video character consistency</Link>. If you are
          hiring in Canada, our page on <Link href="/markets/ai-video-production-canada">AI video production in Calgary
          and Canada</Link> covers Canadian prices, the Quebec French rule and ad preclearance.
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
          <li>
            review rounds, which run longer in{' '}
            <Link href="/ai-video-production-healthcare">pharma and medical work</Link> and financial work, where MLR or
            compliance signs off;
          </li>
          <li>music and voice licensing.</li>
        </ul>
        <p>
          If a quote is far below the others, ask what it leaves out. The usual answers are the brand-world stage, the
          reruns on faces and product, and a real sound mix. Published prices at each level, from self-serve tools to
          broadcast studios, are in <Link href="/blog/how-much-does-ai-video-production-cost">how much AI video production
          costs</Link>, including how agencies charge: per video, per campaign or by the month. For a side-by-side with a traditional shoot, read{' '}
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
          be protected. Checked September 2026. What the video tools&apos; own terms say, and the ownership clauses to
          ask for, are in <Link href="/guides/who-owns-ai-video">who owns an AI video</Link>.
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
          { href: '/guides', title: 'Guides for brands buying AI film', note: 'Budgets, deliverables, product accuracy and quality control, one question per guide.' },
        ]}
      />

      <GuideCta />
    </Guide>
  )
}
