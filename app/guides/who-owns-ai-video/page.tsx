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
import { PRODUCTION, RELATED, SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/guides/who-owns-ai-video',
  title: 'Who Owns an AI Video? Copyright for Brands',
  description:
    'Who owns an AI-generated commercial or brand film: what the US Copyright Office and courts decided, what Runway, OpenAI, Google and Kling terms say, where Canada stands, and the ownership clauses to put in your studio contract.',
  published: '2026-09-30',
  updated: '2026-09-30',
  keywords: [
    'who owns the rights to AI created content',
    'can you copyright something that is AI-generated',
    'who owns the copyright to AI-generated content',
    'can you copyright an ai generated video',
    'who owns ai generated commercial',
    'copyright office ai guidance',
    'how to avoid copyright issues with AI',
  ],
}

const studio = SITE.name
const hundred = RELATED.find((r) => r.name === '100creatives')!

const USCO_REPORT = 'https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf'
const USCO_GUIDANCE = 'https://www.govinfo.gov/content/pkg/FR-2023-03-16/pdf/2023-05321.pdf'
const THALER = 'https://media.cadc.uscourts.gov/opinions/docs/2025/03/23-5233.pdf'
const THALER_CERT = 'https://www.supremecourt.gov/docket/docketfiles/html/public/25-449.html'
const CIRC30 = 'https://www.copyright.gov/circs/circ30.pdf'
const S204 = 'https://www.copyright.gov/title17/92chap2.html'
const ISED = 'https://ised-isde.canada.ca/site/strategic-policy-sector/en/marketplace-framework-policy/consultation-copyright-age-generative-artificial-intelligence-what-we-heard-report'
const CIPPIC = 'https://www.cippic.ca/our-work/cippic-v-sahni'
const RUNWAY = 'https://runway.com/terms-of-use'
const OPENAI = 'https://openai.com/policies/terms-of-use/'
const GOOGLE_CLOUD = 'https://cloud.google.com/terms/service-terms'
const KLING = 'https://kling.ai/document-api/guides/protocols/paid-service'
const COOLEY = 'https://www.cooley.com/news/insight/2024/2024-01-29-copyright-ownership-of-generative-ai-outputs-varies-around-the-world'

