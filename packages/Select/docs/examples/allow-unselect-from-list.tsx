import * as React from 'react'
import { Option, Select, SelectProps } from '@welcome-ui/select'
import { LinkIcon } from '@welcome-ui/icons'
import { Box } from '@welcome-ui/box'
import { Checkbox } from '@welcome-ui/checkbox'

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
      allowUnselectFromList
      disableCloseOnSelect
      icon={<LinkIcon color="dark-900" name="Social networks" />}
      isMultiple
      isSearchable
      name="welcome"
      onChange={handleChange}
      options={ITEMS}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      renderItem={(item: Option, selected?: boolean) => (
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
