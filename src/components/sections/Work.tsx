import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "Marketplace Platform",
    name: "Omnisio",
    oneliner: "Full marketplace built in 6 weeks — payments, dashboards, and seller onboarding, live in production.",
    description: "Full Stripe Connect payout system, real-time sales dashboards, and a seller onboarding flow — built from scratch and launched live. First transaction processed on day 43.",
    stack: ["Next.js 14", "Supabase", "Stripe Connect", "TypeScript", "Vercel"],
    image: "https://i.ibb.co/PsQDbX1L",
    internalHref: "/work/omnisio",
    externalHref: "https://www.omnisio.co.uk/",
    badge: "Featured",
    featured: true,
  },
  {
    tag: "Events & Nightlife",
    name: "PULSE Collective",
    oneliner: "Brand site for London's underground rave scene — atmospheric, gallery-driven, with automated enquiry handling.",
    description: "PULSE needed a site that felt like their events — fast, visual, and immersive. Built an animated multi-section site with a downloadable photo gallery, upcoming and past events display, and an AI-automated enquiry form that routes booking requests without manual handling.",
    stack: ["Bolt", "AI Automation", "Custom Animation"],
    image: "https://i.ibb.co/hx4xKGZg",
    internalHref: null,
    externalHref: "https://pulse-collective.co.uk/",
    badge: "Live",
    featured: false,
  },
  {
    tag: "Cultural Consultancy",
    name: "The Renaissance",
    oneliner: "Minimal, copy-led site for a London cultural consultancy — built to convert serious clients, not browsers.",
    description: "The Renaissance needed their positioning to land immediately. Built a typographically-led site with a tiered services structure, clear process breakdown, and direct CTAs designed around their clarity-first philosophy.",
    stack: ["Next.js", "Tailwind", "Vercel"],
    image: "https://i.ibb.co/jkvQ0Xrw",
    internalHref: null,
    externalHref: "https://renaissancehouse.org.uk/",
    badge: "Live",
    featured: false,
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

        {/* 3-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <article
              key={project.name}
              className={`group flex flex-col rounded-xl border overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]
                ${project.featured
                  ? "border-[var(--accent)]/30 bg-[var(--surface-2)] hover:border-[var(--accent)]/60"
                  : "border-[var(--border)] bg-[var(--background)] hover:border-[var(--border)]/80"
                }`}
            >
              {/* Thumbnail */}
              <div className="relative h-44 w-full overflow-hidden bg-[var(--surface-2)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-200 ease-out"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                {/* Tag + badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-medium tracking-widest uppercase text-[var(--text-muted)]">
                    {project.tag}
                  </span>
                  <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-full border
                      ${project.featured
                        ? "bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--accent)]/20"
                        : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      }`}
                  >
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-base font-semibold mb-1">{project.name}</h3>
                <p className="text-xs font-medium text-[var(--accent)] mb-3 leading-relaxed">
                  {project.oneliner}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Stack */}
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

                {/* CTAs */}
                <div className="flex items-center gap-4">
                  {project.internalHref && (
                    <Link
                      href={project.internalHref}
                      className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors group/link"
                    >
                      View case study
                      <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  )}
                  {project.externalHref && (
                    <a
                      href={project.externalHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group/ext"
                    >
                      View site
                      <ArrowUpRight size={13} className="group-hover/ext:translate-x-0.5 group-hover/ext:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
