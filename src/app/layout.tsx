import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Cursor from '@/components/ui/cursor'
import { IntroLoader } from '@/components/layout/intro-loader'
import { MangaGrain } from '@/components/ui/manga-grain' // Don't forget to import this!
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
  keywords: [
    'Frontend Systems',
    'Interface Architecture',
    'Data Analytics',
    'Swiss Rationalism',
    'React',
    'Next.js'
  ],
  authors: [{ name: 'Timothy Evan' }],
  creator: 'Timothy Evan',
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Timothy Evan / System Archive',
    title: 'Timothy Evan — Frontend Systems & Data',
    description: 'Digital systems developed with clinical precision.',
    images: [
      {
        url: '/og-image.png', // Ensure this exists in your public folder
        width: 1200,
        height: 630,
        alt: 'Timothy Evan / Digital Systems Archive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timothy Evan / Systems',
    description: 'Frontend architecture and data-informed design.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      <body className="min-h-screen flex flex-col antialiased bg-[#F7F7F5] text-[#1A1A1A] cursor-none relative">
        {/* Intro Loader overlays everything during initial boot */}
        <IntroLoader />

        {/* Atmospheric Layers */}
        <MangaGrain />
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