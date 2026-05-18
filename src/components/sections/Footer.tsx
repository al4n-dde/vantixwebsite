import * as React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm font-semibold">
          <span className="text-[var(--text-primary)]">Vantix</span>
          <span className="text-[var(--accent)]">AI</span>
        </span>
        <p className="text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} VantixAI. All rights reserved.
        </p>
        <nav className="flex items-center gap-5">
          <Link href="#work" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">Work</Link>
          <Link href="#services" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">Services</Link>
          <Link href="#contact" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
