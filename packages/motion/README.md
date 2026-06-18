# @maidenui/motion

Motion primitives and animation utilities for MaidenUI.

## Components

### RevealText

Scroll-triggered text reveal animation using IntersectionObserver.

```tsx
import { RevealText } from '@maidenui/motion'

<RevealText direction="up" delay="normal" duration={1500}>
  <h1>This text reveals on scroll</h1>
</RevealText>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'up' \| 'down' \| 'left' \| 'right' \| 'fade'` | `'up'` | Animation direction |
| `delay` | `'none' \| 'fast' \| 'normal' \| 'slow'` | `'normal'` | Stagger delay |
| `duration` | number | `1200` | Animation duration in ms |
| `as` | ElementType | `'span'` | HTML element |

## Animations

Predefined keyframes are also exported:

```tsx
import { animations } from '@maidenui/motion'
// Includes: maiden-fade-in, maiden-reveal-up, maiden-scale-in
```
