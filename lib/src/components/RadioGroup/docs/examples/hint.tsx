import { RadioGroup } from 'welcome-ui'
import * as React from 'react'

export const ITEMS = [
  { value: 'bold', label: 'Bold' },
  {
    value: 'italic',
    label: 'Italic',
    hint: 'Lorem ipsum dolor',
  },
  { value: 'strikethrough', label: 'Strikethrough' },
  { value: 'underline', label: 'Underline' },
]

const Example = () => {
  return <RadioGroup name="social" options={ITEMS.slice(0, 5)} />
}

export default Example
