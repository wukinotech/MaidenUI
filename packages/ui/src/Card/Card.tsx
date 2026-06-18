import type { HTMLAttributes, ReactNode } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'default' | 'elevated' | 'bordered'
  className?: string
}

const variantClasses: Record<string, string> = {
  default: 'bg-maiden-bg-elevated',
  elevated: [
    'bg-maiden-bg-elevated',
    'shadow-[var(--maiden-shadow-soft)]',
    'dark:shadow-[var(--maiden-shadow-glow)]',
  ].join(' '),
  bordered: 'bg-maiden-bg-elevated border border-maiden-border',
}

export function Card({
  children,
  variant = 'default',
  className = '',
  ...props
}: CardProps) {
  return (
    <div
      className={[
        'p-6 md:p-8',
        'transition-all duration-[var(--maiden-duration-normal)] ease-[var(--maiden-ease-smooth)]',
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}
