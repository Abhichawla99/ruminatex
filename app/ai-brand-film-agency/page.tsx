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
import { OFFERS, PRODUCTION, RELATED, SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/ai-brand-film-agency',
  title: 'AI Brand Film Production for Companies',
  description:
    'What an AI brand film is, how one gets made without a shoot, what makes generated footage look cinematic, what brand films cost with AI and with a crew, what still breaks, who owns it, and when a company should film real people instead.',
  published: '2026-03-07',
  updated: '2026-10-10',
  keywords: [
    'ai brand film',
    'ai brand film production company',
    'ai cinematic video production',
    'cinematic brand film',
    'cinematic brand storytelling agency',
    'can i use ai to create a cinematic video',
    'ai marketing film production',
    'ai filmmaking agency',
    'ai video agency for brands',
    'how much does a brand film cost',
  ],
}

const studio = SITE.name
const brandFilm = OFFERS.find((o) => o.key === 'brand-film')!
const aboutUs = OFFERS.find((o) => o.key === 'about-us')!
const hundred = RELATED.find((r) => r.name === '100creatives')!
const trail = film('LYA3Do3KEN0')
const VEO = 'https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/veo/3-1-generate'
const VEO_MAX_SECONDS = 8
const trailShots = Math.ceil((trail.durationSeconds ?? 0) / VEO_MAX_SECONDS)

