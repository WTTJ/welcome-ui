import { Checkbox } from '@/components/Checkbox'
import { Field } from '@/components/Field'
import { InputText } from '@/components/InputText'

const Example = () => {
  return (
    <div className="nine:flex nine:flex-col nine:gap-lg">
      <Field label="Label" required>
        <InputText placeholder="Placeholder" />
      </Field>
      <Field inline label="Label for a checkbox" required>
        <Checkbox />
      </Field>
    </div>
  )
}

export default Example
