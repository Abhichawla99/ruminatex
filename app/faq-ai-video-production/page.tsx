import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ: Common Questions About AI Video Production",
  description: "Answers to frequently asked questions about AI-generated video production. Quality, cost, limitations, and more.",
};

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

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          FAQ: Common Questions About AI Video Production
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Answers to the most common questions about AI-generated video production.
        </p>

        <section className="mb-16 space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Is AI video quality really as good as professional production?</h3>
            <p className="text-lg text-slate-700">
              Yes. Modern AI generates broadcast-quality video that rivals professional studios. Voiceovers sound natural, visuals are crisp, and branding is seamless. The only limitation is live-action filming (actors, real locations).
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Can I copyright AI-generated videos?</h3>
            <p className="text-lg text-slate-700">
              Yes. You own the copyright to videos you create with AI tools. You can use them commercially, sell them, or repurpose them.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">How much does AI video production cost?</h3>
            <p className="text-lg text-slate-700">
              Platforms range from free (Canva) to $500+/month (enterprise). Most businesses use $30–$100/month subscriptions for unlimited video generation.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Do AI voiceovers sound robotic?</h3>
            <p className="text-lg text-slate-700">
              No. AI voices now sound natural and human-like. Most people can't distinguish them from real voice actors. Tone, pacing, and emphasis are customizable.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">How long does it take to create a video?</h3>
            <p className="text-lg text-slate-700">
              Script to final video: 24–48 hours. The AI generation itself takes 15 minutes to 2 hours depending on video length.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Can I get unlimited revisions?</h3>
            <p className="text-lg text-slate-700">
              Yes. With subscription-based platforms, revisions are free and unlimited. Change the script, regenerate the video at no cost.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">What if my language isn't supported?</h3>
            <p className="text-lg text-slate-700">
              AI video tools support 140+ languages. If your language isn't available, most platforms can add it. Contact support for custom language requests.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Can I use AI video for commercials and ads?</h3>
            <p className="text-lg text-slate-700">
              Yes. Full commercial rights are included. Use in ads, TV, cinema, and anywhere else. No royalty or licensing issues.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Do I need any technical skills?</h3>
            <p className="text-lg text-slate-700">
              No. Most AI video tools are designed for non-technical users. Drag-and-drop interfaces make it easy for anyone to create videos.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">What are the limitations of AI video?</h3>
            <p className="text-lg text-slate-700">
              Main limitations: Can't film live action or real-world locations, can't capture specific real-world events, limited to pre-made stock footage and animations. Best for explainers, demos, training, and marketing videos.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Can I integrate AI video into my workflow?</h3>
            <p className="text-lg text-slate-700">
              Yes. Most platforms integrate with Zapier, Slack, CMS tools, and offer APIs for custom integrations. Automate video generation as part of your workflow.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Is it ethical to use AI-generated video?</h3>
            <p className="text-lg text-slate-700">
              Yes. Disclose when using AI if required by regulation (e.g., deepfakes). For business videos, explainers, and marketing—no disclosure needed. Use responsibly and don't impersonate real people.
            </p>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Contact Support
          </button>
        </section>
      </div>
    </main>
  );
}
