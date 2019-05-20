import 'jest-styled-components'
import React from 'react'
import StaticRouter from 'react-router-dom/StaticRouter'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { createTheme } from '../theme/core'
import { welcomeTheme } from '../theme/welcome'

const theme = createTheme()

export const render = children => {
  return renderer.create(
    <ThemeProvider theme={theme}>
      <StaticRouter context={{}}>{children}</StaticRouter>
    </ThemeProvider>
  )
}
