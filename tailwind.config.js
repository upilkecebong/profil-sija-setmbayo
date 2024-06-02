/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  // lightMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    },
  },
  plugins: [],
}

