import * as React from 'react'
import { Select, SelectProps } from '@welcome-ui/select'
import { WttjIcon } from '@welcome-ui/icons'

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
      icon={<WttjIcon color="dark-900" label="Welcome" />}
      maxW={300}
      name="welcome"
      onChange={handleChange}
      options={ITEMS}
      value={value}
      w="100%"
    />
  )
}

export default Example
