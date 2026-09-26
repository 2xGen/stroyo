"use client";

import { useActionState, useState } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions";
import { contactEmail, type Copy, type Locale } from "@/lib/content";

const initialState: WaitlistState = { status: "idle" };

type Intent = { id: string; label: string };

export function LeadForm({
  locale,
  copy,
  context,
  category = "",
  query = "",
  intents,
  defaultIntent,
  equipmentLabel,
  equipmentPlaceholder,
  haveEquipmentLabel,
  haveLocationLabel,
  locationLabel,
  locationDefault = "",
  queryDefault = "",
  whenLabel,
  showTiming = false,
  showOffer = false,
  submit,
  hint,
  successNote,
  variant = "light",
}: {
  locale: Locale;
  copy: Copy;
  context: string;
  category?: string;
  query?: string;
  intents?: Intent[];
  defaultIntent: string;
  equipmentLabel?: string;
  equipmentPlaceholder?: string;
  haveEquipmentLabel?: string;
  haveLocationLabel?: string;
  locationLabel?: string;
  locationDefault?: string;
  queryDefault?: string;
  whenLabel?: string;
  showTiming?: boolean;
  showOffer?: boolean;
  submit: string;
  hint: string;
  successNote?: string;
  variant?: "light" | "dark";
}) {
  const [state, formAction, pending] = useActionState(joinWaitlist, initialState);
  const [intent, setIntent] = useState(defaultIntent);
  const [timing, setTiming] = useState(copy.timings[0]?.id ?? "browse");
  const [offer, setOffer] = useState("rent");
  const dark = variant === "dark";
  const supplying = intent === "have" && Boolean(haveEquipmentLabel);
  const equipmentText = supplying ? haveEquipmentLabel : equipmentLabel;
  const locationText = supplying && haveLocationLabel ? haveLocationLabel : locationLabel;
  const describedBy = state.status === "error" ? `${context}-hint ${context}-error` : `${context}-hint`;

  if (state.status === "success") {
    return (
      <div className={`border px-4 py-4 ${dark ? "border-white/20 bg-white/10" : "border-line bg-white"}`} role="status">
        {successNote ? <p className="font-semibold">{successNote}</p> : null}
        <p className={successNote ? "mt-2 font-semibold" : "font-semibold"}>{copy.success}</p>
      </div>
    );
  }

  const choice = (active: boolean) =>
    `cursor-pointer border px-3 py-2 text-left text-sm font-bold ${
      active
        ? dark
          ? "border-white bg-white text-ink"
          : "border-ink bg-ink text-white"
        : dark
          ? "border-white/30 text-white"
          : "border-line bg-white text-ink"
    }`;

  return (
    <form action={formAction} className="relative">
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="context" value={context} />
      <input type="hidden" name="category" value={category} />
      <input type="hidden" name="intent" value={intent} />
      {query ? <input type="hidden" name="query" value={query} /> : null}
      {showTiming ? <input type="hidden" name="timing" value={timing} /> : null}
      {showOffer || supplying ? <input type="hidden" name="offer" value={offer} /> : null}

      {intents ? (
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {intents.map((item) => (
            <button key={item.id} type="button" aria-pressed={intent === item.id} onClick={() => setIntent(item.id)} className={choice(intent === item.id)}>
              {item.label}
            </button>
          ))}
        </div>
      ) : null}

      {equipmentText ? (
        <label className="mt-4 block text-sm font-bold">
          {equipmentText}
          <input
            name="query"
            required
            maxLength={120}
            placeholder={equipmentPlaceholder}
            defaultValue={queryDefault}
            disabled={pending}
            className="mt-2 h-12 w-full border border-line bg-white px-3 text-base text-ink disabled:opacity-60"
          />
        </label>
      ) : null}

      {locationText ? (
        <label className="mt-4 block text-sm font-bold">
          {locationText}
          <input
            name="location"
            maxLength={80}
            defaultValue={locationDefault}
            disabled={pending}
            className="mt-2 h-12 w-full border border-line bg-white px-3 text-base text-ink disabled:opacity-60"
          />
        </label>
      ) : null}

      {showTiming ? (
        <fieldset className="mt-4">
          <legend className="text-sm font-bold">{whenLabel ?? copy.whenLabel}</legend>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {copy.timings.map((item) => (
              <button key={item.id} type="button" aria-pressed={timing === item.id} onClick={() => setTiming(item.id)} className={choice(timing === item.id)}>
                {item.label}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      {showOffer || supplying ? (
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          {[
            { id: "rent", label: copy.ownerRent },
            { id: "sell", label: copy.ownerSell },
            { id: "both", label: copy.ownerBoth },
          ].map((item) => (
            <button key={item.id} type="button" aria-pressed={offer === item.id} onClick={() => setOffer(item.id)} className={choice(offer === item.id)}>
              {item.label}
            </button>
          ))}
        </div>
      ) : null}

      <label htmlFor={`${context}-email`} className="mt-4 mb-2 block text-sm font-bold">
        {copy.emailLabel}
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={`${context}-email`}
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          spellCheck={false}
          placeholder={copy.emailPlaceholder}
          aria-describedby={describedBy}
          aria-invalid={state.status === "error"}
          disabled={pending}
          className="h-12 min-w-0 flex-1 border border-line bg-white px-3 text-base text-ink disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={pending}
          className="h-12 shrink-0 cursor-pointer bg-orange px-5 text-sm font-bold tracking-[0.04em] text-ink uppercase hover:bg-[#e85a00] disabled:opacity-60"
        >
          {pending ? copy.submitting : submit}
        </button>
      </div>
      <p id={`${context}-hint`} className={`mt-3 text-sm ${dark ? "text-white/70" : "text-muted"}`}>
        {hint}
      </p>
      {state.status === "error" ? (
        <p id={`${context}-error`} className="mt-2 text-sm font-semibold" role="alert">
          {state.code === "invalid" ? (
            copy.errorInvalid
          ) : (
            <>
              {copy.errorFailBefore}{" "}
              <a href={`mailto:${contactEmail}`} className="underline">
                {contactEmail}
              </a>
              {copy.errorFailAfter}
            </>
          )}
        </p>
      ) : null}
    </form>
  );
}
