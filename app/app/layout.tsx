import type { Metadata } from 'next'
import './prototype.css'

export const metadata: Metadata = {
  title: 'Mando — Prototipo interactivo',
  description: 'Explora el prototipo interactivo de Mando, tu copiloto financiero personal.',
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
