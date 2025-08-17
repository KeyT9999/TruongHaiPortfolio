import { createContext, useContext, useEffect } from 'react'
import { useThemeStore, getEffectiveTheme } from '@/lib/useThemeStore'

interface ThemeContextType {
  theme: string
  setTheme: (theme: 'light' | 'dark' | 'system') => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useThemeStore()

  useEffect(() => {
    const effectiveTheme = getEffectiveTheme(theme)
    const root = document.documentElement

    root.classList.remove('light', 'dark')
    root.classList.add(effectiveTheme)

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = () => {
        const newTheme = getEffectiveTheme(theme)
        root.classList.remove('light', 'dark')
        root.classList.add(newTheme)
      }

      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 