'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { defaultEasing } from '../tokens'
import type { ReactNode, ElementType } from 'react'

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'fade'

interface RevealTextProps {
  children: ReactNode
  as?: ElementType
  direction?: RevealDirection
  delay?: number
  duration?: number
  distance?: number
  className?: string
}

const directionMap: Record<string, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  fade: { x: 0, y: 0 },
}

export function RevealText({
  children,
  as: Tag = 'span',
  direction = 'up',
  delay = 0,
  duration = 1.2,
  distance = 40,
  className = '',
}: RevealTextProps) {
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
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: reduced ? 0 : duration,
        delay,
        ease: defaultEasing,
      }}
      className={className}
    >
      <Tag>{children}</Tag>
    </motion.div>
  )
}
