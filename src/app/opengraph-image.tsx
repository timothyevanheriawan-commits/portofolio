// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { opengraphStyles } from "./opengraph-styles";

export const runtime = "edge";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div style={opengraphStyles.container}>
                {/* Visual Scanner Grid Line (Swiss Detail) */}
                <div style={opengraphStyles.scannerLine} />

                {/* Logo - Matching your MarkLogo geometry */}
                <div style={opengraphStyles.logoContainer}>
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
                <div style={opengraphStyles.textContainer}>
                    <div style={opengraphStyles.title}>
                        Timothy Evan
                    </div>
                    <div style={opengraphStyles.subtitle}>
                        Frontend Developer / Data Analyst
                    </div>
                </div>

                {/* "System" stamp in corner */}
                <div style={opengraphStyles.stampContainer}>
                    <div style={opengraphStyles.versionText}>V.2026</div>
                    <div style={opengraphStyles.versionLine} />
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}