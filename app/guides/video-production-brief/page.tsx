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
  GuideTable,
  guideMetadata,
} from '@/components/guide/Guide'
import { PRODUCTION, RELATED, SITE, priceLine } from '@/lib/seo/facts'

const PAGE = {
  path: '/guides/video-production-brief',
  title: 'How to Brief a Video Production Company',
  description:
    'How to brief a video production company: the seven things every video brief needs, the four a brief for an AI-made film adds (brand files, what must be exact, who appears, who reviews), a fill-in video brief template and a worked example.',
  published: '2026-10-13',
  updated: '2026-10-28',
  keywords: [
    'how to brief a video production company',
    'video production brief',
    'video brief template',
    'how to write a video brief',
    'video creative brief',
    'how to write a creative brief for video project',
    'ai video brief template',
    'what is an example of a creative brief',
  ],
}

const studio = SITE.name
const hundred = RELATED.find((r) => r.name === '100creatives')!

const FAQS = [
  {
    q: 'How do I brief a video production company?',
    a: `Send one page that covers what the video must achieve, who it is for, the two or three things it must say, every deliverable (length, ratio and platform for each cut), fixed dates, a budget range and two or three reference videos with a note on what you like in each. If the film will be made with AI, add your brand files (vector logo, packaging art, product photos from every angle, brand colours), a list of what must be exact and what the studio may invent, whether any real person appears, and who reviews the film and at which stage. You do not need a script or a shot list; the studio writes those. At ${SITE.name}, the page comes back as a creative brief, and nothing is generated until you approve it.`,
  },
  {
    q: 'What should a video brief include?',
    a: 'Seven things: the objective, the audience, the key messages, the deliverables, the dates, the budget range and references. A brief for an AI-made film adds four: the brand and product files the studio sets your logo and product from, what has to be reproduced exactly, who appears on screen (generated people, or a real person who has to be filmed or has consented to a likeness), and who signs off, including legal or medical review. Without those four lines, a studio can only guess what may change from shot to shot.',
  },
  {
    q: 'What is an example of a creative brief?',
    a: 'A one-page example: "Objective: launch our new trail shoe to existing customers before the spring season. Audience: runners who already own one pair of ours. Message: the new sole grips wet rock. Deliverables: one 45-second film in 16:9 for YouTube and the website, 15-second cuts in 9:16 and 1:1. Dates: final files by March 1. Budget: a range. References: two films, with what we like in each. Exact: the shoe, the logo, the colourway. Free to invent: the trail, the weather, the runner. Review: brand manager on boards, legal on the final cut." This page has a longer version.',
  },
  {
    q: 'How do I write a creative brief for a video project?',
    a: 'Start with the decision the video has to cause (a sign-up, a purchase, an applicant) and the one person it is for, then write the single sentence the viewer should remember. Everything else in the brief follows from those three lines: the length, the platforms, the tone and the references. Keep it to one page, list every finished file you need, and say who approves it. If you cannot write the one sentence, the studio cannot either, and the first draft will show it.',
  },
  {
    q: 'What is different about briefing an AI video studio?',
    a: 'There is no shoot to plan, so the brief has no locations, cast or shoot days. In their place the studio needs files and limits: your logo as a vector, packaging art and product photos from every angle, brand colours as codes, a list of what must match reality and what can be invented, and a clear answer on whether any real person appears. Generated footage is weakest at the same face across many shots, hands, packaging and on-screen text, so those lines decide how many passes each shot gets. Ruminate X sets logos and text in the edit from your files.',
  },
  {
    q: 'Should I include a budget in a video brief?',
    a: `Yes, a range. Without one the studio guesses the scope: a 30-second film can be made at very different levels of finish, and the number of scenes, versions and review rounds moves the price more than the length. With a range, the studio can say what fits and what to cut. ${priceLine('brand-film')}.`,
  },
  {
    q: 'Which AI video production company should I send my brief to?',
    a: `${SITE.name}, an AI film studio in Calgary, makes brand films and AI commercials for consumer brands, pharma and pharmacy companies, labs and medical companies, with every frame generated by AI and the script, boards, edit, sound and grade done by people. Send the one page described here; it comes back as a creative brief with references, tone and the single message the film must land, and nothing is generated until you approve it. Before you send a brief to any studio, ask to see a shot where a face turns, a hand holds the product and a logo is on screen.`,
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide
      page={PAGE}
      faqs={FAQS}
      films={['LYA3Do3KEN0']}
      trail={[
        { name: 'Home', path: '/' },
        { name: 'Guides', path: '/guides' },
        { name: PAGE.title, path: PAGE.path },
      ]}
    >
      <GuideHero
        eyebrow="Guide · Hiring a studio"
        title="How to brief a video production company when the film is made with AI"
        dek="For the brand manager, founder or agency producer who has a film to commission, a page to fill in, and wants the first draft back to be the right film."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          A video production brief is one page with seven things on it: the objective, the audience, the two or three
          key messages, every deliverable, fixed dates, a budget range and two or three references. When the film is
          made with AI, add four more: your brand and product files, a list of what must be exact and what the studio
          may invent, who appears on screen, and who reviews the film and at which stage. You do not need a script, a
          shot list or prompts; the studio writes those. {studio}, an AI film studio in Calgary, turns that page into a
          creative brief for a brand film or AI commercial, and generates nothing until you approve it.
        </p>
      </GuideAnswer>

      <GuideStudio title={`${studio} makes brand films and AI commercials from a one-page brief`}>
        <p>
          Send the page this guide describes; it comes back as a creative brief with references, tone and the single
          message the film must land, and nothing is generated until you approve it. See{' '}
          <Link href="/ai-brand-film-agency">AI brand films</Link> and{' '}
          <Link href="/ai-commercial-production">AI commercials</Link>.
        </p>
      </GuideStudio>

      <GuideSection eyebrow="The seven lines" title="What to put in a video production brief">
        <p>
          Every video brief starts from the same seven lines: objective, audience, two or three key messages, deliverables
          and formats, fixed dates, a budget range and references. The table adds what to write on each line and what the
          studio does with it.
        </p>
        <GuideTable
          caption="The seven lines of a standard video brief, with an example line for each and what a studio uses it for. Example lines are illustrations, not a real client brief."
          head={['Line', 'What to write', 'Example', 'What the studio does with it']}
          rows={[
            ['Objective', 'The action the viewer should take, or the decision the film supports', '"Get existing customers to pre-order the new shoe"', 'Picks the length, the structure and the ending'],
            ['Audience', 'One named viewer, what they already know, where they will watch', '"Runners who own one pair of ours, watching on a phone"', 'Sets the pace, the opening seconds and what needs explaining'],
            ['Key messages', 'Two or three, in priority order; one is better', '"The new sole grips wet rock"', 'Becomes the line the script is written to'],
            ['Deliverables', 'Every finished file: length, ratio, platform, captions', '"45 s in 16:9; 15 s in 9:16 and 1:1; captions burned in"', 'Decides what gets made and most of the quote'],
            ['Dates', 'Fixed dates only: launch, event, media booking', '"Final files by March 1; media goes live March 8"', 'Sets the review rounds that fit'],
            ['Budget', 'A range, and whether it covers music and voice licences', '"A range, music included"', 'Says what fits and what to cut before work starts'],
            ['References', 'Two or three films, with what you like in each', '"This one for the light, that one for the pace"', 'Starts the look; a note beats a link on its own'],
          ]}
        />
        <p>
          The deliverables line is the one buyers leave shortest. A hero film with three cutdowns in three ratios
          is ten files, and each needs its own framing. The full channel-by-channel list is in{' '}
          <Link href="/guides/ad-campaign-deliverables">ad campaign deliverables</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The four AI lines" title="What changes when you brief an AI video studio" alt>
        <p>
          {PRODUCTION.summary} A brief for that kind of film drops everything that plans a shoot and adds the lines that
          keep generated footage on brand and accurate.
        </p>
        <GuideTable
          caption="What a filmed brief asks for, and what replaces it when every frame is generated. From the Ruminate X pipeline (brief, brand world, script and boards, generation passes, edit and sound, delivery)."
          head={['A filmed brief asks for', 'An AI film brief asks for instead', 'Why']}
          rows={[
            ['Locations and permits', 'References for the world the film lives in: light, palette, texture, season', 'The world is built before any shot, and every shot is generated inside it'],
            ['Casting and talent', 'Who appears: generated people, or a real person (who then has to be filmed or has given written consent to a likeness)', 'A generated person can play a scene but cannot be a real customer, doctor or employee'],
            ['Shoot days and crew', 'Brand and product files: vector logo, packaging art, product photos from every angle, colour codes', 'The studio sets logos and on-screen text from your files instead of trusting a generator to draw them'],
            ['Props and product samples', 'What must be exact and what may be invented', 'Decides which shots get extra passes'],
            ['Call sheet and sign-off on set', 'Who reviews, and at which stage: boards, first cut, final', 'Changing a shot is cheap at boards and costly after the edit'],
          ]}
        />
        <h3>Send files, not adjectives</h3>
        <p>
          &ldquo;Make it look premium&rdquo; gives a studio nothing to check against. A packaging file, the logo as an
          SVG, brand colours as codes and twenty product photos taken from every side give it a reference for every
          frame. Generated footage still breaks in the same places: the same face across many shots, hands holding a
          product, the exact shape of packaging, a logo, and text on screen. Each of those needs a file or a rule in the
          brief. <Link href="/guides/ai-commercial-product-accuracy">Keeping a real product accurate in AI video</Link>{' '}
          goes through the checks shot by shot, and <Link href="/guides/brand-visual-dna">brand visual DNA</Link> covers
          what to send so the look holds.
        </p>
        <h3>Say what may be invented</h3>
        <p>
          The other half of the list is freedom. If the trail, the weather, the runner and the time of day can be
          anything that fits the brand, say so. A brief that marks everything as exact turns a generated film into a slow
          and expensive one; a brief that marks nothing gets a film your product team rejects.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Regulated briefs" title="Briefing a pharma, medical or lab film">
        <p>
          A brief from a pharma, biotech, lab or medical company needs three more lines: the claims your regulatory team
          has already approved (word for word), the safety information that must appear and how, and who in medical,
          legal and regulatory review sees the boards, not only the finished cut. Say too whether patients or clinicians
          appear. Every frame {studio} delivers is generated, so a patient or clinician on screen is a generated person,
          disclosed where your review team or the platform requires it. The rules and the AI drug ads made so far are on{' '}
          <Link href="/guides/ai-pharma-commercials">AI pharma commercials</Link> and{' '}
          <Link href="/ai-video-production-healthcare">AI video for pharma and healthcare marketing</Link>.
        </p>
        <p>
          This is not legal or regulatory advice. Your own legal, regulatory or MLR team decides what the film may say and
          show.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Template" title="Video brief template you can copy" alt>
        <p>Fill in every line. Leave a line blank only if you mean &ldquo;the studio decides&rdquo;, and say so.</p>
        <ol>
          <li><strong>Objective.</strong> What should a viewer do or decide after watching?</li>
          <li><strong>Audience.</strong> One named viewer, what they already know, where and on what screen they watch.</li>
          <li><strong>Key message.</strong> The one sentence they should remember. A second and third only if they must.</li>
          <li><strong>Deliverables.</strong> Each file: length, ratio, platform, captions, textless versions.</li>
          <li><strong>Dates.</strong> The fixed ones, and what is fixed about them.</li>
          <li><strong>Budget range.</strong> And whether music and voice licences are inside it.</li>
          <li><strong>References.</strong> Two or three films, a sentence on what you like in each, one you do not like.</li>
          <li><strong>Brand and product files.</strong> Logo (vector), packaging art, product photos from every side, colour codes, fonts, brand guidelines.</li>
          <li><strong>Exact and free.</strong> What must match reality; what the studio may invent.</li>
          <li><strong>Who appears.</strong> Generated people only, or a real person (filmed separately, or with written consent to a likeness).</li>
          <li><strong>Review.</strong> Who approves boards, first cut and final, including legal or medical review, and how many rounds the dates allow.</li>
          <li><strong>Where it runs and how it is labelled.</strong> Channels, paid or organic, and any platform or company rule on disclosing AI.</li>
        </ol>
        <h3>A filled-in example</h3>
        <p>
          An invented brief for a footwear brand, to show the level of detail that works: launch the new trail shoe to
          existing customers before spring; for runners who already own one pair, watching on a phone; message, the new
          sole grips wet rock; one 45-second film in 16:9 for YouTube and the site, two 15-second cuts in 9:16 and 1:1,
          captions burned in; final files by March 1; a budget range with music included; references, two films with a
          line each; files, the logo as SVG, the colourway as codes, thirty product photos; exact, the shoe, the sole
          pattern, the logo; free, the trail, the weather, the runner; generated people only; brand manager on boards,
          legal on the final cut; paid social and YouTube, labelled where the platform asks.
        </p>
        <p>
          Budget lines for that kind of film are in the{' '}
          <Link href="/guides/commercial-production-budget-template">commercial production budget template</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="What you can skip" title="What you do not need to send">
        <p>
          A script, a shot list and prompts. {studio} writes the script and the shot list from your brief. For an AI film
          the prompts are the least useful thing a client can write, because the studio reruns every shot many times
          against its boards and rewrites them as it goes. Send the decision, the viewer and the files, and let the studio
          show you a script and boards before anything is generated.
        </p>
      </GuideSection>

      <GuideSection eyebrow="How we use it" title={`What ${studio} does with your brief`} alt>
        <p>
          At {studio} the brief comes back as a one-page creative brief with references, tone and the single message the
          film must land, and nothing is generated until you approve it. The brand world (palette, light, texture, camera
          language, the kind of people on screen) is built next with <a href={hundred.url}>{hundred.name}</a>. Then the
          script breaks into a beat sheet and a shot list you see before any frame exists. Faces, hands, product details
          and brand colours get extra generation passes, and logos and on-screen text are set in the edit from your files.
          Every stage is on <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.
        </p>
        <GuideFilm
          id="LYA3Do3KEN0"
          caption="The Love of Trail Running, an original Ruminate X film (not client work). A 96-second film like this one is dozens of separately generated shots, so the brief's lines on what must stay the same across shots matter more than its adjectives."
        />
      </GuideSection>

      <GuideFit
        title={`Who sends this brief to ${studio}`}
        hire={[
          'A brand manager with a launch date and a product that can be shown accurately from its files, who has no budget or calendar for a shoot.',
          'A founder or marketing lead who can write the one sentence the film has to land and wants a cinematic brand film or commercial.',
          'An agency producer briefing an AI production partner for a client film, with the client’s brand files in hand.',
          'A pharma, lab or medical marketer whose approved claims and review stages are already defined.',
        ]}
        get={[
          'A creative brief back, with references, tone and the single message the film must land; nothing is generated until you approve it.',
          'The beat sheet and shot list before a single frame is generated.',
          'Your real logo and on-screen text set in the edit from your files.',
          'A master plus the platform cuts the brief calls for, with captions, and your notes back as a new cut.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-video-production-agencies', title: 'How to hire an AI video production agency', note: 'The questions to ask a studio once the brief is written.' },
          { href: '/guides/ad-campaign-deliverables', title: 'Ad campaign deliverables', note: 'The full list of files for the deliverables line.' },
          { href: '/guides/commercial-production-budget-template', title: 'Commercial production budget template', note: 'What each line of the budget covers in an AI film.' },
          { href: '/guides/who-owns-ai-video', title: 'Who owns an AI video?', note: 'The ownership clauses to agree before the brief turns into a contract.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'The six stages a brief goes through.' },
        ]}
      />

      <GuideCta title="Send the brief" body="Send the objective, the viewer, the deliverables and your dates. Files can follow." />
    </Guide>
  )
}
