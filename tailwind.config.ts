import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F5F7FA',
        surface: '#FFFFFF',
        navy: '#1A2540',
        gold: '#C9A760',
        'text-main': '#1A2540',
        'text-muted': '#6B7280',
        accent: '#22C55E',
        'accent-hover': '#16A34A',
        border: '#E2E8F0',
        highlight: '#F0FDF4',
      },
      fontFamily: {
        sans: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
