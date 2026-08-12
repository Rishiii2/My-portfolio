# Rishikant — Portfolio

Personal portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.
Mission-control / HUD visual language, with a live drone-swarm simulation behind the hero.

## Design

- **Palette:** near-black void (`#05070A`), a single cyan accent (`#22D3EE`), amber (`#FFB020`)
  reserved for tracked targets and highlights, green (`#3DDC97`) for live-status dots. One accent
  colour, used sparingly — everything else is greyscale.
- **Typography:** Space Grotesk (display) + JetBrains Mono (all labels, data readouts, chips).
- **Signature element:** a boids drone-swarm simulation on a canvas behind the hero —
  separation / alignment / cohesion, link lines between nearby agents, amber tracking reticles on a
  subset of "targets", and cursor attraction. The hero HUD shows live agent, link, and FPS counters
  read straight from the simulation. It is a working miniature of the swarm work in the Research and
  Projects sections rather than a decorative particle field.
- **Ambient chrome:** film grain, scanlines, vignette, scroll-progress bar, and a crosshair cursor
  reticle that expands over interactive elements.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS for layout utilities; the visual system itself lives in `globals.css` as CSS custom
  properties, so tokens are editable in one place
- Plain Canvas 2D + `requestAnimationFrame` for the swarm — no animation library
- `IntersectionObserver` for scroll reveals, scroll-spy nav, counters, and telemetry bars

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    layout.tsx        — root layout, metadata, viewport
    page.tsx          — section orchestration
    globals.css       — design tokens + the entire visual system
  components/
    Chrome.tsx        — grain, scanlines, vignette, scroll progress, cursor reticle  [client]
    Nav.tsx           — sticky nav with scroll-spy + mobile menu                     [client]
    Hero.tsx          — HUD hero, typewriter, animated stat counters                 [client]
    Swarm.tsx         — boids drone-swarm canvas simulation                          [client]
    Research.tsx      — 4 papers + F1 lap-time telemetry bars                        [client]
    Experience.tsx    — timeline of roles
    Projects.tsx      — filterable project grid                                      [client]
    Hackathons.tsx    — competition list
    Stack.tsx         — skills, credentials, education
    Writing.tsx       — Hashnode posts
    Contact.tsx       — closing CTA + socials
    Footer.tsx        — footer with live IST clock                                   [client]
    ui/
      Reveal.tsx      — scroll-reveal wrapper                                        [client]
      SectionHead.tsx — numbered section header
  data/
    portfolio.ts      — ALL content lives here (single source of truth)
  lib/
    utils.ts          — cn() className helper
```

## Editing Content

Everything — papers, roles, projects, hackathons, skills, certifications, posts, education,
interests, links — lives in **`src/data/portfolio.ts`**, fully typed. Edit that file to update the
site; components read from it and never hardcode copy.

Adding a project is one object in the `projects` array. Its `tags` drive the filter buttons, and an
optional `badge` renders the cyan pill in the card corner. Adding a paper is one object in `papers`;
give it a `telemetry` block to get animated comparison bars like the F1 entry.

## Accessibility & Performance

- Respects `prefers-reduced-motion` — the swarm renders one static frame, the typewriter prints
  instantly, and all transitions are disabled.
- The swarm scales its agent count to viewport width (26 on mobile → 58 on desktop) and caps device
  pixel ratio at 2.
- The cursor reticle is disabled entirely on touch devices.
- Keyboard-accessible nav; all interactive elements are real `<a>` and `<button>` elements.

## Deployment

Deployed on **Vercel** — push to `main` and it redeploys with zero config.

For a static host, add `output: 'export'` to `next.config.mjs`; the site uses no server features.

## Notes

- Fonts load via a Google Fonts `@import` in `globals.css` with system-font fallbacks, so the build
  works in network-restricted environments.
