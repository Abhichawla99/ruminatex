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
  guideMetadata,
} from '@/components/guide/Guide'
import { BUYERS, OFFERS, PRODUCTION, SITE, inSentence, priceLine } from '@/lib/seo/facts'

const PAGE = {
  path: '/faq-ai-video-production',
  title: 'AI Video Production FAQ: Rights, Cost, Quality',
  description: `Straight answers for brands about AI video production: whether you can use and copyright an AI video, what is legal, what it costs, what still looks wrong, and how ${SITE.name} makes brand films and commercials with every frame generated. Sourced, checked September 2026.`,
  published: '2026-03-08',
  updated: '2026-10-28',
  keywords: [
    'ai video production faq',
    'can I use AI videos for commercial use',
    'can you copyright something that is AI-generated',
    'is it illegal to make AI-generated videos',
    'how much does it cost to produce an AI video',
    'are AI-generated videos good',
    'will videography be replaced by AI',
    'how to avoid copyright issues with AI',
  ],
}

const studio = SITE.name
const andList = (items: readonly string[]) => `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`
const offerList = andList(OFFERS.map((o) => inSentence(o.name)))
const buyerList = andList(BUYERS)
const USCO_REPORT = 'https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf'
const YOUTUBE_DISCLOSURE = 'https://support.google.com/youtube/answer/14328491'

