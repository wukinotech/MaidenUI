'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { defaultEasing } from '../tokens'
import type { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
  pathname?: string
}

export function PageTransition({
  children,
  pathname,
}: PageTransitionProps) {
  const reduced = useReducedMotion()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduced ? { opacity: 1 } : { opacity: 0, y: -12 }}
        transition={{
          duration: reduced ? 0 : 0.6,
          ease: defaultEasing,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
