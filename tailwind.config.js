/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'price-change': 'price-change 0.6s ease-in-out',
      },
      keyframes: {
        'price-change': {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(-3px)',
            opacity: '1',
          }
        }
      }
    },
  },
  plugins: [],
}

