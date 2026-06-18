# @maidenui/theme

Theme context and dark/light mode management for MaidenUI.

## Exports

- `ThemeProvider` — Wraps your app, manages `.maiden-dark` / `.maiden-light` classes
- `useTheme` — Hook returning `{ theme, setTheme, toggleTheme }`
- `Theme` — `'dark' | 'light'` type

## Usage

```tsx
import { ThemeProvider, useTheme } from '@maidenui/theme'

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <YourApp />
    </ThemeProvider>
  )
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return <button onClick={toggleTheme}>{theme}</button>
}
```
