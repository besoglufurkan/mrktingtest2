import { useEffect, useRef, useState } from "react";

export type LiveStock = {
  sym: string;
  price: number;
  prevClose: number;
};

// Temsili başlangıç fiyatları. Gerçek anlık BIST verisi için bir veri
// sağlayıcı (API) bağlanması gerekir; bu değerler piyasa saatlerinde
// gerçekçi biçimde hareket eder.
const BASE: LiveStock[] = [
  { sym: "THYAO", price: 318.75, prevClose: 312.0 },
  { sym: "ASELS", price: 176.4, prevClose: 171.2 },
  { sym: "SISE", price: 48.92, prevClose: 47.5 },
  { sym: "EREGL", price: 56.15, prevClose: 54.3 },
  { sym: "TUPRS", price: 188.3, prevClose: 184.0 },
  { sym: "KCHOL", price: 236.5, prevClose: 232.1 },
  { sym: "BIMAS", price: 521.0, prevClose: 514.5 },
  { sym: "GARAN", price: 139.7, prevClose: 135.2 },
  { sym: "AKBNK", price: 72.85, prevClose: 70.9 },
  { sym: "FROTO", price: 1268.0, prevClose: 1240.0 },
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

export function fmtPrice(n: number): string {
  return n.toFixed(2).replace(".", ",");
}

export function fmtPct(p: number): string {
  const sign = p >= 0 ? "+" : "-";
  return `${sign}%${Math.abs(p).toFixed(2).replace(".", ",")}`;
}

export function useLiveBist() {
  const [stocks, setStocks] = useState<LiveStock[]>(() => BASE.map((s) => ({ ...s })));
  const [marketOpen, setMarketOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateOpen = () => setMarketOpen(isMarketOpen(istanbulNow()));
    updateOpen();
    const openTimer = setInterval(updateOpen, 30_000);

    const tick = setInterval(() => {
      if (!isMarketOpen(istanbulNow())) return;
      setStocks((prev) =>
        prev.map((s) => {
          const vol = 0.0018; // tik başına ~%0.18 oynaklık
          const drift = (Math.random() - 0.5) * 2 * vol;
          let next = s.price * (1 + drift);
          const min = s.prevClose * 0.9;
          const max = s.prevClose * 1.1;
          next = Math.min(max, Math.max(min, next));
          return { ...s, price: next };
        }),
      );
    }, 2000);

    return () => {
      clearInterval(openTimer);
      clearInterval(tick);
    };
  }, []);

  return { stocks, marketOpen, mounted };
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
              <span className="opacity-60">BIST 100</span>
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
