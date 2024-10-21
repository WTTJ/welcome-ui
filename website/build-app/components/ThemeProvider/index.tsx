'use client'
import { createTheme, darkTheme, WuiProvider, WuiProviderProps } from '@welcome-ui/core'
import * as React from 'react'

type ThemeProviderProps = {
  children: WuiProviderProps['children']
}
type ThemeProps = {
  children: WuiProviderProps['children']
}
type ThemeValue = 'light' | 'dark'
type ContextReturn = {
  setTheme: (theme: ThemeValue) => void
  theme: ThemeValue
}

export const ThemeContext = React.createContext<ContextReturn>({
  theme: 'light',
  setTheme: () => {
    return 'light'
  },
})

export const Theme = ({ children }: ThemeProps) => {
  const [theme, setTheme] = React.useState<ThemeValue>('light')

  React.useEffect(() => {
    setTheme((localStorage.getItem('wui-theme') as ThemeValue) || 'light')
  }, [])

  const values = React.useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={values}>
      <ThemeProvider>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = React.useContext(ThemeContext)
  const isDarkTheme = theme === 'dark'

  const themeValues = React.useMemo(
    () => createTheme(isDarkTheme ? darkTheme : undefined),
    [isDarkTheme]
  )

  return (
    <WuiProvider theme={themeValues} useReset>
      {children}
    </WuiProvider>
  )
}
