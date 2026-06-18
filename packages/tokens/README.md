# @maidenui/tokens

Design tokens are the foundation of the MaidenUI design system. This package defines every visual primitive used across the library.

## Token Categories

| Category | File | Description |
|----------|------|-------------|
| Colors | `colors.ts` | Noir (neutral) and Ivory (accent) palettes |
| Typography | `typography.ts` | Font families, sizes, weights, line heights, letter spacing |
| Spacing | `spacing.ts` | Consistent spacing scale (0–96) |
| Radius | `radius.ts` | Border radius scale |
| Border | `border.ts` | Border width scale (none → thick) |
| Shadows | `shadows.ts` | Subtle → deep shadow tokens |
| Blur | `blur.ts` | Backdrop blur scale |
| Z-index | `z-index.ts` | Layering system |
| Motion | `motion.ts` | Duration and easing curves |
| CSS Variables | `css-variables.ts` | Generates `--maiden-*` CSS custom properties |

## Theme Variables

In addition to raw tokens, the theme-specific semantic variables are generated:

- `--maiden-bg` / `--maiden-bg-elevated` / `--maiden-bg-surface`
- `--maiden-fg` / `--maiden-fg-muted` / `--maiden-fg-subtle`
- `--maiden-border` / `--maiden-border-subtle`
- `--maiden-accent` / `--maiden-accent-muted`
- `--maiden-overlay` / `--maiden-glow`
