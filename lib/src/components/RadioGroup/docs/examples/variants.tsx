import { Field } from '@/components/Field'
import { RadioGroup } from '@/components/RadioGroup'

export const ITEMS = [
  { label: 'Bold', value: 'bold' },
  { label: 'Italic', value: 'italic' },
  { label: 'Strikethrough', value: 'strikethrough' },
  { label: 'Underline', value: 'underline' },
]

const Example = () => {
  return (
    <Field error="an error" label="Label">
      <RadioGroup
        className="flex-col"
        hideLabel
        label="Radio Group with error"
        name="social"
        options={ITEMS}
      />
    </Field>
  )
}

export default Example
