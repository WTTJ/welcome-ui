'use client'
import {
  createTheme,
  darkTheme as WuiDarkTheme,
  WuiProvider,
  WuiProviderProps,
} from '@welcome-ui/core'
import { useTheme } from 'next-themes'
import * as React from 'react'

type ThemeProviderProps = {
  children: WuiProviderProps['children']
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  const lightTheme = createTheme()
  const darkTheme = createTheme(WuiDarkTheme)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // prevents ssr flash for mismatched dark mode
  if (!mounted) return null

  return (
    <WuiProvider theme={theme === 'dark' ? darkTheme : lightTheme} useReset>
      {children}
    </WuiProvider>
  )
}
