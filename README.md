# Portfolio

A custom-coded product design portfolio built with [Astro](https://astro.build).
Content-first: your case studies are Markdown/MDX files, so adding a project means adding
a file — no components to touch.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:4321).

## Fill it in — the short version

Everything you edit lives in `src/`. In rough priority order:

1. **`src/config.ts`** — your name, tagline, email, location, résumé link, social links.
   These flow into the header, footer, home, about, and contact pages.
2. **`src/content/work/*.mdx`** — your case studies (see below).
3. **`src/pages/about.astro`** — your bio, skills list, and experience.
4. **`src/styles/global.css`** — colors, fonts, spacing. All the design tokens are at the
   top of the file under `:root`.

## Adding a case study

1. Copy any file in `src/content/work/` and rename it. The filename becomes the URL:
   `homerun.mdx` → `/work/homerun`.
2. Edit the frontmatter (the block between `---`):
   - `title`, `summary`, `company`, `role`, `timeline`, `tags`
   - `featured: true` shows it on the home page
   - `order` controls sort position (lower = first)
   - `draft: true` hides it from the live site while you work
   - `cover: "/work/your-image.jpg"` — optional; without it you get a gradient placeholder
3. Write the body in Markdown. The included files show the recommended section structure:
   **Overview → Problem → Process → Solution → Impact → Reflection.**

## Images

Put image files in `public/work/` and reference them as `/work/filename.jpg` — both in a
case study's `cover` frontmatter and inline in the body with `![alt](/work/filename.jpg)`.

## Before you go live

- [ ] Set your real domain in `astro.config.mjs` (the `SITE` constant) and `public/robots.txt`.
- [ ] Replace the `Y` monogram in `public/favicon.svg`.
- [ ] Add an `og-image.png` (1200×630) to `public/` for nice link previews.
- [ ] Add a `resume.pdf` to `public/` (or update `resumeUrl` in config).
- [ ] Replace all three placeholder case studies with real work.

## Deploy

`npm run build` outputs a static site to `dist/`. Easiest hosts:

- **Vercel** or **Netlify** — connect the git repo, they auto-detect Astro, deploy on push.
- Add your custom domain in their dashboard.

## Structure

```
src/
  config.ts              # your details (edit first)
  content.config.ts      # case study schema
  content/work/*.mdx     # your case studies
  layouts/BaseLayout.astro
  components/            # Header, Footer, WorkCard
  pages/
    index.astro          # home
    about.astro
    contact.astro
    work/index.astro     # case study list
    work/[...slug].astro # case study template
  styles/global.css      # design tokens + base styles
public/                  # images, favicon, resume.pdf, og-image.png
```
