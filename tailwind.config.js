const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif']
      },
      boxShadow: {
        hard: '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
        spread:
          '0 0 20px 7px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
        'md-dark':
          '0 8px 12px -1px rgb(0, 0, 0, 0.4), 0 0px 4px 0px rgb(0, 0, 0, 0.4)'
      },
      colors: {
        primary: {
          400: '#1ac9b8',
          500: '#0fa697',
          600: '#13887c'
        }
      }
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.scrollbar-none': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      });
    })
  ]
};
