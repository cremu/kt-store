const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Circular Book', ...fontFamily.sans],
      circularLight: ['Circular Light', 'sans-serif'],
      permanentMarker: ['PermanentMarker', 'sans-serif']
    },
    screens: {
      // @media (min-width: 475px)
      'xs': '520px',
      // @media (min-width: 640px)
      'sm': '640px',
      // @media (min-width: 768px)
      'md': '768px',
      // @media (min-width: 1024px)
      'lg': '1024px',
      // @media (min-width: 1280px)
      'xl': '1280px',
      // @media (min-width: 1536px)
      '2xl': '1536px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
