import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// #endregion Global Imports

const breakPointsSettings = {
  xs: 0,
  sm: 37.5,
  md: 60,
  lg: 80,
  xl: 120,
};

const theme = createMuiTheme({
  breakpoints: {
    unit: 'em',
    values: { ...breakPointsSettings },
  },
  colors: {
    blue: {
      darken10: '#11649E',
      base: '#0066a2',
      lighten90: '#f2f7fa',
      lighten70: '#f7fafb',
      lighten60: '#f3f7fa',
      lighten50: '#f2f8fc',
      lighten47: '#e6eff5',
      lighten45: '#E5F0F6',
      lighten43: '#e8f0f5',
      lighten40: '#d6e5ed',
      lighten37: '#bfc4d2',
      lighten35: '#99c2da',
      lighten34: '#72B4D4',
      lighten33: '#7fb3d1',
      lighten30: '#81bbd8',
      lighten20: '#0086ba',
      lighten10: '#0073a2',
    },
    gray: {
      darken20: '#5B5F6B',
      darken10: '#979797',
      base: '#788095',
      lighten30: '#969dae',
      lighten20: '#b5bcc8',
      lighten15: '#dfe1e6',
      lighten10: '#f4f5f8',
    },
    black: {
      base: '#000',
      lighten100: '#fff',
      lighten40: '#535867',
      lighten30: '#3a3c41',
    },
    peach: {
      base: '#f6af97',
      darken20: '#ec8262',
      darken10: '#f9a389',
      lighten30: '#ffbda8',
    },
    green: {
      base: '#2a9876',
      darken20: '#008b6b',
      lighten80: '#ccefe6',
      lighten40: '#4dc5a7',
      lighten20: '#2daf90',
      lighten10: '#2daf90',
    },
    orange: {
      base: '#e98717',
      darken10: '#d2781d',
      darken20: '#e08769',
      lighten60: '#ffe3d9',
      lighten50: '#fccbba',
      lighten40: '#fbbaa2',
      lighten30: '#f3a88d',
      lighten20: '#f0a65e',
      lighten10: '#e69038',
    },
    violet: {
      base: '#4d4d84',
      darken20: '#020453',
      lighten80: '#f4f4f8',
      lighten70: '#e3e3ed',
      lighten30: '#7474a5',
    },
    yellow: {
      base: '#d2af19',
    },
    red: {
      base: '#d22019',
      lighten30: '#F44336',
      lighten80: '#fff8f8',
    },
    turquoise: {
      base: '#4e788e',
      lighten20: '#59879f',
      lighten40: '#87adc2',
      lighten60: '#adc7d5',
      lighten80: '#d6e5ed',
    },
  },
  borderRadius: {
    base: '8px',
    mobile: '6px',
  },
  navbar: {
    'z-index': 1500,
  },
  typography: {
    htmlFontSize: 10,
    htmlSize: '62.5%',
    fontFamily: 'Raleway, sans-serif',
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    headings: {
      h1: {
        main: {
          fontSize: 3.6,
          lineHeight: 4.55,
          padding: '0.325rem 0 2.275rem',
          maxWidth: 104.1,
          letterSpacing: 0.075,
          sm: {
            fontSize: 2.9,
          },
        },
        secondary: {
          fontSize: 2.925,
          lineHeight: 3.775,
          padding: '1rem 0 1.75rem',
          maxWidth: 104.1,
          letterSpacing: 0.075,

          sm: {
            fontSize: 2.4,
          },
        },
      },
    },
  },
});

export { theme };
