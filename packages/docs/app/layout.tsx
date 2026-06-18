import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import { fontLinks } from '@maidenui/typography'

export const metadata: Metadata = {
  title: 'MaidenUI — Cinematic Design System',
  description:
    'A minimal, elegant, cinematic design system and UI library for building immersive editorial websites and dreamlike digital experiences.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="maiden-dark" suppressHydrationWarning>
      <head>
        {fontLinks.map((link, i) => (
          <link key={i} href={link.href} rel={link.rel} />
        ))}
      </head>
      <body className="min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
