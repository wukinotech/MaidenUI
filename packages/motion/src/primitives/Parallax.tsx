'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import type { ReactNode } from 'react'

interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function Parallax({
  children,
  speed = -0.3,
  className = '',
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [speed * 300, speed * -300],
  )

  return (
    <div ref={ref} className={`overflow-hidden ${className}`.trim()}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
