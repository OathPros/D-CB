# Daniel & Colleen Wedding Website

An elegant autumn Strathmere wedding site built with Astro, TypeScript, JSON content files, and GitHub Pages deployment.

## Local development

```bash
npm install
npm run dev
```

## Checks and production build

```bash
npm run check
npm run build
```

## Editing content

Most guest-facing copy lives in simple JSON files under `src/content/`:

- `site.json` — couple, venue, date, location, contact, slideshow image list
- `schedule.json` — wedding day timeline
- `faq.json` — guest FAQ entries
- `travel.json` — travel and hotel information
- `party.json` — wedding party placeholder/bios
- `gallery.json` — gallery images and captions

Photos can be added under `public/images/`. The homepage expects 12 slideshow images in `public/images/slideshow/` named `01.jpg` through `12.jpg`.

## Privacy note

The site includes a `noindex` robots meta tag and a restrictive `public/robots.txt`. This discourages crawling, but GitHub Pages is still public hosting and does not provide real access control.

## GitHub Pages deployment

Deployment is configured in `.github/workflows/deploy.yml`. In GitHub:

1. Open repository settings.
2. Go to **Pages**.
3. Set the source to **GitHub Actions**.
4. Push to `main` or run the workflow manually.

For a custom `www` subdomain, add the custom domain in GitHub Pages settings and create a CNAME record pointing at the repository's GitHub Pages default domain.
