import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const techStack = ["Next.js 14", "Supabase", "Stripe Connect", "TypeScript", "Tailwind CSS", "Vercel"];

export const metadata = {
  title: "Omnisio — VantixAI Case Study",
  description: "A full-stack marketplace platform built in 6 weeks with Next.js, Supabase, and Stripe Connect.",
};

export default function OmnisioCaseStudy() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      {/* Header */}
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
        {/* Hero */}
        <div className="mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] block mb-4">
            Case Study
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            Omnisio
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mb-8">
            A full-stack marketplace, built in 6 weeks.
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Screenshot placeholder */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] h-64 flex items-center justify-center mb-16">
          <span className="text-sm text-[var(--text-muted)]">Screenshots coming soon</span>
        </div>

        {/* Sections */}
        <div className="space-y-14">
          {/* Problem */}
          <section>
            <h2 className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] mb-4">
              The problem
            </h2>
            <div className="border-l-2 border-[var(--border)] pl-6">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Omnisio needed a marketplace where creators could sell digital products and receive payouts directly to their bank accounts. No existing template or off-the-shelf solution could handle the complexity of multi-party payments, split revenue, and real-time sales dashboards — so they needed something custom.
              </p>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] mb-4">
              The solution
            </h2>
            <div className="border-l-2 border-[var(--accent)]/30 pl-6">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                Built a full Next.js 14 + Supabase platform with Stripe Connect for split payouts. Sellers get onboarded through a Stripe Connect Express flow, and buyers experience instant delivery on purchase. The platform includes:
              </p>
              <ul className="space-y-3">
                {[
                  "Stripe Connect Express onboarding for sellers",
                  "Real-time sales dashboard with Supabase Realtime subscriptions",
                  "Buyer-facing storefront with instant digital delivery",
                  "Admin panel for platform-level visibility and moderation",
                  "Row-level security (RLS) policies for multi-tenant data isolation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Outcome */}
          <section>
            <h2 className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] mb-4">
              The outcome
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "6 weeks", label: "From kickoff to launch" },
                { value: "Day 43", label: "First live transaction" },
                { value: "100%", label: "On-time delivery" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-center"
                >
                  <div className="text-2xl font-semibold text-[var(--text-primary)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Tech stack detail */}
          <section>
            <h2 className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] mb-4">
              Tech stack
            </h2>
            <div className="border-l-2 border-[var(--border)] pl-6">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                <strong className="text-[var(--text-primary)]">Next.js 14</strong> (App Router) for the frontend with server components for performance. <strong className="text-[var(--text-primary)]">Supabase</strong> for the database, auth, storage, and realtime. <strong className="text-[var(--text-primary)]">Stripe Connect</strong> for marketplace payments with platform fee splits. Deployed to <strong className="text-[var(--text-primary)]">Vercel</strong> with edge functions for webhook handling.
              </p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-[var(--border)] text-center">
          <p className="text-[var(--text-secondary)] mb-6">
            Have a similar project in mind?
          </p>
          <a
            href="https://calendly.com/vantixai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-[var(--radius)] bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
          >
            Book a free call
          </a>
        </div>
      </main>
    </div>
  );
}
