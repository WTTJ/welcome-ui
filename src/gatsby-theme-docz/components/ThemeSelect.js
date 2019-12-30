/* eslint-disable react/prop-types */
import React from 'react'

import { BulbIcon } from '../../../../icons/Bulb'
import { Select } from '../../../../packages/Select'

export const ThemeSelect = ({ setTheme, value }) => (
  <Select
    icon={<BulbIcon />}
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
)
