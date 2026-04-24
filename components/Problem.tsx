const pains = [
  {
    icon: '📊',
    title: '"El Excel de enero"',
    body: 'Lo abres con buenas intenciones el primer día del mes. Para el día 12, ya tiene tres semanas de datos faltantes. Para febrero, ni lo abres.',
  },
  {
    icon: '💸',
    title: '"¿En qué se fue?"',
    body: 'Revisas tu saldo el 25 y te quedan S/ 180 hasta fin de mes. Mentalmente repasas la quincena buscando el gasto grande. No lo encuentras. Fue el ruido de todos los días.',
  },
  {
    icon: '😮‍💨',
    title: '"Mañana empiezo"',
    body: 'Sabes que deberías llevar tus gastos. Llegas a casa a las 8 pm y lo último que quieres es ponerte a capturar datos. Lo dejas para mañana. Mañana también.',
  },
]

export default function Problem() {
  return (
    <section className="px-6 md:px-8 py-16 md:py-24 bg-surface">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-bold text-text-main text-center mb-12">
          ¿Te suena familiar?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="relative bg-surface border border-border rounded-2xl p-6 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-accent/30 transition-all duration-200 cursor-default"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/70 via-accent/30 to-transparent" />
              <div className="text-3xl mb-4">{pain.icon}</div>
              <h3 className="text-base font-semibold text-text-main mb-2">
                {pain.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {pain.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
