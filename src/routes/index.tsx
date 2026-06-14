import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  useMarketData,
  LiveTicker,
  pctOf,
  gainPct,
  fmtPct,
  fmtPrice,
  type LiveStock,
  type GainItem,
} from "@/components/live-ticker";
import {
  TrendingUp,
  BarChart3,
  Flame,
  Target,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Star,
  Quote,
  Shield,
  Clock,
  MessageCircle,
  Mail,
  PieChart,
} from "lucide-react";
import logo from "@/assets/trader-melek-logo.png";
import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";
import member4 from "@/assets/member-4.jpg";
import member5 from "@/assets/member-5.jpg";
import member6 from "@/assets/member-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trader Melek — BIST 100 Günlük Hisse Önerileri & Teknik Analiz" },
      {
        name: "description",
        content:
          "Trader Melek ile her sabah BIST 100 hisse önerileri, hedef fiyatlar ve teknik analizler doğrudan Telegram'da. Analiz topluluğuna ücretsiz katıl.",
      },
      { property: "og:title", content: "Trader Melek — BIST 100 Günlük Hisse Önerileri & Teknik Analiz" },
      {
        property: "og:description",
        content:
          "Her sabah BIST 100 hisse önerileri, hedef fiyatlar ve teknik analizler doğrudan Telegram'da. Analiz topluluğuna ücretsiz katıl.",
      },
    ],
  }),
  component: Index,
});

const TELEGRAM_LINK = "https://t.me/+xTDQZElzQspmZDg5";
const CONTACT_EMAIL = "destek@tradermelekay.com";

const steps = [
  {
    step: "01",
    title: "Telegram'a Katıl",
    description: "Tek tıkla ücretsiz gruba gir. Kayıt, kart veya ücret yok.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Sabah Önerilerini Al",
    description: "Her sabah 3-5 BIST 100 hissesi, giriş fiyatı, hedef ve stop seviyeleriyle.",
    icon: Clock,
  },
  {
    step: "03",
    title: "Disiplinli İşlem Yap",
    description: "Net seviyelerle riskini kontrol et, piyasayı kovalamak yerine planlı ilerle.",
    icon: Target,
  },
];

const features = [
  {
    title: "Günlük BIST 100 Hisse Önerileri",
    description:
      "Her gün 3-5 adet detaylı teknik ve temel analizle desteklenmiş BIST 100 hisse önerisi. Hangi hisse, ne zaman, hangi fiyattan — hepsi net.",
    icon: TrendingUp,
    gradient: "from-primary to-emerald-600",
    glow: "bg-primary/10",
  },
  {
    title: "Teknik Analiz ve Hedef Fiyatlar",
    description:
      "Destek, direnç, hedef ve stop seviyeleriyle birlikte profesyonel grafik yorumlamaları. Riskini kontrol altında tutarak kârını maksimize et.",
    icon: BarChart3,
    gradient: "from-amber-500 to-orange-500",
    glow: "bg-amber-400/15",
  },
  {
    title: "Anlık Piyasa Uyarıları",
    description:
      "BIST 100'de ani hareketler, önemli haber akışı ve anlık fırsatlar anında cebine gelsin. Piyasa önünde bir adım olmanı sağlayacak erken uyarı sistemi.",
    icon: Flame,
    gradient: "from-rose-500 to-red-500",
    glow: "bg-rose-400/15",
  },
  {
    title: "Ücretsiz Portföy Analizi",
    description:
      "Mevcut portföyünü ekibimize ilet, hisse dağılımını, risk seviyeni ve güçlü/zayıf yönlerini ücretsiz değerlendirelim. Sana özel öneriler bir arada.",
    icon: PieChart,
    gradient: "from-violet-500 to-indigo-500",
    glow: "bg-violet-400/15",
  },
];

