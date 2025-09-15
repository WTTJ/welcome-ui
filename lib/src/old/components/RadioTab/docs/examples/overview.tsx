import { RadioGroup } from '@old/RadioGroup'
import { RadioTab } from '@old/RadioTab'

export const ITEMS = [
  { label: 'Bold', value: 'bold' },
  { label: 'Italic', value: 'italic' },
  { label: 'Strikethrough', value: 'strikethrough' },
  { label: 'Underline', value: 'underline' },
]

const Example = () => {
  return <RadioGroup name="social" options={ITEMS.slice(0, 5)} renderOption={RadioTab} />
}

export default Example
