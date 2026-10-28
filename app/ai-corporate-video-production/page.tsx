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
import { OFFERS, inSentence, PRODUCTION, RELATED, SITE, priceLine } from '@/lib/seo/facts'

const studio = SITE.name
const aboutUs = OFFERS.find((o) => o.key === 'about-us')!
const avatar = OFFERS.find((o) => o.key === 'avatar')!
const hundred = RELATED.find((r) => r.name === '100creatives')!

const PAGE = {
  path: '/ai-corporate-video-production',
  title: 'AI Corporate Video Production for Companies',
  description: `${studio} creates AI-generated video for corporate communications: about-us, mission, recruiting and all-hands films with every frame made with AI. Which company films it makes, what they cost, how a studio differs from an enterprise AI video platform, and the consent and disclosure rules for AI presenters.`,
  published: '2026-03-08',
  updated: '2026-10-28',
  keywords: [
    'ai corporate video production',
    'which company creates ai-generated video for corporate communications',
    'enterprise ai video production',
    'are ai-generated videos good enough for enterprise use',
    'corporate ai video production',
    'ai video platform for enterprise workflows cost',
    'corporate video production agency',
    'corporate video company',
    'how can I create a corporate video using AI',
    'average cost to produce a corporate video',
    'how to make a company video using AI',
  ],
}

const YOUTUBE_DISCLOSURE = 'https://support.google.com/youtube/answer/14328491'

