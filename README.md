# tradermelekay.com

BIST 100 hisse önerileri / Telegram topluluğu için landing page.
Lovable'da üretildi (TanStack Start + Vite + Tailwind + shadcn/ui), Vercel üzerinde yayınlanır.

## İçerik nerede?

Sayfanın tüm metin ve bölümleri tek dosyada:

- `src/routes/index.tsx` — ana sayfa (hero, yorumlar, kartlar, CTA)
- `src/routes/__root.tsx` — sayfa kabuğu (head, genel düzen)
- `src/assets/` — görseller (hero-chart, üye fotoğrafları)
- `src/styles.css` — renkler / tema

Telegram grubu linkini değiştirmek için `index.tsx` içindeki `TELEGRAM_LINK` satırını düzenle.

## Yerel geliştirme (Windows notu)

> Bu makinede **Smart App Control** açık olduğu için `npm run dev` ve `npm run build`
> yerelde çalışmıyor (Vite 8'in imzasız native dosyasını engelliyor). Bu yüzden
> derleme ve yayınlama **Cloudflare'in bulutunda** yapılır — aşağıya bak.
> Yerelde de çalıştırmak istersen WSL (Linux) kurulabilir.

```bash
npm install      # bağımlılıklar (çalışır)
npm run dev      # yerel sunucu (SAC açıkken bu makinede çalışmaz)
```

## Yayınlama (Vercel)

Yapılandırma hazır:

- `vite.config.ts` → nitro `vercel` preset (çıktı: `.vercel/output` — Vercel otomatik algılar)
- `vercel.json` → build command `npm run build`
- GitHub reposu: `https://github.com/yilmazcelikk/group-lure.git`

### GitHub + Vercel otomatik deploy

1. Kod GitHub'da (`yilmazcelikk/group-lure`). Her `git push` sonrası Vercel otomatik derler.
2. [vercel.com](https://vercel.com) → **Add New → Project → Import** → `group-lure` reposunu seç.
3. Framework Preset: **Other** (vercel.json zaten build command'i veriyor). **Deploy**'a bas.
4. Deploy bitince `group-lure-xxx.vercel.app` adresinde yayında olur.

### Alan adı (Spaceship) bağlama

1. Vercel → proje → **Settings → Domains → Add** → `tradermelekay.com` ve `www.tradermelekay.com`.
2. Vercel sana DNS kayıtlarını gösterir:
   - Kök alan (`tradermelekay.com`) için **A kaydı** → `76.76.21.21`
   - `www` için **CNAME** → `cname.vercel-dns.com`
3. Spaceship paneli → domain → **Advanced DNS / DNS Records** → bu kayıtları gir.
4. Doğrulama sonrası SSL sertifikası otomatik kurulur.

> Spaceship'in gösterdiği güncel değerleri Vercel panelindeki kayıtlarla birebir
> eşleştir; Vercel zaman zaman farklı IP/değer önerebilir.

## Güncelleme

İçeriği değiştir (`src/routes/index.tsx`), sonra:

```bash
git add -A
git commit -m "içerik güncellendi"
git push
```

Vercel otomatik yeniden derleyip yayınlar.
