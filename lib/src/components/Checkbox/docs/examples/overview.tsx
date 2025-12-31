import { Checkbox } from '@/components/Checkbox'

const Example = () => {
  return (
    <>
      <Checkbox
        name="default"
        onChange={value => alert(`Checkbox is now ${value ? 'checked' : 'unchecked'}`)}
      />
      <Checkbox checked name="not-checked" />
      <Checkbox indeterminate name="indeterminate" />
      <Checkbox disabled name="default-disabled" />
      <Checkbox checked disabled name="not-checked-disabled" />
    </>
  )
}

export default Example
