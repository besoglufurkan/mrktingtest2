import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/trader-melek-logo.png";

export const Route = createFileRoute("/gizlilik")({
  head: () => ({
    meta: [
      { title: "Gizlilik Politikası — Trader Melek" },
      {
        name: "description",
        content: "Trader Melek gizlilik politikası. Kişisel verilerinizin nasıl toplandığı ve kullanıldığı hakkında bilgi.",
      },
    ],
  }),
  component: GizlilikPage,
});

const CONTACT_EMAIL = "destek@tradermelekay.com";

function GizlilikPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Trader Melek" width={32} height={32} className="h-8 w-8" />
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Trader Melek
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Ana Sayfa
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Gizlilik Politikası
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Son güncelleme: {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Genel Bilgi</h2>
            <p className="mt-2">
              tradermelekay.com (&ldquo;Site&rdquo;) olarak, ziyaretçilerimizin gizliliğine saygı
              duyuyoruz. Bu gizlilik politikası, sitemizi ziyaret ettiğinizde toplanan bilgilerin
              nasıl kullanıldığını açıklar.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Toplanan Bilgiler</h2>
            <p className="mt-2">
              Sitemiz bir landing page olup doğrudan kayıt formu bulundurmaz. Telegram grubuna
              katılım Telegram platformu üzerinden gerçekleşir. Sitemizi ziyaret ettiğinizde
              aşağıdaki bilgiler otomatik olarak toplanabilir:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>IP adresi ve tarayıcı bilgisi (sunucu logları)</li>
              <li>Çerezler aracılığıyla anonim kullanım istatistikleri</li>
              <li>Reklam platformları (Google Ads, Meta Ads) tarafından dönüşüm takibi verileri</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Çerezler</h2>
            <p className="mt-2">
              Sitemiz, kullanıcı deneyimini iyileştirmek ve reklam performansını ölçmek amacıyla
              çerezler kullanabilir. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz;
              ancak bu durumda sitenin bazı özellikleri düzgün çalışmayabilir.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Üçüncü Taraf Hizmetler</h2>
            <p className="mt-2">
              Sitemiz aşağıdaki üçüncü taraf hizmetlerini kullanabilir:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Google Analytics / Google Ads (dönüşüm takibi)</li>
              <li>Meta Pixel (Facebook/Instagram reklam takibi)</li>
              <li>Telegram (grup katılım bağlantısı)</li>
              <li>Vercel (site barındırma)</li>
            </ul>
            <p className="mt-2">
              Bu hizmetlerin kendi gizlilik politikaları geçerlidir.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Veri Güvenliği</h2>
            <p className="mt-2">
              Kişisel verilerinizi korumak için uygun teknik ve idari önlemler alıyoruz. Sitemiz
              HTTPS şifrelemesi ile korunmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Haklarınız</h2>
            <p className="mt-2">
              KVKK kapsamında kişisel verilerinize erişim, düzeltme ve silme talebinde bulunma
              hakkına sahipsiniz. Talepleriniz için bizimle iletişime geçebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">7. İletişim</h2>
            <p className="mt-2">
              Gizlilik politikamız hakkında sorularınız için:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border bg-surface">
        <p className="py-6 text-center text-xs text-muted-foreground/70">
          &copy; {new Date().getFullYear()} Trader Melek — tradermelekay.com
        </p>
      </footer>
    </div>
  );
}
