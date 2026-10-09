import Link from 'next/link'
import {
  Guide,
  GuideAnswer,
  GuideCta,
  GuideFaq,
  GuideFit,
  GuideHero,
  GuideRelated,
  GuideSection,
  GuideTable,
  guideMetadata,
} from '@/components/guide/Guide'
import { BUYERS, PRODUCTION, SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/guides/ai-medical-animation',
  title: 'AI Medical Animation for Pharma and Labs',
  description:
    'What medical animation costs per minute (whiteboard, 2D, 3D, mechanism of action) from the studios that publish prices, where AI medical animation works for pharma, biotech and lab marketing, where it gets the science wrong, and when to hire a 3D studio instead.',
  published: '2026-10-03',
  updated: '2026-10-09',
  keywords: [
    'ai medical animation',
    'how much does medical animation cost',
    'medical animation cost',
    'can ai make medical animation',
    'medical animation companies',
    'mechanism of action animation cost',
    'moa animation pharma',
    'what is a moa in pharma',
    'ai medical video',
  ],
}

const studio = SITE.name
const scienceBuyers = BUYERS.filter((b) => /pharma|labs|medical/.test(b)).join(', ')

const CFR_201_57 = 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-201/subpart-B/section-201.57'
const RUNWAY = 'https://runway.com/resources/medical-animation-video'
const MICROVERSE_AI = 'https://microversestudios.com/ai-in-medical-animation-a-game-changer-or-not-quite-there-yet/' // claims-ok: the source article's own URL, Microverse Studios
const MICROVERSE_PRICE = 'https://microversestudios.com/what-should-scientific-animation-cost/'
const CDI_PRICE = 'https://cdistudio.io/pricing'
const VOKA_PRICE = 'https://voka.io/medical-animation-cost/'
const FLEARNING_PRICE = 'https://flearningstudio.com/medical-animation-cost/'
const MOASTUDIO_PRICE = 'https://www.moastudio.net/cost'
const REDDIT_RECOMMEND = 'https://www.reddit.com/r/generativeAI/comments/1vlmlzp/what_would_you_recommend_for_medical_animations/'
const REDDIT_ANATOMY = 'https://www.reddit.com/r/medicalillustration/comments/1ren7bs/making_anatomically_accurate_videos_for/'

