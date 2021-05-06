/* eslint-disable react/jsx-max-depth */
import React, { useEffect } from 'react'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { GithubIcon } from '@welcome-ui/icons.github'
import { MenuIcon } from '@welcome-ui/icons.menu'
import { SearchIcon } from '@welcome-ui/icons.search'
import { InputText } from '@welcome-ui/input-text'
import { Field } from '@welcome-ui/field'
import NextLink from 'next/link'
import { Modal, useModalState } from '@welcome-ui/modal'

import { useThemeContext } from '../context/theme'

import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { SelectTheme } from './SelectTheme'
import * as S from './Header.styled'

export const Header = () => {
  const modal = useModalState()
  const theme = useThemeContext()

  useEffect(() => {
    if (window?.docsearch) {
      window.docsearch({
        apiKey: '85801aa252bde17259c4a5a61c1e84db',
        indexName: 'welcome-ui',
        inputSelector: '#search-algolia'
      })
    }
  }, [])

  return (
    <S.Header>
      <Box
        alignItems="center"
        display="flex"
        h={{ xs: 1, md: 'auto' }}
        justifyContent="space-between"
        w={1}
      >
        <NextLink href="/" passHref>
          <Box alignItems="center" alt="Homepage" as="a" display="flex">
            <Logo h={{ xs: '2.3rem', md: '3.9rem' }} w={{ xs: '4rem', md: '6.75rem' }} />
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
            variant={theme === 'dark' ? 'secondary' : 'quaternary'}
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
      <Box display={{ xs: 'none', md: 'block' }} mt="xl" w={1}>
        <SelectTheme id="navigation" />
      </Box>
      <Box display={{ xs: 'none', md: 'block' }} mt="md" w={1}>
        <Field
          component={InputText}
          icon={<SearchIcon color="light.100" size="sm" />}
          isClearable
          name="search-algolia"
          placeholder="Search"
          size="sm"
        />
      </Box>
      <Box
        display={{ xs: 'none', md: 'block' }}
        h="calc(100% - 11rem)"
        mt="4xl"
        style={{ overflowY: 'auto' }}
      >
        <Navigation />
      </Box>
      <Modal {...modal} ariaLabel="navigation">
        <Modal.Content>
          <Box maxWidth="calc(100% - 1rem)" mb="xl">
            <SelectTheme id="modal" />
          </Box>
          <Navigation hideModal={modal.hide} />
        </Modal.Content>
      </Modal>
    </S.Header>
  )
}
