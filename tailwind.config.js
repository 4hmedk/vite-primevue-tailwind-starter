/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/css/index.css",
    "./presets/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
  darkMode: ['selector', '[class*="app-dark"]'] ,
}

