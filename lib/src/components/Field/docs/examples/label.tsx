import { Field } from '@/components/Field'
import { InputText } from '@/components/InputText'
//TODO: update when checkbox will be migrated
import { Checkbox } from '@old/Checkbox'

const Example = () => {
  return (
    <div className="flex flex-col gap-lg">
      <Field label="Label">
        <InputText placeholder="Placeholder" />
      </Field>
      <Field inline label="Label for a checkbox">
        <Checkbox />
      </Field>
    </div>
  )
}

export default Example
