import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export async function renderOgImage({
  kicker,
  title,
  line,
}: {
  kicker: string;
  title: [string, string];
  line: string;
}) {
  const font = await readFile(join(process.cwd(), "assets/BricolageGrotesque-800.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111111",
          color: "#f3f0e8",
          padding: "72px",
          fontFamily: "Bricolage Grotesque",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 36, fontWeight: 800, letterSpacing: -1 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 14,
              background: "#ff4b00",
              marginRight: 14,
            }}
          />
          STROYO
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 22, fontWeight: 800, letterSpacing: 4, color: "#ff4b00" }}>
            {kicker}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 22,
              fontSize: 86,
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: -3,
            }}
          >
            <div>{title[0]}</div>
            <div>{title[1]}</div>
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 34, fontWeight: 800 }}>{line}</div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        {
          name: "Bricolage Grotesque",
          data: font,
          style: "normal",
          weight: 800,
        },
      ],
    },
  );
}
