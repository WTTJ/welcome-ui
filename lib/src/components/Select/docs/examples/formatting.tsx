import * as React from 'react'

import { WttjIcon } from '@/Icons'
import type { SelectOption, SelectProps } from '@/Select'
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
    <Select
      name="welcome"
      onChange={handleChange}
      options={ITEMS}
      renderItem={(item: SelectOption) => (
        <div style={{ alignItems: 'center', display: 'flex' }}>
          <WttjIcon mr="sm" size="xs" />
          <span>{item.label}</span>
        </div>
      )}
      value={value}
    />
  )
}

export default Example
