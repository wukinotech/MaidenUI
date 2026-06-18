export const motion = {
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '800ms',
    slowest: '1200ms',
    reveal: '2000ms',
  },
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    elegant: 'cubic-bezier(0.45, 0, 0.55, 1)',
    cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
    decelerate: 'cubic-bezier(0, 0, 0.2, 1.2)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const

export type MotionDurationToken = keyof typeof motion.duration
export type MotionEasingToken = keyof typeof motion.easing
