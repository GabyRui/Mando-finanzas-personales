'use client'
import { useState } from 'react'

const initialBudgets = [
  { cat: 'Supermercado', icon: '🛒', budget: 250, spent: 205.40, ai: true  },
  { cat: 'Delivery',     icon: '🛵', budget: 80,  spent: 112.90, ai: true  },
  { cat: 'Transporte',   icon: '🚗', budget: 100, spent: 85.50,  ai: false },
  { cat: 'Entretenim.',  icon: '🎬', budget: 100, spent: 85.90,  ai: false },
  { cat: 'Cafetería',    icon: '☕', budget: 60,  spent: 22.50,  ai: true  },
  { cat: 'Ropa',         icon: '👗', budget: 150, spent: 259.00, ai: false },
  { cat: 'Salud',        icon: '💊', budget: 100, spent: 67.00,  ai: false },
]

export default function BudgetScreen() {
  const [budgets, setBudgets] = useState(initialBudgets)
  const [editing, setEditing] = useState<string|null>(null)
  const [editVal, setEditVal] = useState('')

  const totalBudget = budgets.reduce((s, b) => s + b.budget, 0)
  const totalSpent = budgets.reduce((s, b) => s + b.spent, 0)

  const saveEdit = (cat: string) => {
    const val = parseFloat(editVal)
    if (!isNaN(val) && val > 0) {
      setBudgets(bs => bs.map(b => b.cat === cat ? { ...b, budget: val } : b))
    }
    setEditing(null)
  }

  return (
    <div className="animate-slide-up pb-2">
      {/* Header */}
      <div className="bg-navy px-5 pt-12 pb-6 rounded-b-3xl">
        <p className="text-white/60 text-xs mb-1">Plan Premium · Abril 2026</p>
        <p className="text-white font-bold text-xl">Presupuestos</p>
        <div className="mt-4 flex gap-3">
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-3">
            <p className="text-white/50 text-xs">Presupuesto</p>
            <p className="text-white font-bold text-lg">S/ {totalBudget.toLocaleString()}</p>
          </div>
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-3">
            <p className="text-white/50 text-xs">Gastado</p>
            <p className={`font-bold text-lg ${totalSpent > totalBudget ? 'text-red-400' : 'text-accent'}`}>
              S/ {totalSpent.toFixed(0)}
            </p>
          </div>
        </div>
        {/* Overall progress */}
        <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all"
            style={{ width: `${Math.min((totalSpent/totalBudget)*100,100)}%`, background: totalSpent > totalBudget ? '#EF4444' : '#17C653' }}/>
        </div>
        <p className="text-white/40 text-xs mt-1.5">
          {Math.round((totalSpent/totalBudget)*100)}% del presupuesto total usado
        </p>
      </div>

      {/* IA suggestion banner */}
      <div className="px-4 mt-4">
        <div className="card p-3.5 flex items-start gap-2.5 border border-accent/20 bg-highlight">
          <span className="text-accent text-base">✨</span>
          <div>
            <p className="text-xs font-bold text-text-main">Presupuestos sugeridos por IA</p>
            <p className="text-xs text-text-muted mt-0.5">Basados en tu historial de los últimos 3 meses. Puedes ajustar cada uno.</p>
          </div>
        </div>
      </div>

      {/* Budget items */}
      <div className="px-4 mt-3 space-y-2.5">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wide">Por categoría</p>
        {budgets.map(b => {
          const pct = Math.round((b.spent / b.budget) * 100)
          const over = b.spent > b.budget
          const warn = pct >= 80 && !over
          const barColor = over ? '#EF4444' : warn ? '#EAB308' : '#17C653'

          return (
            <div key={b.cat} className="card p-4">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-lg">{b.icon}</span>
                <span className="text-sm font-semibold text-text-main flex-1">{b.cat}</span>
                {b.ai && (
                  <span className="text-[9px] bg-highlight text-accent font-bold px-1.5 py-0.5 rounded-full border border-accent/20">IA</span>
                )}
                {over && <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">Excedido</span>}
              </div>

              <div className="h-2 bg-border rounded-full overflow-hidden mb-2">
                <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(pct,100)}%`, background: barColor }}/>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-text-muted">
                  S/ {b.spent.toFixed(0)} <span className="text-border">/</span>
                </span>

                {editing === b.cat ? (
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-text-muted">S/</span>
                    <input autoFocus value={editVal} onChange={e => setEditVal(e.target.value)}
                      onBlur={() => saveEdit(b.cat)} onKeyDown={e => e.key==='Enter' && saveEdit(b.cat)}
                      className="w-20 border border-accent rounded-lg px-2 py-1 text-xs text-text-main outline-none text-right"/>
                  </div>
                ) : (
                  <button onClick={() => { setEditing(b.cat); setEditVal(String(b.budget)) }}
                    className="flex items-center gap-1 text-xs text-text-muted hover:text-accent transition-colors">
                    <span>S/ {b.budget}</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
