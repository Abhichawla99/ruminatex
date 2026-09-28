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
import { PRODUCTION, SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/comparison/ai-agency-vs-traditional-agency',
  title: 'AI Video Agency vs Traditional Production',
  description:
    'An AI video agency against a traditional production company for a brand film or commercial: what you pay for, what changes when you need a revision, where AI footage still fails, and which one to hire for which job.',
  published: '2026-03-08',
  updated: '2026-09-28',
  keywords: [
    'ai video vs traditional video',
    'how much cheaper is ai video production vs agency',
    'ai video agency pricing',
    'ai video agency vs traditional agency',
    'ai vs traditional video production',
    'benefits of ai video platforms over professional video production agencies',
    'will videography be replaced by ai',
    'are ai-generated videos good',
  ],
}

const studio = SITE.name
const LEMONLIGHT = 'https://www.lemonlight.com/blog/ai-video-production-cost/'
const ADMIRAL = 'https://admiral.media/ai-creative-agency-pricing'
const INVIDEO = 'https://invideo.io/faq/ai-film-production-vs-traditional-film-production-cost/'
const PROMOMOTIONS = 'https://promomotions.com/blog/ai-video-ads-vs-agency-cost-comparison'
const VERSELY = 'https://www.versely.studio/blog/how-much-does-an-ai-commercial-cost'

