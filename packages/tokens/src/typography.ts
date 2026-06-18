export const typography = {
  fontFamily: {
    display: '"Playfair Display", "Times New Roman", serif',
    heading: '"Instrument Serif", "Georgia", serif',
    body: '"Inter", "SF Pro", system-ui, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", monospace',
  },
  fontSize: {
    'xs': '0.75rem',
    'sm': '0.875rem',
    'base': '1rem',
    'lg': '1.125rem',
    'xl': '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
    '5xl': '3.25rem',
    '6xl': '4rem',
    '7xl': '5rem',
    '8xl': '6.5rem',
    '9xl': '8rem',
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    none: '1',
    tight: '1.1',
    snug: '1.2',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  letterSpacing: {
    tighter: '-0.04em',
    tight: '-0.02em',
    normal: '0em',
    wide: '0.02em',
    wider: '0.06em',
    widest: '0.12em',
  },
} as const

export type TypographyToken = keyof typeof typography
