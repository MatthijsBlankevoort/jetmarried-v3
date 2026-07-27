# Jetmarried

Website for Jetmarried (Mariëtte Boot, trouwambtenaar op Texel), built with [Astro](https://astro.build) and [Tina CMS](https://tina.io).

## Project structure

```text
/
├── content/           # CMS content (edited via Tina): settings, home, blog posts
├── public/             # Static assets
├── src/
│   ├── components/     # Section components (Header, Hero, Ceremonies, ...)
│   ├── content.config.ts  # Astro content-collection schemas, mirroring tina/config.ts
│   ├── layouts/
│   ├── pages/           # Routes: / and /blog/*
│   └── scripts/         # GSAP/ScrollTrigger site interactions
├── tina/config.ts      # Tina CMS schema
└── package.json
```

## Commands

| Command        | Action                                                              |
| :------------- | :------------------------------------------------------------------- |
| `pnpm install`  | Install dependencies                                                 |
| `pnpm dev`      | Start Tina + the Astro dev server at `localhost:4321` (admin at `/admin`) |
| `pnpm build`    | Build Tina's admin app, then build the production site to `./dist/`  |
| `pnpm preview`  | Preview the production build locally                                 |
| `pnpm astro ...`| Run Astro CLI commands (`astro add`, `astro check`, ...)             |

## Content & Tina CMS

All editable copy lives under `content/` as JSON (`settings`, `home`) and MDX (`posts`), and is read by Astro through content collections defined in `src/content.config.ts`. The schema Tina uses to generate editing forms for those same files is defined in `tina/config.ts` — the two must be kept in sync when a field is added or renamed.

`pnpm dev` runs Tina's local GraphQL server alongside Astro and works out of the box with **no Tina Cloud account required** — edits made at `http://localhost:4321/admin` are saved straight to the files on disk.

`pnpm build` (which builds Tina's hosted admin bundle before the site) does require `TINA_CLIENT_ID`/`TINA_TOKEN` to be set — see below. Until a Tina Cloud project is connected, use `pnpm astro build` to build just the site without the admin bundle.

To connect a **Tina Cloud** project (needed for hosted `/admin` access in production, e.g. so Mariëtte can edit content without running the project locally):

1. Create a project at [app.tina.io](https://app.tina.io) connected to this repo.
2. Add a `.env` file (already gitignored) with:
   ```
   TINA_CLIENT_ID=your-client-id
   TINA_TOKEN=your-token
   ```
3. Redeploy — `tina/config.ts` reads these automatically.

## Learn more

[Astro documentation](https://docs.astro.build) · [Tina CMS documentation](https://tina.io/docs)
