import * as React from 'react'
import { InputText } from '@welcome-ui/input-text'
import { Field } from '@welcome-ui/field'

const Example = () => {
  return (
    <Field label="Your label" required>
      <InputText placeholder="Welcome" />
    </Field>
  )
}

export default Example
