import * as React from 'react'

import { Icon } from '@/components/Icon'
import { Select } from '@/components/Select'
import type { SelectProps } from '@/components/Select/types'
import { Text } from '@/components/Text'

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
      isCreatable
      name="welcome"
      onChange={handleChange}
      options={ITEMS}
      renderCreateItem={value => {
        return (
          <div className="flex items-center">
            <Icon name="plus" className="mr-(--spacing-sm)" size="sm" />
            <Text as="span" variant="sm">
              Add <b>{value.toString()}</b> as a new option
            </Text>
          </div>
        )
      }}
      value={value}
    />
  )
}

export default Example
