import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Flame, Target, Users, Zap, CheckCircle2, ArrowRight, AlertTriangle } from "lucide-react";

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

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Ambient background effects */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

      {/* Floating particles / subtle orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 pt-16 pb-20 text-center">
        {/* Scarcity badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm">
          <AlertTriangle className="h-3.5 w-3.5" />
          Sınırlı Sayıda Üye Alıyoruz — Yerini Ayırt
        </div>

        {/* Small badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          12.500+ yatırımcı aramıza katıldı
        </div>

        <h1 className="max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          BIST 100'de Kazananların{" "}
          <span className="text-primary">Gizli Adresi</span>
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Profesyonel analiz ekibimiz her sabah potansiyel getirisi yüksek BIST 100 hisselerini
          inceliyor ve doğrudan Telegram'a düşürüyor. Teknik analiz, hedef fiyat, stop seviyeleri —
          hepsi tek bir ücretsiz grupta.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="xl" className="group text-lg">
              <TrendingUp className="h-5 w-5 transition-transform group-hover:scale-110" />
              Gruba Ücretsiz Katıl — Hisse Önerilerini Al
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <p className="text-xs text-muted-foreground">10 saniye sürer. Asla spam yok. İstediğin zaman ayrılabilirsin.</p>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>%87+ Başarı Oranı</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Günlük BIST 100 Önerileri</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Teknik Analiz Ekibi</span>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              İçeride Neler Var
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              BIST 100'de öne geçmek için ihtiyacın olan her şey — her gün kapında
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-glow hover:bg-surface-elevated">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all group-hover:ring-primary/40">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Günlük BIST 100 Hisse Önerileri
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Her gün 3-5 adet detaylı teknik ve temel analizle desteklenmiş BIST 100 hisse önerisi.
                Hangi hisse, ne zaman, hangi fiyattan — hepsi net.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-glow hover:bg-surface-elevated">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all group-hover:ring-primary/40">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Teknik Analiz ve Hedef Fiyatlar
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Destek, direnç, hedef ve stop seviyeleriyle birlikte profesyonel grafik yorumlamaları.
                Riskini kontrol altında tutarak kârını maksimize et.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-glow hover:bg-surface-elevated">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all group-hover:ring-primary/40">
                <Flame className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Anlık Piyasa Uyarıları
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                BIST 100'de ani hareketler, önemli haber akışı ve anlık fırsatlar anında cebine gelsin.
                Piyasa önünde bir adım olmanı sağlayacak erken uyarı sistemi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Why Join */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                12.500+ Yatırımcı Neden Katıldı
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Gerçek üyeler, gerçek kazançlar. İşte bu topluluğu farklı kılan şeyler.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-8 text-center">
              <div className="text-4xl font-bold text-emerald-500">%87+</div>
              <div className="mt-2 text-sm font-medium text-foreground">Başarı Oranı</div>
              <div className="mt-1 text-xs text-muted-foreground">Son 6 ayda hedefe ulaşan öneriler</div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8 text-center">
              <div className="text-4xl font-bold text-primary">3-5</div>
              <div className="mt-2 text-sm font-medium text-foreground">Günlük Hisse</div>
              <div className="mt-1 text-xs text-muted-foreground">Her gün detaylı analizli öneriler</div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8 text-center">
              <div className="text-4xl font-bold text-primary">12.500+</div>
              <div className="mt-2 text-sm font-medium text-foreground">Aktif Üye</div>
              <div className="mt-1 text-xs text-muted-foreground">Her gün büyüyen yatırımcı topluluğu</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sermayeni Büyütme Fırsatını Kaçırma
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Her gün binlerce yatırımcı BIST 100'de öne geçiyor. Profesyonel analiz desteğiyle
            sen de aralarına katıl.
          </p>
          <div className="mt-10">
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="xl" className="group text-lg">
                <TrendingUp className="h-5 w-5 transition-transform group-hover:scale-110" />
                Gruba Ücretsiz Katıl — Hisse Önerilerini Al
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              Daima Ücretsiz
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              Kredi Kartı Yok
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              Anında Erişim
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted-foreground">
        <p> BIST 100 İç Çemberi. Tüm hakları saklıdır.</p>
        <p className="mt-1 text-xs">Yatırım tavsiyesi değildir. Tüm paylaşımlar eğitim amaçlıdır.</p>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 p-4 backdrop-blur-lg sm:hidden">
        <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="block w-full">
          <Button variant="cta" size="lg" className="w-full text-base">
            <TrendingUp className="h-4 w-4" />
            Hemen Hisse Önerilerine Eriş
          </Button>
        </a>
      </div>
    </main>
  );
}
