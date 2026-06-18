export const borderWidth = {
  none: '0px',
  thin: '0.5px',
  base: '1px',
  medium: '1.5px',
  thick: '2px',
} as const

export type BorderWidthToken = keyof typeof borderWidth
