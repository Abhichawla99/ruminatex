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
  path: '/ai-video-production-enterprise',
  title: 'AI Corporate Video Production for Companies',
  description:
    'Which corporate videos a company can make with AI and which still need a camera, how an AI company film gets made, what corporate video costs filmed and with AI, and the consent and disclosure rules for AI presenters.',
  published: '2026-03-08',
  updated: '2026-09-26',
  keywords: [
    'ai corporate video production',
    'corporate ai video production',
    'corporate video production agency',
    'corporate video company',
    'how can I create a corporate video using AI',
    'average cost to produce a corporate video',
    'how to make a company video using AI',
  ],
}

const studio = SITE.name
const aboutUs = OFFERS.find((o) => o.key === 'about-us')!
const avatar = OFFERS.find((o) => o.key === 'avatar')!
const brandFilm = OFFERS.find((o) => o.key === 'brand-film')!
const hundred = RELATED.find((r) => r.name === '100creatives')!

const FAQS = [
  {
    q: 'How can I create a corporate video using AI?',
    a: 'Decide first whether the video needs real people on camera. If it does (your CEO, your staff, a customer), film them. If the story can be told with a voiceover over a made world, a product, or a presenter you have the rights to, you can make it with AI: agree the brief and script, fix the look, generate each shot and rerun the ones that fail, then edit, add voice and music, and set your logo and on-screen text from your own brand files. Self-serve avatar tools handle simple training and update videos; an AI studio such as Ruminate X handles cinematic company films.',
  },
  {
    q: 'What is the average cost to produce a corporate video?',
    a: 'Vidico, a video production company, puts most professionally produced corporate videos at USD 3,000 to 50,000, with brand and culture videos at 10,000 to 100,000 or more and training videos at 3,000 to 25,000 (September 2026). D-MAK Productions lists executive interview videos at 5,000 to 10,000 and recruitment videos at 5,000 to 25,000 (May 2026). AI-made company films are priced by length, number of scenes and review rounds instead of shoot days. Ruminate X quotes each film from the brief.',
  },
  {
    q: 'Can a corporate video be made entirely with AI?',
    a: 'Yes, when nothing in it has to be a real person being themselves. Ruminate X makes every frame with generative AI, with no crew, set or location shoot, and that works for about-us films told through a made world, mission and values films, conference openers and product stories. It does not work for employee testimonials, a real executive speaking, or event coverage. Those need a camera.',
  },
  {
    q: 'Can we use an AI avatar of our CEO?',
    a: 'Only with the CEO\'s written consent, a clear agreement on what the avatar may say and where it runs, and disclosure to viewers. YouTube, for example, requires creators to disclose realistic content that makes a real person appear to say or do something they did not (checked September 2026). Most companies use an avatar for routine updates and training, and film the executive for anything that carries their personal credibility. This is not legal advice.',
  },
  {
    q: 'What is the difference between a corporate video production agency and an AI tool?',
    a: 'An AI tool gives your team a way to make clips and avatar videos yourselves, usually on a monthly subscription. A corporate video production agency, filmed or AI, takes the brief and delivers a finished film: script, look, every shot, edit, sound and versions. With an AI studio you pay for someone to decide which generated shots are good enough and to fix the ones that are not.',
  },
  {
    q: 'Will employees and customers be able to tell a corporate video was made with AI?',
    a: 'Often, yes, if it shows realistic people up close for long. Faces, hands, and the same person across many shots are where generated footage still gives itself away. Company films that use a made world, landscapes, objects and a voiceover hold up best. If your audience is likely to reject a visibly AI-made film, film it with a crew.',
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} films={['d-s9SxA4Klk', 'LYA3Do3KEN0']}>
      <GuideHero
        eyebrow="AI corporate video production"
        title="AI corporate video production: company films made without a shoot"
        dek="For the comms, HR or marketing lead who needs an about-us film, a mission film for the all-hands or a conference opener, and wants to know which of those AI can make and which still need a camera."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          AI corporate video production means making a company&apos;s films (about-us films, mission and values films,
          conference openers, recruiting pieces, product stories) with generated footage instead of a film crew. It works
          when the story can be told through a voiceover, a made world, the product or a presenter you have the rights to.
          It does not work when the video depends on your real people being themselves: an executive speaking, staff
          testimonials, event coverage. Filmed corporate videos mostly cost USD 3,000 to 50,000 (Vidico, September 2026).
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="What AI can make" title="Which corporate videos AI can make, and which need a camera">
        <p>
          &ldquo;Corporate video&rdquo; covers a dozen formats.{' '}
          <a href="https://corp.kaltura.com/blog/corporate-video-production/">Kaltura&apos;s guide to corporate video production</a> lists
          promotional videos, training, event coverage, testimonials and explainers. They split cleanly into the ones that
          need real people and the ones that do not.
        </p>
        <GuideTable
          caption="How each common corporate format fits an AI-only studio. Formats from the Kaltura and D-MAK Productions guides; the fit column is Ruminate X's view."
          head={['Corporate video', 'Made with AI?', 'Why']}
          rows={[
            ['About-us or company film', 'Yes, if told through a voiceover and a made world', 'The subject is the company itself. If it needs your staff at work, film it.'],
            ['Mission and values film for an all-hands', 'Yes', 'Metaphor, history and place carry it: the factory in 1920, the first customer, where the product goes.'],
            ['Conference or event opener', 'Yes', 'Short, cinematic, played once on a big screen. A shoot would need days of travel for the same scale.'],
            ['Product or service story', 'Yes, with care on the product', 'Packaging, labels and logos need extra passes and are set from your brand files.'],
            ['Recruiting and employer brand', 'Partly', 'AI can make the brand piece. Candidates want to see real colleagues, so film the people.'],
            ['Executive message', 'Only as a consented avatar', 'Anything that rests on the executive\'s own credibility should be filmed.'],
            ['Training and compliance', 'Yes, but a self-serve tool costs less', 'Avatar tools such as Synthesia or HeyGen are built for volume training at subscription prices.'],
            ['Testimonials and event coverage', 'No', 'These are records of real people and real events. Hire a crew.'],
          ]}
        />
        <p>
          {studio} makes {aboutUs.name.toLowerCase()}, {aboutUs.plain}; {brandFilm.name.toLowerCase()}; and{' '}
          {avatar.name.toLowerCase()}, {avatar.plain}. {PRODUCTION.summary}
        </p>
        <GuideFilm
          id="d-s9SxA4Klk"
          caption="Calgary Stampede 2026 by Ruminate X: an AI short film celebrating gratitude for everyone who makes the Calgary Stampede possible. 56 seconds, a thank-you told without filming anyone."
        />
      </GuideSection>

      <GuideSection eyebrow="How it is made" title="How to make a company video using AI" alt>
        <p>This is the path from brief to finished film at {studio}:</p>
        <ol>
          <li>
            <strong>Brief.</strong> Who will watch (staff, candidates, investors, customers), where it plays (all-hands
            screen, careers page, trade show loop, LinkedIn), how long it can run, and the one thing the viewer should
            believe about the company afterwards.
          </li>
          <li>
            <strong>Script and voice.</strong> Most company films are carried by a voiceover. Decide early whether it is a
            licensed voice, a synthetic voice or a real person from the company recorded in a quiet room.
          </li>
          <li>
            <strong>Look.</strong> Palette, light, casting and texture, fixed before anything is generated so the last
            shot matches the first. <a href={hundred.url}>{hundred.name}</a>, {hundred.role}, leads this stage.
          </li>
          <li>
            <strong>Boards and generation.</strong> Every shot is boarded, generated, checked against its board and
            generated again. Faces, hands and your product get the most passes.
          </li>
          <li>
            <strong>Edit, sound, brand.</strong> The cut, music and sound design, one grade across all shots, and your logo,
            names, charts and captions set in the edit from your own files. Generated text on screen is never trusted.
          </li>
          <li>
            <strong>Review and versions.</strong> Comms, HR, legal and, for health companies, medical review sign off; then
            the master, a silent captioned cut for LinkedIn, and the ratios each screen needs.
          </li>
        </ol>
        <p>
          Each stage in more detail is on <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.
          If you are a pharma, lab or medical company, review takes longer; the questions reviewers ask about AI footage
          are on <Link href="/ai-video-production-healthcare">AI video for pharma and healthcare</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Price" title="What a corporate video costs, filmed or made with AI">
        <p>
          Filmed corporate video is priced by shoot days, crew, locations and people on camera. An AI company film is
          priced by running time, the number of distinct scenes, how exactly your product, office or logo has to be
          reproduced, and how many review rounds sign-off takes.
        </p>
        <GuideTable
          caption={
            <>
              Published prices from{' '}
              <a href="https://vidico.com/news/corporate-video-cost/">Vidico, &ldquo;Corporate Video Cost&rdquo;</a>{' '}
              (September 2026) and{' '}
              <a href="https://dmakproductions.com/corporate-video-production-cost/">
                D-MAK Productions, &ldquo;Corporate Video Production Cost&rdquo;
              </a>{' '}
              (May 2026), both video production companies. Checked September 2026. Ruminate X does not publish a price
              list.
            </>
          }
          head={['Corporate video', 'Published price (USD)', 'Source']}
          rows={[
            ['Most professionally produced corporate videos', '3,000 to 50,000', 'Vidico'],
            ['Brand or culture video', '10,000 to 100,000 and up', 'Vidico'],
            ['Training or internal comms video', '3,000 to 25,000', 'Vidico'],
            ['Executive interview video', '5,000 to 10,000', 'D-MAK Productions'],
            ['Recruitment video', '5,000 to 25,000', 'D-MAK Productions'],
            ['Corporate brand documentary', '15,000 to 100,000 and up', 'D-MAK Productions'],
            ['AI-generated and DIY', '100 to 3,000', 'Vidico'],
          ]}
        />
        <p>
          Vidico&apos;s AI-and-DIY tier describes avatar subscriptions, stock footage and templates, and Vidico says it
          suits internal or draft content. That matches what those tools are for. A cinematic company film made by an AI
          studio sits in a different place: someone writes it, designs the look, reruns every failed shot and finishes the
          sound and grade. {studio} quotes each film from the brief. What moves the number, and the published prices for
          AI studios, are in <Link href="/blog/how-much-does-ai-video-production-cost">how much AI video production costs</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Presenters" title="AI avatars and presenters in company videos" alt>
        <p>
          An avatar video puts a generated presenter on screen reading your script. Companies use them for onboarding,
          policy updates and multi-language versions of the same message. Three rules keep them out of trouble:
        </p>
        <ul>
          <li>
            <strong>Consent for a real person&apos;s likeness.</strong> An avatar of your CEO or an employee needs their
            written consent, a limit on what it may say and where it runs, and a plan for when they leave the company.
          </li>
          <li>
            <strong>Disclosure.</strong>{' '}
            <a href="https://support.google.com/youtube/answer/14328491">YouTube&apos;s policy</a> requires creators to
            disclose realistic content that makes a real person appear to say or do something they did not, or shows a
            realistic scene that did not happen. Clearly unrealistic content is exempt. Checked September 2026.
          </li>
          <li>
            <strong>Credibility.</strong> Layoffs, results, apologies and anything personal should come from the real
            person on camera.
          </li>
        </ul>
        <p>This is not legal advice. Your lawyer and HR team decide what your company&apos;s videos need.</p>
      </GuideSection>

      <GuideSection eyebrow="The weak points" title="What breaks in AI corporate video">
        <GuideTable
          caption="Where generated footage fails in company films, and the fix to expect. These are the shots the Ruminate X pipeline gives extra passes."
          head={['Problem', 'Why it matters in a company film', 'The fix']}
          rows={[
            ['Your logo, names and charts', 'Warped letters on your own brand in front of your own staff', 'Set every logo, name, number and caption in the edit from your files'],
            ['Your real office or product', 'Staff know what the building and product look like', 'Show them only if they can be matched; otherwise use a made world'],
            ['The same presenter across a series', 'A face that drifts between episodes', 'Fix the casting once; regenerate every shot that drifts'],
            ['Faces in close-up', 'Stiff or uncanny faces undercut an emotional message', 'Board wider shots; rerun close-ups until they hold'],
            ['Hands and objects', 'Extra fingers, a pen that melts into a hand', 'Stage the action around hands; rerun the rest'],
          ]}
        />
        <p>
          Audiences judge realistic generated people hardest. Coca-Cola&apos;s and McDonald&apos;s AI holiday ads, both
          full of generated people, drew the strongest backlash of the brand AI ads so far; the cases are in{' '}
          <Link href="/guides/brands-using-ai-commercials">brands using AI commercials</Link>.
        </p>
        <GuideFilm
          id="LYA3Do3KEN0"
          caption="The Love of Trail Running, an original Ruminate X film (not client work). 96 seconds, every shot generated. Watch whether the runner still looks like the same person at the end."
        />
      </GuideSection>

      <GuideFit
        title="Should Ruminate X make your company video?"
        hire={[
          'A comms or HR lead who needs a mission or about-us film for an all-hands, with no budget or calendar for a multi-location shoot.',
          'A marketing lead who needs a cinematic company film for the homepage, a launch or a trade-show screen.',
          'A pharma, lab or medical company whose story is science no camera can film, with a review process for the claims.',
          'An agency producer who needs an AI production partner for a client company film.',
        ]}
        instead={[
          'Your staff, executive or customers speak as themselves: hire a corporate video production company with a crew.',
          'You need event coverage, a site tour or a real product demo: film it.',
          'You need dozens of training or policy videos: a self-serve avatar tool such as Synthesia or HeyGen costs less.',
          'Your staff or customers are likely to reject a visibly AI-made film: film it.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-brand-film-agency', title: 'AI brand film production', note: 'When the company film is a brand film for customers.' },
          { href: '/blog/how-much-does-ai-video-production-cost', title: 'How much AI video production costs', note: 'Published prices at four levels and what each buys.' },
          { href: '/ai-video-production-agencies', title: 'How to hire an AI video production agency', note: 'Seven questions to ask before signing.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'The pipeline, stage by stage.' },
          { href: '/guides', title: 'Guides for brands buying AI film', note: 'Budgets, deliverables and quality checks.' },
        ]}
      />

      <GuideCta
        title="Tell us about the film"
        body="Send who will watch it, where it will play, how long it can run and when you need it."
      />
    </Guide>
  )
}
