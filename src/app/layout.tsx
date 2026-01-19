import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space',
  weight: ['500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
  weight: ['400', '500'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F7F7F5',
}

export const metadata: Metadata = {
  title: {
    default: 'Timothy Evan',
    template: '%s — Timothy Evan',
  },
  description: 'Frontend developer and data analyst. Building interfaces with clarity and data-informed decisions.',
  keywords: ['frontend', 'developer', 'react', 'next.js', 'data analysis', 'ui/ux'],
  authors: [{ name: 'Timothy Evan' }],
  creator: 'Timothy Evan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Timothy Evan',
    title: 'Timothy Evan — Frontend Developer',
    description: 'Frontend developer and data analyst. Building interfaces with clarity.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timothy Evan — Frontend Developer',
    description: 'Frontend developer and data analyst. Building interfaces with clarity.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased bg-[#F7F7F5] text-[#1A1A1A]">
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                   focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#1A1A1A]
                   focus:border focus:border-[#E8E7E4] focus:rounded-sm"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}