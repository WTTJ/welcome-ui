import { Field } from '@/Field'
import { InputText } from '@/InputText'

const Example = () => {
  return (
    <Field label="Your label" required>
      <InputText placeholder="Welcome" />
    </Field>
  )
}

export default Example
