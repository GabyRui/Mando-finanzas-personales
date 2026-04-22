'use client'

import { track } from '@/lib/analytics'

const faqs = [
  {
    q: '¿Acceden a mi cuenta bancaria?',
    a: 'No. Nunca pedimos usuario ni contraseña de tu banco. Mando solo lee las notificaciones que tu banco ya te manda al celular — igual que cuando ves "Consumo S/ 45 en Tambo+" en tu pantalla de bloqueo. Ese texto es lo único que procesamos.',
  },
  {
    q: '¿Qué pasa si mi banco no manda notificaciones?',
    a: 'Para que funcione necesitas tener activadas las notificaciones push de tu app bancaria. BCP, Interbank, BBVA Perú, Scotiabank y la mayoría de bancos peruanos las tienen. Si tienes dudas, escríbenos y te ayudamos.',
  },
  {
    q: '¿Mis datos financieros están seguros?',
    a: 'Sí. Los datos se almacenan cifrados y nunca se comparten con terceros. No vendemos información financiera. Punto.',
  },
  {
    q: '¿Qué pasa con los pagos por Yape o Plin?',
    a: 'Yape y Plin generan notificaciones en la mayoría de casos — Mando las captura igual que las de tarjeta. El efectivo es la única excepción real: al no generar notificación, no se registra automáticamente.',
  },
  {
    q: '¿Cuándo estará disponible?',
    a: 'Estamos en fase de desarrollo. Las personas que se registren ahora tendrán acceso prioritario y el precio de lanzamiento bloqueado.',
  },
]

export default function FAQ() {
  return (
    <section className="px-6 md:px-8 py-16 md:py-24 bg-surface border-t border-border">
      <div className="max-w-2xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-semibold text-text-main text-center mb-10">
          Preguntas frecuentes
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <details
              key={i}
              open={i === 0}
              className="group border border-border rounded-xl overflow-hidden"
              onToggle={(e) => {
                if ((e.target as HTMLDetailsElement).open) {
                  track('faq_opened', { question_index: String(i) })
                }
              }}
            >
              <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer select-none hover:bg-bg transition-colors">
                <span className="text-sm font-medium text-text-main">{faq.q}</span>
                <span className="text-text-muted text-lg group-open:rotate-45 transition-transform duration-200 shrink-0">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 pt-1">
                <p className="text-sm text-text-muted leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  )
}
