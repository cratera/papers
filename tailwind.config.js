const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`**/*.{js,ts,jsx,tsx}`],
  theme: {
    colors: {
      // Neutrals
      black: '#000',
      gray: {
        light: 'rgba(0, 0, 0, 0.2)',
        DEFAULT: 'rgba(0, 0, 0, 0.5)',
      },
      white: '#fff',
      // Main colors
      orange: {
        DEFAULT: '#EFA16F',
        desaturated: '#EFBD9E',
      },
      purple: {
        DEFAULT: '#C299C4',
        desaturated: '#C3A3C4',
      },
      yellow: {
        DEFAULT: '#EED486',
        desaturated: '#EEDA9D',
      },
      pink: {
        DEFAULT: '#C55F7F',
        desaturated: '#C56E8A',
      },
      salmon: {
        DEFAULT: '#F2C9AD',
        desaturated: '#F2D7C4',
      },
      green: {
        DEFAULT: '#A3C764',
        desaturated: '#B4CF84',
      },
    },
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
