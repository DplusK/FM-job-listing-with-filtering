module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundColor: {
        blue: {
          'light': '#F0FAFB',
          'dark': '#5DA5A4',
          'medium': '#F0F6F6'
        },
        black: '#293737',
        teal: '#6A9492'
      },
      color: {
        teal: '#6A9492'
      },
      textColor: {
        teal: '#6A9492'
      },
      margin: {
        '10': '10px'
      },
      height: {
        '160': '160px',
        'image': '100px',
        'image-m': '60px'
      },
      width: {
        'image': '100px',
        'image-m': '60px',
        '90': '90%',
      },
      minWidth: {
        'image': '100px',
        'image-m': '60px'
      },
      minHeight: {
        'image': '100px',
        'image-m': '60px'
      },
      spacing: {
        'filter': '100px',
        'header': '75px',
      },
      boxShadow: {
        'listing': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      maxWidth: {
        'list': '1100px'
      },
      padding: {
        'list': '30px',
        'list-m': '15px',
      },
      margin: {
        'image-m': '50px',
        'bottom': '20px',
        'bottom-m': '60px',
      },
      backgroundImage: theme => ({
        'header': "url('/images/bg-header-desktop.svg')",
        'header-m': "url('/images/bg-header-mobile.svg')",
      }),
      inset: {
        '-image': '-50px',
      },
      fontSize: {
        'base': '15px',
        'lg': '18px'
      },
      fontWeight: {
        'base': 500,
        'medium': 700
      }
    },
  },
  variants: {
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },
  plugins: [
    require('tailwindcss-children'),
  ],
}
