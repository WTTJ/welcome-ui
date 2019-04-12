import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import { wttjTheme } from './src/theme/wttj'
import { createTheme } from './src/theme/core'
import { getBaseStyles } from './src/utils/base'

const theme = createTheme(wttjTheme)

const Wrapper = ({ children }) => {
  const BaseStyles = getBaseStyles(theme)
  return (
    <Fragment>
      <BaseStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Fragment>
  )
}

export default Wrapper
