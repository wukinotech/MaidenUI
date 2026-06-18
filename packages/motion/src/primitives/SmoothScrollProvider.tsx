'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface SmoothScrollProviderProps {
  children: ReactNode
  lerp?: number
  duration?: number
}

export function SmoothScrollProvider({
  children,
  lerp = 0.08,
  duration = 1.2,
}: SmoothScrollProviderProps) {
  const reduced = useReducedMotion()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (reduced) return

    const lenis = new Lenis({
      lerp,
      duration,
      smoothWheel: true,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [reduced, lerp, duration])

  return <>{children}</>
}
