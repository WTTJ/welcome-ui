import * as React from 'react'

import { PasswordInput } from '@/PasswordInput'
import { Field } from '@/Field'

const Example = () => {
  return (
    <Field label="Password" required>
      <PasswordInput name="password" placeholder="Enter your password" />
    </Field>
  )
}

export default Example
