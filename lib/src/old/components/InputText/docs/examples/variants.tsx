import { Field } from '@old/Field'
import { InputText } from '@old/InputText'

const Example = () => {
  return (
    <>
      <Field hint="Your hint" label="Your label">
        <InputText placeholder="Welcome" />
      </Field>
      <Field hint="Your hint" label="Your label" warning="Warning">
        <InputText placeholder="Welcome" />
      </Field>
      <Field error="Error" hint="Your hint" label="Your label">
        <InputText placeholder="Welcome" />
      </Field>
      <Field hint="Your hint" label="Your label" success="Success">
        <InputText placeholder="Welcome" />
      </Field>
    </>
  )
}

export default Example
