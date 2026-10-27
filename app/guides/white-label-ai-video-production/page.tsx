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
import { OFFERS, PRICES, PRODUCTION, SITE, inSentence } from '@/lib/seo/facts'

const PAGE = {
  path: '/guides/white-label-ai-video-production',
  title: 'White-Label AI Video Production for Agencies',
  description:
    'How white-label AI video production works for agencies: what the partner does and what the agency keeps, published prices (from USD 1,500 a spot to EUR 4,000 a month on retainer), turnaround, credit and NDA terms, how to price it to a client against a shoot, and what to agree before the first brief.',
  published: '2026-10-27',
  updated: '2026-10-27',
  keywords: [
    'white label ai video production for agencies',
    'white label ai video production',
    'ai production partner for agencies',
    'hire ai-native production house for campaigns',
    'how do agencies price ai video production',
    'ai video creation agency',
  ],
}

const ARCANEWIZ = 'https://arcanewiz.com/white-label-ai-video-production-partner/'
const AI25 = 'https://ai25.studio/for-agencies'
const ANIMATIC = 'https://www.animaticmedia.com/ai-agency-partnering'
const HOOPLA = 'https://hoopla.agency/journal/ai-production-partner-for-agencies'

const studio = SITE.name
const keen = film('Zytga7zsShI')
const offerList = OFFERS.slice(0, 2)
  .map((o) => inSentence(o.name))
  .join(' and ')
const priceLine =
  PRICES.find((p) => p.offer === 'commercial')?.label ?? `${studio} quotes each project from the brief and does not publish a price list.`

