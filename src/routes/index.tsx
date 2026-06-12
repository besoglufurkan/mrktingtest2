import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Lightbulb, MessageCircle, Crown, Check, ArrowRight, Zap, Users, Shield } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "İç Çember — Özel Telegram Topluluğumuza Katıl" },
      { name: "description", content: "Binlerce motive profesyonelin arasına katıl. Günlük içgörüler, canlı Q&A'lar ve özel stratejiler — hepsi ücretsiz." },
      { property: "og:title", content: "İç Çember — Özel Telegram Topluluğumuza Katıl" },
      { property: "og:description", content: "Binlerce motive profesyonel arasına katıl. Günlük içgörüler, canlı Q&A'lar ve özel stratejiler — hepsi ücretsiz." },
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
        {/* Small badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          10.000+ üye katıldı bile
        </div>

        <h1 className="max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Sana Haksız Avantaj Kazandıran{" "}
          <span className="text-primary">İçgörüler</span>
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Binlerce motive profesyonelin arasına katıl. Günlük içgörüler, özel stratejiler
          ve sektör liderlerine doğrudan erişim — hepsi tek bir ücretsiz Telegram grubunda.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="xl" className="group text-lg">
              <Zap className="h-5 w-5 transition-transform group-hover:scale-110" />
              Telegram Grubumuza Katıl (Ücretsiz)
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <p className="text-xs text-muted-foreground">10 saniye sürer. Asla spam yok. İstediğin zaman ayrılabilirsin.</p>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-primary" />
            <span>Tamamen Ücretsiz</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-primary" />
            <span>Spam Yok</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-primary" />
            <span>Anında Erişim</span>
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
              Önde olman için ihtiyacın olan her şey — her gün kapında
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-glow hover:bg-surface-elevated">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all group-hover:ring-primary/40">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Günlük İçgörüler ve Güncellemeler
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Her sabah özenle seçilmiş içgörüler, piyasa hareketleri ve hemen
                uygulayabileceğin özet stratejilerle güne başla.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-glow hover:bg-surface-elevated">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all group-hover:ring-primary/40">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Topluluk Tartışmaları ve Canlı Soru-Cevaplar
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Aklına gelenlerle aynı fikirde profesyonellerle etkileşime geç.
                Canlı soru-cevap oturumlarına katıl ve uzmanlardan yanıt al.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-glow hover:bg-surface-elevated">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all group-hover:ring-primary/40">
                <Crown className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Özel İpuçları ve Stratejiler
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Başka hiçbir yerde paylaşılmayan çerçeveler, oyun kitapları ve taktiklere
                eriş. İç çemberimiz, bilgi ana akıma ulaşmadan önce alfa bilgiyi elde eder.
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
                10.000+ Kişi Neden Katıldı
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Gerçek üyeler, gerçek sonuçlar. İşte bu topluluğu farklı kılan şeyler.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Özenle Seçilmiş Topluluk</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Gürültü yok, kendi reklamı yok. Her üye inceleniyor. Sinyal-gürültü
                    oranı eşsiz.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Uygulanabilir, Teorik Değil</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Paylaşılan her şey savaşta test edilmiş. Boş laf yok, bulanık tavsiye yok —
                    sadece bugün uygulayabileceğin taktikler.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Sıfır Spam Garantisi</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Sıkı moderasyon tartışmaları yüksek kalitede tutar. Reklam yok, bot yok,
                    dikkat dağıtıcı yok — asla.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Daima Ücretsiz</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Gizli ücret yok, satış baskısı yok. Tüm deneyim %100 ücretsiz çünkü
                    değerin her iki yöne de aktığına inanıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            İç Çember'e Katılmaya Hazır mısın?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Bir sonraki rekabet avantajın sadece bir tık uzağında. 10.000+ üyeye katıl.
          </p>
          <div className="mt-10">
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="xl" className="group text-lg">
                <Zap className="h-5 w-5 transition-transform group-hover:scale-110" />
                Telegram Grubumuza Katıl (Ücretsiz)
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" />
              Daima Ücretsiz
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" />
              Kredi Kartı Yok
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" />
              İstediğin Zaman Ayrıl
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted-foreground">
        <p> İç Çember. Tüm hakları saklıdır.</p>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 p-4 backdrop-blur-lg sm:hidden">
        <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="block w-full">
          <Button variant="cta" size="lg" className="w-full text-base">
            <Zap className="h-4 w-4" />
            Telegram'a Katıl (Ücretsiz)
          </Button>
        </a>
      </div>
    </main>
  );
}
