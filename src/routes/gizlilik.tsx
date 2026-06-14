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
            <img
              src={logo}
              alt="Trader Melek"
              width={32}
              height={32}
              className="h-7 w-7 mix-blend-multiply sm:h-8 sm:w-8"
            />
            <span className="font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
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

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            tradermelekay.com (&ldquo;Site&rdquo;) olarak ziyaretçilerimizin gizliliğine önem
            veriyoruz. Kişisel verileriniz yürürlükteki mevzuata uygun olarak korunur ve izniniz
            olmadan üçüncü kişilerle paylaşılmaz.
          </p>

          <p>
            Sitemizin sunduğu hizmetlerden faydalanmanız, bu gizlilik politikasını kabul ettiğiniz
            anlamına gelir. Politikamızda zaman zaman güncelleme yapma hakkımız saklıdır.
          </p>

          <p>
            Gizliliğinizle ilgili her türlü soru, talep ve görüşünüz için bizimle iletişime
            geçebilirsiniz:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
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
