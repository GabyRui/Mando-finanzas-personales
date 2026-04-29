'use client'
import { useState, useRef, useEffect } from 'react'

type Msg = { role: 'user' | 'bot'; text: string }

const presets = [
  '¿Cuánto gasté en delivery?',
  '¿En qué categoría gasto más?',
  '¿Cómo puedo ahorrar más?',
  '¿Cuándo vence mi tarjeta BCP?',
]

const botReplies: Record<string, string> = {
  '¿Cuánto gasté en delivery?': 'Este mes gastaste S/ 112.90 en delivery (Rappi principalmente). Eso representa un 22% más que el mes pasado. 📈\n\n¿Quieres que te ayude a establecer un límite mensual para delivery?',
  '¿En qué categoría gasto más?': 'Tu mayor gasto este mes es en **Supermercado** con S/ 205.40 (27% del total). Le siguen Ropa con S/ 259 y Cuotas de crédito con S/ 189.\n\n¿Te gustaría establecer un presupuesto para alguna categoría?',
  '¿Cómo puedo ahorrar más?': 'Basado en tus patrones, te sugiero:\n\n1. 🛵 Limitar delivery a 2 veces/semana → ahorro de S/ 60/mes\n2. ☕ Reducir cafeterías → ahorro de S/ 45/mes\n3. 📺 Revisar suscripciones activas\n\nTotal potencial: **S/ 105/mes** más de ahorro.',
  '¿Cuándo vence mi tarjeta BCP?': 'Tu tarjeta BCP Crédito vence el **5 de mayo**. El monto total es S/ 1,240.00 y el pago mínimo es S/ 124.00.\n\n¿Quiero recordarte 3 días antes? 🔔',
}

const defaultReply = 'Entendido. Estoy analizando tus finanzas... 🤔\n\nPuedo ayudarte con consultas sobre tus gastos, presupuestos, pagos de tarjetas y consejos de ahorro. ¿Qué necesitas saber?'

export default function ChatbotScreen() {
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: 'bot', text: '¡Hola Gabriela! 👋 Soy tu asistente financiero de mando. Puedo ayudarte a entender tus gastos, darte consejos de ahorro y responder preguntas sobre tus finanzas. ¿En qué te ayudo hoy?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, loading])

  const send = (text: string) => {
    if (!text.trim() || loading) return
    const userMsg: Msg = { role: 'user', text }
    setMsgs(m => [...m, userMsg])
    setInput('')
    setLoading(true)
    setTimeout(() => {
      const reply = botReplies[text] ?? defaultReply
      setMsgs(m => [...m, { role: 'bot', text: reply }])
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col h-full animate-fade-in">
      {/* Header */}
      <div className="bg-navy px-5 pt-12 pb-4 rounded-b-3xl flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
            <span className="text-lg">🤖</span>
          </div>
          <div>
            <p className="text-white font-bold text-base">Mando IA</p>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent robot-ping"/>
              <p className="text-accent text-xs font-semibold">En línea</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto chat-scroll px-4 py-3 space-y-3">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}>
            {m.role === 'bot' && (
              <div className="w-7 h-7 rounded-full bg-navy flex items-center justify-center text-sm flex-shrink-0 mr-2 mt-1">🤖</div>
            )}
            <div className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line
              ${m.role === 'user'
                ? 'bg-navy text-white rounded-tr-sm'
                : 'bg-white text-text-main shadow-sm border border-border rounded-tl-sm'}`}>
              {m.text.replace(/\*\*(.*?)\*\*/g, '$1')}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start animate-fade-in">
            <div className="w-7 h-7 rounded-full bg-navy flex items-center justify-center text-sm mr-2">🤖</div>
            <div className="bg-white border border-border rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5 items-center">
              {[0,1,2].map(i => (
                <span key={i} className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: `${i*0.15}s` }}/>
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef}/>
      </div>

      {/* Quick presets */}
      <div className="px-4 pb-2 flex-shrink-0">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {presets.map(p => (
            <button key={p} onClick={() => send(p)}
              className="flex-shrink-0 text-xs bg-white border border-border text-text-muted font-semibold px-3 py-1.5 rounded-full hover:border-accent hover:text-accent transition-all">
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="px-4 pb-4 flex-shrink-0">
        <div className="flex items-center gap-2 bg-white border border-border rounded-2xl px-4 py-2.5 shadow-sm">
          <input value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send(input)}
            placeholder="Escribe tu pregunta..."
            className="flex-1 text-sm text-text-main outline-none bg-transparent"/>
          <button onClick={() => send(input)} disabled={!input.trim() || loading}
            className="w-8 h-8 rounded-full bg-navy flex items-center justify-center flex-shrink-0 disabled:opacity-30 transition-opacity">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
