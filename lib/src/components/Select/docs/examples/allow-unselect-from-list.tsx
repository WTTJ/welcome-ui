import { Box, Checkbox, LinkIcon, Select, SelectOption, SelectProps } from 'welcome-ui'
import * as React from 'react'

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
      icon={<LinkIcon color="neutral-90" label="Social networks" />}
      isMultiple
      isSearchable
      name="welcome"
      onChange={handleChange}
      options={ITEMS}
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
