'use client'

import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import type { ReactNode } from 'react'

interface MagneticAreaProps {
  children: ReactNode
  strength?: number
  radius?: number
  className?: string
}

export function MagneticArea({
  children,
  strength = 0.3,
  radius = 200,
  className = '',
}: MagneticAreaProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const reduced = useReducedMotion()

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduced || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < radius) {
        const power = (1 - dist / radius) * strength
        setPos({ x: dx * power, y: dy * power })
      } else {
        setPos({ x: 0, y: 0 })
      }
    },
    [reduced, strength, radius],
  )

  const handleMouseLeave = useCallback(() => {
    setPos({ x: 0, y: 0 })
  }, [])

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={
        reduced ? { x: 0, y: 0 } : { x: pos.x, y: pos.y }
      }
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
