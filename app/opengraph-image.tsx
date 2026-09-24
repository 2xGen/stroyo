import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "Stroyo. Stroje na jednom místě. Pronajměte. Kupte. Nabídněte.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    kicker: "JIŽ BRZY",
    title: ["Stroje na", "jednom místě."],
    line: "Pronajměte. Kupte. Nabídněte.",
  });
}
