import type * as Ariakit from '@ariakit/react'
import { useTheme } from '@xstyled/styled-components'

import { Box } from '@/components/Box'
import type { CreateWuiProps } from '@/components/System'
import { forwardRef } from '@/components/System'

import { Drawer } from '../../../old/components/Drawer'

import * as S from './styles'

export type AssetDrawerProps = CreateWuiProps<'div', Ariakit.DialogOptions>

export const AssetDrawerComponent = forwardRef<'div', AssetDrawerProps>(
  (
    {
      children,
      getPersistentElements: parentGetPersistentElements,
      maxWidth = 820,
      store,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme()

    const getPersistentElements = () =>
      Array.from(
        parentGetPersistentElements
          ? parentGetPersistentElements()
          : document.querySelectorAll('[data-wui-persistent]')
      )

    const hideOnInteractOutsideFn = (event: Event) => {
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
        hideOnInteractOutside={hideOnInteractOutsideFn}
        overflow="hidden"
        placement="bottom"
        ref={ref}
        store={store}
        style={{
          borderTopLeftRadius: theme.radii.xxl,
          borderTopRightRadius: theme.radii.xxl,
        }}
        withBackdrop
      >
        <Box h="100%" mt={{ _: 'xl', md: '3xl' }} overflowY="auto" w="100%">
          <S.Content maxWidth={maxWidth}>
            <Box p={{ _: '0 md xl', md: '0 xl 3xl' }}>{children}</Box>
          </S.Content>
        </Box>
      </Drawer>
    )
  }
)
