// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    background: "#F7F7F5",
                    padding: "80px",
                }}
            >
                {/* Logo */}
                <div style={{ display: "flex", marginBottom: "40px" }}>
                    <svg
                        width="56"
                        height="56"
                        viewBox="0 0 28 28"
                    >
                        <rect x="6" y="4" width="5" height="20" rx="1" fill="#1A1A1A" />
                        <rect x="14" y="4" width="4" height="8" rx="1" fill="#1A1A1A" opacity="0.9" />
                        <rect x="14" y="16" width="4" height="8" rx="1" fill="#1A1A1A" opacity="0.5" />
                    </svg>
                </div>

                {/* Name */}
                <div
                    style={{
                        fontSize: "72px",
                        fontWeight: 600,
                        color: "#111111",
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        marginBottom: "16px",
                    }}
                >
                    Timothy Evan
                </div>

                {/* Tagline */}
                <div
                    style={{
                        fontSize: "28px",
                        color: "#6F6F6F",
                        letterSpacing: "-0.01em",
                    }}
                >
                    Frontend Developer & Data Analyst
                </div>

                {/* Decorative line */}
                <div
                    style={{
                        position: "absolute",
                        top: "80px",
                        right: "80px",
                        width: "200px",
                        height: "2px",
                        background: "#E8E7E4",
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}