const FAQS = [
  {
    q: 'What is white-label AI video production?',
    a: 'White-label AI video production is an arrangement in which an AI studio makes a film for an agency\'s client and the agency delivers it under its own name. The agency keeps the client relationship, the strategy and the sign-off; the studio does the boards, generation, edit, sound and finishing. Whether the studio is credited, named to the client or allowed to show the work is agreed per project before the brief.',
  },
  {
    q: 'How much does white-label AI video production cost?',
    a: 'Partners that publish prices for agency work charged, in October 2026: ArcaneWiz from USD 1,500 per project with no volume discount; AI25.Studio (Warsaw) from EUR 6,500 per campaign for a commercial or brand film, from EUR 2,500 for a set of ad variants, and from EUR 4,000 a month on a retainer with a three-month minimum. Animatic Media and Hoopla publish no prices. The agency\'s own hours and pass-throughs such as music, voice and translation are on top.',
  },
  {
    q: 'How do integrated agencies price AI-enabled content versus traditional production services?',
    a: 'The partner\'s cost becomes a production line in the agency estimate, priced the way a production company\'s quote would be, with the agency\'s own hours (strategy, script, producing, client management) and pass-throughs (music, voice, translation, media) as separate lines. What changes against a shoot is the production line itself: no crew, locations or equipment, but generation passes and more post-production. Partners quote per project, per campaign or as a monthly retainer.',
  },
  {
    q: 'Does the client know an AI studio made the video?',
    a: 'Only if the agency tells them. White-label partners offer to stay invisible (AI25.Studio sends files without its branding, watermarks or metadata; Animatic Media offers white-labelled, co-credited or invisible). Whether the client is told that the film is made with AI is a separate question, and some ad laws now require the audience to be told. That disclosure belongs in the agency\'s contract with its client. This is not legal advice.',
  },
  {
    q: 'How do I hire an AI-native production house for campaigns?',
    a: 'Ask for a reel that shows the same product and the same character across many shots, a written process with review points, the price of one hero film with its cutdowns and ratios, the number of revision rounds included, who owns the output and on what licence terms, and whether they will work uncredited. Then brief one spot before signing a retainer.',
  },
  {
    q: `Does ${studio} work with agencies?`,
    a: `${studio} makes ${offerList} for brands and companies, and an agency can brief it the same way a brand does, by email to ${SITE.email} or through ruminatex.com/contact. ${PRODUCTION.summary} ${priceLine} Credit, confidentiality and portfolio terms for agency work are not published; ask about them on the first call.`,
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
        eyebrow="Guide · Agencies"
        title="White-label AI video production for agencies"
        dek="For the agency producer whose client wants an AI film, and who has to choose a partner, price it into the estimate and keep the client relationship."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          In white-label AI video production, an AI studio makes the film and the agency delivers it to its client under
          the agency&apos;s name. Partners that publish terms charge from USD 1,500 a project (ArcaneWiz) to EUR 6,500 a
          campaign or EUR 4,000 a month on retainer (AI25.Studio), and quote 7 to 10 working days from an approved brief
          to a finished master (ArcaneWiz) or 10 days for a hero film (Animatic Media), as read on their own pages in
          October 2026. Before the first brief, agree credit, the NDA, who speaks to the client, what counts as a revision
          round and who owns the output.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="The split" title="How white-label AI video production works">
        <p>
          The agency keeps what it is paid for: the client, the strategy, usually the idea and the script, and every
          conversation about approval. The partner takes what an agency without AI artists cannot do in house. On a
          typical job that is, in order:
        </p>
        <ol>
          <li>
            <strong>The brief.</strong> The agency passes on the client&apos;s brief, brand assets, channels and lengths,
            references (rejected ones too), who signs off, and a budget band.
          </li>
          <li>
            <strong>The look.</strong> Palette, light, camera language and the casting of any generated people, set
            before a single shot is made. This is the last cheap point to change direction.
          </li>
          <li>
            <strong>Script and boards.</strong> Every shot with its framing, motion and length, so the client approves a
            plan rather than a rough cut.
          </li>
          <li>
            <strong>Generation passes.</strong> Each shot generated, checked against the boards and generated again.
            AI footage breaks at this stage, in hands, faces that drift between shots, packaging that does not match
            the real product, and logos and on-screen text that come out wrong. A partner fixes those in later passes and in
            post, and the time it takes belongs in the schedule.
          </li>
          <li>
            <strong>Edit, sound and grade.</strong> Cut, music, voice, sound design and colour, the same as on any film.
          </li>
          <li>
            <strong>Delivery.</strong> The master and the cutdowns and ratios the media plan needs, with the
            partner&apos;s name, watermarks and metadata removed if the deal is white-label.
          </li>
        </ol>
        <p>
          Notes travel one way: the client to the agency producer, then one consolidated set of notes to the partner.
          ArcaneWiz defines a revision round in exactly those terms. A partner that takes notes straight from five
          client stakeholders uses up the rounds before the client has agreed on anything. This is the six-stage pipeline {studio} runs on its own
          films, described in <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.
        </p>
        <GuideFilm
          id={keen.youtubeId}
          caption={`${keen.title}: a ${keen.durationSeconds} second spec commercial by ${studio} (not client work), the kind of spot an agency can show a client before a pitch. Outdoor scenes and a shoe that has to match the real one, made with no shoot.`}
        />
      </GuideSection>

      <GuideSection eyebrow="Who offers it" title="White-label AI video partners and what they publish" alt>
        <p>
          A search for white-label AI video production returns two kinds of company: studios that make finished films
          for agencies, and software that lets an agency put its own logo on a video generator. This table is the first
          kind. Read each studio&apos;s own page before you brief it; terms change.
        </p>
        <GuideTable
          caption={
            <>
              Read October 27, 2026 from each company&apos;s own page: <a href={ARCANEWIZ}>ArcaneWiz</a>,{' '}
              <a href={AI25}>AI25.Studio</a>, <a href={ANIMATIC}>Animatic Media</a>, <a href={HOOPLA}>Hoopla</a>. Prices
              and timings are the companies&apos; own claims, not verified. {studio} is not in the table because it does
              not publish agency terms.
            </>
          }
          head={['Partner', 'Based', 'Credit and confidentiality', 'Published price', 'Published timing']}
          rows={[
            ['ArcaneWiz', 'Not stated on the page', 'Shows white-label work only with written permission per project; NDA plus named staff and one revocable workspace', 'From USD 1,500 per project; no volume discount', '7 to 10 working days from approved brief to master'],
            ['AI25.Studio', 'Warsaw, Poland', 'NDA signed before any discussion; files without its branding, watermarks or metadata; joins client calls as part of the agency team', 'Commercial or brand film from EUR 6,500 per campaign (two revision rounds); ad variants from EUR 2,500 a set; retainer from EUR 4,000 a month, three-month minimum', 'Ad variants 1 to 2 weeks; others fixed in the estimate'],
            ['Animatic Media', 'Boynton Beach, Florida', 'White-labelled, co-credited or invisible, the agency chooses; no poaching written into every contract', 'None published', 'Hero deliverable 10 days; campaign pack 2 to 3 weeks'],
            ['Hoopla', 'Hyderabad, India (also California and Dubai)', 'Works under the agency\'s name; says a partner asking for credit is a deal-breaker', 'None published; retainer, per campaign or revenue share', 'First cut 48 hours after the brief'], // claims-ok: Hoopla's own journal page, linked in the table caption
          ]}
        />
        <p>
          The four sell different things. AI25.Studio also shoots live action, composites onto plates and finishes other
          studios&apos; footage, so it suits an agency with a hybrid job. Hoopla describes more than 100,000 personalised
          films for one launch, which is a different job from one hero spot. ArcaneWiz and Animatic Media
          sell finished films on a short schedule. More AI commercial studios, with their minimums and review rounds,
          are compared on <Link href="/ai-commercial-production">AI commercial production companies</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The estimate" title="How do integrated agencies price AI-enabled content against traditional production?">
        <p>
          The partner&apos;s quote goes into the client estimate where a production company&apos;s quote would go. ArcaneWiz
          splits an agency job into three kinds of money: the partner&apos;s production cost, the agency&apos;s own hours
          (strategy, script, producing, client calls), and pass-throughs such as licensed music, voice talent and
          translation. Keep the three apart in the estimate, so a change of brief is priced on the right line.
        </p>
        <p>
          What moves against a shoot is the production line. Crew, equipment, locations, permits, travel, wardrobe and
          props disappear; script, producing, edit, music, sound and versions stay; post grows, because fixing hands,
          faces, packaging and logos is post work. A filmed TV commercial and its line items are set against published
          AI prices in <Link href="/guides/ai-commercial-cost">what an AI commercial costs</Link>, and every other kind of
          AI video in <Link href="/blog/how-much-does-ai-video-production-cost">AI video production cost and agency pricing</Link>.
        </p>
        <p>
          Partners bill in three ways: a fixed estimate per project (ArcaneWiz, AI25.Studio), a monthly retainer for
          steady work across several clients (AI25.Studio, Hoopla), and, at Hoopla, revenue share when the agency sells
          AI video as a new service. Ask what happens to the price when the client changes the brief after the look is
          approved. AI25.Studio re-quotes before work continues; get that in writing from whoever you hire.
        </p>
        <h3>Hiring an AI-native production house for campaigns</h3>
        <p>
          A campaign is a hero film, its 15 and 6 second cutdowns, three ratios and often a language or two, and the
          product and any character have to look the same in all of them. Ask a partner for a reel in which one product
          appears across many shots, the price of the whole set rather than the hero alone, and a schedule that names
          the day the client sees boards. Brief one spot before signing a retainer.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The contract" title="What to agree before the first brief" alt>
        <ul>
          <li>
            <strong>Credit.</strong> Invisible, co-credited or open, and whether the partner may show the film in its
            reel once it airs.
          </li>
          <li>
            <strong>Confidentiality.</strong> The NDA, signed before the client&apos;s brief is shared, and who on the
            partner&apos;s side sees client material.
          </li>
          <li>
            <strong>Client contact.</strong> Whether the partner joins client calls, and under whose name.
          </li>
          <li>
            <strong>Revisions.</strong> How many rounds, what one round is, and the price of the next.
          </li>
          <li>
            <strong>Rights.</strong> Who owns the output, what the AI tools&apos; licences allow, and what passes to the
            client. Copyright in AI-generated footage is limited in the US; see{' '}
            <Link href="/guides/who-owns-ai-video">who owns an AI video</Link>.
          </li>
          <li>
            <strong>Non-solicitation.</strong> That the partner will not pitch your client directly.
          </li>
          <li>
            <strong>AI disclosure.</strong> Whether the client knows the film is AI-made, and who decides on labels for
            the audience. New York and Pennsylvania have passed laws on AI in ads; they are summarised in{' '}
            <Link href="/guides/brands-using-ai-commercials">AI commercials by big brands</Link>.
          </li>
        </ul>
        <p>
          This page is not legal advice. The agency&apos;s lawyer and the client&apos;s legal team decide what the
          contracts say.
        </p>
      </GuideSection>

      <GuideFit
        title="Who should hire an AI production partner"
        hire={[
          'An agency producer with a pitch in two weeks who needs a spec spot that looks finished, without a shoot.',
          'An agency whose client has asked for AI video and which has no AI artists in house.',
          'A creative team that owns the idea and the script and wants the boards, generation, edit and finishing done by someone else.',
          `An agency whose client wants ${offerList}, cinematic rather than templated.`,
        ]}
        instead={[
          'The job is thousands of personalised or localised versions: hire a partner that publishes that kind of volume, or a versioning platform.',
          'The film needs live action, green screen or VFX on plates: hire a hybrid studio or a crew.',
          'The client\'s own staff, customers or a named expert have to appear: film them.',
          'Your team already edits and needs short clips each week: a Runway, Veo, Kling or Sora subscription costs less than any partner.',
          'The client contract forbids AI-made content or the audience is likely to reject it: shoot it.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-commercial-production', title: 'AI commercial production companies', note: 'Who makes AI commercials, their minimums and review rounds.' },
          { href: '/guides/ai-commercial-cost', title: 'AI commercial cost', note: 'Published prices against a filmed commercial, line by line.' },
          { href: '/guides/video-production-brief', title: 'How to brief a video production company', note: 'What to send a partner so the first quote is close to the last.' },
          { href: '/guides/who-owns-ai-video', title: 'Who owns an AI video?', note: 'The rights clauses to settle before the client sees a frame.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'The six stages, from brief to delivery.' },
        ]}
      />

      <GuideCta
        title="Brief us on your client's film"
        body="Send the client's brief, the channels and lengths, the date it has to air and how you want the work credited."
      />
    </Guide>
  )
}
