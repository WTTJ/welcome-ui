'use client'
import { createTheme, WuiProvider, WuiProviderProps } from '@welcome-ui/core'
import * as React from 'react'

type ThemeProviderProps = {
  children: WuiProviderProps['children']
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = React.useMemo(() => createTheme(), [])

  return (
    <WuiProvider theme={theme} useReset>
      {children}
    </WuiProvider>
  )
}
