import { colors } from './colors'
import { typography } from './typography'
import { spacing } from './spacing'
import { radius } from './radius'
import { borderWidth } from './border'
import { shadows } from './shadows'
import { blur } from './blur'
import { zIndex } from './z-index'
import { motion } from './motion'

function flattenTokens(
  obj: Record<string, unknown>,
  prefix: string[] = [],
): Record<string, string> {
  const result: Record<string, string> = {}
  for (const [key, value] of Object.entries(obj)) {
    const path = [...prefix, key]
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(result, flattenTokens(value as Record<string, unknown>, path))
    } else if (typeof value === 'string') {
      result[`--maiden-${path.join('-')}`] = value
    }
  }
  return result
}

const darkThemeVars: Record<string, string> = {
  '--maiden-bg': colors.pitch,
  '--maiden-bg-elevated': colors.coal,
  '--maiden-bg-surface': colors.noir['950'],
  '--maiden-fg': colors.noir['50'],
  '--maiden-fg-muted': colors.noir['300'],
  '--maiden-fg-subtle': colors.noir['500'],
  '--maiden-border': colors.noir['800'],
  '--maiden-border-subtle': colors.noir['900'],
  '--maiden-accent': colors.ivory['300'],
  '--maiden-accent-muted': colors.ivory['800'],
  '--maiden-overlay': 'rgba(0,0,0,0.6)',
  '--maiden-glow': 'rgba(255,255,255,0.03)',
}

const lightThemeVars: Record<string, string> = {
  '--maiden-bg': colors.cream,
  '--maiden-bg-elevated': colors.chalk,
  '--maiden-bg-surface': colors.paper,
  '--maiden-fg': colors.pitch,
  '--maiden-fg-muted': colors.pewter,
  '--maiden-fg-subtle': colors.ash,
  '--maiden-border': colors.stone,
  '--maiden-border-subtle': colors.paper,
  '--maiden-accent': colors.coal,
  '--maiden-accent-muted': colors.noir['300'],
  '--maiden-overlay': 'rgba(0,0,0,0.2)',
  '--maiden-glow': 'rgba(0,0,0,0.02)',
}

function generateCSS(theme: 'dark' | 'light'): string {
  const themeColors = theme === 'dark' ? darkThemeVars : lightThemeVars

  const tokens = flattenTokens({
    color: colors,
    font: typography.fontFamily,
    text: typography.fontSize,
    weight: typography.fontWeight,
    leading: typography.lineHeight,
    tracking: typography.letterSpacing,
    spacing,
    radius,
    border: borderWidth,
    shadow: shadows,
    blur,
    z: zIndex,
    duration: motion.duration,
    ease: motion.easing,
  })

  const allVars = { ...tokens, ...themeColors }
  const rules = Object.entries(allVars)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n')

  return `:root {\n${rules}\n}`
}

export function generateCSSVariables(): string {
  return `
/* MaidenUI Design Tokens */

@layer tokens {
  .maiden-light {
${generateCSS('light')}
  }

  .maiden-dark {
${generateCSS('dark')}
  }
}
`
}

export const tokenVariables = {
  ...flattenTokens({
    color: colors,
    font: typography.fontFamily,
    text: typography.fontSize,
    weight: typography.fontWeight,
    leading: typography.lineHeight,
    tracking: typography.letterSpacing,
    spacing,
    radius,
    border: borderWidth,
    shadow: shadows,
    blur,
    z: zIndex,
    duration: motion.duration,
    ease: motion.easing,
  }),
} as Record<string, string>
