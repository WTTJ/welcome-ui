import * as React from 'react'

import { Checkbox } from '@/components/Checkbox'
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
      allowUnselectFromList
      disableCloseOnSelect
      icon={<Icon name="link" />}
      isMultiple
      isSearchable
      name="welcome"
      onChange={handleChange}
      options={ITEMS}
      renderItem={(item: SelectOption, selected?: boolean) => (
        <div className="flex justify-between">
          {item.label}
          <div className="flex">
            <Checkbox checked={selected} type="checkbox" />
          </div>
        </div>
      )}
      value={value}
    />
  )
}

export default Example
