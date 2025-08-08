/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: { center: true, padding: '1.25rem' },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial'],
      },
      colors: {
        // Base44-style brand green
        brand: {
          DEFAULT: '#2ECC71',
          50:  '#ECFFF5',
          100: '#D6FFE9',
          200: '#A8F7CB',
          300: '#7BEFAE',
          400: '#4FE78F',
          500: '#2ECC71', // <- use text-brand-500 / bg-brand-500
          600: '#24B862',
          700: '#1C9C52',
          800: '#157E43',
          900: '#0E5F31',
        },
      },
      boxShadow: {
        card: '0 12px 28px -18px rgba(2,6,23,.15)',
        brandGlow: '0 8px 24px -12px rgba(46,204,113,.45)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};
