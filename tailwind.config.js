module.exports = {
  content: ['./pages/**/*.html', './components/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#2d3748',
      },
      fontFamily: {
        custom: ['TT Supermolot Neue', 'sans-serif'], // Add your custom font
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}