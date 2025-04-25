import * as React from 'react'

import { Field } from '@/Field'
import { PasswordInput } from '@/PasswordInput'

const Example = () => {
  return (
    <Field label="Password" required>
      <PasswordInput name="password" placeholder="Enter your password" />
    </Field>
  )
}

export default Example
