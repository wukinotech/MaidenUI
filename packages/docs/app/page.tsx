'use client'

import { useEffect, useState } from 'react'
import { Button, Badge } from '@maidenui/ui'
import { useTheme } from '@maidenui/theme'
import {
  FadeIn,
  SlideIn,
  BlurIn,
  StaggerGroup,
  StaggerChild,
} from '@maidenui/motion'
import { GrainOverlay, GradientFog } from '@maidenui/atmosphere'

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  return (
    <>
      <GrainOverlay opacity={0.035} blendMode="overlay" />
      <GradientFog variant="hero" opacity={0.8} />

      <main className="relative z-base flex min-h-screen flex-col">
        <FadeIn>
          <nav className="fixed top-0 left-0 right-0 z-elevated flex items-center justify-between px-8 py-6 md:px-16">
            <span className="font-body text-sm tracking-widest text-maiden-fg-subtle uppercase">
              MaidenUI
            </span>
            <div className="flex items-center gap-6">
              <button
                onClick={toggleTheme}
                className="font-body text-xs tracking-wider text-maiden-fg-subtle uppercase transition-colors duration-normal hover:text-maiden-fg-muted"
              >
                {mounted ? (theme === 'dark' ? 'Light' : 'Dark') : ''}
              </button>
            </div>
          </nav>
        </FadeIn>

        <section className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <StaggerGroup staggerDelay={0.15} distance={30}>
            <StaggerChild>
              <Badge variant="outline" className="mb-8">
                v0.1.0 — Design System
              </Badge>
            </StaggerChild>

            <StaggerChild>
              <h1 className="font-display text-7xl leading-tight tracking-tighter text-maiden-fg md:text-9xl">
                Maiden
                <br />
                <span className="text-maiden-fg-muted">UI</span>
              </h1>
            </StaggerChild>

            <StaggerChild>
              <p className="mx-auto mt-8 max-w-md font-body text-base leading-relaxed text-maiden-fg-muted md:text-lg">
                A cinematic, minimal design system for building immersive
                editorial websites and dreamlike digital experiences.
              </p>
            </StaggerChild>

            <StaggerChild>
              <div className="mt-10 flex items-center justify-center gap-4">
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  Components
                </Button>
              </div>
            </StaggerChild>
          </StaggerGroup>
        </section>

        <FadeIn delay={0.8}>
          <footer className="fixed bottom-0 left-0 right-0 z-elevated flex items-center justify-between px-8 py-6 md:px-16">
            <span className="font-body text-xs tracking-wider text-maiden-fg-subtle uppercase">
              Minimal · Editorial · Cinematic
            </span>
            <span className="font-body text-xs tracking-wider text-maiden-fg-subtle uppercase">
              {mounted ? theme : ''} mode
            </span>
          </footer>
        </FadeIn>
      </main>
    </>
  )
}
