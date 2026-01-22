import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Cursor from '@/components/ui/cursor'
import { IntroLoader } from '@/components/layout/intro-loader' // Import here
import './globals.css'

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
    template: '%s',
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
      <body className="min-h-screen flex flex-col antialiased bg-[#F7F7F5] text-[#1A1A1A] cursor-none">
        {/* Intro Loader must be here to overlay everything */}
        <IntroLoader />

        {/* Feature 1: The Scanner Grid Overlay */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute left-0 w-full h-px bg-accent/20 shadow-[0_0_15px_rgba(122,30,30,0.5)]" />
        </div>

        <Cursor />
        <Header />

        <main id="main-content" className="flex-1 relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}