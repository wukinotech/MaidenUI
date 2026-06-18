export const shadows = {
  none: 'none',
  subtle: '0 1px 2px rgba(0, 0, 0, 0.04)',
  soft: '0 2px 8px rgba(0, 0, 0, 0.06)',
  elevated: '0 4px 16px rgba(0, 0, 0, 0.08)',
  deep: '0 8px 32px rgba(0, 0, 0, 0.10)',
  overlay: '0 16px 48px rgba(0, 0, 0, 0.14)',
  glow: '0 0 60px rgba(255, 255, 255, 0.04)',
} as const

export type ShadowToken = keyof typeof shadows
