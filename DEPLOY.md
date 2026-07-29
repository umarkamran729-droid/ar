# AL Razzaq Enterprises — Deployment Guide

Standard React + Vite single-page application.  
**No server required.** Builds to a plain `dist/` folder ready for any static host.

---

## Option 1 — Upload `dist/` directly (no build needed)

The `dist/` folder is **already built and included**. You can upload it immediately:

### cPanel / Traditional Hosting
1. Connect via FTP/SFTP to your hosting account.
2. Upload the **contents** of `dist/` into `public_html/`.
3. Upload `.htaccess` into `public_html/` as well.
4. Done — your site is live.

### Netlify (drag & drop)
1. Go to [app.netlify.com](https://app.netlify.com).
2. Click **Add new site → Deploy manually**.
3. Drag the `dist/` folder onto the page.
4. Done — live in under 30 seconds.

### Any other static host
Upload the contents of `dist/` to your web root.  
Add `netlify.toml` / `vercel.json` / `.htaccess` as appropriate.

---

## Option 2 — Push source code to GitHub, then deploy

### Step 1: Push to GitHub
```bash
cd ready-to-deploy
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Connect to Netlify
1. [app.netlify.com](https://app.netlify.com) → **Add new site → Import from Git**.
2. Select your repo.
3. Build command: `npm run build` | Publish directory: `dist`
4. Click **Deploy**. The `netlify.toml` handles everything automatically.

### Step 2 (alt): Connect to Vercel
```bash
npm install -g vercel
vercel --prod
```
Or import the repo at [vercel.com](https://vercel.com) — auto-detects Vite.

---

## Option 3 — Build from source yourself

```bash
cd ready-to-deploy
npm install
npm run build
# Upload dist/ to your host
```

Local development:
```bash
npm run dev      # http://localhost:5173
npm run preview  # preview the built dist/ at http://localhost:4173
```

---

## Activating the Contact Form (email delivery)

The form works visually out of the box. To make it send real emails to `info@alrazzaqenterprises.com`:

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a form — set destination email to `info@alrazzaqenterprises.com`.
3. Copy your **Form ID** (e.g. `xabcdefg`).
4. Create a `.env` file in the project root:
   ```
   VITE_FORMSPREE_ID=xabcdefg
   ```
5. Rebuild: `npm run build`

On Netlify/Vercel: add `VITE_FORMSPREE_ID` in the platform's Environment Variables settings — no rebuild needed on Netlify, Vercel triggers one automatically.

---

## Environment Variables

| Variable            | Required | Default | Description                        |
|---------------------|----------|---------|------------------------------------|
| `VITE_FORMSPREE_ID` | No       | —       | Formspree form ID for email delivery |

---

## Tech Stack

| Layer      | Library           | Version   |
|------------|-------------------|-----------|
| Framework  | React             | ^19.1.0   |
| Build      | Vite              | ^7.3.2    |
| Styling    | Tailwind CSS v4   | ^4.1.14   |
| Routing    | Wouter            | ^3.3.5    |
| Animation  | Framer Motion     | ^12.23.24 |
| UI         | shadcn/ui + Radix | —         |
| Forms      | React Hook Form + Zod | —     |
| TypeScript | 5.x               | —         |

---

## Folder Structure

```
ready-to-deploy/
├── dist/              ← Pre-built. Upload this to your host.
├── src/
│   ├── assets/        ← Logo, images used in components
│   ├── components/
│   │   ├── layout/    ← Navbar, Footer
│   │   └── ui/        ← shadcn/ui components
│   ├── contexts/      ← Language context (EN / FR / NL)
│   ├── data/          ← Product catalogue
│   ├── hooks/         ← useSEO, use-mobile, use-toast
│   ├── lib/           ← Utilities, translations, catalogue PDF
│   ├── pages/         ← home, about, products, services, contact
│   ├── index.css      ← Tailwind v4 + global styles
│   ├── main.tsx       ← React entry point
│   └── App.tsx        ← Router + providers
├── public/            ← Static files copied as-is to dist/
├── index.html         ← HTML entry point
├── vite.config.ts     ← Vite configuration
├── tsconfig.json      ← TypeScript configuration
├── package.json       ← Dependencies + scripts
├── netlify.toml       ← Netlify build + routing config
├── vercel.json        ← Vercel build + routing config
├── .htaccess          ← Apache / cPanel SPA routing + caching
└── DEPLOY.md          ← This file
```
