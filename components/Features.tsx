const features = [
  {
    icon: '🔔',
    title: 'Captura automática',
    body: 'Lee las notificaciones de tu banco en segundo plano. Sin abrir la app, sin hacer nada.',
  },
  {
    icon: '🔒',
    title: 'Sin contraseña bancaria',
    body: 'No pedimos acceso a tu cuenta. Solo procesamos el texto de la notificación.',
  },
  {
    icon: '☕',
    title: 'Gastos hormiga visibles',
    body: 'Esos S/ 8 diarios en café aparecen en tu resumen. Nada se pierde en el ruido.',
  },
  {
    icon: '📊',
    title: 'Reportes mensuales',
    body: 'Un resumen visual del mes: por categoría, por semana, sin tecnicismos.',
  },
  {
    icon: '🚨',
    title: 'Alertas de límite',
    body: 'Te avisamos cuando te acercas al tope que tú mismo defines.',
  },
  {
    icon: '📱',
    title: 'Yape y Plin incluidos',
    body: 'Capturamos los pagos digitales igual que los de tarjeta. Un solo lugar para todo.',
  },
]

export default function Features() {
  return (
    <section id="features" className="px-6 md:px-8 py-16 md:py-24 bg-bg">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-text-main text-center mb-3">
          Todo lo que necesitas. Nada de lo que no.
        </h2>
        <p className="text-text-muted font-normal text-center text-sm mb-12 max-w-xl mx-auto">
          Mando hace una sola cosa bien: registra tus gastos sin que tengas que pensar en ello.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-surface border border-border rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg hover:border-accent/30 transition-all duration-200 cursor-default">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-base font-semibold text-text-main mb-2">{f.title}</h3>
              <p className="text-text-muted font-normal text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
