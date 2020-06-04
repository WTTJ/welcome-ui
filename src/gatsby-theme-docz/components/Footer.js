/* eslint-disable react/prop-types */
import React from 'react'

import { HeartIcon } from '../../../../icons/Heart'
import { Box } from '../../../../packages/Box'

import { LogoWttj } from './LogoWttj'
import * as S from './Footer.styled'

export const Footer = ({ themeWUI }) => {
  return (
    <S.Footer>
      Made with <HeartIcon color="primary.500" mx="xxs" /> by{' '}
      <Box
        alignItems="center"
        as="a"
        display="flex"
        href="https://www.welcometothejungle.com"
        rel="noopener"
        target="_blank"
      >
        <LogoWttj black={themeWUI !== 'dark'} />
      </Box>
    </S.Footer>
  )
}
