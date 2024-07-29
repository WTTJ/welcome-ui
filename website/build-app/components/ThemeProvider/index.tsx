'use client'
import { createTheme, darkTheme, WuiProvider, WuiProviderProps } from '@welcome-ui/core'
import * as React from 'react'

type ThemeProviderProps = {
  children: WuiProviderProps['children']
}

export type ThemeValue = 'system' | 'light' | 'dark'
export type SchemeValue = 'light' | 'dark'
type ThemeContextValues = {
  schemeValue: SchemeValue
  setThemeSelected?: (value: ThemeValue) => void
}
export const ThemeContext = React.createContext<ThemeContextValues>({ schemeValue: 'light' })

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeSelected, setThemeSelected] = React.useState<ThemeValue>('system')

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setThemeSelected((localStorage.getItem('colorScheme') as ThemeValue) || 'system')
    }
  }, [])

  const schemeValue: SchemeValue = React.useMemo(() => {
    const getIsDarkSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches
    let isDarkTheme = themeSelected === 'dark'

    if (themeSelected === 'system') {
      isDarkTheme = getIsDarkSystemTheme()
    }

    return isDarkTheme ? 'dark' : 'light'
  }, [themeSelected])

  const theme = React.useMemo(
    () => createTheme(schemeValue === 'dark' ? darkTheme : undefined),
    [schemeValue]
  )

  const contextValues = React.useMemo(() => ({ schemeValue, setThemeSelected }), [schemeValue])

  return (
    <WuiProvider hasGlobalStyle theme={theme} useReset>
      <ThemeContext.Provider value={contextValues}>{children}</ThemeContext.Provider>
    </WuiProvider>
  )
}
