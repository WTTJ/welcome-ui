
import { InputText } from '@/InputText'
import { Field } from '@/Field'
import { Checkbox } from '@/Checkbox'

const Example = () => {
  return (
    <>
      <Field error="An error" label="Label">
        <InputText placeholder="Placeholder" />
      </Field>
      <Field error="An error" label="Label for a checkbox">
        <Checkbox />
      </Field>
    </>
  )
}

export default Example
