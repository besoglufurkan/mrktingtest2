import { createServerFn } from "@tanstack/react-start";

// BIST hisseleri için gerçek fiyatları Yahoo Finance'in açık (anahtarsız)
// chart endpoint'inden çeker. Sunucu tarafında çalışır; CORS sorunu yoktur.

const LIVE_SYMBOLS = [
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
  "YKBNK",
  "ISCTR",
  "HALKB",
];

/** Mayıs–Haziran 2026 döneminde toplulukta paylaşılan analiz giriş tarihleri */
const TRADE_SETUPS: { sym: string; entryDate: string }[] = [
  { sym: "YKBNK", entryDate: "2026-05-27" },
  { sym: "AKBNK", entryDate: "2026-05-27" },
  { sym: "HALKB", entryDate: "2026-05-06" },
  { sym: "GARAN", entryDate: "2026-05-27" },
  { sym: "ISCTR", entryDate: "2026-05-27" },
  { sym: "THYAO", entryDate: "2026-05-20" },
  { sym: "TCELL", entryDate: "2026-05-27" },
  { sym: "VAKBN", entryDate: "2026-05-20" },
  { sym: "ASELS", entryDate: "2026-05-27" },
  { sym: "SAHOL", entryDate: "2026-06-10" },
  { sym: "PGSUS", entryDate: "2026-05-20" },
  { sym: "FROTO", entryDate: "2026-05-27" },
  { sym: "EREGL", entryDate: "2026-05-06" },
  { sym: "SISE", entryDate: "2026-06-10" },
  { sym: "KCHOL", entryDate: "2026-06-10" },
];

const MAY_JUNE_START = new Date("2026-05-01T00:00:00+03:00").getTime();
const MAY_JUNE_END = new Date("2026-06-30T23:59:59+03:00").getTime();

export type LivePoint = { sym: string; price: number; prevClose: number };
export type GainPoint = {
  sym: string;
  date: string;
  entry: number;
  current: number;
  daysHeld: number;
};
export type MarketPayload = { live: LivePoint[]; gains: GainPoint[]; asOf: number };

type SeriesPoint = { t: number; c: number };
type ChartData = {
  sym: string;
  price: number;
  prevClose: number;
  series: SeriesPoint[];
  byDate: Map<string, number>;
};

let cache: { ts: number; payload: MarketPayload } | null = null;
const TTL = 60_000;

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

function isoFromTs(t: number): string {
  return new Date(t * 1000).toISOString().slice(0, 10);
}

function daysBetween(fromIso: string, to: Date): number {
  const from = new Date(`${fromIso}T12:00:00+03:00`).getTime();
  const end = to.getTime();
  return Math.max(1, Math.round((end - from) / 86_400_000));
}

async function fetchChart(sym: string): Promise<ChartData | null> {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${sym}.IS?range=6mo&interval=1d`;
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

  const series: SeriesPoint[] = [];
  const byDate = new Map<string, number>();
  for (let i = 0; i < closes.length; i++) {
    const c = closes[i];
    if (typeof c === "number" && isFinite(c) && ts[i]) {
      series.push({ t: ts[i], c });
      byDate.set(isoFromTs(ts[i]), c);
    }
  }
  if (series.length < 3) return null;

  const price =
    typeof meta.regularMarketPrice === "number" && isFinite(meta.regularMarketPrice)
      ? meta.regularMarketPrice
      : series[series.length - 1].c;
  const prevClose = series[series.length - 2].c;

  return { sym, price, prevClose, series, byDate };
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

    const symbolsNeeded = [...new Set([...LIVE_SYMBOLS, ...TRADE_SETUPS.map((t) => t.sym)])];
    const results = await Promise.all(symbolsNeeded.map((s) => fetchChart(s).catch(() => null)));
    const charts = new Map<string, ChartData>();
    for (const c of results) {
      if (c) charts.set(c.sym, c);
    }

    if (charts.size === 0) {
      if (cache) return cache.payload;
      return { live: [], gains: [], asOf: now };
    }

    const live: LivePoint[] = LIVE_SYMBOLS.filter((s) => charts.has(s)).map((s) => {
      const c = charts.get(s)!;
      return { sym: s, price: round2(c.price), prevClose: round2(c.prevClose) };
    });

    const today = new Date();
    const gains: GainPoint[] = [];

    for (const setup of TRADE_SETUPS) {
      const chart = charts.get(setup.sym);
      if (!chart) continue;

      const entryTs = new Date(`${setup.entryDate}T12:00:00+03:00`).getTime();
      if (entryTs < MAY_JUNE_START || entryTs > MAY_JUNE_END) continue;

      const entry = chart.byDate.get(setup.entryDate);
      if (typeof entry !== "number" || entry <= 0) continue;

      const current = chart.price;
      const gain = ((current - entry) / entry) * 100;
      if (!isFinite(gain) || gain <= 0) continue;

      gains.push({
        sym: setup.sym,
        date: trDate.format(new Date(`${setup.entryDate}T12:00:00+03:00`)),
        entry: round2(entry),
        current: round2(current),
        daysHeld: daysBetween(setup.entryDate, today),
      });
    }

    gains.sort((a, b) => (b.current - b.entry) / b.entry - (a.current - a.entry) / a.entry);

    const payload: MarketPayload = { live, gains, asOf: now };
    cache = { ts: now, payload };
    return payload;
  },
);
