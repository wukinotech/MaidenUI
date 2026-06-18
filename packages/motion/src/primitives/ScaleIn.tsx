'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { defaultEasing, defaultDuration } from '../tokens'
import type { ReactNode } from 'react'

interface ScaleInProps {
  children: ReactNode
  delay?: number
  duration?: number
  scale?: number
  className?: string
}

export function ScaleIn({
  children,
  delay = 0,
  duration = defaultDuration,
  scale = 0.97,
  className = '',
}: ScaleInProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={
        reduced ? { opacity: 1 } : { opacity: 0, scale }
      }
      whileInView={reduced ? {} : { opacity: 1, scale: 1 }}
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
