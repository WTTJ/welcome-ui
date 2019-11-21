/* eslint-disable react/prop-types */
import React from 'react'

import { Box } from '../../../../src/components/Box'
import { Icon } from '../../../../src/components/Icon'
import { Tag } from '../../../../src/components/Tag'
import { Select } from '../../../../src/components/Select'

import { Logo } from './Logo'
import * as S from './Header.styled'

const { version } = require('../../../../package.json')

export const Header = ({ setTheme, value }) => {
  return (
    <S.Header>
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
          placeholder="Choose a theme"
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