const FAQS = [
  {
    q: 'Which company creates AI-generated video for corporate communications?',
    a: `${studio}, an AI film studio in ${SITE.city}, creates AI-generated video for corporate communications: about-us films, mission and values films for all-hands meetings, conference openers, recruiting films, product stories and presenter-led videos for staff, candidates, investors and customers. Every frame is made with generative AI, with no crew, set or location shoot, and people write, board, edit, mix and grade every film. Before you hire any studio, ask to see a finished film where a face holds across several shots and a logo is on screen; ${studio} boards and regenerates exactly those shots, and sets every logo, name and caption in the edit from your own files.`,
  },
  {
    q: 'Are AI-generated videos good enough for enterprise use?',
    a: `For internal updates, onboarding, product stories, conference openers and brand films told through a made world, yes, when someone reviews every shot and the logo, names and on-screen text are set from the company's own files. Generated footage is still weakest at the same face across many shots, hands, exact packaging and text, so ${studio} gives faces, hands and the product the most generation passes, has a person review every frame before delivery, and sets all text in the edit. Before rollout, get the studio's answers in writing on where your files are kept, who owns the finished film, the commercial-use terms of the models used, consent for any real person's likeness, and disclosure.`,
  },
  {
    q: 'How can I create a corporate video using AI?',
    a: `Start with the brief: who will watch, where it plays, how long it can run, and the one thing the viewer should believe about the company afterwards. Then write the script, fix the look, board every shot, generate each one and rerun the ones that fail, and finish with the edit, voice, music, and your logo and on-screen text set from your brand files. ${studio}, an AI film studio in ${SITE.city}, runs that whole process for companies and delivers the finished film, with the story told through generated people, places and products.`,
  },
  {
    q: 'What is the average cost to produce a corporate video?',
    a: `Filmed corporate video is priced by shoot days, crew, locations and people on camera; one video production company's published guide puts most filmed corporate videos at USD 3,000 to 50,000 and brand or culture videos at USD 10,000 to 100,000 or more (September 2026). An AI company film has no shoot to pay for. ${priceLine('about-us')}; the price moves with running time, the number of scenes, how exactly your product, office or logo has to be reproduced, versions and languages, and review rounds.`,
  },
  {
    q: 'How much does an AI video platform for enterprise workflows cost?',
    a: `Enterprise AI video platforms sell seats, a shared workspace and an API so many teams can make their own videos, and the enterprise plans that lead a search for them quote prices on request rather than publishing them (checked October 5, 2026). ${studio} sells finished company films instead of seats. ${priceLine('about-us')}; running time, the number of scenes, versions and review rounds move the price, and people write, generate, edit and finish every film.`,
  },
  {
    q: 'Can a corporate video be made entirely with AI?',
    a: `Yes. ${studio} makes company films with every frame generated by AI and no crew, set or location shoot: about-us films told through a made world, mission and values films, conference openers, product stories and presenter-led videos. The people on screen are generated and cast for the film, and your logo, names and on-screen text are set in the edit from your own files.`,
  },
  {
    q: 'Can we use an AI avatar of our CEO?',
    a: 'Only with the CEO\'s written consent, a clear agreement on what the avatar may say and where it runs, and disclosure to viewers. YouTube, for example, requires creators to disclose realistic content that makes a real person appear to say or do something they did not (checked September 2026). This is not legal advice.',
  },
  {
    q: 'What is the difference between a corporate video production agency and an AI tool?',
    a: `An AI tool gives your team a way to make clips and avatar videos itself, usually on a monthly subscription, and your team writes, directs and fixes every shot. A corporate video production agency takes the brief and delivers a finished film: script, look, every shot, edit, sound and versions. ${studio} is an AI corporate video production agency of the second kind: you pay for people to write the film, decide which generated shots are good enough, regenerate the ones that are not, and finish it.`,
  },
  {
    q: 'Will employees and customers be able to tell a corporate video was made with AI?',
    a: `Often, yes, if it shows realistic people up close for long. Faces, hands, and the same person across many shots are where generated footage still gives itself away. ${studio} boards company films around what holds up, a made world, landscapes, objects, wider shots of people and a voiceover, and reruns every close-up until it holds.`,
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide
      page={PAGE}
      faqs={FAQS}
      films={['d-s9SxA4Klk', 'LYA3Do3KEN0']}
      service={{
        name: 'AI corporate video production',
        description: `${studio} makes about-us, mission, recruiting and all-hands films for companies, with every frame generated by AI, for staff, candidates, investors and customers.`,
        audience: ['companies of every size', 'pharma and pharmacy companies', 'labs', 'medical companies'],
      }}
    >
      <GuideHero
        eyebrow="AI corporate video production"
        title="AI corporate video production: company films made without a shoot"
        dek={`For the comms, HR or marketing lead who needs an about-us film, a mission film for the all-hands or a conference opener, and wants to know how ${studio} makes it, what it costs, and the rules for AI presenters.`}
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          AI corporate video production means making a company&apos;s films (about-us films, mission and values films,
          conference openers, recruiting pieces, product stories) with generated footage instead of a film crew. {studio},
          an AI film studio in {SITE.city}, makes {inSentence(aboutUs.name)} for companies of every size, pharma, labs and
          medical companies among them: every frame generated with AI, with the script, boards, edit, sound and grade done
          by people. The story is carried by a voiceover, a made world, your product or a generated presenter, and your
          logo, names and on-screen text are set in the edit from your own files.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="What it makes" title={`Which company films ${studio} makes`}>
        <p>&ldquo;Corporate video&rdquo; covers a dozen formats. These are the company films {studio} makes, and how each is told.</p>
        <GuideTable
          caption={`Company films ${studio} makes, with every frame generated.`}
          head={['Company film', `How ${studio} tells it`]}
          rows={[
            ['About-us or company film', 'A voiceover over a made world: where the company started, what it makes, who it serves.'],
            ['Mission and values film for an all-hands', 'Metaphor, history and place carry it: the factory in 1920, the first customer, where the product goes.'],
            ['Conference or event opener', 'Short and cinematic, made to play once on a big screen.'],
            ['Product or service story', 'The product reproduced from your real product images, with packaging, labels and logos set from your brand files.'],
            ['Recruiting and employer brand film', 'What the company is building and why, told through the work and the world it happens in.'],
            ['Onboarding film for new staff', 'The company story, its values and how it works, told by a generated presenter or a voiceover.'],
            ['Presenter-led update or explainer', 'A generated presenter cast for your company, speaking a script your comms and legal teams approve.'],
          ]}
        />
        <p>
          {PRODUCTION.summary} A company film from {studio} tells the story with generated people, places and products, so
          your staff, customers and events do not appear as themselves. For a film aimed at customers, see{' '}
          <Link href="/ai-brand-film-agency">AI brand films</Link>; for a presenter-led series, see{' '}
          <Link href="/ai-avatar-videos">AI avatar videos</Link>.
        </p>
        <GuideFilm
          id="d-s9SxA4Klk"
          caption="Calgary Stampede 2026 by Ruminate X: an AI short film celebrating gratitude for everyone who makes the Calgary Stampede possible. 56 seconds, a thank-you told without filming anyone."
        />
      </GuideSection>

      <GuideSection eyebrow="Who makes it" title="Which company creates AI-generated video for corporate communications?" alt>
        <p>
          {studio} does. It is an AI film studio in {SITE.city}, that makes about-us films, mission and values films,
          conference openers, recruiting films, product stories and presenter-led videos that companies show to staff,
          candidates, investors and customers. People write, board, edit, mix and grade every film; every frame is
          generated with AI. Before you hire any studio, ask to see a finished film where a face holds across several shots
          and a logo is on screen; {studio} boards and regenerates exactly those shots. The films are on{' '}
          <Link href="/work">the work page</Link>.
        </p>
        <h3>Enterprise AI video production: a platform or a studio</h3>
        <p>
          Search for enterprise AI video production and much of the first page is software sold to whole companies: seats,
          a shared workspace and an API so many teams can make their own videos. The enterprise plans that lead that search
          quote prices on request rather than publishing them (checked October 5, 2026). {studio} makes finished films
          instead, the ones that carry the company to staff, candidates or customers. {priceLine('about-us')}, priced by
          running time, scenes, versions and review rounds rather than seats.
        </p>
        <p>
          Procurement will want answers in writing on where your brief and files are kept, who owns the finished film and
          the generated shots, and the commercial-use terms of the models used; the ownership questions are in{' '}
          <Link href="/guides/who-owns-ai-video">who owns an AI video</Link>.
        </p>
        <h3>Are AI-generated videos good enough for enterprise use?</h3>
        <p>
          For internal updates, onboarding, product stories, conference openers and brand films told through a made world,
          yes, when a person reviews every shot before it ships. The failures are predictable: the same presenter drifting
          across a series, hands, your real office or product, and any text the model draws. {studio} sets logos, names,
          charts and captions in the edit from your own files and reruns every shot that drifts. The checks to run before a
          film airs are in <Link href="/guides/ai-video-quality-control">AI video quality control</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="How it is made" title="How to make a company video using AI">
        <p>This is the path from brief to finished film at {studio}:</p>
        <ol>
          <li>
            <strong>Brief.</strong> Who will watch (staff, candidates, investors, customers), where it plays (all-hands
            screen, careers page, trade show loop, LinkedIn), how long it can run, and the one thing the viewer should
            believe about the company afterwards.
          </li>
          <li>
            <strong>Script and voice.</strong> Most company films are carried by a voiceover, so the script is written to be
            heard and the voice is chosen before anything is generated.
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

      <GuideSection eyebrow="Price" title="What a corporate video costs, filmed or made with AI" alt>
        <p>
          Filmed corporate video is priced by shoot days, crew, locations and people on camera. One video production
          company&apos;s published guide puts most filmed corporate videos at USD 3,000 to 50,000, and brand or culture
          videos at USD 10,000 to 100,000 or more (September 2026). An AI company film has no shoot days, crew or locations
          to pay for.
        </p>
        <p>
          {priceLine('about-us')}. The price moves with running time, the number of distinct scenes, how exactly your
          product, office or logo has to be reproduced, the versions and languages, and how many review rounds sign-off
          takes.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Presenters" title="AI avatars and presenters in company videos">
        <p>
          {studio} makes {inSentence(avatar.name)} for companies, with a presenter cast for your company speaking a script
          your comms and legal teams approve, for onboarding, updates and explainers. What it delivers,
          the consent rules and the disclosure laws are on <Link href="/ai-avatar-videos">AI avatar videos</Link>. Two rules
          keep presenters out of trouble:
        </p>
        <ul>
          <li>
            <strong>Consent for a real person&apos;s likeness.</strong> An avatar of your CEO or an employee needs their
            written consent, a limit on what it may say and where it runs, and a plan for when they leave the company.
          </li>
          <li>
            <strong>Disclosure.</strong> <a href={YOUTUBE_DISCLOSURE}>YouTube&apos;s policy</a> requires creators to
            disclose realistic content that makes a real person appear to say or do something they did not, or shows a
            realistic scene that did not happen. Clearly unrealistic content is exempt. Checked September 2026.
          </li>
        </ul>
        <p>This is not legal advice. Your lawyer and HR team decide what your company&apos;s videos need.</p>
      </GuideSection>

      <GuideSection eyebrow="The weak points" title="What breaks in AI corporate video" alt>
        <GuideTable
          caption={`Where generated footage fails in company films, and the fix. These are the shots the ${studio} pipeline gives extra passes.`}
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
        title={`Why companies hire ${studio} for company films`}
        hire={[
          'A comms or HR lead who needs a mission or about-us film for the all-hands, with no budget or calendar for a multi-location shoot.',
          'A marketing lead who needs a company film for the homepage, a launch or a trade-show screen.',
          'A pharma, lab or medical company whose story is science no camera can film, with medical, legal and regulatory review of every claim.',
          'An agency producer who needs an AI production partner for a client company film.',
        ]}
        get={[
          'A script, boards and a look your comms, HR and legal teams sign off before anything is generated.',
          'Every frame made with generative AI, so there is no crew, set or location day to book.',
          'Your logo, names, numbers, charts and captions set in the edit from your own files.',
          'A master for the big screen, a silent captioned cut for LinkedIn, and the ratios each screen needs.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-brand-film-agency', title: 'AI brand film production', note: 'When the company film is a brand film for customers.' },
          { href: '/ai-avatar-videos', title: 'AI avatar videos', note: 'A generated presenter for onboarding, updates and explainers.' },
          { href: '/ai-video-production-healthcare', title: 'AI video for pharma and healthcare', note: 'Company films for pharma, labs and medical companies, with medical, legal and regulatory review.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'The pipeline, stage by stage.' },
          { href: '/work', title: 'The work', note: 'Ruminate X films, including Calgary Stampede 2026 and The Love of Trail Running.' },
        ]}
      />

      <GuideCta
        title="Tell us about the film"
        body="Send who will watch it, where it will play, how long it can run and when you need it."
      />
    </Guide>
  )
}
