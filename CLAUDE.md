# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml`). All commands assume Angular CLI v21 via `npx ng …` or the `ng` script.

- `pnpm install` — install dependencies
- `pnpm start` (or `ng serve`) — dev server at http://localhost:4200/
- `pnpm build` — production build (`ng build -c production`); output in `dist/browser/`
- `npx ng build` — non-prod build, useful for fast typecheck of the full app
- `pnpm test` — Karma unit tests via `tsconfig.spec.json` (no `*.spec.ts` exist yet — runner will be empty)
- `pnpm lint` — Angular lint (typescript-eslint configured in `package.json` devDeps; legacy `tslint.json` is unused)
- `pnpm e2e` — Protractor e2e (legacy; the `e2e/` config predates the Angular 21 upgrade and may not run as-is)

To verify just types without running the full Angular compiler: `npx tsc --noEmit -p tsconfig.app.json`.

## Architecture

Single Angular 21 application (project name `wmh`) for the Worplesdon Memorial Hall website. Deployed as a static site to **Azure Static Web Apps** via the workflows in `.github/workflows/azure-static-web-apps-*.yml` (deploy path is `/dist/browser`). `src/staticwebapp.config.json` sets the SPA navigation fallback. `src/ghspa.js` and `src/404.html` are a GitHub Pages SPA shim — kept as build assets for legacy hosting parity, separate from the Azure deploy.

The app is **NgModule-based, not standalone**. `src/main.ts` bootstraps `AppModule` (`src/app/app.module.ts`) via `platformBrowserDynamic` with `provideZoneChangeDetection()`. All page components are declared in `AppModule` and registered with the router in `src/app/app-routing.module.ts`. To add a page: create the component, declare it in `AppModule`, then add a route.

Pages are flat in `src/app/` (`home`, `wedding`, `sports`, `history`, `contact`, `bookings`, `whatson`, `flyer`). `RoomsComponent` is a parent route with five children under `src/app/rooms/` (`walker`, `halsey`, `cater`, `tovey`, `kelly`) — child room files use single-name modules (e.g. `rooms/tovey.ts` exports `ToveyRoomComponent`), not the `*.component.ts` convention used elsewhere. Carousels and the collapsible nav use `@ng-bootstrap/ng-bootstrap` v20 (`NgbCarouselModule`, `NgbCollapseModule`); the contact page embeds Google Maps via `@angular/google-maps`. `ContactComponent` and `FlyerComponent` use `HttpClient` (provided in `AppModule` with `withInterceptorsFromDi()` and `withJsonpSupport()`).

### TypeScript config

The repo uses solution-style tsconfig: `tsconfig.json` is the editor/IDE entry that references `tsconfig.app.json` and `tsconfig.spec.json`, both of which extend `tsconfig.base.json`. **Important:** `moduleResolution: "bundler"` and `module: "preserve"` are required in the base config so package.json `exports` (used by Angular 21 subpaths like `@angular/common/http` and ng-bootstrap v20 subpath barrels) resolve. Don't switch back to `node`.
