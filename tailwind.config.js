/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    // A deliberately restrained, bespoke scale — not the Tailwind defaults.
    extend: {
      colors: {
        // Navy dominates the dark surfaces; paper/ivory dominates the light ones.
        navy: {
          DEFAULT: '#0A1F3C',
          deep: '#071528',
          700: '#12294A',
          600: '#1B355C',
          500: '#2C4770',
        },
        paper: {
          DEFAULT: '#FBFAF6', // warm ivory — fine-stationery white
          soft: '#F4F1EA', // slightly deeper ivory for alternating bands
          dim: '#EBE7DD',
        },
        ink: {
          DEFAULT: '#111E30', // body text on light
          soft: '#41505F', // secondary text
          faint: '#6E7A87', // captions / metadata
        },
        gold: {
          DEFAULT: '#B58E3F', // muted, classy — not shiny
          soft: '#C9A968',
          pale: '#E8DcC0',
        },
        sky: {
          DEFAULT: '#A9C5E0', // light-blue accent
          deep: '#6E93B8',
        },
        line: {
          DEFAULT: '#E4DFD3', // hairline on light
          dark: '#20344F', // hairline on navy
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Editorial type scale with generous line-heights baked in.
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em' }],
        'display-xl': ['clamp(2.75rem, 6vw, 5.25rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.06', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 2.2vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.005em' }],
        lead: ['clamp(1.15rem, 1.5vw, 1.4rem)', { lineHeight: '1.6' }],
      },
      maxWidth: {
        prose: '38rem',
        shell: '80rem',
      },
      spacing: {
        section: 'clamp(5rem, 10vw, 9rem)',
      },
      letterSpacing: {
        label: '0.18em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
