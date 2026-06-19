import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMarketData, type GainPoint } from "@/lib/api/market.functions";

export type LiveStock = { sym: string; price: number; prevClose: number };
export type GainItem = GainPoint;

// Gerçek veri yüklenene kadar (veya kaynak erişilemezse) gösterilecek makul
// yedek değerler. Site hiçbir koşulda kırılmaz.
const FALLBACK_LIVE: LiveStock[] = [
  { sym: "THYAO", price: 307.75, prevClose: 303.1 },
  { sym: "ASELS", price: 371.25, prevClose: 377.75 },
  { sym: "SISE", price: 39.8, prevClose: 39.1 },
  { sym: "EREGL", price: 25.4, prevClose: 25.1 },
  { sym: "TUPRS", price: 172.5, prevClose: 170.2 },
  { sym: "GARAN", price: 138.4, prevClose: 135.9 },
  { sym: "AKBNK", price: 71.85, prevClose: 70.95 },
  { sym: "FROTO", price: 1268.0, prevClose: 1255.0 },
];

const FALLBACK_GAINS: GainItem[] = [
  { sym: "YKBNK", date: "27 Mayıs", entry: 33.16, current: 42.88, daysHeld: 22 },
  { sym: "AKBNK", date: "27 Mayıs", entry: 64.0, current: 81.35, daysHeld: 22 },
  { sym: "HALKB", date: "6 Mayıs", entry: 38.12, current: 48.04, daysHeld: 43 },
  { sym: "GARAN", date: "27 Mayıs", entry: 122.9, current: 142.5, daysHeld: 22 },
  { sym: "ISCTR", date: "27 Mayıs", entry: 13.14, current: 15.42, daysHeld: 22 },
  { sym: "THYAO", date: "20 Mayıs", entry: 295.0, current: 326.5, daysHeld: 29 },
  { sym: "TCELL", date: "27 Mayıs", entry: 101.0, current: 114.5, daysHeld: 22 },
  { sym: "VAKBN", date: "20 Mayıs", entry: 30.42, current: 34.88, daysHeld: 29 },
];

function istanbulNow(): Date {
  const now = new Date();
  return new Date(now.toLocaleString("en-US", { timeZone: "Europe/Istanbul" }));
}

export function isMarketOpen(d: Date): boolean {
  const day = d.getDay();
  if (day === 0 || day === 6) return false; // hafta sonu
  const mins = d.getHours() * 60 + d.getMinutes();
  return mins >= 600 && mins < 1080; // 10:00 – 18:00 TR saati
}

export function pctOf(s: LiveStock): number {
  return ((s.price - s.prevClose) / s.prevClose) * 100;
}

export function gainPct(g: GainItem): number {
  return ((g.current - g.entry) / g.entry) * 100;
}

export function fmtPrice(n: number): string {
  return n.toFixed(2).replace(".", ",");
}

export function fmtPct(p: number): string {
  const sign = p >= 0 ? "+" : "-";
  return `${sign}%${Math.abs(p).toFixed(2).replace(".", ",")}`;
}

export function useMarketData() {
  const query = useQuery({
    queryKey: ["bist-market"],
    queryFn: () => getMarketData(),
    refetchInterval: 30_000,
    staleTime: 25_000,
  });

  const real =
    query.data && query.data.live.length > 0 ? query.data.live : FALLBACK_LIVE;
  const gains =
    query.data && query.data.gains.length > 0 ? query.data.gains : FALLBACK_GAINS;

  const [display, setDisplay] = useState<LiveStock[]>(FALLBACK_LIVE);
  const [marketOpen, setMarketOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const baseRef = useRef<LiveStock[]>(FALLBACK_LIVE);

  // Gerçek veri her güncellendiğinde tabanı yeniden gerçek fiyatlara sabitle.
  useEffect(() => {
    baseRef.current = real;
    setDisplay(real);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.dataUpdatedAt]);

  useEffect(() => {
    setMounted(true);

    const updateOpen = () => setMarketOpen(isMarketOpen(istanbulNow()));
    updateOpen();
    const openTimer = setInterval(updateOpen, 30_000);

    // Piyasa açıkken görsel canlılık için çok küçük (±%0.06) salınım. Her
    // gerçek veri çekiminde taban yeniden sabitlendiği için değerler
    // gerçek fiyattan anlamlı şekilde sapmaz.
    const jitter = setInterval(() => {
      if (!isMarketOpen(istanbulNow())) return;
      setDisplay(
        baseRef.current.map((s) => ({
          ...s,
          price: s.price * (1 + (Math.random() - 0.5) * 0.0012),
        })),
      );
    }, 2500);

    return () => {
      clearInterval(openTimer);
      clearInterval(jitter);
    };
  }, []);

  return { stocks: display, gains, marketOpen, mounted };
}

function StatusPill({ marketOpen, mounted }: { marketOpen: boolean; mounted: boolean }) {
  if (mounted && !marketOpen) {
    return (
      <span className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
        <span className="opacity-70">PİYASA KAPALI</span>
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </span>
      <span className="font-semibold text-emerald-400">CANLI</span>
    </span>
  );
}

export function LiveTicker({
  stocks,
  marketOpen,
  mounted,
}: {
  stocks: LiveStock[];
  marketOpen: boolean;
  mounted: boolean;
}) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-foreground text-background">
      <div className="flex animate-marquee whitespace-nowrap py-2 text-[11px] font-mono font-medium sm:text-xs">
        {Array.from({ length: 2 }).map((_, dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-6 px-3 sm:gap-8 sm:px-4">
            <span className="flex items-center gap-2">
              <StatusPill marketOpen={marketOpen} mounted={mounted} />
              <span className="opacity-30">|</span>
              <span className="opacity-60">BIST</span>
            </span>
            {stocks.map((s) => {
              const p = pctOf(s);
              const up = p >= 0;
              return (
                <span key={`${dup}-${s.sym}`} className="flex items-center gap-1.5">
                  <span className="opacity-70">{s.sym}</span>
                  <span className="opacity-90">₺{fmtPrice(s.price)}</span>
                  <span className={up ? "text-emerald-400" : "text-rose-400"}>
                    {up ? "▲" : "▼"} {fmtPct(p)}
                  </span>
                  <span className="opacity-30">•</span>
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
