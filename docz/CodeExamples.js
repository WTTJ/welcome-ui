/* eslint-disable react/no-multi-comp */
import { createTheme } from '../packages/Core/theme/core'

export const exampleHome = `
  import React from 'react'
  import { createTheme, WuiProvider } from '@welcome-ui/core'
  import { Button } from '@welcome-ui/button'

  // Add theme options (if you want)
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
    return (
      // Wrap your components with <WuiProvider /> with your theme
      <WuiProvider
        theme={theme}
        // Will inject a CSS reset with normalizer
        hasGlobalStyle
        // Will show the focus ring on keyboard navigation only
        shouldHideFocusRingOnClick
      >
        <Button variant="secondary">Welcome!</Button>
      </WuiProvider>
    )
  }
`

export const themeValues = () => {
  const theme = createTheme()

  return JSON.stringify(theme, null, 2)
}
