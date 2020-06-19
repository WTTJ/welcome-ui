/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'docz'

import { Modal, useModalState } from '../../../../packages/Modal'
import { Box } from '../../../../packages/Box'
import { Button } from '../../../../packages/Button'
import { MenuIcon } from '../../../../icons/Menu'
import { GithubIcon } from '../../../../icons/Github'

import { Navigation } from './Navigation'
import { Logo } from './Logo'
import { ThemeSelect } from './ThemeSelect'
import * as S from './MobileMenu.styled'

export const MobileMenu = ({ items, theme, ...rest }) => {
  const modal = useModalState()

  return (
    <S.MobileMenu {...rest}>
      <S.Logo as={Link} to="/">
        <Logo />
      </S.Logo>
      <Box>
        <Button
          as="a"
          borderRadius="50px"
          href="https://github.com/WTTJ/welcome-ui"
          mr="xs"
          rel="noopener"
          size="sm"
        >
          <GithubIcon size="lg" />
          <span>Source</span>
        </Button>
        <Button as={Modal.Trigger} shape="circle" size="sm" variant="quaternary" {...modal}>
          <MenuIcon size="lg" />
        </Button>
      </Box>
      <Modal {...modal} ariaLabel="Navigation">
        <Modal.Content>
          <Box maxWidth="80%" mb="lg">
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
