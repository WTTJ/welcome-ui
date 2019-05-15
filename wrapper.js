import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import { welcomeTheme } from './src/theme/welcome'
import { createTheme } from './src/theme/core'
import { getBaseStyles } from './src/utils/base'

const theme = createTheme(welcomeTheme)

export const Wrapper = ({ children }) => {
  const BaseStyles = getBaseStyles(theme)
  return (
    <Fragment>
      <BaseStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Fragment>
  )
}

export default Wrapper
