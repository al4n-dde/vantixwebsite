"use client";

import * as React from "react";
import { Send, Mail } from "lucide-react";

export function Contact() {
  const [status, setStatus] = React.useState<"idle" | "success">("idle");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      project: (form.elements.namedItem("project") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
      } else {
        setStatus("success");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[var(--surface)]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] block mb-3">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Let&apos;s build something.
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
              Got a project in mind? Tell me about it. I&apos;ll get back to you within 24 hours with an honest take on what it&apos;ll take to build it well.
            </p>

            <div className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--background)] w-fit">
              <Mail size={16} className="text-[var(--accent)]" />
              <a
                href="mailto:info@vantixai.com"
                className="text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              >
                info@vantixai.com
              </a>
            </div>

            <p className="mt-6 text-sm text-[var(--text-muted)]">
              I reply within 24 hours.
            </p>
          </div>

          {/* Form */}
          <div>
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-12 h-12 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center mb-4">
                  <Send size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Message sent!</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Thanks — I&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full h-11 px-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full h-11 px-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                    Project description
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    required
                    rows={5}
                    placeholder="Tell me about your project — what you need built, your timeline, and any relevant context."
                    className="w-full px-4 py-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  />
                </div>

                {/* Inline error */}
                {error && (
                  <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-[var(--radius)] px-4 py-2.5">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-[var(--radius)] bg-[var(--accent)] text-white text-sm font-medium transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] hover:brightness-110 hover:-translate-y-px"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
