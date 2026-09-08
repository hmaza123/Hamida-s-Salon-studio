# Hamida's Salon & Studio — Website

Multi-page marketing + booking website for **Hamida's Salon & Studio** (Clifton, Karachi).

## Overview (how this was built)

1. **Static multi-page site** (no React build required) so it deploys cleanly on **Netlify free**.
2. **15 public pages**: Home, About, Services hub, Hair, Makeup, Nails, Skin & Body, Bridal, Gallery, Packages, Book, Contact, Location, FAQ, Privacy.
3. **Shared chrome** (`js/main.js`) injects header, footer, WhatsApp float, and active nav on every page.
4. **Brand system**: official Hamida’s lockup in header, footer and home hero; black/white contrast; body in `Outfit`, display titles in `Cormorant Garamond`.
5. **Conversion on every path**: Book / Contact / Bridal forms + WhatsApp buttons + floating WhatsApp.
6. **Email intake**: Netlify Forms → notify `hamidasalonstudio@gmail.com` (configure in Netlify after deploy).
7. **WhatsApp**: `0345 2433381` (`wa.me/923452433381`) pre-filled messages from forms.

## Local preview

```bash
python3 -m http.server 5173
```

Open http://localhost:5173

## Deploy on Netlify (free)

1. Push this folder to GitHub (or drag-drop the folder in Netlify).
2. Netlify → **Add new site** → import repo / deploy manually.
3. Publish directory: site root (`.`).
4. Site settings → **Forms** → verify `booking`, `contact`, `bridal` appear.
5. Forms → **Form notifications** → email **hamidasalonstudio@gmail.com**.
6. Optional: set custom domain later.

## Logo

Official lockup lives in `assets/`:
- `logo-official.jpg` — source
- `logo.png` — white on transparent (hero)
- `logo-header.png` / `logo-header-on-light.png` — header & footer
- `favicon.png` — browser icon

## Business details used

| Item | Value |
|---|---|
| Phone | 0345 2433381 |
| WhatsApp | 0345 2433381 |
| Email | hamidasalonstudio@gmail.com |
| Address | House F67/A, Clifton Block 8, opp. Bacha Party |
| Instagram | @hamidas_salon_studio |
| Facebook | /hamidassalonstudio |
| TikTok | @hamidas_salon_studio |

## GitHub

This environment did not have GitHub CLI authentication. To publish:

```bash
cd hamidas-salon
git remote add origin https://github.com/<your-user>/hamidas-salon-studio.git
git branch -M main
git push -u origin main
```

Then connect that repo in Netlify for continuous deploys / easy edits.
