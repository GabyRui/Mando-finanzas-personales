'use client'
import { useState } from 'react'

const catData = [
  { cat: 'Supermercado', amount: 205.40, pct: 27, icon: '🛒', trend: +5,  color: '#17C653' },
  { cat: 'Crédito (cuotas)', amount: 189.00, pct: 25, icon: '💳', trend: 0,   color: '#1A56DB' },
  { cat: 'Delivery',     amount: 112.90, pct: 15, icon: '🛵', trend: +22, color: '#F97316' },
  { cat: 'Ropa',         amount: 259.00, pct: 14, icon: '👗', trend: -10, color: '#C9A760' },
  { cat: 'Transporte',   amount: 85.50,  pct: 11, icon: '🚗', trend: -3,  color: '#7C3AED' },
  { cat: 'Servicios',    amount: 89.00,  pct: 12, icon: '⚡', trend: +1,  color: '#4B5563' },
]

const monthlyData = [
  { month: 'Ene', amount: 2890 },
  { month: 'Feb', amount: 3120 },
  { month: 'Mar', amount: 2780 },
  { month: 'Abr', amount: 3695 },
]

const maxAmount = Math.max(...monthlyData.map(m => m.amount))

const insights = [
  { icon: '📈', title: 'Delivery en alza', body: 'Gastas 22% más en delivery que el mes pasado. ¿Cocinar más en casa?', type: 'warning' },
  { icon: '✅', title: 'Transporte optimizado', body: 'Bajaste 3% en transporte. ¡Bien hecho!', type: 'success' },
  { icon: '⚠️', title: 'Ropa fuera de presupuesto', body: 'Saga Falabella representó el 70% de tu gasto en ropa este mes.', type: 'warning' },
]

export default function AnalyticsScreen() {
  const [view, setView] = useState<'cat'|'trend'>('cat')

  return (
    <div className="animate-slide-up pb-2">
      {/* Header */}
      <div className="bg-navy px-5 pt-12 pb-6 rounded-b-3xl">
        <p className="text-white/60 text-xs mb-1">Plan Premium · Abril 2026</p>
        <p className="text-white font-bold text-xl">Análisis de patrones</p>
        <div className="flex mt-4 bg-white/10 rounded-xl p-1 gap-1">
          {(['cat','trend'] as const).map((v, idx) => (
            <button key={v} onClick={() => setView(v)}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${view===v ? 'bg-white text-navy' : 'text-white/60'}`}>
              {idx === 0 ? 'Por categoría' : 'Tendencia'}
            </button>
          ))}
        </div>
      </div>

      {view === 'cat' ? (
        <div className="px-4 mt-4 space-y-3">
          <p className="text-xs font-semibold text-text-muted uppercase tracking-wide">Distribución de gastos</p>

          {/* Pie visual (bar-based) */}
          <div className="card p-4">
            <div className="flex h-3 rounded-full overflow-hidden gap-px mb-3">
              {catData.map(c => (
                <div key={c.cat} className="h-full transition-all" style={{ width: `${c.pct}%`, background: c.color }}/>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {catData.map(c => (
                <div key={c.cat} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c.color }}/>
                  <span className="text-xs text-text-muted">{c.cat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Categories detail */}
          <div className="card divide-y divide-border">
            {catData.map(c => (
              <div key={c.cat} className="flex items-center gap-3 p-3.5">
                <span className="text-lg w-8 text-center flex-shrink-0">{c.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-text-main">{c.cat}</span>
                    <span className="text-sm font-bold text-text-main">S/ {c.amount.toFixed(0)}</span>
                  </div>
                  <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: c.color }}/>
                  </div>
                </div>
                <span className={`text-xs font-bold flex-shrink-0 ml-1 ${c.trend > 0 ? 'text-red-500' : c.trend < 0 ? 'text-accent' : 'text-text-muted'}`}>
                  {c.trend > 0 ? `+${c.trend}%` : c.trend < 0 ? `${c.trend}%` : '—'}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="px-4 mt-4 space-y-3">
          <p className="text-xs font-semibold text-text-muted uppercase tracking-wide">Últimos 4 meses</p>
          <div className="card p-4">
            <div className="flex items-end gap-3 h-28">
              {monthlyData.map(m => {
                const h = Math.round((m.amount / maxAmount) * 100)
                const isLast = m.month === 'Abr'
                return (
                  <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-xs font-bold text-text-muted">S/ {(m.amount/1000).toFixed(1)}k</span>
                    <div className="w-full rounded-t-lg transition-all"
                      style={{ height: `${h}%`, background: isLast ? '#1A2540' : '#E9EFF8', border: '1.5px solid #D1D9E6', borderBottom: 'none' }}/>
                    <span className={`text-xs font-semibold ${isLast ? 'text-navy' : 'text-text-muted'}`}>{m.month}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* AI Insights */}
      <div className="px-4 mt-3 space-y-2">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wide">Feedback de tu IA</p>
        {insights.map((ins, i) => (
          <div key={i} className={`card p-3.5 border-l-4 ${ins.type === 'success' ? 'border-accent' : 'border-yellow-400'}`}>
            <div className="flex items-start gap-2.5">
              <span className="text-lg">{ins.icon}</span>
              <div>
                <p className="text-sm font-bold text-text-main">{ins.title}</p>
                <p className="text-xs text-text-muted mt-0.5">{ins.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
