import React from 'react'
import { ThemeProvider } from '@wttj/xstyled-styled-components'
import { HideFocusRingsRoot } from '@welcome-ui/utils'

import { WuiTheme } from './theme/types'
import { GlobalStyle } from './utils/base'

export interface WuiProviderProps {
  children?: React.ReactNode
  hasGlobalStyle?: boolean
  reactRootId?: string
  shouldHideFocusRingOnClick?: boolean
  theme: WuiTheme
  useReset?: boolean
}

export const WuiProvider: React.FC<WuiProviderProps> = ({
  children,
  hasGlobalStyle = true,
  reactRootId = 'root',
  shouldHideFocusRingOnClick = true,
  theme,
  useReset,
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
