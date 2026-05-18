import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

export const metadata = {
  title: "Website Design & Dev — VantixAI",
  description: "Custom websites that convert visitors into customers. Fast, performance-optimised, and built to reflect your brand.",
};

const included = [
  "Custom design (no templates)",
  "Mobile-first, fully responsive",
  "Performance optimised (90+ Lighthouse score)",
  "SEO foundations built in",
  "CMS integration (Sanity, Contentful, or similar)",
  "Analytics setup",
  "3 rounds of revision",
  "2 weeks post-launch support",
];

const process = [
  { step: "01", title: "Discovery", description: "We talk through your goals, audience, and what success looks like. I scope the project and we agree on a brief." },
  { step: "02", title: "Design", description: "I build out wireframes and a visual direction. You review and sign off before a line of code is written." },
  { step: "03", title: "Build", description: "Full development. You see weekly progress updates and can give feedback throughout." },
  { step: "04", title: "Launch", description: "Final review, testing, and deployment. I handle DNS, hosting setup, and make sure everything is live and working." },
];

export default function WebDesignPage() {
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
          Website Design & Dev
        </h1>
        <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-xl">
          A custom website that converts visitors into customers. Not a template — a product built specifically for your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Included */}
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

          {/* Pricing */}
          <div>
            <div className="p-6 rounded-xl border border-[var(--accent)]/30 bg-[var(--surface)]">
              <div className="text-3xl font-semibold mb-1">From £1,500</div>
              <p className="text-sm text-[var(--text-muted)] mb-6">Fixed-price project. No hourly surprises.</p>
              <a
                href="https://calendly.com/vantixai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center items-center h-11 px-6 rounded-[var(--radius)] bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
              >
                Book a free call
              </a>
              <p className="text-xs text-[var(--text-muted)] text-center mt-3">I reply within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div>
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-8 uppercase tracking-wider">The process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {process.map((step) => (
              <div key={step.step} className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                <span className="text-xs font-mono text-[var(--accent)] block mb-2">{step.step}</span>
                <h3 className="text-sm font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
