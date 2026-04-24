'use client'

import { useState, useEffect, useCallback } from 'react'
import { track } from '@/lib/analytics'

const FORMSPREE_ID = 'REEMPLAZAR_CON_TU_FORM_ID'

const benefits = [
  'Acceso prioritario al lanzamiento',
  'Precio de lanzamiento bloqueado',
  'Sin tarjeta. Sin compromisos.',
]

export default function WaitlistModal() {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-waitlist', handler)
    return () => window.removeEventListener('open-waitlist', handler)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="relative bg-surface w-full max-w-md rounded-2xl p-8 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Cerrar */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-text-muted hover:text-text-main transition-colors text-lg leading-none"
          aria-label="Cerrar"
        >
          ✕
        </button>

        {/* Header */}
        <span className="text-gold font-bold text-base">mando</span>
        <h2 className="text-2xl font-bold text-text-main mt-1 mb-2">
          Únete a la lista de espera
        </h2>
        <p className="text-text-muted text-sm font-normal mb-6">
          Sé de los primeros en acceder. Precio de lanzamiento bloqueado para early adopters.
        </p>

        {/* Beneficios */}
        <ul className="space-y-2.5 mb-7">
          {benefits.map(b => (
            <li key={b} className="flex items-center gap-2.5 text-sm text-text-main">
              <span className="text-accent font-bold">✓</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Formulario */}
        <form
          action={`https://formspree.io/f/${FORMSPREE_ID}`}
          method="POST"
          onSubmit={() => track('waitlist_signup', { source: 'modal' })}
          className="flex flex-col gap-3"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Tu nombre"
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-bg text-text-main placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="tu@correo.com"
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-bg text-text-main placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3.5 rounded-xl text-sm transition-colors duration-150 shadow-md shadow-accent/20"
          >
            Quiero acceso anticipado
          </button>
        </form>

        <p className="text-center text-xs text-text-muted font-normal mt-4">
          Sin spam. Te avisamos cuando esté listo, nada más.
        </p>
      </div>
    </div>
  )
}
