import { Field } from '@old/Field'
import { RadioGroup } from '@old/RadioGroup'

export const ITEMS = [
  { label: 'Bold', value: 'bold' },
  { label: 'Italic', value: 'italic' },
  { label: 'Strikethrough', value: 'strikethrough' },
  { label: 'Underline', value: 'underline' },
]

const Example = () => {
  return (
    <Field error="an error" label="Label">
      <RadioGroup name="social" options={ITEMS.slice(0, 5)} />
    </Field>
  )
}

export default Example
