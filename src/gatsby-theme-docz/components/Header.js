/* eslint-disable react/prop-types */
import React from 'react'

import { Box } from '../../../../packages/Box'
// import { TagVersion } from '../../../../docz/TagVersion'

import { ThemeSelect } from './ThemeSelect'
import { Logo } from './Logo'
import * as S from './Header.styled'

// const { version } = require('../../../../package.json')

export const Header = ({ setTheme, value }) => {
  return (
    <div>
      <Box alignItems="flex-start" display="flex" justifyContent="space-between">
        <a
          alt="welcome to the jungle"
          href="https://www.welcometothejungle.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <S.Logo>
            <Logo />
          </S.Logo>
        </a>
        {/* <TagVersion name="welcome-ui" size="lg" variant="dark" version={version} /> */}
      </Box>
      <Box mb={40} mt={40}>
        <ThemeSelect setTheme={setTheme} value={value} />
      </Box>
    </div>
  )
}
