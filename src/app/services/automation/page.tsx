import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

export const metadata = {
  title: "Automation & Integrations London",
  description: "Connect your tools, automate your workflows, and save hours every week. Zapier, Make, n8n, or custom-built. London-based automation developer.",
  alternates: { canonical: "https://vantixai.com/services/automation" },
  openGraph: {
    title: "Automation & Integrations London | VantixAI",
    description: "Stop doing things manually. Custom automations and integrations from £800.",
    url: "https://vantixai.com/services/automation",
  },
};

const included = [
  "Workflow audit and mapping",
  "Zapier / Make / n8n automations",
  "Custom API integrations",
  "Webhook setup and handling",
  "CRM and email tool connections",
  "Slack / Notion / Airtable integrations",
  "Testing and documentation",
  "Handover walkthrough",
];

const useCases = [
  { title: "Lead routing", description: "Automatically qualify and route inbound leads to the right person or CRM pipeline." },
  { title: "Invoice automation", description: "Trigger invoices, receipts, and follow-ups without lifting a finger." },
  { title: "Reporting dashboards", description: "Pull data from multiple tools into a single live dashboard." },
  { title: "Onboarding flows", description: "Welcome sequences, account setup emails, and Slack notifications — all automated." },
];

export default function AutomationPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <header className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] block mb-4">Service</span>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
          Automation & Integrations
        </h1>
        <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-xl">
          Connect your tools, automate your workflows, and stop doing things manually. Save hours every week — without changing the tools you already use.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-5 uppercase tracking-wider">What&apos;s included</h2>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                  <Check size={15} className="mt-0.5 text-[var(--accent)] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="p-6 rounded-xl border border-[var(--accent)]/30 bg-[var(--surface)]">
              <div className="text-3xl font-semibold mb-1">From £800</div>
              <p className="text-sm text-[var(--text-muted)] mb-6">Most automation projects complete within 1–2 weeks.</p>
              <a
                href="https://calendly.com/alanaddae/introductory-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center items-center h-11 px-6 rounded-[var(--radius)] bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
              >
                Book a free call
              </a>
            </div>
          </div>
        </div>

        {/* Use cases */}
        <div>
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-8 uppercase tracking-wider">Common use cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {useCases.map((uc) => (
              <div key={uc.title} className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                <h3 className="text-sm font-semibold mb-2">{uc.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
