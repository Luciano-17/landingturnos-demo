/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#4a9b6f',
          greenDark: '#2d7a52',
          bg: '#f7f9f7',
          dark: '#0d1a0f',
          text: '#1a2e1f',
          muted: '#4a6654',
        },
        demo: {
          bg: '#0d1520',
          accent: '#00aaee',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
