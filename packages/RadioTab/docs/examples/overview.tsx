import * as React from 'react'
import { RadioGroup } from '@welcome-ui/radio-group'
import { RadioTab } from '@welcome-ui/radio-tab'

export const ITEMS = [
  { value: 'bold', label: 'Bold' },
  { value: 'italic', label: 'Italic' },
  { value: 'strikethrough', label: 'Strikethrough' },
  { value: 'underline', label: 'Underline' },
]

const Example = () => {
  return <RadioGroup name="social" options={ITEMS.slice(0, 5)} renderOption={RadioTab} />
}

export default Example
