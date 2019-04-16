import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import StaticRouter from 'react-router-dom/StaticRouter'
import 'jest-styled-components'

import { theme, createTheme } from '../theme/core'
const welcomeTheme = createTheme(theme)

export const render = children => {
  return renderer.create(
    <ThemeProvider theme={welcomeTheme}>
      <StaticRouter context={{}}>{children}</StaticRouter>
    </ThemeProvider>
  )
}
