import { RadioGroup } from '@/components/RadioGroup'

export const ITEMS = [
  { hint: 'coco', label: 'Bold', value: 'bold' },
  { hint: 'coco', label: 'Italic', value: 'italic' },
  { hint: 'coco', label: 'Strikethrough', value: 'strikethrough' },
  { hint: 'cococolo', label: 'Underline', value: 'underline' },
]

const Example = () => {
  return <RadioGroup name="social" options={ITEMS} />
}

export default Example
