'use client'
import { useState } from 'react'

const paymentMethods = [
  { name: 'Yape',            icon: '💜', spent: 320.50, limit: 500,  color: '#7C3AED', type: 'wallet' },
  { name: 'Plin',            icon: '💙', spent: 145.00, limit: 300,  color: '#3B82F6', type: 'wallet' },
  { name: 'BCP Débito',      icon: '🟠', spent: 890.00, limit: 1500, color: '#F97316', type: 'debit'  },
  { name: 'BCP Crédito',     icon: '🔵', spent: 1240.00,limit: 2000, color: '#1A56DB', type: 'credit' },
  { name: 'BBVA Crédito',    icon: '🟦', spent: 670.00, limit: 1500, color: '#004481', type: 'credit' },
  { name: 'Interbank Créd.', icon: '🟢', spent: 430.00, limit: 1200, color: '#00A14E', type: 'credit' },
]

const recentTx = [
  { merchant: 'Plaza Vea',       cat: 'Supermercado', amount: -85.40,  method: 'BCP Débito',   icon: '🛒', time: 'Hoy 14:32' },
  { merchant: 'Rappi',           cat: 'Delivery',     amount: -42.90,  method: 'Yape',         icon: '🛵', time: 'Hoy 12:15' },
  { merchant: 'Cineplanet',      cat: 'Entretenim.',  amount: -38.00,  method: 'BCP Crédito',  icon: '🎬', time: 'Ayer 20:00' },
  { merchant: 'Starbucks',       cat: 'Cafetería',    amount: -22.50,  method: 'Plin',         icon: '☕', time: 'Ayer 09:45' },
  { merchant: 'InDriver',        cat: 'Transporte',   amount: -12.00,  method: 'Yape',         icon: '🚗', time: 'Ayer 08:10' },
  { merchant: 'Sueldo BCP',      cat: 'Ingreso',      amount: +4500.00,method: 'BCP Débito',   icon: '💰', time: '01 Abr' },
]

const alerts = [
  { method: 'BCP Crédito', pct: 62, status: 'yellow', msg: 'Llevas el 62% de tu límite' },
  { method: 'Yape',        pct: 64, status: 'yellow', msg: 'Llevas el 64% de tu límite' },
  { method: 'BBVA Crédito',pct: 45, status: 'green',  msg: 'Gasto bajo control' },
]

const statusColor: Record<string, string> = {
  green:  'bg-accent glow-green',
  yellow: 'bg-yellow-400 glow-yellow',
  red:    'bg-red-500 glow-red',
}
const statusLabel: Record<string, string> = {
  green: '🟢 Bajo control', yellow: '🟡 Precaución', red: '🔴 Excedido',
}

export default function HomeScreen() {
  const [tab, setTab] = useState<'all'|'wallet'|'debit'|'credit'>('all')
  const totalSpent = paymentMethods.reduce((s, m) => s + m.spent, 0)
  const filtered = tab === 'all' ? paymentMethods : paymentMethods.filter(m => m.type === tab)

  return (
    <div className="animate-slide-up space-y-4 pb-2">
      {/* Header */}
      <div className="bg-navy px-5 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/60 text-xs">Hola, 👋</p>
            <p className="text-white font-bold text-lg leading-tight">Gabriela</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-accent rounded-full border-2 border-navy robot-ping"/>
            </button>
            <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-sm">G</div>
          </div>
        </div>

        {/* Total */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <p className="text-white/50 text-xs mb-1">Gasto total · Abril 2026</p>
          <p className="text-white font-bold text-3xl">S/ {totalSpent.toLocaleString('es-PE', { minimumFractionDigits: 2 })}</p>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full" style={{ width: `${Math.min((totalSpent/6000)*100,100)}%` }}/>
            </div>
            <span className="text-white/50 text-xs">S/ 6,000 meta</span>
          </div>
        </div>
      </div>

      {/* Semáforo rápido */}
      <div className="px-4">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Semáforo de gastos</p>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {alerts.map(a => (
            <div key={a.method} className="card flex-shrink-0 p-3 flex items-center gap-2.5 min-w-[160px]">
              <div className={`w-3 h-3 rounded-full flex-shrink-0 ${statusColor[a.status]}`}/>
              <div>
                <p className="text-xs font-semibold text-text-main">{a.method}</p>
                <p className="text-xs text-text-muted">{a.msg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gastos por medio de pago */}
      <div className="px-4">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Por medio de pago</p>

        {/* Tabs */}
        <div className="flex gap-1.5 mb-3">
          {([['all','Todos'],['wallet','Billeteras'],['debit','Débito'],['credit','Crédito']] as const).map(([k,l]) => (
            <button key={k} onClick={() => setTab(k)}
              className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all ${tab===k ? 'bg-navy text-white' : 'bg-white text-text-muted border border-border'}`}>
              {l}
            </button>
          ))}
        </div>

        <div className="space-y-2.5">
          {filtered.map(m => {
            const pct = Math.round((m.spent / m.limit) * 100)
            const barColor = pct >= 85 ? '#EF4444' : pct >= 60 ? '#EAB308' : '#17C653'
            return (
              <div key={m.name} className="card p-4">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{m.icon}</span>
                    <span className="text-sm font-semibold text-text-main">{m.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-text-main">S/ {m.spent.toLocaleString('es-PE',{minimumFractionDigits:2})}</span>
                    <span className="text-xs text-text-muted"> / {m.limit.toLocaleString()}</span>
                  </div>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width:`${Math.min(pct,100)}%`, background: barColor }}/>
                </div>
                <p className="text-xs text-text-muted mt-1">{pct}% del límite usado</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Últimas transacciones */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold text-text-muted uppercase tracking-wide">Últimas transacciones</p>
          <button className="text-xs text-accent font-semibold">Ver todas</button>
        </div>
        <div className="card divide-y divide-border">
          {recentTx.map((tx, i) => (
            <div key={i} className="flex items-center gap-3 p-3">
              <div className="w-9 h-9 rounded-xl bg-bg flex items-center justify-center text-lg flex-shrink-0">{tx.icon}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text-main truncate">{tx.merchant}</p>
                <p className="text-xs text-text-muted">{tx.cat} · {tx.method}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className={`text-sm font-bold ${tx.amount > 0 ? 'text-accent' : 'text-text-main'}`}>
                  {tx.amount > 0 ? '+' : ''}S/ {Math.abs(tx.amount).toFixed(2)}
                </p>
                <p className="text-xs text-text-muted">{tx.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
