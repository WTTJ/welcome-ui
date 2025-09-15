import { Checkbox } from '@old/Checkbox'
import { Field } from '@old/Field'
import { InputText } from '@old/InputText'

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
