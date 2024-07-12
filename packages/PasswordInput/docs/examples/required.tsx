import * as React from 'react'
import { PasswordInput } from '@welcome-ui/password-input'
import { Field } from '@welcome-ui/field'

const Example = () => {
  return (
    <Field label="Password" required>
      <PasswordInput name="password" placeholder="Enter your password" />
    </Field>
  )
}

export default Example
