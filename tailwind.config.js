/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#DBF226',
          dark: '#000',
        },
        common: {
          main: '#F5F5F5',
          paper: '#F2F2F2',
          white: '#FFF',
        },
        grey: {
          100: '#444',
          200: '#D8D8D8',
          300: '#777',
          400: '#A8A8A8',
          500: '#EEE',
          'grey-95': 'var(--color-grey-95, #F3F3F3)', // Keeping this custom grey
        },
        green: {
          dark: '#005B52',
          light: '#EFF1D9',
        },
      },
      fontFamily: {
        lexend: ['var(--Header-Footer-Font-family-H3)', 'Lexend', 'sans-serif'],
        noto: ['"Noto Sans Khmer"', 'sans-serif'],
        bayon: ['"Bayon"', 'sans-serif'],
      },
      // fontWeight: {
      //   350: 350,
      // },
      screens: {
        xll: { min: '1439px' }, // Screens 1440px and above
        xl: { min: '1440px' }, // Screens 1440px and above
        'xl-max': { max: '1439px' }, // Screens below 1440px
        'xl-max1': { max: '1389px' }, // Screens below 1440px

        lg: { min: '1024px' }, // Screens 1024px and above
        'lg-max': { max: '1023px' }, // Screens below 1024px
        'lg-max-1': { max: '1022px' },
        lgx: { min: '980px', max: '1024px' }, // Screens 1024px and above

        md: { min: '768px' }, // Screens 768px and above
        'md-max': { max: '767px' }, // Screens below 768px
        'md-max1': { max: '700px' }, // Screens below 768px

        mdx: { min: '621px', max: '767px' }, // Screens between 621px and 767px
        'md-611': { max: '611px' }, // Below 612px
        'mdx-max': { max: '620px' }, // Below 621px
        'sm-495': { max: '495px' },
        'sm-560': { max: '560px' },

        sm: { min: '425px' }, // Screens 425px and above
        'sm-max': { max: '424px' }, // Screens below 425px
        'smx-min': { min: '400px' }, // Below 621px
        'smx-max': { max: '321px' }, // Below 621px

        xs: { min: '320px' }, // Screens 320px and above
        'xs-max': { max: '319px' }, // Screens below 320px

        xs1: { min: '260px', max: '319px' }, // Screens between 260px and 319px
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
