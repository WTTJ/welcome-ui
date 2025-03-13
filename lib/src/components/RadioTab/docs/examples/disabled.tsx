
import { RadioGroup } from '@/RadioGroup'
import { RadioTab } from '@/RadioTab'

export const ITEMS = [
  { value: 'bold', label: 'Bold' },
  { value: 'italic', label: 'Italic' },
  { value: 'strikethrough', label: 'Strikethrough' },
  { value: 'underline', label: 'Underline' },
]

const Example = () => {
  return <RadioGroup disabled name="social" options={ITEMS.slice(0, 5)} renderOption={RadioTab} />
}

export default Example
