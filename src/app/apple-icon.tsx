// src/app/apple-icon.tsx
import { ImageResponse } from "next/og";

export const size = {
    width: 180,
    height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#F7F7F5",
                    borderRadius: "22%",
                }}
            >
                <svg
                    width="100"
                    height="100"
                    viewBox="0 0 28 28"
                >
                    {/* Left pillar */}
                    <rect
                        x="6"
                        y="4"
                        width="5"
                        height="20"
                        rx="1"
                        fill="#1A1A1A"
                    />
                    {/* Right top */}
                    <rect
                        x="14"
                        y="4"
                        width="4"
                        height="8"
                        rx="1"
                        fill="#1A1A1A"
                        opacity="0.9"
                    />
                    {/* Right bottom */}
                    <rect
                        x="14"
                        y="16"
                        width="4"
                        height="8"
                        rx="1"
                        fill="#1A1A1A"
                        opacity="0.5"
                    />
                </svg>
            </div>
        ),
        size
    );
}