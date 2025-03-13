import * as React from 'react'
import { Select, SelectProps } from '@/Select'
import { Box } from '@/Box'
import { Text } from '@/Text'
import { Tag } from '@/Tag'

export const GROUP_ITEMS = [
  {
    label: 'Group 1',
    options: [
      { value: 'bold', label: 'Bold' },
      { value: 'italic', label: 'Italic' },
    ],
  },
  {
    label: 'Group 2',
    options: [
      { value: 'strikethrough', label: 'Strikethrough' },
      { value: 'underline', label: 'Underline' },
      { value: 'heading', label: 'Heading' },
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
