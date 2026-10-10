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
    'Ten AI-generated commercials from Coca-Cola, Toys"R"Us, Moncler, Kalshi, Popeyes, McDonald\'s, Progressive and a DC pharmacy that apologized: who made each one, with which tools, how long it took, how audiences reacted, and what the NIQ and MIT studies found about whether AI ads work.',
  published: '2026-09-26',
  updated: '2026-10-10',
  keywords: [
    'ai-generated commercials',
    'ai generated commercials',
    'brands that used ai commercials',
    'what companies are using ai in their commercials',
    'which famous brands are using ai',
    'ai generated commercials examples',
    'what companies have made ai commercials',
    'can companies stop making ai generated ads',
    'commercials using ai',
    'are commercials using ai',
    'companies using ai ads',
    'did progressive use ai for an ad',
    'do ai-generated ads actually work',
    'why are commercials using ai now',
    'are commercials using ai actors now',
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
const PROGRESSIVE = 'https://progressive.mediaroom.com/news-releases/?item=122548'
const DIVE_PROGRESSIVE = 'https://www.marketingdive.com/news/how-progressive-balances-ai-use-with-authenticity-as-scrutiny-persists/813339/'
const FEEDME_GRUBBS = 'https://www.readfeedme.com/p/feed-mes-first-dc-edition-black-book'
const REDDIT_GRUBBS = 'https://www.reddit.com/r/washingtondc/comments/1wybf0b/grubbs_pharmacy_in_ne_apologizes_for_aigenerated/'
const NBC_MCD = 'https://www.nbcnews.com/world/europe/mcdonalds-ai-generated-christmas-advert-social-media-backlash-rcna248590'
const NIQ = 'https://nielseniq.com/global/en/news-center/2024/niq-research-uncovers-hidden-consumer-attitudes-toward-ai-generated-ads/'
const MIT_IDE = 'https://ide.mit.edu/insights/personalized-ai-video-ads'

const FAQS = [
  {
    q: 'What companies are using AI in their commercials?',
    a: 'Coca-Cola (the 2023 "Masterpiece" ad and AI versions of "Holidays Are Coming" in 2024 and 2025), Toys"R"Us (a brand film made with OpenAI\'s Sora, 2024), Moncler (a film made with Google\'s Veo by R/GA, 2025), Kalshi (an ad aired during the 2025 NBA Finals), Popeyes (the "Wrap Battle" ad, 2025), Progressive (the "Drive Like an Animal" insurance ad, November 2025) and McDonald\'s Netherlands (a Christmas ad pulled within a week in December 2025). Smaller businesses use it too: Grubb\'s Pharmacy in Washington, DC apologized for AI-generated imagery in October 2026. Each is sourced on this Ruminate X page.',
  },
  {
    q: 'Do AI-generated ads actually work?',
    a: 'The evidence is split by the kind of ad. In NielsenIQ\'s December 2024 study of more than 2,000 viewers, people spotted most AI-generated ads, called them more "annoying," "boring" and "confusing" than conventional ads, and showed weaker memory activation on EEG even for AI ads rated high quality. In a WhatsApp experiment with more than 21,000 customers of an Indian online retailer, summarised by the MIT Initiative on the Digital Economy, AI avatar videos personalized to each customer got a 9.4% higher click-through rate than personalized image ads and 6.5% higher than a generic video, from a single exposure. Ruminate X reads that as: test an AI cut before spending media behind it, and keep realistic generated people out of ads that depend on warmth.',
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
    q: 'Did Progressive use AI for an ad?',
    a: 'Yes. Progressive\'s "Drive Like an Animal" ad for its Snapshot program, released on November 3, 2025, shows AI-generated animals driving and crashing cars, with the voice of Stephanie Courtney, the actress who plays Flo. Progressive\'s in-house agency Ninety6, its agency of record Arnold, and Monks made it. The idea dated from 2024 and was shelved as too slow and expensive to produce; AI made it fit the budget a year later. It drew negative comments on YouTube and Reddit, and Progressive said engagement was strong (Marketing Dive, February 2026).',
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
        title="AI-generated commercials from big brands, and how audiences took them"
        dek="For the marketing lead whose CEO has asked why the brand is not doing an AI ad yet, or has seen the Coca-Cola backlash and wants to know why it should."
        updated={PAGE.updated}
      />

      <GuideAnswer>
        <p>
          Coca-Cola, Toys&quot;R&quot;Us, Moncler, Kalshi, Popeyes, Progressive and McDonald&apos;s Netherlands have all
          released AI-generated commercials or brand films between 2023 and 2025. The fast, funny, topical ones
          (Kalshi in two days for about USD 2,000, Popeyes finished with less than three days to go) were made in days. The
          sentimental holiday ads that showed realistic AI-generated people (Coca-Cola in 2024, McDonald&apos;s
          Netherlands in 2025) drew the strongest backlash, and McDonald&apos;s pulled its ad within a week. In October 2026 a
          neighbourhood pharmacy in Washington, DC apologized for its AI imagery, so the scrutiny reaches small businesses
          too. Whether AI ads work depends on the ad: NielsenIQ found viewers spot most of them and remember them less,
          while a WhatsApp test summarised by MIT found personalized AI videos beat image ads on clicks.
        </p>
      </GuideAnswer>

      <GuideSection eyebrow="The cases" title="Ten AI ads, who made them and what happened">
        <GuideTable
          caption={
            <>
              Each row from the source linked in the text below, read September and October 2026. Budgets are listed only where one
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
            ['2025', 'Progressive, "Drive Like an Animal"', 'Ninety6 (in-house), Arnold, Monks; Flo actress Stephanie Courtney on voice', 'Shelved in 2024 as too costly to produce; made a year later with AI', 'Negative comments on YouTube and Reddit; Progressive reported strong engagement'],
            ['2025', 'McDonald\'s Netherlands, Christmas ad', 'TBWA\\Neboko, The Sweetshop', 'Ten people, five weeks full-time', 'Pulled the following Wednesday'],
            ['2026', "Grubb's Pharmacy (Washington, DC), marketing imagery", 'Not published', 'Not published', 'Head pharmacist apologized; more than 1,100 comments on r/washingtondc'],
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

      <GuideSection eyebrow="Animals and an apology" title="Progressive and Grubb's Pharmacy: a national ad and a local one" alt>
        <p>
          Progressive&apos;s &ldquo;Drive Like an Animal&rdquo;, released on{' '}
          <a href={PROGRESSIVE}>November 3, 2025</a>, sells its Snapshot program with AI-generated animals behind the wheel.
          The idea dated from 2024 and was shelved because it needed a long production and did not fit the budget; a year
          later, rebuilt with AI, it did. Progressive&apos;s VP of integrated marketing, Meghan Walsh, called the
          difference &ldquo;night and day&rdquo; (<a href={DIVE_PROGRESSIVE}>Marketing Dive, February 2026</a>). The
          voice is Stephanie Courtney&apos;s, the actress who plays Flo, so the voice viewers know stayed real.
          The spot drew negative comments on YouTube and Reddit, and Walsh said it also got strong engagement.
        </p>
        <p>
          At the other end of the scale, Grubb&apos;s Pharmacy on Capitol Hill, which dates itself to 1867, apologized in
          October 2026 for using AI-generated imagery in its marketing (<a href={FEEDME_GRUBBS}>Feed Me</a>). The
          r/washingtondc post{' '}
          <a href={REDDIT_GRUBBS}>&ldquo;Grubb&apos;s Pharmacy in NE apologizes for AI-generated ad&rdquo;</a> drew more
          than 1,100 comments, and the pharmacy&apos;s next Instagram post promised &ldquo;non-AI marketing
          materials&rdquo;. What the case means for pharmacies and the rules that apply to
          their ads are on <Link href="/guides/ai-pharma-commercials">AI pharma commercials</Link>.
        </p>
      </GuideSection>

      <GuideSection eyebrow="The evidence" title="Do AI-generated ads actually work?">
        <p>
          Two studies point different ways, and they tested different ads. In December 2024{' '}
          <a href={NIQ}>NielsenIQ showed more than 2,000 people</a> a mix of AI-generated and conventional ads, from low to
          high quality, and recorded brain activity (EEG) for about 150 of them. Viewers picked out most of the AI ads
          without being told and described them as more &ldquo;annoying,&rdquo; &ldquo;boring&rdquo; and
          &ldquo;confusing&rdquo; than the conventional ones. Even AI ads rated high quality produced weaker memory
          activation. They did reinforce existing brand associations, and NIQ warned of a &ldquo;negative halo&rdquo;
          that could pull down how people see the brand.
        </p>
        <p>
          A field experiment <a href={MIT_IDE}>summarised by the MIT Initiative on the Digital Economy</a> found the
          opposite for a narrower kind of ad. Madhav Kumar and Anuj Kapoor sent more than 21,000 customers of an Indian
          online retailer a WhatsApp message with a personalized image ad, a generic video, or an AI avatar video whose
          script was personalized to each customer. The personalized AI videos got a 9.4% higher click-through rate than
          the image ads and 6.5% higher than the generic video. The authors note it was a single exposure, so part of the
          lift may be novelty (checked October 2026).
        </p>
        <p>
          Taken together, a brand spot that viewers recognise as AI-made risks being liked less and remembered less,
          while a useful message that happens to be generated can still earn the click. For a commercial or brand film,
          that points to briefs where the footage does not have to pass as filmed people (made worlds, animals,
          products, stylised scenes), and to testing the AI cut against a filmed or static version before the media
          budget goes behind it.
        </p>
        <h3>Why are commercials using AI now?</h3>
        <p>
          Cost and speed, on particular briefs. Progressive shelved &ldquo;Drive Like an Animal&rdquo; in 2024 because
          it did not fit the budget, then made it with AI a year later. Kalshi&apos;s NBA Finals ad cost about USD 2,000
          and took two days. Secret Level&apos;s founder put Coca-Cola&apos;s 2025 ad at about 20 people, against at
          least 50 for a filmed ad of the same complexity. McDonald&apos;s Netherlands went the other way, with ten people
          working five weeks.
        </p>
      </GuideSection>

      <GuideSection eyebrow="For your ad" title="What these cases mean for your own AI commercial" alt>
        <ul>
          <li>
            <strong>Realistic people carry the most risk.</strong> The two harshest reactions, Coca-Cola 2024 and
            McDonald&apos;s 2025, were ads full of generated people. Coca-Cola&apos;s own fix was to show animals,
            Progressive kept to animals and a real voice, and the first drug brands to run AI ads, AstraZeneca and Gilead,
            did the same (see{' '}
            <Link href="/guides/ai-pharma-commercials">AI pharma commercials</Link>).
          </li>
          <li>
            <strong>Sentiment raises the stakes.</strong> Holiday ads from brands people grew up with are judged on warmth.
            Generated footage that looks slightly off reads as cold.
          </li>
          <li>
            <strong>Small brands get judged too.</strong> Grubb&apos;s Pharmacy had no national campaign, and its AI
            imagery still drew a public apology and a thread of more than 1,100 comments.
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
