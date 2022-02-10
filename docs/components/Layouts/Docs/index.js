/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/prop-types */
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
          borderTopColor="nude.200"
          mb="md"
          mt={50}
          mx={{ xs: 'md', md: 'xxl' }}
          pt="xxl"
        />
      </S.Content>
    </Box>
  )
}
