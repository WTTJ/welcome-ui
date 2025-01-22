import * as React from 'react'
import { Select, SelectProps } from 'welcome-ui/Select'

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

  return <Select name="welcome" onChange={handleChange} options={ITEMS} value={value} />
}

export default Example
