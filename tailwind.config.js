/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-grey-900': '#141414',
        'color-grey-800': '#1f1f1f',
        'color-grey-700': '#333',
        dimgray: '#595959',
        'color-white': '#fff',
        'color-green': '#c4f82a',
      },
      spacing: {
        'spacing-300': '24px',
        'spacing-500': '40px',
        'spacing-200': '16px',
        'spacing-100': '8px',
        'spacing-150': '12px',
        'spacing-50': '4px',
      },
      fontFamily: {
        'text-preset-2-bold': 'Inter',
      },
      borderRadius: {
        '980xl': '999px',
      },
    },
    fontSize: {
      sm: '14px',
      '5xl': '24px',
      lgi: '19px',
      inherit: 'inherit',
    },
    screens: {
      mq600: {
        raw: 'screen and (max-width: 600px)',
      },
      mq320: {
        raw: 'screen and (max-width: 320px)',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
