import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Omnisio",
    tagline: "Marketplace platform built in 6 weeks.",
    description:
      "Full Stripe Connect payout system, real-time sales dashboards, and a seller onboarding flow — built from scratch and launched live.",
    stack: ["Next.js 14", "Supabase", "Stripe Connect", "TypeScript", "Vercel"],
    href: "/work/omnisio",
    available: true,
    highlight: true,
  },
  {
    name: "Project Two",
    tagline: "SaaS product build — coming soon.",
    description:
      "A subscription-based SaaS tool for a London-based startup. Full product build including auth, billing, and a custom dashboard.",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    href: "#",
    available: false,
    highlight: false,
  },
  {
    name: "Project Three",
    tagline: "Conversion-focused marketing site.",
    description:
      "A fast, beautifully designed marketing site with CMS integration, analytics, and A/B tested landing pages.",
    stack: ["Next.js", "Sanity", "Vercel", "Tailwind"],
    href: "#",
    available: false,
    highlight: false,
  },
];

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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <article
              key={project.name}
              className={`group relative flex flex-col rounded-xl border transition-all duration-200 overflow-hidden
                ${project.highlight
                  ? "border-[var(--accent)]/30 bg-[var(--surface-2)] hover:border-[var(--accent)]/60"
                  : "border-[var(--border)] bg-[var(--background)] hover:border-[var(--border)]/80"
                }`}
            >
              {/* Thumbnail placeholder */}
              <div
                className={`h-36 w-full flex items-center justify-center
                  ${project.highlight
                    ? "bg-gradient-to-br from-[var(--accent)]/10 to-[var(--surface)]"
                    : "bg-[var(--surface-2)]"
                  }`}
              >
                <span className="text-xs text-[var(--text-muted)]">
                  {project.available ? "Screenshot" : "Coming soon"}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold">{project.name}</h3>
                  {project.highlight && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/20">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-xs font-medium text-[var(--accent)] mb-2">
                  {project.tagline}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.available ? (
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors group/link"
                  >
                    View case study
                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                ) : (
                  <span className="text-sm text-[var(--text-muted)]">Case study coming soon</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
