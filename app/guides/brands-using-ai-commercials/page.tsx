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
import { PRODUCTION, SITE } from '@/lib/seo/facts'

const PAGE = {
  path: '/guides/brands-using-ai-commercials',
  title: 'Brands Using AI Commercials: What Happened',
  description:
    'Eight AI commercials from Coca-Cola, Toys"R"Us, Moncler, Kalshi, Popeyes and McDonald\'s: who made each one, with which tools, how long it took, and how audiences reacted. Sourced, with what it means for your own AI ad.',
  published: '2026-09-26',
  updated: '2026-09-26',
  keywords: [
    'brands that used ai commercials',
    'what companies are using ai in their commercials',
    'which famous brands are using ai',
    'ai generated commercials examples',
    'what companies have made ai commercials',
    'can companies stop making ai generated ads',
  ],
}

const studio = SITE.name

const NBC_COKE = 'https://www.nbcnews.com/tech/innovation/coca-cola-causes-controversy-ai-made-ad-rcna180665'
const THR_COKE = 'https://www.hollywoodreporter.com/business/digital/coke-new-ai-holiday-ad-video-1236416491/'
const TOYS = 'https://www.prnewswire.com/news-releases/toysrus-studios-and-native-foreign-use-openais-sora-to-narrate-the-origin-story-of-beloved-toyrus-brand-302180332.html'
const ENGADGET_TOYS = 'https://www.engadget.com/toys-r-us-uses-openais-sora-to-make-a-brand-film-about-its-origin-story-and-its-horrifying-214730500.html'
const RGA = 'https://rga.com/news/rga-used-ai-for-impossible-ad'
const KALSHI = 'https://tech.yahoo.com/ai/articles/ai-generated-ad-aired-during-150507375.html'
const POPEYES = 'https://www.yahoo.com/entertainment/articles/popeyes-used-veo-3-diss-090324401.html'
const MASHED_POPEYES = 'https://www.mashed.com/2095619/popeyes-ai-commercial-clowns/'
const FORBES_COKE = 'https://www.forbes.com/sites/danidiplacido/2025/11/04/coca-cola-sparks-backlash-with-ai-generated-christmas-ad-again/'
const NBC_MCD = 'https://www.nbcnews.com/world/europe/mcdonalds-ai-generated-christmas-advert-social-media-backlash-rcna248590'

const FAQS = [
  {
    q: 'What companies are using AI in their commercials?',
    a: 'Coca-Cola (the 2023 "Masterpiece" ad and AI versions of "Holidays Are Coming" in 2024 and 2025), Toys"R"Us (a brand film made with OpenAI\'s Sora, 2024), Moncler (a film made with Google\'s Veo by R/GA, 2025), Kalshi (an ad aired during the 2025 NBA Finals), Popeyes (the "Wrap Battle" ad, 2025) and McDonald\'s Netherlands (a Christmas ad pulled within a week in December 2025). Each is sourced on this Ruminate X page.',
  },
  {
    q: 'Why did people criticize the Coca-Cola AI Christmas ad?',
    a: 'Coca-Cola\'s 2024 AI remake of its 1995 "Holidays Are Coming" ad, made by Secret Level, Silverside AI and Wild Card with four generative AI models, was called "soulless" online, and critics attacked both how it looked and what it meant for the artists who would normally make it (NBC News, November 2024). For 2025 Coca-Cola made a new AI version with animals instead of people, because AI animal expressions had improved (The Hollywood Reporter, November 2025).',
  },
  {
    q: 'Are AI commercials cheaper to make?',
    a: 'Sometimes much cheaper, sometimes not. The Kalshi NBA Finals ad was made with Veo 3 for about USD 2,000 in two days (Mashable, June 2025). The production company behind McDonald\'s Netherlands\' AI Christmas ad said it took ten people five weeks full-time, more hours than a traditional shoot (NBC News, December 2025). A cinematic AI ad saves the crew, set and location, and keeps the writing, fixing, editing and review.',
  },
  {
    q: 'What are some examples of commercials using AI actors?',
    a: 'Coca-Cola\'s 2024 "Holidays Are Coming" remake filled the spot with AI-generated people, which drew much of the criticism; its 2025 version used generated animals and one Santa based on paintings Coca-Cola owns. McDonald\'s Netherlands\' 2025 Christmas ad used AI-generated characters and was pulled within a week. Ads that generate realistic people are the ones audiences have judged most harshly.',
  },
  {
    q: 'Which AI commercials were made fastest?',
    a: 'Popeyes\' "Wrap Battle", a reply to McDonald\'s bringing back the Snack Wrap, was finished on Veo 3 alone after its director scrapped slower work with less than three days to go (TechRadar, July 2025). The Kalshi NBA Finals ad took two days (Mashable, June 2025). Both were quick, funny, reactive spots, the format AI suits best today.',
  },
  {
    q: 'Should my brand make an AI commercial after these backlashes?',
    a: 'It depends on the ad. The public backlash in these cases landed on sentimental holiday ads from beloved brands that showed realistic generated people. Stylized worlds, animals, products and fast topical spots drew less of it. If your ad depends on warmth from real-looking people, or your audience includes the creative community, test it or film it. Ruminate X will tell you if a brief is the wrong one for AI.',
  },
]

