import { Select, SelectOption, SelectProps, WttjIcon } from 'welcome-ui'
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
      name="welcome"
      onChange={handleChange}
      options={ITEMS}
      renderItem={(item: SelectOption) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <WttjIcon mr="sm" size="xs" />
          <span>{item.label}</span>
        </div>
      )}
      value={value}
    />
  )
}

export default Example
