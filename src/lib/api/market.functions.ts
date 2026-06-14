import { createServerFn } from "@tanstack/react-start";

// BIST hisseleri için gerçek fiyatları Yahoo Finance'in açık (anahtarsız)
// chart endpoint'inden çeker. Sunucu tarafında çalışır; CORS sorunu yoktur.
// Sonuçlar kısa süreli önbelleğe alınır ki kaynak gereksiz yorulmasın.

const SYMBOLS = [
  "THYAO",
  "ASELS",
  "SISE",
  "EREGL",
  "TUPRS",
  "KCHOL",
  "BIMAS",
  "GARAN",
  "AKBNK",
  "FROTO",
  "SAHOL",
  "PGSUS",
  "TCELL",
  "KOZAL",
];

export type LivePoint = { sym: string; price: number; prevClose: number };
export type GainPoint = { sym: string; date: string; entry: number; current: number };
export type MarketPayload = { live: LivePoint[]; gains: GainPoint[]; asOf: number };

type Parsed = { sym: string; price: number; prevClose: number; entry: number; entryT: number };

let cache: { ts: number; payload: MarketPayload } | null = null;
const TTL = 60_000;

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

async function fetchOne(sym: string): Promise<Parsed | null> {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${sym}.IS?range=3mo&interval=1d`;
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json" },
  });
  if (!res.ok) return null;

  const json = (await res.json()) as any;
  const r = json?.chart?.result?.[0];
  if (!r) return null;

  const meta = r.meta ?? {};
  const ts: number[] = r.timestamp ?? [];
  const closes: (number | null)[] = r.indicators?.quote?.[0]?.close ?? [];

  const series: { t: number; c: number }[] = [];
  for (let i = 0; i < closes.length; i++) {
    const c = closes[i];
    if (typeof c === "number" && isFinite(c) && ts[i]) series.push({ t: ts[i], c });
  }
  if (series.length < 3) return null;

  const price =
    typeof meta.regularMarketPrice === "number" && isFinite(meta.regularMarketPrice)
      ? meta.regularMarketPrice
      : series[series.length - 1].c;
  const prevClose = series[series.length - 2].c;

  // En iyi (gerçek) giriş: son gün hariç en düşük kapanış. Tarih ve fiyat
  // gerçektir, kazanç bugünkü fiyatla matematiksel olarak hesaplanır.
  let entry = Infinity;
  let entryT = 0;
  for (let i = 0; i < series.length - 1; i++) {
    if (series[i].c < entry) {
      entry = series[i].c;
      entryT = series[i].t;
    }
  }
  if (!isFinite(entry) || entry <= 0) return null;

  return { sym, price, prevClose, entry, entryT };
}

const trDate = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  timeZone: "Europe/Istanbul",
});

export const getMarketData = createServerFn({ method: "GET" }).handler(
  async (): Promise<MarketPayload> => {
    const now = Date.now();
    if (cache && now - cache.ts < TTL) return cache.payload;

    const results = await Promise.all(SYMBOLS.map((s) => fetchOne(s).catch(() => null)));
    const ok = results.filter((x): x is Parsed => x !== null);

    if (ok.length === 0) {
      if (cache) return cache.payload;
      return { live: [], gains: [], asOf: now };
    }

    const live: LivePoint[] = ok.map((x) => ({
      sym: x.sym,
      price: round2(x.price),
      prevClose: round2(x.prevClose),
    }));

    const gains: GainPoint[] = ok
      .map((x) => ({ x, gain: ((x.price - x.entry) / x.entry) * 100 }))
      .filter((o) => o.gain > 0 && isFinite(o.gain))
      .sort((a, b) => b.gain - a.gain)
      .slice(0, 4)
      .map((o) => ({
        sym: o.x.sym,
        date: trDate.format(new Date(o.x.entryT * 1000)),
        entry: round2(o.x.entry),
        current: round2(o.x.price),
      }));

    const payload: MarketPayload = { live, gains, asOf: now };
    cache = { ts: now, payload };
    return payload;
  },
);
