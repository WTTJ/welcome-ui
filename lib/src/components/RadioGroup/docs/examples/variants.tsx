import * as React from 'react'
import { RadioGroup } from 'welcome-ui/RadioGroup'
import { Field } from 'welcome-ui/Field'

export const ITEMS = [
  { value: 'bold', label: 'Bold' },
  { value: 'italic', label: 'Italic' },
  { value: 'strikethrough', label: 'Strikethrough' },
  { value: 'underline', label: 'Underline' },
]

const Example = () => {
  return (
    <Field error="an error" label="Label">
      <RadioGroup name="social" options={ITEMS.slice(0, 5)} />
    </Field>
  )
}

export default Example
