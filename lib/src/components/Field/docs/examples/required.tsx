import { Field } from '@/components/Field'
import { InputText } from '@/components/InputText'
//TODO: update when checkbox will be migrated
import { Checkbox } from '@old/Checkbox'

const Example = () => {
  return (
    <div className="flex flex-col gap-lg">
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
