import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AnimationProvider } from '@/contexts/AnimationContext'
import Cursor from '@/components/Cursor'
import PageTransition from '@/components/PageTransition'
import PerformanceMonitor from '@/components/PerformanceMonitor'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Clikxo - Designing clarity into the digital world',
  description: 'Creative studio by AB Darwesh & Ali Khan — crafting high-performance digital experiences with modern web technologies.',
  keywords: 'web development, UI/UX design, motion graphics, 3D interactions, creative studio',
  authors: [{ name: 'Clikxo Studio' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Clikxo - Designing clarity into the digital world',
    description: 'Creative studio crafting high-performance digital experiences',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clikxo - Designing clarity into the digital world',
    description: 'Creative studio crafting high-performance digital experiences',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimationProvider>
          <Cursor>
            <PageTransition>
              {children}
            </PageTransition>
          </Cursor>
          <PerformanceMonitor />
        </AnimationProvider>
      </body>
    </html>
  )
}
