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
import { PRODUCTION, RELATED, SITE } from '@/lib/seo/facts'
import { AGENCY_RENDERS, OVERS, STILLS_MATH } from '@/lib/seo/overs'

const PAGE = {
  path: '/guides/brand-world-building',
  title: 'Brand World Building for AI Film and Photos',
  description:
    'Brand world building means writing down the made world a campaign lives in: places, people, light, palette, props and sound. What goes in a world bible, how one world keeps an AI brand film and its campaign photos matched, and where it breaks.',
  published: '2026-09-24',
  updated: '2026-09-24',
  keywords: [
    'brand world building',
    'brand world building examples',
    'brand worldbuilding',
    'brand world',
    'campaign world bible',
    'consistent visual identity across a campaign',
  ],
}

const studio = SITE.name
const hundred = RELATED.find((r) => r.name === '100creatives')!
const OVERS_MOOD_GUIDE = 'https://www.overs.studio/guides/how-to-use-a-mood-board-with-ai'

const FAQS = [
  {
    q: 'What is brand world building?',
    a: 'Brand world building is deciding, in writing, the made world a campaign takes place in: its places, time of day, people, wardrobe, props, light, palette, lenses, texture and, for film, its sound. The document is often called a world bible. Every shot of the film and every campaign photo is made and checked against it, so the pieces read as one campaign.',
  },
  {
    q: 'What goes into a brand world bible?',
    a: 'The places, with the same description every time; the time of day and weather; the light, written relative to the camera; a palette of five to seven hex codes with a job each; the recurring people, each with an approved character sheet; wardrobe and props; lenses and camera movement; texture and grain; sound for the film; and a list of things the world never contains.',
  },
  {
    q: 'What is the difference between a brand world and brand guidelines?',
    a: "Brand guidelines set the rules for the brand's marks: logo, type, color use and voice. They rarely say where a campaign happens or who is in it. A brand world is made for one campaign and describes the scene itself. The visual DNA sits between them: the lighting, lens and palette habits that carry from one campaign's world to the next.",
  },
  {
    q: 'How do you keep an AI film and campaign photos in the same world?',
    a: 'Make both from one world bible and one set of references: the same character sheets, the same product photos, the same palette and light lines. Make the stills first and use them as the starting frames for the film shots where the story allows, grade the film once, and match the photos to that grade. The failure to avoid is two vendors working from two mood boards.',
  },
  {
    q: 'Does every campaign need a new brand world?',
    a: "No. The visual DNA stays with the brand, and a world can run for several campaigns when it works. A new product, season or audience is the usual reason to build a new world on top of the same DNA. Keep old world bibles; they are the fastest brief for the next campaign.",
  },
  {
    q: 'Who builds the brand world for a Ruminate X film?',
    a: "In the Ruminate X pipeline the brand world is the second stage, after the brief and before script and boards. 100creatives, the brand-world studio behind Ruminate X's creative direction, leads it. The brand supplies its guidelines, its best existing images and films, product references and anything it never shows.",
  },
]

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Guides', path: '/guides' },
  { name: PAGE.title, path: PAGE.path },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide page={PAGE} faqs={FAQS} trail={TRAIL}>
      <GuideHero
        eyebrow="Brand world building"
        title="Brand world building: one world for the film and the photos"
        dek="For the brand lead or agency producer planning an AI brand film and the campaign photos around it, who needs the two to look like one campaign."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          Brand world building is writing down, before anything is made, the world a campaign lives in: the places, the
          time of day, the people and what they wear, the props, the light, the palette in hex codes, the lenses and the
          texture. AI production needs it more than a shoot does. A model draws every shot and every photo from scratch,
          and the only things they share are the words and the reference images you give it. One written world, used for
          the film and the photos, is what makes them one campaign.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="The idea" title="What a brand world is">
        <p>
          On a shoot, the world is physical. The location, the wardrobe rail and the lighting plan are there on the day,
          and every photographer and camera operator on set works inside them. In AI production there is no set. The
          world exists only as a description and a folder of references, so it has to be written down completely enough
          that shot 40 and the billboard photo come out of the same place.
        </p>
        <p>
          A brand world belongs to one campaign. It sits on top of the brand&apos;s{' '}
          <Link href="/guides/brand-visual-dna">visual DNA</Link>, the lighting, lens and palette habits that carry from
          campaign to campaign, and it is more specific than a mood board, which sets a feeling without saying where the
          camera is.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The document" title="What goes in a world bible" alt>
        <p>
          A world bible is short: one or two pages of lines a reviewer can check. The example lines below are for a
          made-up oat milk brand.
        </p>
        <GuideTable
          caption="The fields of a world bible, with example lines for a made-up brand. Write each line the same way every time it appears in a prompt or a brief."
          head={['Field', 'What to write', 'Example line']}
          rows={[
            ['Places', 'Each location, described the same way every time', 'A tiled 1970s kitchen; a flat rooftop at 6 a.m.'],
            ['Time and weather', 'When it happens', 'Early morning, low sun, dry'],
            ['Light', 'Direction relative to the camera, hardness, warmth', 'Window light from frame left, soft and warm; no colored gels'],
            ['Palette', 'Five to seven hex codes, each with a job', '#EFE6D8 oat walls, #B5562B rust accents, #2E3A2F bottle green'],
            ['People', 'Who recurs, with a character sheet for each', 'Two flatmates in their late twenties'],
            ['Wardrobe and props', 'Exact items, and how the product appears', 'Knitwear in oat and rust; carton always label-out'],
            ['Camera', 'Lenses, height, movement', '35mm and 50mm, eye level, slow push-ins, no drones'],
            ['Texture', 'Grain, sharpness, halation', 'Fine grain; a soft glow around the window'],
            ['Sound (film only)', 'What the world sounds like', 'Kettle, spoons, a radio in the next room'],
            ['Never', 'What the world never contains', 'No plastic packaging, no other brands, no night scenes'],
          ]}
        />
        <p>
          The last row saves the most time. A model fills every gap in a brief with its own defaults, and a written
          &ldquo;never&rdquo; list closes the gaps that matter to the brand before the first render.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The order" title="How one world reaches the film and the photos">
        <p>The order that keeps a film and its photos in one world:</p>
        <ol>
          <li>
            <strong>Approve the world bible.</strong> Nothing is generated before the brand signs off the lines.
          </li>
          <li>
            <strong>Cast.</strong> One approved character sheet for each person who recurs. See{' '}
            <Link href="/guides/ai-video-character-consistency">character consistency in AI video</Link>.
          </li>
          <li>
            <strong>Lock the product.</strong> Reference photos of every side, the label artwork and the exact colors. See{' '}
            <Link href="/guides/ai-commercial-product-accuracy">product and label accuracy in AI commercials</Link>.
          </li>
          <li>
            <strong>Make the stills.</strong> The key visual and the campaign photos come from the bible and the approved
            references, and several of them can serve as{' '}
            <Link href="/guides/first-frame-last-frame-ai-video">first frames for the film&apos;s shots</Link>.
          </li>
          <li>
            <strong>Generate the film.</strong> Each shot is checked against its board and the bible, and generated again
            when it drifts.
          </li>
          <li>
            <strong>Grade once, match everything.</strong> One grade across the film, then the photos matched to it, so a
            frame from the film and the key visual sit side by side without a jump.
          </li>
        </ol>
      </GuideSection>

      <GuideSection eyebrow="The weak points" title="Where a world breaks in AI production" alt>
        <GuideTable
          caption="How AI-made worlds drift between shots and between the film and the photos, and the fix for each."
          head={['Break', 'What you see', 'The fix']}
          rows={[
            ['The place drifts', 'The kitchen tiles or the window move between shots', 'Describe each place in identical words; keep an approved still of it as a reference'],
            ['The light flips', 'Sun from the left in one shot, the right in the next', 'Write light relative to the camera and check every shot for it'],
            ['The palette creeps', 'Colors get warmer or brighter, generation by generation', 'Eyedropper frames against the hex codes; pull it back in the grade'],
            ['Wardrobe changes', 'A jacket gains a hood or loses a pocket', 'Put the outfit on the character sheet; regenerate the shot'],
            ['The product changes size', 'The carton is larger in the wide than in the close-up', 'A reference photo in a hand for scale; state the dimensions'],
            ['Film and photos split', 'The photos look like a different campaign', 'One bible and one reference set for both; grade the photos to the film'],
          ]}
        />
      </GuideSection>

      <GuideSection eyebrow="At Ruminate X" title="Who builds the world, and what to bring">
        <p>
          {PRODUCTION.summary} In the {studio} pipeline the brand world is the second stage, after the brief and before
          the script and boards, so the look is settled before anyone writes a shot. <a href={hundred.url} rel="noopener">{hundred.name}</a>,{' '}
          {hundred.role}, leads it. The full pipeline is on{' '}
          <Link href="/how-we-make-an-ai-brand-film">how we make an AI brand film</Link>.
        </p>
        <p>What a brand should bring to that stage:</p>
        <ul>
          <li>the brand guidelines, and any photography or film rules in them;</li>
          <li>ten to twenty of the brand&apos;s best images and its best films, the ones the team would call &ldquo;us&rdquo;;</li>
          <li>clear photos of the product from every side, and the label artwork;</li>
          <li>who the campaign is for, and where it will run;</li>
          <li>a mood board, if there is one, for the feeling;</li>
          <li>anything the brand never shows.</li>
        </ul>
      </GuideSection>

      <GuideSection eyebrow="The photo side" title="Where Overs comes in" alt>
        <p>
          The campaign photos have to come out of the same world as the film, and that is what {OVERS.name} does for stills.{' '}
          {OVERS.name} is {OVERS.plain}. It is {OVERS.relation}, and it was built on {OVERS.origin}.
        </p>
        <p>
          It studies the brand first: the website, the photos the brand already has and its guidelines PDF, and it writes
          down the colors with hex codes, the light, the lens, the grain and the styling. Give it a mood board of up to
          twelve images and a note, and it reads the feeling of the board (the light, the mood, the energy) and applies
          that to your product in your brand&apos;s style instead of copying the pictures. A dial decides whether the
          brand&apos;s own look or the board leads. For a product that is worn or held, it makes a character sheet first,
          and every later photo with a person uses that same model. You see the shot plan and an estimated cost before a
          single photo renders.
        </p>
        <p>
          In {AGENCY_RENDERS.campaigns} campaigns 100creatives made in {AGENCY_RENDERS.year}, it took{' '}
          {AGENCY_RENDERS.perKeeper} renders to get each usable photo, which at published model prices is{' '}
          {STILLS_MATH.perUsablePhotoLow} to {STILLS_MATH.perUsablePhotoHigh} in AI fees per usable photo. The free plan
          makes {OVERS.freePhotosPerMonth} photos a month; the AI is billed to your own OpenRouter key at{' '}
          {OVERS.aiCostPerPhoto} a photo, and {OVERS.name} adds no markup. How it turns a board into a feeling is in{' '}
          <a href={OVERS_MOOD_GUIDE} rel="noopener">
            Overs&apos; guide to using a mood board without copying it
          </a>
          .{' '}
          <a href={OVERS.url} rel="noopener">
            Open Overs free at www.overs.studio
          </a>{' '}
          and put your campaign world on your product before the film is even boarded.
        </p>
      </GuideSection>

      <GuideFit
        title="Should Ruminate X build your campaign world?"
        hire={[
          'A brand launching a campaign that needs a brand film and key visuals in one world, made without a shoot.',
          'A marketing lead whose last film and last photo shoot looked like two different brands.',
          'An agency producer who needs a world written, cast and held across an AI film and all its cutdowns.',
        ]}
        instead={[
          'The campaign is set in your real store, factory or city, with your real people: hire a crew, and a photographer on the same days.',
          'You only need campaign photos: Overs, or a photographer, costs less than a film studio.',
          'The world already exists and you need edits of footage you have: an editor is the right hire.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/guides/brand-visual-dna', title: 'Brand visual DNA', note: 'The look that carries from one campaign world to the next.' },
          { href: '/guides/ai-video-character-consistency', title: 'Character consistency in AI video', note: 'Casting a person once and keeping them in every shot.' },
          { href: '/guides/first-frame-last-frame-ai-video', title: 'First and last frames', note: 'How approved stills become the start of a film shot.' },
          { href: '/how-we-make-an-ai-brand-film', title: 'How we make an AI brand film', note: 'The pipeline, from brief to delivery.' },
          { href: '/ai-brand-film-agency', title: 'AI brand film production', note: 'What a brand film is, what it costs and when to film instead.' },
        ]}
      />

      <GuideCta title="Tell us where the campaign lives" body="Send the product, the audience, your best past work and where the film and photos will run." />
    </Guide>
  )
}
