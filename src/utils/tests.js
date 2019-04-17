import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import StaticRouter from 'react-router-dom/StaticRouter'
import 'jest-styled-components'

import { welcomeTheme } from '../theme/welcome'
import { createTheme } from '../theme/core'

const theme = createTheme(welcomeTheme)

export const render = children => {
  return renderer.create(
    <ThemeProvider theme={theme}>
      <StaticRouter context={{}}>{children}</StaticRouter>
    </ThemeProvider>
  )
}
