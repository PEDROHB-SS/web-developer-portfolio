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

## License

Add your preferred license, or keep the code private to your own use.
