/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      xl: { 'max': '1920px' },
      'desktop-l': { 'max': '1880px' },
      'desktop-m': { 'max': '1680px' },
      'laptop-x': { 'max': '1440px' },
      'laptop-m': { 'max': '1280px' },
      'aspect-pc': {'min': '992px'},
      lg: { 'max': '1170px' },
      md: { 'max': '991px' },
      sm: { 'max': '767px' },
      xs: { 'max': '375px' },
      '2xl': '1921px',
      DEFAULT: '1440px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '80px',
        xl: '3rem',
        lg: '3rem',
        md: '30px',
        sm: '18px',
        'xs': '10px',
      },
    },
    fontFamily: {
      primary: ['Roboto', 'sans - serif'],
      secondary: ['Inter', 'sans-serif;'],
      poppins: ['Poppins', 'sans - serif']
    },
    fontSize: {
      'large-title': '96px',
      'large-title-lp-m': '92px',
      'large-title-lg': '77px',
      'large-title-sm': '46px',
      'primary-heading': '72px',
      'secondary-heading': '64px',
      'secondary-heading2': '60px',
      'text-extra-large': '36px',
      'text--large': '22px',
      'body-text': '20px',
      'text-extra-large': '36px',
      'text-medium': '18px',
      'text-small': '16px',
      'text-xs-small': '14px',
      'text-extra-small': '12px',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
        'primary': '#0F172A',
        'primary2': '#2B2B2B',
        'secondary': '#5226E4',
        'secondary2': '#377AFF',
        'neu-btn-color': '#377AFF',
        'neu-btn-hover-color': '#2563EB',
        'neu-black': '#2B2B2B',
        'neu-gray': '#C4C4C4',
        'neu-white': '#ffffff',
        'title': '#1B1B1D',
        'tab-para': '#333333',
        'gray': '#F5F8F9',
        'gray-light': '#E5E6E9',
        'gray-extra-light': '#E5E5E5',
        'slate': '#33415C',
        'meta': '#9C9C9C',
        'body': '#525252',
        'sky': '#012A5E',
      },
      backgroundImage: {
        // 'inner-cta':
        //   "linear-gradient( 90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.42) 61.04%, rgba(0, 0, 0, 0.24) 83.04%), url('../images/inner-content-bg.jpg')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
