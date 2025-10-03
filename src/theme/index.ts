export const theme = {
  colors: {
    primary: '#397358',
    secondary: '#C3E3AB',
    white: '#DCE4D0',
    primary_light: '#4a8a6b',
    primary_dark: '#2d5a45',
    secondary_light: '#d4ecc0',
    secondary_dark: '#a8d085',
  }
} as const;
export const useTheme = () => theme;
export type ThemeColors = keyof typeof theme.colors;