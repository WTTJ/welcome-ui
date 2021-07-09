import React from 'react'
import { ThemeProvider } from '@xstyled/styled-components'
import { HideFocusRingsRoot } from '@welcome-ui/utils'

import { WuiTheme } from './theme/types'
import { GlobalStyle } from './utils/base'

export interface WuiProviderProps {
  hasGlobalStyle?: boolean
  reactRootId?: string
  shouldHideFocusRingOnClick?: boolean
  theme: WuiTheme
  useReset: boolean
}

export const WuiProvider: React.FC<WuiProviderProps> = ({
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
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
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
