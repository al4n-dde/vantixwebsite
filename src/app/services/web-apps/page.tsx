import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

export const metadata = {
  title: "Web App / Product Build — VantixAI",
  description: "Full-stack product development from idea to deployment. APIs, databases, auth, payments — the full stack.",
};

const included = [
  "Full-stack architecture design",
  "Database schema and API design",
  "Authentication (email, OAuth, SSO)",
  "Payments integration (Stripe, Connect)",
  "Admin dashboard",
  "Deployment pipeline (CI/CD)",
  "Documentation for handover",
  "1 month post-launch support",
];

const techStack = [
  { category: "Frontend", techs: ["Next.js 14", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", techs: ["Node.js", "Supabase", "PostgreSQL"] },
  { category: "Payments", techs: ["Stripe", "Stripe Connect"] },
  { category: "Infrastructure", techs: ["Vercel", "AWS", "GitHub Actions"] },
];

export default function WebAppsPage() {
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
          Web App / Product Build
        </h1>
        <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-xl">
          Full-stack product development from idea to deployment. APIs, databases, auth, payments — I handle the full stack and ship something people can actually use.
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
              <div className="text-3xl font-semibold mb-1">From £3,000</div>
              <p className="text-sm text-[var(--text-muted)] mb-2">Scoped per project. Most MVPs land between £3k–£8k.</p>
              <p className="text-xs text-[var(--text-muted)] mb-6">Free scoping call to get an accurate quote.</p>
              <a
                href="https://calendly.com/vantixai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center items-center h-11 px-6 rounded-[var(--radius)] bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
              >
                Book a free call
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-8 uppercase tracking-wider">Default tech stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((group) => (
              <div key={group.category} className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                <span className="text-xs text-[var(--text-muted)] block mb-3 uppercase tracking-wider">{group.category}</span>
                <div className="flex flex-col gap-1.5">
                  {group.techs.map((tech) => (
                    <span key={tech} className="text-sm text-[var(--text-secondary)]">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-4">
            I adapt the stack to fit the project. Have a preference? Let&apos;s talk.
          </p>
        </div>
      </main>
    </div>
  );
}
