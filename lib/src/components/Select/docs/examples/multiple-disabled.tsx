import * as React from 'react'
import { useEffect } from 'react'

import { Select } from '@/components/Select'
import type { SelectProps } from '@/components/Select/types'

export const ITEMS = [
  { label: 'Bold', value: 'bold' },
  { label: 'Italic', value: 'italic' },
  { label: 'Strikethrough', value: 'strikethrough' },
  { label: 'Underline', value: 'underline' },
]

const Example = () => {
  const [value, setValue] = React.useState<SelectProps['value']>(['bold', 'italic'])
  const [isDisabled, setIsDisabled] = React.useState(false)

  const handleChange = (newValue: SelectProps['value']) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (Array.isArray(value) && value.length >= 3) {
      setIsDisabled(true)
      return
    }
    setIsDisabled(false)
  }, [value])

  return (
    <Select
      disabled={isDisabled}
      isMultiple
      name="welcome"
      onChange={handleChange}
      options={ITEMS}
      value={value}
    />
  )
}

export default Example
