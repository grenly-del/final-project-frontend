/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        firstColor: '#0824EF',
        secondColor: '#12F0DE'
      }
    },
  },
  plugins: [],
}