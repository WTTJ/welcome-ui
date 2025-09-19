import * as React from 'react'

import { Select } from '@/components/Select'
import type { SelectOption, SelectProps } from '@/components/Select/types'
import { Text } from '@/components/Text'
//TODO migrate WUI-187/tag
import { Tag } from '@old/Tag'

export const ITEMS: SelectOption[] = [
  { label: 'Bold', value: 'bold' },
  { label: 'Italic', value: 'italic' },
  { label: 'Strikethrough', value: 'strikethrough' },
  { label: 'Underline', value: 'underline' },
]

const Example = () => {
  const [value, setValue] = React.useState<SelectProps['value']>(['bold', 'italic'])

  const handleChange = (newValue: SelectProps['value']) => {
    setValue(newValue)
  }

  return (
    <Select
      isMultiple
      name="welcome"
      onChange={handleChange}
      options={ITEMS}
      renderMultiple={(values, handleRemove) => (
        <>
          {values.map(option => {
            return (
              <Tag
                key={option.value}
                mr="sm"
                mt="sm"
                onRemove={() => handleRemove(option.value as string)}
                size="sm"
              >
                <Text variant="sm">{option.label}</Text>
              </Tag>
            )
          })}
        </>
      )}
      value={value}
    />
  )
}

export default Example
