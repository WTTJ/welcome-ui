import { Checkbox } from '@old/Checkbox'
import { Field } from '@old/Field'
import { InputText } from '@old/InputText'

const Example = () => {
  return (
    <>
      <Field hint="A hint">
        <InputText placeholder="Placeholder" />
      </Field>
      <Field hint="A hint" label="Label for a checkbox">
        <Checkbox />
      </Field>
    </>
  )
}

export default Example
