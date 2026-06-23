import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader, getRequestIP } from "@tanstack/react-start/server";
import { z } from "zod";

import {
  hashMetaExternalId,
  sendMetaConversionEvent,
  type MetaEventName,
} from "../meta-capi.server";

const LEAD_VALUE = 10.0;
const LEAD_CURRENCY = "TRY";

const eventSchema = z.object({
  eventName: z.enum(["PageView", "Lead"]),
  eventId: z.string().min(8).max(128),
  eventSourceUrl: z.string().url().optional(),
  fbp: z.string().optional(),
  fbc: z.string().optional(),
  externalId: z.string().optional(),
});

function resolveClientIp(): string | undefined {
  const fromH3 = getRequestIP({ xForwardedFor: true });
  if (fromH3) return fromH3;

  const xff = getRequestHeader("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }

  return getRequestHeader("x-real-ip") ?? getRequestHeader("cf-connecting-ip");
}

function customDataFor(eventName: MetaEventName) {
  if (eventName === "Lead") {
    return { value: LEAD_VALUE, currency: LEAD_CURRENCY };
  }
  return undefined;
}

/** Sunucu tarafı Conversions API — istemciden gelen olay + gerçek IP / UA birleştirilir. */
export const sendMetaEvent = createServerFn({ method: "POST" })
  .inputValidator(eventSchema)
  .handler(async ({ data }) => {
    const clientIp = resolveClientIp();
    const clientUserAgent = getRequestHeader("user-agent");

    if (!clientIp) {
      console.warn("[meta-capi] client_ip_address alınamadı — proxy başlıklarını kontrol edin.");
    }

    await sendMetaConversionEvent({
      eventName: data.eventName,
      eventId: data.eventId,
      eventSourceUrl: data.eventSourceUrl,
      userData: {
        client_ip_address: clientIp,
        client_user_agent: clientUserAgent,
        fbp: data.fbp,
        fbc: data.fbc,
        external_id: data.externalId ? [hashMetaExternalId(data.externalId)] : undefined,
      },
      customData: customDataFor(data.eventName),
    });

    return { ok: true as const };
  });
