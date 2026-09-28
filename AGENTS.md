<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

- `npm run dev` — starts dev server at http://localhost:3000
- `npm run build` — produces production build (`.next/`)
- `npm run start` — serves production build
- `npm run lint` — runs ESLint with flat config (`eslint.config.mjs`)

## Framework notes

- **App router**: `app/` directory uses Next.js app router (not pages router). `app/page.tsx` is the home, `app/layout.tsx` is the root layout.
- **`next/font`**: `layout.tsx` defines `geistSans` / `geistMono` via `Geist({ variable: "--font-geist-sans" })`. Do not swap fonts without updating both the font definition and `className` references.
- **Tailwind CSS v4**: Config in `postcss.config.mjs` using `@tailwindcss/postcss`. Class names in components use Tailwind v4 syntax (e.g., `bg-zinc-50`, `dark:bg-black`). Do not assume v3 patterns.
- **ESLint flat config**: `eslint.config.mjs` uses `defineConfig` from `eslint/config`, importing `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`. Ignored paths: `.next/`, `out/`, `build/`, `next-env.d.ts`.
- **TypeScript**: `tsconfig.json` has `strict: true`, `noEmit: true`, target `ES2017`. Path aliases `@/*` map to root files.
- **No test script**: `package.json` has no `test` script. No test framework configured.
- **Single package**: Monorepo root is the app itself; no package-specific build/lint commands beyond the root scripts.