import { RadioGroup } from '@/components/RadioGroup'

export const ITEMS = [
  { label: 'Bold', value: 'bold' },
  { label: 'Italic', value: 'italic' },
  { label: 'Strikethrough', value: 'strikethrough' },
  { label: 'Underline', value: 'underline' },
]

const Example = () => {
  return <RadioGroup hideLabel label="Basic Radio Group component" name="social" options={ITEMS} />
}

export default Example
