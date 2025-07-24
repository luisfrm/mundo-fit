"use client"

import { createContext, useContext, useEffect, useState } from "react"
import Cookies from 'js-cookie'

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  mounted: boolean
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  mounted: false,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "mundo-fit-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  // Cargar tema desde cookie después del montaje
  useEffect(() => {
    const savedTheme = Cookies.get(storageKey) as Theme
    if (savedTheme && (savedTheme === "dark" || savedTheme === "light" || savedTheme === "system")) {
      setTheme(savedTheme)
    }
    setMounted(true)
  }, [storageKey])

  // Aplicar tema al DOM solo después del montaje
  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme, mounted])

  const value = {
    theme,
    mounted,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme)
      Cookies.set(storageKey, newTheme, { expires: 365, sameSite: 'strict' })
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
} 