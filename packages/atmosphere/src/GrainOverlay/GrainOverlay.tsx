'use client'

import { useId, type HTMLAttributes } from 'react'

interface GrainOverlayProps extends HTMLAttributes<HTMLDivElement> {
  opacity?: number
  blendMode?: 'normal' | 'overlay' | 'soft-light' | 'multiply'
}

export function GrainOverlay({
  opacity = 0.04,
  blendMode = 'overlay',
  className = '',
  ...props
}: GrainOverlayProps) {
  const id = useId()

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-max ${className}`.trim()}
      style={{ mixBlendMode: blendMode, opacity }}
      {...props}
    >
      <svg width="100%" height="100%" className="h-full w-full">
        <filter id={`grain-${id}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter={`url(#grain-${id})`}
          opacity={opacity}
        />
      </svg>
    </div>
  )
}
