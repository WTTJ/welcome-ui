import * as React from 'react'

import { WttjIcon } from '@/components/Icon'
import { Select } from '@/components/Select'
import type { SelectProps } from '@/components/Select/types'

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
    <Select
      icon={<WttjIcon color="neutral-90" />}
      name="welcome"
      onChange={handleChange}
      options={ITEMS}
      value={value}
    />
  )
}

export default Example