const testimonials = [
  {
    name: "Mehmet K.",
    role: "Bireysel Yatırımcı",
    avatar: member1,
    text: "3 ayda portföyüm %42 büyüdü. Sabah önerileri sayesinde artık piyasayı kovalamıyorum, piyasa beni bekliyor.",
  },
  {
    name: "Elif D.",
    role: "Aktif Trader",
    avatar: member2,
    text: "Hedef fiyat ve stop seviyeleri net veriliyor. Disiplinli işlem yapmayı bu grupta öğrendim. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Burak Y.",
    role: "Yeni Başlayan",
    avatar: member3,
    text: "Borsayı yeni öğreniyordum, ekibin teknik analizleri sayesinde ilk ayımda bile kazançla çıktım. Topluluk müthiş.",
  },
  {
    name: "Hakan S.",
    role: "Serbest Muhasebeci",
    avatar: member4,
    text: "2 yıldır borsadayım ama bu kadar disiplinli ve net öneriler ilk kez görüyorum. ASELS ve THYAO önerileriyle bu ay ciddi getiri yakaladım.",
  },
  {
    name: "Zeynep A.",
    role: "Küçük Yatırımcı",
    avatar: member5,
    text: "Küçük sermayeyle büyümek isteyenler için biçilmiş kaftan. Her gün 3-5 hisse önerisi ve hedef fiyatlar tam benlik. Çok teşekkürler ekibe!",
  },
  {
    name: "Cemil T.",
    role: "Emekli Bankacı",
    avatar: member6,
    text: "40 yıllık finans tecrübem var, bu ekibin analiz kalitesi gerçekten profesyonel. Sadece öneri değil, nedenini de anlatıyorlar. Efsane.",
  },
];

const faqs = [
  {
    q: "Trader Melek tamamen ücretsiz mi?",
    a: "Evet. Telegram grubuna katılım, günlük öneriler ve teknik analizler tamamen ücretsizdir. Gizli ücret, abonelik veya satış baskısı yoktur.",
  },
  {
    q: "Her gün kaç hisse önerisi paylaşılıyor?",
    a: "Her sabah 3-5 adet BIST 100 hissesi paylaşılır. Her öneride giriş fiyatı, hedef fiyat ve stop seviyesi net olarak belirtilir.",
  },
  {
    q: "Ücretsiz portföy analizi nasıl çalışıyor?",
    a: "Gruba katıldıktan sonra mevcut portföyünü bizimle paylaşman yeterli. Hisse dağılımını, risk seviyeni ve güçlü/zayıf yönlerini değerlendirip sana özel öneriler sunuyoruz — tamamen ücretsiz.",
  },
  {
    q: "Başarı oranı %87+ gerçek mi?",
    a: "Son 6 ayda paylaşılan hisse önerilerinin büyük çoğunluğu hedef fiyatına ulaşmıştır. Tüm geçmiş performans verileri grupta şeffaf olarak paylaşılır.",
  },
  {
    q: "Yeni başlayanlar da katılabilir mi?",
    a: "Kesinlikle. Öneriler net seviyelerle verildiği için borsayı yeni öğrenenler de kolayca takip edebilir. Topluluk sorulara yardımcı olur.",
  },
  {
    q: "İstediğim zaman ayrılabilir miyim?",
    a: "Evet. Telegram grubundan tek tıkla ayrılabilirsin. Herhangi bir taahhüt veya sözleşme yoktur.",
  },
];

function TelegramButton({
  size = "xl",
  className = "",
  label = "Telegram Grubuna Katıl",
}: {
  size?: "lg" | "xl";
  className?: string;
  label?: string;
}) {
  return (
    <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className={className}>
      <Button variant="cta" size={size} className="group w-full glow-primary">
        <TrendingUp className="h-5 w-5 transition-transform group-hover:scale-110" />
        <span className="truncate">{label}</span>
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </a>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-3 sm:h-16 sm:px-4">
        <a href="#" className="flex min-w-0 items-center gap-2 sm:gap-2.5">
          <img
            src={logo}
            alt="Trader Melek"
            width={36}
            height={36}
            className="h-7 w-7 mix-blend-multiply sm:h-9 sm:w-9"
          />
          <span className="font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
            Trader Melek
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="#nasil-calisir" className="transition-colors hover:text-foreground">
            Nasıl Çalışır
          </a>
          <a href="#sonuclar" className="transition-colors hover:text-foreground">
            Sonuçlar
          </a>
          <a href="#yorumlar" className="transition-colors hover:text-foreground">
            Yorumlar
          </a>
          <a href="#sss" className="transition-colors hover:text-foreground">
            SSS
          </a>
        </nav>
        <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hidden sm:block">
          <Button variant="cta" size="sm" className="glow-primary">
            <TrendingUp className="h-4 w-4" />
            Katıl
          </Button>
        </a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5">
              <img
                src={logo}
                alt="Trader Melek"
                width={32}
                height={32}
                className="h-7 w-7 mix-blend-multiply sm:h-8 sm:w-8"
              />
              <span className="font-display text-base font-bold text-foreground sm:text-lg">
                Trader Melek
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              BIST 100 odaklı günlük hisse önerileri ve teknik analiz topluluğu. Her sabah
              profesyonel analizler doğrudan Telegram'da.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Bağlantılar</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#nasil-calisir" className="transition-colors hover:text-foreground">
                  Nasıl Çalışır
                </a>
              </li>
              <li>
                <a href="#sonuclar" className="transition-colors hover:text-foreground">
                  Sonuçlar
                </a>
              </li>
              <li>
                <a href="#sss" className="transition-colors hover:text-foreground">
                  Sık Sorulan Sorular
                </a>
              </li>
              <li>
                <Link to="/gizlilik" className="transition-colors hover:text-foreground">
                  Gizlilik Politikası
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">İletişim</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Telegram Grubu
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs leading-relaxed text-muted-foreground/70">
            &copy; {new Date().getFullYear()} Trader Melek — tradermelekay.com. Tüm hakları saklıdır.
            Paylaşılan bilgiler eğitim ve bilgilendirme amaçlıdır; geçmiş performans gelecek
            sonuçların garantisi değildir.
          </p>
        </div>
      </div>
    </footer>
  );
}

