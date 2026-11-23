# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Frontend React 19 application for https://coderprabhu.com. Built with Vite, this app displays social links and visitor statistics fetched from a backend API.

Related repositories:
- API: https://github.com/CoderPraBhu/coderprabhu-api
- K8S: https://github.com/CoderPraBhu/coderprabhu-k8s

Default branch of this repo: `master` (the API repo uses `main`).

## Commands

```bash
npm start          # Run dev server (port 3000)
npm run dev        # Alias for npm start
npm test           # Run tests once with Vitest
npm run test:watch # Run tests in watch mode
npm run build      # Production build
npm run preview    # Preview production build
```

## Architecture

**Component Structure**: Components are organized in feature folders under `src/`, each containing a `components/` subdirectory:
- `ExternalLink/` - Social media link components (GitHub, Twitter, LinkedIn)
- `Counter/` - Displays total visit count from API
- `Visit/` - Displays visitor device info from API
- `HelloMessage/` - Display component
- `ReactLogo/` - Animated logo component

**API Configuration**: `src/environments/app-config.js` exports `API_ROOT` which determines the backend URL based on hostname:
- Production (`coderprabhu.com` or `www.coderprabhu.com`) → `https://api.coderprabhu.com`
- QA (hostnames starting with `qa`) → `https://api.{hostname}`
- Local development → `VITE_BACKEND_HOST` env var or `http://localhost:8080`

**API Calls**: Components use native fetch to call the backend. Key endpoints:
- `/count` - Returns total visit count
- `/visit` - Returns visitor device information
- `/unique` - Returns unique visitor count
- `/hello` - Returns greeting message

Each stat component renders a `.stat-tile` with a `.stat-tile-value` and a `.stat-tile-label`
("Total Visits", "Unique Visitors", "API Message", "Your Device"). Before the API answers, the values are
placeholders (`0`, `0`, `Hi!`, `Your browser`). A failed fetch only logs `console.error` and keeps the placeholder.

## Local End-to-End Testing

The API only needs a local MongoDB (`mongodb://localhost:27017`).

1. In coderprabhu-api: `./gradlew bootRun` (API on :8080).
2. Here: `npm start` (UI on :3000; with no `VITE_BACKEND_HOST`, the UI calls `http://localhost:8080`).
3. Check both are up: `curl http://localhost:8080/hello` and `curl http://localhost:3000/`.
4. Drive the page with Playwright (headless Chromium):
   - wait until every tile's value differs from its placeholder,
   - expect "API Message" = `Moto: Build. Ship. Repeat.` and "Your Device" to mention Chrome,
   - expect 200s for `/hello`, `/visit`, `/count`, `/unique`, no console errors and no failed requests,
   - take a full-page screenshot and look at it.
5. Verify persistence through the API, not the database: `curl /count` before and after the page load
   should go up by one. No `mongosh` checks are needed.
6. Stop both servers (and `./gradlew --stop` in the API repo).

Notes:
- "Total Visits" usually shows the count from just *before* the page's own visit, because `/count` and `/visit`
  are fetched in parallel. That is expected, not a bug.
- Playwright is not a dependency of this repo. If you use `playwright-core` with an already-installed Chromium,
  its version must match the installed browser revision.

## Conventions

- Work on a branch and open a PR to `master`.
- No passwords, tokens or other secrets in code, config or Markdown.

## Deployment

Multi-stage Docker build using node:26-alpine for build and nginx:alpine for serving. The build runs tests before creating the production bundle. Container exposes port 8080.

Build and push:
```bash
docker build -t gcr.io/all-projects-292200/coderprabhu-ui:v{VERSION} .
docker push gcr.io/all-projects-292200/coderprabhu-ui:v{VERSION}
```

Run locally:
```bash
docker run --rm -p 8080:8080 gcr.io/all-projects-292200/coderprabhu-ui:v{VERSION}
```
