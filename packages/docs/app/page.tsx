'use client'

import { useEffect, useState } from 'react'
import { Button } from '@maidenui/ui'
import { Badge } from '@maidenui/ui'
import { Card } from '@maidenui/ui'
import { Typography } from '@maidenui/typography'
import { RevealText } from '@maidenui/motion'
import { GrainOverlay, GradientFog } from '@maidenui/atmosphere'
import { useTheme } from '@maidenui/theme'

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  return (
    <>
      <GrainOverlay opacity={0.035} blendMode="overlay" />
      <GradientFog variant="hero" opacity={0.8} />

      <main className="relative z-base flex min-h-screen flex-col">
        {/* Navigation */}
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

        {/* Hero */}
        <section className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <RevealText direction="up" delay="fast" duration={1500}>
            <Badge variant="outline" className="mb-8">
              v0.1.0 — Design System
            </Badge>
          </RevealText>

          <RevealText direction="up" delay="normal" duration={1500}>
            <h1 className="font-display text-7xl leading-tight tracking-tighter text-maiden-fg md:text-9xl">
              Maiden
              <br />
              <span className="text-maiden-fg-muted">UI</span>
            </h1>
          </RevealText>

          <RevealText direction="up" delay="slow" duration={1500}>
            <p className="mt-8 max-w-md font-body text-base leading-relaxed text-maiden-fg-muted md:text-lg">
              A cinematic, minimal design system for building immersive
              editorial websites and dreamlike digital experiences.
            </p>
          </RevealText>

          <RevealText direction="up" delay="slow" duration={1500}>
            <div className="mt-10 flex items-center gap-4">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Components
              </Button>
            </div>
          </RevealText>
        </section>

        {/* Footer metadata */}
        <footer className="fixed bottom-0 left-0 right-0 z-elevated flex items-center justify-between px-8 py-6 md:px-16">
          <span className="font-body text-xs tracking-wider text-maiden-fg-subtle uppercase">
            Minimal · Editorial · Cinematic
          </span>
          <span className="font-body text-xs tracking-wider text-maiden-fg-subtle uppercase">
            {mounted ? theme : ''} mode
          </span>
        </footer>
      </main>
    </>
  )
}
