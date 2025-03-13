import * as React from 'react'
import { Select, SelectProps } from '@/Select'
import { Box } from '@/Box'
import { AddIcon } from '@/Icons'
import { Text } from '@/Text'

export const ITEMS = [
  { value: 'bold', label: 'Bold' },
  { value: 'italic', label: 'Italic' },
  { value: 'strikethrough', label: 'Strikethrough' },
  { value: 'underline', label: 'Underline' },
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
