import { RadioGroup } from '@/components/RadioGroup'

export const ITEMS = [
  { label: 'Bold', value: 'bold' },
  {
    hint: 'Lorem ipsum dolor',
    label: 'Italic',
    value: 'italic',
  },
  { label: 'Strikethrough', value: 'strikethrough' },
  { label: 'Underline', value: 'underline' },
]

const Example = () => {
  return <RadioGroup name="social" options={ITEMS} />
}

export default Example
