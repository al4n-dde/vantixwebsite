import * as React from "react";

const clients = [
  { name: "Omnisio",                 src: "https://i.ibb.co/GvpJ9qc9" },
  { name: "The Renaissance",         src: "https://i.ibb.co/rGN0bX6K" },
  { name: "PULSE Collective",        src: "https://i.ibb.co/rRWtdXfG" },
  { name: "Joseph Removals",         src: "https://i.ibb.co/rK062Qss" },
  { name: "Antz Gardening Services", src: "https://i.ibb.co/XxRP2NH8" },
];

export function SocialProof() {
  return (
    <section className="py-16 border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-xs font-medium tracking-widest uppercase text-[var(--text-muted)] mb-10">
          Trusted by ambitious builders
        </p>

        {/* Logo row */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-14">
          {clients.map((client) => (
            <div
              key={client.name}
              className="h-10 w-28 flex items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.src}
                alt={`${client.name} logo`}
                className="max-h-10 max-w-[7rem] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-150"
              />
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
