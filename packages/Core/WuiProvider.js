import React from 'react'
import { bool, node, object, string } from 'prop-types'
import { ThemeProvider } from '@xstyled/styled-components'
import { HideFocusRingsRoot } from '@welcome-ui/utils'

import { GlobalStyle } from './utils/base'

export const WuiProvider = ({
  children,
  hasGlobalStyle = true,
  reactRootId = 'root',
  shouldHideFocusRingOnClick = true,
  theme,
  useReset
}) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {hasGlobalStyle && <GlobalStyle useReset={useReset} />}
        {shouldHideFocusRingOnClick ? (
          <HideFocusRingsRoot reactRootId={reactRootId}>{children}</HideFocusRingsRoot>
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
  reactRootId: string,
  shouldHideFocusRingOnClick: bool,
  theme: object,
  useReset: bool
}
