import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Video Production Agency | Cinematic AI Commercials & Brand Films",
  description:
    "Looking for an AI video production agency? Ruminate X creates cinematic AI commercials, brand films, product videos, and social content for brands that need premium creative without traditional production drag.",
  keywords: [
    "AI video production agency",
    "AI video production agencies",
    "AI commercial production agency",
    "AI brand film agency",
    "AI product video agency",
    "AI social media video agency",
  ],
  openGraph: {
    title: "AI Video Production Agency | Ruminate X",
    description:
      "Cinematic AI commercials, brand films, launch videos, and social content for ambitious brands.",
    url: "https://ruminatex.com/ai-video-production-agencies",
  },
};

const displayStyle = { fontFamily: "var(--font-bebas-neue), sans-serif" };

const evaluationPoints = [
  {
    title: "Creative standard",
    copy:
      "Most AI video production agencies can generate clips. Very few can build a real campaign narrative, visual system, and editorial standard that feels premium from first frame to final cut.",
  },
  {
    title: "Speed without generic output",
    copy:
      "Fast delivery only matters if the work still feels considered. The right AI video agency shortens production timelines without giving you template-looking creative.",
  },
  {
    title: "Commercial usefulness",
    copy:
      "A strong agency should know when to make a hero brand film, when to build a conversion-focused product video, and when to create social content built for repeatable distribution.",
  },
  {
    title: "Production flexibility",
    copy:
      "The best AI production partners can scale from one launch film to ongoing ad creative, multilingual versions, product variations, and cross-channel campaign assets.",
  },
];

const servicePaths = [
  {
    title: "AI Brand Film Agency",
    href: "/ai-brand-film-agency",
    desc: "For companies that need a cinematic brand story, not just another promo video.",
  },
  {
    title: "AI Commercial Production",
    href: "/ai-commercial-production",
    desc: "For paid campaigns, launch films, and high-impact commercials built to look expensive.",
  },
  {
    title: "AI Product Video Agency",
    href: "/ai-product-video-agency",
    desc: "For demos, launch assets, feature storytelling, and conversion-focused product creative.",
  },
  {
    title: "AI Social Media Video Agency",
    href: "/ai-social-media-video-agency",
    desc: "For brands that need repeatable short-form creative without sacrificing story or polish.",
  },
];

const useCases = [
  "Launch campaigns that need a hero film plus cutdowns",
  "E-commerce brands that want premium ads without premium production drag",
  "Product marketing teams that need demos, explainers, and feature reveals",
  "Creative teams testing multiple angles, hooks, and visual concepts quickly",
  "Brands expanding into multilingual campaigns and regional variations",
  "Agencies that need a white-label production partner behind the scenes",
];

