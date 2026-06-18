'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { defaultEasing, defaultDuration } from '../tokens'
import type { ReactNode } from 'react'

interface BlurInProps {
  children: ReactNode
  delay?: number
  duration?: number
  blur?: number
  className?: string
}

export function BlurIn({
  children,
  delay = 0,
  duration = defaultDuration,
  blur = 6,
  className = '',
}: BlurInProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={
        reduced ? {} : { opacity: 0, filter: `blur(${blur}px)` }
      }
      whileInView={reduced ? {} : { opacity: 1, filter: 'blur(0px)' }}
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
