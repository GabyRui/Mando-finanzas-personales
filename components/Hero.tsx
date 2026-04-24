'use client'

import Image from 'next/image'

function openWaitlist() {
  window.dispatchEvent(new Event('open-waitlist'))
}

export default function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden px-6 md:px-8 pt-16 pb-0 md:pt-20">
      {/* Glow tech sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_40%,rgba(34,197,94,0.09)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_30%_80%,rgba(201,167,96,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Texto */}
        <div className="flex-1 text-center md:text-left pb-16 md:pb-24 pt-4">
          <span className="inline-block rounded-full bg-white/10 text-green-300 text-sm font-semibold px-4 py-1.5 mb-8">
            Para jóvenes profesionales en Lima
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Tu banco te avisa.
            <br />
            <span className="text-gold">Nosotros lo registramos.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 font-normal leading-relaxed max-w-md mx-auto md:mx-0 mb-10">
            Tus gastos, organizados solos — sin que hagas nada.
            Sin Excel. Sin ingresar datos. Sin culpa de fin de mes.
          </p>

          <button
            onClick={openWaitlist}
            className="bg-accent hover:bg-accent-hover text-white font-bold text-base px-8 py-4 rounded-xl transition-colors duration-150 shadow-lg shadow-accent/20"
          >
            Quiero acceso anticipado
          </button>

          <p className="mt-6 text-sm text-white/40 font-normal">
            🔒 127 personas ya en lista de espera
          </p>
        </div>

        {/* Mockup animado */}
        <div className="flex-shrink-0 flex justify-center md:justify-end pb-0 md:-mb-4 animate-float">
          <Image
            src="/mockup.png"
            alt="Mando app — pantalla de gastos"
            width={420}
            height={500}
            className="drop-shadow-2xl"
            priority
          />
        </div>

      </div>
    </section>
  )
}
