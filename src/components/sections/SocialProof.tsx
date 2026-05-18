import * as React from "react";

const placeholderLogos = [
  "Client A",
  "Client B",
  "Client C",
  "Client D",
  "Client E",
];

export function SocialProof() {
  return (
    <section className="py-16 border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-xs font-medium tracking-widest uppercase text-[var(--text-muted)] mb-10">
          Trusted by ambitious builders
        </p>

        {/* Logo row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-14">
          {placeholderLogos.map((name) => (
            <div
              key={name}
              className="h-10 w-28 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center"
            >
              <span className="text-xs text-[var(--text-muted)]">{name}</span>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <figure className="max-w-xl mx-auto text-center">
          <blockquote className="text-lg sm:text-xl font-medium text-[var(--text-primary)] leading-relaxed mb-4">
            &ldquo;Alan shipped our entire platform in under 6 weeks. The quality was exceptional.&rdquo;
          </blockquote>
          <figcaption className="text-sm text-[var(--text-secondary)]">
            — Founder, Omnisio
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
