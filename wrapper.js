import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './src/theme/core'
import GlobalStyle from './src/utils/base'

const Wrapper = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{ children }</ThemeProvider>
    </Fragment>
  )
}

export default Wrapper
