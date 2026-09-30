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
  guideMetadata,
} from '@/components/guide/Guide'
import { PRODUCTION, SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/faq-ai-video-production',
  title: 'AI Video Production FAQ: Rights, Cost, Quality',
  description:
    'Straight answers for brands about AI video production: whether you can use and copyright an AI video, what is legal, what it costs, what still looks wrong, and when to film instead. Sourced, checked September 2026.',
  published: '2026-03-08',
  updated: '2026-09-30',
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
const USCO_REPORT = 'https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf'
const YOUTUBE_DISCLOSURE = 'https://support.google.com/youtube/answer/14328491'
const RUNWAY_TERMS = 'https://runway.com/terms-of-use'
const LEMONLIGHT = 'https://www.lemonlight.com/blog/ai-video-production-cost/'

const FAQS = [
  {
    q: 'Can I use AI videos for commercial use?',
    a: 'Usually yes, but the permission comes from three places you should check, not from the fact that AI made it. The video model\'s terms must allow commercial use of its outputs (Runway\'s terms, for example, say it "does not restrict your commercial use of your Outputs", checked September 2026). Every music track and voice needs a license for the channels and territories you will run it in. Any real person\'s face or voice needs their written consent. When a studio such as Ruminate X makes the film, the contract should confirm all three and transfer the final files to you.',
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
    a: 'It depends on who makes it. Self-serve AI video tools cost about $20 to $300 a month (Lemonlight, March 2026), and you write, generate and edit yourself. Studios that make finished AI commercials publish prices from about USD 1,500 to several thousand dollars for a short spot, and more for broadcast work. Ruminate X quotes each brand film and commercial from the brief; published prices at every level are on the Ruminate X AI video cost page.', // claims-ok: Lemonlight AI video production cost guide (March 2026), linked on this page; MAW AI Studios price cited and linked on the cost page
  },
  {
    q: 'Are AI-generated videos good?',
    a: 'They are good enough for commercials and brand films when someone checks every shot. Generated footage still breaks in predictable places: faces in close-up, hands holding objects, a product\'s packaging and label, logos and any text on screen, and the same person across many shots. A studio such as Ruminate X regenerates the shots that fail and sets logos and text in the edit from the brand\'s own files. Films built on landscapes, objects, a made world and a voiceover hold up best.',
  },
  {
    q: 'Will videography be replaced by AI?',
    a: 'Not for work that records something real. Testimonials, an executive speaking, event coverage, a real product demo and documentary still need a camera and a crew. AI replaces the shoot for films that could only be made with sets, travel, many locations or impossible images, which is where an AI-only studio such as Ruminate X works. Many brands will use both: a crew for their people, AI for the cinematic brand film and commercial.',
  },
  {
    q: 'How do I avoid copyright issues with AI video?',
    a: 'Do not prompt for a named artist\'s style, a film\'s characters, a celebrity or another brand\'s logo or product. Use licensed music and voice, and keep the licenses. Use a video model whose terms allow commercial use. Keep the brief, boards and edit files, which document the human work. And have the contract with your studio assign the finished film to you and promise that the studio did not knowingly copy protected material. This is not legal advice.',
  },
  {
    q: 'Is there an AI film production studio I can hire?',
    a: 'Yes. AI film studios take a brief and deliver a finished brand film or commercial, the way a production company does, but generate the footage instead of shooting it. Ruminate X is one, based in Calgary, Canada: every frame it delivers is made with generative AI, with no film crews, sets or location shoots. Others include studios that add AI to a traditional production company and self-serve tools you run yourself.',
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
          A brand can use an AI video commercially when the model&apos;s terms allow it, the music and voice are
          licensed and any real person has consented. US copyright protects only the human work in it, such as the
          script and the edit, so the contract with the studio does most of the protecting. Making AI video is legal; the
          content of a specific ad is what your lawyer checks. Answers to each question are below, with sources checked in
          September 2026.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="Rights" title="Commercial use, copyright and what is legal">
        <p>
          Three different questions get mixed up. <strong>Can you use it?</strong> That depends on the video model&apos;s
          terms (<a href={RUNWAY_TERMS}>Runway&apos;s terms of use</a> say Runway &ldquo;does not restrict your commercial use of
          your Outputs&rdquo;), the music and voice licenses, and consent from any real person shown. <strong>Can you own
          it?</strong> The{' '}
          <a href={USCO_REPORT}>US Copyright Office&apos;s January 2025 report on copyrightability</a> concluded that
          prompts alone do not make someone the author of AI output; human work visible in the result, such as the script
          and the selection and arrangement of shots, can be protected. <strong>Is it lawful?</strong> Making it is. A
          specific ad can still break the law through an unconsented likeness, a copied work, a false claim or a missing
          disclosure.
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
          Self-serve tools cost about $20 to $300 a month (<a href={LEMONLIGHT}>Lemonlight, March 2026</a>); you do the
          writing, generating and editing. A studio charges for the finished film. {studio} quotes each film from the
          brief; published prices from tools to studios to traditional agencies are in{' '}
          <Link href="/blog/how-much-does-ai-video-production-cost">how much AI video production costs</Link>. {/* claims-ok: Lemonlight AI video production cost guide (March 2026), linked here */}
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
        title="Should Ruminate X make your film?"
        hire={[
          'A brand or marketing manager who needs a cinematic brand film or commercial without a shoot.',
          'A pharma, pharmacy, lab or medical marketer with a review process for claims, who needs images no camera can film.',
          'An agency producer who needs an AI production partner for a client film.',
        ]}
        instead={[
          'Your film needs your own people, a real customer or a real event on camera: hire a crew.',
          'You need dozens of simple training or update videos: a self-serve avatar tool costs less.',
          'Your audience is likely to reject a visibly AI-made film: film it.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/guides/who-owns-ai-video', title: 'Who owns an AI video', note: 'Copyright, model terms and the contract clauses a brand needs.' },
          { href: '/blog/how-much-does-ai-video-production-cost', title: 'How much AI video production costs', note: 'Published prices from tools to studios.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'How an AI commercial is made and which kind of company to hire.' },
          { href: '/comparison/ai-agency-vs-traditional-agency', title: 'AI video agency vs traditional production', note: 'When to film and when to generate.' },
          { href: '/ai-avatar-videos', title: 'AI avatar video production', note: 'Presenter and spokesperson videos, consent and disclosure.' },
        ]}
      />

      <GuideCta
        title="Ask us about your film"
        body="Send the film type, length, where it will run and your deadline. We answer rights and review questions before we quote."
      />
    </Guide>
  )
}
