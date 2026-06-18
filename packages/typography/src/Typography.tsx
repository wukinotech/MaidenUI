import { typography } from '@maidenui/tokens'
import type { ElementType, HTMLAttributes, ReactNode } from 'react'

export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'label'
  | 'code'

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant
  as?: ElementType
  children: ReactNode
  className?: string
}

const variantStyles: Record<TypographyVariant, {
  as: ElementType
  className: string
}> = {
  display: {
    as: 'h1',
    className: [
      'font-display',
      'text-8xl md:text-9xl',
      'leading-tight',
      'tracking-tighter',
      'text-maiden-fg',
    ].join(' '),
  },
  h1: {
    as: 'h1',
    className: [
      'font-heading',
      'text-5xl md:text-7xl',
      'leading-snug',
      'tracking-tight',
      'text-maiden-fg',
    ].join(' '),
  },
  h2: {
    as: 'h2',
    className: [
      'font-heading',
      'text-4xl md:text-5xl',
      'leading-snug',
      'tracking-tight',
      'text-maiden-fg',
    ].join(' '),
  },
  h3: {
    as: 'h3',
    className: [
      'font-heading',
      'text-2xl md:text-3xl',
      'leading-snug',
      'text-maiden-fg',
    ].join(' '),
  },
  h4: {
    as: 'h4',
    className: [
      'font-body',
      'text-xl',
      'leading-normal',
      'tracking-wide',
      'text-maiden-fg-muted',
      'uppercase',
    ].join(' '),
  },
  body: {
    as: 'p',
    className: [
      'font-body',
      'text-base',
      'leading-relaxed',
      'text-maiden-fg-muted',
    ].join(' '),
  },
  'body-sm': {
    as: 'p',
    className: [
      'font-body',
      'text-sm',
      'leading-relaxed',
      'text-maiden-fg-subtle',
    ].join(' '),
  },
  caption: {
    as: 'span',
    className: [
      'font-body',
      'text-xs',
      'leading-normal',
      'tracking-wider',
      'text-maiden-fg-subtle',
      'uppercase',
    ].join(' '),
  },
  label: {
    as: 'span',
    className: [
      'font-body',
      'text-sm',
      'font-medium',
      'tracking-wide',
      'text-maiden-fg-muted',
      'uppercase',
    ].join(' '),
  },
  code: {
    as: 'code',
    className: [
      'font-mono',
      'text-sm',
      'leading-normal',
      'text-maiden-accent',
      'bg-maiden-bg-elevated',
      'px-1.5',
      'py-0.5',
      'rounded-sm',
    ].join(' '),
  },
}

export function Typography({
  variant = 'body',
  as,
  children,
  className = '',
  ...props
}: TypographyProps) {
  const config = variantStyles[variant]
  const Component = as ?? config.as

  return (
    <Component className={`${config.className} ${className}`.trim()} {...props}>
      {children}
    </Component>
  )
}
