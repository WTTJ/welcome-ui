import { InputText } from '@/InputText'
import { Field } from '@/Field'
import { Checkbox } from '@/Checkbox'

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
