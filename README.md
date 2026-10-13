# ☕ Tea Reserve — Website

A production-ready static website for **Tea Reserve**, built with **Astro** + **Tailwind CSS v4**. Deployable on Cloudflare Pages or Netlify.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ ([download](https://nodejs.org))
- npm (comes with Node)

### Run locally

```bash
# Install dependencies
npm install

# Start development server (live reload)
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

---

## 📝 How to Edit Content

### Update contact details, phone, email, address
Edit **`src/config.js`** — all contact info, FSSAI number, WhatsApp number, and site URL are here.

```js
// src/config.js
export const site = {
  phone1: "7770094574",      // ← change here
  email: "teareservemumbai@gmail.com",   // ← change here
  fssai: "",                 // ← add your 14-digit FSSAI number here
  // ...
};
```

### Update product info (name, price, description, features)
Edit **`src/data/products.json`** — all product data lives here.

```json
{
  "name": "Tea Reserve CTC Tea",
  "price": 420,
  "description": "...",
  "features": ["..."],
  "whatsappMessage": "..."  // ← Pre-filled WhatsApp message for this product
}
```

### Add a new product
1. Add a new object to `src/data/products.json` (copy the existing entry and edit)
2. Add the product image to `public/assets/`
3. That's it — a new product page is auto-generated at `/products/[slug]`

### Replace images
Copy your images to **`public/assets/`**:
- `logo.jpeg` — brand logo
- `pack-front.png` — main product pack image (front)
- Update `image` field in `src/data/products.json` if you rename the file

---

## 🏗️ Build for Production

```bash
# Build the static site
npm run build

# Preview the production build locally
npm run preview
```

> ⚠️ **FSSAI Check**: The production build will **fail** if `site.fssai` in `src/config.js` is not a valid 14-digit number. Add it before running `npm run build`.

The built files will be in the **`dist/`** folder.

---

## 🌐 Deployment

### Option A — Cloudflare Pages (recommended)

1. Push this folder to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com) → Create a project
3. Connect your GitHub repo
4. Set build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Deploy!

### Option B — Netlify

1. Push to GitHub
2. Go to [Netlify](https://app.netlify.com) → Add new site → Import from Git
3. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy!

### Connect a Custom Domain

**Cloudflare Pages:**
1. In Cloudflare Pages project → Settings → Custom domains → Add domain
2. Follow the DNS instructions (usually add a CNAME pointing to your Pages URL)

**Netlify:**
1. Site settings → Domain management → Add custom domain
2. Follow Netlify's DNS instructions

Both provide free HTTPS/SSL automatically. ✅

---

## 📁 Folder Structure

```
tea-reserve/
├─ public/
│  ├─ assets/          ← images: logo.jpeg, pack-front.png
│  └─ robots.txt
├─ src/
│  ├─ config.js        ← ★ Edit this: contact info, FSSAI, site URL
│  ├─ data/
│  │  └─ products.json ← ★ Edit this: product info, price, features
│  ├─ components/      ← reusable UI components
│  ├─ layouts/
│  │  └─ BaseLayout.astro  ← HTML head, header, footer wrapper
│  ├─ pages/           ← one file = one page
│  │  ├─ index.astro        → /
│  │  ├─ products/
│  │  │  ├─ index.astro     → /products
│  │  │  └─ [slug].astro    → /products/ctc-tea-1kg (auto-generated)
│  │  ├─ about.astro        → /about
│  │  ├─ bulk.astro         → /bulk
│  │  ├─ contact.astro      → /contact
│  │  ├─ privacy.astro      → /privacy
│  │  ├─ shipping-returns.astro → /shipping-returns
│  │  └─ 404.astro          → 404 page
│  ├─ scripts/         ← vanilla JS (menu, reveal, faq, whatsapp)
│  └─ styles/
│     └─ global.css    ← design tokens, animations
├─ astro.config.mjs    ← Astro config (FSSAI guard, sitemap)
├─ TODO.md             ← pre-launch checklist
└─ README.md           ← this file
```

---

## ⚙️ Tech Stack

| Tool | Purpose |
|------|---------|
| [Astro](https://astro.build) | Static site generator |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Auto sitemap |
| Vanilla JS | Menu, FAQ, scroll reveal, WhatsApp builder |
| Google Fonts | Playfair Display + Inter |

---

## 🔗 WhatsApp Links

All order links use the format:
```
https://wa.me/917770094574?text=URL-encoded-message
```

To change the WhatsApp number, update `site.whatsappNumber` in `src/config.js`.

---

## 🧹 Pre-Launch Checklist

See **`TODO.md`** for the complete checklist.

---

*Built with ❤️ for Tea Reserve, Mumbai.*
