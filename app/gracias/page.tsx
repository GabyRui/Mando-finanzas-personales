export default function Gracias() {
  return (
    <main className="bg-bg min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="text-5xl mb-6">✓</div>
        <h1 className="text-2xl font-semibold text-text-main mb-4">
          Ya estás en la lista.
        </h1>
        <p className="text-text-muted leading-relaxed">
          Te avisamos cuando abramos acceso.
          <br />
          Mientras tanto, no tienes que hacer nada.
        </p>
        <p className="mt-8 text-sm text-text-muted">
          <a href="/" className="underline underline-offset-2 hover:text-text-main transition-colors">
            Volver al inicio
          </a>
        </p>
      </div>
    </main>
  )
}
