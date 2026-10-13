# ☕ Tea Reserve — Pre-Launch Checklist

Complete every item below before going live.

## 🔴 Critical (Must do before deploy)

- [ ] **FSSAI Number** — Add your 14-digit FSSAI licence number to `src/config.js` → `site.fssai`. The production build will **fail** without it.
- [ ] **Batch No. & FSSAI on pack** — Ensure your physical packs display the FSSAI licence number and current batch number before selling.
- [ ] **Real domain** — Update `site.siteUrl` in `src/config.js` and `site` in `astro.config.mjs` with your actual domain (e.g., `https://teareserve.in`).
- [ ] **WhatsApp links tested on phone** — Open every "Order on WhatsApp" button on a real phone to confirm the pre-filled messages are correct.
- [ ] **Privacy & Shipping pages filled** — Edit `src/pages/privacy.astro` and `src/pages/shipping-returns.astro` with your real policy text.

## 🟡 Important (Do soon after launch)

- [ ] **Real product/lifestyle photos** — Replace or supplement the pack image with better photography if available. Update `src/data/products.json` → `image`.
- [ ] **Google Maps embed URL** — Update `site.mapEmbedUrl` in `src/config.js` with the correct embed URL for your business location.
- [ ] **Domain connected with HTTPS** — Point your domain's DNS to Cloudflare Pages / Netlify. Both provide free SSL automatically.
- [ ] **Google Search Console** — Submit your sitemap at `https://yourdomain.com/sitemap-index.xml` to Google Search Console.
- [ ] **Google Business Profile** — Create or claim your Google Business Profile at business.google.com.

## 🟢 Nice to Have

- [ ] **Real customer reviews** — If you have genuine customer testimonials, add a reviews section to the home page. Never fabricate reviews.
- [ ] **Business hours** — Add your actual business hours to `src/pages/contact.astro` (search for the `isDev` placeholder section).
- [ ] **OG Image** — Create a proper 1200×630px Open Graph image and update `site.ogImage` in `src/config.js`.
- [ ] **Social media links** — Add Instagram/Facebook links to the footer if you have active accounts.
- [ ] **Analytics** — Add Google Analytics (GA4) or Plausible for privacy-friendly traffic tracking.
- [ ] **Test at 360px** — Verify no horizontal scroll on a 360px wide viewport.
- [ ] **Lighthouse audit** — Run Lighthouse on the deployed site and fix any issues.

---

*Last updated: October 2026*
