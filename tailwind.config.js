/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#2ECC71',
        brandInk: '#064e3b',
      },
      boxShadow: {
        card: '0 12px 28px -18px rgba(2,6,23,.12), inset 0 1px 0 rgba(255,255,255,.6)',
      }
    },
  },
  plugins: [],
}