export const metadata = guideMetadata(PAGE)

export default function Page() {
  return (
    <Guide
      page={PAGE}
      faqs={FAQS}
      films={['Zytga7zsShI']}
      trail={[
        { name: 'Home', path: '/' },
        { name: 'Guides', path: '/guides' },
        { name: PAGE.title, path: PAGE.path },
      ]}
    >
      <GuideHero
        eyebrow="Guide · AI commercials"
        title="Brands using AI commercials, and how audiences took them"
        dek="For the marketing lead whose CEO has asked why the brand is not doing an AI ad yet, or has seen the Coca-Cola backlash and wants to know why it should."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          Coca-Cola, Toys&quot;R&quot;Us, Moncler, Kalshi, Popeyes and McDonald&apos;s Netherlands have all released
          commercials or brand films made mostly with generative AI between 2023 and 2025. The fast, funny, topical ones
          (Kalshi in two days for about USD 2,000, Popeyes finished with less than three days to go) were made in days. The
          sentimental holiday ads that showed realistic AI-generated people (Coca-Cola in 2024, McDonald&apos;s
          Netherlands in 2025) drew the strongest backlash, and McDonald&apos;s pulled its ad within a week.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="The cases" title="Eight AI commercials, who made them and what happened">
        <GuideTable
          caption={
            <>
              Each row from the source linked in the text below, read September 2026. Budgets are listed only where one
              was published; most brands do not publish them.
            </>
          }
          head={['Year', 'Brand and ad', 'Made by, with', 'Time, team or cost', 'What happened']}
          rows={[
            ['2023', 'Coca-Cola, "Masterpiece"', 'Not named in the source read', 'Not published', 'Museum paintings come to life; no backlash reported'],
            ['2024', 'Toys"R"Us, origin brand film', 'Native Foreign, OpenAI Sora, corrective VFX, original score', '"A few weeks"; hundreds of shots cut to a couple dozen', 'Premiered at Cannes Lions; Engadget called it horrifying'],
            ['2024', 'Coca-Cola, "Holidays Are Coming" remake', 'Secret Level, Silverside AI, Wild Card; four AI models', 'Not published', 'Called "soulless" online; billions of impressions'],
            ['2025', 'Kalshi, NBA Finals ad', 'Google Veo 3', 'About USD 2,000, two days', 'Aired during the NBA Finals'],
            ['2025', 'Popeyes, "Wrap Battle"', 'AI filmmaker PJ Accetturo, Veo 3, Suno', 'Finished in under three days on Veo 3', 'Coverage split between "AI won" and "backfired"'],
            ['2025', 'Moncler, "From the Mountains to the City"', 'R/GA, Google Veo', 'Four weeks', 'Unveiled at Cannes Lions'],
            ['2025', 'Coca-Cola, "Holidays Are Coming" (animals)', 'Secret Level; a second version by Silverside', 'About 20 people, against at least 50 for a comparable filmed ad', 'Criticized again; Coca-Cola stood by it'],
            ['2025', 'McDonald\'s Netherlands, Christmas ad', 'TBWA\\Neboko, The Sweetshop', 'Ten people, five weeks full-time', 'Pulled the following Wednesday'],
          ]}
        />
      </GuideSection>

      <GuideSection eyebrow="Coca-Cola" title="Coca-Cola: three AI ads and two backlashes" alt>
        <p>
          In 2024 Coca-Cola remade its 1995 &ldquo;Holidays Are Coming&rdquo; ad with generative AI. Three studios,
          Secret Level, Silverside AI and Wild Card, used four AI models.{' '}
          <a href={NBC_COKE}>NBC News reported</a> that viewers called it &ldquo;soulless&rdquo; and &ldquo;devoid of any
          actual creativity&rdquo;, and Coca-Cola answered that the films came from &ldquo;a collaboration of human
          storytellers and the power of generative AI&rdquo; (November 2024).
        </p>
        <p>
          For 2025 Coca-Cola hired Secret Level again, and{' '}
          <a href={THR_COKE}>told The Hollywood Reporter</a> that it replaced the people with animals because AI could
          now give animals expressions it could not the year before. The only person in the ad, Santa, was generated from
          Haddon Sundblom paintings Coca-Cola owns. Secret Level&apos;s founder estimated the ad took about 20 people,
          against at least 50 for a filmed ad of the same complexity. The same article says the 2024 spot racked up
          billions of impressions despite, or because of, the backlash, and that Coca-Cola&apos;s 2023 AI ad
          &ldquo;Masterpiece&rdquo; did not draw one. The 2025 ad drew criticism too:{' '}
          <a href={FORBES_COKE}>Forbes&apos; headline</a> read &ldquo;Coca-Cola Sparks Backlash With AI-Generated
          Christmas Ad, Again&rdquo; (November 2025).
        </p>
      </GuideSection>

      <GuideSection eyebrow="McDonald's" title="McDonald's Netherlands: pulled within a week">
        <p>
          McDonald&apos;s Netherlands released a 45-second AI Christmas ad, made by the agency TBWA\Neboko with the
          production company The Sweetshop, on a Saturday in December 2025 and withdrew it the following Wednesday.{' '}
          <a href={NBC_MCD}>NBC News reported</a> that McDonald&apos;s said the ad was meant to reflect the stressful
          moments of the holidays, while recognising that for many guests the season is &ldquo;the most wonderful time of
          the year&rdquo;. The Sweetshop&apos;s CEO wrote, in a LinkedIn post she later deleted, that the hours
          &ldquo;far exceeded a traditional shoot. Ten people, five weeks, full-time.&rdquo;
        </p>
        <p>
          That number matters for anyone budgeting an AI ad. Generated footage removes the crew, the set and the location.
          A polished, character-driven AI ad still takes a team weeks of generating, rejecting and fixing shots.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The fast ones" title="Kalshi and Popeyes: topical ads in days" alt>
        <p>
          Kalshi&apos;s ad for the 2025 NBA Finals was made with Google Veo 3 for about USD 2,000 in two days, and its
          director reported 300 to 400 generations to get 15 usable clips (<a href={KALSHI}>Mashable, June 2025</a>).
        </p>
        <p>
          Popeyes&apos; &ldquo;Wrap Battle&rdquo; was a rap diss track aimed at McDonald&apos;s, released after
          McDonald&apos;s announced the return of the Snack Wrap a day after Popeyes launched its own wraps. AI filmmaker PJ
          Accetturo scripted it, shaped the song with Suno and human helpers, and switched to Veo 3 alone when he had
          &ldquo;less than 3 days&rdquo; left (<a href={POPEYES}>TechRadar, July 2025</a>). Reaction split: TechRadar&apos;s
          headline said AI won the rap battle; <a href={MASHED_POPEYES}>Mashed&apos;s</a> said the ad backfired.
        </p>
        <p>
          Both ads were jokes about the moment, made faster than a shoot could be booked. That is where AI commercials have
          worked with the least resistance so far.
        </p>
      </GuideSection>

      <GuideSection eyebrow="Brand films" title="Toys&quot;R&quot;Us and Moncler: AI brand films at Cannes">
        <p>
          Toys&quot;R&quot;Us and the agency Native Foreign made{' '}
          <a href={TOYS}>what they called the first brand film made with OpenAI&apos;s Sora</a>, telling the
          founder&apos;s origin story as a dream. It went from concept to finished film in &ldquo;a few weeks&rdquo;,
          &ldquo;condensing hundreds of iterative shots down to a couple dozen&rdquo;, with corrective VFX and an original
          score, and premiered at Cannes Lions in June 2024. <a href={ENGADGET_TOYS}>Engadget&apos;s headline</a> called it
          horrifying.
        </p>
        <p>
          A year later <a href={RGA}>R/GA made an experimental film for Moncler with Google&apos;s Veo in four weeks</a>,
          unveiled at Cannes Lions 2025. It shows a made world of mountains and city rather than real customers, the kind
          of brief AI brand films handle best. More on that format is on{' '}
          <Link href="/ai-brand-film-agency">AI brand film production</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="For your ad" title="What these cases mean for your own AI commercial" alt>
        <ul>
          <li>
            <strong>Realistic people carry the most risk.</strong> The two harshest reactions, Coca-Cola 2024 and
            McDonald&apos;s 2025, were ads full of generated people. Coca-Cola&apos;s own fix was to show animals.
          </li>
          <li>
            <strong>Sentiment raises the stakes.</strong> Holiday ads from brands people grew up with are judged on warmth.
            Generated footage that looks slightly off reads as cold.
          </li>
          <li>
            <strong>Speed is the clearest win.</strong> Kalshi and Popeyes used AI to answer a moment in days.
          </li>
          <li>
            <strong>AI is not automatically cheap.</strong> Ten people for five weeks is a real budget. Price the fixing
            and the review rounds, not only the generation. Published figures are in{' '}
            <Link href="/blog/how-much-does-ai-video-production-cost">how much AI video production costs</Link>.
          </li>
          <li>
            <strong>Disclose it.</strong> Every ad in the table was covered in the press as an AI ad. Say so yourself first.
          </li>
        </ul>
        <p>
          {PRODUCTION.summary} {studio} boards every shot, reruns the faces, hands and products that fail, and sets logos
          and on-screen text from your brand files. How that works for a commercial is on{' '}
          <Link href="/ai-commercial-production">AI commercial production</Link>, and the checks to run before an ad airs
          are in <Link href="/guides/ai-video-quality-control">AI video quality control</Link>.
        </p>
        <GuideFilm
          id="Zytga7zsShI"
          caption="Keen Footwear spec ad by Ruminate X: a cinematic spec commercial (spec work, not a client ad). 32 seconds."
        />
      </GuideSection>

      <GuideFit
        title="Should your brand make an AI commercial with Ruminate X?"
        hire={[
          'A marketing lead who needs a topical or seasonal spot faster than a shoot can be booked.',
          'A consumer brand whose ad works as a made world, the product, animals or landscape rather than realistic people up close.',
          'A brand manager who wants a cinematic hero film plus cutdowns without a location budget.',
        ]}
        instead={[
          'The ad depends on warmth from realistic people, for a brand audiences are nostalgic about: film it with a crew.',
          'Your customers or your own industry are likely to reject visibly AI-made work: film it, or test the AI cut first.',
          'You need real customers or employees speaking for themselves: hire a production company with a crew.',
        ]}
      />

      <GuideFaq faqs={FAQS} />

      <GuideRelated
        links={[
          { href: '/ai-commercial-production', title: 'AI commercial production', note: 'How an AI commercial is made and what breaks.' },
          { href: '/blog/how-much-does-ai-video-production-cost', title: 'How much AI video production costs', note: 'Published prices at four levels.' },
          { href: '/ai-brand-film-agency', title: 'AI brand film production', note: 'The Moncler and Toys"R"Us format.' },
          { href: '/ai-video-production-enterprise', title: 'AI corporate video production', note: 'Company films, and which ones still need a camera.' },
          { href: '/guides/ai-video-quality-control', title: 'AI video quality control', note: 'What to check before an AI ad airs.' },
        ]}
      />

      <GuideCta title="Test your idea" body="Send the brief. We will say whether AI suits it, and where it would need a camera instead." />
    </Guide>
  )
}
