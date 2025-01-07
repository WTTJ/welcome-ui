import { Field, InputText } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <Field label="Your label" required>
      <InputText placeholder="Welcome" />
    </Field>
  )
}

export default Example
