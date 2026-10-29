# Haze N Blaze website — npm / Vite / Vercel

This is the original uploaded single-page website, converted into a deployable npm/Vite project.
The original layout, interactive catalog, English/Spanish language switch, age gate, maps, and contact links were retained.
The embedded images are now separate files in `public/assets/images/`; styling and JavaScript live in `src/`.

## Local preview

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

Production output is in `dist/`.

## Vercel deployment

1. Extract the ZIP and push the **contents of this folder** to a GitHub repository.
2. In Vercel, create a project from the repository.
3. Framework Preset: **Vite** (or detected automatically).
4. Install: `npm install`; Build: `npm run build`; Output: `dist`.
5. Deploy. The included `vercel.json` provides the same build settings.

The site uses one HTML page with internal section links. There are no SPA route rewrites to configure.

## Files

- `index.html` — SEO tags and site markup
- `src/styles.css` — original CSS
- `src/main.js` — original JS, including age verification and language switch
- `public/assets/images` — extracted original uploaded imagery
- `vite.config.js`, `vercel.json`, `package.json` — tooling settings

> Note: This package changes the build setup only. Check store details, product availability, age-restriction requirements, accessibility, and legal notices before publishing. The website is informational and contains no online checkout.
