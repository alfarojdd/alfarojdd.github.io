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

Search metadata and WebSite/WebPage/Person structured data live in `frontend/public/index.html`.
Keep these in sync with the name, bio and profile links in `frontend/src/content/site/personalData.js`.
The site name is `alfarojdd`, and the page title is `Juan de Dios Alfaro López | Personal Website`.
The square PNG logo at `frontend/public/images/profile/icon.png` is the favicon.
Keep its URL stable so search engines can refresh it reliably.
The portrait at `frontend/public/images/profile/pfp.png` is the preferred search preview
and social sharing image, declared through `primaryImageOfPage` and `og:image`.
Google selects search thumbnails automatically; this metadata does not guarantee a photo will appear.
`frontend/public/robots.txt` and `frontend/public/sitemap.xml` are copied into the production build.

After deploying, inspect `https://alfarojdd.github.io/` in Google Search Console and request
indexing. Submit `https://alfarojdd.github.io/sitemap.xml` under Sitemaps if needed.
Google chooses the final site name, title, snippet and favicon; updates can take days or weeks.
