'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { defaultEasing, defaultDuration } from '../tokens'
import type { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  as?: 'div' | 'span' | 'section'
  delay?: number
  duration?: number
  distance?: number
  className?: string
}

export function FadeIn({
  children,
  as: Tag = 'div',
  delay = 0,
  duration = defaultDuration,
  distance = 24,
  className = '',
}: FadeInProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: distance }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
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
