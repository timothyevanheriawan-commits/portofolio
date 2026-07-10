// src/app/icon.tsx
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#F7F7F5",
      }}
    >
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        {/* T */}
        <rect x="2" y="4" width="9" height="2.5" rx="0.5" fill="#1A1A1A" />
        <rect x="5" y="4" width="3" height="20" rx="0.5" fill="#1A1A1A" />
        {/* E */}
        <rect x="15" y="4" width="3" height="20" rx="0.5" fill="#1A1A1A" />
        <rect x="15" y="4" width="8" height="2.5" rx="0.5" fill="#1A1A1A" />
        <rect x="15" y="12.75" width="6" height="2.5" rx="0.5" fill="#7A1E1E" />
        <rect x="15" y="21.5" width="8" height="2.5" rx="0.5" fill="#1A1A1A" />
      </svg>
    </div>,
    size,
  );
}
