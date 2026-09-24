import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const block = { position: "absolute" as const, background: "#ff6500" };

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#191919", display: "flex" }}>
        <div style={{ ...block, left: 34, top: 28, width: 112, height: 28 }} />
        <div style={{ ...block, left: 34, top: 28, width: 39, height: 79 }} />
        <div style={{ ...block, left: 34, top: 79, width: 112, height: 28 }} />
        <div style={{ ...block, left: 107, top: 79, width: 39, height: 73 }} />
        <div style={{ ...block, left: 34, top: 124, width: 112, height: 28 }} />
      </div>
    ),
    { ...size },
  );
}
