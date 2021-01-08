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
      },
      width: {
        'image': '100px',
      },
      spacing: {
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
      },
      margin: {
        'bottom': '20px',
      },
      backgroundImage: theme => ({
        'header': "url('/images/bg-header-desktop.svg')",
      }),
    },
  },
  variants: {},
  plugins: [],
}
