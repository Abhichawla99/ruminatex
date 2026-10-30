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
import { BUYERS, OFFERS, PRICES, PRODUCTION, REFERENCE_PROJECT, SITE, inSentence, priceLine } from '@/lib/seo/facts'

const studio = SITE.name
const offer = (key: string) => OFFERS.find((o) => o.key === key)!
/** The published starting price for brand films and commercials. */
const from = PRICES.find((p) => p.offer === 'commercial')!.from

const PAGE = {
  path: '/services',
  title: 'AI Video Production Services',
  description: `${studio} AI video production services: brand films, AI commercials, company films, UGC-style ads, product visuals and avatar videos for brands, pharma and medical companies. Every frame made with AI; brand films and commercials from ${from}.`,
  published: '2026-03-07',
  updated: '2026-10-30',
  keywords: [
    'ai video production services',
    'ai video production service',
    'ai video production for brands',
    'ai agency video services',
    'ai video production quote',
    'best ai video production services',
    'video production for brands',
  ],
}

/** One row per service: the offer from facts.ts, who asks for it, what they get. */
const SERVICES: { key: string; who: string; get: string }[] = [
  { key: 'brand-film', who: 'A brand or marketing manager who needs the story of the brand on screen', get: 'A story-driven film about what the brand stands for, plus cutdowns for each channel' },
  { key: 'commercial', who: 'A founder or brand manager with a launch, a media plan or a spot to replace', get: 'A hero spot in 15, 30 or 60 seconds, social cutdowns, alternative openings for hook tests' },
  { key: 'about-us', who: 'A comms, HR or marketing lead who needs a company film without a shoot day', get: 'An about-us, mission, recruiting, all-hands or investor film' },
  { key: 'ugc', who: 'A performance marketer who needs more creative to test each week', get: 'Creator-style ads for Reels, TikTok and Shorts, in 9:16, 1:1 and 4:5, with AI labels where a platform asks for them' },
  { key: 'product-visuals', who: 'A brand launching a product without a product shoot', get: 'A product hero film, a launch teaser, stills and marketplace video built from your real product images' },
  { key: 'avatar', who: 'A team that needs a presenter on screen without booking one', get: 'A generated presenter or spokesperson on your approved script, for explainers, training or customer videos' },
  { key: 'review', who: 'A brand that needs review or testimonial-style video', get: 'Review and testimonial-style videos' },
]

const FAQS = [
  {
    q: 'What AI video production services does Ruminate X offer?',
    a: `${studio}, an AI film studio in ${SITE.city}, makes brand films, AI commercials, about-us and company films, UGC-style ads, product visuals, avatar videos and review-style videos for consumer brands, pharma and pharmacy companies, labs and medical companies. ${PRODUCTION.summary} People write the script, board every shot, edit, mix and grade each film, and the real logo, product and on-screen text are set in the edit from the brand's own files.`,
  },
  {
    q: 'How much do AI video production services cost?',
    a: `${priceLine('commercial')}. Brand films also start at ${from}. Company films, UGC-style ads, product visuals and avatar videos are quoted from the brief. What moves the number is running time, the number of distinct scenes, how exactly the product has to be reproduced, and how many cutdowns, aspect ratios and languages the media plan needs.`,
  },
  {
    q: 'Can I get a quote for AI video production?',
    a: `Yes. Send ${studio} the brief through ruminatex.com/contact or to ${SITE.email}: what the film is for, who will watch it, where it will run, the length, the cutdowns you need and the date. The quote comes back against that brief, with the stages and the review rounds written in. Brand films and commercials start at ${from}.`,
  },
  {
    q: 'Can Ruminate X put our own staff or a real customer in the video?',
    a: `No. Every ${studio} frame is generated, so the people on screen are generated too. If the film needs a real employee, founder or customer to appear as themselves, it needs a camera. ${studio} can still make every other part of a campaign, and a real person can front an avatar video only with their written consent and a contract that covers the likeness.`,
  },
  {
    q: 'Does Ruminate X make AI videos for pharma and medical companies?',
    a: `Yes. ${studio} makes AI commercials, brand films and company films for pharma and pharmacy companies, labs and medical companies. The pictures are generated; every claim, the important safety information and any fair-balance text come from the copy your medical, legal and regulatory reviewers approved, and boards go to review before generation starts. Your own reviewers decide whether a film can run.`,
  },
  {
    q: 'What do I need to send to start an AI video?',
    a: `The objective, the audience, the one message, where the film will run, the deliverables, the date and a budget range, plus your logo files, brand guidelines, product images and any approved claims. ${studio} turns that into a creative brief and a brand world before the first frame is generated. The brief guide on ruminatex.com lists each line with an example.`,
  },
]

export const metadata = guideMetadata(PAGE)

