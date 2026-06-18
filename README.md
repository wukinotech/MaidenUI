# MaidenUI

**A cinematic, minimal, elegant design system and UI library for building immersive editorial websites and dreamlike digital experiences.**

Inspired by luxury editorial websites, high-end fashion portfolios, and smooth experiential interfaces. Every component is designed with intention — minimal black/ivory palettes, soft surreal atmosphere, elegant typography, subtle grain and fog textures, premium motion, and polished transitions.

## Design Philosophy

- **Minimalism as luxury** — Every element earns its place. Whitespace is structural.
- **Cinematic atmosphere** — Grain, fog, soft glows. Immersive without distraction.
- **Editorial typography** — Serif display faces, refined hierarchy, generous leading.
- **Premium motion** — Deliberate, smooth, meaningful. Easing curves inspired by film.
- **Dual nature** — Noir dark theme and warm ivory light theme, both equally considered.

## Package Structure

```
packages/
├── tokens/         — Design tokens: colors, typography, spacing, shadows, motion
├── theme/          — Theme context: ThemeProvider, useTheme, dark/light switching
├── typography/     — Typographic system: fonts, Typography component
├── ui/             — Core UI: Button, Card, Badge
├── motion/         — Motion primitives: RevealText, animations
├── atmosphere/     — Atmosphere effects: GrainOverlay, GradientFog
├── layout/         — Layout components (coming in Phase 2)
├── media/          — Media components (coming in Phase 2)
├── registry/       — Component registry and metadata
└── docs/           — Next.js documentation / demo site
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Start the docs site
pnpm dev:docs

# Build all packages
pnpm build
```

## Theme Tokens

All design tokens are defined in `@maidenui/tokens` and exposed as CSS custom properties. Themes are toggled by adding/removing the `.maiden-dark` or `.maiden-light` class on the root element.

- Dark theme: pitch black → warm charcoal, ivory accents
- Light theme: cream → warm paper, charcoal text

## Components

| Component | Package | Description |
|-----------|---------|-------------|
| Button | `@maidenui/ui` | Minimal button with primary/secondary/ghost/outline variants |
| Card | `@maidenui/ui` | Editorial card container |
| Badge | `@maidenui/ui` | Subtle label badge |
| Typography | `@maidenui/typography` | Editorial type system with variants |
| RevealText | `@maidenui/motion` | Scroll-triggered text reveal animation |
| GrainOverlay | `@maidenui/atmosphere` | Film grain texture overlay |
| GradientFog | `@maidenui/atmosphere` | Soft atmospheric fog gradients |
