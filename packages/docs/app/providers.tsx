'use client'

import { usePathname } from 'next/navigation'
import { ThemeProvider } from '@maidenui/theme'
import { SmoothScrollProvider, PageTransition } from '@maidenui/motion'
import type { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <ThemeProvider defaultTheme="dark">
      <SmoothScrollProvider>
        <PageTransition pathname={pathname}>
          {children}
        </PageTransition>
      </SmoothScrollProvider>
    </ThemeProvider>
  )
}
