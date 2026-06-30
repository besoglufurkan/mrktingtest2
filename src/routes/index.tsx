import { createFileRoute, Link } from "@tanstack/react-router";
import {
  useMarketData,
  gainPct,
  fmtPct,
} from "@/components/live-ticker";
import {
  MessageCircle,
  ArrowRight,
  BarChart3,
  Users,
  Shield,
  CalendarRange,
  Star,
} from "lucide-react";
import logo from "@/assets/trader-melek-logo.png";
import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";
import member4 from "@/assets/member-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trader Melek — BIST 100 Teknik Analiz Topluluğu" },
      {
        name: "description",
        content:
          "Trader Melek BIST 100 teknik analiz ve finansal okuryazarlık topluluğu. Her sabah eğitim amaçlı analiz paylaşımları Telegram'da.",
      },
      {
        property: "og:title",
        content: "Trader Melek — BIST 100 Teknik Analiz Topluluğu",
      },
      {
        property: "og:description",
        content:
          "BIST 100 teknik analiz paylaşımları ve eğitim içerikleri. Analiz topluluğuna katıl.",
      },
    ],
  }),
  component: Index,
});

const TELEGRAM_LINK = "https://t.me/+7ztsj596C1Q5ZjA0";

const HIGHLIGHTS = [
  { icon: BarChart3, label: "Günlük analiz" },
  { icon: Users, label: "12.500+ üye" },
  { icon: Shield, label: "Eğitim odaklı" },
];

const MEMBER_AVATARS = [member1, member2, member3, member4];

