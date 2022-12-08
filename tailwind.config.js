/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animation-delay'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('tw-elements/dist/plugin')
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
}
