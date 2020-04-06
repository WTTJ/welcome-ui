/* eslint-disable react/jsx-max-depth */
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

  return (
    <S.MobileMenu {...rest}>
      <S.Logo>
        <LogoLong />
      </S.Logo>
      <Button as={Modal.Trigger} shape="circle" variant="secondary" {...modal}>
        <MenuIcon size="lg" />
      </Button>
      <Modal {...modal} ariaLabel="Navigation">
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
