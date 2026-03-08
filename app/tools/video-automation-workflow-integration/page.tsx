import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automate Video Production: Zapier, Slack & CMS Integration",
  description: "Integrate AI video generation into your workflow. Automate with Zapier, Slack, and CMS platforms.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 text-slate-900">
          Automate Video Production: Zapier, Slack & CMS Integration
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Integrate video generation into your tech stack. Automate with Zapier, Slack, and CMS platforms for hands-free video production.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Automation Workflows</h2>

          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Workflow 1: Email → Video</h3>
              <p className="text-slate-700 mb-2">Trigger: Email received with product launch details</p>
              <p className="text-slate-700">→ AI generates demo video → Sends to Slack → Auto-publishes to YouTube</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Workflow 2: Blog → Video</h3>
              <p className="text-slate-700 mb-2">Trigger: New blog post published</p>
              <p className="text-slate-700">→ Extract key points → Generate short video → Add to blog → Share on social</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Workflow 3: Product Update → Training Video</h3>
              <p className="text-slate-700 mb-2">Trigger: Feature released</p>
              <p className="text-slate-700">→ Brief automatically generated → Video created → Training deployed</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Workflow 4: Form Submission → Personalized Video</h3>
              <p className="text-slate-700 mb-2">Trigger: Lead fills out form</p>
              <p className="text-slate-700">→ Personalized video generated → Sent via email → 3x higher engagement</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Supported Integrations</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>✓ Zapier (1,000+ app integrations)</li>
            <li>✓ Slack (instant notifications)</li>
            <li>✓ WordPress, HubSpot CMS</li>
            <li>✓ Google Workspace, Microsoft 365</li>
            <li>✓ Salesforce, Marketo</li>
            <li>✓ Custom API integration</li>
          </ul>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Automate Your Video Production</h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            View Integration Docs
          </button>
        </section>
      </div>
    </main>
  );
}
