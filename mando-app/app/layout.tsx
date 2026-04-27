import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'mando — app',
  description: 'Tu copiloto financiero personal',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={font.variable}>
      <body>{children}</body>
    </html>
  )
}
