import React from 'react'
import { ThemeProvider } from '@xstyled/styled-components'

import { ThemeValues } from '../../theme'

import * as S from './styles'
import { HideFocusRingsRoot } from './hide-focus-rings-root'

export interface WuiProviderProps {
  children?: React.ReactNode
  hasGlobalStyle?: boolean
  reactRootId?: string
  shouldHideFocusRingOnClick?: boolean
  theme: ThemeValues
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
        {hasGlobalStyle && <S.GlobalStyle useReset={useReset} />}
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
