export const metadata = {
  title: 'Política de Privacidad — Mando',
}

const sections = [
  {
    title: '1. Responsable del tratamiento',
    body: 'Mando es el responsable del tratamiento de tus datos personales. Puedes contactarnos en hola@usemando.pe para cualquier consulta relacionada con tu privacidad.',
  },
  {
    title: '2. Datos que recopilamos',
    body: 'Recopilamos únicamente tu correo electrónico al registrarte en la lista de espera. En la app, procesamos el texto de las notificaciones push bancarias de tu dispositivo para identificar montos, comercios y categorías de gasto. No recopilamos contraseñas, números de cuenta, ni credenciales bancarias de ningún tipo.',
  },
  {
    title: '3. Cómo usamos tus datos',
    body: 'Tu correo electrónico se usa exclusivamente para enviarte actualizaciones del producto y notificarte el acceso cuando lancemos. El contenido de las notificaciones bancarias se procesa para generar tu historial de gastos personal y mostrártelo en la app.',
  },
  {
    title: '4. Con quién compartimos tus datos',
    body: 'No vendemos ni compartimos tus datos financieros con terceros. Podemos usar servicios técnicos de terceros (como proveedores de infraestructura cloud) para operar el servicio, quienes están sujetos a acuerdos de confidencialidad.',
  },
  {
    title: '5. Seguridad',
    body: 'Todos los datos se almacenan cifrados en tránsito y en reposo. Aplicamos medidas técnicas y organizativas para proteger tu información contra acceso no autorizado, pérdida o alteración.',
  },
  {
    title: '6. Retención de datos',
    body: 'Conservamos tus datos mientras tengas una cuenta activa o hasta que solicites su eliminación. Puedes solicitar la eliminación de tus datos escribiéndonos a hola@usemando.pe.',
  },
  {
    title: '7. Tus derechos',
    body: 'Conforme a la Ley N° 29733 de Protección de Datos Personales del Perú, tienes derecho a acceder, rectificar, cancelar y oponerte al tratamiento de tus datos. Para ejercer estos derechos, escríbenos a hola@usemando.pe.',
  },
  {
    title: '8. Cookies',
    body: 'Nuestro sitio web usa cookies de analítica (Vercel Analytics) para entender cómo los usuarios interactúan con la página. No usamos cookies de publicidad ni de seguimiento cross-site.',
  },
  {
    title: '9. Cambios a esta política',
    body: 'Podemos actualizar esta política ocasionalmente. Ante cambios significativos, te notificaremos por correo electrónico. La fecha de última actualización siempre estará visible al inicio del documento.',
  },
  {
    title: '10. Contacto',
    body: 'Para cualquier consulta relacionada con tu privacidad o el tratamiento de tus datos, escríbenos a hola@usemando.pe. Respondemos en un plazo máximo de 5 días hábiles.',
  },
]

export default function Privacidad() {
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
          Política de Privacidad
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
          <a href="/terminos" className="underline underline-offset-2 hover:text-text-main">
            Términos y condiciones
          </a>
        </div>

      </div>
    </main>
  )
}
