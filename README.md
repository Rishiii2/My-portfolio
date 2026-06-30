# Rishikant — Portfolio

A premium, Awwwards-inspired personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Design

- **Palette:** Deep space navy (`#060B18`) base, electric cyan (`#00D4FF`) accent, warm amber (`#F59E0B`) for highlights/badges.
- **Typography:** Space Grotesk (display) + Inter (body) + JetBrains Mono (labels, tags, code-style UI).
- **Signature element:** Animated terminal-style role typewriter in the hero, paired with an orbiting-rings decoration and a drifting particle field — nodding to the 5G/robotics/signal-processing subject matter without being literal.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (scroll reveals, layout animations, hero typewriter)
- lucide-react (icons)

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
    layout.tsx       — root layout, metadata, fonts
    page.tsx          — section orchestration
    globals.css        — design tokens, utilities, animations
  components/
    Nav.tsx             — scroll-spy magnetic pill navigation
    Hero.tsx             — typewriter hero + particle field
    About.tsx
    Skills.tsx            — bento grid of skill categories
    Experience.tsx         — timeline of internships
    Projects.tsx            — filterable grid + modal detail view
    Hackathons.tsx           — competition cards
    Education.tsx
    Certifications.tsx        — expandable credential grid
    Arts.tsx                   — hobbies & non-technical interests
    Contact.tsx
    Footer.tsx
  data/
    portfolio.ts               — ALL content lives here (single source of truth)
  lib/
    utils.ts                    — cn() className helper
```

## Editing Content

All personal content — experience, projects, skills, certifications, etc. — lives in
**`src/data/portfolio.ts`**. Edit that file to update anything; no need to touch components.

## Deployment

This is deployment-ready for **Vercel** (recommended) or any Node host:

1. Push this repo to GitHub.
2. Import into [vercel.com/new](https://vercel.com/new).
3. Deploy — zero config needed.

Or deploy to GitHub Pages / static hosts by adding `output: 'export'` to `next.config.mjs` (note: this disables the few server features, though this site doesn't use any).

## Notes

- Fonts load via Google Fonts CDN `@import` in `globals.css` with system-font fallbacks, so the build works even in network-restricted environments.
- Fully responsive, keyboard-accessible nav, and respects `prefers-reduced-motion`.
