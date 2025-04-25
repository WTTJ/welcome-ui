import * as React from 'react'

import { Box } from '@/Box'
import type { SelectProps } from '@/Select'
import { Select } from '@/Select'
import { Tag } from '@/Tag'
import { Text } from '@/Text'

export const GROUP_ITEMS = [
  {
    label: 'Group 1',
    options: [
      { label: 'Bold', value: 'bold' },
      { label: 'Italic', value: 'italic' },
    ],
  },
  {
    label: 'Group 2',
    options: [
      { label: 'Strikethrough', value: 'strikethrough' },
      { label: 'Underline', value: 'underline' },
      { label: 'Heading', value: 'heading' },
    ],
  },
]

const Example = () => {
  const [value, setValue] = React.useState<SelectProps['value']>()

  const handleChange = (newValue: SelectProps['value']) => {
    setValue(newValue)
  }

  return (
    <Select
      groupsEnabled
      name="welcome"
      onChange={handleChange}
      options={GROUP_ITEMS}
      renderGroupHeader={({ label, options }) => (
        <Box p="xxs">
          <Box alignItems="center" display="flex" justifyContent="space-between">
            <Text m="0" variant="sm">
              {label}
            </Text>
            <Tag>{options.length}</Tag>
          </Box>
          {options.length === 0 && <Text variant="xs">No results found</Text>}
        </Box>
      )}
      value={value}
    />
  )
}

export default Example
