import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Website Design & Dev",
    description:
      "A custom website that converts visitors into customers. Built fast, optimised for performance, and designed to reflect your brand. Not a template — a product.",
    forWho: "Founders, agencies, and businesses ready to replace a template site.",
    price: "From £1,500",
    href: "/services/web-design",
    slug: "web-design",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Web App / Product Build",
    description:
      "Full-stack product development from idea to deployment. APIs, databases, auth, payments — I handle the full stack and ship something people can actually use.",
    forWho: "Startups and founders with an MVP to ship.",
    price: "From £3,000",
    href: "/services/web-apps",
    slug: "web-apps",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Automation & Integrations",
    description:
      "Connect your tools, automate your workflows, and stop doing things manually. Whether it's Zapier, Make, or a custom-built integration — I'll save you hours every week.",
    forWho: "Teams wasting hours on repetitive tasks.",
    price: "From £800",
    href: "/services/automation",
    slug: "automation",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] block mb-3">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            What I build
          </h2>
          <p className="text-[var(--text-secondary)] max-w-md">
            Three focused services. No fluff, no retainer traps. You know what you&apos;re getting and what it costs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group relative flex flex-col p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface-2)] transition-all duration-200"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center mb-5">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                {service.description}
              </p>

              {/* For who */}
              <p className="text-xs text-[var(--text-muted)] mb-5 pb-5 border-b border-[var(--border)]">
                <span className="text-[var(--text-secondary)] font-medium">For: </span>
                {service.forWho}
              </p>

              {/* Price + CTA */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {service.price}
                </span>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Learn more
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
