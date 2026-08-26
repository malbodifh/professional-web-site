import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

/**
 * OG image for the homepage at noren.tech.
 * Appears when the link is shared on WhatsApp, LinkedIn, Twitter/X, etc.
 *
 * Layout: cream background · large "n" monogram left · text right · teal accent bar bottom
 *
 * Note: next/og only supports a subset of CSS (flexbox + basic props).
 * No grid, no Tailwind classes — inline styles only.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#F5F0E8",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent strip — left edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 12,
            height: "100%",
            backgroundColor: "#1a1a1a",
          }}
        />

        {/* Main content — horizontally centered with left padding */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            padding: "72px 80px 72px 92px",
          }}
        >
          {/* Left — monogram */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 220,
              height: 220,
              borderRadius: 40,
              backgroundColor: "#1a1a1a",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: 140,
                fontWeight: 800,
                color: "#F5F0E8",
                lineHeight: 1,
                letterSpacing: -4,
              }}
            >
              n
            </span>
          </div>

          {/* Right — text block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 64,
              flex: 1,
            }}
          >
            {/* Eyebrow */}
            <span
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: "#1a1a1a",
                opacity: 0.4,
                letterSpacing: 3,
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              noren.tech
            </span>

            {/* Headline */}
            <span
              style={{
                fontSize: 60,
                fontWeight: 800,
                color: "#1a1a1a",
                lineHeight: 1.1,
                letterSpacing: -2,
              }}
            >
              Software a medida para empresas
            </span>

            {/* Sub */}
            <span
              style={{
                fontSize: 28,
                fontWeight: 400,
                color: "#1a1a1a",
                opacity: 0.55,
                marginTop: 24,
                lineHeight: 1.4,
              }}
            >
              Desarrollo web · Sistemas · Automatización · Apps
            </span>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: "#1a1a1a",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
