import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
      screens: {
        mobile: '100%',
        tablet: '100%',
        desktop: '1392px',
      },
    },
    extend: {
      spacing: {
        1.75: '0.4375rem',
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        8.5: '2.125rem',
        9.5: '2.375rem',
        10.5: '2.625rem',
        11.5: '2.875rem',
        13: '3.25rem',
        15: '3.75rem',
        17.5: '4.375rem',
        18: '4.5rem',
        19: '4.75rem',
        21: '5.25rem',
        22.5: '5.625rem',
        23: '5.75rem',
        25: '6.25rem',
        30: '7.5rem',
        31: '7.75rem',
      },

      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        32: '32px',
        48: '48px',
        64: '64px',
        72: '72px',
        96: '96px',
      },

      fontFamily: {
        body: ['"Plus Jakarta Sans", serif'],
        heading: ['"Anton", serif'],
        chakrapetch: ['"Chakra Petch", serif'],
        inter: ['"Inter", serif'],
        'plus-jakarta': ['var(--font-plus-jakarta)', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
      },
      colors: {
        paleyellow: '#FFF8EC',
        yellow: {
          DEFAULT: '#FFC700',
          600: '#E6B400',
        },
        darkgreen: '#14262C',
        cyan: '#00EED6',
        lightblue: '#6FC7D6',
        firered: '#D32D26',
        charcoal: '#0E0E0E',
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        loweralpha: 'lower-alpha',
        roman: 'upper-roman',
      },

      boxShadow: {
        bigShadow: '6px 6px 0px 0px #000000',
        smallShadow: '4px 4px 0px 0px #000000',
      },
      dropShadow: {
        bigShadow: '4px 4px 0px #000000',
        smallShadow: '2px 2px 0px #000000',
      },

      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionTimingFunction: {
        elastic: 'cubic-bezier(0.34, 1.34, 0.64, 1)',
        'elastic-medium': 'cubic-bezier(0.34, 1.64, 0.64, 1)',
      },
    },
  },

  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px black',
          'text-stroke': '1px black',
        },
        '.yellow-stroke-text': {
          'color': 'yellow-300',
          '-webkit-text-stroke': '1px black',
          'text-stroke': '1px black',
          'text-shadow': '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
        }
      }
      addUtilities(newUtilities)
    },
  ],
}

export default config