const SPARK_BARS = [34, 40, 36, 48, 44, 56, 52, 64, 60, 72, 68, 82, 90];

function LivePanel({
  stocks,
  gains,
  marketOpen,
  mounted,
}: {
  stocks: LiveStock[];
  gains: GainItem[];
  marketOpen: boolean;
  mounted: boolean;
}) {
  const featured = stocks.find((s) => s.sym === "ASELS") ?? stocks[0];
  const fPct = pctOf(featured);
  const fUp = fPct >= 0;
  const movers = [...stocks].sort((a, b) => pctOf(b) - pctOf(a)).slice(0, 5);
  const topGain = gains[0];
  const closed = mounted && !marketOpen;

  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-primary/30 via-transparent to-primary/10 opacity-50 blur-xl" />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-primary/20">
        {/* Üst bar */}
        <div className="flex items-center justify-between border-b border-border bg-background/60 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            </div>
            <span className="text-xs font-semibold text-foreground sm:text-sm">
              Trader Melek · Canlı Analiz
            </span>
          </div>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold">
            {closed ? (
              <>
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                <span className="text-muted-foreground">PİYASA KAPALI</span>
              </>
            ) : (
              <>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-emerald-600">CANLI</span>
              </>
            )}
          </span>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-5 sm:p-6">
          {/* Öne çıkan hisse */}
          <div className="rounded-xl border border-border bg-gradient-to-br from-primary/10 to-emerald-500/5 p-4 text-left sm:col-span-2">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold tracking-tight text-foreground">
                {featured.sym}
              </span>
              <span
                className={`rounded-md px-1.5 py-0.5 font-mono text-xs font-bold ${
                  fUp ? "bg-emerald-500/15 text-emerald-600" : "bg-rose-500/15 text-rose-600"
                }`}
              >
                {fUp ? "▲" : "▼"} {fmtPct(fPct)}
              </span>
            </div>
            <div className="mt-2 font-mono text-2xl font-bold text-foreground sm:text-3xl">
              ₺{fmtPrice(featured.price)}
            </div>
            <div className="text-[11px] text-muted-foreground">Anlık fiyat</div>
            <div className="mt-4 flex h-12 items-end gap-1">
              {SPARK_BARS.map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-primary/40 to-emerald-500/80"
                />
              ))}
            </div>
          </div>

          {/* Öne çıkanlar listesi */}
          <div className="sm:col-span-3">
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Bugünün Öne Çıkanları
            </div>
            <div className="space-y-1.5">
              {movers.map((m) => {
                const p = pctOf(m);
                const up = p >= 0;
                return (
                  <div
                    key={m.sym}
                    className="flex items-center justify-between rounded-lg border border-border/60 bg-background/40 px-3 py-2"
                  >
                    <span className="text-sm font-semibold text-foreground">{m.sym}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-muted-foreground">
                        ₺{fmtPrice(m.price)}
                      </span>
                      <span
                        className={`w-20 text-right font-mono text-sm font-bold ${
                          up ? "text-emerald-600" : "text-rose-600"
                        }`}
                      >
                        {up ? "▲" : "▼"} {fmtPct(p)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Alt vurgu şeridi */}
        {topGain && (
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-border bg-emerald-500/5 px-4 py-3 text-sm">
            <TrendingUp className="h-4 w-4 text-emerald-600" />
            <span className="text-muted-foreground">Son kazanç örneği:</span>
            <span className="font-semibold text-foreground">{topGain.sym}</span>
            <span className="font-mono font-bold text-emerald-600">{fmtPct(gainPct(topGain))}</span>
            <span className="text-xs text-muted-foreground">({topGain.date} → bugün)</span>
          </div>
        )}
      </div>
    </div>
  );
}

function Index() {
  const { stocks, gains, marketOpen, mounted } = useMarketData();
  const featured = stocks.find((s) => s.sym === "ASELS") ?? stocks[0];
  const featuredPct = pctOf(featured);
  const featuredUp = featuredPct >= 0;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute left-[-10%] top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div className="pointer-events-none absolute right-[-10%] bottom-1/4 h-96 w-96 rounded-full bg-amber-400/10 blur-[120px]" />

      <SiteHeader />

      <main className="relative z-10 pb-24 sm:pb-0">
        <LiveTicker stocks={stocks} marketOpen={marketOpen} mounted={mounted} />

        {/* Hero */}
        <section className="relative flex flex-col items-center justify-center px-4 pt-10 pb-16 text-center sm:pt-16 sm:pb-20">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary backdrop-blur-sm sm:text-xs">
            <AlertTriangle className="h-3.5 w-3.5" />
            Sınırlı Sayıda Üye Alıyoruz — Yerini Ayırt
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] font-medium text-muted-foreground shadow-sm sm:mb-8 sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            12.500+ yatırımcı aramıza katıldı
          </div>

          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            BIST 100&apos;de Kazananların{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
              Gizli Adresi
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
            <strong className="font-semibold text-foreground">Trader Melek</strong> analiz ekibi
            her sabah potansiyel getirisi yüksek BIST 100 hisselerini inceliyor ve doğrudan
            Telegram&apos;a düşürüyor. Teknik analiz, hedef fiyat, stop seviyeleri — hepsi tek bir
            ücretsiz grupta.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:gap-4">
            <TelegramButton className="w-full sm:w-auto" label="Gruba Ücretsiz Katıl" />
            <p className="text-xs text-muted-foreground">
              10 saniye sürer. Asla spam yok. İstediğin zaman ayrılabilirsin.
            </p>
          </div>

          {/* Mobil canlı fiyat rozeti */}
          <div className="mt-7 flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs shadow-sm sm:hidden">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-medium text-muted-foreground">{featured.sym}</span>
            <span className="font-mono font-semibold text-foreground">
              ₺{fmtPrice(featured.price)}
            </span>
            <span
              className={`font-mono font-bold ${featuredUp ? "text-emerald-600" : "text-rose-600"}`}
            >
              {fmtPct(featuredPct)}
            </span>
          </div>

          {/* Hero canlı panel */}
          <div className="mt-12 w-full max-w-4xl sm:mt-16">
            <LivePanel stocks={stocks} gains={gains} marketOpen={marketOpen} mounted={mounted} />
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-muted-foreground sm:mt-16 sm:gap-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>%87+ Başarı Oranı</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Günlük BIST 100 Önerileri</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Profesyonel Analiz Ekibi</span>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="nasil-calisir" className="relative px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center sm:mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                3 Adımda Başla
              </h2>
              <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
                10 saniyede gruba katıl, sabah önerilerini al, disiplinli işlem yap.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="group relative rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-glow hover:shadow-xl hover:shadow-primary/10 sm:p-8"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-primary/60">{s.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center sm:mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                İçeride Neler Var
              </h2>
              <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
                BIST 100&apos;de öne geçmek için ihtiyacın olan her şey — her gün kapında
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-glow hover:shadow-xl hover:shadow-primary/10 sm:p-8"
                >
                  <div
                    className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${f.glow} blur-2xl transition-all group-hover:opacity-80`}
                  />
                  <div
                    className={`relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient} text-white shadow-lg`}
                  >
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative text-lg font-semibold text-foreground sm:text-xl">
                    {f.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative px-4 py-12 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-8">
              <div className="rounded-2xl border border-border bg-surface p-6 text-center shadow-sm sm:p-8">
                <div className="bg-gradient-to-br from-emerald-500 to-primary bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                  %87+
                </div>
                <div className="mt-2 text-sm font-semibold text-foreground">Başarı Oranı</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Son 6 ayda hedefe ulaşan öneriler
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6 text-center shadow-sm sm:p-8">
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                  3-5
                </div>
                <div className="mt-2 text-sm font-semibold text-foreground">Günlük Hisse</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Her gün detaylı analizli öneriler
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6 text-center shadow-sm sm:p-8">
                <div className="bg-gradient-to-br from-primary to-emerald-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                  12.500+
                </div>
                <div className="mt-2 text-sm font-semibold text-foreground">Aktif Üye</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Her gün büyüyen yatırımcı topluluğu
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gains */}
        <section id="sonuclar" className="relative px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center sm:mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                Gerçek Fiyatlarla Kazanç Örnekleri
              </h2>
              <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
                Öneri günündeki gerçek BIST fiyatı ile güncel fiyat baz alınarak hesaplanmıştır.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 sm:gap-4">
              {gains.map((s) => {
                const g = gainPct(s);
                return (
                  <div
                    key={s.sym}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-glow hover:shadow-xl hover:shadow-emerald-500/10"
                  >
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition-all group-hover:bg-emerald-500/20" />
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold tracking-tight text-foreground">
                          {s.sym}
                        </span>
                        <span className="text-[11px] font-medium text-muted-foreground">
                          {s.date}
                        </span>
                      </div>
                      <div className="mt-4 flex items-end justify-between">
                        <div className="space-y-1">
                          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                            Giriş
                          </div>
                          <div className="font-mono text-sm font-semibold text-foreground">
                            ₺{fmtPrice(s.entry)}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground/50" />
                        <div className="space-y-1 text-right">
                          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                            Güncel
                          </div>
                          <div className="font-mono text-sm font-semibold text-emerald-600">
                            ₺{fmtPrice(s.current)}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-emerald-500/10 py-2 text-sm font-bold text-emerald-600">
                        <TrendingUp className="mr-1.5 h-4 w-4" />
                        {fmtPct(g)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why join */}
        <section className="relative px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-accent/30 p-6 shadow-xl sm:p-12 lg:p-16">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                  12.500+ Yatırımcı Neden Katıldı
                </h2>
                <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
                  Gerçek üyeler, gerçek kazançlar. İşte bu topluluğu farklı kılan şeyler.
                </p>
              </div>
              <div className="relative mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
                {[
                  {
                    icon: Users,
                    title: "Seçilmiş Üyelik",
                    text: "Sadece ciddi yatırımcılar. Kaliteyi korumak için sınırlı sayıda yer. Gürültü yok, kendi reklamı yok.",
                  },
                  {
                    icon: Target,
                    title: "%87+ Başarı Oranı",
                    text: "Son 6 ayda paylaşılan hisse önerilerinin büyük çoğunluğu hedef fiyatına ulaştı. Rakamlar konuşur.",
                  },
                  {
                    icon: Zap,
                    title: "7/24 Analiz Ekibi",
                    text: "Piyasa açıkken her an aktif. Gece bile BIST 100 haberleri ve global etkiler takip ediliyor.",
                  },
                  {
                    icon: Shield,
                    title: "Tamamen Ücretsiz",
                    text: "Ücretli grupların sunduğundan daha fazlası, sıfır maliyetle. Gizli ücret yok, satış baskısı yok.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md shadow-primary/30">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="yorumlar" className="relative px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center sm:mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                Üyelerimiz Ne Diyor
              </h2>
              <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
                Gerçek yatırımcılar, gerçek sonuçlar.
              </p>
            </div>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-glow hover:shadow-xl hover:shadow-primary/10 sm:p-8"
                >
                  <Quote className="h-6 w-6 text-primary/50" />
                  <div className="mt-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 leading-relaxed text-foreground/90">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="sss" className="relative px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center sm:mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                Sık Sorulan Sorular
              </h2>
              <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
                Aklına takılan soruların cevapları burada.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-base font-medium text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-emerald-600 to-primary p-8 text-center shadow-2xl shadow-primary/30 sm:p-14">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <h2 className="relative text-2xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Sermayeni Büyütme Fırsatını Kaçırma
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
                Her gün binlerce yatırımcı BIST 100&apos;de öne geçiyor. Trader Melek analiz
                desteğiyle sen de aralarına katıl.
              </p>
              <div className="relative mt-8 sm:mt-10">
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto"
                >
                  <Button
                    size="xl"
                    className="group w-full bg-background text-foreground hover:bg-background/90 sm:w-auto sm:text-lg"
                  >
                    <TrendingUp className="h-5 w-5 transition-transform group-hover:scale-110" />
                    Gruba Ücretsiz Katıl
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
              <div className="relative mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-primary-foreground/85 sm:mt-8 sm:gap-6">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Daima Ücretsiz
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Ücretsiz Portföy Analizi
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Anında Erişim
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/90 p-3 backdrop-blur-lg shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.1)] sm:hidden">
        <TelegramButton size="lg" label="Telegram Grubuna Katıl" />
      </div>
    </div>
  );
}
