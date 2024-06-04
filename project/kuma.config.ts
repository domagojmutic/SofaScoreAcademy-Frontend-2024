import { createTheme } from '@kuma-ui/core'

const theme = createTheme({
  colors: {
    primary: 'var(--primary-default)',
    primaryVariant: 'var(--primary-variant)',
    primaryHighlight: 'var(--primary-highlight)',
    secondary: 'var(--secondary-default)',
    secondaryVariant: 'var(--secondary-variant)',
    secondaryHighlight: 'var(--secondary-highlight)',
    live: 'var(--live)',
    surface: {
      s0: 'var(--surface-s0)',
      s1: 'var(--surface-s1)',
      s2: 'var(--surface-s2)',
    },
    onSurface: {
      nLv1: 'var(--on-surface-nLv1)',
      nLv2: 'var(--on-surface-nLv2)',
      nLv3: 'var(--on-surface-nLv3)',
      nLv4: 'var(--on-surface-nLv4)',
    },
  },
  spacings: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
  },
  breakpoints: {
    sm: '400px',
    md: '700px',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  },
  components: {
    Button: {
      defaultProps: {
        variant: 'primary',
        padding: '4px',
        border: 'none',
        fontWeight: 600,
        _hover: {
          opacity: 0.9,
        },
      },
      variants: {
        primary: {
          bg: 'var(--primary-default)',
          color: 'var(--on-surface-nLv1)',
        },
        secondary: {
          bg: 'var(--on-surface-nLv1)',
          color: 'var(--primary-default)',
        },
      },
    },
  },
})

type UserTheme = typeof theme

declare module '@kuma-ui/core' {
  export interface Theme extends UserTheme {}
}

export default theme
