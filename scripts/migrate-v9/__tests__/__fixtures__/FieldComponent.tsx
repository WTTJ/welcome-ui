import { Field } from 'welcome-ui/Field'
import { InputText } from 'welcome-ui/InputText'
import { Label } from 'welcome-ui/Label'

const register = (name: string, options?: object) => {
  return { name, ...options }
}

export const FieldComponent = () => {
  return (
    <form>
      <Field error="my error message" label="Email" my="lg" required>
        <Label alignItems="center" mb="sm" required={false}></Label>
        <InputText
          autoFocus
          dataTestId="wa-forgot-input-email"
          name="email"
          {...register('email', {
            pattern: 'This field has invalid format',
            required: 'This field is required',
            value: /fish/,
          })}
        />
      </Field>
    </form>
  )
}
