# Repository Guidelines

## Project Structure & Module Organization
- `app/` hosts the Next.js App Router routes and UI. Each route uses `page.tsx` and optional `layout.tsx`.
- `app/components/` contains shared React components.
- `app/blog/posts/` holds MDX content (kebab-case filenames).
- `public/` stores static assets and static SEO files (e.g., `public/profile.jpg`, `public/robots.txt`, `public/sitemap.xml`).
- Root configs include `next.config.js`, `tsconfig.json`, `postcss.config.js`, and `next-env.d.ts`.

## Build, Test, and Development Commands
- `pnpm dev`: start the local Next.js dev server.
- `pnpm build`: create a static export in `out/`.

## Coding Style & Naming Conventions
- TypeScript + React with the Next.js App Router.
- Use 2-space indentation and double quotes to match existing `.tsx` style.
- Route files use `page.tsx` and `layout.tsx`; MDX content uses kebab-case (e.g., `app/blog/posts/spaces-vs-tabs.mdx`).
- Styling is Tailwind v4 with global rules in `app/global.css`.

## Testing Guidelines
- No automated test framework is configured yet.
- If you add tests, keep them close to the feature (e.g., `app/components/__tests__/...`) and add a matching `pnpm test` script.

## Commit & Pull Request Guidelines
- Commit history uses short, imperative, lowercase messages (e.g., `add abstracts to publications`).
- PRs should include a concise description, affected routes/pages, and screenshots for visual changes.

## Configuration Tips
- Content updates typically happen in the MDX files under `app/`.
- For SEO changes, update `public/robots.txt` and `public/sitemap.xml` as needed.
