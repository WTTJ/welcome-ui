import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import StaticRouter from 'react-router-dom/StaticRouter'
import 'jest-styled-components'

import theme from '../theme/core'

export const render = children => {
  return renderer.create(
    <ThemeProvider theme={theme}>
      <StaticRouter context={{}}>{children}</StaticRouter>
    </ThemeProvider>
  )
}
