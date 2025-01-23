import * as React from 'react'

import { Select, SelectProps } from '@/Select'
import { WttjIcon } from '@/Icons'

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
