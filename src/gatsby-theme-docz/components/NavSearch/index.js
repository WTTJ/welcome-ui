import React, { useContext } from 'react'

import { Box, Icon, InputText, Select } from '../../../../../src'
import { ThemeContext } from '../../../../../docz/themeContext'
import { THEMES } from '../../../../../docz/themeValues'

export const NavSearch = props => {
  const themeContext = useContext(ThemeContext)
  return (
    <Box marginBottom="1.5rem">
      <Select
        name="theme"
        onChange={themeContext.handleChange}
        options={THEMES}
        placeholder="Choose theme (defaults to core theme)"
        required
        size="sm"
        value={themeContext.value}
      />
      <Box marginTop="0.5rem">
        <InputText {...props} icon={<Icon name="search" size="sm" />} size="sm" />
      </Box>
    </Box>
  )
}
