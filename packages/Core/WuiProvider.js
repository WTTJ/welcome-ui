import React from 'react'
import { bool, node, object } from 'prop-types'
import { ThemeProvider } from '@xstyled/styled-components'
import { HideFocusRingsRoot } from '@welcome-ui/utils'

import { GlobalStyle } from './utils/base'

export const WuiProvider = ({
  children,
  hasGlobalStyle = true,
  shouldHideFocusRingOnClick = true,
  theme
}) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {hasGlobalStyle && <GlobalStyle />}
        {shouldHideFocusRingOnClick ? (
          <HideFocusRingsRoot>{children}</HideFocusRingsRoot>
        ) : (
          children
        )}
      </>
    </ThemeProvider>
  )
}

WuiProvider.displayName = 'WuiProvider'

WuiProvider.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  hasGlobalStyle: bool,
  shouldHideFocusRingOnClick: bool,
  theme: object
}
