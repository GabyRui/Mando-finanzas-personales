'use client'
import { useState } from 'react'

const payments = [
  { card: 'BCP Crédito',      icon: '🔵', due: 5,  amount: 1240.00, minimum: 124.00, color: '#1A56DB', paid: false },
  { card: 'BBVA Crédito',     icon: '🟦', due: 10, amount: 670.00,  minimum: 67.00,  color: '#004481', paid: false },
  { card: 'Interbank Créd.',  icon: '🟢', due: 15, amount: 430.00,  minimum: 43.00,  color: '#00A14E', paid: true  },
]

const DAYS = ['D','L','M','M','J','V','S']
const april2026 = Array.from({length: 30}, (_,i) => i + 1)
const startDay = 3 // April 2026 starts on Wednesday

export default function CalendarScreen() {
  const [selected, setSelected] = useState<number|null>(null)
  const [paidMap, setPaidMap] = useState<Record<string,boolean>>(
    Object.fromEntries(payments.map(p => [p.card, p.paid]))
  )
  const dueDays = new Set(payments.map(p => p.due))

  const togglePaid = (card: string) => setPaidMap(m => ({ ...m, [card]: !m[card] }))

  const selectedPayments = selected ? payments.filter(p => p.due === selected) : []

  return (
    <div className="animate-slide-up pb-2">
      {/* Header */}
      <div className="bg-navy px-5 pt-12 pb-6 rounded-b-3xl">
        <p className="text-white/60 text-xs mb-1">Próximos vencimientos</p>
        <p className="text-white font-bold text-xl">Calendario de pagos</p>
        <p className="text-white/50 text-sm mt-1">Abril 2026</p>
      </div>

      {/* Calendar */}
      <div className="px-4 mt-4">
        <div className="card p-4">
          {/* Day headers */}
          <div className="grid grid-cols-7 mb-2">
            {DAYS.map(d => (
              <div key={d} className="text-center text-xs font-bold text-text-muted py-1">{d}</div>
            ))}
          </div>
          {/* Days */}
          <div className="grid grid-cols-7 gap-y-1">
            {Array.from({length: startDay}).map((_,i) => <div key={`e${i}`}/>)}
            {april2026.map(day => {
              const hasPay = dueDays.has(day)
              const isToday = day === 26
              const isSel = selected === day
              return (
                <button key={day} onClick={() => setSelected(isSel ? null : day)}
                  className={`relative flex flex-col items-center py-1.5 rounded-xl transition-all
                    ${isSel ? 'bg-navy' : isToday ? 'bg-accent/10' : hasPay ? 'bg-gold/10' : 'hover:bg-bg'}
                  `}>
                  <span className={`text-xs font-semibold ${isSel ? 'text-white' : isToday ? 'text-accent' : 'text-text-main'}`}>
                    {day}
                  </span>
                  {hasPay && (
                    <span className={`w-1.5 h-1.5 rounded-full mt-0.5 ${isSel ? 'bg-gold' : 'bg-gold'}`}/>
                  )}
                  {isToday && !hasPay && (
                    <span className="w-1.5 h-1.5 rounded-full mt-0.5 bg-accent"/>
                  )}
                </button>
              )
            })}
          </div>
          {/* Legend */}
          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-gold inline-block"/>
              <span className="text-xs text-text-muted">Vencimiento</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block"/>
              <span className="text-xs text-text-muted">Hoy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected day payments */}
      {selectedPayments.length > 0 && (
        <div className="px-4 mt-3 animate-slide-up">
          <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">
            Vence el {selected} de Abril
          </p>
          {selectedPayments.map(p => (
            <div key={p.card} className="card p-4 mb-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{p.icon}</span>
                <div className="flex-1">
                  <p className="font-bold text-text-main text-sm">{p.card}</p>
                  <p className="text-xs text-text-muted">Fecha corte: {p.due} de cada mes</p>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${paidMap[p.card] ? 'bg-highlight text-accent' : 'bg-red-50 text-red-500'}`}>
                  {paidMap[p.card] ? '✓ Pagado' : 'Pendiente'}
                </span>
              </div>
              <div className="flex justify-between text-sm mb-3">
                <div>
                  <p className="text-xs text-text-muted">Total a pagar</p>
                  <p className="font-bold text-text-main">S/ {p.amount.toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-text-muted">Pago mínimo</p>
                  <p className="font-bold text-yellow-500">S/ {p.minimum.toFixed(2)}</p>
                </div>
              </div>
              <button onClick={() => togglePaid(p.card)}
                className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all ${paidMap[p.card]
                  ? 'bg-bg text-text-muted border border-border'
                  : 'bg-navy text-white shadow-md'}`}>
                {paidMap[p.card] ? 'Marcar como pendiente' : 'Marcar como pagado'}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* All upcoming */}
      <div className="px-4 mt-3">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Resumen del mes</p>
        <div className="card divide-y divide-border">
          {payments.map(p => (
            <div key={p.card} className="flex items-center gap-3 p-3.5">
              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: p.color }}/>
              <span className="text-sm flex-1 font-semibold text-text-main">{p.card}</span>
              <span className="text-xs text-text-muted mr-2">Vence día {p.due}</span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${paidMap[p.card] ? 'bg-highlight text-accent' : 'bg-red-50 text-red-500'}`}>
                {paidMap[p.card] ? '✓' : `S/ ${p.amount.toFixed(0)}`}
              </span>
            </div>
          ))}
        </div>
        <div className="card p-4 mt-2.5 flex justify-between items-center">
          <p className="text-sm text-text-muted">Total por pagar</p>
          <p className="font-bold text-text-main text-base">
            S/ {payments.filter(p => !paidMap[p.card]).reduce((s,p) => s+p.amount, 0).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}
