'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { defaultEasing, defaultDuration } from '../tokens'
import type { ReactNode } from 'react'

interface SlideInProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  distance?: number
  className?: string
}

const directionMap: Record<
  string,
  { x: number; y: number }
> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
}

export function SlideIn({
  children,
  direction = 'up',
  delay = 0,
  duration = defaultDuration,
  distance = 40,
  className = '',
}: SlideInProps) {
  const reduced = useReducedMotion()
  const dir = directionMap[direction]

  return (
    <motion.div
      initial={
        reduced
          ? { opacity: 1 }
          : { opacity: 0, x: dir.x * distance, y: dir.y * distance }
      }
      whileInView={reduced ? {} : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: reduced ? 0 : duration,
        delay,
        ease: defaultEasing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
