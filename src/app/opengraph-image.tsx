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
                    background: "#F7F7F5", // Your Swiss-white background
                    padding: "80px",
                }}
            >
                {/* Visual Scanner Grid Line (Swiss Detail) */}
                <div
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "80px",
                        width: "1px",
                        height: "100%",
                        background: "#E8E7E4",
                    }}
                />

                {/* Logo - Matching your MarkLogo geometry */}
                <div style={{ display: "flex", marginBottom: "40px" }}>
                    <svg width="80" height="80" viewBox="0 0 28 28">
                        {/* Left pillar */}
                        <rect x="6" y="4" width="5" height="20" rx="1" fill="#1A1A1A" />
                        {/* Right top segment */}
                        <rect x="14" y="4" width="4" height="8" rx="1" fill="#1A1A1A" fillOpacity="0.9" />
                        {/* Right bottom segment */}
                        <rect x="14" y="16" width="4" height="8" rx="1" fill="#1A1A1A" fillOpacity="0.5" />
                    </svg>
                </div>

                {/* Text Content */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            fontSize: "84px",
                            fontWeight: 700,
                            color: "#1A1A1A",
                            letterSpacing: "-0.04em",
                            lineHeight: 1,
                            marginBottom: "20px",
                            textTransform: "uppercase",
                        }}
                    >
                        Timothy Evan
                    </div>
                    <div
                        style={{
                            fontSize: "24px",
                            color: "#9F9F9F",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            fontFamily: "monospace",
                        }}
                    >
                        Frontend Developer / Data Analyst
                    </div>
                </div>

                {/* "System" stamp in corner */}
                <div
                    style={{
                        position: "absolute",
                        top: "80px",
                        right: "80px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                    }}
                >
                    <div style={{ fontSize: "12px", color: "#1A1A1A", letterSpacing: "0.3em" }}>V.2026</div>
                    <div style={{ width: "40px", height: "2px", background: "#7A1E1E", marginTop: "8px" }} />
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}