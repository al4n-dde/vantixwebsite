import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* V mark */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 0,
          }}
        >
          <div
            style={{
              width: 38,
              height: 76,
              background: "linear-gradient(180deg, #818cf8 0%, #6366f1 100%)",
              borderRadius: "6px 0 0 10px",
              transform: "skewX(-8deg) translateY(10px)",
            }}
          />
          <div
            style={{
              width: 18,
              height: 38,
              background: "#6366f1",
              borderRadius: "0 0 10px 10px",
              alignSelf: "flex-end",
            }}
          />
          <div
            style={{
              width: 38,
              height: 76,
              background: "linear-gradient(180deg, #818cf8 0%, #6366f1 100%)",
              borderRadius: "0 6px 10px 0",
              transform: "skewX(8deg) translateY(10px)",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
