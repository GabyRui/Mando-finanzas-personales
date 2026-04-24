const steps = [
  {
    number: '01',
    title: 'Tu banco te avisa',
    body: 'Cada vez que pagas con tarjeta, por Yape o por transferencia, tu banco te manda una notificación. Como siempre.',
  },
  {
    number: '02',
    title: 'Mando lo lee',
    body: 'La app detecta esa notificación en segundo plano y extrae el monto, el comercio y la categoría — automáticamente.',
  },
  {
    number: '03',
    title: 'Tú ves claridad',
    body: 'Abres la app cuando quieras y encuentras todos tus gastos del mes organizados, sin haber hecho nada.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="px-6 md:px-8 py-16 md:py-24 bg-surface">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-bold text-text-main text-center mb-12">
          Así funciona
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-7xl font-bold text-accent/20 leading-none mb-4 select-none">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-text-main mb-2">
                {step.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Trust block */}
        <aside className="bg-highlight border border-green-200 rounded-xl p-5 flex gap-3 items-start">
          <span className="text-xl mt-0.5">🔒</span>
          <p className="text-sm text-text-main leading-relaxed">
            <strong>No accedemos a tu cuenta bancaria.</strong> No pedimos usuario ni contraseña.
            Solo leemos las notificaciones que tu banco ya te manda — igual que cuando ves
            "Consumo S/ 45 en Tambo+" en tu pantalla de bloqueo.
          </p>
        </aside>

      </div>
    </section>
  )
}
