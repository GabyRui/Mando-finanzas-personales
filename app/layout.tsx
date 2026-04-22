import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Mando — Tus gastos, organizados solos',
  description:
    'La app que registra tus gastos automáticamente desde las notificaciones de tu banco. Sin Excel. Sin ingreso manual. Solo claridad financiera.',
  metadataBase: new URL('https://usemando.pe'),
  openGraph: {
    title: 'Mando — Tus gastos, organizados solos',
    description: 'Sin Excel. Sin ingreso manual. Solo claridad financiera.',
    url: 'https://usemando.pe',
    siteName: 'Mando',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mando — Tus gastos, organizados solos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mando — Tus gastos, organizados solos',
    description: 'Sin Excel. Sin ingreso manual. Solo claridad financiera.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-PE" className={inter.variable}>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
