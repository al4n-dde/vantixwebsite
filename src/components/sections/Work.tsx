import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const stack = ["Next.js 14", "Supabase", "Stripe Connect", "TypeScript", "Vercel"];

export function Work() {
  return (
    <section id="work" className="py-24 px-6 bg-[var(--surface)]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] block mb-3">
            Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Selected projects
          </h2>
          <p className="text-[var(--text-secondary)] max-w-md">
            Real products, shipped. Not mockups — things that run in production and generate revenue.
          </p>
        </div>

        {/* Omnisio card — full width */}
        <article className="group rounded-xl border border-[var(--accent)]/30 bg-[var(--surface-2)] hover:border-[var(--accent)]/60 transition-all duration-200 overflow-hidden">
          {/* Thumbnail */}
          <div className="h-56 w-full overflow-hidden bg-gradient-to-br from-[var(--accent)]/10 to-[var(--surface)] flex items-center justify-center">
            <span className="text-xs text-[var(--text-muted)] group-hover:scale-[1.03] transition-transform duration-200 ease-out">
              Screenshot coming soon
            </span>
          </div>

          <div className="p-8 md:flex md:items-start md:justify-between md:gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold">Omnisio</h3>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/20">
                  Featured
                </span>
              </div>
              <p className="text-sm font-medium text-[var(--accent)] mb-3">
                Marketplace platform built in 6 weeks.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 max-w-lg">
                Full Stripe Connect payout system, real-time sales dashboards, and a seller onboarding flow — built from scratch and launched live. First transaction processed on day 43.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 md:mt-0 md:flex-shrink-0">
              <Link
                href="/work/omnisio"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors group/link"
              >
                View case study
                <ArrowUpRight size={15} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </article>

        {/* More coming soon */}
        <p className="mt-8 text-sm text-center text-[var(--text-muted)]">
          More case studies coming soon —{" "}
          <a
            href="https://calendly.com/vantixai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
          >
            book a call
          </a>{" "}
          to hear about recent work.
        </p>
      </div>
    </section>
  );
}
