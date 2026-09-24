"use server";

export type WaitlistState = {
  status: "idle" | "success" | "error";
  code?: "invalid" | "unavailable";
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(
  _previous: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { status: "success" };
  }

  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const locale = formData.get("locale") === "en" ? "en" : "cs";
  const intentRaw = String(formData.get("intent") ?? "need");
  const intent = ["need", "have", "rent", "buy", "rent-buy"].includes(intentRaw) ? intentRaw : "need";
  const contextRaw = String(formData.get("context") ?? "bottom");
  const context = ["hero", "search", "category", "demo", "owner", "bottom"].includes(contextRaw) ? contextRaw : "bottom";
  const clip = (value: FormDataEntryValue | null, max: number) => String(value ?? "").trim().slice(0, max);
  const timingRaw = clip(formData.get("timing"), 20);
  const offerRaw = clip(formData.get("offer"), 10);

  if (!emailPattern.test(email) || email.length > 254) {
    return { status: "error", code: "invalid" };
  }

  const payload = {
    email,
    locale,
    intent,
    context,
    query: clip(formData.get("query"), 120),
    category: clip(formData.get("category"), 40),
    location: clip(formData.get("location"), 80),
    timing: ["week", "month", "browse"].includes(timingRaw) ? timingRaw : "",
    offer: ["rent", "sell", "both"].includes(offerRaw) ? offerRaw : "",
    source: "stroyo.cz",
    createdAt: new Date().toISOString(),
  };

  const webhook = process.env.WAITLIST_WEBHOOK_URL;

  try {
    if (webhook) {
      if (!webhook.startsWith("https://")) {
        return { status: "error", code: "unavailable" };
      }

      const response = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      });

      if (!response.ok) {
        return { status: "error", code: "unavailable" };
      }
    } else {
      console.info(JSON.stringify({ waitlist: payload }));
    }
  } catch (error) {
    console.error("waitlist failed", error);
    return { status: "error", code: "unavailable" };
  }

  return { status: "success" };
}
