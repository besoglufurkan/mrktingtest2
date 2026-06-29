import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
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
  { icon: BarChart3, label: "Günlük teknik analiz" },
  { icon: Users, label: "12.500+ aktif üye" },
  { icon: Shield, label: "Eğitim odaklı içerik" },
];

const MEMBER_AVATARS = [member1, member2, member3, member4];

function Index() {
  const { gains } = useMarketData();
  const topExamples = gains.slice(0, 3);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a1410] px-4 py-8">
      {/* Arka plan */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.45_0.14_155/0.35),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-emerald-600/10 blur-[90px]" />

      {/* Ana kart */}
      <main className="relative z-10 w-full max-w-[420px]">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_24px_80px_-20px_rgba(0,0,0,0.55)]">
          <div className="px-6 pb-6 pt-8 text-center sm:px-8 sm:pb-8 sm:pt-10">
            {/* Logo */}
            <div className="mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-50 to-white shadow-md ring-4 ring-emerald-500/15">
              <img
                src={logo}
                alt="Trader Melek"
                width={64}
                height={64}
                className="h-16 w-16 object-contain mix-blend-multiply"
              />
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Trader Melek
            </p>

            <h1 className="mt-2 text-balance text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-[1.65rem]">
              BIST 100 Teknik Analiz Topluluğu
            </h1>

            <p className="mx-auto mt-3 max-w-[320px] text-pretty text-sm leading-relaxed text-muted-foreground">
              Öne çıkan hareketler, önemli seviyeler ve günlük analiz akışı tek yerde.
              Düzenli, sade ve eğitim odaklı bir topluluk deneyimi.
            </p>

            {/* Sosyal kanıt */}
            <div className="mt-5 flex items-center justify-center gap-3">
              <div className="flex -space-x-2.5">
                {MEMBER_AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-[11px] text-muted-foreground">Topluluk üyeleri</p>
              </div>
            </div>

            {/* Rozetler */}
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {HIGHLIGHTS.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-muted/80 px-3 py-1.5 text-[11px] font-medium text-foreground/80"
                >
                  <item.icon className="h-3 w-3 text-emerald-600" />
                  {item.label}
                </span>
              ))}
            </div>

            {/* Mayıs–Haziran örnekleri */}
            {topExamples.length > 0 && (
              <div className="mt-6 rounded-2xl border border-border/80 bg-muted/30 p-4 text-left">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <CalendarRange className="h-3.5 w-3.5 text-emerald-600" />
                    Mayıs – Haziran örnekleri
                  </div>
                  <span className="text-[10px] text-muted-foreground">Eğitim amaçlı</span>
                </div>
                <ul className="space-y-2">
                  {topExamples.map((g) => (
                    <li
                      key={g.sym}
                      className="flex items-center justify-between rounded-xl bg-white/80 px-3 py-2 text-sm shadow-sm"
                    >
                      <div className="min-w-0">
                        <span className="font-bold text-foreground">{g.sym}</span>
                        <span className="ml-2 text-xs text-muted-foreground">{g.date}</span>
                      </div>
                      <span className="shrink-0 font-mono text-sm font-bold text-emerald-600">
                        {fmtPct(gainPct(g))}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-2.5 text-[10px] leading-relaxed text-muted-foreground">
                  Gerçek BIST kapanış fiyatlarıyla hesaplanmıştır. Geçmiş performans gelecek
                  sonuçların garantisi değildir.
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="mt-6">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="cta"
                  size="xl"
                  className="h-[52px] w-full rounded-2xl text-base font-bold shadow-lg shadow-emerald-600/25"
                >
                  <MessageCircle className="h-5 w-5" />
                  Analiz Grubuna Katıl
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <p className="mt-2.5 text-xs text-muted-foreground">
                Telegram&apos;da açılır · Eğitim ve teknik analiz içerikleri
              </p>
            </div>
          </div>

          {/* Alt yasal şerit */}
          <div className="border-t border-border/60 bg-muted/40 px-6 py-4 text-center">
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              Yatırım tavsiyesi değildir. SPK kapsamında yatırım danışmanlığı teşkil etmez.
              Kendi araştırmanızı yapın.
            </p>
            <Link
              to="/gizlilik"
              className="mt-2 inline-block text-[11px] font-medium text-emerald-700 hover:underline"
            >
              Gizlilik Politikası
            </Link>
          </div>
        </div>

        <p className="mt-4 text-center text-[10px] text-white/35">
          tradermelekay.com
        </p>
      </main>
    </div>
  );
}