const FAQS = [
  {
    q: 'Can AI make medical animation?',
    a: 'Yes, for some jobs. Video generators can make medical-looking animation of cells, organs and molecules in hours, but they draw from training data, not from the Protein Data Bank or your study data, so structures come out plausible rather than correct. Use AI for brand films, conference openers and awareness films where the science is shown as atmosphere or metaphor. For a mechanism of action that reviewers will compare with your label, hire a 3D medical animation studio.',
  },
  {
    q: 'What would you recommend for medical animations?',
    a: 'Match the tool to who will judge the film. For HCP-facing or promotional mechanism of action work, a 3D medical animation studio that models the molecule from structural data. For patient education, a 2D studio or an AI tool with every frame checked by your medical reviewer. For a brand film or awareness film where the science is a backdrop, an AI studio such as Ruminate X. Self-serve generators suit drafts and storyboards.',
  },
  {
    q: 'How much does medical animation cost?',
    a: 'Studios that publish prices charge by the finished minute. F. Learning Studio lists $1,000 to $5,000 a minute for whiteboard, $2,000 to $8,000 for 2D and $8,000 to $15,000 for 3D (September 2026). VOKA, a Boston 3D studio, puts professional studios at $5,000 to $20,000 a minute and mechanism of action work at $20,000 a minute and up (June 2026). Microverse Studios published $35,000 to $45,000 for one minute of 3D scientific animation (March 2024). A video generator costs a monthly plan, but it does not model the science, so it cannot carry a claim.',
  },
  {
    q: 'How much does a mechanism of action animation cost?',
    a: 'From 3D studios that publish prices: CDI Studio lists $15,000 for a 30 to 60 second 3D animation of one mechanism and $5,000 to $10,000 for 2D (pricing page, checked October 2026). Microverse Studios published $25,000 to $30,000 for 30 seconds, $35,000 to $45,000 for one minute and $55,000 to $65,000 for two minutes (March 2024). VOKA lists MOA animation at $20,000 a minute and up (June 2026).',
  },
  {
    q: 'What is a MOA in pharma?',
    a: 'MOA stands for mechanism of action: how a drug produces its effect in the body, at the level of a receptor, cell, tissue or organ. In US prescribing information it is section 12.1, which must summarize what is known about the established mechanism in humans, or say it is not known (21 CFR 201.57(c)(13)(i)(A)). A MOA animation shows that mechanism in moving pictures, usually for doctors, sales teams and investors.',
  },
  {
    q: 'What are some famous medical animation companies?',
    a: 'Among the studios Google US shows for "moa animation pharma" (October 2026) are XVIVO, Nucleus Medical Media, Ghost Medical, Random42, AXS Studio and Cortical Studios. They build 3D models from scientific data and are the right hire for mechanism of action films that must be exact. Ruminate X is an AI film studio, not a medical animation studio, and does not model molecules.',
  },
  {
    q: 'Is AI medical animation safe for HCP or regulatory content?',
    a: 'Not on its own. Runway, which makes a video generator, says AI video is not suited to regulatory submissions, prescribing materials or surgical training, and that fixing one error means regenerating the shot (September 2026). Anything a reviewer compares with your label or published data should come from a studio that models it from that data. This is not regulatory advice; your MLR team decides.',
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS}>
      <GuideHero
        eyebrow="Pharma, biotech, labs"
        title="AI medical animation: where it works and where it gets the science wrong"
        dek="For the pharma brand manager, biotech comms lead or lab marketer who has seen a generator make a convincing cell in a minute and wants to know whether it can replace a mechanism of action animation."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          AI can make medical animation that looks right in hours, but it draws molecules, cells and organs from what it
          has seen, not from structural data or your study, so the science is plausible rather than correct. Use it where
          the science is atmosphere: a brand film, a conference opener, a disease-awareness film. For a mechanism of action
          (MOA) film that doctors or your MLR team will compare with the label, hire a 3D medical animation studio.
          Medical animation costs about $2,000 to $8,000 a finished minute in 2D and $8,000 to $20,000 or more in 3D from
          studios that publish prices; CDI Studio lists $15,000 for a 30 to 60 second 3D MOA.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="The question" title="Can AI make medical animation?">
        <p>
          It is the question people put to Google and to Reddit, in threads such as{' '}
          <a href={REDDIT_RECOMMEND}>&ldquo;What would you recommend for medical animations?&rdquo;</a> on
          r/generativeAI (August 2026). The answers split the same way every time: generator users suggest tools, and
          medical illustrators, in threads such as <a href={REDDIT_ANATOMY}>this one on r/medicalillustration</a>, say
          the anatomy will be wrong.
        </p>
        <p>Both are describing the same mechanism. These are the places a generator fails on science shots:</p>
        <GuideTable
          caption={
            <>
              Where generated medical footage fails. Sources: <a href={MICROVERSE_AI}>Microverse Studios</a>, a 3D
              scientific animation studio, and <a href={RUNWAY}>Runway&apos;s medical animation guide</a> (September
              2026), both read October 2026.
            </>
          }
          head={['Shot', 'What goes wrong', 'Why']}
          rows={[
            ['Molecules and binding', 'A receptor or antibody with the wrong shape, a drug binding the wrong site', 'Generators have no access to the Protein Data Bank or AlphaFold structures (Microverse)'],
            ['Cells and tissue', 'Organelles in the wrong place, the wrong cell type, layers in the wrong order', 'The model reproduces what cells usually look like in images, not what this tissue is'],
            ['A new mechanism', 'The model draws the textbook pathway it knows', 'A mechanism not yet published is not in any training data'],
            ['Organs and anatomy', 'Extra vessels, misplaced chambers, hands with the wrong number of fingers', 'Spatial relationships are guessed frame by frame'],
            ['Labels and callouts', 'Warped words, wrong receptor names', 'Generators draw text as shapes'],
            ['One wrong frame', 'Fixing a detail means regenerating the whole shot, which can change what was right', 'There is no editable 3D model underneath (Runway)'],
          ]}
        />
      </GuideSection>

      <GuideSection eyebrow="Which job" title="Medical animation jobs, and which ones AI can do" alt>
        <p>
          &ldquo;Medical animation&rdquo; covers jobs with different reviewers and different tolerance for error. The
          reviewer decides the tool more than the budget does.
        </p>
        <GuideTable
          caption="Compiled by Ruminate X, October 2026. Who should make each kind of film."
          head={['Film', 'Who judges it', 'Who should make it']}
          rows={[
            ['MOA for HCPs, sales training or a promotional piece', 'Doctors and your MLR team, against the label', '3D medical animation studio'],
            ['Surgical or device training', 'Surgeons and trainers, against the procedure', '3D studio working from your CAD files'],
            ['Patient education', 'Your medical reviewer', '2D studio, or an AI tool with every frame checked'],
            ['Brand film, conference opener, investor film', 'Your brand team; the science is a backdrop', 'AI studio'],
            ['Disease-awareness film', 'MLR, for what it implies', 'AI studio, with science shown as metaphor'],
          ]}
        />
        <p>
          The line falls where a viewer could read the picture as a claim. A glowing particle drifting through light is a
          mood. A drug docking into a receptor of a recognisable shape is a statement about how the drug works.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The label" title="What is a MOA in pharma, and why the animation is a claim">
        <p>
          MOA means mechanism of action. US prescribing information carries it as section 12.1: under{' '}
          <a href={CFR_201_57}>21 CFR 201.57(c)(13)(i)(A)</a>, that subsection must summarize what is known about the
          established mechanism of the drug&apos;s action in humans at levels such as receptor, membrane, tissue, organ
          and whole body, or say that the mechanism is not known.
        </p>
        <p>
          A promotional MOA animation turns that paragraph into pictures, so MLR reviewers compare each scene with it.
          An animation that shows binding the label does not describe, or a cleaner effect than the label states, is a
          claim the label does not support, whoever drew it. That is why MOA work goes to studios that build from the
          label and structural data, and why it carries several rounds of scientific review.
        </p>
        <p>Checked October 2026. This is not legal or regulatory advice; your MLR team decides what a film may show.</p>
      </GuideSection>

      <GuideSection eyebrow="Prices" title="Medical animation cost: what studios charge per minute" alt>
        <p>
          Medical animation is priced by the finished minute, and the style sets the rate more than anything else. These
          are the figures studios publish on their own pages. Each one sells the work it is pricing, so read them as
          asking prices.
        </p>
        <GuideTable
          caption="Prices medical animation studios publish on their own sites, read October 2026, with the date each page gives. USD per finished minute unless stated."
          head={['Source', 'What', 'Price']}
          rows={[
            [<a key="fl" href={FLEARNING_PRICE}>F. Learning Studio</a>, 'Whiteboard (patient pathways, consent, internal training)', '$1,000 to $5,000 a minute (September 2026)'],
            ['F. Learning Studio', '2D (patient education, clinician training)', '$2,000 to $8,000 a minute'],
            ['F. Learning Studio', '3D (anatomy, surgery, devices, MOA)', '$8,000 to $15,000 a minute'],
            [<a key="moa" href={MOASTUDIO_PRICE}>MOA Studio</a>, 'Custom medical animation, by quality level', '$2,800 to $25,000 a minute'],
            [<a key="voka" href={VOKA_PRICE}>VOKA</a>, 'Freelance / professional studio / high-end agency', '$1,500 to $4,000 / $5,000 to $20,000 / $25,000 and up a minute (June 2026)'],
            ['VOKA', 'Simple procedure / mechanism of disease / surgery or device / biotech / MOA', '$7,500 / $10,000 / $12,500 / $15,000 / $20,000 a minute and up'],
            [<a key="cdi" href={CDI_PRICE}>CDI Studio</a>, '2D, 30 to 60 seconds, one mechanism (per film)', '$5,000; $10,000 for multi-scene'],
            ['CDI Studio', '3D molecular and biological, 30 to 60 seconds, one mechanism (per film)', '$15,000; longer multi-mechanism films scoped separately'],
            [<a key="mv" href={MICROVERSE_PRICE}>Microverse Studios</a>, '3D scientific animation: 30 seconds / one minute / two minutes / three minutes (per film)', '$25,000 to $30,000 / $35,000 to $45,000 / $55,000 to $65,000 / $75,000 to $105,000 (March 2024)'],
            [<a key="rw" href={RUNWAY}>Runway</a>, 'Complex 3D MOA from a studio', '“Well beyond” five figures (September 2026)'],
          ]}
        />
        <h3>How much do 4 minutes of animation cost?</h3>
        <p>
          At VOKA&apos;s professional-studio range of $5,000 to $20,000 a minute, four minutes would be $20,000 to $80,000,
          but per-minute rates fall as films get longer, because the models, script and review are built once. Microverse&apos;s
          own prices show it: one minute is $35,000 to $45,000, three minutes $75,000 to $105,000, so the second and third minutes cost
          less than the first. Ask any studio to quote the full length you need rather than a per-minute rate.
        </p>
        <h3>Why 3D medical animation costs so much</h3>
        <p>
          The money goes into the scientific script, modelling structures from published data, review rounds with your
          medical team, rendering, and the usage licence. VOKA lists review rounds, regulatory support and licensing among
          its 13 cost factors and says rush jobs almost always add 25 to 50%. A generator skips the modelling, which is why it is cheap and
          why it cannot carry a claim.
        </p>
        <h3>What AI changes in the price</h3>
        <p>
          For a film where the science is a backdrop, AI removes the modelling and rendering, which are most of a 3D
          studio&apos;s bill. You still pay for the script, the boards, the reruns when shots fail, the edit, the sound
          and your own reviewers&apos; time. For a MOA film that must match the label, AI removes nothing, because the
          shots would have to be modelled anyway. {studio} prices films from the brief and does not publish a price list.
        </p>
      </GuideSection>

      <GuideSection eyebrow="How it gets made" title="How an AI studio handles science shots">
        <p>
          {PRODUCTION.summary} {studio} makes films for {scienceBuyers}, and when science appears in them it is planned so
          that no shot has to be scientifically exact:
        </p>
        <ol>
          <li>
            <strong>The science is a backdrop.</strong> Boards show the science as light, particles, scale and motion: the
            feeling of a cell, not a specific receptor. If a scene only works when the molecule is right, it is the wrong
            scene for generated footage.
          </li>
          <li>
            <strong>Your references go in the brief.</strong> Label figures, your existing MOA stills and the shapes your
            reviewers know, so generated imagery does not contradict them by accident.
          </li>
          <li>
            <strong>Every science shot is checked.</strong> Your medical reviewer sees the science shots at the board and
            rough-cut stages. A shot that reads as a wrong mechanism is regenerated or cut.
          </li>
          <li>
            <strong>Words are typeset.</strong> Drug names, targets and callouts are set in the edit from approved copy,
            never generated.
          </li>
        </ol>
        <p>
          How the rest of the film is made, from brief to final cut, is on{' '}
          <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>. What MLR asks about AI footage
          is on <Link href="/ai-video-production-healthcare">AI video for pharma and healthcare marketing</Link>.
        </p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X make your science film?"
        hire={[
          'A pharma or biotech brand team that needs a brand film or conference opener where the science sets the mood.',
          'A lab or diagnostics company that wants to show its world at a scale no camera reaches, without claiming a mechanism.',
          'A medical company making a disease-awareness film where the science is shown as metaphor.',
        ]}
        instead={[
          'Doctors, sales reps or your MLR team will compare the film with the label: hire a 3D medical animation studio.',
          'The mechanism is new and has no published figures to check against: hire a studio that models it with your scientists.',
          'Surgical or device training from CAD files: hire a 3D device animation studio.',
          'You need many short patient-education clips: a 2D studio or an avatar tool costs less.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-video-production-healthcare', title: 'AI video for pharma and healthcare marketing', note: 'What MLR reviewers ask about AI footage, and the FDA rules for drug TV ads.' },
          { href: '/guides/ai-pharma-commercials', title: 'AI pharma commercials', note: 'The drug brands that ran AI ads, and why they used animals instead of patients.' },
          { href: '/guides/ai-video-quality-control', title: 'AI video quality control', note: 'What to check in an AI film before it airs.' },
          { href: '/ai-brand-film-agency', title: 'AI brand film production', note: 'What a brand film is, what it costs, and when to film instead.' },
        ]}
      />

      <GuideCta
        title="Send the brief and your references"
        body="Tell us the audience, where the film runs, which science it needs to show, and who reviews it."
      />
    </Guide>
  )
}
