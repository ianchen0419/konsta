/** @type {import('tailwindcss').Config} */
const konstaConfig = require('konsta/config');
const colors = require('tailwindcss/colors')

module.exports = konstaConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
      },
    },
  },
  plugins: [],
});