const FAQS = [
  {
    q: 'What is an AI brand film?',
    a: 'An AI brand film is a story-driven film about what a brand stands for, usually 60 seconds to a few minutes long, in which the footage is generated with AI instead of filmed. People still write it, design how it looks, choose and fix every shot, and edit, score and grade it. Ruminate X makes brand films this way: every frame is generated, with no crew, set or location shoot.',
  },
  {
    q: 'Which famous brands are using AI for brand films?',
    a: 'One public example is Moncler. The agency R/GA made an experimental film for Moncler with Google\'s Veo video model in four weeks, and it was unveiled at Cannes Lions in 2025 (R/GA, August 2025). Moncler did not publish a budget, and few brands do.',
  },
  {
    q: 'Can I use AI to create a cinematic video?',
    a: `Yes, for scenes of a made world: landscapes, weather, period settings, products in places they have never been. Generators such as Google's Veo 3.1 make clips of 4, 6 or 8 seconds at 24 frames per second, in 16:9 or 9:16 (Google Cloud documentation, October 2026), so a cinematic film is dozens of separate shots that someone has to keep in the same frame, lens, light and grade. Ruminate X makes brand films this way. Close-ups of real-looking people holding emotion are still the hardest shots to make convincing.`,
  },
  {
    q: 'How much does a brand film cost?',
    a: 'Filmed brand videos from US production companies are published at USD 10,000 to 25,000 for a lean one-day shoot, 25,000 to 75,000 for one to three shoot days, and 75,000 to 200,000 or more for multi-location films with actors (Argus HD, August 2026). AI studios publish lower figures, from about USD 3,500 for a 60-second cinematic AI film (Gisteo, via Versely, September 2026). Ruminate X quotes each brand film from the brief.',
  },
  {
    q: 'What does an AI brand film production company actually do?',
    a: 'It turns a brief into a finished film: the idea and script, a fixed look for the brand world, boards for every shot, many generation passes per shot, then edit, voice, music, sound design, grade and the versions each channel needs. A tool gives you clips; the production company decides which clips are good enough and fixes the ones that are not.',
  },
  {
    q: 'Is it legal to make a brand film with AI?',
    a: 'Yes, but check three things with your lawyer. The model and music licenses must allow commercial use; the film must not copy a real person\'s likeness or another company\'s work without permission; and platforms such as YouTube ask for disclosure when realistic content is made with AI. Copyright in the result depends on the human work in it (US Copyright Office, January 2025). This is not legal advice.',
  },
  {
    q: 'When should a company not make its brand film with AI?',
    a: 'When the story depends on real people being themselves: your founder speaking, your staff at work, a real customer or patient. Also when the film documents a real place or event, or when your audience is likely to reject a visibly AI-made film. A documentary or corporate production company is the right hire for those; Ruminate X is not.',
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} films={['LYA3Do3KEN0', 'd-s9SxA4Klk']}>
      <GuideHero
        eyebrow="AI brand film production"
        title="AI brand film production: your story, made without a shoot"
        dek="For the brand or marketing lead, founder or comms head who wants a cinematic film about what the company stands for, and wants to know what an AI-made one involves before briefing a studio."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          An AI brand film tells the story of what a company stands for, and every shot in it is generated with AI instead
          of filmed. A studio still writes it, fixes the look of the brand world before anything is generated, reruns every
          shot where a face, a hand or the product drifts, then edits, scores and grades it. AI suits brand films built on
          a made world: landscapes, metaphors, period scenes, places you could never afford to shoot. It does not suit a
          film that needs your own people on camera.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="The format" title="What a brand film is for, and how it differs from an ad">
        <p>
          A commercial sells one product to one audience in 15 to 60 seconds. A brand film is longer and slower, and it
          sells the company: why it exists, what it believes, what it feels like to buy from it or work for it. Companies
          play it on the homepage, at the top of a launch, at an all-hands or conference, in recruiting, and cut it down
          for paid social.
        </p>
        <p>
          {studio} makes {brandFilm.name.toLowerCase()}, {brandFilm.plain}, and {aboutUs.name.toLowerCase()},{' '}
          {aboutUs.plain}. {PRODUCTION.summary} Because nothing has to be filmed, the film can go where a shoot budget
          cannot: a mountain at dawn, a factory in 1920, the inside of a cell. Which company films AI can make, and which
          need your staff on camera, is on <Link href="/ai-video-production-enterprise">AI corporate video production</Link>.
        </p>
        <GuideFilm
          id="LYA3Do3KEN0"
          caption="The Love of Trail Running, an original Ruminate X film (not client work). 96 seconds, every shot generated, no location shoot."
        />
      </GuideSection>

      <GuideSection eyebrow="How it is made" title="How an AI brand film gets made" alt>
        <ol>
          <li>
            <strong>Brief.</strong> What the company stands for, who the film is for, where it will play, how long it can
            run, and the one feeling the viewer should leave with. Nothing is generated before this is agreed.
          </li>
          <li>
            <strong>Brand world.</strong> Palette, light, lenses, casting, wardrobe and texture, decided before the first
            frame so the last shot matches the first. <a href={hundred.url}>{hundred.name}</a>, {hundred.role}, leads
            this stage.
          </li>
          <li>
            <strong>Script and boards.</strong> A 90-second film can run to dozens of shots. Each gets a board with framing,
            movement and length, and the voiceover or music is timed against them.
          </li>
          <li>
            <strong>Generation passes.</strong> Each shot is generated, checked against its board and generated again. Many
            takes are thrown away. Faces, hands and the product get the most passes.
          </li>
          <li>
            <strong>Edit, sound, grade.</strong> The cut is built for pace and feeling, then voice, score and sound design
            go in, and one grade ties the shots together.
          </li>
          <li>
            <strong>Versions.</strong> The master, cutdowns for paid social, and the aspect ratios each channel needs.
          </li>
        </ol>
        <p>
          The same pipeline with more detail on each stage is on{' '}
          <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Cinematic" title="Cinematic AI brand films: what makes generated footage look like film">
        <p>
          A cinematic brand film is one where every shot looks chosen: a wide frame, a lens picked for the shot, light
          that comes from somewhere in the scene, a camera that moves for a reason, shots held long enough to land, one
          grade across the whole film, and sound built for it. Those are decisions a cinematographer and an editor make,
          and you can check each one by pausing the film. A video generator gives you a good-looking clip. It does not keep
          those decisions the same across 40 shots unless someone fixes them first and checks every take against them.
        </p>
        <p>
          Generators make short clips, and that is where the work comes from. Google&apos;s <a href={VEO}>Veo 3.1 documentation</a> lists clips of 4, 6 or 8
          seconds at 24 frames per second, in 16:9 or 9:16 only (checked October 2026). At{' '}
          {VEO_MAX_SECONDS} seconds a clip, a film as long as {trail.title} ({trail.durationSeconds} seconds) needs at
          least {trailShots} generated shots, and a film cut for pace uses many more. Each one is generated separately,
          so each one can drift.
        </p>
        <GuideTable
          caption={
            <>
              Clip lengths, frame rate and aspect ratios from Google&apos;s Veo 3.1 documentation, checked October 2026.
              The defaults are what to look for when you review a studio&apos;s reel.
            </>
          }
          head={['The choice', 'What a generator tends to do', 'What to ask a studio for']}
          rows={[
            ['Frame', 'Outputs 16:9 or 9:16; a 2.39:1 widescreen film is a crop of that', 'Shots framed for the final crop on the boards, so heads, hands and the product sit inside it'],
            ['Lens and focus', 'Soft background blur on nearly every shot, changing from take to take', 'A lens and depth of field decided per shot in the brand world, held across the film'],
            ['Light', 'Even, flattering light with no clear source; the time of day shifts between shots', 'Light that comes from a source in the scene (a window, the sun, a lamp), kept the same through a scene'],
            ['Camera movement', 'A slow drifting push-in on shot after shot', 'Movement boarded for each shot, and a locked-off frame where the story needs stillness'],
            ['Shot length', 'Clips of 4 to 8 seconds', 'Long moments planned as two or three shots with cuts, timed against the music or voiceover'],
            ['Texture and grade', 'Clean, over-sharp images and smooth, plastic-looking skin', 'One grade across every shot, with texture added in finishing so shots from different passes match'],
            ['Sound', 'Generated ambience or stock music', 'Voice, score and sound design built in the edit'],
          ]}
        />
        <h3>Can I use AI to create a cinematic video?</h3>
        <p>
          Yes, when the film is built on a made world. Self-serve tools such as Higgsfield&apos;s Cinema Studio, Kling and
          Luma sell cinematic generation directly, and they suit a creator making clips for their own channel. A brand
          film adds the parts those tools leave to you: a script, the brand world fixed before generation, boards for every
          shot, reruns of what drifts, and an edit, score and grade that make the shots one film. {studio} works through
          those stages on every brand film.
        </p>
        <p>
          A quick test for any reel, ours included: pick a film longer than 60 seconds and pause it on five frames from
          different scenes. If the light, the lens look and the colour hold, someone directed it. If each frame looks like
          a different generator setting, the shots were picked one at a time.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The weak points" title="What breaks in a longer AI film" alt>
        <p>
          A brand film runs two to six times longer than a 30-second ad, so the weak points of generated footage show up
          more often:
        </p>
        <GuideTable
          caption="Where generated footage fails in brand films, and the fix to expect. These are the shots the Ruminate X pipeline gives extra generation passes."
          head={['Problem', 'Why it matters in a brand film', 'The fix']}
          rows={[
            ['The same character across 30 shots', 'The hero looks like a different person by the second minute', 'Fix the casting in the brand-world stage; regenerate every shot that drifts'],
            ['Faces holding emotion', 'Brand films lean on close-ups; stiff or uncanny faces break the mood', 'Board wider shots where the story allows; rerun close-ups until they hold'],
            ['Hands and objects', 'Extra fingers, a cup that melts into a hand', 'Stage the action around hands; composite or rerun the rest'],
            ['Logo and on-screen text', 'Warped letters on your own name', 'Set the logo and all type in the edit from your brand files'],
            ['Continuity of place and light', 'The room, weather or time of day changes between cuts', 'Lock them in the boards; grade the shots together; regenerate what cannot be graded out'],
          ]}
        />
        <p>
          Ask any studio for a finished film longer than 60 seconds, and watch whether the main character still looks like
          the same person at the end.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Price" title="How much a brand film costs, filmed or made with AI">
        <p>
          Filmed brand films are priced by shoot days, crew, locations and cast. AI brand films are priced by length,
          the number of distinct scenes, how exactly real people, places or products have to be reproduced, and review
          rounds.
        </p>
        <GuideTable
          caption={
            <>
              Filmed tiers from{' '}
              <a href="https://argushd.com/how-much-does-a-brand-video-cost/">Argus HD, &ldquo;How Much Does a Brand Video Cost in 2026?&rdquo;</a>{' '}
              (August 2026, a San Francisco production company). The AI figure is Gisteo&apos;s published price as
              compiled by{' '}
              <a href="https://www.versely.studio/blog/how-much-does-an-ai-commercial-cost">Versely</a> (September 2026).
              Checked September 2026. Ruminate X does not publish a price list.
            </>
          }
          head={['What was bought', 'Published price (USD)', 'What it includes']}
          rows={[
            ['Filmed brand video, entry level', '10,000 to 25,000', 'One shoot day, small crew, one or two people on camera, one or two deliverables'],
            ['Filmed brand video, mid-range', '25,000 to 75,000', 'One to three shoot days, multi-camera, more polished post-production'],
            ['Filmed brand film, premium', '75,000 to 200,000 and up', 'Two to five shoot days, several locations, actors, custom music'],
            ['60-second cinematic AI film', '3,500 and up', 'Generated footage, edit and sound; scope set per project'],
          ]}
        />
        <p>
          {studio} quotes each brand film from the brief. What moves the number: running time and the number of scenes;
          recurring characters that must stay consistent; your product or a real place reproduced exactly; how many
          cutdowns, ratios and languages you need; and review rounds, which run longer when legal, medical or MLR teams
          sign off. The four price tiers for AI video, and what each buys, are in{' '}
          <Link href="/blog/how-much-does-ai-video-production-cost">how much AI video production costs</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="An example" title="Which brands are using AI for brand films" alt>
        <p>
          The best-known case is Moncler. Google asked the agency R/GA for an ad that could only exist with AI, and{' '}
          <a href="https://rga.com/news/rga-used-ai-for-impossible-ad">
            R/GA used Google&apos;s Veo model to make an experimental film with Moncler in four weeks
          </a>
          , unveiled at Cannes Lions (R/GA, August 2025). No budget was published.
        </p>
        <p>
          The film, titled From the Mountains to the City, shows a made world rather than real employees or customers. That is the
          brief AI brand film production handles best today. Coca-Cola, Toys&quot;R&quot;Us, Kalshi and McDonald&apos;s
          have also released AI ads; what each cost in time and how audiences took them is in{' '}
          <Link href="/guides/brands-using-ai-commercials">brands using AI commercials</Link>.
        </p>
        <GuideFilm
          id="d-s9SxA4Klk"
          caption="Calgary Stampede 2026 by Ruminate X: an AI short film celebrating gratitude for everyone who makes the Calgary Stampede possible."
        />
      </GuideSection>

      <GuideSection eyebrow="Rights and labels" title="Who owns an AI brand film">
        <p>
          <strong>Rights.</strong> Your contract decides what transfers to you: the film, the cutdowns, the project files,
          and licenses for music and voice. Ask whether the video models used allow commercial use. Whether copyright
          protects the film is a separate question. The{' '}
          <a href="https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf">
            US Copyright Office&apos;s January 2025 report
          </a>{' '}
          concluded that prompts alone do not make someone the author of AI output, while human work visible in the film,
          such as the script and the selection and arrangement of shots, can be protected. Who owns an AI brand film under
          the video tools&apos; terms, and in Canada, is covered in <Link href="/guides/who-owns-ai-video">who owns an AI video</Link>.
        </p>
        <p>
          <strong>Labels.</strong>{' '}
          <a href="https://support.google.com/youtube/answer/14328491">YouTube&apos;s policy</a> asks for disclosure when
          realistic content is made or meaningfully altered with AI, and exempts clearly unrealistic content such as
          animation or fantasy. Other platforms and broadcasters set their own rules. Checked September 2026.
        </p>
        <p>This is not legal advice. Your lawyer decides what the film needs.</p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X make your brand film?"
        hire={[
          'A brand or marketing lead who needs a cinematic film about what the company stands for, with no budget or calendar for a multi-location shoot.',
          'A consumer brand whose story works as a made world: landscapes, metaphor, history, the product in places it has never been.',
          'A pharma, lab or medical company that needs a brand film showing science no camera can film, with an MLR process for the claims.',
          'An agency producer who needs an AI production partner for a client brand film.',
        ]}
        instead={[
          'The film is your founder, staff or customers speaking as themselves: hire a documentary or corporate production company.',
          'The film records a real event, site or product demo: film it.',
          'You need a short explainer or talking-head update this week: a self-serve tool such as HeyGen or Synthesia costs less.',
          'Your audience is likely to reject a visibly AI-made film: film it with a crew.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'The pipeline, stage by stage.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'When you need a 15 to 60 second ad rather than a brand film.' },
          { href: '/blog/how-much-does-ai-video-production-cost', title: 'How much AI video production costs', note: 'Published prices at four levels and what each buys.' },
          { href: '/ai-video-production-healthcare', title: 'AI video for pharma, labs and medical', note: 'Brand films and ads that go through MLR review.' },
          { href: '/work', title: 'The work', note: 'Films Ruminate X has made.' },
        ]}
      />

      <GuideCta title="Tell us the story" body="Send what the company stands for, who the film is for, where it will play and when you need it." />
    </Guide>
  )
}
