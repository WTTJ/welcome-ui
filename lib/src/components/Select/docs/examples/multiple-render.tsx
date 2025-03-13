import * as React from 'react'
import { Select, SelectOption, SelectProps } from '@/Select'
import { Tag } from '@/Tag'
import { Text } from '@/Text'

export const ITEMS: SelectOption[] = [
  { value: 'bold', label: 'Bold' },
  { value: 'italic', label: 'Italic' },
  { value: 'strikethrough', label: 'Strikethrough' },
  { value: 'underline', label: 'Underline' },
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
      renderMultiple={
        (values, handleRemove) => (
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
        )
        // eslint-disable-next-line react/jsx-curly-newline
      }
      value={value}
    />
  )
}

export default Example
