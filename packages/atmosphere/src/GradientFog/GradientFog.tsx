'use client'

import type { HTMLAttributes } from 'react'

interface GradientFogProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'hero' | 'ambient' | 'edge'
  opacity?: number
}

const variantGradients: Record<string, { dark: string; light: string }> = {
  hero: {
    dark: `
      radial-gradient(ellipse 80% 60% at 50% -20%, rgba(255,255,255,0.06) 0%, transparent 100%),
      radial-gradient(ellipse 50% 40% at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 100%),
      radial-gradient(ellipse 40% 50% at 20% 30%, rgba(255,255,255,0.02) 0%, transparent 100%)
    `,
    light: `
      radial-gradient(ellipse 80% 60% at 50% -20%, rgba(0,0,0,0.04) 0%, transparent 100%),
      radial-gradient(ellipse 50% 40% at 80% 20%, rgba(0,0,0,0.02) 0%, transparent 100%),
      radial-gradient(ellipse 40% 50% at 20% 30%, rgba(0,0,0,0.01) 0%, transparent 100%)
    `,
  },
  ambient: {
    dark: `
      radial-gradient(ellipse 60% 50% at 30% 60%, rgba(255,255,255,0.03) 0%, transparent 100%),
      radial-gradient(ellipse 50% 40% at 70% 40%, rgba(255,255,255,0.02) 0%, transparent 100%)
    `,
    light: `
      radial-gradient(ellipse 60% 50% at 30% 60%, rgba(0,0,0,0.02) 0%, transparent 100%),
      radial-gradient(ellipse 50% 40% at 70% 40%, rgba(0,0,0,0.01) 0%, transparent 100%)
    `,
  },
  edge: {
    dark: `
      linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.02) 50%, transparent 100%),
      linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.01) 50%, transparent 100%)
    `,
    light: `
      linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.015) 50%, transparent 100%),
      linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.008) 50%, transparent 100%)
    `,
  },
}

export function GradientFog({
  variant = 'hero',
  opacity = 1,
  className = '',
  ...props
}: GradientFogProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 maiden-fog ${className}`.trim()}
      data-variant={variant}
      style={{ opacity }}
      {...props}
    >
      <style>{`
        .maiden-fog {
          background: ${variantGradients[variant].dark};
        }
        .maiden-light .maiden-fog,
        :root.maiden-light .maiden-fog {
          background: ${variantGradients[variant].light};
        }
      `}</style>
    </div>
  )
}
