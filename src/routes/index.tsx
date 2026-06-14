import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Flame, Target, Users, Zap, CheckCircle2, ArrowRight, AlertTriangle, Star, Quote } from "lucide-react";
import heroChart from "@/assets/hero-chart.jpg";
import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";
import member4 from "@/assets/member-4.jpg";
import member5 from "@/assets/member-5.jpg";
import member6 from "@/assets/member-6.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BIST 100 İç Çemberi — Günlük Hisse Önerileri & Teknik Analiz" },
      { name: "description", content: "BIST 100'de kazananların gizli adresi. Profesyonel analiz ekibimizden günlük hisse önerileri, hedef fiyatlar ve teknik analizler — hepsi ücretsiz." },
      { property: "og:title", content: "BIST 100 İç Çemberi — Günlük Hisse Önerileri & Teknik Analiz" },
      { property: "og:description", content: "BIST 100'de kazananların gizli adresi. Profesyonel analiz ekibimizden günlük hisse önerileri, hedef fiyatlar ve teknik analizler — hepsi ücretsiz." },
    ],
  }),
  component: Index,
});

const TELEGRAM_LINK = "https://t.me/+xTDQZElzQspmZDg5";

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

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background pb-24 sm:pb-0">
      {/* Ambient background effects */}
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      {/* Floating particles / subtle orbs */}
      <div className="pointer-events-none absolute left-[-10%] top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div className="pointer-events-none absolute right-[-10%] bottom-1/4 h-96 w-96 rounded-full bg-amber-400/10 blur-[120px]" />

      {/* Live ticker strip */}
      <div className="relative z-10 overflow-hidden border-b border-border bg-foreground text-background">
        <div className="flex animate-marquee whitespace-nowrap py-2 text-xs font-mono font-medium">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex shrink-0 items-center gap-8 px-4">
              {[
                ["THYAO", "+%4.82"],
                ["ASELS", "+%3.21"],
                ["SISE", "+%2.95"],
                ["EREGL", "+%5.10"],
                ["TUPRS", "+%2.40"],
                ["KCHOL", "+%1.88"],
                ["BIMAS", "+%3.62"],
                ["GARAN", "+%4.05"],
                ["AKBNK", "+%2.71"],
                ["FROTO", "+%6.14"],
              ].map(([sym, pct]) => (
                <span key={`${dup}-${sym}`} className="flex items-center gap-2">
                  <span className="opacity-70">{sym}</span>
                  <span className="text-emerald-400">{pct}</span>
                  <span className="opacity-30">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 pt-10 pb-16 text-center sm:pt-16 sm:pb-20">
        {/* Scarcity badge */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary backdrop-blur-sm sm:text-xs">
          <AlertTriangle className="h-3.5 w-3.5" />
          Sınırlı Sayıda Üye Alıyoruz — Yerini Ayırt
        </div>

        {/* Small badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] font-medium text-muted-foreground shadow-sm sm:mb-8 sm:text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          12.500+ yatırımcı aramıza katıldı
        </div>

        <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          BIST 100'de Kazananların{" "}
          <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">Gizli Adresi</span>
        </h1>

        <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
          Profesyonel analiz ekibimiz her sabah potansiyel getirisi yüksek BIST 100 hisselerini
          inceliyor ve doğrudan Telegram'a düşürüyor. Teknik analiz, hedef fiyat, stop seviyeleri —
          hepsi tek bir ücretsiz grupta.
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:gap-4">
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="cta" size="xl" className="group w-full text-base sm:w-auto sm:text-lg glow-primary">
              <TrendingUp className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="truncate">Gruba Ücretsiz Katıl</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <p className="text-xs text-muted-foreground">10 saniye sürer. Asla spam yok. İstediğin zaman ayrılabilirsin.</p>
        </div>

        {/* Hero image */}
        <div className="mt-12 w-full max-w-5xl sm:mt-16">
          <div className="relative rounded-2xl border border-border bg-surface p-1.5 shadow-2xl shadow-primary/20 sm:p-2">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-primary/30 via-transparent to-primary/10 opacity-50 blur-xl" />
            <img
              src={heroChart}
              alt="BIST 100 canlı analiz paneli"
              width={1280}
              height={896}
              className="relative w-full rounded-xl"
            />
            {/* Floating stat chips */}
            <div className="absolute -left-2 -top-3 hidden rotate-[-4deg] rounded-xl border border-border bg-surface px-3 py-2 shadow-lg sm:block">
              <div className="text-[10px] font-medium text-muted-foreground">SON ÖNERİ</div>
              <div className="font-mono text-sm font-bold text-emerald-600">ASELS +%4.82</div>
            </div>
            <div className="absolute -bottom-3 -right-2 hidden rotate-[3deg] rounded-xl border border-border bg-surface px-3 py-2 shadow-lg sm:block">
              <div className="text-[10px] font-medium text-muted-foreground">HEDEF</div>
              <div className="font-mono text-sm font-bold text-primary">₺ 142.50</div>
            </div>
          </div>
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
            <span>Teknik Analiz Ekibi</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative px-4 py-16 sm:py-24">
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
                  "{t.text}"
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

      {/* What We Do Section */}
      <section className="relative px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center sm:mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              İçeride Neler Var
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
              BIST 100'de öne geçmek için ihtiyacın olan her şey — her gün kapında
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-glow hover:shadow-xl hover:shadow-primary/10 sm:p-8">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
              <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-emerald-600 text-primary-foreground shadow-lg shadow-primary/30">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="relative text-lg font-semibold text-foreground sm:text-xl">
                Günlük BIST 100 Hisse Önerileri
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Her gün 3-5 adet detaylı teknik ve temel analizle desteklenmiş BIST 100 hisse önerisi.
                Hangi hisse, ne zaman, hangi fiyattan — hepsi net.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-glow hover:shadow-xl hover:shadow-primary/10 sm:p-8">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-400/15 blur-2xl" />
              <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="relative text-lg font-semibold text-foreground sm:text-xl">
                Teknik Analiz ve Hedef Fiyatlar
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Destek, direnç, hedef ve stop seviyeleriyle birlikte profesyonel grafik yorumlamaları.
                Riskini kontrol altında tutarak kârını maksimize et.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-glow hover:shadow-xl hover:shadow-primary/10 sm:p-8">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-rose-400/15 blur-2xl" />
              <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-red-500 text-white shadow-lg shadow-rose-500/30">
                <Flame className="h-6 w-6" />
              </div>
              <h3 className="relative text-lg font-semibold text-foreground sm:text-xl">
                Anlık Piyasa Uyarıları
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                BIST 100'de ani hareketler, önemli haber akışı ve anlık fırsatlar anında cebine gelsin.
                Piyasa önünde bir adım olmanı sağlayacak erken uyarı sistemi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Why Join */}
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
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md shadow-primary/30">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Seçilmiş Üyelik</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Sadece ciddi yatırımcılar. Kaliteyi korumak için sınırlı sayıda yer.
                    Gürültü yok, kendi reklamı yok.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md shadow-primary/30">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">%87+ Başarı Oranı</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Son 6 ayda paylaşılan hisse önerilerinin büyük çoğunluğu hedef fiyatına ulaştı.
                    Rakamlar konuşur.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md shadow-primary/30">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">7/24 Analiz Ekibi</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Piyasa açıkken her an aktif. Gece bile BIST 100 haberleri ve global etkiler
                    takip ediliyor. Hiçbir fırsat kaçmaz.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md shadow-primary/30">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Tamamen Ücretsiz</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Ücretli grupların sunduğundan daha fazlası, sıfır maliyetle.
                    Gizli ücret yok, satış baskısı yok.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Teaser Section */}
      <section className="relative px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-8">
            <div className="rounded-2xl border border-border bg-surface p-6 text-center shadow-sm sm:p-8">
              <div className="bg-gradient-to-br from-emerald-500 to-primary bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">%87+</div>
              <div className="mt-2 text-sm font-semibold text-foreground">Başarı Oranı</div>
              <div className="mt-1 text-xs text-muted-foreground">Son 6 ayda hedefe ulaşan öneriler</div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 text-center shadow-sm sm:p-8">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">3-5</div>
              <div className="mt-2 text-sm font-semibold text-foreground">Günlük Hisse</div>
              <div className="mt-1 text-xs text-muted-foreground">Her gün detaylı analizli öneriler</div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 text-center shadow-sm sm:p-8">
              <div className="bg-gradient-to-br from-primary to-emerald-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">12.500+</div>
              <div className="mt-2 text-sm font-semibold text-foreground">Aktif Üye</div>
              <div className="mt-1 text-xs text-muted-foreground">Her gün büyüyen yatırımcı topluluğu</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-emerald-600 to-primary p-8 text-center shadow-2xl shadow-primary/30 sm:p-14">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <h2 className="relative text-2xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Sermayeni Büyütme Fırsatını Kaçırma
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
              Her gün binlerce yatırımcı BIST 100'de öne geçiyor. Profesyonel analiz desteğiyle
              sen de aralarına katıl.
            </p>
            <div className="relative mt-8 sm:mt-10">
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                <Button size="xl" className="group w-full bg-background text-foreground hover:bg-background/90 sm:w-auto sm:text-lg">
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
                Kredi Kartı Yok
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Anında Erişim
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/90 p-3 backdrop-blur-lg shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.1)] sm:hidden">
        <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="block w-full">
          <Button variant="cta" size="lg" className="w-full text-base glow-primary">
            <TrendingUp className="h-4 w-4" />
            Telegram Grubuna Katıl
            <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </main>
  );
}
