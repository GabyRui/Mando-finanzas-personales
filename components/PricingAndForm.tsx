'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { track } from '@/lib/analytics'
import { supabase } from '@/lib/supabase'

// ─── Datos de planes ────────────────────────────────────────────────────────

const plans = [
  {
    id: 'plan_free',
    name: 'Gratis',
    price: 'S/ 0',
    period: '/mes',
    badge: null,
    features: [
      '1 banco conectado',
      'Últimos 30 días de historial',
      'Categorías automáticas',
      'Dashboard de gastos',
    ],
    cta: 'Me interesa',
    highlight: false,
  },
  {
    id: 'plan_pro',
    name: 'Mando Pro',
    price: 'S/ 15',
    period: '/mes',
    badge: 'Más elegido',
    features: [
      'Hasta 3 bancos conectados',
      'Historial completo sin límite',
      'Categorías automáticas + edición',
      'Yape y Plin incluidos',
      'Resumen semanal por notificación',
      'Alertas de gasto inusual',
    ],
    cta: 'Me interesa',
    highlight: true,
  },
]

// ─── Pricing ─────────────────────────────────────────────────────────────────

function Pricing({
  selectedPlan,
  onSelect,
}: {
  selectedPlan: string | null
  onSelect: (id: string) => void
}) {
  return (
    <div id="pricing">
      <h2 className="text-2xl md:text-3xl font-bold text-text-main text-center mb-3">
        Elige tu plan
      </h2>
      <p className="text-text-muted text-center text-sm mb-10">
        Sin compromisos. Sin tarjeta. Solo dinos qué te interesa.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {plans.map((plan) => {
          const isSelected = selectedPlan === plan.id
          return (
            <div
              key={plan.id}
              className={`relative bg-surface rounded-2xl p-7 flex flex-col transition-all duration-200 hover:-translate-y-1 ${
                plan.highlight
                  ? 'border-2 border-accent shadow-lg shadow-accent/10'
                  : 'border border-border hover:shadow-md'
              } ${isSelected ? 'ring-2 ring-accent ring-offset-2' : ''}`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              {/* Header */}
              <div className="mb-5">
                <p className="text-sm font-medium text-text-muted mb-1">{plan.name}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-text-main">{plan.price}</span>
                  <span className="text-text-muted text-sm mb-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-text-main">
                    <span className="text-accent mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => onSelect(plan.id)}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors duration-150 ${
                  plan.highlight
                    ? 'bg-accent hover:bg-accent-hover text-white'
                    : 'bg-bg hover:bg-border text-text-main border border-border'
                } ${isSelected ? 'ring-2 ring-accent ring-offset-1' : ''}`}
              >
                {isSelected ? '✓ Seleccionado' : plan.cta}
              </button>
            </div>
          )
        })}
      </div>

      <p className="text-center text-xs text-text-muted mt-6">
        Precio de lanzamiento bloqueado para early adopters.
      </p>
    </div>
  )
}

// ─── WaitlistForm ─────────────────────────────────────────────────────────────

const planLabels: Record<string, string> = {
  plan_free: 'Gratis — S/ 0/mes',
  plan_pro: 'Mando Pro — S/ 15/mes',
}

function WaitlistForm({ selectedPlan }: { selectedPlan: string | null }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const plan = selectedPlan ?? 'sin_plan'

    track('waitlist_signup', { plan, source: 'landing' })

    const { error: dbError } = await supabase
      .from('waitlist_signups')
      .insert({ email, plan, source: 'landing' })

    if (dbError) {
      setLoading(false)
      if (dbError.code === '23505') {
        setError('Este correo ya está en la lista.')
      } else {
        setError('Algo salió mal. Intenta de nuevo.')
      }
      return
    }

    router.push('/gracias')
  }

  return (
    <div id="waitlist-form" className="max-w-lg mx-auto mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-text-main text-center mb-2">
        Únete a la lista de espera
      </h2>

      {/* Plan seleccionado */}
      {selectedPlan ? (
        <p className="text-center text-sm text-accent mb-6">
          Seleccionaste:{' '}
          <strong>{planLabels[selectedPlan]}</strong> ✓{' '}
          <a href="#pricing" className="underline underline-offset-2 text-text-muted hover:text-text-main">
            cambiar
          </a>
        </p>
      ) : (
        <p className="text-center text-sm text-text-muted mb-6">
          ¿No elegiste un plan?{' '}
          <a href="#pricing" className="underline underline-offset-2 hover:text-text-main">
            Elige uno arriba
          </a>{' '}
          o únete igual — nos avisas después.
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          name="email"
          required
          placeholder="tu@correo.com"
          className="w-full px-4 py-3.5 rounded-xl border border-border bg-surface text-text-main placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />

        {error && (
          <p className="text-sm text-red-500 text-center">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-3.5 rounded-xl text-sm transition-colors duration-150 disabled:opacity-60"
        >
          {loading ? 'Guardando...' : 'Quiero acceso anticipado'}
        </button>
      </form>

      <p className="text-center text-xs text-text-muted mt-4">
        Al registrarte aceptas recibir actualizaciones del producto.
        Sin spam. Te avisamos cuando esté listo, nada más.
      </p>
    </div>
  )
}

// ─── Contenedor principal ─────────────────────────────────────────────────────

export default function PricingAndForm() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handleSelect = (id: string) => {
    setSelectedPlan(id)
    track('plan_selected', { plan: id })
    setTimeout(() => {
      document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <section className="px-6 md:px-8 py-16 md:py-24 bg-highlight">
      <div className="max-w-5xl mx-auto">
        <Pricing selectedPlan={selectedPlan} onSelect={handleSelect} />
        <WaitlistForm selectedPlan={selectedPlan} />
      </div>
    </section>
  )
}
