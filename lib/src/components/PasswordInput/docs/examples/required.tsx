import { Field, PasswordInput } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <Field label="Password" required>
      <PasswordInput name="password" placeholder="Enter your password" />
    </Field>
  )
}

export default Example
