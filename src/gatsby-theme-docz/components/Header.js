/* eslint-disable react/prop-types */
import React from 'react'

import { Box } from '../../../../packages/Box'
import { Icon } from '../../../../packages/Icon'
import { Select } from '../../../../packages/Select'

import { Logo } from './Logo'
import { TagVersion } from './TagVersion'
import * as S from './Header.styled'

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
        <TagVersion />
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
    </div>
  )
}
