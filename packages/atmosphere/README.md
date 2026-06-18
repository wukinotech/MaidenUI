# @maidenui/atmosphere

Atmospheric effects for immersive cinematic experiences.

## Components

### GrainOverlay

Subtle film grain texture overlay using SVG filters.

```tsx
import { GrainOverlay } from '@maidenui/atmosphere'

<GrainOverlay opacity={0.035} blendMode="overlay" />
```

### GradientFog

Soft, multi-layered gradient fog for atmospheric depth.

```tsx
import { GradientFog } from '@maidenui/atmosphere'

<GradientFog variant="hero" opacity={0.8} />
```

#### Variants

| Variant | Effect |
|---------|--------|
| `hero` | Large central glow + corner vignette fog |
| `ambient` | Soft ambient light from two directions |
| `edge` | Subtle edge light / vignette gradient |
