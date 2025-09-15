import * as React from 'react'

import type { SelectProps } from '@/Select'
import { Select } from '@/Select'

export const ITEMS = [
  { label: 'Bold', value: 'bold' },
  { label: 'Italic', value: 'italic' },
  { label: 'Strikethrough', value: 'strikethrough' },
  { label: 'Underline', value: 'underline' },
]

const Example = () => {
  const [value, setValue] = React.useState<SelectProps['value']>()

  const handleChange = (newValue: SelectProps['value']) => {
    setValue(newValue)
  }

  return (
    <Select isSearchable name="welcome" onChange={handleChange} options={ITEMS} value={value} />
  )
}

export default Example
