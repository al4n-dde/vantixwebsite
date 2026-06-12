import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#0a0a0a",
          border: "1.5px solid #222222",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
              width: 7,
              height: 14,
              background: "linear-gradient(180deg, #818cf8 0%, #6366f1 100%)",
              borderRadius: "1px 0 0 2px",
              transform: "skewX(-8deg) translateY(2px)",
            }}
          />
          <div
            style={{
              width: 3,
              height: 7,
              background: "#6366f1",
              borderRadius: "0 0 2px 2px",
              marginBottom: 0,
              alignSelf: "flex-end",
            }}
          />
          <div
            style={{
              width: 7,
              height: 14,
              background: "linear-gradient(180deg, #818cf8 0%, #6366f1 100%)",
              borderRadius: "0 1px 2px 0",
              transform: "skewX(8deg) translateY(2px)",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
