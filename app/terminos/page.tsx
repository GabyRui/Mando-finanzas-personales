export const metadata = {
  title: 'Términos y Condiciones — Mando',
}

const sections = [
  {
    title: '1. Aceptación de los términos',
    body: 'Al registrarte o usar Mando, aceptas estos Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, no uses el servicio.',
  },
  {
    title: '2. Descripción del servicio',
    body: 'Mando es una aplicación de registro pasivo de gastos que procesa las notificaciones bancarias del usuario para categorizar y mostrar sus movimientos financieros. El servicio está actualmente en fase de lista de espera (pre-lanzamiento) y su disponibilidad puede cambiar.',
  },
  {
    title: '3. Acceso a datos bancarios',
    body: 'Mando no solicita ni almacena contraseñas bancarias, credenciales de acceso, ni accede directamente a cuentas bancarias. El procesamiento se realiza únicamente sobre el texto de las notificaciones push que el banco ya envía al dispositivo del usuario.',
  },
  {
    title: '4. Uso aceptable',
    body: 'El usuario se compromete a usar Mando exclusivamente para fines personales y legítimos. Está prohibido intentar acceder a datos de otros usuarios, realizar ingeniería inversa del servicio, o usar la plataforma para actividades fraudulentas.',
  },
  {
    title: '5. Propiedad intelectual',
    body: 'Todos los contenidos del servicio — incluyendo diseño, código, textos y marca — son propiedad de Mando. Queda prohibida su reproducción total o parcial sin autorización expresa.',
  },
  {
    title: '6. Limitación de responsabilidad',
    body: 'Mando se provee "tal como está". No garantizamos disponibilidad continua ni la exactitud total del procesamiento automático. No somos responsables por decisiones financieras tomadas en base a la información mostrada en la app.',
  },
  {
    title: '7. Modificaciones',
    body: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos por correo electrónico ante cambios importantes. El uso continuado del servicio implica la aceptación de los términos actualizados.',
  },
  {
    title: '8. Ley aplicable',
    body: 'Estos términos se rigen por las leyes de la República del Perú. Cualquier disputa se someterá a la jurisdicción de los tribunales de Lima.',
  },
  {
    title: '9. Contacto',
    body: 'Para consultas sobre estos términos, escríbenos a hola@usemando.pe.',
  },
]

export default function Terminos() {
  return (
    <main className="bg-bg min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">

        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-main transition-colors mb-10"
        >
          ← Volver al inicio
        </a>

        <span className="text-gold font-bold text-base block mb-2">mando</span>
        <h1 className="text-3xl md:text-4xl font-bold text-text-main mb-3">
          Términos y Condiciones
        </h1>
        <p className="text-text-muted text-sm font-normal mb-12">
          Última actualización: abril 2026
        </p>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-base font-semibold text-text-main mb-2">{s.title}</h2>
              <p className="text-text-muted text-sm leading-relaxed font-normal">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border text-xs text-text-muted font-normal">
          © 2026 Mando · Lima, Perú ·{' '}
          <a href="/privacidad" className="underline underline-offset-2 hover:text-text-main">
            Política de privacidad
          </a>
        </div>

      </div>
    </main>
  )
}
