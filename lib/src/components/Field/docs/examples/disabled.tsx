import { InputText } from '@/InputText'
import { Field } from '@/Field'
import { Checkbox } from '@/Checkbox'

const Example = () => {
  return (
    <>
      <Field disabled label="Label">
        <InputText placeholder="Placeholder" />
      </Field>
      <Field disabled label="Label for a checkbox">
        <Checkbox />
      </Field>
    </>
  )
}

export default Example
