# Keyword Social Media Website

Static conversion-focused website for GitHub → Cloudflare Pages deployment.

## Folder structure

- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/images/keyword-logo.svg`
- `assets/images/print-and-wrap-hero.png`

## Site sections

The single-page application includes Home, Social Media, Paid Marketing, Web Development, Business Solutions, and Print & Branding views. Business Solutions groups the white-label cloud, hosting, cybersecurity, development, hardware, education, search and email catalogue into customer-friendly categories.

## Before publishing

1. Open `index.html`.
2. Find this line:

```html
<form class="quote-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

3. Replace `https://formspree.io/f/YOUR_FORM_ID` with the real Formspree endpoint.
4. Commit and push to GitHub.
5. In Cloudflare Pages, connect the repo and deploy.

## Cloudflare Pages settings

For this static site:

- Framework preset: None
- Build command: leave blank
- Build output directory: `/` or leave blank depending on Cloudflare prompt
- Root directory: `/`
