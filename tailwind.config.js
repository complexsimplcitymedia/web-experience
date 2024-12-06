/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '9xl': '8rem',
      },
      dropShadow: {
        '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
      },
    },
  },
  plugins: [],
};