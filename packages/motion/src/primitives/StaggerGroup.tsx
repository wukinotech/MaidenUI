'use client'

import { motion, type Variants } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { defaultEasing } from '../tokens'
import type { ReactNode } from 'react'

interface StaggerGroupProps {
  children: ReactNode
  delay?: number
  staggerDelay?: number
  distance?: number
  className?: string
}

export function StaggerGroup({
  children,
  delay = 0,
  staggerDelay = 0.1,
  distance = 24,
  className = '',
}: StaggerGroupProps) {
  const reduced = useReducedMotion()

  const containerVariants: Variants = reduced
    ? { visible: { transition: { staggerChildren: 0 } } }
    : {
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          },
        },
      }

  const childVariants: Variants = reduced
    ? { visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: defaultEasing },
        },
      }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChild({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const childVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: defaultEasing },
    },
  }

  return (
    <motion.div variants={childVariants} className={className}>
      {children}
    </motion.div>
  )
}
