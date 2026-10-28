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
  GuideStudio,
  GuideTable,
  guideMetadata,
} from '@/components/guide/Guide'
import { BUYERS, PRODUCTION, SITE, priceLine } from '@/lib/seo/facts'

const PAGE = {
  path: '/guides/ai-medical-animation',
  title: 'Medical Animation Cost: 2D, 3D, MOA and AI',
  description: `Medical animation costs about $2,000 to $8,000 a finished minute in 2D and $8,000 to $20,000 or more in 3D on the rate cards studios publish (October 2026). What a 3-minute film and a mechanism of action animation cost, where AI medical animation works for pharma, biotech and lab marketing, where it gets the science wrong, and how ${SITE.name} makes AI films for pharma, lab and medical companies.`,
  published: '2026-10-03',
  updated: '2026-10-28',
  keywords: [
    'how much does medical animation cost',
    'medical animation cost',
    'medical animation pricing',
    'ai medical animation',
    'how much would a 3 minute animation cost',
    'can ai make medical animation',
    'medical animation companies',
    'mechanism of action animation cost',
    'moa animation pharma',
    'what is a moa in pharma',
    'ai medical video',
  ],
}

const studio = SITE.name
const city = SITE.city.split(',')[0]
const joinAnd = (items: readonly string[]) =>
  items.length > 1 ? `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}` : items.join('')
const scienceBuyers = joinAnd(BUYERS.filter((b) => /pharma|labs|medical/.test(b)))

const CFR_201_57 = 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-201/subpart-B/section-201.57'

