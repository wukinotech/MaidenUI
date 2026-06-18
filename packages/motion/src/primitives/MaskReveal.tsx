'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { defaultEasing, defaultDuration } from '../tokens'
import type { ReactNode } from 'react'

type MaskDirection = 'up' | 'down' | 'left' | 'right' | 'center'

interface MaskRevealProps {
  children: ReactNode
  direction?: MaskDirection
  delay?: number
  duration?: number
  className?: string
}

const clipPaths: Record<MaskDirection, { from: string; to: string }> = {
  up: { from: 'inset(100% 0 0 0)', to: 'inset(0 0 0 0)' },
  down: { from: 'inset(0 0 100% 0)', to: 'inset(0 0 0 0)' },
  left: { from: 'inset(0 100% 0 0)', to: 'inset(0 0 0 0)' },
  right: { from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0)' },
  center: { from: 'inset(50%)', to: 'inset(0)' },
}

export function MaskReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = defaultDuration,
  className = '',
}: MaskRevealProps) {
  const reduced = useReducedMotion()
  const mask = clipPaths[direction]

  return (
    <motion.div
      initial={reduced ? {} : { clipPath: mask.from }}
      whileInView={reduced ? {} : { clipPath: mask.to }}
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
