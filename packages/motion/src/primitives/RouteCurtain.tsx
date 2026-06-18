'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { defaultEasing } from '../tokens'

interface RouteCurtainProps {
  pathname?: string
  color?: string
}

export function RouteCurtain({
  pathname,
  color = 'var(--maiden-bg)',
}: RouteCurtainProps) {
  const reduced = useReducedMotion()

  if (reduced) return null

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname ? pathname + '-curtain' : 'curtain'}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: defaultEasing }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          backgroundColor: color,
          transformOrigin: 'top',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />
    </AnimatePresence>
  )
}
