// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Cursor from '@/components/ui/cursor'
import { IntroLoader } from '@/components/layout/intro-loader'
import { NoiseTexture } from '@/components/ui/noise-texture'
import { ScrollLine } from '@/components/ui/scroll-line'
import NextTopLoader from 'nextjs-toploader'
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
    template: 'Timothy Evan / %s',
  },
  description: 'A clinical approach to frontend architecture and data systems. Focused on clarity, structure, and functional logic.',
  keywords: ['Frontend Systems', 'Interface Architecture', 'Data Analytics', 'Swiss Rationalism', 'React', 'Next.js'],
  authors: [{ name: 'Timothy Evan' }],
  creator: 'Timothy Evan',
  metadataBase: new URL('https://timothy-evan.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://timothy-evan.vercel.app',
    siteName: 'Timothy Evan / System Archive',
    title: 'Timothy Evan - Frontend Systems & Data',
    description: 'Digital systems developed with clinical precision.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Timothy Evan / Digital Systems Archive' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timothy Evan / Systems',
    description: 'Frontend architecture and data-informed design.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased bg-[#F7F7F5] text-[#1A1A1A] cursor-none relative">
        <NextTopLoader
          color="#7A1E1E"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow={false}
        />

        {/* Atmosphere layer - grain + scroll line, fixed, non-interactive */}
        <NoiseTexture />
        <ScrollLine />

        <IntroLoader />
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
