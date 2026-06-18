'use client'

import { useRef, useState, useEffect } from 'react'
import type { ReactNode, ElementType, HTMLAttributes } from 'react'

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'fade'
type RevealDelay = 'none' | 'fast' | 'normal' | 'slow'

interface RevealTextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: ElementType
  direction?: RevealDirection
  delay?: RevealDelay
  duration?: number
  className?: string
}

const delayMap: Record<RevealDelay, number> = {
  none: 0,
  fast: 100,
  normal: 300,
  slow: 600,
}

const directionTransform: Record<RevealDirection, string> = {
  up: 'translateY(24px)',
  down: 'translateY(-24px)',
  left: 'translateX(24px)',
  right: 'translateX(-24px)',
  fade: 'translateY(0px)',
}

export function RevealText({
  children,
  as: Component = 'span',
  direction = 'up',
  delay = 'normal',
  duration = 1200,
  className = '',
  ...props
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Component
      ref={ref}
      className={`inline-block ${className}`.trim()}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : directionTransform[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delayMap[delay]}ms`,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}