export default function ServicesPage() {
  return (
    <Guide
      page={PAGE}
      faqs={FAQS}
      films={['LYA3Do3KEN0']}
      service={{
        name: 'AI video production services',
        description: `${studio} makes brand films, AI commercials, company films, UGC-style ads, product visuals and avatar videos with generative AI, written, boarded, edited, mixed and graded by people.`,
        audience: [...BUYERS],
      }}
    >
      <GuideHero
        eyebrow="Services"
        title="AI video production services"
        dek="For the marketing lead, founder or comms lead who needs a finished film made with AI and wants to know what Ruminate X makes, who each service is for, what it costs and how it gets made."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          {studio} is an AI film studio in {SITE.city} that sells AI video production as finished films: brand films,
          AI commercials, company films, UGC-style ads, product visuals and avatar videos, for consumer brands, pharma
          and pharmacy companies, labs and medical companies. {PRODUCTION.summary} {priceLine('commercial')}; brand
          films start at the same figure, and the other services are quoted from the brief.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="What we make" title="AI video production services, and who each one is for">
        <GuideTable
          caption={`What ${studio} makes, from the studio's own list of services. Prices: brand films and commercials from ${from}; the rest quoted from the brief.`}
          head={['Service', 'Who asks for it', 'What you get']}
          rows={SERVICES.map((s) => {
            const o = offer(s.key)
            return [o.path ? <Link href={o.path}>{o.name}</Link> : o.name, s.who, s.get]
          })}
        />
        <p>
          Pharma, pharmacy, lab and medical films are made the same way, with one extra rule: the claims, the important
          safety information and any fair-balance text come from approved copy and are set in the edit, never generated.
          The <Link href="/ai-video-production-healthcare">AI video production for pharma and medical companies</Link>{' '}
          page covers the review steps. Fashion, beauty and lifestyle brands have their own page on{' '}
          <Link href="/ai-video-production-fashion">AI fashion films</Link>, and the{' '}
          <Link href="/ai-corporate-video-production">AI corporate video production</Link> page covers company films. For
          Calgary and the rest of Canada, see <Link href="/markets/ai-video-production-canada">AI video production in Calgary and Canada</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="How it is made" title="How every Ruminate X film gets made" alt>
        <p>
          Each service runs through the same six stages, set out in full in{' '}
          <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.
        </p>
        <ol>
          <li><strong>The brief.</strong> You send the product, the audience and what the film has to do; {studio} hands back a creative brief.</li>
          <li><strong>The brand world.</strong> Palette, light, texture, camera language and casting are fixed before any frame exists, so shot 40 looks like shot 1.</li>
          <li><strong>Script and boards.</strong> The script breaks into shots, each with framing, motion and duration, and you approve the boards.</li>
          <li><strong>Generation passes.</strong> Every shot is generated, checked against its board and regenerated until faces, hands and the product hold.</li>
          <li><strong>Edit, sound and grade.</strong> Takes are cut to the script, your real logo, product and on-screen text are set from your files, then sound and grade.</li>
          <li><strong>Delivery.</strong> A master plus the cutdowns and aspect ratios your media plan calls for.</li>
        </ol>
        <h3>Where AI footage breaks, and what is done about it</h3>
        <p>
          Generated footage fails in the same places on every job: faces that drift between shots, hands holding a
          product, packaging and labels, logos, any text on screen, and continuity when a character or a room has to
          stay the same across cuts. {studio} plans around those before generation starts. Characters and places are
          defined in the brand world, shots that need the product are generated from your product images, and every
          word, logo and claim is set in the edit instead of trusted to a model.
        </p>
        <GuideFilm id="LYA3Do3KEN0" caption="The Love of Trail Running, an original Ruminate X film: generated end to end, cut, scored and graded by people." />
      </GuideSection>

      <GuideSection eyebrow="Price" title="How much AI video production services cost">
        <p>
          {priceLine('commercial')}. Brand films also start at {from}. For scale, the reference project{' '}
          {studio} publishes is {REFERENCE_PROJECT.what} at {REFERENCE_PROJECT.price}. Company films, UGC-style ads,
          product visuals and avatar videos are quoted from the brief.
        </p>
        <p>
          What moves a quote: running time and the number of distinct scenes; recurring characters that have to stay
          consistent; how exactly your product or a real place has to be reproduced; the number of cutdowns, aspect
          ratios and languages; and how many review rounds your legal or medical reviewers need. The guides on{' '}
          <Link href="/guides/ai-commercial-cost">how much an AI commercial costs</Link> and{' '}
          <Link href="/blog/how-much-does-ai-video-production-cost">AI video production cost and agency pricing</Link>{' '}
          set those prices against a filmed shoot.
        </p>
        <h3>How to get a quote</h3>
        <p>
          Send the brief to <Link href="/contact">{studio}</Link>: the objective, the audience, the message, where it
          runs, the deliverables, the date and a budget range. The{' '}
          <Link href="/guides/video-production-brief">video production brief</Link> guide has each line with an example.
        </p>
      </GuideSection>

      <GuideFit
        title={`Who ${studio}'s ${inSentence(offer('brand-film').name)} and AI commercials are built for`}
        hire={[
          'A brand manager with a launch in a few weeks and no budget or time for a shoot.',
          'A pharma or pharmacy marketer who needs every claim set from approved copy and boards reviewed before generation.',
          'A comms or HR lead who needs a company film without taking the team off the job.',
          'A performance marketer who needs new hooks and versions every week.',
          'An agency producer who needs a finished AI film delivered to their client’s spec.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'What an AI commercial includes, by industry, and how to brief one.' },
          { href: '/ai-brand-film-agency', title: 'AI brand film production', note: 'What a brand film is for and how much an AI brand film costs.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'The six stages, from brief to final cut.' },
          { href: '/work', title: 'The work', note: 'Ruminate X films, each labelled original, spec or client.' },
          { href: '/guides/video-production-brief', title: 'How to brief a video production company', note: 'What to send before the first call.' },
        ]}
      />

      <GuideCta />
    </Guide>
  )
}
