import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Sayfa bulunamadı</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Aradığın sayfa mevcut değil ya da taşınmış olabilir.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Sayfa yüklenemedi
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Bir şeyler ters gitti. Sayfayı yenilemeyi deneyebilir veya ana sayfaya dönebilirsin.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tekrar dene
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ana sayfaya dön
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Trader Melek — BIST 100 Günlük Hisse Önerileri & Teknik Analiz" },
      { name: "description", content: "Trader Melek ile her sabah BIST 100 hisse önerileri, hedef fiyatlar ve teknik analizler doğrudan Telegram'da. Binlerce yatırımcının takip ettiği analiz topluluğuna ücretsiz katıl." },
      { name: "author", content: "Trader Melek" },
      { name: "theme-color", content: "#1f9d6e" },
      { property: "og:site_name", content: "Trader Melek" },
      { property: "og:title", content: "Trader Melek — BIST 100 Günlük Hisse Önerileri & Teknik Analiz" },
      { property: "og:description", content: "Her sabah BIST 100 hisse önerileri, hedef fiyatlar ve teknik analizler doğrudan Telegram'da. Analiz topluluğuna ücretsiz katıl." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.tradermelekay.com/" },
      { property: "og:image", content: "https://www.tradermelekay.com/og.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Trader Melek — BIST 100 Günlük Hisse Önerileri & Teknik Analiz" },
      { name: "twitter:description", content: "Her sabah BIST 100 hisse önerileri, hedef fiyatlar ve teknik analizler doğrudan Telegram'da. Analiz topluluğuna ücretsiz katıl." },
      { name: "twitter:image", content: "https://www.tradermelekay.com/og.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/logo.png",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  // Yenilemede tarayıcının eski kaydırma konumunu geri yüklemesini engelle.
  // Asenkron yüklenen içerik (canlı panel, görseller) yüksekliği değiştirdiği
  // için bu davranış sayfayı yanlış konuma (ortaya) atıyordu. Bir hash varsa
  // (örn. #sss) ilgili bölüme git, yoksa en üstten başla.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
