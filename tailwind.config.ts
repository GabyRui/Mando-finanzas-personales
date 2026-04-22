import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F9F8F6',
        surface: '#FFFFFF',
        'text-main': '#1A1A1A',
        'text-muted': '#6B7280',
        accent: '#2563EB',
        'accent-hover': '#1D4ED8',
        border: '#E5E7EB',
        highlight: '#EFF6FF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
