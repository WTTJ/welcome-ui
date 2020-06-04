/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'docz'

import { Box } from '../../../../packages/Box'

import { ThemeSelect } from './ThemeSelect'
import { Logo } from './Logo'
import * as S from './Header.styled'

export const Header = ({ setTheme, value }) => {
  return (
    <div>
      <Box alignItems="flex-start" display="flex" justifyContent="space-between">
        <S.Logo as={Link} to="/">
          <Logo />
        </S.Logo>
      </Box>
      <Box mb={40} mt={40}>
        <ThemeSelect setTheme={setTheme} value={value} />
      </Box>
    </div>
  )
}
