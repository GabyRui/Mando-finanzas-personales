'use client'

import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-gold tracking-tight">
          mando
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-text-muted">
          <a href="#how" className="hover:text-text-main transition-colors">Cómo funciona</a>
          <a href="#pricing" className="hover:text-text-main transition-colors">Planes</a>
          <a href="#faq" className="hover:text-text-main transition-colors">FAQ</a>
        </nav>

        <a
          href="#pricing"
          className="hidden md:inline-block bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          Quiero acceso
        </a>

        <button
          className="md:hidden text-text-muted text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-surface px-6 py-4 flex flex-col gap-4 text-sm">
          <a href="#how" className="text-text-muted hover:text-text-main" onClick={() => setOpen(false)}>Cómo funciona</a>
          <a href="#pricing" className="text-text-muted hover:text-text-main" onClick={() => setOpen(false)}>Planes</a>
          <a href="#faq" className="text-text-muted hover:text-text-main" onClick={() => setOpen(false)}>FAQ</a>
          <a
            href="#pricing"
            className="bg-accent hover:bg-accent-hover text-white text-center font-semibold py-2.5 rounded-lg transition-colors"
            onClick={() => setOpen(false)}
          >
            Quiero acceso
          </a>
        </div>
      )}
    </header>
  )
}
