# Juan de Dios Alfaro Portfolio

Static portfolio built with React, CRACO and Tailwind CSS.

## Structure

- `frontend/`: portfolio site
- `frontend/src/content/`: editable content split by section
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment

## Local development

```bash
cd frontend
npm install
npm start
```

## Production build

```bash
cd frontend
npm run build
```

## Search appearance

Search metadata and WebSite/Person structured data live in `frontend/public/index.html`.
Keep these in sync with the name, bio and profile links in `frontend/src/content/site/personalData.js`.
The existing square PNG logo at `frontend/public/images/profile/icon.png` is also the favicon
and social sharing image. Keep its URL stable so search engines can refresh it reliably.
`frontend/public/robots.txt` and `frontend/public/sitemap.xml` are copied into the production build.

After deploying, inspect `https://alfarojdd.github.io/` in Google Search Console and request
indexing. Submit `https://alfarojdd.github.io/sitemap.xml` under Sitemaps if needed.
Google chooses the final site name, title, snippet and favicon; updates can take days or weeks.
