# IDA project analysis

React 19 / TypeScript single-page International Defence Analysis website, built with Vite 8 and Tailwind CSS 4. Motion provides animations, Lucide provides icons, and hls.js handles the external hero video stream.

## Structure

- `src/App.tsx`: homepage composition, category filters, search and modal state.
- `src/components/`: navigation, hero, news, magazines, interviews, services, advertising, contact, partners, newsletter, and shared UI.
- `src/data/`: bundled news, magazines, interviews, services, partners, and navigation.
- `src/hooks/`: HLS video lifecycle and reduced-motion preference.
- `public/assets/aistudio/`: local images.
- `src/index.css`, `index.html`: styles, fonts, and document metadata.

## Functional scope

There is no backend, database, authentication, or content management service. News and search use bundled TypeScript data. Contact and newsletter submissions use timers and in-memory state: they do not send email or persist submissions. Magazine download and interactive-edition buttons show alerts rather than downloading files or opening a real PDF viewer. Social links point to platform homepages.

Some images, fonts, and the Mux HLS stream require internet access. The Gemini package and environment template are present, but the current source does not call Gemini, so no API key is needed.

## Setup changes

Updated esbuild from `^0.25.0` to `^0.28.0` to satisfy Vite 8's peer dependency. Added an npm lockfile and a Windows startup script. Workspace-local npm is in ignored `.tools/` because this environment has Node but no npm command on PATH.

## Run and verify

In PowerShell at `E:\IDA`, run `./start-local.ps1`, then open `http://127.0.0.1:3000`. Keep the terminal open; Ctrl+C stops the server.

With a standard Node/npm installation, use `npm install`, `npm run lint`, `npm run build`, and `npm run dev -- --host 127.0.0.1`. In this environment invoke npm as `node .tools/package/bin/npm-cli.js`.

## Verification results

- TypeScript: tsc --noEmit passed.
- Production: Vite build passed (1693 modules).
- Browser: homepage rendered at http://127.0.0.1:3000/; opened and closed the SAHA EXPO article reader successfully.
- Server: running as a hidden host process, bound to 127.0.0.1:3000.
- Vite reports a future compatibility warning for __dirname in vite.config.ts; current build works.
- Some remote images displayed the app's fallback in the browser; external asset availability is not guaranteed.


## News content update — 4 November 2026

Latest News now uses 25 sourced articles from defenceida.com, with five per category, original titles and dates, paraphrased briefs, and locally stored featured images. Source links are shown in the article reader. This is an imported snapshot, not a live feed. See NEWS_SOURCES.md for attribution.

