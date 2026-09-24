import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "Stroyo. Machines in one place. Rent. Buy. List.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    kicker: "COMING SOON",
    title: ["Machines", "in one place."],
    line: "Rent. Buy. List.",
  });
}
