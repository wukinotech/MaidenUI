import type { HTMLAttributes, ReactNode } from 'react'

type BadgeVariant = 'default' | 'outline' | 'muted'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  default: [
    'bg-maiden-fg text-maiden-bg',
    'dark:bg-maiden-fg dark:text-maiden-bg',
  ].join(' '),
  outline: [
    'border border-maiden-border text-maiden-fg-muted',
    'dark:border-maiden-border dark:text-maiden-fg-muted',
  ].join(' '),
  muted: [
    'bg-maiden-bg-surface text-maiden-fg-subtle',
    'dark:bg-maiden-bg-surface dark:text-maiden-fg-subtle',
  ].join(' '),
}

export function Badge({
  children,
  variant = 'default',
  className = '',
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center',
        'font-body text-xs font-medium uppercase tracking-widest',
        'px-3 py-1',
        'rounded-none',
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </span>
  )
}
