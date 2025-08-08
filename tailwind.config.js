/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ECFFF6",
          100: "#D6FFEC",
          200: "#A7F5CF",
          300: "#79EAB2",
          400: "#4FDEA0",
          500: "#2ECC71",
          600: "#22B463",
          700: "#1A8F4E",
          800: "#156F3E",
          900: "#0E4C2C"
        }
      },
      boxShadow: {
        'brand': "0 12px 28px -12px rgba(46,204,113,.45)",
        'card': "0 10px 30px -18px rgba(2,6,23,.15)"
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem'
      }
    },
  },
  plugins: [],
}
