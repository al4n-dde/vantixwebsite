import * as React from "react";

const stats = [
  { label: "Projects shipped", value: "5+" },
  { label: "University", value: "Cambridge" },
  { label: "Workflow", value: "AI-first" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] block mb-3">
            About
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Who you&apos;re working with
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="order-2 md:order-1">
            <div className="aspect-[4/5] max-w-sm rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
              <span className="text-sm text-[var(--text-muted)]">Photo coming soon</span>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              I&apos;m Alan — a physics student at Cambridge and full-stack developer who builds digital products for founders and small businesses. I combine technical depth with design sensibility to ship things that actually work, not just look good in Figma.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-10">
              I&apos;m AI-augmented, which means I move faster than a traditional agency and charge a fraction of the price. If you need something built properly, let&apos;s talk.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)]"
                >
                  <span className="text-lg font-semibold text-[var(--text-primary)]">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
