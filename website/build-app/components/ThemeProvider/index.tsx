'use client'
import { WuiProvider, createTheme } from '@welcome-ui/core'
import { welcomeTheme } from '@welcome-ui/themes.welcome'
import { useMemo } from 'react'

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useMemo(() => createTheme(welcomeTheme), [])

  return <WuiProvider theme={theme}>{children}</WuiProvider>
}
