import { ImageResponse } from "next/og";
import { SITE_METADATA, HERO } from "@/constants";

export const alt = SITE_METADATA.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STACK = ["React", "Next.js", "Node.js", "FastAPI", "PostgreSQL", "React Native", "LLMs"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "radial-gradient(circle at 20% 40%, #1e3a8a 0%, #111113 55%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "8px 20px",
            borderRadius: 999,
            border: "2px solid rgba(96,165,250,0.5)",
            color: "#93c5fd",
            fontSize: 28,
          }}
        >
          {HERO.tagline}
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 32, letterSpacing: -2 }}>
          {HERO.name}
        </div>
        <div style={{ fontSize: 32, color: "rgba(255,255,255,0.7)", marginTop: 16 }}>
          Web, mobile & AI-powered products — Pune, India
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 48 }}>
          {STACK.map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: 12,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.8)",
                fontSize: 24,
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
