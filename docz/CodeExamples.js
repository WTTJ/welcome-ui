/* eslint-disable react/no-multi-comp */
import { createTheme } from '../packages/Core/theme/core'

export const exampleHome = `
  import React from 'react'
  import { ThemeProvider } from '@xstyled/styled-components'
  import { createTheme, GlobalStyle } from '@welcome-ui/core'
  import { Button } from '@welcome-ui/button'

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

  // Create your theme
  const theme = createTheme(options)

  export default function Root() {
    // Wrap your component with <ThemeProvider/> (passing through your theme) and add <GlobalStyle/>
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Button variant="secondary">Welcome!</Button>
        </>
      </ThemeProvider>
    )
  }
`

export const themeValues = () => {
  const theme = createTheme()

  return JSON.stringify(theme, null, 2)
}
