'use client'
import { createTheme as oldCreateTheme } from '@welcome-ui/core'
import { createTheme, darkTheme as WuiDarkTheme, WuiProvider } from 'welcome-ui'
import type { WuiProviderProps } from 'welcome-ui'
import { useTheme } from 'next-themes'
import * as React from 'react'

type ThemeProviderProps = {
  children: WuiProviderProps['children']
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  const oldLightTheme = oldCreateTheme()
  const lightTheme = createTheme()

  const oldDarkTheme = oldCreateTheme(WuiDarkTheme)
  const darkTheme = createTheme(WuiDarkTheme)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // prevents ssr flash for mismatched dark mode
  if (!mounted) return null

  return (
    <WuiProvider
      theme={
        theme === 'dark' ? { ...oldDarkTheme, ...darkTheme } : { ...oldLightTheme, ...lightTheme }
      }
      useReset
    >
      {children}
    </WuiProvider>
  )
}
