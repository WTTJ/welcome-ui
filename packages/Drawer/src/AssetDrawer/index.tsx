import React from 'react'
import * as Ariakit from '@ariakit/react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { Box } from '@welcome-ui/box'
import { useTheme } from '@xstyled/styled-components'

import { Drawer } from '..'

import * as S from './styles'

export type AssetDrawerProps = CreateWuiProps<'div', Ariakit.DialogOptions>

export const AssetDrawerComponent = forwardRef<'div', AssetDrawerProps>(
  ({ children, maxWidth = 820, store, ...rest }, ref) => {
    const theme = useTheme()

    return (
      <Drawer
        {...rest}
        autoFocusOnShow={false}
        h={{ _: '100%', md: 'calc(100% - 3rem)' }}
        hideOnInteractOutside
        placement="bottom"
        ref={ref}
        store={store}
        style={{
          borderTopLeftRadius: theme.radii.xxl,
          borderTopRightRadius: theme.radii.xxl,
        }}
        withBackdrop
        withCloseButton
      >
        <S.Content maxWidth={maxWidth}>
          <Box p={{ _: 'xl md', md: '3xl xl' }}>{children}</Box>
        </S.Content>
      </Drawer>
    )
  }
)
