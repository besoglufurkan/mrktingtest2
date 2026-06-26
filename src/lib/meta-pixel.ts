import { sendMetaEvent } from "@/lib/api/meta.functions";

export const META_PIXEL_ID = "2223965438403463";
export const META_LEAD_VALUE = 10.0;
export const META_LEAD_CURRENCY = "TRY";

/** Meta Pixel base code — yalnızca init; PageView istemci + CAPI ile gönderilir. */
export const META_PIXEL_SCRIPT = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
`.trim();

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

type MetaEventName = "PageView" | "Lead";

function createEventId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

function readCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

function getFbp(): string | undefined {
  return readCookie("_fbp");
}

function getFbc(): string | undefined {
  if (typeof window === "undefined") return undefined;
  const fromCookie = readCookie("_fbc");
  if (fromCookie) return fromCookie;

  const fbclid = new URLSearchParams(window.location.search).get("fbclid");
  if (!fbclid) return undefined;
  return `fb.1.${Date.now()}.${fbclid}`;
}

function getExternalId(): string {
  if (typeof window === "undefined") return createEventId();
  const key = "tm_visitor_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = createEventId();
    localStorage.setItem(key, id);
  }
  return id;
}

function fireBrowserPixel(eventName: MetaEventName, eventId: string) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;

  if (eventName === "Lead") {
    window.fbq(
      "track",
      "Lead",
      { value: META_LEAD_VALUE, currency: META_LEAD_CURRENCY },
      { eventID: eventId },
    );
    return;
  }

  window.fbq("track", "PageView", {}, { eventID: eventId });
}

function sendServerEvent(eventName: MetaEventName, eventId: string) {
  if (typeof window === "undefined") return;

  void sendMetaEvent({
    data: {
      eventName,
      eventId,
      eventSourceUrl: window.location.href,
      fbp: getFbp(),
      fbc: getFbc(),
      externalId: getExternalId(),
    },
  }).catch(() => {
    // Sessiz — tarayıcı pikseli yedek kanal olarak kalır.
  });
}

function dispatchMetaEvent(eventName: MetaEventName) {
  const eventId = createEventId();
  fireBrowserPixel(eventName, eventId);
  sendServerEvent(eventName, eventId);
}

/** İlk sayfa yüklemesinde bir kez PageView (piksel + CAPI, aynı event_id). */
export function trackMetaPageView() {
  if (typeof window === "undefined") return;
  const key = "tm_meta_pageview";
  if (sessionStorage.getItem(key)) return;
  sessionStorage.setItem(key, "1");
  dispatchMetaEvent("PageView");
}

/** Telegram link tıklamasında Lead (value + currency + CAPI user_data). */
export function trackMetaLead() {
  dispatchMetaEvent("Lead");
}

/** Attach once at root — catches every Telegram anchor click site-wide. */
export function attachTelegramLeadTracking() {
  if (typeof document === "undefined") return () => {};

  const onClick = (event: MouseEvent) => {
    const anchor = (event.target as Element | null)?.closest("a");
    if (!anchor) return;
    const href = anchor.getAttribute("href") ?? "";
    if (href.includes("t.me")) {
      trackMetaLead();
    }
  };

  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}