const FAQS = [
  {
    q: 'What is the difference between an AI video agency and a traditional video agency?',
    a: 'A traditional production company films your commercial or brand film with a crew, cameras, talent and locations, then edits the footage. An AI video agency generates the footage with AI models instead, so there is no shoot; the script, boards, edit, sound and grade are still done by people. Ruminate X is an AI-only studio: every frame it delivers is generated.',
  },
  {
    q: 'Is AI video production cheaper than a traditional agency?',
    a: 'Usually, because an AI film has no crew days, locations, travel, talent fees or reshoots. Lemonlight puts traditional production at about $15,000 to $50,000 or more per video (March 2026). The script, edit, sound, licensing and legal or MLR review still cost the same kind of money, so the saving is smaller on short films with heavy review. Ruminate X quotes each film from the brief.',
  },
  {
    q: 'How much cheaper is AI video production vs an agency?',
    a: 'Compared finished film to finished film, Lemonlight prices a polished 30 second AI video from USD 5,000 and puts that at about 60% below traditional production of the same quality, which it prices at USD 15,000 to 50,000 or more per video (March 2026). The bigger savings you see quoted, up to 99% or hundreds of times cheaper, compare a tool subscription or a do-it-yourself production with a filmed commercial. The script, edit, sound, licences and legal or MLR review cost about the same either way. Ruminate X quotes each film from the brief.', // claims-ok: Lemonlight AI video production cost guide (March 2026), linked on this page
  },
  {
    q: 'Are AI-generated videos good enough for a brand?',
    a: 'For product, lifestyle, concept and world-building films, yes, when a studio reruns the shots that fail and finishes the film properly. Generated footage is still weakest at faces that must stay the same across shots, hands, exact product packaging, logos and on-screen text. A good AI studio fixes those with extra generation passes and by adding the real logo and type in the edit.',
  },
  {
    q: 'Will videography be replaced by AI?',
    a: 'Not for work that depends on real people and real events: interviews, testimonials from actual customers, documentaries, conferences, sport, and any film where your own staff or a real doctor must appear. AI replaces the shoot for films whose world can be made rather than recorded, which covers many commercials and brand films.',
  },
  {
    q: 'What happens when I need to change an AI video after it is made?',
    a: 'Changing a shot in an AI film means regenerating that shot and re-editing, with no crew to rebook, so late changes cost less than a reshoot. Changes to the script or the brand world ripple through many shots and still take real time. Agree the number of review rounds before production starts, whichever kind of company you hire.',
  },
  {
    q: 'When should a brand hire a traditional production company instead of an AI agency?',
    a: 'When the film needs your founder, staff, real customers or a real clinician on camera; when it records something that happens, such as an event, a factory line or a store opening; when you are already filming and only want a few AI shots; or when your audience is likely to reject visibly AI-made work.',
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
          A traditional production company films your ad; an AI video agency generates it. Hire the AI agency when the
          film&apos;s world can be made rather than recorded, such as a product in a place you could never afford to shoot,
          a concept, a lifestyle film, and when you want to change shots without rebooking a crew. Hire a traditional
          company when real people or real events have to be on screen. Both still need a script, an edit, a sound mix and
          your approvals.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="Side by side" title="AI video vs traditional video production, line by line">
        <GuideTable
          caption="How the two kinds of company differ on a commercial or brand film, from the Ruminate X pipeline and the traditional production process. No turnaround figures: both depend on the brief and on your review rounds."
          head={['', 'Traditional production company', 'AI video agency']}
          rows={[
            ['Where the footage comes from', 'Filmed with a crew, cameras and lights', 'Generated with AI models, shot by shot'],
            ['What you pay for', 'Crew days, equipment, locations, talent, travel, then post-production', 'Concept, boards, generation passes, edit, sound, grade'],
            ['Real people on screen', 'Yes: actors, your staff, real customers', 'Generated characters or disclosed AI presenters'],
            ['Your exact product', 'Filmed as it is', 'Rebuilt from product images; pack, logo and type composited in the edit'],
            ['Changing a shot late', 'A reshoot: rebook crew, talent, location', 'Regenerate the shot and re-edit'],
            ['Versions and ratios', 'Cut from the footage you shot; new scenes need a new shoot', 'Cut from the film; new scenes can be generated'],
            ['Where it fails', 'Budget, weather, permits, the shot you could not afford', 'Faces across shots, hands, packaging, logos, on-screen text'],
          ]}
        />
        <p>
          {PRODUCTION.summary} So {studio} sits in the right-hand column. When a film needs a camera, the
          left-hand column is the right hire.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Cost" title="Is AI cheaper than a traditional agency?" alt>
        <p>
          Usually. <a href={LEMONLIGHT}>Lemonlight</a> puts traditional production at about $15,000 to $50,000 or more per
          video (March 2026), for a full crew, physical locations and post-production. An AI film has no crew days,
          cameras, locations, talent or travel. It keeps the lines that belong to people: the idea, the script, the boards, the
          edit, the mix, the grade, music and voice licenses, and your legal or MLR review.
        </p>
        <p>
          That is why the saving is largest on films with many locations or an expensive look, and smallest on short films
          that go through several review rounds. For the published prices at each level, from self-serve tools to
          broadcast studios, read <Link href="/blog/how-much-does-ai-video-production-cost">how much AI video production costs</Link>.
        </p>

        <h3>How much cheaper is AI video production vs an agency?</h3>
        <p>
          The percentages published online range from about 60% to &quot;250x&quot;, and they measure different things. Before
          you use one in a budget, check two things: what sits on the AI side (a software subscription, a performance ad
          variant, or a finished film from a studio) and who is selling it.
        </p>
        <GuideTable
          caption="Published AI-versus-agency cost claims, read September 28, 2026. Each links to its source. Ruminate X publishes no price; it quotes each film from the brief."
          head={['Source', 'What it says', 'What it actually compares', 'What the source sells']}
          rows={[
            [<a key="l" href={LEMONLIGHT}>Lemonlight, March 2026</a>, 'AI video from USD 5,000 for a polished 30 second video, about 60% below traditional at USD 15,000 to 50,000+', 'A finished film against a finished film of the same quality', 'Video production, AI and filmed'], // claims-ok: Lemonlight AI video production cost guide, linked
            [<a key="a" href={ADMIRAL}>Admiral Media, February 2026</a>, '70-90% cheaper; traditional USD 5,000 to 30,000 per asset; AI about EUR 200 per asset on a EUR 4,000 to 21,500 monthly retainer', 'High-volume performance ad variants against one-off filmed assets', 'AI performance creative'], // claims-ok: Admiral Media AI creative agency pricing (Feb 2026), linked
            [<a key="i" href={INVIDEO}>invideo, July 2026</a>, 'Productions made with its tool cost USD 750 to 5,000 all-in, against USD 100,000 to 500,000 for a filmed two minute commercial: up to 99.7% less', "A tool user's own production against a traditional figure with no named source", 'An AI video tool'],
            [<a key="p" href={PROMOMOTIONS}>PromoMotions, December 2025</a>, 'At one video a month, AI tools are 250x cheaper; a basic agency project costs USD 2,000 to 10,000', 'A monthly subscription against a finished agency video', 'An AI ad tool'], // claims-ok: PromoMotions AI video ads vs agency (Dec 2025), linked
            [<a key="v" href={VERSELY}>Versely, September 2026</a>, 'Studio list prices: USD 2,500 for a hero spot (ArcaneWiz), USD 3,500 for a 60 second cinematic film (Gisteo), GBP 15,000 to 45,000 for a broadcast asset (Myth Labs)', 'AI studio prices, no comparison', 'An AI studio directory and studio'],
          ]}
        />
        <p>
          For a brand film or a commercial, the like-for-like line is the first one: a studio&apos;s finished film against a
          production company&apos;s finished film. The large multiples leave out the work a marketing team pays for either way:
          the concept and script, reruns of the shots that fail, the edit, the sound mix, music and voice licences, and your
          legal or MLR review. If a quote from an AI studio looks like a tool subscription, ask which of those lines it
          covers.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Quality" title="Are AI-generated videos good enough?">
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
          caption="Keen Footwear spec ad by Ruminate X (spec work, not commissioned by Keen). The test for a product film: the shoe stays the same shoe in every shot."
        />
      </GuideSection>

      <GuideSection eyebrow="Which to hire" title="Which one fits which job" alt>
        <GuideTable
          caption="Ruminate X's view of which kind of company fits common brand briefs."
          head={['The brief', 'Hire', 'Why']}
          rows={[
            ['Product launch commercial, no shoot budget', 'AI agency', 'The product can be placed in any world; versions come from one film'],
            ['Brand film about what the company stands for', 'AI agency, if no real people must appear', 'A made world can carry the story; a documentary one cannot'],
            ['Customer testimonial or case study', 'Traditional', 'Real customers speaking for themselves have to be filmed'],
            ['Founder or team introduction', 'Traditional', 'Your people are the point of the film'],
            ['Conference, event or factory coverage', 'Traditional', 'It records something that happens'],
            ['Live-action shoot that needs a few impossible shots', 'Traditional, with AI VFX', 'Someone has to film the plates'],
            ['Pharma or medical brand film with a mechanism or patient story', 'Either; AI if no real clinician or patient must appear', 'MLR reviews the claims either way; disclose AI-made people'],
          ]}
        />
      </GuideSection>

      <GuideSection eyebrow="Made, not recorded" title="What an all-AI film looks like">
        <p>
          The film below has several runners, trails and changes of light, and no location shoot. A traditional version
          would have needed a crew in several places over several days.
        </p>
        <GuideFilm
          id="LYA3Do3KEN0"
          caption="The Love of Trail Running, an original Ruminate X film (not client work). Every shot generated."
        />
      </GuideSection>

      <GuideFit
        title="Ruminate X or a traditional production company?"
        hire={[
          'You need a commercial or brand film and the idea works as a made world.',
          'Your budget cannot cover the locations, cast or look the idea needs.',
          'You want to be able to change shots late without a reshoot.',
          'You are a pharma, pharmacy, lab or medical marketer and no real clinician or patient has to appear.',
        ]}
        instead={[
          'Your founder, staff, a real customer or a real doctor must be on camera: hire a traditional production company.',
          'The film records an event, a place or a process as it happens: hire a crew.',
          'You are filming anyway and need a few AI shots: hire a production company with AI VFX.',
          'Your audience is likely to reject visibly AI-made work: film it.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/blog/how-much-does-ai-video-production-cost', title: 'How much AI video production costs', note: 'Published prices at each level, with sources.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'What an AI commercial delivers and what still breaks.' },
          { href: '/ai-video-production-agencies', title: 'How to hire an AI video production agency', note: 'Seven questions to ask before you sign.' },
          { href: '/ai-brand-film-agency', title: 'AI brand films', note: 'For a film about what your brand stands for.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'The pipeline stage by stage.' },
        ]}
      />

      <GuideCta />
    </Guide>
  )
}
