/* eslint-disable react/jsx-max-depth */
import React from 'react'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { GithubIcon } from '@welcome-ui/icons.github'
import { MenuIcon } from '@welcome-ui/icons.menu'
import NextLink from 'next/link'
import { Modal, useModalState } from '@welcome-ui/modal'

import { Logo } from './Logo'
import { Navigation } from './Navigation'

export const Header = () => {
  const modal = useModalState()

  return (
    <Box
      as="header"
      backgroundColor="dark.700"
      fontSize="body2"
      height={{ xs: 60, md: '100vh' }}
      left="0"
      maxWidth={{ md: 270 }}
      position="fixed"
      px={{ xs: 'md', md: 'xxl' }}
      py={{ md: 'xl' }}
      top="0"
      width={1}
      zIndex={1}
    >
      <Box
        alignItems="center"
        display="flex"
        height={{ xs: 1, md: 'auto' }}
        justifyContent="space-between"
        w={1}
      >
        <NextLink href="/" passHref>
          <Box alignItems="center" alt="Homepage" as="a" display="flex">
            <Logo height={{ xs: '2.3rem', md: '3.9rem' }} width={{ xs: '4rem', md: '6.75rem' }} />
          </Box>
        </NextLink>
        <Box alignItems={{ xs: 'center', md: 'flex-start' }} display="flex">
          <Button
            alt="welcome to the jungle"
            as="a"
            borderRadius={100}
            href="https://github.com/WTTJ/welcome-ui"
            rel="noopener noreferrer"
            size="sm"
            target="_blank"
            variant="quaternary"
          >
            <GithubIcon size="lg" />
            <span>Source</span>
          </Button>
          <Modal.Trigger
            {...modal}
            as={Button}
            display={{ md: 'none' }}
            ml="sm"
            shape="circle"
            size="sm"
          >
            <MenuIcon />
          </Modal.Trigger>
        </Box>
      </Box>
      <Box
        display={{ xs: 'none', md: 'block' }}
        height="calc(100% - 6.25rem)"
        mt="xl"
        style={{ overflowY: 'auto' }}
      >
        <Navigation />
      </Box>
      <Modal {...modal} ariaLabel="navigation">
        <Modal.Content>
          <Navigation color="dark.900" hideModal={modal.hide} />
        </Modal.Content>
      </Modal>
    </Box>
  )
}
