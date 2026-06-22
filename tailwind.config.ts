import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hanken Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Greys lifted directly from the design source
        line: '#ececec', // section dividers / header border
        'line-strong': '#e4e4e4', // contact + card borders
        'line-soft': '#e2e2e2', // chip borders
        ink: {
          DEFAULT: '#000000',
          muted: '#444444',
          subtle: '#3a3a3a',
          faint: '#4a4a4a',
        },
        meta: '#999999', // mono labels / footer
        chip: '#f6f6f6', // tech chip background
        available: '#16a34a', // availability dot
      },
      maxWidth: {
        shell: '1200px',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        // mirrors `fadeUp .7s cubic-bezier(.16,1,.3,1) both` from the design
        fadeUp: 'fadeUp 0.7s cubic-bezier(.16,1,.3,1) both',
        'fadeUp-card': 'fadeUp 0.45s ease both',
      },
    },
  },
}
