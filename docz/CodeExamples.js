/* eslint-disable react/no-multi-comp */
import { createTheme } from '../src/theme/core'

export const exampleHome = `
  import React from 'react'
  import { ThemeProvider } from '@xstyled/styled-components'
  import { createTheme, GlobalStyle } from 'welcome-ui'

  const options = {
    defaultFontFamily: 'Helvetica',
    headingFontFamily: 'Georgia',
    colors: {
      primary: {
        500: '#FF0000'
      },
      secondary: {
        500: '#00FF00'
      }
    }
  }
  const theme = createTheme(options)

  export default function Root() {
    // Wrap your component with ThemeProvider
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <div>Welcome!</div>
        </>
      </ThemeProvider>
    )
  }
`

export const themeValues = () => {
  const theme = createTheme()

  return JSON.stringify(theme, null, 2)
}
