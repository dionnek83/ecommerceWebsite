module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: theme => theme('colors'),
      textColor:{
        'txt-color':' #7b113a'

      },
      zIndex: {
         'z-100': 100,
      },
      backgroundColor: {
        'primary-1': ' #d9e4dd',
       'primary-2': '#f5f5f5'
      }

      
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}