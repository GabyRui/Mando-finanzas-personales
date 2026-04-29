'use client'
import { useState } from 'react'

const categories = ['Todos', 'Supermercado', 'Delivery', 'Transporte', 'Entretenimiento', 'Salud', 'Ropa', 'Servicios', 'Cafetería', 'Ingreso']

const allTx = [
  { merchant: 'Plaza Vea',        cat: 'Supermercado',    amount: -85.40,  method: 'BCP Débito',      icon: '🛒', date: 'Hoy',    time: '14:32', ai: true  },
  { merchant: 'Rappi',            cat: 'Delivery',         amount: -42.90,  method: 'Yape',            icon: '🛵', date: 'Hoy',    time: '12:15', ai: true  },
  { merchant: 'Cineplanet',       cat: 'Entretenimiento',  amount: -38.00,  method: 'BCP Crédito',     icon: '🎬', date: 'Ayer',   time: '20:00', ai: true  },
  { merchant: 'Starbucks',        cat: 'Cafetería',        amount: -22.50,  method: 'Plin',            icon: '☕', date: 'Ayer',   time: '09:45', ai: true  },
  { merchant: 'InDriver',         cat: 'Transporte',       amount: -12.00,  method: 'Yape',            icon: '🚗', date: 'Ayer',   time: '08:10', ai: true  },
  { merchant: 'Farmacia InkaFarma', cat: 'Salud',          amount: -67.00,  method: 'Interbank Créd.', icon: '💊', date: '24 Abr', time: '16:00', ai: true  },
  { merchant: 'Saga Falabella',   cat: 'Ropa',             amount: -259.00, method: 'BBVA Crédito',    icon: '👗', date: '23 Abr', time: '13:30', ai: true  },
  { merchant: 'Netflix',          cat: 'Entretenimiento',  amount: -47.90,  method: 'BCP Crédito',     icon: '📺', date: '22 Abr', time: '00:00', ai: true  },
  { merchant: 'Uber',             cat: 'Transporte',       amount: -18.50,  method: 'Yape',            icon: '🚕', date: '22 Abr', time: '19:45', ai: true  },
  { merchant: 'Wong',             cat: 'Supermercado',     amount: -120.00, method: 'BCP Débito',      icon: '🛒', date: '21 Abr', time: '11:00', ai: true  },
  { merchant: 'Recibo Luz Enel',  cat: 'Servicios',        amount: -89.00,  method: 'BCP Débito',      icon: '⚡', date: '20 Abr', time: '09:00', ai: true  },
  { merchant: 'Sueldo BCP',       cat: 'Ingreso',          amount: +4500.00,method: 'BCP Débito',      icon: '💰', date: '01 Abr', time: '09:00', ai: false },
]

export default function TransactionsScreen() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('Todos')
  const [showAdd, setShowAdd] = useState(false)
  const [newMerchant, setNewMerchant] = useState('')
  const [newAmount, setNewAmount] = useState('')

  const filtered = allTx.filter(tx => {
    const matchCat = cat === 'Todos' || tx.cat === cat
    const matchSearch = tx.merchant.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const grouped: Record<string, typeof allTx> = {}
  filtered.forEach(tx => {
    if (!grouped[tx.date]) grouped[tx.date] = []
    grouped[tx.date].push(tx)
  })

  return (
    <div className="animate-slide-up pb-2">
      {/* Header */}
      <div className="bg-navy px-5 pt-12 pb-5 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/60 text-xs">Abril 2026</p>
            <p className="text-white font-bold text-xl">Movimientos</p>
          </div>
          <button onClick={() => setShowAdd(true)}
            className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/30">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
            </svg>
          </button>
        </div>
        {/* Search */}
        <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2.5">
          <svg className="w-4 h-4 text-white/40 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/>
          </svg>
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Buscar gasto..."
            className="bg-transparent text-white text-sm placeholder-white/40 outline-none flex-1"/>
        </div>
      </div>

      {/* Category filter */}
      <div className="px-4 mt-3 overflow-x-auto flex gap-2 pb-1">
        {categories.map(c => (
          <button key={c} onClick={() => setCat(c)}
            className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full font-semibold transition-all ${cat===c ? 'bg-navy text-white' : 'bg-white text-text-muted border border-border'}`}>
            {c}
          </button>
        ))}
      </div>

      {/* Grouped transactions */}
      <div className="px-4 mt-3 space-y-4">
        {Object.entries(grouped).map(([date, txs]) => (
          <div key={date}>
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">{date}</p>
            <div className="card divide-y divide-border">
              {txs.map((tx, i) => (
                <div key={i} className="flex items-center gap-3 p-3">
                  <div className="w-9 h-9 rounded-xl bg-bg flex items-center justify-center text-lg flex-shrink-0">{tx.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-semibold text-text-main truncate">{tx.merchant}</p>
                      {tx.ai && (
                        <span className="flex-shrink-0 text-[9px] bg-highlight text-accent font-bold px-1.5 py-0.5 rounded-full border border-accent/20">IA</span>
                      )}
                    </div>
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
        ))}
      </div>

      {/* Add modal */}
      {showAdd && (
        <div className="absolute inset-0 bg-black/50 flex items-end z-50 animate-fade-in" onClick={() => setShowAdd(false)}>
          <div className="w-full bg-white rounded-t-3xl p-6 animate-slide-up" onClick={e => e.stopPropagation()}>
            <div className="w-10 h-1 bg-border rounded-full mx-auto mb-5"/>
            <p className="text-text-main font-bold text-lg mb-4">Registrar gasto</p>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-text-muted font-semibold mb-1 block">Comercio</label>
                <input value={newMerchant} onChange={e => setNewMerchant(e.target.value)}
                  placeholder="¿Dónde compraste?"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm text-text-main outline-none focus:ring-2 focus:ring-accent"/>
              </div>
              <div>
                <label className="text-xs text-text-muted font-semibold mb-1 block">Monto (S/)</label>
                <input value={newAmount} onChange={e => setNewAmount(e.target.value)}
                  placeholder="0.00" type="number"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm text-text-main outline-none focus:ring-2 focus:ring-accent"/>
              </div>
              <div className="bg-highlight border border-accent/20 rounded-xl p-3 flex items-start gap-2">
                <span className="text-accent text-sm">✨</span>
                <p className="text-xs text-text-muted">La IA categorizará tu gasto automáticamente al guardarlo.</p>
              </div>
              <button onClick={() => setShowAdd(false)}
                className="w-full bg-navy text-white font-bold py-3.5 rounded-xl text-sm transition hover:bg-navy/90">
                Guardar gasto
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
