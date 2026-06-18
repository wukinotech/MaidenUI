import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    'bg-maiden-fg text-maiden-bg',
    'hover:bg-maiden-fg-muted',
    'active:bg-maiden-fg',
    'dark:bg-maiden-fg dark:text-maiden-bg',
    'dark:hover:bg-maiden-fg-muted',
  ].join(' '),
  secondary: [
    'bg-maiden-bg-elevated text-maiden-fg',
    'hover:bg-maiden-border',
    'active:bg-maiden-bg-elevated',
    'border border-maiden-border',
  ].join(' '),
  ghost: [
    'bg-transparent text-maiden-fg-muted',
    'hover:text-maiden-fg hover:bg-maiden-bg-elevated',
    'active:text-maiden-fg',
  ].join(' '),
  outline: [
    'bg-transparent text-maiden-fg',
    'border border-maiden-border',
    'hover:border-maiden-fg-muted hover:text-maiden-fg',
    'active:border-maiden-fg',
  ].join(' '),
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm tracking-wide',
  md: 'px-6 py-2.5 text-sm tracking-wide',
  lg: 'px-8 py-3 text-base tracking-wider',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center',
        'font-body font-medium uppercase',
        'rounded-none',
        'transition-all duration-[var(--maiden-duration-normal)] ease-[var(--maiden-ease-elegant)]',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-maiden-fg-muted',
        'disabled:opacity-40 disabled:pointer-events-none',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
