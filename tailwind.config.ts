import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#E9EFF8',
        surface: '#FFFFFF',
        navy: '#1A2540',
        gold: '#C9A760',
        'text-main': '#1A2540',
        'text-muted': '#4B5563',
        accent: '#17C653',
        'accent-hover': '#13A845',
        border: '#D1D9E6',
        highlight: '#EDFBF3',
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
