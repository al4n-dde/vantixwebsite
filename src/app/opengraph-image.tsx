import { ImageResponse } from "next/og";

export const alt = "VantixAI — Web Developer London | Websites & Web Apps That Convert";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 90px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.5,
            display: "flex",
          }}
        />

        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            right: 100,
            top: 115,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 52,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#111",
              border: "1px solid #222",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-end", gap: 0 }}>
              <div
                style={{
                  width: 10,
                  height: 20,
                  background: "#6366f1",
                  borderRadius: "2px 0 0 3px",
                  transform: "skewX(-8deg) translateY(3px)",
                  display: "flex",
                }}
              />
              <div
                style={{
                  width: 5,
                  height: 10,
                  background: "#6366f1",
                  borderRadius: "0 0 3px 3px",
                  alignSelf: "flex-end",
                  display: "flex",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 20,
                  background: "#6366f1",
                  borderRadius: "0 2px 3px 0",
                  transform: "skewX(8deg) translateY(3px)",
                  display: "flex",
                }}
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 0 }}>
            <span
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#f5f5f5",
                letterSpacing: "-0.02em",
              }}
            >
              Vantix
            </span>
            <span
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#6366f1",
                letterSpacing: "-0.02em",
              }}
            >
              AI
            </span>
          </div>
        </div>

        {/* Headline line 1 */}
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            color: "#f5f5f5",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            marginBottom: 8,
            display: "flex",
          }}
        >
          Websites and web apps
        </div>

        {/* Headline line 2 */}
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            color: "#6366f1",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            marginBottom: 28,
            display: "flex",
          }}
        >
          that actually work.
        </div>

        {/* Subheading */}
        <div
          style={{
            fontSize: 22,
            color: "#888888",
            marginBottom: 52,
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          London-based full-stack developer. Fast delivery, production-grade quality.
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: 12 }}>
          {["London-based", "Cambridge-trained", "AI-augmented"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                border: "1px solid #2a2a2a",
                background: "#111",
                color: "#888",
                fontSize: 15,
                display: "flex",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
