'use client'
import { useState } from 'react'

const months = ['Enero','Febrero','Marzo','Abril']
const fields = ['Fecha','Comercio','Categoría','Monto','Medio de pago']

export default function ExportScreen() {
  const [month, setMonth] = useState('Abril')
  const [selected, setSelected] = useState(new Set(fields))
  const [format, setFormat] = useState<'excel'|'csv'>('excel')
  const [exported, setExported] = useState(false)

  const toggle = (f: string) => {
    setSelected(s => {
      const n = new Set(s)
      n.has(f) ? n.delete(f) : n.add(f)
      return n
    })
  }

  const handleExport = () => {
    setExported(true)
    setTimeout(() => setExported(false), 3000)
  }

  const preview = [
    ['26/04/2026','Plaza Vea','Supermercado','85.40','BCP Débito'],
    ['26/04/2026','Rappi','Delivery','42.90','Yape'],
    ['25/04/2026','Cineplanet','Entretenimiento','38.00','BCP Crédito'],
    ['25/04/2026','Starbucks','Cafetería','22.50','Plin'],
  ]

  return (
    <div className="animate-slide-up pb-2">
      {/* Header */}
      <div className="bg-navy px-5 pt-12 pb-6 rounded-b-3xl">
        <p className="text-white/60 text-xs mb-1">Plan Premium</p>
        <p className="text-white font-bold text-xl">Exportar a Excel 📊</p>
      </div>

      <div className="px-4 mt-4 space-y-4">
        {/* Period */}
        <div className="card p-4">
          <p className="text-xs font-bold text-text-muted uppercase tracking-wide mb-3">Período</p>
          <div className="grid grid-cols-2 gap-2">
            {months.map(m => (
              <button key={m} onClick={() => setMonth(m)}
                className={`py-2.5 rounded-xl text-sm font-semibold transition-all border ${month===m ? 'bg-navy text-white border-navy' : 'bg-bg text-text-muted border-border'}`}>
                {m} 2026
              </button>
            ))}
          </div>
        </div>

        {/* Format */}
        <div className="card p-4">
          <p className="text-xs font-bold text-text-muted uppercase tracking-wide mb-3">Formato</p>
          <div className="flex gap-2">
            {(['excel','csv'] as const).map(f => (
              <button key={f} onClick={() => setFormat(f)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-semibold transition-all ${format===f ? 'bg-navy text-white border-navy' : 'bg-bg text-text-muted border-border'}`}>
                <span>{f === 'excel' ? '📗' : '📄'}</span>
                {f === 'excel' ? 'Excel (.xlsx)' : 'CSV (.csv)'}
              </button>
            ))}
          </div>
        </div>

        {/* Columns */}
        <div className="card p-4">
          <p className="text-xs font-bold text-text-muted uppercase tracking-wide mb-3">Columnas a incluir</p>
          <div className="space-y-2">
            {fields.map(f => (
              <button key={f} onClick={() => toggle(f)}
                className="w-full flex items-center gap-3 py-2 px-1 rounded-xl hover:bg-bg transition-colors">
                <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${selected.has(f) ? 'bg-navy border-navy' : 'border-border'}`}>
                  {selected.has(f) && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  )}
                </div>
                <span className="text-sm text-text-main font-medium">{f}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div className="card p-4 overflow-hidden">
          <p className="text-xs font-bold text-text-muted uppercase tracking-wide mb-3">Vista previa</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  {fields.filter(f => selected.has(f)).map(f => (
                    <th key={f} className="text-left text-text-muted font-semibold pb-2 pr-3 whitespace-nowrap">{f}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {preview.map((row, i) => {
                  const cols = row.filter((_, ci) => selected.has(fields[ci]))
                  return (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      {cols.map((c, j) => (
                        <td key={j} className="py-1.5 pr-3 text-text-main whitespace-nowrap">{c}</td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mt-2">+ 8 filas más · {month} 2026</p>
        </div>

        {/* Export button */}
        <button onClick={handleExport}
          className={`w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${exported ? 'bg-accent text-white' : 'bg-navy text-white shadow-lg'}`}>
          {exported ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              ¡Archivo descargado!
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Exportar {format === 'excel' ? 'Excel' : 'CSV'} · {month}
            </>
          )}
        </button>
      </div>
    </div>
  )
}
