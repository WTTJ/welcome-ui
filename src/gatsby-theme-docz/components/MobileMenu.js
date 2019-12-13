/* eslint-disable react/prop-types */
import React from 'react'
import { Portal } from 'reakit/Portal'
import { useDialogState } from 'reakit/Dialog'

import { Box } from '../../../../packages/Box'
import { Button } from '../../../../packages/Button'
import { Icon } from '../../../../packages/Icon'

import { Navigation } from './Navigation'
import { LogoLong } from './LogoLong'
import { TagVersion } from './TagVersion'
import * as S from './MobileMenu.styled'

export const MobileMenu = ({ items, theme, ...rest }) => {
  const dialog = useDialogState()

  return (
    <S.MobileMenu {...rest}>
      <S.Logo>
        <LogoLong />
      </S.Logo>
      <S.MenuCloseDisclosure {...dialog}>
        <Icon color="light.100" name="menu" size="lg" />
      </S.MenuCloseDisclosure>
      <Portal>
        <S.MenuBackground {...dialog} />
      </Portal>
      <S.MenuDialog {...dialog} aria-label="Navigation">
        <S.CloseIcon onClick={() => dialog.hide()} shape="circle" size="sm">
          <Icon name="cross" />
        </S.CloseIcon>
        <Box alignItems="center" display="flex">
          <TagVersion />
          <Button
            as="a"
            backgroundColor="transparent"
            border="none"
            href="https://github.com/WTTJ/welcome-ui"
            ml="sm"
            shape="circle"
            size="sm"
            target="_blank"
          >
            <Icon color="light.100" name="github" size="lg" />
          </Button>
        </Box>
        <Box mt="xl">
          <Navigation items={items} />
        </Box>
      </S.MenuDialog>
    </S.MobileMenu>
  )
}
