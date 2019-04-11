import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import { DEFAULT_FONTS } from './src/utils/constants'
import { createTheme } from './src/theme/core'
import getBaseStyles from './src/utils/base'

const theme = createTheme({
  fonts: DEFAULT_FONTS
})

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
