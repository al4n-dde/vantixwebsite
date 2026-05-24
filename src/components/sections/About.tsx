import * as React from "react";

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
          {/* Photo */}
          <div className="order-2 md:order-1">
            <div className="aspect-[4/5] max-w-sm rounded-2xl overflow-hidden bg-[var(--surface)] border border-[var(--border)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://i.ibb.co/GvxfX7YC"
                alt="Alan — VantixAI founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              I&apos;m Alan — a full-stack developer and AI builder based in London, Cambridge-trained, who builds digital products for founders and small businesses. I combine technical depth with design sensibility to ship things that actually work, not just look good in Figma.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-10">
              AI-augmented workflow means I move faster than a traditional agency at a fraction of the cost. If you need something built properly, let&apos;s talk.
            </p>

            <p className="text-sm text-[var(--text-muted)]">
              London-based · Cambridge-trained · Available for new projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
