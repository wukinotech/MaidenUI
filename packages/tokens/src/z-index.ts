export const zIndex = {
  base: '0',
  above: '10',
  elevated: '20',
  overlay: '30',
  modal: '40',
  toast: '50',
  tooltip: '60',
  max: '999',
} as const

export type ZIndexToken = keyof typeof zIndex
