import { RadioGroup } from '@/components/RadioGroup'
import { RadioTab } from '@/components/RadioTab'

export const ITEMS = [
  { label: 'Bold', value: 'bold' },
  { label: 'Italic', value: 'italic' },
  { label: 'Strikethrough', value: 'strikethrough' },
  { label: 'Underline', value: 'underline' },
]

const Example = () => {
  return (
    <RadioGroup
      hideLabel
      label="RadioGroup component rendered as RadioTab"
      name="social"
      options={ITEMS}
      renderOption={RadioTab}
    />
  )
}

export default Example
