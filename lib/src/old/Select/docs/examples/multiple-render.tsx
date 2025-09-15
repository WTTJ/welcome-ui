import * as React from 'react'

import type { SelectOption, SelectProps } from '@/Select'
import { Select } from '@/Select'
import { Tag } from '@/Tag'
import { Text } from '@/Text'

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
                <Text m="0" variant="sm">
                  {option.label}
                </Text>
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
