/**
 * Configuração do tema da aplicação
 * Otimizado para uso com Tailwind CSS
 */

export const theme = {
  // Cores básicas - úteis para lógica condicional e bibliotecas externas
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

/**
 * Hook minimalista - use apenas quando precisar de lógica JavaScript
 * Para uso normal, prefira as classes CSS: bg-primary, text-secondary, etc.
 */
export const useTheme = () => theme;

/**
 * Tipos TypeScript para as cores do tema
 */
export type ThemeColors = keyof typeof theme.colors;