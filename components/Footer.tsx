export default function Footer() {
  return (
    <footer className="px-6 md:px-8 py-10 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
        <p>© 2026 Mando · Lima, Perú</p>
        <div className="flex gap-5">
          <a href="/privacidad" className="hover:text-text-main transition-colors">
            Política de privacidad
          </a>
          <a href="/terminos" className="hover:text-text-main transition-colors">
            Términos
          </a>
          <a href="mailto:hola@usemando.pe" className="hover:text-text-main transition-colors">
            hola@usemando.pe
          </a>
        </div>
      </div>
    </footer>
  )
}
