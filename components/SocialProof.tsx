const stats = [
  { value: '127', label: 'ya en lista de espera' },
  { value: '5', label: 'bancos compatibles' },
  { value: '0', label: 'contraseñas bancarias' },
  { value: '100%', label: 'automático' },
]

export default function SocialProof() {
  return (
    <section className="bg-accent py-12 px-6 md:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl md:text-4xl font-bold text-white">{s.value}</div>
            <div className="text-white/70 text-sm font-normal mt-1.5">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
