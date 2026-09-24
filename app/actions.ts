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

  const blank = (value: string) => value || null;
  const row = {
    email,
    locale,
    intent,
    context,
    query: blank(clip(formData.get("query"), 120)),
    category: blank(clip(formData.get("category"), 40)),
    location: blank(clip(formData.get("location"), 80)),
    timing: ["week", "month", "browse"].includes(timingRaw) ? timingRaw : null,
    offer: ["rent", "sell", "both"].includes(offerRaw) ? offerRaw : null,
    source: "stroyo.cz",
  };

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SECRET_KEY;
  const webhook = process.env.WAITLIST_WEBHOOK_URL;

  try {
    if (supabaseUrl && supabaseKey) {
      const response = await fetch(`${supabaseUrl}/rest/v1/signups`, {
        method: "POST",
        headers: {
          apikey: supabaseKey,
          authorization: `Bearer ${supabaseKey}`,
          "content-type": "application/json",
          prefer: "return=minimal",
        },
        body: JSON.stringify(row),
        signal: AbortSignal.timeout(8000),
      });

      if (!response.ok) {
        console.error("signup insert failed", response.status);
        return { status: "error", code: "unavailable" };
      }
    } else if (webhook) {
      if (!webhook.startsWith("https://")) {
        return { status: "error", code: "unavailable" };
      }

      const response = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...row, createdAt: new Date().toISOString() }),
        signal: AbortSignal.timeout(8000),
      });

      if (!response.ok) {
        return { status: "error", code: "unavailable" };
      }
    } else {
      console.info(JSON.stringify({ waitlist: row }));
    }
  } catch (error) {
    console.error("waitlist failed", error);
    return { status: "error", code: "unavailable" };
  }

  return { status: "success" };
}
