# Stars and the Underground

The official Stars and the Underground website, built with Hugo.

## Local development

Hugo Extended is required.

```sh
npm run dev
```

Open <http://localhost:1313>. Hugo watches the source files and reloads the
page when they change.

## Production build

```sh
npm run build
```

The generated site is written to `dist/`.

## Project structure

- `config.toml` — Hugo configuration and asset mounts
- `content/` — individual About, Music, Press, Video, Merch, and Shows pages
- `layouts/` — shared page shell, navigation, footer, and home page
- `public/index.html` — source for the existing section content
- `public/styles.css` — site styles
- `public/script.js` — site behaviour
- `public/images/` — images and press kit
- `render.yaml` — Render deployment configuration

Each content page uses the `site-section` shortcode to render its corresponding
section from the original page. This preserves the existing content while
providing a separate URL for every main section.
