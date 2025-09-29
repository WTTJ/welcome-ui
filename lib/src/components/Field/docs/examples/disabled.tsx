import { Checkbox } from '@/components/Checkbox'
import { Field } from '@/components/Field'
import { InputText } from '@/components/InputText'

const Example = () => {
  return (
    <div className="flex flex-col gap-lg">
      <Field disabled label="Label">
        <InputText placeholder="Placeholder" />
      </Field>
      <Field disabled inline label="Label for a checkbox">
        <Checkbox />
      </Field>
    </div>
  )
}

export default Example
