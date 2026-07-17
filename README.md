# Akhil Paladugu — SEO & Performance Marketing Portfolio

Static site (plain HTML + Babel/React via CDN). No build step required.

## Deploy to Vercel

1. Push this folder's contents to the root of `AkhilPaladugu27/myportfolio`:
   ```
   git init
   git remote add origin https://github.com/AkhilPaladugu27/myportfolio.git
   git add .
   git commit -m "Deploy portfolio"
   git branch -M main
   git push -u origin main --force
   ```
2. Go to vercel.com → New Project → Import `AkhilPaladugu27/myportfolio`.
3. Framework preset: **Other** (static). Leave build command empty, output directory `.`.
4. Deploy. `index.html` is the entry point.

## Structure
- `index.html` — main page (same as `portfolio.html`)
- `src/` — React components (loaded via Babel in-browser, no bundler needed)
- `assets/` — images, screenshots, favicon, logo
- `fonts/` — local webfont
- `colors_and_type.css` — design tokens
