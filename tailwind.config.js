/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ff9132',
          200: '#ff851b',
          300: '#e67818',
        },
        secondary: {
          100: '#ed1a1a',
          200: '#eb0000',
          300: '#d40000',
        },
        accent: {
          100: '#8f8d8d',
          200: '#838080',
          300: '#767373',
        },
      },
      fontFamily:{
        roboto:'Roboto'
      }
    },
  },
  plugins: [],
};
