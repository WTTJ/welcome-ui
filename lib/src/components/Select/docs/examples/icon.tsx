import { Select, SelectProps } from 'welcome-ui'
import * as React from 'react'
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
      icon={<WttjIcon color="neutral-90" label="Welcome" />}
      name="welcome"
      onChange={handleChange}
      options={ITEMS}
      value={value}
    />
  )
}

export default Example
