import { Field } from '@old/Field'
import { PasswordInput } from '@old/PasswordInput'

const Example = () => {
  return (
    <Field label="Password" required>
      <PasswordInput name="password" placeholder="Enter your password" />
    </Field>
  )
}

export default Example
