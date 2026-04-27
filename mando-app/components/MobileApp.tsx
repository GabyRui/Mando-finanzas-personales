'use client'
import { useState } from 'react'
import HomeScreen from './screens/HomeScreen'
import TransactionsScreen from './screens/TransactionsScreen'
import CalendarScreen from './screens/CalendarScreen'
import SavingsScreen from './screens/SavingsScreen'
import AnalyticsScreen from './screens/AnalyticsScreen'
import ChatbotScreen from './screens/ChatbotScreen'
import BudgetScreen from './screens/BudgetScreen'
import ExportScreen from './screens/ExportScreen'

type Screen = 'home' | 'transactions' | 'calendar' | 'premium'
type PremiumTab = 'savings' | 'analytics' | 'chat' | 'budget' | 'export'

const premiumTabs: { id: PremiumTab; label: string; icon: string }[] = [
  { id: 'savings',   label: 'Alcancía',   icon: '🐷' },
  { id: 'analytics', label: 'Análisis',   icon: '📊' },
  { id: 'chat',      label: 'Chat IA',    icon: '🤖' },
  { id: 'budget',    label: 'Presupuesto',icon: '💰' },
  { id: 'export',    label: 'Exportar',   icon: '📗' },
]

function NavIcon({ screen, icon, label, active, onClick }: {
  screen: Screen; icon: React.ReactNode; label: string; active: boolean; onClick: () => void
}) {
  return (
    <button onClick={onClick} className="flex-1 flex flex-col items-center gap-1 py-2 transition-all">
      <div className={`transition-all ${active ? 'text-accent' : 'text-text-muted'}`}>{icon}</div>
      <span className={`text-[10px] font-semibold transition-all ${active ? 'text-accent' : 'text-text-muted'}`}>{label}</span>
    </button>
  )
}

export default function MobileApp() {
  const [screen, setScreen] = useState<Screen>('home')
  const [premiumTab, setPremiumTab] = useState<PremiumTab>('savings')
  const [isPremium] = useState(true)

  const nav = (s: Screen) => setScreen(s)

  return (
    /* Outer desktop wrapper */
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center p-6">
      {/* Device frame */}
      <div className="relative w-[390px] h-[844px] bg-[#1a1a1a] rounded-[52px] shadow-2xl border-4 border-[#2a2a2a] flex flex-col overflow-hidden"
        style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)' }}>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#1a1a1a] rounded-b-3xl z-50 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#2a2a2a]"/>
          <div className="w-14 h-3 rounded-full bg-[#2a2a2a]"/>
        </div>

        {/* Screen content */}
        <div className={`flex-1 mobile-screen relative ${screen === 'premium' && premiumTab === 'chat' ? 'flex flex-col' : ''}`}
          style={{ marginTop: 28 }}>

          {screen === 'home'         && <HomeScreen/>}
          {screen === 'transactions' && <TransactionsScreen/>}
          {screen === 'calendar'     && <CalendarScreen/>}

          {screen === 'premium' && (
            <div className={`flex flex-col ${premiumTab === 'chat' ? 'h-full' : ''}`}>
              {/* Premium tab bar */}
              <div className="flex-shrink-0 px-3 pt-2 pb-0 border-b border-border bg-white sticky top-0 z-10">
                <div className="flex gap-1 overflow-x-auto pb-2">
                  {premiumTabs.map(t => (
                    <button key={t.id} onClick={() => setPremiumTab(t.id)}
                      className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${premiumTab===t.id ? 'bg-navy text-white border-navy' : 'bg-bg text-text-muted border-border'}`}>
                      <span>{t.icon}</span>{t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Premium screen content */}
              <div className={premiumTab === 'chat' ? 'flex-1 flex flex-col overflow-hidden' : 'flex-1'}>
                {premiumTab === 'savings'   && <SavingsScreen/>}
                {premiumTab === 'analytics' && <AnalyticsScreen/>}
                {premiumTab === 'chat'      && <ChatbotScreen/>}
                {premiumTab === 'budget'    && <BudgetScreen/>}
                {premiumTab === 'export'    && <ExportScreen/>}
              </div>
            </div>
          )}
        </div>

        {/* Bottom navigation */}
        <div className="flex-shrink-0 bg-white border-t border-border px-2 safe-area-bottom"
          style={{ paddingBottom: 'env(safe-area-inset-bottom, 8px)' }}>
          <div className="flex">
            <NavIcon screen="home" active={screen==='home'} onClick={() => nav('home')} label="Inicio"
              icon={
                <svg className="w-5 h-5" fill={screen==='home'?'currentColor':'none'} stroke="currentColor" strokeWidth={screen==='home'?0:2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
              }/>
            <NavIcon screen="transactions" active={screen==='transactions'} onClick={() => nav('transactions')} label="Gastos"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={screen==='transactions'?2.5:2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                </svg>
              }/>
            <NavIcon screen="calendar" active={screen==='calendar'} onClick={() => nav('calendar')} label="Calendario"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={screen==='calendar'?2.5:2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              }/>
            <NavIcon screen="premium" active={screen==='premium'} onClick={() => nav('premium')} label="Premium"
              icon={
                <div className="relative">
                  <svg className="w-5 h-5" fill={screen==='premium'?'currentColor':'none'} stroke="currentColor" strokeWidth={screen==='premium'?0:2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                  </svg>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full"/>
                </div>
              }/>
          </div>
        </div>

        {/* Home bar */}
        <div className="flex-shrink-0 flex justify-center py-1.5 bg-white">
          <div className="w-24 h-1 bg-[#1a1a1a]/20 rounded-full"/>
        </div>
      </div>

      {/* Desktop label */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
        <p className="text-white/20 text-xs font-semibold tracking-widest uppercase">mando · prototipo interactivo</p>
      </div>
    </div>
  )
}
