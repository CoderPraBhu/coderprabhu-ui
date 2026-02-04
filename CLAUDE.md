# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Frontend React 19 application for https://coderprabhu.com. Built with Vite, this app displays social links and visitor statistics fetched from a backend API.

Related repositories:
- API: https://github.com/CoderPraBhu/coderprabhu-api
- K8S: https://github.com/CoderPraBhu/coderprabhu-k8s

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

## Deployment

Multi-stage Docker build using node:25-alpine for build and nginx:alpine for serving. The build runs tests before creating the production bundle. Container exposes port 8080.

Build and push:
```bash
docker build -t gcr.io/all-projects-292200/coderprabhu-ui:v{VERSION} .
docker push gcr.io/all-projects-292200/coderprabhu-ui:v{VERSION}
```

Run locally:
```bash
docker run --rm -p 8080:8080 gcr.io/all-projects-292200/coderprabhu-ui:v{VERSION}
```
