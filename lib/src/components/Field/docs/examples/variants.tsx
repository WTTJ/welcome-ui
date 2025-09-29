import { Checkbox } from '@/components/Checkbox'
import { Field } from '@/components/Field'
import { InputText } from '@/components/InputText'

const Example = () => {
  return (
    <div className="flex flex-col gap-lg">
      <Field error="An error" label="Label">
        <InputText placeholder="Placeholder" />
      </Field>
      <Field error="An error" inline label="Label for a checkbox">
        <Checkbox />
      </Field>
    </div>
  )
}

export default Example
