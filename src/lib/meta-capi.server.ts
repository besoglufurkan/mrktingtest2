import { createHash } from "node:crypto";

import { getMetaCapiConfig } from "./config.server";

export type MetaEventName = "PageView" | "Lead";

export type MetaUserData = {
  client_ip_address?: string;
  client_user_agent?: string;
  fbp?: string;
  fbc?: string;
  external_id?: string[];
};

export type MetaCustomData = {
  value?: number;
  currency?: string;
};

export type MetaConversionInput = {
  eventName: MetaEventName;
  eventId: string;
  eventSourceUrl?: string;
  userData: MetaUserData;
  customData?: MetaCustomData;
};

const GRAPH_VERSION = "v21.0";

export function hashMetaExternalId(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

export async function sendMetaConversionEvent(input: MetaConversionInput): Promise<void> {
  const { pixelId, accessToken, testEventCode } = getMetaCapiConfig();

  if (!accessToken) {
    console.warn("[meta-capi] META_CAPI_ACCESS_TOKEN tanımlı değil — sunucu olayı atlandı.");
    return;
  }

  const userData: Record<string, unknown> = {};

  if (input.userData.client_ip_address) {
    userData.client_ip_address = input.userData.client_ip_address;
  }
  if (input.userData.client_user_agent) {
    userData.client_user_agent = input.userData.client_user_agent;
  }
  if (input.userData.fbp) userData.fbp = input.userData.fbp;
  if (input.userData.fbc) userData.fbc = input.userData.fbc;
  if (input.userData.external_id?.length) {
    userData.external_id = input.userData.external_id;
  }

  const eventPayload: Record<string, unknown> = {
    event_name: input.eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: input.eventId,
    action_source: "website",
    user_data: userData,
  };

  if (input.eventSourceUrl) {
    eventPayload.event_source_url = input.eventSourceUrl;
  }
  if (input.customData) {
    eventPayload.custom_data = input.customData;
  }

  const body: Record<string, unknown> = { data: [eventPayload] };
  if (testEventCode) {
    body.test_event_code = testEventCode;
  }

  const url = new URL(`https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events`);
  url.searchParams.set("access_token", accessToken);

  const res = await fetch(url.toString(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("[meta-capi] Graph API hatası:", res.status, text);
  }
}
