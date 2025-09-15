import { Checkbox } from '@old/Checkbox'
import { Field } from '@old/Field'
import { InputText } from '@old/InputText'

const Example = () => {
  return (
    <>
      <Field label="Label" required>
        <InputText placeholder="Placeholder" />
      </Field>
      <Field label="Label for a checkbox" required>
        <Checkbox />
      </Field>
    </>
  )
}

export default Example