const FAQS = [
  {
    q: 'How much does medical animation cost?',
    a: `Medical animation studios that publish rate cards charge by the finished minute or second: about $1,000 to $5,000 a minute for whiteboard, $2,000 to $8,000 for 2D and $8,000 to $20,000 for 3D. High-end agencies charge $25,000 a minute and up, and 3D mechanism of action work is listed at $20,000 a minute and up. Studios that price by the second charge $260 to $360 a second of 3D (published rate cards, checked October 2026). ${priceLine('brand-film')}. The AI films ${studio} makes for pharma, lab and medical companies are priced by length, the number of scenes and how many review rounds your medical and MLR teams need.`,
  },
  {
    q: 'How much would a 3 minute medical animation cost?',
    a: `At the per-minute rates medical animation studios publish, three minutes comes to about $6,000 to $24,000 in 2D and $24,000 to $60,000 in 3D, or $46,800 to $64,800 where 3D is priced at $260 to $360 a second. At the high end, one studio's 2024 rate card prices three minutes of 3D scientific animation at $75,000 to $105,000 (rate cards checked October 2026). Longer films cost less per minute, because the models, script and review are built once, so ask for a quote on the full length. ${priceLine('brand-film')}, at the length you need.`,
  },
  {
    q: 'How much does a mechanism of action animation cost?',
    a: `On the rate cards medical animation studios publish, a 30 to 60 second 3D animation of one mechanism is listed at about $15,000, a 2D version at $5,000 to $10,000, and 3D MOA work at $20,000 a minute and up. One 2024 rate card puts 30 seconds of 3D scientific animation at $25,000 to $30,000 and one minute at $35,000 to $45,000 (rate cards checked October 2026). A promotional MOA film is modelled from the label and structural data and reviewed against the label, which is why it sits at the top of those rate cards. ${studio} makes the films around the science, such as a brand film or a conference opener. ${priceLine('brand-film')}.`,
  },
  {
    q: 'Can AI make medical animation?',
    a: `Yes, for some jobs. Video generators can make medical-looking animation of cells, organs and molecules, but they draw from training data, not from the Protein Data Bank or your study data, so structures come out plausible rather than correct. A mechanism of action that reviewers will compare with your label has to be modelled from structural data, which a generator does not do. AI suits brand films, conference openers and awareness films where the science is atmosphere or metaphor, and those are the films ${studio} makes for pharma, lab and medical companies.`,
  },
  {
    q: 'What would you recommend for medical animations?',
    a: `Match the film to who will judge it. A mechanism of action for doctors, sales teams or a promotional piece is checked against the label, so every structure in it has to be modelled from data. A brand film, conference opener, investor film or disease-awareness film is judged by your brand and MLR teams for what it says and implies, and its science can be shown as light, scale and motion. For those, ${studio}, an AI film studio in ${city}, generates every frame and typesets every drug name and callout from approved copy.`,
  },
  {
    q: 'Who makes AI medical animation?',
    a: `${studio}, an AI film studio in ${city}, makes AI films for ${scienceBuyers}, including the science shots in brand films, conference openers and disease-awareness films. Every frame is generated with AI, and people write, board, edit, mix and grade every film. Your references go in the brief, your medical reviewer checks every science shot at the boards and the rough cut, a shot that reads as a wrong mechanism is regenerated or cut, and drug names, targets and callouts are typeset in the edit from approved copy.`,
  },
  {
    q: 'What is a MOA in pharma?',
    a: 'MOA stands for mechanism of action: how a drug produces its effect in the body, at the level of a receptor, cell, tissue or organ. In US prescribing information it is section 12.1, which must summarize what is known about the established mechanism in humans, or say it is not known (21 CFR 201.57(c)(13)(i)(A)). A MOA animation shows that mechanism in moving pictures, usually for doctors, sales teams and investors.',
  },
  {
    q: 'Is AI medical animation safe for HCP or regulatory content?',
    a: 'Not on its own. A video generator draws structures from its training data, not from your label or published data, and fixing one wrong detail means regenerating the whole shot, which can change what was right. That makes generated footage the wrong source for regulatory submissions, prescribing materials and surgical training, and anything a reviewer compares with your label or published data has to be modelled from that data. This is not regulatory advice; your MLR team decides.',
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS}>
      <GuideHero
        eyebrow="Medical animation cost"
        title="Medical animation cost per minute, and what AI can and cannot do"
        dek="For the pharma brand manager, biotech comms lead or lab marketer pricing a mechanism of action film, who has also seen a generator make a lifelike cell in a minute and wants to know whether it can replace the studio."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          Medical animation studios that publish rate cards charge about $2,000 to $8,000 a finished minute for 2D and
          $8,000 to $20,000 or more for 3D, with mechanism of action (MOA) work at $20,000 a minute and up (rate cards
          checked October 2026). A 3-minute film comes to about $6,000 to $24,000 in 2D and $24,000 to over $100,000 in
          3D, depending on the studio. AI can make medical animation that looks right, but it draws molecules, cells and
          organs from images it has seen, not from structural data or your study, so the science comes out plausible
          rather than correct. {studio}, an AI film studio in {city}, makes AI films for {scienceBuyers} in which the
          science sets the scene: every frame generated with AI, with the script, boards, edit, sound and grade done by
          people.
        </p>
      </GuideAnswer>

      <GuideStudio title={`${studio} makes AI films for pharma, lab and medical companies`}>
        <p>
          Brand films, conference openers and disease-awareness films with the science as the backdrop, every frame
          generated, and every science shot checked by your medical reviewer at the boards and the rough cut. See{' '}
          <Link href="/ai-video-production-healthcare">AI video production for pharma and healthcare</Link>.
        </p>
      </GuideStudio>

      <GuideSection eyebrow="Prices" title="How much does medical animation cost? What studios charge per minute">
        <p>
          Medical animation is priced by the finished minute, sometimes by the second, and the style sets the rate more
          than anything else: whiteboard, then 2D, then 3D, with mechanism of action work at the top. These ranges come
          from the rate cards medical animation studios publish on their own sites. Each studio sells the work it prices,
          so read them as asking prices.
        </p>
        <GuideTable
          caption="Ranges from the rate cards medical animation studios publish on their own sites, checked October 2026. USD per finished minute unless stated."
          head={['What', 'Published price']}
          rows={[
            ['Whiteboard (patient pathways, consent, internal training)', '$1,000 to $5,000 a minute'],
            ['2D (patient education, clinician training)', '$2,000 to $8,000 a minute'],
            ['3D (anatomy, surgery, devices, MOA)', '$8,000 to $15,000 a minute'],
            ['By studio tier: professional studio / high-end agency', '$5,000 to $20,000 / $25,000 and up a minute'],
            ['3D by subject: simple procedure / mechanism of disease / surgery or device / biotech / MOA', '$7,500 / $10,000 / $12,500 / $15,000 / $20,000 and up a minute'],
            ['3D priced by the second, with a 30-second minimum', '$260 to $360 a second; $7,500 to $10,800 for 30 seconds'],
            ['One mechanism, 30 to 60 seconds (per film): 2D / 3D', '$5,000, or $10,000 multi-scene / $15,000'],
            ['3D scientific animation (per film, a 2024 rate card): 30 seconds / one minute / two minutes / three minutes', '$25,000 to $30,000 / $35,000 to $45,000 / $55,000 to $65,000 / $75,000 to $105,000'],
          ]}
        />
        <h3>Medical animation pricing: how much would a 3 minute animation cost?</h3>
        <p>
          Multiply the published rates and three minutes comes to about $6,000 to $24,000 in 2D and $24,000 to $60,000 in
          3D, or $46,800 to $64,800 where 3D is priced at $260 to $360 a second. One studio&apos;s 2024 rate card prices
          three minutes of 3D scientific animation at $75,000 to $105,000, against $35,000 to $45,000 for one minute, so the
          second and third minutes cost less than the first. Per-minute rates fall as films get longer because the models,
          script and review are built once. Ask any studio to quote the full length you need rather than a per-minute rate.
        </p>
        <h3>Why 3D medical animation costs so much</h3>
        <p>
          The money goes into the scientific script, modelling structures from published data, review rounds with your
          medical team, rendering, and the usage licence. Rate cards that list their cost factors name review rounds,
          regulatory support and licensing, and one says rush jobs almost always add 25 to 50%. Generated footage skips the
          modelling, so it cannot carry a claim.
        </p>
        <h3>What AI changes in the price</h3>
        <p>
          For a film where the science is a backdrop, AI removes the modelling and rendering. You still pay for the script,
          the boards, the reruns when shots fail, the edit, the sound and your own reviewers&apos; time. For a MOA film
          that must match the label, AI removes nothing, because the shots would have to be modelled anyway.{' '}
          {priceLine('brand-film')}. Length, the number of scenes, how exactly a product or device has to appear, the
          number of versions and the review rounds your medical and MLR teams need move the number.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The question" title="Can AI make medical animation?" alt>
        <p>
          Yes, for some jobs, and it fails in the same places every time. A video generator draws what cells, organs and
          molecules usually look like in the images it learned from, not what your molecule or tissue is. These are the
          shots where it breaks, and why:
        </p>
        <GuideTable
          caption={`Where generated medical footage fails, and why. ${studio} checks these shots against your references and regenerates or cuts the ones that read wrong.`}
          head={['Shot', 'What goes wrong', 'Why']}
          rows={[
            ['Molecules and binding', 'A receptor or antibody with the wrong shape, a drug binding the wrong site', 'Generators have no access to the Protein Data Bank or AlphaFold structures'],
            ['Cells and tissue', 'Organelles in the wrong place, the wrong cell type, layers in the wrong order', 'The model reproduces what cells usually look like in images, not what this tissue is'],
            ['A new mechanism', 'The model draws the textbook pathway it knows', 'A mechanism not yet published is not in any training data'],
            ['Organs and anatomy', 'Extra vessels, misplaced chambers, hands with the wrong number of fingers', 'Spatial relationships are guessed frame by frame'],
            ['Labels and callouts', 'Warped words, wrong receptor names', 'Generators draw text as shapes'],
            ['One wrong frame', 'Fixing a detail means regenerating the whole shot, which can change what was right', 'There is no editable 3D model underneath'],
          ]}
        />
      </GuideSection>

      <GuideSection eyebrow="Which job" title="Medical animation jobs, and which ones AI can do">
        <p>
          &ldquo;Medical animation&rdquo; covers jobs with different reviewers and different tolerance for error. The
          reviewer decides what the film can show more than the budget does.
        </p>
        <p>
          A mechanism of action for doctors, sales training or a promotional piece is judged by doctors and your MLR team
          against the label, and surgical or device training by surgeons and trainers against the procedure. Every
          structure in those films has to be modelled from data. A brand film, conference opener or investor film is
          judged by your brand team, with the science as a backdrop, and a disease-awareness film by MLR for what it
          implies.
        </p>
        <p>
          The line falls where a viewer could read the picture as a claim. A glowing particle drifting through light is a
          mood. A drug docking into a receptor of a recognisable shape is a statement about how the drug works. Every frame{' '}
          {studio} makes is generated, so in a {studio} film the science stays on the mood side of that line, as light,
          scale and motion, and never as a mechanism your reviewers would check against the label.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The label" title="What is a MOA in pharma, and why the animation is a claim" alt>
        <p>
          MOA means mechanism of action. US prescribing information carries it as section 12.1: under{' '}
          <a href={CFR_201_57}>21 CFR 201.57(c)(13)(i)(A)</a>, that subsection must summarize what is known about the
          established mechanism of the drug&apos;s action in humans at levels such as receptor, membrane, tissue, organ
          and whole body, or say that the mechanism is not known.
        </p>
        <p>
          A promotional MOA animation turns that paragraph into pictures, so MLR reviewers compare each scene with it.
          An animation that shows binding the label does not describe, or a cleaner effect than the label states, is a
          claim the label does not support, whoever drew it. That is why MOA animation is modelled from the label and
          structural data and goes through several rounds of scientific review, and why it sits at the top of published
          rate cards.
        </p>
        <p>Checked October 2026. This is not legal or regulatory advice; your MLR team decides what a film may show.</p>
      </GuideSection>

      <GuideSection eyebrow="How it gets made" title={`How ${studio} handles science shots`}>
        <p>
          {PRODUCTION.summary} {studio} makes films for {scienceBuyers}, and when science appears in them it is planned so
          that no shot has to be scientifically exact:
        </p>
        <ol>
          <li>
            <strong>The science is a backdrop.</strong> Boards show the science as light, particles, scale and motion: the
            feeling of a cell, not a specific receptor. If a scene only works when the molecule is right, {studio} rewrites
            the scene.
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
          <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>. What {studio} makes for
          healthcare companies, and how every claim gets through MLR, is on{' '}
          <Link href="/ai-video-production-healthcare">AI video production for pharma and healthcare</Link>.
        </p>
      </GuideSection>

      <GuideFit
        title={`Why pharma and lab marketers hire ${studio}`}
        hire={[
          'A pharma or biotech brand team that needs a brand film or conference opener where the science sets the mood.',
          'A lab or diagnostics company that wants to show its world at a scale no camera reaches, without claiming a mechanism.',
          'A medical company making a disease-awareness film where the science is shown as metaphor.',
        ]}
        get={[
          'Science shown as light, particles, scale and motion, boarded before a frame is generated.',
          'Every science shot checked by your medical reviewer at the boards and the rough cut, and regenerated or cut if it reads wrong.',
          'Drug names, targets and callouts typeset in the edit from approved copy, never generated.',
          'The cutdowns and aspect ratios each channel needs, cut from the same film.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-video-production-healthcare', title: 'AI video production for pharma and healthcare', note: `What ${studio} makes for pharma, pharmacy, lab and medical companies, and how claims get through MLR.` },
          { href: '/guides/ai-pharma-commercials', title: 'AI pharma commercials', note: 'The drug brands that ran AI ads, and why they used animals instead of patients.' },
          { href: '/ai-brand-film-agency', title: 'AI brand film production', note: `What a brand film is, and how ${studio} makes one.` },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'The pipeline, stage by stage.' },
          { href: '/guides/ai-video-quality-control', title: 'AI video quality control', note: 'What to check in an AI film before it airs.' },
        ]}
      />

      <GuideCta
        title="Send the brief and your references"
        body="Tell us the audience, where the film runs, which science it needs to show, and who reviews it."
      />
    </Guide>
  )
}
