/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'docz'

import { Box } from '../../components/Box'
import { Icon } from '../../components/Icon'
import { Tag } from '../../components/Tag'
import { Select } from '../../components/Select'

import { Logo } from './Logo'
import * as S from './Header.styled'

const { version } = require('../../../package.json')

export const Header = ({ setTheme, value }) => {
  return (
    <S.Header>
      <Box alignItems="flex-start" display="flex" justifyContent="space-between">
        <Link to="/">
          <S.Logo>
            <Logo />
          </S.Logo>
        </Link>
        <Tag size="lg" variant="dark">{`v${version}`}</Tag>
      </Box>
      <Box mb={40} mt={40}>
        <Select
          icon={<Icon name="bulb" />}
          name="theme"
          onChange={setTheme}
          options={[
            { value: 'welcomekit', label: 'WelcomeKit Theme' },
            { value: 'welcome', label: 'WelcomeToTheJungle Theme' },
            { value: 'core', label: 'Core Theme (default)' }
          ]}
          size="sm"
          value={value}
        />
      </Box>
      {/* <Box>
        <InputText name="search_wui" placeholder="Search..." size="sm" />
      </Box> */}
    </S.Header>
  )
}
