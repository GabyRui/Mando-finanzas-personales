export default function Hero() {
  return (
    <section className="px-6 md:px-8 pt-20 pb-20 md:pt-28 md:pb-28">
      <div className="max-w-3xl mx-auto text-center">

        {/* Badge */}
        <span className="inline-block rounded-full bg-highlight text-accent text-sm font-medium px-4 py-1.5 mb-8">
          Para jóvenes profesionales en Lima
        </span>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main leading-tight tracking-tight mb-6">
          Tu banco te avisa.
          <br />
          <span className="text-accent">Nosotros lo registramos.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-xl mx-auto mb-10">
          Tus gastos, organizados solos — sin que hagas nada.
          Sin Excel. Sin ingresar datos. Sin culpa de fin de mes.
        </p>

        {/* CTA */}
        <a
          href="#pricing"
          className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors duration-150"
        >
          Quiero acceso anticipado
        </a>

        {/* Social proof */}
        <p className="mt-6 text-sm text-text-muted">
          🔒 127 personas ya en lista de espera
        </p>

      </div>
    </section>
  )
}
