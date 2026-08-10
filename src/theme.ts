import { createTheme } from '@mui/material/styles'

/** Google brand palette, used for accents and for chart series later on. */
export const googleColors = {
  blue: '#1a73e8',
  blueLight: '#4285f4',
  blueDark: '#174ea6',
  red: '#ea4335',
  yellow: '#fbbc04',
  green: '#34a853',
  grey900: '#202124',
  grey700: '#3c4043',
  grey600: '#5f6368',
  grey500: '#80868b',
  grey300: '#dadce0',
  grey100: '#f1f3f4',
  grey50: '#f8f9fa',
} as const

const display = '"Google Sans", "Google Sans Text", Roboto, Helvetica, Arial, sans-serif'
const text = '"Google Sans Text", "Google Sans", Roboto, Helvetica, Arial, sans-serif'

/**
 * Light Google-flavored theme. Type is sized for a projector without shouting:
 * no display type above ~52px, and nothing smaller than 14px anywhere on screen.
 */
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: googleColors.blue,
      light: googleColors.blueLight,
      dark: googleColors.blueDark,
      contrastText: '#ffffff',
    },
    error: { main: googleColors.red },
    warning: { main: googleColors.yellow },
    success: { main: googleColors.green },
    background: { default: '#ffffff', paper: '#ffffff' },
    text: {
      primary: googleColors.grey900,
      secondary: googleColors.grey600,
      disabled: googleColors.grey500,
    },
    divider: googleColors.grey300,
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: text,
    h1: {
      fontFamily: display,
      fontSize: 'clamp(2.25rem, 3.6vw, 3.5rem)',
      fontWeight: 500,
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: display,
      fontSize: 'clamp(1.75rem, 2.6vw, 2.5rem)',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
    },
    h3: {
      fontFamily: display,
      fontSize: 'clamp(1.375rem, 1.9vw, 1.75rem)',
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h4: { fontFamily: display, fontSize: '1.375rem', fontWeight: 500, letterSpacing: '-0.005em' },
    h5: { fontFamily: display, fontSize: '1.1875rem', fontWeight: 500 },
    h6: { fontFamily: display, fontSize: '1.0625rem', fontWeight: 500 },
    subtitle1: {
      fontFamily: display,
      fontSize: 'clamp(1.1875rem, 1.6vw, 1.4375rem)',
      lineHeight: 1.5,
      fontWeight: 400,
      letterSpacing: '0',
    },
    subtitle2: { fontSize: '1.0625rem', fontWeight: 500, lineHeight: 1.5 },
    body1: { fontSize: '1.0625rem', lineHeight: 1.65 },
    body2: { fontSize: '1rem', lineHeight: 1.6 },
    button: { fontFamily: display, fontSize: '0.9375rem', fontWeight: 500, textTransform: 'none' },
    caption: { fontSize: '0.9375rem', lineHeight: 1.5 },
    overline: {
      fontFamily: display,
      fontSize: '1rem',
      fontWeight: 500,
      letterSpacing: '0.06em',
      lineHeight: 1.6,
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: { backgroundColor: '#ffffff', WebkitFontSmoothing: 'antialiased' },
        '@media (prefers-reduced-motion: reduce)': {
          html: { scrollBehavior: 'auto' },
          '*': { animationDuration: '0.01ms !important', transitionDuration: '0.01ms !important' },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: display,
          fontWeight: 500,
          fontSize: '1rem',
          borderRadius: 6,
          '& .MuiChip-label': { paddingLeft: 10, paddingRight: 10 },
        },
        sizeMedium: { height: 30 },
        sizeSmall: {
          height: 26,
          '& .MuiChip-label': { paddingLeft: 8, paddingRight: 8 },
        },
        outlined: { borderColor: googleColors.grey300 },
      },
    },
  },
})

export default theme
