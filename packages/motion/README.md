# @maidenui/motion

Premium cinematic animation primitives for MaidenUI. Built on Framer Motion and Lenis.

## Motion Philosophy

MaidenUI motion is inspired by editorial film and luxury brand experiences:

- **Slow is smooth** — Primary animations run 800–2000ms. Rushed motion feels cheap.
- **Cinematic easing** — The signature curve `cubic-bezier(0.16, 1, 0.3, 1)` starts slow, accelerates smoothly, and decelerates gently. No bouncy springs or aggressive overshoot.
- **Reduced motion first** — Every component respects `prefers-reduced-motion`. When enabled, all animations become instant with no movement.
- **Theme-safe** — All animations use CSS custom properties or relative values. No hardcoded colors or dimensions.
- **Scroll-triggered** — Components reveal on scroll using IntersectionObserver via Framer Motion's `whileInView`. Nothing plays on load unless intentional.

## Recommended Durations

| Token | Value | Use |
|-------|-------|-----|
| `fast` | 150ms | Micro-interactions, hover states |
| `normal` | 300ms | UI transitions, small elements |
| `slow` | 500ms | Medium elements, card reveals |
| `slower` | 800ms | Section entrances, page transitions |
| `slowest` | 1200ms | Hero text, major reveals |
| `reveal` | 2000ms | Full-screen reveals, cinematic intros |

## Easing Rules

| Token | Curve | Character |
|-------|-------|-----------|
| `cinematic` | `(0.16, 1, 0.3, 1)` | **Default.** Smooth, editorial, premium |
| `elegant` | `(0.45, 0, 0.55, 1)` | Symmetrical ease-in-out, subtle |
| `smooth` | `(0.25, 0.1, 0.25, 1)` | Standard smooth, slightly faster |
| `decelerate` | `(0, 0, 0.2, 1.2)` | Fast start, slow finish — for entrances |
| `spring` | `(0.34, 1.56, 0.64, 1)` | Very subtle bounce — use sparingly |

## Primitives

### FadeIn
Fade in with a vertical offset on scroll. The most basic and elegant entrance.

```tsx
import { FadeIn } from '@maidenui/motion'

<FadeIn delay={0} duration={1.2} distance={24}>
  <p>Content fades in as you scroll</p>
</FadeIn>
```

### SlideIn
Directional slide-in. Use for elements entering from a specific side.

```tsx
<SlideIn direction="left" distance={40}>
  <p>Slides in from the left</p>
</SlideIn>
```

### BlurIn
Unblur transition. Good for hero text, images, or anything that benefits from a dreamlike reveal.

```tsx
<BlurIn blur={6} duration={1.4}>
  <h1>Comes into focus</h1>
</BlurIn>
```

### ScaleIn
Subtle scale entrance. Use for cards, images, or modals.

```tsx
<ScaleIn scale={0.97} delay={0.1}>
  <Card>Gently scales in</Card>
</ScaleIn>
```

### MaskReveal
Clip-path mask animation. The element is revealed by a moving edge. Use for editorial image reveals.

```tsx
<MaskReveal direction="up" duration={1.4}>
  <img src="..." />
</MaskReveal>
```

### StaggerGroup + StaggerChild
Container that staggers the entrance of its children. Wrap children in `StaggerChild`.

```tsx
<StaggerGroup staggerDelay={0.1} distance={24}>
  <StaggerChild>Item 1</StaggerChild>
  <StaggerChild>Item 2</StaggerChild>
  <StaggerChild>Item 3</StaggerChild>
</StaggerGroup>
```

### RevealText
Scroll-triggered text reveal. Supports direction, delay, and custom duration.

```tsx
<RevealText direction="up" delay={0.2} duration={1.4}>
  <h2>This text reveals on scroll</h2>
</RevealText>
```

### MagneticArea
Wraps children in a magnetic field that follows the cursor. Subtle and premium.

```tsx
<MagneticArea strength={0.25} radius={180}>
  <Button>Hover me</Button>
</MagneticArea>
```

### Parallax
Scroll-driven parallax transform. Creates depth through differential motion.

```tsx
<Parallax speed={-0.3}>
  <img src="..." />
</Parallax>
```

### SmoothScrollProvider
Wraps the app with Lenis for smooth scrolling.

```tsx
<SmoothScrollProvider lerp={0.08} duration={1.2}>
  {children}
</SmoothScrollProvider>
```

### PageTransition
AnimatePresence wrapper for route transitions. Fades content in/out on route change.

```tsx
<PageTransition>
  {children}
</PageTransition>
```

### RouteCurtain
Animated curtain that wipes across the screen during route changes.

```tsx
<RouteCurtain color="var(--maiden-bg)" />
```

## When to Use Each Primitive

| Goal | Primitive |
|------|-----------|
| Simple entrance on scroll | `FadeIn` |
| Directional entrance | `SlideIn` |
| Dreamlike / atmospheric reveal | `BlurIn` |
| Card or image entrance | `ScaleIn` |
| Editorial image reveal | `MaskReveal` |
| List with sequential entrance | `StaggerGroup` + `StaggerChild` |
| Text block entrance | `RevealText` |
| Interactive hover effect | `MagneticArea` |
| Depth through scroll | `Parallax` |
| Global smooth scrolling | `SmoothScrollProvider` |
| Route enter/exit | `PageTransition` |
| Dramatic route change | `RouteCurtain` |
