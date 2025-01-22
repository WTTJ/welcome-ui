import * as React from 'react'
import { PasswordInput } from 'welcome-ui/PasswordInput'
import { Field } from 'welcome-ui/Field'

const Example = () => {
  return (
    <Field label="Password" required>
      <PasswordInput name="password" placeholder="Enter your password" />
    </Field>
  )
}

export default Example
