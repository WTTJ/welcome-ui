import { Checkbox } from '@/Checkbox'
import { Field } from '@/Field'
import { InputText } from '@/InputText'

const Example = () => {
  return (
    <>
      <Field label="Label">
        <InputText placeholder="Placeholder" />
      </Field>
      <Field label="Label for a checkbox">
        <Checkbox />
      </Field>
    </>
  )
}

export default Example
