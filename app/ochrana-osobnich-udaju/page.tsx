import { PrivacyPage, privacyMetadata } from "@/components/privacy-page";

export const metadata = privacyMetadata("cs");

export default function CzechPrivacyPage() {
  return <PrivacyPage locale="cs" />;
}
