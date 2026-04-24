export default function Footer() {
  return (
    <footer className="bg-navy px-6 md:px-8 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <p className="text-gold font-semibold text-sm tracking-tight">mando</p>
        <p>© 2026 Mando · Lima, Perú</p>
        <div className="flex gap-5">
          <a href="/privacidad" className="hover:text-white transition-colors">
            Política de privacidad
          </a>
          <a href="/terminos" className="hover:text-white transition-colors">
            Términos
          </a>
          <a href="mailto:hola@usemando.pe" className="hover:text-white transition-colors">
            hola@usemando.pe
          </a>
        </div>
      </div>
    </footer>
  )
}
