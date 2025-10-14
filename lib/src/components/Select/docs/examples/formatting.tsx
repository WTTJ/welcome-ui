import * as React from 'react'

import { Icon } from '@/components/Icon'
import { Select } from '@/components/Select'
import type { SelectOption, SelectProps } from '@/components/Select/types'

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
          <Icon className="mr-(--spacing-sm)" name="wttj" size="xs" />
          <span>{item.label}</span>
        </div>
      )}
      value={value}
    />
  )
}

export default Example
