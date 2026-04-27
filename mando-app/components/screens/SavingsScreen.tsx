'use client'
import { useState } from 'react'

const goals = [
  { name: 'Viaje a Cusco', icon: '🏔️', target: 2000, saved: 1250, color: '#C9A760', deadline: 'Jun 2026' },
  { name: 'Laptop nueva',  icon: '💻', target: 3500, saved: 800,  color: '#17C653', deadline: 'Sep 2026' },
  { name: 'Fondo emergencia', icon: '🛡️', target: 5000, saved: 3100, color: '#1A56DB', deadline: 'Dic 2026' },
]

export default function SavingsScreen() {
  const [showAdd, setShowAdd] = useState(false)
  const [goalName, setGoalName] = useState('')
  const [goalTarget, setGoalTarget] = useState('')

  return (
    <div className="animate-slide-up pb-2">
      {/* Header */}
      <div className="bg-navy px-5 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-white/60 text-xs">Plan Premium</p>
            <p className="text-white font-bold text-xl">Alcancía 🐷</p>
          </div>
          <button onClick={() => setShowAdd(true)}
            className="w-9 h-9 rounded-full bg-gold flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
            </svg>
          </button>
        </div>
        {/* Summary */}
        <div className="mt-4 flex gap-3">
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-3">
            <p className="text-white/50 text-xs">Total ahorrado</p>
            <p className="text-white font-bold text-xl">S/ 5,150</p>
          </div>
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-3">
            <p className="text-white/50 text-xs">Meta total</p>
            <p className="text-gold font-bold text-xl">S/ 10,500</p>
          </div>
        </div>
      </div>

      {/* Goals */}
      <div className="px-4 mt-4 space-y-3">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wide">Mis metas</p>
        {goals.map(g => {
          const pct = Math.round((g.saved / g.target) * 100)
          const remaining = g.target - g.saved
          return (
            <div key={g.name} className="card p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${g.color}20` }}>
                  {g.icon}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-text-main text-sm">{g.name}</p>
                  <p className="text-xs text-text-muted">Meta: Jun {g.deadline}</p>
                </div>
                <span className="text-xs font-bold text-text-muted">{pct}%</span>
              </div>

              {/* Progress */}
              <div className="h-2.5 bg-border rounded-full overflow-hidden mb-2">
                <div className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, background: g.color }}/>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-text-muted">
                  Ahorrado: <strong className="text-text-main">S/ {g.saved.toLocaleString()}</strong>
                </span>
                <span className="text-text-muted">
                  Falta: <strong className="text-text-main">S/ {remaining.toLocaleString()}</strong>
                </span>
              </div>

              {/* Monthly suggestion */}
              <div className="mt-3 bg-highlight border border-accent/20 rounded-xl p-2.5 flex items-center gap-2">
                <span className="text-accent text-sm">✨</span>
                <p className="text-xs text-text-muted">
                  Ahorra <strong className="text-text-main">S/ {Math.ceil(remaining/3)}/mes</strong> para cumplir tu meta a tiempo
                </p>
              </div>

              <button className="mt-3 w-full py-2.5 bg-navy text-white text-sm font-bold rounded-xl">
                Añadir ahorro
              </button>
            </div>
          )
        })}
      </div>

      {/* IA insight */}
      <div className="px-4 mt-3">
        <div className="card p-4 border-l-4 border-gold">
          <p className="text-xs font-bold text-gold mb-1">💡 Consejo de tu IA</p>
          <p className="text-sm text-text-muted">
            Si reduces S/ 80 en delivery este mes, podrías adelantar tu viaje a Cusco <strong className="text-text-main">2 semanas antes</strong>.
          </p>
        </div>
      </div>

      {/* Add goal modal */}
      {showAdd && (
        <div className="absolute inset-0 bg-black/50 flex items-end z-50 animate-fade-in" onClick={() => setShowAdd(false)}>
          <div className="w-full bg-white rounded-t-3xl p-6 animate-slide-up" onClick={e => e.stopPropagation()}>
            <div className="w-10 h-1 bg-border rounded-full mx-auto mb-5"/>
            <p className="text-text-main font-bold text-lg mb-4">Nueva meta de ahorro</p>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-text-muted font-semibold mb-1 block">Nombre de la meta</label>
                <input value={goalName} onChange={e => setGoalName(e.target.value)}
                  placeholder="Ej: Viaje a Machu Picchu"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent"/>
              </div>
              <div>
                <label className="text-xs text-text-muted font-semibold mb-1 block">Monto objetivo (S/)</label>
                <input value={goalTarget} onChange={e => setGoalTarget(e.target.value)}
                  placeholder="0.00" type="number"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent"/>
              </div>
              <button onClick={() => setShowAdd(false)}
                className="w-full bg-navy text-white font-bold py-3.5 rounded-xl text-sm">
                Crear alcancía
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
