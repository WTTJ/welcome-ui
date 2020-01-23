/* eslint-disable react/prop-types */
import React from 'react'

import { Modal, useModalState } from '../../../../packages/Modal'
import { Box } from '../../../../packages/Box'
import { Button } from '../../../../packages/Button'
import { MenuIcon } from '../../../../icons/Menu'
import { GithubIcon } from '../../../../icons/Github'

import { Navigation } from './Navigation'
import { LogoLong } from './LogoLong'
import { ThemeSelect } from './ThemeSelect'
import * as S from './MobileMenu.styled'

export const MobileMenu = ({ items, theme, ...rest }) => {
  const modal = useModalState()

  const colorIcon = theme.value === 'dark' ? 'dark.900' : 'light.900'

  return (
    <S.MobileMenu {...rest}>
      <S.Logo>
        <LogoLong />
      </S.Logo>
      <Box as={Modal.Trigger} {...modal}>
        <MenuIcon color={colorIcon} size="lg" />
      </Box>
      <Modal {...modal} aria-label="Navigation">
        <Modal.Content>
          <Box alignItems="center" display="flex">
            <Button
              as="a"
              backgroundColor="transparent"
              border="none"
              href="https://github.com/WTTJ/welcome-ui"
              shape="circle"
              target="_blank"
            >
              <GithubIcon color="dark.900" size="xl" />
            </Button>
          </Box>
          <Box mb="lg" mt="lg">
            <ThemeSelect {...theme} />
          </Box>
          <Box mt="xl">
            <Navigation items={items} mobile />
          </Box>
        </Modal.Content>
      </Modal>
    </S.MobileMenu>
  )
}
