const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`**/*.{js,ts,jsx,tsx}`],
  theme: {
    fontFamily: {
      sans: ['Karla-Regular'],
      'sans-bold': ['Karla-Bold'],
      serif: ['YoungSerif-Regular'],
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.test': {
          flex: '1 1 0%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        },
      })
    }),
  ],
}
