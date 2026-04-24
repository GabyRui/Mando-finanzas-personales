export default function Mascot({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="animate-float drop-shadow-xl">
        <svg width="100" height="132" viewBox="0 0 100 132" fill="none" xmlns="http://www.w3.org/2000/svg">

          {/* Sombra base */}
          <ellipse cx="50" cy="129" rx="22" ry="4" fill="#1A2540" opacity="0.18"/>

          {/* Antena */}
          <line x1="50" y1="5" x2="50" y2="20" stroke="#C9A760" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="50" cy="5" r="5" fill="#17C653" className="robot-antenna"/>

          {/* Cabeza */}
          <rect x="12" y="18" width="76" height="66" rx="20" fill="#1E2E4A"/>
          {/* Reflejo cabeza */}
          <rect x="18" y="22" width="30" height="12" rx="6" fill="white" opacity="0.05"/>

          {/* Ojo izquierdo */}
          <g className="robot-eye">
            <circle cx="36" cy="47" r="12" fill="white"/>
            <circle cx="36" cy="47" r="6.5" fill="#0F1929"/>
            <circle cx="39.5" cy="43.5" r="2.5" fill="white" opacity="0.85"/>
          </g>

          {/* Ojo derecho */}
          <g className="robot-eye" style={{ animationDelay: '0.12s' }}>
            <circle cx="64" cy="47" r="12" fill="white"/>
            <circle cx="64" cy="47" r="6.5" fill="#0F1929"/>
            <circle cx="67.5" cy="43.5" r="2.5" fill="white" opacity="0.85"/>
          </g>

          {/* Sonrisa */}
          <path d="M 34 66 Q 50 77 66 66" stroke="#17C653" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

          {/* Cuerpo */}
          <rect x="16" y="88" width="68" height="38" rx="15" fill="#1E2E4A"/>
          {/* Reflejo cuerpo */}
          <rect x="22" y="92" width="24" height="8" rx="4" fill="white" opacity="0.05"/>

          {/* Pantalla pecho */}
          <rect x="27" y="95" width="46" height="24" rx="8" fill="#0D1929"/>
          <text
            x="50" y="113"
            textAnchor="middle"
            fill="#C9A760"
            fontSize="14"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
          >
            S/
          </text>

          {/* Notificación ping */}
          <circle cx="73" cy="95" r="5" fill="#17C653" className="robot-ping"/>
          <circle cx="73" cy="95" r="3" fill="white" opacity="0.9"/>

          {/* Brazo izquierdo */}
          <rect x="1" y="92" width="13" height="26" rx="6.5" fill="#1E2E4A"/>
          {/* Brazo derecho */}
          <rect x="86" y="92" width="13" height="26" rx="6.5" fill="#1E2E4A"/>

        </svg>
      </div>
    </div>
  )
}
