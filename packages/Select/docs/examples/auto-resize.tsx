import * as React from 'react'
import { Select, SelectProps } from '@welcome-ui/select'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'

export const ITEMS = [
  { value: 'bold', label: 'Bold' },
  { value: 'italic', label: 'Italic' },
  { value: 'strikethrough', label: 'Strikethrough' },
  { value: 'underline', label: 'Underline' },
]

const Example = () => {
  const [value, setValue] = React.useState<SelectProps['value']>('strikethrough')

  const handleChange = (newValue: SelectProps['value']) => {
    setValue(newValue)
  }

  return (
    <Box alignItems="center" display="flex" gap="lg">
      <Text>Value: </Text>
      <Select autoResize name="welcome" onChange={handleChange} options={ITEMS} value={value} />
    </Box>
  )
}

export default Example
