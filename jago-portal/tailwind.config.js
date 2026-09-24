/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mota-green': '#1B4D2E',
        'mota-gold': '#F4A300',
      }
    },
  },
  plugins: [],
}
