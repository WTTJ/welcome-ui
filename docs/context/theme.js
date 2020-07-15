import React, { createContext, useContext, useState } from 'react'
import { object } from 'prop-types'

const themeStorage = process.browser && localStorage.getItem('theme')

const ThemeContext = createContext({
  theme: themeStorage,
  setTheme: () => {}
})

export function useThemeContext() {
  const { theme } = useContext(ThemeContext)
  return theme
}

export function useSetThemeContext() {
  const { setTheme } = useContext(ThemeContext)
  return setTheme
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themeStorage)
  process.browser && localStorage.setItem('theme', theme)

  const value = {
    theme,
    setTheme
  }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: object.isRequired
}
