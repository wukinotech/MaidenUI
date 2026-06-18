'use client'

import { usePathname } from 'next/navigation'
import { Button, Badge } from '@maidenui/ui'
import {
  FadeIn,
  SlideIn,
  BlurIn,
  ScaleIn,
  MaskReveal,
  StaggerGroup,
  StaggerChild,
  RevealText,
  MagneticArea,
  Parallax,
  RouteCurtain,
} from '@maidenui/motion'
import { GrainOverlay, GradientFog } from '@maidenui/atmosphere'
import Link from 'next/link'

export default function MotionPage() {
  const pathname = usePathname()
  return (
    <>
      <GrainOverlay opacity={0.03} blendMode="overlay" />
      <GradientFog variant="ambient" opacity={0.6} />
      <RouteCurtain pathname={pathname} />

      <main className="relative z-base">
        <nav className="fixed top-0 left-0 right-0 z-elevated flex items-center justify-between px-8 py-6 md:px-16">
          <Link
            href="/"
            className="font-body text-sm tracking-widest text-maiden-fg-subtle uppercase transition-colors hover:text-maiden-fg-muted"
          >
            MaidenUI
          </Link>
          <span className="font-body text-xs tracking-wider text-maiden-fg-subtle uppercase">
            Motion
          </span>
        </nav>

        <div className="px-6 pt-32 pb-24 md:px-16">
          <FadeIn>
            <Badge variant="outline" className="mb-6">
              Phase 2 — Motion System
            </Badge>
            <h1 className="font-display text-6xl leading-tight tracking-tighter text-maiden-fg md:text-8xl">
              Motion
            </h1>
            <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-maiden-fg-muted">
              Premium cinematic animation primitives. Every curve and duration
              is designed for editorial smoothness, not generic UI motion.
            </p>
          </FadeIn>
        </div>

        {/* ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ 1. TEXT REVEAL ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ */}
        <section className="border-t border-maiden-border-subtle px-6 py-24 md:px-16">
          <div className="mb-16">
            <Badge variant="muted" className="mb-4">01</Badge>
            <h2 className="font-heading text-3xl text-maiden-fg md:text-4xl">
              Text Reveal
            </h2>
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            <RevealText direction="up" delay={0.1} duration={1.4}>
              <p className="font-display text-4xl leading-tight tracking-tight text-maiden-fg md:text-5xl">
                This text reveals
                <br />
                from below as you
                <br />
                scroll into view.
              </p>
            </RevealText>

            <RevealText direction="left" delay={0.2} duration={1.2}>
              <p className="font-body text-lg leading-relaxed text-maiden-fg-muted">
                Each word appears with a smooth cinematic curve. No bouncing,
                no overshoot — just an elegant fade and slide that feels
                editorial and intentional. The timing is deliberately slow.
              </p>
            </RevealText>
          </div>
        </section>

        {/* ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ 2. IMAGE REVEAL ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ */}
        <section className="border-t border-maiden-border-subtle px-6 py-24 md:px-16">
          <div className="mb-16">
            <Badge variant="muted" className="mb-4">02</Badge>
            <h2 className="font-heading text-3xl text-maiden-fg md:text-4xl">
              Mask & Scale Reveal
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <MaskReveal direction="up" duration={1.4}>
              <div className="aspect-[4/3] bg-maiden-bg-elevated flex items-center justify-center border border-maiden-border">
                <span className="font-body text-sm tracking-wider text-maiden-fg-subtle uppercase">
                  Mask Up
                </span>
              </div>
            </MaskReveal>

            <ScaleIn delay={0.2} duration={1.2} scale={0.95}>
              <div className="aspect-[4/3] bg-maiden-bg-elevated flex items-center justify-center border border-maiden-border">
                <span className="font-body text-sm tracking-wider text-maiden-fg-subtle uppercase">
                  Scale In
                </span>
              </div>
            </ScaleIn>
          </div>
        </section>

        {/* ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ 3. PAGE CURTAIN ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ */}
        <section className="border-t border-maiden-border-subtle px-6 py-24 md:px-16">
          <div className="mb-16">
            <Badge variant="muted" className="mb-4">03</Badge>
            <h2 className="font-heading text-3xl text-maiden-fg md:text-4xl">
              Page Curtain
            </h2>
          </div>

          <FadeIn>
            <p className="mb-8 max-w-lg font-body text-base leading-relaxed text-maiden-fg-muted">
              A vertical curtain wipes across the screen on every route change.
              Already active on this page — navigate back to the homepage to
              see it in action.
            </p>
            <div className="flex gap-4">
              <Link href="/">
                <Button variant="outline" size="md">
                  ← Back Home
                </Button>
              </Link>
            </div>
          </FadeIn>
        </section>

        {/* ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ 4. PARALLAX ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ */}
        <section className="border-t border-maiden-border-subtle px-6 py-24 md:px-16">
          <div className="mb-16">
            <Badge variant="muted" className="mb-4">04</Badge>
            <h2 className="font-heading text-3xl text-maiden-fg md:text-4xl">
              Parallax Editorial
            </h2>
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            <Parallax speed={-0.15}>
              <div className="aspect-[3/4] bg-maiden-bg-elevated border border-maiden-border flex items-center justify-center">
                <span className="font-body text-xs tracking-widest text-maiden-fg-subtle uppercase">
                  Slower layer
                </span>
              </div>
            </Parallax>

            <div className="flex flex-col justify-center gap-6">
              <Parallax speed={-0.3}>
                <p className="font-display text-3xl leading-tight tracking-tight text-maiden-fg">
                  Layers move at different speeds, creating depth without
                  distraction.
                </p>
              </Parallax>
              <Parallax speed={-0.2}>
                <p className="font-body text-base leading-relaxed text-maiden-fg-muted">
                  The parallax effect is subtle — barely perceptible, but it
                  adds a spatial quality that makes the page feel alive.
                </p>
              </Parallax>
            </div>
          </div>
        </section>

        {/* ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ 5. MAGNETIC BUTTON ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ */}
        <section className="border-t border-maiden-border-subtle px-6 py-24 md:px-16">
          <div className="mb-16">
            <Badge variant="muted" className="mb-4">05</Badge>
            <h2 className="font-heading text-3xl text-maiden-fg md:text-4xl">
              Magnetic Area
            </h2>
          </div>

          <FadeIn>
            <p className="mb-12 max-w-lg font-body text-base leading-relaxed text-maiden-fg-muted">
              The button gently follows your cursor within a radius. Subtle
              enough to feel premium, not gimmicky.
            </p>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-8">
            <MagneticArea strength={0.25} radius={180}>
              <Button variant="primary" size="lg">
                Hover me
              </Button>
            </MagneticArea>

            <MagneticArea strength={0.2} radius={150}>
              <Button variant="outline" size="lg">
                And me
              </Button>
            </MagneticArea>

            <MagneticArea strength={0.15} radius={120}>
              <span className="inline-block font-body text-sm tracking-wider text-maiden-fg-subtle uppercase transition-colors hover:text-maiden-fg-muted">
                Cursor follows
              </span>
            </MagneticArea>
          </div>
        </section>

        {/* ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ 6. SMOOTH SCROLL + STAGGER ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ */}
        <section className="border-t border-maiden-border-subtle px-6 py-24 md:px-16">
          <div className="mb-16">
            <Badge variant="muted" className="mb-4">06</Badge>
            <h2 className="font-heading text-3xl text-maiden-fg md:text-4xl">
              Smooth Scroll + Stagger
            </h2>
          </div>

          <p className="mb-16 max-w-lg font-body text-base leading-relaxed text-maiden-fg-muted">
            Lenis powers the smooth scrolling. Combined with staggered children
            that reveal one after another as you scroll.
          </p>

          <StaggerGroup staggerDelay={0.12} distance={30}>
            {[
              'Editorial rhythm',
              'Cinematic pacing',
              'Premium restraint',
              'Intentional motion',
            ].map((text, i) => (
              <StaggerChild key={i}>
                <div className="border-t border-maiden-border py-8">
                  <span className="font-body text-xs tracking-widest text-maiden-fg-subtle uppercase">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-display text-3xl leading-tight tracking-tight text-maiden-fg md:text-4xl">
                    {text}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerGroup>
        </section>

        <footer className="border-t border-maiden-border-subtle px-6 py-12 md:px-16">
          <p className="font-body text-xs tracking-wider text-maiden-fg-subtle uppercase">
            MaidenUI — Motion System
          </p>
        </footer>
      </main>
    </>
  )
}
