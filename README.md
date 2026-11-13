# Web Developer Portfolio

A static portfolio for a freelance web developer, with three complete demo websites.
Built with HTML5, CSS3 and vanilla JavaScript. No build step, no dependencies.

## What is included

```
web-developer-portfolio/
├── index.html                  Main portfolio
├── style.css
├── script.js                   Contact links (WhatsApp, GitHub), mobile menu
├── assets/                     Favicon and project preview images
├── README.md
└── projects/
    ├── barbershop-landing-page/
    ├── personal-trainer-landing-page/
    └── digital-product-landing-page/
```

Each project folder contains its own `index.html`, `style.css`, `script.js` and `assets/`.
Projects do not share files, so you can move, edit or delete one without affecting the others.

All businesses, names, prices, addresses and product details in the demo projects are fictional.

## Run locally

Option 1: open `index.html` in your browser. All paths are relative, so it works directly.

Option 2: serve the folder (closer to how GitHub Pages behaves):

```bash
cd web-developer-portfolio
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Customize

### 1. Main portfolio

- Your name (Pedro Henrique Barros), WhatsApp number and GitHub profile are already configured.
- `script.js`: contact details live in the `CONFIG` object at the top.
  - `whatsappNumber`: `5518996999001` (country code 55, area code 18, number 99699-9001), digits only.
  - `whatsappMessage`: the pre-filled message.
  - `githubProfileUrl`: `https://github.com/PEDROHB-SS`.
- `index.html`: the name also appears in the page title, Open Graph tags, header and footer. Change it there if it ever changes.
- Add real client work, testimonials or experience only when you have them. Nothing in this template claims any.

### 2. Demo projects

Each project has a `CONFIG` object at the top of its `script.js`:

- Barbershop and personal trainer: `whatsappNumber` is currently your own number, so the demo buttons start a chat with you (the footers say so). For a real client, replace it with the business's own number and update the message and footer note.
- Digital product: the signup and pricing buttons open an explanatory dialog because there is no real checkout or waitlist. Look for the integration comment in that project's `script.js` and connect your own provider when you reuse the page for a real client.

To adapt a project for a real client, replace the fictional business name, text, prices, address, hours and the demo footer note.

### 3. Images

The images are original SVG illustrations made for this template, so there are no licensing concerns. They are simple placeholders. For a real client, replace them with professional photography you have the right to use (the client's own photos, or sources such as Unsplash or Pexels, following their licenses). Keep descriptive `alt` text, set `width` and `height`, and compress photos (WebP or AVIF, around 150 KB or less when possible).

## Deploy to GitHub Pages (free)

1. Create a GitHub account and a new public repository, for example `web-developer-portfolio`.
2. Upload the contents of this folder so that `index.html` is at the repository root.

   ```bash
   cd web-developer-portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/PEDROHB-SS/web-developer-portfolio.git
   git push -u origin main
   ```

3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select branch `main` and folder `/ (root)`, then save.
5. After a minute or two the site is live at:

   ```
   https://PEDROHB-SS.github.io/web-developer-portfolio/
   ```

Project URLs:

```
https://PEDROHB-SS.github.io/web-developer-portfolio/projects/barbershop-landing-page/
https://PEDROHB-SS.github.io/web-developer-portfolio/projects/personal-trainer-landing-page/
https://PEDROHB-SS.github.io/web-developer-portfolio/projects/digital-product-landing-page/
```

If you name the repository `PEDROHB-SS.github.io`, the portfolio is served from `https://PEDROHB-SS.github.io/` instead.

All links and assets use relative paths, so the site works from either URL form. Do not change them to paths starting with `/`, which would break on project sites.

### Custom domain (optional)

Add your domain under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions. Enable **Enforce HTTPS** once available.

## Pre-launch checklist

- [ ] Confirm the WhatsApp number and GitHub link in `script.js` are still correct.
- [ ] Test the WhatsApp and GitHub buttons on your phone.
- [ ] Open every page on a phone, a tablet and a desktop screen.
- [ ] Check the pages with keyboard-only navigation (Tab, Enter, Escape).
- [ ] Run Lighthouse in Chrome DevTools on each page.
- [ ] Confirm the demo projects are still clearly labeled as fictional.

## Security notes

These sites are static: no backend, no forms that send data, no third-party scripts, fonts or CDNs, and no secrets. The repository is public, so everything in it, including the WhatsApp number, is public by design.

**Content Security Policy.** Every page has a `<meta http-equiv="Content-Security-Policy">` tag as the first element after `<meta charset>`. It allows only same-origin scripts, styles and images, and forbids `<base>`, form submissions, frames, plugins and network requests from scripts. If you add something external (a font, analytics, an embed, a form service, images from another site), the page will stop loading it until you add that origin to the matching directive in that page's CSP tag.

**Inline snippet hash.** The barbershop, trainer and Tidewell pages each have one tiny inline script in `<head>` that adds the `js` class. The CSP allows it by its SHA-256 hash. If you edit that script, the hash no longer matches and the browser will block it (the page still works, but scroll-reveal content stays visible instead of animating). Recompute the hash with:

```bash
printf '%s' 'document.documentElement.classList.add("js");' | openssl dgst -sha256 -binary | openssl base64
```

Use the exact text between the `<script>` tags, and put `'sha256-<result>'` in `script-src`.

**Inline styles.** The CSP forbids `style="..."` attributes and `<style>` blocks. Put styles in the page's `style.css`.

**What GitHub Pages cannot do.** A `<meta>` CSP is not equivalent to the HTTP header: it cannot set `frame-ancestors` (clickjacking protection), `report-uri`/`report-to`, or `sandbox`, and it does not cover files opened directly (for example an SVG opened in its own tab). GitHub Pages does not let you set custom response headers, so `X-Frame-Options`, `Permissions-Policy`, `Cross-Origin-*` and `Strict-Transport-Security` settings cannot be controlled from this repository. These pages have no logins, forms or sensitive actions, so the practical impact is low. If you need those headers, put the site behind a CDN or host that supports them (for example Cloudflare in front of a custom domain, Netlify, or Vercel).

**Repository hygiene.** Enable two-factor authentication on your GitHub account, turn on **Enforce HTTPS** in Settings → Pages, and keep secret scanning enabled. Never commit tokens, `.env` files or private keys. If you use a custom domain, remove DNS records that point to GitHub Pages when you stop using it.

## License

Add your preferred license, or keep the code private to your own use.
