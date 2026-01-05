import { ImageResponse } from "next/og";

export const size = {
    width: 32,
    height: 32,
};

export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#F6F5F3",
                    color: "#1A1A1A",
                }}
            >
                <svg width="18" height="18" viewBox="0 0 28 28">
                    <rect x="7" y="4" width="4" height="20" rx="1" fill="currentColor" />
                    <rect x="15" y="4" width="3" height="9" rx="1" fill="currentColor" opacity="0.85" />
                    <rect x="15" y="15" width="3" height="9" rx="1" fill="currentColor" opacity="0.55" />
                </svg>
            </div>
        ),
        size
    );
}
