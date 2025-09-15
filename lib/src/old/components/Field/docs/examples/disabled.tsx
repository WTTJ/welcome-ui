import { Checkbox } from '@old/Checkbox'
import { Field } from '@old/Field'
import { InputText } from '@old/InputText'

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
