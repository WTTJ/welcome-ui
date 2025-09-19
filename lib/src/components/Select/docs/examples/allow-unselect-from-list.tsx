import * as React from 'react'

import { Select } from '@/components/Select'
import type { SelectOption, SelectProps } from '@/components/Select/types'
import { Box } from '@old/Box'
import { Checkbox } from '@old/Checkbox'
import { LinkIcon } from '@old/Icons'

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
      icon={<LinkIcon color="neutral-90" title="Social networks" />}
      isMultiple
      isSearchable
      name="welcome"
      onChange={handleChange}
      options={ITEMS}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      renderItem={(item: SelectOption, selected?: boolean) => (
        <Box display="flex" justifyContent="space-between">
          {item.label}
          <Box>
            <Checkbox checked={selected} type="checkbox" />
          </Box>
        </Box>
      )}
      value={value}
    />
  )
}

export default Example
