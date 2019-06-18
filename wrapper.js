import PropTypes from 'prop-types'
import React from 'react'
import { ThemeProvider } from '@xstyled/styled-components'

import { welcomekitTheme } from './src/theme/welcomekit'
import { createTheme } from './src/theme/core'
import { getBaseStyles } from './src/utils/base'

const theme = createTheme(welcomekitTheme)

export const Wrapper = ({ children }) => {
  const BaseStyles = getBaseStyles(theme)
  return (
    <ThemeProvider theme={theme}>
      <>
        {children}
        <BaseStyles />
      </>
    </ThemeProvider>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node
}

export default Wrapper
