import * as React from 'react'

import { Select } from '@/components/Select'
import type { SelectProps } from '@/components/Select/types'
import { Tag } from '@/components/Tag'
import { Text } from '@/components/Text'

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
        <div className="nine:p-(--nine-spacing-xxs))">
          <div className="nine:flex nine:items-center nine:justify-between">
            <Text className="nine:ml-(--nine-spacing-sm) nine:font-medium" variant="sm">
              {label}
            </Text>
            <Tag>{options.length}</Tag>
          </div>
          {options.length === 0 && <Text variant="xs">No results found</Text>}
        </div>
      )}
      value={value}
    />
  )
}

export default Example
