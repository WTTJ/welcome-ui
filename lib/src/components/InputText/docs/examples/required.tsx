import { InputText } from '@/InputText'
import { Field } from '@/Field'

const Example = () => {
  return (
    <Field label="Your label" required>
      <InputText placeholder="Welcome" />
    </Field>
  )
}

export default Example
