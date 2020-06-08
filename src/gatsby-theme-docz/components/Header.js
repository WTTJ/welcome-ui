/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'docz'

import { Box } from '../../../../packages/Box'

import { ThemeSelect } from './ThemeSelect'
import { Logo } from './Logo'
import * as S from './Header.styled'

export const Header = ({ setTheme, value }) => {
  return (
    <>
      <S.Logo as={Link} to="/">
        <Logo />
      </S.Logo>
      <Box mb={40} mt={40}>
        <ThemeSelect setTheme={setTheme} value={value} />
      </Box>
    </>
  )
}
