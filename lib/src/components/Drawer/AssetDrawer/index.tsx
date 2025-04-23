import React from 'react'
import * as Ariakit from '@ariakit/react'
import { useTheme } from '@xstyled/styled-components'

import { Drawer } from '..'

import * as S from './styles'

import { Box } from '@/Box'
import { CreateWuiProps, forwardRef } from '@/System'
import { findToastContainersInDocument } from '@/Toast/utils'

export type AssetDrawerProps = CreateWuiProps<'div', Ariakit.DialogOptions>

export const AssetDrawerComponent = forwardRef<'div', AssetDrawerProps>(
  ({ children, maxWidth = 820, store, ...rest }, ref) => {
    const theme = useTheme()

    const getPersistentElements = () => [...findToastContainersInDocument()]

    const hideOnInteractOutside = (event: Event) => {
      const target = event.target as HTMLElement
      const isTargetWithinPersistentElements = getPersistentElements().some(element =>
        element.contains(target)
      )
      return !isTargetWithinPersistentElements
    }

    return (
      <Drawer
        {...rest}
        autoFocusOnShow={false}
        getPersistentElements={getPersistentElements}
        h={{ _: '100%', md: 'calc(100% - 3rem)' }}
        hideOnInteractOutside={hideOnInteractOutside}
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