const FAQS = [
  {
    q: 'Who owns the rights to AI created content?',
    a: 'In the US, nobody owns copyright in purely AI-generated material: the US Copyright Office said in January 2025 that copyright "does not extend to purely AI-generated material", and the courts require a human author (Thaler v. Perlmutter, D.C. Circuit, March 2025; the Supreme Court declined the case in March 2026). The tool companies do not claim the output either; Runway, OpenAI, Google Cloud and Kling all leave or assign it to the user. What a brand owns in an AI commercial is the human work in it, plus whatever its contract with the studio transfers. This is not legal advice.',
  },
  {
    q: 'Can you copyright something that is AI-generated?',
    a: 'Only the parts a human authored. The US Copyright Office concluded in January 2025 that prompts alone do not give enough control to make someone the author, but that human work visible in the result can be protected: a human-written script, human-made artwork that appears in the output, and "the creative selection, coordination, or arrangement" or creative modification of generated material. Its report gives a film as the example: a film with AI-generated effects or background artwork is copyrightable even if those elements alone are not.',
  },
  {
    q: 'Who owns an AI commercial made by a studio?',
    a: 'Whoever the contract says, for the rights that exist. Ask the studio for a written, signed agreement that makes the film a work made for hire (audiovisual works are one of the nine categories US law allows for commissioned work) and, as a backup, assigns you all rights in the film, the cutdowns and the project files. Then check the licenses for music and voice and the consent of any real person shown. Agree those terms with any studio, Ruminate X included, before work starts. This is not legal advice.',
  },
  {
    q: 'Can I register an AI commercial with the US Copyright Office?',
    a: 'Yes, for the human-authored parts. The Office\'s March 2023 registration guidance says applicants "have a duty to disclose the inclusion of AI-generated content" and should exclude AI-generated content that is more than de minimis from the claim. You register the script, the edit and the selection and arrangement of shots, and you describe what was generated. Never list an AI tool as an author. Keep the brief, boards and edit files, since they show what people decided.',
  },
  {
    q: 'Does Canada allow copyright in AI-generated work?',
    a: 'It is unsettled. The Government of Canada\'s February 2025 report on its generative AI consultation says Canadian case law suggests authorship "must be attributed to a human who exercises skill and judgment", and that courts have not yet ruled on AI authorship specifically. A Federal Court challenge to a registration that lists an AI app as co-author (CIPPIC v. Sahni) was still waiting for a hearing date in September 2026. Canadian brands should rely on contracts, trademarks and licenses the same way US brands do.',
  },
  {
    q: 'Can a competitor copy my AI commercial?',
    a: 'Copying the finished film still infringes the human-authored parts (script, edit, arrangement), and your logo and brand assets are protected by trademark, not copyright. A single generated shot on its own may not be protected in the US. The video tools also warn that similar output can be generated for other users: Runway\'s terms say outputs "may not be unique". A studio that builds a distinct brand world and sets your real logo and product from your files gives you more to protect than raw generated clips.',
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
        eyebrow="Guide · Rights"
        title="Who owns an AI video? Copyright for brands buying AI film"
        dek="For the brand manager or in-house counsel signing off on an AI commercial or brand film, who needs to know what the company will own, what nobody can own, and what to put in the studio contract."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          In the US, purely AI-generated footage has no copyright owner: the US Copyright Office said in January 2025
          that prompts alone do not make anyone its author, and the courts require a human author. A brand still owns
          the human work in an AI video (the script, the creative selection and arrangement of shots, the edit) and its
          trademarks, and the video tools leave their output to the user. The studio contract does the rest: work made
          for hire plus a written assignment. Canada has not decided. Not legal advice; checked September 2026.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="The US rule" title="Who owns the rights to AI created content in the US">
        <p>
          The{' '}
          <a href={USCO_REPORT}>US Copyright Office&apos;s report on copyrightability (Part 2, January 2025)</a> set out
          the position the Office applies to registrations:
        </p>
        <ul>
          <li>Copyright &ldquo;does not extend to purely AI-generated material, or material where there is insufficient human control over the expressive elements.&rdquo;</li>
          <li>&ldquo;Based on the functioning of current generally available technology, prompts do not alone provide sufficient control.&rdquo;</li>
          <li>Human work is protected where it shows: a human-authored input visible in the output, and &ldquo;the creative selection, coordination, or arrangement of material in the outputs, or creative modifications of the outputs.&rdquo;</li>
          <li>Each case is decided on its facts. Using AI to assist, rather than to stand in for human creativity, does not affect protection.</li>
        </ul>
        <p>
          The report uses film as its example: &ldquo;a film that includes AI-generated special effects or background
          artwork is copyrightable, even if the AI effects and artwork separately are not.&rdquo; That is the position of
          most AI brand films. The whole film, as written, selected and cut by people, can be protected. A single generated
          shot lifted out of it may not be.
        </p>
        <p>
          The courts agree. In <a href={THALER}>Thaler v. Perlmutter</a> (March 18, 2025) the D.C. Circuit held that the
          Copyright Act &ldquo;requires all eligible work to be authored in the first instance by a human being&rdquo;,
          and added that this does not prohibit copyrighting work made with the assistance of AI. The Supreme Court{' '}
          <a href={THALER_CERT}>denied the petition</a> on March 2, 2026.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The tools" title="What the video model terms say about ownership" alt>
        <p>
          Every major video model disclaims ownership of what you generate or assigns it to you, &ldquo;if any&rdquo;. None
          can promise the output is protected, and several warn that other users can get similar output.
        </p>
        <GuideTable
          caption={
            <>
              Quoted from each company&apos;s own terms, read September 30, 2026:{' '}
              <a href={RUNWAY}>Runway Terms of Use</a> (updated Sept 15, 2026),{' '}
              <a href={OPENAI}>OpenAI Terms of Use</a> (effective Jan 1, 2026; covers Sora),{' '}
              <a href={GOOGLE_CLOUD}>Google Cloud Service Specific Terms</a> (modified Sept 24, 2026; covers Veo on Google
              Cloud) and <a href={KLING}>Kling API paid service terms</a> (April 21, 2026). Terms for free and consumer
              plans can differ.
            </>
          }
          head={['Model', 'Who owns the output', 'Commercial use', 'Similar output for others']}
          rows={[
            ['Runway', '"does not claim ownership of any of your Inputs or Outputs"', '"does not restrict your commercial use of your Outputs"', '"Outputs may not be unique"'],
            ['OpenAI (Sora)', 'You "own the Output"; OpenAI assigns its rights "if any"', 'Not restricted by the ownership clause', 'The assignment "does not extend to other users\' output"'],
            ['Google Cloud (Veo)', '"Google does not assert any ownership rights" in new IP in the output', 'Output is treated as your Customer Data', 'May "produce the same or similar Generated Output for multiple customers"'],
            ['Kling (API)', 'IP rights in the content "still belong to you"', '"not restricted"', 'Whether rights exist is "determined and handled by you"'],
          ]}
        />
        <p>
          Two practical points follow. Ask your studio which models it used and on which plan, because free plans often
          carry different terms. And do not expect a generated shot to be exclusive to you: the parts that make a film
          yours are the brand world, the script, the edit and your real logo and product, set from your files.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Canada" title="Where Canada stands">
        <p>
          Canadian law has not answered the question. The{' '}
          <a href={ISED}>Government of Canada&apos;s &ldquo;What we heard&rdquo; report</a> on its generative AI copyright
          consultation (February 2025) says existing case law suggests authorship &ldquo;must be attributed to a human who
          exercises skill and judgment&rdquo;, that participants supported keeping human authorship central, and that
          &ldquo;Canadian courts have not yet commented specifically on questions of AI authorship and ownership.&rdquo; The
          government says it will examine whether to legislate.
        </p>
        <p>
          One test case is open. The Canadian Intellectual Property Office registered an artwork naming a person and an AI
          app as co-authors; the Samuelson-Glushko clinic <a href={CIPPIC}>CIPPIC asked the Federal Court</a> in July 2024
          to correct it, and as of September 2026 the parties were still waiting for a hearing date. Until a court rules,
          a Canadian brand is in the same practical position as a US one: own what people made, and get the rest by
          contract.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The contract" title="What your AI video contract should say about ownership" alt>
        <p>Most of what a brand owns in an AI film comes from the contract. Ask for these in writing:</p>
        <ol>
          <li>
            <strong>Work made for hire.</strong> Under US law a commissioned work is made for hire only if it falls into
            one of nine categories, including &ldquo;a part of a motion picture or other audiovisual work&rdquo;, and
            &ldquo;the parties expressly agree in a written instrument signed by them&rdquo;
            (<a href={CIRC30}>Copyright Office Circular 30</a>).
          </li>
          <li>
            <strong>A backup assignment.</strong> A transfer of copyright &ldquo;is not valid unless an instrument of
            conveyance ... is in writing and signed&rdquo; (<a href={S204}>17 U.S.C. §204(a)</a>). An assignment covers
            anything that does not qualify as work for hire, and work done under other countries&apos; laws.
          </li>
          <li>
            <strong>What is delivered.</strong> The master, every cutdown and ratio, and the project files: script,
            boards, edit timeline, selected generations. They are also your record of the human work if you ever register
            the film.
          </li>
          <li>
            <strong>Licenses.</strong> Music and voice licensed for every channel, territory and term in your media plan.
            A cloned or synthetic voice needs the same paperwork as a hired one.
          </li>
          <li>
            <strong>Likeness.</strong> Written consent from any real person whose face or voice appears, including your
            own staff. A character generated from scratch is nobody&apos;s likeness.
          </li>
          <li>
            <strong>Tools and a no-copying promise.</strong> Which models were used, on plans whose terms allow commercial
            use, and a promise that the studio did not prompt for another brand&apos;s logo, a named artist&apos;s work or
            a celebrity.
          </li>
        </ol>
        <p>
          If you register the film, the Copyright Office&apos;s{' '}
          <a href={USCO_GUIDANCE}>March 2023 registration guidance</a> says applicants &ldquo;have a duty to disclose the
          inclusion of AI-generated content&rdquo; and should exclude AI material that is more than de minimis from the
          claim. This is not legal advice. Your lawyer writes the contract and decides what to register.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Where the human work is" title="The human work in an AI brand film">
        <p>
          {PRODUCTION.summary} The people in a {studio} film write the script, design the brand world with{' '}
          <a href={hundred.url}>{hundred.name}</a>, board every shot, choose which generated takes are kept and which are
          rerun, cut the film, and make the sound and the grade. Logos, names and on-screen text are set in the edit from
          the brand&apos;s own files. Those are the selection, arrangement and modification the Copyright Office describes.
          The stages are on <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.
        </p>
        <GuideFilm
          id="LYA3Do3KEN0"
          caption="The Love of Trail Running, an original Ruminate X film (not client work). 96 seconds of generated shots, written, selected and cut by people."
        />
      </GuideSection>

      <GuideFit
        title="Is an AI film right when ownership matters?"
        hire={[
          'A brand that wants a commercial or brand film and will own it the way it owns most ads: through the contract, its trademarks and the human-authored film.',
          'A marketing lead whose legal team wants the model terms, licenses and project files documented before sign-off.',
          'A pharma, lab or medical company whose review team needs to know what was generated and what was set from approved files.',
        ]}
        instead={[
          'You are creating a character or artwork you plan to license, merchandise or defend as IP on its own: have it drawn, animated or filmed by people, where copyright is clear.',
          'Your contracts or a distributor require full copyright in every frame: film it or use human-made animation.',
          'You need a legal opinion on a specific film: ask an IP lawyer, not a studio.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/faq-ai-video-production', title: 'AI video production FAQ', note: 'Commercial use, legality, cost and quality in short answers.' },
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'How an AI commercial is made, what it costs, and actors and likeness.' },
          { href: '/ai-avatar-videos', title: 'AI avatar video production', note: 'Consent and disclosure when a presenter is generated.' },
          { href: '/guides/ai-video-quality-control', title: 'AI video quality control', note: 'The labels and rights checks before an AI ad airs.' },
          { href: '/ai-video-production-agencies', title: 'How to hire an AI video production agency', note: 'The questions to ask before signing.' },
        ]}
      />

      <GuideCta
        title="Ask about rights before you brief"
        body="Send where the film will run, what it is for, and what your legal team needs to see before sign-off."
      />
    </Guide>
  )
}
