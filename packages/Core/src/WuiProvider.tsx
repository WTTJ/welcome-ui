import React from 'react'
import { ThemeProvider } from '@xstyled/styled-components'
import { HideFocusRingsRoot } from '@welcome-ui/utils'

import { WuiTheme } from './theme/types'
import { GlobalStyle, GlobalStylePanda } from './utils/base'

export interface WuiProviderProps {
  children?: React.ReactNode
  hasGlobalStyle?: boolean
  reactRootId?: string
  shouldHideFocusRingOnClick?: boolean
  theme: WuiTheme
  useReset?: boolean
  /**
   * @experimental panda version
   */
  usePanda?: boolean
}

export const WuiProvider: React.FC<WuiProviderProps> = ({
  children,
  hasGlobalStyle = true,
  reactRootId = 'root',
  shouldHideFocusRingOnClick = true,
  theme,
  usePanda,
  useReset,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {hasGlobalStyle && !usePanda && <GlobalStyle useReset={useReset} />}
        {usePanda && <GlobalStylePanda />}
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
