import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ: Common Questions About AI Video Production",
  description: "Answers to frequently asked questions about AI-generated video production. Quality, cost, limitations, and more.",
};

const displayStyle = { fontFamily: "var(--font-bebas-neue), sans-serif" };

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is AI video quality really as good as professional production?", acceptedAnswer: { "@type": "Answer", text: "Yes. Modern AI generates broadcast-quality video that rivals professional studios. Voiceovers sound natural, visuals are crisp, and branding is seamless. The only limitation is live-action filming (actors, real locations)." } },
    { "@type": "Question", name: "Can I copyright AI-generated videos?", acceptedAnswer: { "@type": "Answer", text: "Yes. You own the copyright to videos you create with AI tools. You can use them commercially, sell them, or repurpose them." } },
    { "@type": "Question", name: "How much does AI video production cost?", acceptedAnswer: { "@type": "Answer", text: "Platforms range from free (Canva) to $500+/month (enterprise). Most businesses use $30–$100/month subscriptions for unlimited video generation." } },
    { "@type": "Question", name: "Do AI voiceovers sound robotic?", acceptedAnswer: { "@type": "Answer", text: "No. AI voices now sound natural and human-like. Most people can't distinguish them from real voice actors. Tone, pacing, and emphasis are customizable." } },
    { "@type": "Question", name: "How long does it take to create a video?", acceptedAnswer: { "@type": "Answer", text: "Script to final video: 24–48 hours. The AI generation itself takes 15 minutes to 2 hours depending on video length." } },
    { "@type": "Question", name: "Can I get unlimited revisions?", acceptedAnswer: { "@type": "Answer", text: "Yes. With subscription-based platforms, revisions are free and unlimited. Change the script, regenerate the video at no cost." } },
    { "@type": "Question", name: "What if my language isn't supported?", acceptedAnswer: { "@type": "Answer", text: "AI video tools support 140+ languages. If your language isn't available, most platforms can add it. Contact support for custom language requests." } },
    { "@type": "Question", name: "Can I use AI video for commercials and ads?", acceptedAnswer: { "@type": "Answer", text: "Yes. Full commercial rights are included. Use in ads, TV, cinema, and anywhere else. No royalty or licensing issues." } },
    { "@type": "Question", name: "Do I need any technical skills?", acceptedAnswer: { "@type": "Answer", text: "No. Most AI video tools are designed for non-technical users. Drag-and-drop interfaces make it easy for anyone to create videos." } },
    { "@type": "Question", name: "What are the limitations of AI video?", acceptedAnswer: { "@type": "Answer", text: "Main limitations: Can't film live action or real-world locations, can't capture specific real-world events, limited to pre-made stock footage and animations. Best for explainers, demos, training, and marketing videos." } },
    { "@type": "Question", name: "Can I integrate AI video into my workflow?", acceptedAnswer: { "@type": "Answer", text: "Yes. Most platforms integrate with Zapier, Slack, CMS tools, and offer APIs for custom integrations. Automate video generation as part of your workflow." } },
    { "@type": "Question", name: "Is it ethical to use AI-generated video?", acceptedAnswer: { "@type": "Answer", text: "Yes. Disclose when using AI if required by regulation (e.g., deepfakes). For business videos, explainers, and marketing—no disclosure needed. Use responsibly and don't impersonate real people." } },
  ],
};

const faqs = [
  {
    q: "Is AI video quality really as good as professional production?",
    a: "Yes. Modern AI generates broadcast-quality video that rivals professional studios. Voiceovers sound natural, visuals are crisp, and branding is seamless. The only limitation is live-action filming (actors, real locations).",
  },
  {
    q: "Can I copyright AI-generated videos?",
    a: "Yes. You own the copyright to videos you create with AI tools. You can use them commercially, sell them, or repurpose them.",
  },
  {
    q: "How much does AI video production cost?",
    a: "Platforms range from free (Canva) to $500+/month (enterprise). Most businesses use $30–$100/month subscriptions for unlimited video generation.",
  },
  {
    q: "Do AI voiceovers sound robotic?",
    a: "No. AI voices now sound natural and human-like. Most people can't distinguish them from real voice actors. Tone, pacing, and emphasis are customizable.",
  },
  {
    q: "How long does it take to create a video?",
    a: "Script to final video: 24–48 hours. The AI generation itself takes 15 minutes to 2 hours depending on video length.",
  },
  {
    q: "Can I get unlimited revisions?",
    a: "Yes. With subscription-based platforms, revisions are free and unlimited. Change the script, regenerate the video at no cost.",
  },
  {
    q: "What if my language isn't supported?",
    a: "AI video tools support 140+ languages. If your language isn't available, most platforms can add it. Contact support for custom language requests.",
  },
  {
    q: "Can I use AI video for commercials and ads?",
    a: "Yes. Full commercial rights are included. Use in ads, TV, cinema, and anywhere else. No royalty or licensing issues.",
  },
  {
    q: "Do I need any technical skills?",
    a: "No. Most AI video tools are designed for non-technical users. Drag-and-drop interfaces make it easy for anyone to create videos.",
  },
  {
    q: "What are the limitations of AI video?",
    a: "Main limitations: Can't film live action or real-world locations, can't capture specific real-world events, limited to pre-made stock footage and animations. Best for explainers, demos, training, and marketing videos.",
  },
  {
    q: "Can I integrate AI video into my workflow?",
    a: "Yes. Most platforms integrate with Zapier, Slack, CMS tools, and offer APIs for custom integrations. Automate video generation as part of your workflow.",
  },
  {
    q: "Is it ethical to use AI-generated video?",
    a: "Yes. Disclose when using AI if required by regulation (e.g., deepfakes). For business videos, explainers, and marketing — no disclosure needed. Use responsibly and don't impersonate real people.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#ebff00] text-xs uppercase tracking-[0.3em] mb-4">Every Frame Answered</p>
        <h1
          style={{ ...displayStyle, fontSize: "clamp(50px, 10vw, 130px)" }}
          className="text-white leading-none mb-6"
        >
          AI VIDEO<br />
          <span style={{ color: "#ebff00" }}>QUESTIONS</span><br />
          ANSWERED.
        </h1>
        <p className="text-[#888888] text-xl max-w-2xl leading-relaxed mt-8">
          Answers to the most common questions about AI-generated video production. No spin. No upsell. Just the brief.
        </p>
      </section>

      {/* FAQ List */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-0">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="border-b border-[#1a1a1a] py-10 group">
                <h3
                  style={displayStyle}
                  className="text-white text-xl md:text-2xl tracking-wide mb-4 group-hover:text-[#ebff00] transition-colors"
                >
                  {q.toUpperCase()}
                </h3>
                <p className="text-[#888888] leading-relaxed max-w-3xl">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            style={{ ...displayStyle, fontSize: "clamp(40px, 7vw, 90px)" }}
            className="text-white leading-none mb-6"
          >
            STILL HAVE<br />
            <span style={{ color: "#ebff00" }}>QUESTIONS?</span>
          </h2>
          <p className="text-[#888888] text-lg mb-10 max-w-xl">
            The brief is always open. Tell us what you're working on and we'll tell you exactly what AI production can do for it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#ebff00] text-[#080808] font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors inline-block text-center">
              Contact Us
            </Link>
            <Link href="/comparison/ai-agency-vs-traditional-agency" className="border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#ebff00] hover:text-[#ebff00] transition-colors inline-block text-center">
              AI vs Traditional Agency
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
