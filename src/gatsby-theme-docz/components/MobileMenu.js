/* eslint-disable react/prop-types */
import React from 'react'
import { Portal } from 'reakit/Portal'
import { useDialogState } from 'reakit/Dialog'

import { Box } from '../../../../packages/Box'
import { Button } from '../../../../packages/Button'
import { MenuIcon } from '../../../../icons/Menu'
import { CrossIcon } from '../../../../icons/Cross'
import { GithubIcon } from '../../../../icons/Github'
import { TagVersion } from '../../../../docz/TagVersion'

import { Navigation } from './Navigation'
import { LogoLong } from './LogoLong'
import { ThemeSelect } from './ThemeSelect'
import * as S from './MobileMenu.styled'

const { version } = require('../../../../package.json')

export const MobileMenu = ({ items, theme, ...rest }) => {
  const dialog = useDialogState()

  return (
    <S.MobileMenu {...rest}>
      <S.Logo>
        <LogoLong />
      </S.Logo>
      <S.MenuCloseDisclosure {...dialog}>
        <MenuIcon color="light.100" size="lg" />
      </S.MenuCloseDisclosure>
      <Portal>
        <S.MenuBackground {...dialog} />
      </Portal>
      <S.MenuDialog {...dialog} aria-label="Navigation">
        <S.CloseIcon onClick={() => dialog.hide()} shape="circle" size="sm">
          <CrossIcon />
        </S.CloseIcon>
        <Box alignItems="center" display="flex">
          <TagVersion name="welcome-ui" size="lg" variant="dark" version={version} />
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
            <GithubIcon color="light.100" size="lg" />
          </Button>
        </Box>
        <Box mb="lg" mt="lg">
          <ThemeSelect {...theme} />
        </Box>
        <Box mt="xl">
          <Navigation items={items} />
        </Box>
      </S.MenuDialog>
    </S.MobileMenu>
  )
}