function TelegramCta({ className = "" }: { className?: string }) {
  return (
    <a
      href={TELEGRAM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block ${className}`}
      aria-label="Telegram analiz grubuna katıl"
    >
      <span className="animate-cta-glow relative flex h-[54px] w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 px-4 text-base font-bold text-white shadow-lg transition-transform active:scale-[0.98] sm:h-[56px]">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30">
          <MessageCircle className="h-5 w-5" />
        </span>
        <span className="relative flex-1 text-center sm:flex-none">Analiz Grubuna Katıl</span>
        <ArrowRight className="relative h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}

function Index() {
  const { gains } = useMarketData();
  const topExamples = gains.slice(0, 2);

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden bg-[#0a1410]">
      {/* Arka plan */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,oklch(0.45_0.14_155/0.35),transparent_60%)]" />
      <div className="pointer-events-none fixed -left-24 top-1/4 h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px]" />
      <div className="pointer-events-none fixed -right-24 bottom-1/3 h-72 w-72 rounded-full bg-emerald-600/10 blur-[90px]" />

      {/* Kaydırılabilir içerik — altta sticky CTA için boşluk */}
      <main className="relative z-10 mx-auto w-full max-w-[420px] px-3 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] pt-[max(0.75rem,env(safe-area-inset-top,0px))] sm:px-4 sm:pb-10 sm:pt-8">
        <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)] sm:rounded-[28px]">
          <div className="px-5 pb-5 pt-6 text-center sm:px-8 sm:pb-8 sm:pt-10">
            {/* Logo — mobilde kompakt */}
            <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-50 to-white shadow-md ring-4 ring-emerald-500/15 sm:h-[88px] sm:w-[88px]">
              <img
                src={logo}
                alt="Trader Melek"
                width={56}
                height={56}
                className="h-14 w-14 object-contain mix-blend-multiply sm:h-16 sm:w-16"
              />
            </div>

            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-600 sm:mt-4 sm:text-xs">
              Trader Melek
            </p>

            <h1 className="mt-1.5 text-balance text-xl font-bold leading-snug tracking-tight text-foreground sm:mt-2 sm:text-[1.65rem]">
              BIST 100 Teknik Analiz Topluluğu
            </h1>

            <p className="mx-auto mt-2 max-w-[320px] text-pretty text-[13px] leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm">
              Günlük teknik analiz, önemli seviyeler ve eğitim odaklı paylaşımlar Telegram&apos;da.
            </p>

            {/* Sosyal kanıt — kompakt */}
            <div className="mt-4 flex items-center justify-center gap-2.5 sm:mt-5">
              <div className="flex -space-x-2">
                {MEMBER_AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-full border-2 border-white object-cover shadow-sm sm:h-8 sm:w-8"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400 sm:h-3.5 sm:w-3.5" />
                  ))}
                </div>
                <p className="text-[10px] text-muted-foreground sm:text-[11px]">Topluluk üyeleri</p>
              </div>
            </div>

            {/* Rozetler */}
            <div className="mt-3.5 flex flex-wrap justify-center gap-1.5 sm:mt-5 sm:gap-2">
              {HIGHLIGHTS.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1 rounded-full bg-muted/80 px-2.5 py-1 text-[10px] font-medium text-foreground/80 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-[11px]"
                >
                  <item.icon className="h-3 w-3 text-emerald-600" />
                  {item.label}
                </span>
              ))}
            </div>

            {/* Örnekler — mobilde 2 satır */}
            {topExamples.length > 0 && (
              <div className="mt-4 rounded-xl border border-border/80 bg-muted/30 p-3 text-left sm:mt-6 sm:rounded-2xl sm:p-4">
                <div className="mb-2 flex items-center justify-between gap-2 sm:mb-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-foreground sm:text-xs">
                    <CalendarRange className="h-3.5 w-3.5 text-emerald-600" />
                    Mayıs – Haziran örnekleri
                  </div>
                  <span className="text-[9px] text-muted-foreground sm:text-[10px]">Eğitim amaçlı</span>
                </div>
                <ul className="space-y-1.5 sm:space-y-2">
                  {topExamples.map((g) => (
                    <li
                      key={g.sym}
                      className="flex items-center justify-between rounded-lg bg-white/80 px-2.5 py-1.5 text-sm shadow-sm sm:rounded-xl sm:px-3 sm:py-2"
                    >
                      <div className="min-w-0">
                        <span className="font-bold text-foreground">{g.sym}</span>
                        <span className="ml-1.5 text-[11px] text-muted-foreground sm:ml-2 sm:text-xs">
                          {g.date}
                        </span>
                      </div>
                      <span className="shrink-0 font-mono text-sm font-bold text-emerald-600">
                        {fmtPct(gainPct(g))}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-[9px] leading-relaxed text-muted-foreground sm:mt-2.5 sm:text-[10px]">
                  Gerçek BIST fiyatlarıyla hesaplanmıştır. Geçmiş performans gelecek sonuçların
                  garantisi değildir.
                </p>
              </div>
            )}

            {/* Masaüstü CTA — kart içinde */}
            <div className="mt-6 hidden sm:block">
              <TelegramCta />
              <p className="mt-2.5 text-xs text-muted-foreground">
                Telegram&apos;da açılır · Eğitim ve teknik analiz içerikleri
              </p>
            </div>
          </div>

          {/* Yasal şerit */}
          <div className="border-t border-border/60 bg-muted/40 px-5 py-3 text-center sm:px-6 sm:py-4">
            <p className="text-[10px] leading-relaxed text-muted-foreground sm:text-[11px]">
              Yatırım tavsiyesi değildir. SPK kapsamında yatırım danışmanlığı teşkil etmez.
            </p>
            <Link
              to="/gizlilik"
              className="mt-1.5 inline-block text-[10px] font-medium text-emerald-700 hover:underline sm:text-[11px]"
            >
              Gizlilik Politikası
            </Link>
          </div>
        </div>
      </main>

      {/* Mobil sticky CTA — her zaman görünür */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0a1410]/90 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] pt-3 backdrop-blur-xl sm:hidden">
        <TelegramCta />
        <p className="mt-1.5 text-center text-[10px] text-white/50">
          Eğitim amaçlı içerik · Telegram&apos;da açılır
        </p>
      </div>
    </div>
  );
}
