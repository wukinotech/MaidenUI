'use client'

import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import type { Theme } from './themes'

export function useTheme(): {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
} {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return {
    theme: context.theme,
    setTheme: context.setTheme,
    toggleTheme: () =>
      context.setTheme(context.theme === 'dark' ? 'light' : 'dark'),
  }
}
