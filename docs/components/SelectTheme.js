import React from 'react'
import { Select } from '@welcome-ui/select'

import { useSetThemeContext, useThemeContext } from '../context/theme'

export const SelectTheme = props => {
  const theme = useThemeContext()
  const setTheme = useSetThemeContext()

  const handleSetTheme = theme => setTheme(theme)

  const options = [
    { value: 'core', label: 'Core Theme (default)' },
    { value: 'dark', label: 'Dark Core Theme' },
    { value: 'welcome', label: 'Welcome Theme' }
  ]

  return (
    <Select
      id="select-theme"
      onChange={handleSetTheme}
      options={options}
      size="sm"
      value={theme}
      {...props}
    >
      select
    </Select>
  )
}
