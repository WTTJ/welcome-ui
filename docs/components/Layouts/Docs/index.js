/* eslint-disable react/jsx-max-depth */

import React from 'react'
import { Box } from '@welcome-ui/box'

import { ComponentsList } from '../../ComponentsList'
import { Footer } from '../../Footer'

import * as S from './styles'

export function DocsLayout({ children }) {
  return (
    <Box display="flex">
      <S.Navigation>
        <ComponentsList />
      </S.Navigation>
      <S.Content>
        {children}
        <Footer
          borderTop="1px solid"
          borderTopColor="nude-30"
          mb="md"
          mt="3xl"
          mx={{ xs: 'md', md: 'xl' }}
          pt="xl"
        />
      </S.Content>
    </Box>
  )
}
