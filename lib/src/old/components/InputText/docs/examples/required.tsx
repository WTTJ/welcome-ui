import { Field } from '@old/Field'
import { InputText } from '@old/InputText'

const Example = () => {
  return (
    <Field label="Your label" required>
      <InputText placeholder="Welcome" />
    </Field>
  )
}

export default Example
