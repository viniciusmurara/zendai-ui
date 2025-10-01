# Sistema de Tema - ZenDAI UI

Este documento explica como usar o sistema de tema implementado na aplicação.

## Cores do Tema

### Cores Principais
- **Primary**: `#397358` - Verde principal
- **Secondary**: `#C3E3AB` - Verde claro
- **White**: `#DCE4D0` - Branco suave

### Variações Automáticas
- **Primary Light**: `#4a8a6b`
- **Primary Dark**: `#2d5a45`
- **Secondary Light**: `#d4ecc0`
- **Secondary Dark**: `#a8d085`

## Como Usar

### 1. Classes CSS Utilitárias

Você pode usar classes CSS prontas em seus componentes:

```tsx
// Backgrounds
<div className="bg-primary">Fundo primário</div>
<div className="bg-secondary">Fundo secundário</div>
<div className="bg-white">Fundo branco</div>

// Textos
<h1 className="text-primary">Título primário</h1>
<p className="text-secondary">Texto secundário</p>

// Bordas
<div className="border border-primary">Com borda primária</div>
```

### 2. CSS Variables

Use as variáveis CSS diretamente em estilos:

```tsx
<div style={{ backgroundColor: 'var(--primary)' }}>
  Usando CSS variable
</div>
```

### 3. Hook TypeScript

Importe e use o hook do tema:

```tsx
import { theme, useTheme } from '@/theme';

function MeuComponente() {
  const themeColors = useTheme();
  
  return (
    <div style={{ color: theme.colors.primary }}>
      Usando cores do tema
    </div>
  );
}
```

### 4. CSS Variables no JavaScript

```tsx
import { theme } from '@/theme';

<div style={{ backgroundColor: theme.cssVars.primary }}>
  Com CSS vars
</div>
```

## Estrutura de Arquivos

```
src/
├── theme/
│   └── index.ts          # Configuração do tema
├── components/
│   └── ThemeExample.tsx  # Exemplo de uso
└── app/
    └── globals.css       # CSS variables e classes utilitárias
```

## Modo Escuro

O tema já está preparado para modo escuro automático baseado na preferência do sistema:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: var(--primary-dark);
    --foreground: var(--white);
  }
}
```

## Expandindo o Tema

Para adicionar novas cores, edite:

1. **CSS Variables** em `globals.css`:
```css
:root {
  --nova-cor: #123456;
}
```

2. **Configuração TypeScript** em `src/theme/index.ts`:
```typescript
export const theme = {
  colors: {
    // ... cores existentes
    nova_cor: '#123456',
  },
  cssVars: {
    // ... vars existentes  
    nova_cor: 'var(--nova-cor)',
  }
};
```

3. **Classes utilitárias** em `globals.css`:
```css
.bg-nova-cor { background-color: var(--nova-cor); }
.text-nova-cor { color: var(--nova-cor); }
```