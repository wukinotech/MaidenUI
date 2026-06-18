import { motion as tokenMotion } from '@maidenui/tokens'
import type { MotionDurationToken, MotionEasingToken } from '@maidenui/tokens'

export function duration(token: MotionDurationToken): number {
  const raw = tokenMotion.duration[token]
  return parseInt(raw, 10) / 1000
}

export function easingArray(
  token: MotionEasingToken,
): [number, number, number, number] {
  const raw = tokenMotion.easing[token]
  const match = raw.match(/cubic-bezier\(([^)]+)\)/)
  if (!match) return [0.16, 1, 0.3, 1]
  const parts = match[1].split(',').map(Number) as [
    number,
    number,
    number,
    number,
  ]
  return parts
}

export function easing(token: MotionEasingToken): string {
  return tokenMotion.easing[token]
}

export const defaultEasing = easingArray('cinematic')
export const defaultDuration = duration('reveal')
