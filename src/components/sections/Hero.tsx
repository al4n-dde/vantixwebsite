"use client";

import * as React from "react";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        aria-hidden
        style={{
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge — fade up, delay 0 */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs text-[var(--text-secondary)]"
          style={{ animation: "heroFadeUp 0.5s ease-out both" }}
        >
          <MapPin size={11} className="text-[var(--accent)]" />
          <span>London-based · Full-stack · AI-augmented</span>
        </div>

        {/* Headline — fade up, delay 100ms */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.08] text-balance mb-6"
          style={{ animation: "heroFadeUp 0.5s ease-out 0.1s both" }}
        >
          Websites and web apps
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #f5f5f5 0%, var(--accent) 60%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            that actually work.
          </span>
        </h1>

        {/* Subheading — fade up, delay 250ms */}
        <p
          className="max-w-xl mx-auto text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-10"
          style={{ animation: "heroFadeUp 0.5s ease-out 0.25s both" }}
        >
          I build fast, conversion-focused digital products for founders and small businesses — in days, not months.
        </p>

        {/* CTAs — fade up, delay 400ms */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          style={{ animation: "heroFadeUp 0.5s ease-out 0.4s both" }}
        >
          <a
            href="#work"
            onClick={handleScrollToWork}
            className="inline-flex items-center gap-2 h-11 px-6 rounded-[var(--radius)] bg-[var(--accent)] text-white text-sm font-medium transition-all duration-150 active:scale-[0.98] hover:brightness-110 hover:-translate-y-px"
          >
            See my work
            <ArrowRight size={15} />
          </a>
          <a
            href="https://calendly.com/vantixai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-[var(--radius)] border border-[var(--border)] text-[var(--text-primary)] text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-150 active:scale-[0.98] hover:brightness-110 hover:-translate-y-px"
          >
            Book a free call
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)] opacity-60">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[var(--border)]" />
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
