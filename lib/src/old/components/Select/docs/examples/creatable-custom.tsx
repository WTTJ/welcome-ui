import * as React from 'react'

import { Box } from '@old/Box'
import { AddIcon } from '@old/Icons'
import type { SelectProps } from '@old/Select'
import { Select } from '@old/Select'
import { Text } from '@old/Text'

export const ITEMS = [
  { label: 'Bold', value: 'bold' },
  { label: 'Italic', value: 'italic' },
  { label: 'Strikethrough', value: 'strikethrough' },
  { label: 'Underline', value: 'underline' },
]

const Example = () => {
  const [value, setValue] = React.useState<SelectProps['value']>()

  const handleChange = (newValue: SelectProps['value']) => {
    setValue(newValue)
  }

  return (
    <Select
      isCreatable
      name="welcome"
      onChange={handleChange}
      options={ITEMS}
      renderCreateItem={value => {
        return (
          <Box alignItems="center" display="flex">
            <AddIcon mr="sm" size="sm" />
            <Text as="span" variant="sm">
              Add <b>{value.toString()}</b> as a new option
            </Text>
          </Box>
        )
      }}
      value={value}
    />
  )
}

export default Example