const FAQS = [
  {
    q: 'Can I use AI videos for commercial use?',
    a: `Usually yes, once three things check out. The video model's terms must allow commercial use of its outputs (Runway's terms, for example, say it "does not restrict your commercial use of your Outputs", checked September 2026). Every music track and voice needs a license for the channels and territories you will run it in. Any real person's face or voice needs their written consent. When ${studio} or any other studio makes the film, your contract should confirm all three and say which files transfer to you.`,
  },
  {
    q: 'Can you copyright something that is AI-generated?',
    a: 'Only the human part. The US Copyright Office concluded in January 2025 that prompts alone do not make someone the author of AI output, so purely generated footage is not protected in the US, and the Supreme Court declined in March 2026 to hear Thaler v. Perlmutter, leaving the human-authorship rule in place. Human work that shows in the result can be: the script, a human-made character or artwork that appears in the film, and the creative selection, arrangement and editing of the shots. A brand should get a written assignment of whatever rights exist in the finished film from the studio, and rely on its trademarks and contracts for the rest. This is not legal advice.',
  },
  {
    q: 'Is it illegal to make AI-generated videos?',
    a: 'No. Making a video with AI is legal in the US and Canada. What can make a particular video unlawful is its content: using a real person\'s likeness or voice without consent, copying someone else\'s protected work or trademark, making false or misleading claims in an ad, or skipping a disclosure a platform or law requires. YouTube, for example, requires disclosure of realistic content that makes a real person appear to say or do something they did not (checked September 2026). Your lawyer decides for a specific ad; this is not legal advice.',
  },
  {
    q: 'How much does it cost to produce an AI video?',
    a: `${priceLine('brand-film')}. The price of an AI video moves with its length, the number of scenes, how exactly a real product has to be reproduced, the number of versions and cutdowns, how many review rounds your team needs, and MLR or legal review when the film makes medical or product claims. Generating the footage removes the crew, set and location of a shoot; people still write the script, board the shots, regenerate the ones that fail, and do the edit, sound and grade.`,
  },
  {
    q: 'Are AI-generated videos good?',
    a: `They are good enough for commercials and brand films when someone checks every shot. Generated footage still breaks in predictable places: faces in close-up, hands holding objects, a product's packaging and label, logos and any text on screen, and the same person across many shots. ${studio} gives faces, hands and the product the most generation passes, regenerates the shots that fail and sets logos and text in the edit from the brand's own files. Films built on landscapes, objects, a made world and a voiceover hold up best.`,
  },
  {
    q: 'Will videography be replaced by AI?',
    a: `Not for work that has to record something real, such as a real customer telling their own story, an event or a documentary. AI replaces the shoot for films that would otherwise need sets, travel, many locations or images no camera can get. ${studio} is an AI-only studio: every frame is generated, so when a film needs people, it tells the story with generated people, places and products rather than your own staff on camera.`,
  },
  {
    q: 'How do I avoid copyright issues with AI video?',
    a: `Do not prompt for a named artist's style, a film's characters, a celebrity or another brand's logo or product. Use licensed music and voice, and keep the licenses. Use a video model whose terms allow commercial use. Keep the brief, boards and edit files, which document the human work. And have the contract with your studio assign the finished film to you and promise that the studio did not knowingly copy protected material. ${studio} sets your real logo, product and on-screen text in the edit from your brand files rather than generating them. This is not legal advice.`,
  },
  {
    q: 'Is there an AI film production studio I can hire?',
    a: `Yes. ${studio} is an AI film studio in Calgary, Canada that takes a brief and delivers a finished film the way a production company does, except that every frame is generated with AI and there are no film crews, sets or location shoots. People write the script, board every shot, choose the takes, and do the edit, sound and grade. ${studio} makes ${offerList} for ${buyerList}.`,
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} films={['LYA3Do3KEN0']}>
      <GuideHero
        eyebrow="AI video production FAQ"
        title="AI video production questions, answered for brands"
        dek="For the marketing, comms or legal lead who has been asked to sign off on an AI-made film and wants the rights, the cost and the risks in plain terms before the first call with a studio."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          AI video production is making a film whose footage is generated with AI rather than filmed. {studio}, an AI
          film studio in Calgary, makes brand films and AI commercials for consumer brands, pharma and pharmacy companies
          and other businesses: every frame generated with AI, with the script, boards, edit, sound and grade done by
          people. A brand can use an AI video commercially when the model&apos;s terms allow it, the music and voice are
          licensed and any real person has consented. US copyright protects only the human work in it, such as the script
          and the edit, so the contract with the studio does most of the protecting.
        </p>
      </GuideAnswer>

      <GuideStudio title={`${studio} makes AI brand films and commercials`}>
        <p>
          You see the script and boards before anything is generated, and your logo, product and on-screen text are set
          in the edit from your brand files, so the people signing off know what the film will show before it is made.
          See <Link href="/ai-brand-film-agency">AI brand films</Link> and{' '}
          <Link href="/ai-commercial-production">AI commercials</Link>.
        </p>
      </GuideStudio>

      <GuideSection eyebrow="Rights" title="Commercial use, copyright and what is legal">
        <p>
          Three questions get mixed up: whether you may use the video, whether you own it, and whether it is lawful. Use
          depends on the video model&apos;s terms (Runway&apos;s terms of use say Runway &ldquo;does not restrict your
          commercial use of your Outputs&rdquo;), the music and voice licenses, and consent from any real person shown.
          Ownership is narrower. The{' '}
          <a href={USCO_REPORT}>US Copyright Office&apos;s January 2025 report on copyrightability</a> concluded that
          prompts alone do not make someone the author of AI output; human work visible in the result, such as the script
          and the selection and arrangement of shots, can be protected. Making an AI video is lawful, and a specific ad can
          still break the law through an unconsented likeness, a copied work, a false claim or a missing disclosure, such
          as the one <a href={YOUTUBE_DISCLOSURE}>YouTube requires</a> for realistic content that makes a real person
          appear to say or do something they did not.
        </p>
        <p>
          The full answer on ownership, including what your studio contract should say, is in{' '}
          <Link href="/guides/who-owns-ai-video">who owns an AI video</Link>. Disclosure rules for YouTube, Meta, TikTok,
          New York and the EU are in the <Link href="/guides/ai-video-quality-control">AI video quality control checklist</Link>.
          This is not legal advice.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Cost and quality" title="What it costs and what still looks wrong" alt>
        <p>
          {priceLine('brand-film')}. The price moves with the length, the number of scenes, how exactly a real product has
          to be reproduced, the versions and cutdowns, the review rounds your team needs, and MLR or legal review when the
          film makes medical or product claims. There is no crew, set or location to pay for. More on pricing a commercial
          is in <Link href="/guides/ai-commercial-cost">how much an AI commercial costs</Link>.
        </p>
        <p>
          Faces, hands, products, logos and on-screen text are where generated footage fails. {PRODUCTION.summary} Each
          film is boarded shot by shot, generated, checked and generated again until it holds; the stages are on{' '}
          <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.
        </p>
        <GuideFilm
          id="LYA3Do3KEN0"
          caption="The Love of Trail Running, an original Ruminate X film (not client work). 96 seconds, every shot generated, no location shoot."
        />
      </GuideSection>

      <GuideFit
        hire={[
          'A brand or marketing manager who needs a cinematic brand film or commercial without a shoot.',
          'A pharma, pharmacy, lab or medical marketer with a review process for claims, who needs images no camera can film.',
          'A comms or legal lead asked to sign off on an AI film, who wants to see the script and boards before anything is generated.',
          'An agency producer who needs an AI production partner for a client film.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/guides/who-owns-ai-video', title: 'Who owns an AI video', note: 'Copyright, model terms and the contract clauses a brand needs.' },
          { href: '/blog/how-much-does-ai-video-production-cost', title: 'How much AI video production costs', note: 'What an AI film costs and what moves the price.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: `How ${studio} makes an AI commercial.` },
          { href: '/ai-brand-film-agency', title: 'AI brand film production', note: `How ${studio} makes a brand film, from brief to grade.` },
          { href: '/ai-avatar-videos', title: 'AI avatar video production', note: 'Presenter and spokesperson videos, consent and disclosure.' },
        ]}
      />

      <GuideCta
        title="Ask us about your film"
        body="Send the film type, length, where it will run, your deadline and any rights or review questions your team has."
      />
    </Guide>
  )
}
