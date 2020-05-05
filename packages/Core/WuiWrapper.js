import React from 'react'
import { bool, node, object } from 'prop-types'
import { ThemeProvider } from '@xstyled/styled-components'
import { HideFocusRingsRoot } from '@welcome-ui/utils/hide-focus-rings-root'

import { GlobalStyle } from './utils/base'

export const WuiWrapper = ({
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

WuiWrapper.displayName = 'WuiWrapper'

WuiWrapper.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  hasGlobalStyle: bool,
  shouldHideFocusRingOnClick: bool,
  theme: object
}