const faqItems = [
  {
    question: "What does an AI video production agency do?",
    answer:
      "An AI video production agency plans, scripts, designs, and delivers video campaigns using AI-assisted production workflows instead of traditional crews, locations, and long post-production timelines. The best agencies still lead with strategy, storytelling, editing, and brand taste — AI is the production engine, not the creative substitute.",
  },
  {
    question: "When should a brand hire an AI video production agency instead of a traditional production company?",
    answer:
      "An AI video production agency is a strong fit when you need speed, creative flexibility, multiple versions, or cinematic output without the cost and scheduling drag of a traditional shoot. Traditional production still makes sense for some live-action scenarios, but many commercial, product, social, and launch briefs now perform better with an AI-native workflow.",
  },
  {
    question: "How do I choose between AI video production agencies?",
    answer:
      "Compare agencies on creative quality, narrative thinking, consistency, editing polish, speed, revision flexibility, and their ability to support your actual campaign goals. Avoid choosing only on price. The cheapest AI video agency often produces the most replaceable work.",
  },
  {
    question: "What kinds of videos can Ruminate X create?",
    answer:
      "Ruminate X produces cinematic brand films, AI commercials, product videos, launch assets, social media campaigns, multilingual voiceover content, and supporting creative for e-commerce, SaaS, fashion, hospitality, real estate, and other growth-focused brands.",
  },
  {
    question: "Do you work directly with brands and with agencies?",
    answer:
      "Yes. We work directly with in-house marketing teams and founders, and we also support agencies that need a white-label AI video production partner for client delivery.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ruminatex.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Video Production Agency",
      item: "https://ruminatex.com/ai-video-production-agencies",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://ruminatex.com/ai-video-production-agencies#service",
  name: "AI Video Production Agency",
  serviceType: "AI video production services",
  provider: {
    "@type": "Organization",
    name: "Ruminate X",
    url: "https://ruminatex.com",
  },
  areaServed: "Worldwide",
  description:
    "Ruminate X is an AI video production agency creating cinematic commercials, brand films, product videos, and social creative for ambitious brands.",
  offers: {
    "@type": "Offer",
    url: "https://ruminatex.com/contact",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen">
        <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">
            AI Video Production Agency
          </p>
          <h1
            style={{ ...displayStyle, fontSize: "clamp(50px, 10vw, 130px)" }}
            className="text-white leading-none mb-6"
          >
            CINEMATIC AI VIDEO
            <br />
            <span style={{ color: "#ebff00" }}>FOR BRANDS</span>
            <br />
            THAT NEED TO MOVE.
          </h1>
          <p className="text-[#888888] text-xl max-w-3xl leading-relaxed mt-8">
            If you&apos;re comparing AI video production agencies, start here: Ruminate X creates
            cinematic brand films, AI commercials, product videos, and social content for brands
            that need premium creative quality without the cost, drag, and constraints of
            traditional production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/contact"
              className="bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors inline-block text-center"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors inline-block text-center"
            >
              See Our Work
            </Link>
          </div>
        </section>

        <section className="border-t border-[#1a1a1a] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">What to look for</p>
              <h2
                style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
                className="text-white leading-none mb-6"
              >
                NOT ALL AI VIDEO
                <br />
                AGENCIES ARE BUILT
                <br />
                THE SAME.
              </h2>
              <p className="text-[#888888] text-lg leading-relaxed max-w-2xl">
                Search results for AI video production agencies are filling up fast, but the market is
                split between cheap prompt vendors and real creative partners. If the goal is serious
                brand growth, you need the second type.
              </p>
            </div>
            <div className="space-y-4">
              {evaluationPoints.map((item) => (
                <div
                  key={item.title}
                  className="border border-[#1a1a1a] p-6 hover:border-[#ebff00]/20 transition-colors"
                >
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Why Ruminate X</p>
            <h2
              style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 72px)" }}
              className="text-white leading-none mb-8"
            >
              THE AI VIDEO AGENCY
              <br />
              FOR AMBITIOUS BRANDS.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                ["Cinema-grade creative", "We build work that feels directed, edited, and intentionally art-led — not mass generated."],
                ["Fast commercial output", "Launch films, ad variations, social cutdowns, and product storytelling without the normal production lag."],
                ["Built for conversion and brand", "We care about visual taste and business outcomes at the same time."],
              ].map(([title, copy]) => (
                <div key={title} className="border border-[#1a1a1a] p-6">
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-[#888888] leading-relaxed">{copy}</p>
                </div>
              ))}
            </div>
            <p className="text-[#888888] text-lg leading-relaxed max-w-4xl">
              Ruminate X is the right fit when you want a team that can think like strategists,
              write like copywriters, design like art directors, and execute like a modern AI-native
              production studio. We create work for launches, campaigns, product storytelling, and
              always-on content systems — without turning your brand into generic AI sludge.
            </p>
          </div>
        </section>

        <section className="border-t border-[#1a1a1a] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Service paths</p>
            <h2
              style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
              className="text-white leading-none mb-6"
            >
              START WITH THE PAGE
              <br />
              THAT MATCHES YOUR INTENT.
            </h2>
            <p className="text-[#888888] text-lg max-w-3xl leading-relaxed mb-12">
              Strong SEO starts with intent match. If you&apos;re looking for a specific kind of AI
              video production agency, use the route below that best fits the job.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicePaths.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-[#1a1a1a] p-6 hover:border-[#ebff00]/30 hover:bg-[#0d0d0d] transition-colors"
                >
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-[#888888] leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#1a1a1a] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Best use cases</p>
              <h2
                style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
                className="text-white leading-none mb-6"
              >
                WHEN AN AI VIDEO
                <br />
                AGENCY MAKES SENSE.
              </h2>
              <p className="text-[#888888] text-lg leading-relaxed">
                AI production is especially valuable when a campaign needs range, speed, testing
                flexibility, or premium visuals that would otherwise be slowed down by physical
                production constraints.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {useCases.map((item) => (
                <div key={item} className="border border-[#1a1a1a] p-5 text-[#888888] text-sm leading-relaxed">
                  <span className="text-[#ebff00] mr-2">→</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">FAQ</p>
            <h2
              style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
              className="text-white leading-none mb-10"
            >
              AI VIDEO PRODUCTION
              <br />
              AGENCIES: COMMON QUESTIONS.
            </h2>
            <div className="space-y-8">
              {faqItems.map((item) => (
                <div key={item.question} className="border-b border-[#1a1a1a] pb-8 last:border-b-0">
                  <h3 className="text-white font-semibold text-lg mb-3">{item.question}</h3>
                  <p className="text-[#888888] leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#1a1a1a] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="border border-[#1a1a1a] p-10 md:p-12">
              <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">For agencies too</p>
              <h2
                style={{ ...displayStyle, fontSize: "clamp(36px, 5vw, 64px)" }}
                className="text-white leading-none mb-6"
              >
                NEED A WHITE-LABEL
                <br />
                PRODUCTION PARTNER?
              </h2>
              <p className="text-[#888888] text-lg max-w-3xl leading-relaxed mb-8">
                We also work behind the scenes for marketing and creative agencies that want to sell
                premium video services without hiring a production team. If that&apos;s your use case,
                contact us and we&apos;ll scope the partnership around your client workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors inline-block text-center"
                >
                  Talk About a Partnership
                </Link>
                <Link
                  href="/roi-calculator"
                  className="border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors inline-block text-center"
                >
                  Calculate ROI
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
